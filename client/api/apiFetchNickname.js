import request from 'superagent'

const nickName = 'https://names.drycodes.com/10?nameOptions=funnyWords'

export function getNickname() {
  return request
  .get(nickName).then(res => res.text)
}

