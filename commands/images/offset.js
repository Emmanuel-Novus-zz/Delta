const Discord = require('discord.js');

    const fetch = require('superagent');
    const {
        Attachment
    } = require("discord.js");
    module.exports.run = async (client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        let avatar = `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.png?size=2048`;
        let {
            body
        } = await fetch.get(`https://arcadia-api.xyz/api/v1/offset?url=` + avatar)
            .set({
                Authorization: "e06bb2923b55c80698e59a8fc8d48d37c42404f10b66b7a678edc1dc588be73b"
            });
        const att = new Attachment(body, "offset.png");
        message.channel.send(att);
    }

module.exports.help = {
    name: "offset"
}