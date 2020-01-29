const { prefix } = require('../../config.json');
const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Affiche la liste des commandes',
    usage: '[command name]',
    execute(message, client, args) {
        const data = [];
        const { commands } = message.client;
        if (!args[0]) {
            var help_embed = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .addField(':question: | Commandes', `\`${prefix}help [commande]\` pour en savoir plus sur une commande.`)
            help_embed.addField('Commandes:', '`help`, `disp`')
                .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
                .setTimestamp()
            return message.author.send(help_embed)
                .then(() => { //:white_check_mark: :mailbox: 
                    if (message.channel.type === 'dm') return;
                    message.channel.send(`:white_check_mark: | Je viens de vous envoyer les commandes par DM ${message.author} !`);
                })
                .catch(error => {
                    console.error(`Impossible d'envoyer les messages ${message.author.tag}.\n`, error);
                    message.channel.send(`:x: | Je ne peux pas vous envoyer les commandes ${message.author}`);
                });
        }

        const name = args[0].toLowerCase();
        const command = commands.get(name)

        if (!command) {
            return message.send(`:x: | Je ne connais pas cette commande... ${message.author}`);
        }

        var help_c_embed = new Discord.RichEmbed()
            .setColor('#FFFFFF')
            .addField(`:wrench: | Help : \`${command.name}\``, `\u200b`)
            .addField('**Commande:**', `\`${prefix}${command.name}\``)
            .setFooter(`${message.author.tag}`, `${message.author.displayAvatarURL}`)
            .setTimestamp()
        if (command.description) help_c_embed.addField('**Description:**', `${command.description}`);
        if (command.usage) help_c_embed.addField('**Usage: **', `\`${prefix}${command.name} ${command.usage}\``);
        message.channel.send(help_c_embed);
    },
};