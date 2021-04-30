const kerang = (prefix, botName, ownerName) => {
	return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerName}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *MAKER*
  │
  ├─ ❏ ${prefix}Whatis
  ├─ ❏ ${prefix}QuandoÉo
  ├─ ❏ ${prefix}Avaliar
  └─ ❏ ${prefix}VocêPode`
}
exports.kerang = kerang
