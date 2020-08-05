const fs = require('fs')
const Discord = require('discord.js')
const client = new Discord.Client();

let loadCommandFiles = function(dir) {

    client.commands = null;
    let commandFiles = null;

    client.commands = new Discord.Collection();
    commandFiles = fs.readdirSync(dir).filter(async function(file) {file.endsWith('.js')})

    for (const file of commandFiles){
        const command = require(dir + '/' + file);
        console.log(`file ${file} loaded`)
        client.commands.set(command.name, command)}
    
        return client.commands
}
exports.loadCommandFiles = loadCommandFiles