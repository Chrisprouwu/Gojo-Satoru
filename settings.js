//═══════════════════════════════════════════════════════//
//
//                              ©Ⓥⓘⓖⓖⓞ 
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 ©Ⓥⓘⓖⓖⓞ 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\
global.owner = ['50360210812']
global.premium = ['50360210812']
global.ownernomer = '50360210812'
global.ownername = 'Christophersiu'
global.botname = 'Chriss'
global.footer = '©Ⓥⓘⓖⓖⓞ🥷🏻'
global.ig = 'whatsapp.com'
global.region = 'República de AQP'
global.sc = 'whatsapp.com'
global.myweb = 'whatsapp.com'
global.packname = 'ROCKET-V2🚀'
global.author = 'VIGGO😎😈.Todo lo que alguna vez deseaste está del otro lado del miedo.VIGGO😎😈'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: 'Echo✓',
    admin: '❌ SILENCIO MIEMBRO COMÚN NO TIENE MORAL PARA USAR ESTE COMANDO ❌',
    botAdmin: '¡CÓMO CARAJOS VOY HACER ESO, SI NO SOY ADMIN🤦🏻‍♂️!!!',
    owner: '❌ ¡Este comando solo puede usar mi jefe! ❌',
    group: '¡Esta característica es solo para grupos!',
    private: '¡Esta función es solo para chats privados!',
    bot: '❌ Solo yo puedo usar esta función',
    wait: 'Espera un momento...',
    error: '¡Error! Será para la proxima o nunca!!!',
    endLimit: 'Su límite diario ha expirado, el límite se restablecerá cada 12 horas',
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/gojo.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
