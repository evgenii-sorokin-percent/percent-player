import express from "express";
import { env } from "./config/index.js";
import { getAsset, isSea } from "node:sea";
import path from "path";
import consola from "consola";
import { fileURLToPath } from "url";
import { openBrowser } from "./utils/index.js";
import getPort from "get-port";

consola.start("Initializing server...");

const app = express();
const isProduction = env.NODE_ENV === "production";

if (isSea()) {
  app.get("/", (_request, response) => response.type("html").send(getAsset("index.html", "utf8")));

  app.get(/.*/, (request, response) => {
    try {
      const assetKey = request.path.slice(1) || "index.html";
      const data = getAsset(assetKey);

      if (assetKey.endsWith(".js")) response.type("application/javascript");
      else if (assetKey.endsWith(".css")) response.type("text/css");
      else if (assetKey.endsWith(".svg")) response.type("image/svg+xml");
      else if (assetKey.endsWith(".png")) response.type("image/png");

      response.send(Buffer.from(data));
    } catch {
      response.status(404).send("Not found");
    }
  });
} else if (isProduction) {
  const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), "../../client/dist");

  app.use(express.static(dist));
  app.get(/.*/, (_request, response) => {
    response.sendFile(path.join(dist, "index.html"));
  });
}

const start = async () => {
  const avaiblePort = await getPort({ port: env.PORT });

  if (env.PORT !== avaiblePort)
    consola.warn("The default port was busy. A random free port has been selected");

  app.listen(avaiblePort, () => {
    consola.success(`Server start on port: http://localhost:${avaiblePort}`);
  });

  openBrowser(`http://localhost:${avaiblePort}`);
};

start();
