const functions = require('../functions.js')
    

module.exports = {
    name: 'discord',
    description: 'Gives a link to the MyDogsBot Discord Server',
    usage: 'discord',
    async execute(message, args, splitArgs) {
        functions.serverAd(message, false)
    }
}
