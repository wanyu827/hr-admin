import Cookies from 'js-cookie'

const TokenKey = 'vue_admin_template_token'

export function getToken () {
  return Cookies.get(TokenKey)
}

export function setToken (token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken () {
  return Cookies.remove(TokenKey)
}

const Timekey = 'token_time_key'
// 存时间戳
export function setTime (time) {
  return Cookies.set(Timekey, time)
}
// 取时间戳
export function getTime () {
  return Cookies.get(Timekey)
}
