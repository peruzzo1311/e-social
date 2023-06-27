import axios from 'axios';
import { IChat } from '../../interfaces/IChat';
import { IMensagem } from '../../interfaces/IMensagem';

export const getConversas = async (): Promise<IChat[]> => {
  let resposta: IChat[] = [];
  let data = JSON.stringify({
    user: 'Gustavo Peruzzo',
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.1.140:8082/getConversas',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response) => {
      resposta = response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });
  return resposta;
};

export const getMensagens = async (chatId: number): Promise<IMensagem[]> => {
  let resposta: IMensagem[] = [];
  let data = JSON.stringify({
    "user": "Gustavo Peruzzo",
    "chatId": chatId
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.1.140:8082/getMensagens',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  await axios
    .request(config)
    .then((response: any) => {
      resposta = response.data;
    })
    .catch((error: any) => {
      resposta = error;
    });
  return resposta;
};
