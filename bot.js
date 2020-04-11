const Discord = require('discord.js'); 
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const superagent = require("superagent");
const cheerio = require('cheerio');
const request = require('request');

global.currentTeamMembers - [];
global.servers - {};

client.once('ready', () => {
    console.log('Ready!')
});

client.login(process.env.BOT_TOKEN);
