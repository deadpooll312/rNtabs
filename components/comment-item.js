import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {black, grey2, grey3, white} from "../styles/colors";

export const CommentItem = React.memo((props) => {
  const { avatar, author, date,  message } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{avatar}</Text>
      </View>
      <View style={styles.textWrapper}>
        <Text style={styles.commentHeader}>
          {`${author}, ${date}`}
        </Text>
        <Text style={styles.message}>
          {message}
        </Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 16
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: white,
    marginRight: 16
  },
  avatarText: {
    fontFamily: 'lato-bold',
    fontSize: 16
  },
  textWrapper: {
    backgroundColor: grey3,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 24,
    borderRadius: 3
  },
  commentHeader: {
    fontSize: 12,
    color: grey2,
    fontFamily: 'lato-bold',
    opacity: 0.4
  },
  message: {
    fontSize: 14,
    fontFamily: 'lato',
    color: black
  }
});