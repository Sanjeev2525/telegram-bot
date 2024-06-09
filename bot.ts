import { Bot } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const bot = new Bot("7470581997:AAHkSixn43MPFmNiaZLa5SPxpJZ0tE62NvQ"); 
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Error!"));
bot.start();