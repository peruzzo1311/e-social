import axios from 'axios'

const urlApiSenior: string =
  'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest'

export const LoginSenior = async (username: string, password: string) => {
  const config = {
    method: 'post',
    url: `${urlApiSenior}/platform/authentication/actions/login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      username: username,
      password: password,
    }),
  }

  return await axios
    .request(config)
    .then((res) => JSON.parse(res.data.jsonToken).access_token)
    .catch((err) => console.log(err))
}

export const getUserInfo = async (username: string, accessToken: string) => {
  const config = {
    method: 'post',
    url: `${urlApiSenior}/platform/user/queries/getUser`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    data: JSON.stringify({
      username: username,
      includePhoto: false,
    }),
  }

  return await axios
    .request(config)
    .then((res) => res.data)
    .catch((err) => console.log(err))
}
