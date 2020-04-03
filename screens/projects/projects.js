import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch, useSelector } from "react-redux";
import { RadioButtons } from "react-native-radio-buttons";
// Local files
import { initFeed } from "../../actions/feed.action";
import TriangleIconComponent from "../../components/icons/triangle";
import styles from "./projects.style";
import { feedSelector } from "../../store/selectors";
import { blue } from "../../styles/colors";
import {
  RenderOption,
  RenderContainer,
  FeedComponent,
  HeaderComponent
} from "../../components";

const items = [
  { label: "Sort by finish date", value: "finishDate" },
  { label: "Sort by some", value: "some" },
  { label: "Hockey", value: "hockey" }
]; // static data Have to load from SERVER

const options = ["Ongoing", "Planned"];

function ProjectsScreen({ navigation }) {
  const feed = useSelector(feedSelector);
  const dispatch = useDispatch();

  const [radioValue, setRadioValue] = useState("Ongoing");
  const [selectValue, setSelected] = useState("finishDate");

  useEffect(() => {
    dispatch(initFeed());
  }, []);

  return (
    <React.Fragment>
      <HeaderComponent />
      <View style={{ ...styles.row, ...styles.sortContainer }}>
        <RadioButtons
          options={options}
          onSelection={selected => setRadioValue(selected)}
          selectedOption={radioValue}
          renderOption={RenderOption}
          renderContainer={RenderContainer}
        />
        <View style={styles.dropdown}>
          <RNPickerSelect
            value={selectValue}
            placeholder={{}}
            onValueChange={value => setSelected(value)}
            items={items}
            style={styles.pickerStyles}
          />
          <TriangleIconComponent style={styles.angleIcon} color={blue} />
        </View>
      </View>

      {feed.data && feed.data.length ? (
        <FeedComponent navigation={navigation} feed={feed} />
      ) : (
        <ActivityIndicator styles={styles.loader} size="large" color={blue} />
      )}
    </React.Fragment>
  );
}

export default ProjectsScreen;
