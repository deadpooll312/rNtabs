import * as React from 'react';
import { ScrollView } from 'react-native';
// local files
import { HeaderOrder, OrderProperty, CommentsComponent } from '../components';
import {
  PencilIconComponent,
  NotificationIconComponent,
  ClockIconComponent,
  CordIconComponent,
  CheckSquareIconComponent,
  FilesIconComponent
} from "../components/icons";

const comments = [
  {
    author: "Måndag",
    date: "2 dec 15:45",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae cursus arcu, in efficitur felis. Praesent faucibus massai.",
    avatar: "JL"
  },
  {
    author: "Måndag",
    date: "2 dec 13:45",
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae cursus arcu, in efficitur felis. Praesent faucibus massai.",
    avatar: "ÅE"
  }
];

export default function OrderScreen(props) {
  const { navigation } = props;
  return (
    <React.Fragment>
      <HeaderOrder navigation={navigation}/>
      <ScrollView>
        <OrderProperty
          RenderIcon={props => <PencilIconComponent {...props}/>}
          title="E-liggare"
          navigation={navigation}
          path="Home"
        />
        <OrderProperty
          RenderIcon={props => <NotificationIconComponent {...props}/>}
          title="Details & Team"
          navigation={navigation}
          path="Home"
        />
        <OrderProperty
          RenderIcon={props => <ClockIconComponent {...props}/>}
          title="Report Time"
          navigation={navigation}
          path="Home"
        />
        <OrderProperty
          RenderIcon={props => <CordIconComponent {...props}/>}
          title="Report Articles"
          navigation={navigation}
          path="Home"
        />
        <OrderProperty
          RenderIcon={props => <CheckSquareIconComponent {...props}/>}
          title="Check Lists"
          navigation={navigation}
          path="Home"
        />
        <OrderProperty
          RenderIcon={props => <FilesIconComponent {...props}/>}
          title="Documentation & Photos"
          navigation={navigation}
          path="Home"
        />
        <CommentsComponent comments={comments}/>
      </ScrollView>
    </React.Fragment>
  );
}