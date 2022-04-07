const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTYxMjg4NzE0MDMyNjU2NDQ0.Yk2z4Q.sVtKIPHd4nZ3WOLkcuj80Kn3wKc";

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})


client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("🎉 Hello There 🎉 ")
    }
});

client.login(process.env.TOKEN)