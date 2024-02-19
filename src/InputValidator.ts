import chalk from "chalk"

export function validateCreateProductInput(options: createProductOptions) {
    if (!options.color || !options.description) {
        console.warn(chalk.redBright("Color and Description are required."))
        killAndExit()
    }

}

function killAndExit() {
    console.error(chalk.red("Input not valid! Exiting."))
    process.exit()
}

export type createProductOptions = {color: String; description: String}
