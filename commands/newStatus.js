const config = require('../config.js')
const Discord = require('discord.js')
const client = new Discord.Client()
const functions = require('../functions.js')

module.exports = {
    name: "newstatus",
    description: "Makes the bot use a new playing status. - For Devs Only!",
    async execute(message, args, splitArgs) {
        console.log('[RandomStatusCommand] RandomStatus Command Issued')
        console.log('[RandomStatusCommand] Requesting Permissions Check')
        message.reply('Setting new status!')
        if(!functions.isDev(message.author)){
            console.log('[RandomStatusCommand] Permissons Check Failed.')
            console.log('There will be no status change today. Not on my watch.')
            message.reply('This command is for dev\'s only!')
        }
        console.log('[RandomStatusCommand] Permissions Check Passed. Passing to randomstatus function.')
        functions.randomStatus()
    }
}

/** TODO:Add new statuses with this command
 */