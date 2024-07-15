import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { GET_FEEDS } from "../redux/feed/feed.types";
import { getFeeds } from "../redux/feed/feed.actions";




const Feeds = () => {

  const feeds = useSelector((store)=>store.feed.feeds)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getFeeds())
  }, []);

  
  return (
    <div>
      <h1>Feeds</h1>
      {feeds.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
