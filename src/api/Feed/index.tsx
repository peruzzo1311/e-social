import axios from 'axios';
import IFeed from '../../interfaces/IFeed';
import { useAppSelector } from '../../redux/hooks';
import { useSelector } from 'react-redux';

export async function getAttachment(token: string,id: string) {
    const config = {
        method: 'GET',
        url: `https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/social/queries/readAttachmentDownloadURL?id=${id}&thumbnail=true`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    return await axios(config)
    .then((response) => response.data.url)
    .catch((err) => console.log(err))
}


export async function getFeed(token: string,nextCursor?: string) : Promise<any>{
const currentDate = new Date();
const encodedDate = encodeURIComponent(currentDate.toISOString());
if(!nextCursor){
    const config = {
        method: 'GET',
        url: `https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/social/queries/getFeed?size=10&since=${encodedDate}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    return await axios(config)
    .then((response) => response.data)
    .catch((err) => console.log(err))
}
else {
    nextCursor = encodeURIComponent(nextCursor.toString())

    const config = {
        method: 'GET',
        url: `https://platform.senior.com.br/t/senior.com.br/bridge/1.0/rest/platform/social/queries/getFeed?size=10&since=${encodedDate}&nextCursor=${nextCursor}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    console.log(config.url)
    return await axios(config)
    .then((response) => response.data)
    .catch((err) => console.log(err))
}
    

}