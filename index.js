const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.login("NDQ0ODI3NTU2NjgwNjk1ODE1.Ddhldw.UNHyViTcNymhxDod5yW3EcmgHj4");
