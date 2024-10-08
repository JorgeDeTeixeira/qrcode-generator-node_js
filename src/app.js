import prompt from "prompt";
import chalk from "chalk";

import mainPrompt from "../src/prompts/prompt-main.js";
import createQRCode from "./services/qr-code/create.js";

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {
    if (choice.select == 1) {
      await createQRCode();
    } else if (choice.select == 2) {
      console.log(chalk.yellowBright.bold("Opção 2"));
    }
  });
}

main();
