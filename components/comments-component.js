import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ChatIconComponent } from "./icons";
import {black, white} from "../styles/colors";
import { CommentItem } from "./comment-item";

export const CommentsComponent = React.memo((props) => {
  const { comments } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ChatIconComponent />
        <Text style={styles.title}>Discussion</Text>
      </View>
      <View>
        {comments.map((comment, index) => (
          <CommentItem
            key={index}
            avatar={comment.avatar}
            author={comment.author}
            date={comment.date}
            message={comment.message}
          />
        ))}
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 28,
    paddingBottom: 26,
    backgroundColor: white
  },
  header: {
    flexDirection: 'row',
    marginBottom: 24
  },
  title: {
    fontFamily: 'lato',
    fontSize: 16,
    color: black,
    marginLeft: 17
  }
});