import fs from "fs"
import path from "path"
import consola from "consola"
import { fileURLToPath } from "url";

consola.start("Generating sea-config.json...")

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const clientDistDirectory = path.join(__dirname, 'client', 'dist')
const configOutput = path.join(__dirname, 'sea-config.json')

const config = {
  "$schema": "./sea-config.schema.json",
  "mainFormat": "module",
  "useCodeCache": true,
  "main": "./server/dist/server.js",
  "output": "./dist/percent-player",
  "disableExperimentalSEAWarning": true,
  "assets": {} as Record<string, string>
};

const getFiles = (directory: string, prefix = '') => {
  const entries = fs.readdirSync(directory, { withFileTypes: true })

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name)
    const assetKey = prefix ? `${prefix}/${entry.name}` : entry.name

    if (entry.isDirectory()) {
      getFiles(fullPath, assetKey)
    } else {
      config.assets[assetKey] = `./client/dist/${assetKey}`
    }
  }
}

getFiles(clientDistDirectory)

fs.writeFileSync(configOutput, JSON.stringify(config, null, 2))
consola.success('sea-config.json generated!')
