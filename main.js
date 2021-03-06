const Discord = require('discord.js');
const client = new Discord.Client();
const message = new Discord.Message;
const config = require('./config/config.json')

require('dotenv').config();
const token = process.env.BOT_TOKEN

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);
client.on('message', message => {
    console.log(message.content);
    
     if (message.content === `${config.prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n Created server in ${message.guild.createdAt}\n and country of server: ${message.guild.region}`);
    }
});
