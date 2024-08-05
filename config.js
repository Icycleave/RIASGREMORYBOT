//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "Ondo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2348086541281";
global.owner = process.env.OWNER_NUMBER || "2349060947343";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/26e9a2e7a4f1ffc45e734.mp4";
global.waPresence = process.env.WAPRESENCE || "";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUtEa3VmQXNXeUEvbDNVQThyZGFGNUJNaGgvT05EdXpmclh3U0toQThXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK1FWdFdkaWNrRFgzbG5CMFpmRXh0QjF2dWEwd1dEL1h5YVY5MklBUkVBND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2QkZOT3ZiT21LZytQRFZGa2RUdE9YZ2JNbDBrejk1NHVSSEpvejM4NGtvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUE9rejdkNVlVcFhFbEpTdWgydzJXZHFGaEpsNXZSaHkvcVlCODFIWVVJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNGQUVYajg2aUJiQzdiU0JBQUhTdGM1aGFFdDVUcGhFLytTVXJuMGRGMGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik84UzVta0dkNmUxR0w3TkkrM3lZbHdHZCtwOXlIaWZEd3VCRTBYYUFTbkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9acG9MalZYZ2dWZ3FzT3BNeEtRTG5DUmY4bThuK1A4NXVmcVdHREgyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVE4zMXZXYTJZQi9GbFFkRFVKcHhHekdCY2ZsL1QyWTFtSFQrVVZJYTRtRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJrNE02aVVzN2VHRDJqbDNia1FteDJldGwvcjFPaStwcU9peEc3UTkrTlhDeE5nUXlxWHBGM3huZ3ZJWkI3VDlRL0xRZ01Ncy8xYXE3MHgveU1xamlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc4LCJhZHZTZWNyZXRLZXkiOiJ5VWRSQzdwclJ6Rmp4eitmbWsrMkcxa0poaXFvaFFrM0h6L2pRRnN3WCswPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwNjA5NDczNDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjgwOTE3NkE2NjA5QkVGQjYyM0JCN0E5MkEzNzE3N0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMjg2OTE5MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA2MDk0NzM0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxRDU1RTEwNjdGNTc3MTNGOEI5M0UyNzNEOUY0RDdCMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIyODY5MTkyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDYwOTQ3MzQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMyQTlCNUYyN0VBODg4QzU2NTAwOThGM0FFMEI2RTVBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI4NjkyMTl9XSwibmV4dFByZUtleUlkIjozMiwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMyLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imc4NTBVbVhXU25pYkdCcHVueTRpWnciLCJwaG9uZUlkIjoiMTc4YTA3NTgtZmFhZi00MjU0LThmNjMtZTE0NjRiM2YzYjc2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ims2K2ZBMGtOVldETXZERmVZMzFoQzl0cGdtRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0eTFRRVlQVFFnR3I2QXBVQXh4eG8xcHVNWVU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiVE1DWUhaOFoiLCJtZSI6eyJpZCI6IjIzNDkwNjA5NDczNDM6MjhAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2ZhPCdmZjwnZmu8J2ZmPCdmaHwnZma8J2ZlvCdmavwnZmaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPUDRqL1lHRUxUTHc3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJwcE9ZZXhiTWJuVnlvT05KaVRVV3JuaG9Wb3lOKzBSTUxDTnEvUUdtekd3PSIsImFjY291bnRTaWduYXR1cmUiOiJ5TGJzNUNIQ01qUGdrd0dCL1ZRc1ZyQk1CeFkxSmgwbGU1VXFtNTllVzNVaWlubVIrdEZDNW9wbUx5QUg1RENhU0tva3BveUdTdnRkMmZGYWhSZVhCUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWkMwVkpQSmVHNlgvR1VsYkkreVY3L0FlUTBpZUFZQndBNC9HLzZZbnptN01UQnhGTkRVNkJEQ280WXBHM200U28yWFlSR0llWnk4WEI0cEs4WjB6aXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDYwOTQ3MzQzOjI4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFhVG1Ic1d6RzUxY3FEalNZazFGcTU0YUZhTWpmdEVUQ3dqYXYwQnBzeHMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjI4NjkzNzQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ3UzIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "!",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝖊𝖉𝖎𝖙𝖊𝖉 𝖇𝖞 𝕿𝖞𝖑𝖊𝖗",
  author: process.env.PACK_AUTHER || "𝕿𝖞𝖑𝖊𝖗",
  packname: process.env.PACK_NAME || "一茶",
  botname: process.env.BOT_NAME || "𝙋𝙖𝙧𝙖𝙢𝙤𝙪𝙣𝙩",
  ownername: process.env.OWNER_NAME || "𝕿𝖞𝖑𝖊𝖗",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
