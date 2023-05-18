function isPwdComplexEnough(password, min_pwd_class) {
  if (!password || !min_pwd_class) return true

  var count = 0
  if (count < min_pwd_class && password.match(/[a-z]/)) count++
  if (count < min_pwd_class && password.match(/[A-Z]/)) count++
  if (count < min_pwd_class && password.match(/[0-9]/)) count++
  if (count < min_pwd_class && password.match(/[\W|_]/)) count++
  return count >= min_pwd_class
}

function validateValuesMatch(e) {
  var el = e.target
  if (el.setCustomValidity) {
    var matchEl = document.getElementById(el.getAttribute('data-match-input-id'))
    if (matchEl) {
      var msg = el.value != matchEl.value ? el.getAttribute('data-match-error-text') : ''
      el.setCustomValidity(msg)
      matchEl.setCustomValidity(msg)
      if (msg) return false
    }
  }
  return true
}

function onPasswordChange(e) {
  if (!validateValuesMatch(e)) return
  var el = e.target
  var password = el.value
  if (el.setCustomValidity) {
    if (isPwdComplexEnough(password, el.getAttribute('data-min-pwd-class')))
      el.setCustomValidity('')
    else
      el.setCustomValidity(el.getAttribute('title'))
  }
}

function onEmailChange(e) {
  validateValuesMatch(e)
}

function logEverythingIsOkay() {
  if (!console || !console.log) return
  console.log(
    `%c
    .      ▁▂▃▄▅▆▆▇▇▇▇▇▆▆▅▄▃▂▁
    .  ▁▄▆████████▀▀▀▀▀████████▆▄▁
    . ▟███▀▀▔▔             ▔▔▀▀███▙
    . ███                       ███  Everything
    . ▐██▏    ▁▃▅▆▆▇▇▇▆▆▅▃▁    ▕██▌
    . ▕██▙▂▄▇█████▀▀▀▀▀█████▇▄▁▟██▏
    .  ▜████▀▀▔▔         ▔▔▀▀████▛
    .   ▜█▙                   ▟█▛       Is
    .    ▜█▙    ▁▄▅▆▆▆▅▄▁    ▟█▛
    .     ▜██▄▆███████████▆▄██▛
    .      ▜████▀▔     ▔▀████▛
    .       ▔███▃       ▃███▔          Okay.
    .         ▀███▄▁ ▁▄███▀
    .           ▀▀█████▀▀
    .              ▔▀▔
    `,
    'color: #00C653;'
  )
}

if (window)
  window.addEventListener('DOMContentLoaded', () => {
    logEverythingIsOkay()
  })
;
