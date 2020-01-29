const { prefix, linkics } = require('../../config.json');
const Discord = require('discord.js');
const ical = require('ical');

module.exports = {
    name: 'disp',
    description: 'Affiche l\'edt. Si aucune date n\'est mentionnée, ce sera l\'est du jour actuel. Si une date est mentionnée sous la forme DD-MM-AAAA, le bot affichera l\'est du jour demandé.',
    usage: '[date]',
    onoff: true,
    execute(message, client, args) {
        edticsc = ical.fromURL(linkics, options, function (err, data) {
            console.log(data)
         })
        if (!args[0]) {
            datetoday = new Date()
            var edt = new Discord.RichEmbed()
                .setColor('#FFFFFF')
                .addField('Emploi du temps d\'aujourd\'hui',`\u200b`)
            return message.channel.send(edt)
        }

        const date = args[0];

        
    },
};