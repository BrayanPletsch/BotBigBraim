const fun = (prefix, ownerBot, botName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: ${ownerBot}
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}chatlist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreport
◪ *FUN*
  │
  ├─ ❏ ${prefix}alay
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}game
  ├─ ❏ ${prefix}bucin
  ├─ ❏ ${prefix}trust
  ├─ ❏ ${prefix}dare
  └─ ❏ ${prefix}simi`
}
exports.fun = fun
