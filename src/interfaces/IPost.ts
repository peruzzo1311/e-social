import IAttachment from "./IAttachment";
import IAuthor from "./IAuthor";

export default interface IPost {
    id: string,
    author: IAuthor,
    when: string,
    isSticky: boolean,
    read: false,
    text: string,
    commentCount: number,
    likeCount: number,
    gotMyLike: boolean,
    isAuthor: boolean,
    approved: boolean,
    complained: boolean,
    attachment: IAttachment,
    mentions?: IMentions[],
    isFixed: boolean,
    hasComment: boolean
}

interface IMentions {
    key: string,
    value: string
}