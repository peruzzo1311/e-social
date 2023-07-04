import axios from 'axios';

const urlApiSenior: string =
  'https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest';

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
  };

  return await axios
    .request(config)
    .then((res) => JSON.parse(res.data.jsonToken).access_token)
    .catch((err) => console.log(err));
};

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
      includePhoto: true,
    }),
  };

  return await axios
    .request(config)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const getProfile = async (accessToken: string, userName: string) => {
  let newUserName = userName.replace(' ', '-').toLowerCase()
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/social/queries/readProfile?profile=${newUserName}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Cookie:
        'TS0122123d=01a760ec2167f6add01fa3ddb1393f4ff00360e219779bf62a000c161b90598850858002c83d79eaaef6eae979e732824c6aa2f8c3; TS0122123d030=01686c638010165d2e70acca172df4261baaec67793b11d55333eecea4f889f3237a29bc8065d4b307cb496baab9c7642a4b121965',
    },
  };

  return await axios
    .request(config)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
