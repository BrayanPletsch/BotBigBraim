const search = (prefix, botName, ownerName) => {
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
◪ *Search*
  │
  ├─ ❏ ${prefix}wait
  ├─ ❏ ${prefix}ytsearch
  ├─ ❏ ${prefix}trendtwit
  ├─ ❏ ${prefix}wikien
  ├─ ❏ ${prefix}wiki
  └─ ❏ ${prefix}neonime`
}
exports.search = search
