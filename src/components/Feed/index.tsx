import { Box, Divider, VStack, View, Text} from "native-base";
import React, { useEffect, useState } from "react";

import FeedCard from "./Card";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useAppSelector } from "../../redux/hooks";
import { getAttachment, getFeed } from "../../api/Feed";
import { useSelector } from "react-redux";
import IFeed from "../../interfaces/IFeed";
import IPost from "../../interfaces/IPost";
import Spinner from "../Spinner";

export default function Feed() {
  const user = useSelector((state: any) => state.user);
  const [feedList, setFeedList] = useState<IFeed>();
  const [postList, setPostList] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true)  
  let posts: any = '';
  let spinner: boolean = true

  const renderItem = ({ item }: { item: IPost }) => {
    return (
      <FeedCard {...item} />
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    let feed: IFeed = await getFeed(user.accessToken);
    setFeedList(feed);

    for(let p of feed.posts) {
      if(p.attachment){
        p.attachment.url = await getAttachment(user.accessToken,p.attachment.id); 
      }
    }
    //console.log(feed)
    //console.log(feed.nextCursor)
    //console.log(feed.posts)
    setPostList([...feed.posts]);
    //console.log(postList);
  }

  async function getNewPost() {
    let feed: IFeed = await getFeed(user.accessToken, feedList?.nextCursor);
    setFeedList(feed);
    posts = postList
    if(feed.posts){
      for(let p of feed.posts){
        if(p.attachment){
          p.attachment.url = await getAttachment(user.accessToken,p.attachment.id); 
        }
        posts.push(p)
      }
      
      
     
      if(posts){
        setPostList(posts)
      }
    }
    else {
      
      setIsLoading(false);
      
    }
    console.log(spinner)
  }

  return (
    <View flex={1}  pt={4}w={'100%'}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={postList}
        renderItem={renderItem}
        onEndReached={getNewPost}
        onEndReachedThreshold={0.3}
        ListFooterComponent={isLoading ? <Spinner /> : <View alignItems={'center'} mb={100}><Text fontWeight={'bold'}>Não há mais postagens.</Text></View>}
        
      />
    </View>
  );
}
