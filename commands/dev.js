const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('../config.js')
module.exports = {
    name: 'dev',
    description: 'Discord dev info, fresh from the farm!',
    usage: "dev",
    async execute(message, args, splitArgs){
        if (client.user === null){await client.login(config.token)}
        var infoMember;
        if (message.mentions.members.first() !== undefined){infoMember = message.mentions.members.first()}
        else{infoMember = message.member}
        const embed = new Discord.MessageEmbed()
            .setColor('#639fff')
            .setTitle('Dev Info for ' + infoMember.user.tag)
            .setURL('https://mydogsed.dev')
            .setAuthor('MyDogsBot - Dev Info', client.user.avatarURL())
            .setFooter('Requested by ' + message.author.tag, message.author.avatarURL())
            .setDescription('Discord dev info, fresh from the farm!')
            .setTimestamp()
            .addFields(
                {name: 'Snowflake', value: infoMember.id}
            )
            .addField("Avatar URL", infoMember.user.avatarURL())
            .setImage(infoMember.user.avatarURL())
        message.channel.send(embed)
    }
}