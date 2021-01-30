const Discord = require('discord.js');
const client = new Discord.Client();
const message = new Discord.Message;
const { prefix, token } = require('./config');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(process.env.BOT_TOKEN);
client.on('message', message => {
    console.log(message.content);
    if (message.content === `${prefix}ping`) {
        message.channel.send('Pong.');
    } else if (message.content === `${prefix}beep`) {
        message.channel.send('Boop.');
    }
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\n Created server in ${message.guild.createdAt}\n and country of server: ${message.guild.region}`);
    }
});
