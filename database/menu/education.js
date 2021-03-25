const education = (prefix, botName, ownerName) => {
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
◪ *EDUCATION*
  │
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}wikien
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quotes2
  └─ ❏ ${prefix}artinama`
}
exports.education = education
