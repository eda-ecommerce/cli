import chalk from "chalk"

export function validateCreateProductInput(options: createProductOptions): createProductOptions {
    if (!options.color || !options.description) {
        console.warn(chalk.redBright("Color and Description are required."))
        killAndExit()
    }

    return {
        "color": options.color,
        "description": options.description
    }
}

function killAndExit() {
    console.error(chalk.red("Input not valid! Exiting."))
    process.exit()
}

export type createProductOptions = {color: String; description: String}
