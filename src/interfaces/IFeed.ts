import IPost from './IPost';
export default interface IFeed {
    nextCursor: string
    posts: IPost[]
}

