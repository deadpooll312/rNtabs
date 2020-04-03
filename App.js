import * as React from "react";
import { useState } from "react";
import { Provider } from "react-redux";
// local files
import Navigation from "./navigation";
import store from "./store";
import * as Font from "expo-font";
import { AppLoading } from "expo";

const fetchFonts = () => {
  return Font.loadAsync({
    lato: require("./assets/fonts/Lato-Regular.ttf"),
    "lato-bold": require("./assets/fonts/Lato-Bold.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  // have to init user from storage
  return (
    <Provider store={store}>
      <Navigation isUser={true} />
    </Provider>
  );
}
