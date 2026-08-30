import consola from "consola"
import { exec } from "child_process"

export const openBrowser = (url: string): void => {
  let command: string

  switch (process.platform) {
    case "darwin":
      command = "open"
      break
    case "win32":
      command = "start"
      break
    default:
      command = "xdg-open"
      break
  }

  exec(`${command} ${url}`, (error) => {
    if (error) consola.error(new Error(`Browser open error! Ccommand ${command} ${url}. ${error}`))
  })
}
