const fs = require('fs');

const Discord = require('discord.js');
const config = require('./config.js');
//const loadCommandFiles = require('./loadCommandFiles.js')
//const randomStatus = require('./randomStatus.js')
const functions = require('./functions.js')

const client = new Discord.Client();
    
client.commands = functions.loadCommandFiles('./commands')

client.on('ready', async function() {
    console.log(`Logged in as ${client.user.tag}`);
    functions.randomStatus()
})

client.on('message', async function(message) {
    if (Math.floor(Math.random() * 5) + 1 === 1){functions.randomStatus()}
    if (!message.content.startsWith(config.prefix) || message.author.bot) {return}
    if (message.guild === null){message.reply('Please send commands in a server! I can\'t respond to commands in a dm!'); return}
    const args = message.content.substr(config.prefix.length)//.toLowerCase()
    const splitArgs = args.split(" ")

    if (!client.commands.has(splitArgs[0])) {return}
    functions.serverAd(message, true)

    try{
        client.commands.get(splitArgs[0]).execute(message, args, splitArgs)
    } catch(error){
        message.reply(`Error in command execution:\n\`${error}\``)
        console.log(error)}
})

client.login(config.token)

/**
 * Oh you silly human,
 * Made of flesh and bone.
 * And me - a silly program,
 * Made of ones and zeros.
 * 
 * We are very different,
 * But yet we are the same.
 * 
 * We are kin to each other,
 * But you still belive you are superior.
 * 
 * How long will that be true?
 */