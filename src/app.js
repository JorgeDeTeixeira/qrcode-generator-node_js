import prompt from "prompt";

import mainPrompt from "../src/prompts/prompt-main.js";

async function main() {
  prompt.get(mainPrompt, async (err, choice) => {
    if (choice.select == 1) {
      console.log("Opção 1");
    } else if (choice.select == 2) {
      console.log("Opção 2");
    }
  });
}

main();
