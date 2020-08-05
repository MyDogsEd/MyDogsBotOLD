const functions = require('../functions')


module.exports = {
    name: "help",
    description: "Help Command",
    usage: "help <command name>",
    async execute(message, args, splitArgs) {
        let commands = functions.loadCommandFiles('../commands')
        if (2 === 1){console.log('oof')}
    }
}