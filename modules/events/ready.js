module.exports = (client) => {
    console.log("Le bot est prêt");
    client.user.setPresence({
        game: {
            name: 'vos cours | edt:help',
            type: 'WATCHING'
        }
    })
}