const Discord = require('discord.js');
const { prefix } = require('./config.json');
const token = process.env.BOTEDTDLMITOKEN
const fs = require('fs');
const client = new Discord.Client();

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./modules/commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./modules/commands/${file}`);
    client.commands.set(command.name, command);
} 

fs.readdir("./modules/events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./modules/events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

client.login(token);
