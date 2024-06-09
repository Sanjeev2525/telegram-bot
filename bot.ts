import { Bot } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.TOKEN as string); 
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
bot.on("message", (ctx) => ctx.reply("Error!"));
bot.start();