const fs = require('fs')

const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.js')
const { resolve } = require('path')


const randomStatus = async function(){
    console.log('[RandomStatus] Random Status Requested')
    if(client.user === null){
        console.log('[RandomStatus] Client not logged in! Logging in...')
        await client.login(config.token)
        console.log('[RandomStatus] Logged in!')
    }
    console.log('[RandomStatus] Loading ./randomStatusList.json')
    const statusJSON = require('./randomStatusList.json')
    const randomStatus = statusJSON[Math.floor(Math.random() * 7) + 1]

    console.log('[RandomStatus] Setting Status...')
    client.user.setPresence({
        activity:{
            type: randomStatus[0],
            name: randomStatus[1]
        }
    }).catch(console.error)
    console.log('[RandomStatus] Status Set!')
}

let loadCommandFiles = function(dir) {
    console.log('[CommandFileLoader] File load requested.')

    client.commands = null;
    let commandFiles = null;
    client.commands = new Discord.Collection();

    console.log(`[CommandFileLoader] Reading directory ${dir}...`)
    commandFiles = fs.readdirSync(dir).filter(async function(file) {file.endsWith('.js')})

    console.log(`[CommandFileLoader] Begining file load...`)
    for (const file of commandFiles){
        const command = require(dir + '/' + file);
        console.log(`[CommandFileLoader] File ${file} loaded!`)
        client.commands.set(command.name, command)}
    console.log('[CommandFileLoader] All files loaded!')
    return client.commands
}

let isDev = async function(usr) {
    if (client.user === null){await client.login(config.token)}
    var usrInGuild = client.guilds.cache.get(config.homeGuild).members.cache.get(usr.id)
    if(usrInGuild === null){
        return false
    } else if(!usrInGuild.roles.cache.has('734517422576631828')){
        return false
    } else{
        return true
    }
}

let serverAd = async function(message, adValue) {
    if(client.user === null){await client.login(config.token)}

    let homeGuild = await client.guilds.cache.get(config.homeGuild)
    var messageLast = await client.channels.cache.get('734518828264063058').messages.fetch({limit: 1}) //dont touch this or the other line. IDK either
    //console.log(messageLast.array(1)[0])
    const adEmbed = new Discord.MessageEmbed()
        .setColor('#639fff')
        .setFooter('MyDogsBot Discord', homeGuild.iconURL())
        .setThumbnail(homeGuild.iconURL())
        .setTitle('MyDogsBot Discord')
        .setURL('https://discord.gg/udhy7kH')
        .setDescription('We have memes! Try it Today!')
        .addField('Latest message in ``#general-stuff``', '[' + messageLast.array(1)[0].author.username + '] ' + messageLast.array(1)[0].content) // Fucking god damnit this legit took me 45 min to figure out how to get the message content. REEEEEEEEEEEEEEEEEEEE
    //message.channel.send(adEmbed)
    if(adValue === true) {
        if(!Math.floor(Math.random() * 10) + 1 === 1){return}
        adEmbed.setTitle('MyDogsBot Discord Ad').setFooter('This message will auto-delete in 60 secconds.')
        message.channel.send(adEmbed).then(async function(sent){
            sent.delete({timeout: 60000})
        })
    } else{
        message.channel.send(adEmbed)
    }
}

let sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let debugLog = function(message, debugVar) {
    if(debugVar === true) {
        console.log(message)
    }
}
exports.loadCommandFiles = loadCommandFiles
exports.randomStatus = randomStatus
exports.isDev = isDev
exports.serverAd = serverAd
exports.sleep = sleep
exports.debugLog = debugLog
