import React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";
import Footer from "./Footer";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View style={styles.tweetHeaderContainer}>
          <Text style={styles.header_text}>{tweet.user.name}</Text>
          <Text style={styles.header_user}>@{tweet.user.username}</Text>
          <Text style={styles.header_created_at}>15s</Text>
        </View>
        <Entypo name={"chevron-down"} size={20} color="grey" />
      </View>

      <View>
        <Text style={styles.content}>{tweet.content}</Text>
        {!!tweet.image && (
          <Image style={styles.image} source={{ uri: tweet.image }} />
        )}
      </View>
      <Footer tweet={tweet} />
    </View>
  );
};

export default MainContainer;
