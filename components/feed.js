import React from "react";
import { ScrollView } from "react-native";
// local files
import { ProjectItemComponent } from "./project-item";

export const FeedComponent = React.memo(({ feed, navigation }) => {
  return (
    <ScrollView>
      {feed.data.map((item, index) => {
        return (
          <ProjectItemComponent
            key={index}
            title={item.title}
            id={item.id}
            navigation={navigation}
            style={{paddingHorizontal: 16}}
          />
        );
      })}
    </ScrollView>
  );
});
