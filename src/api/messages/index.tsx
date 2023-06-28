import axios from 'axios';
import { IChat } from '../../interfaces/IChat';
import { IMensagem } from '../../interfaces/IMensagem';

export const getConversas = async (user: string): Promise<IChat[]> => {
  let resposta: IChat[] = [];
  let data = JSON.stringify({
    user: user,
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

export const getMensagens = async (user: string, chatId: number): Promise<IMensagem[]> => {
  let resposta: IMensagem[] = [];
  let data = JSON.stringify({
    user: user,
    chatId: chatId,
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

export const setMensagemApi = async (
  user: string,
  chatId: number,
  mensagem: IMensagem
) => {
  let data = JSON.stringify({
    user: user,
    chatId: chatId,
    mensagem: mensagem,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://192.168.1.140:8082/setMensagem',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
