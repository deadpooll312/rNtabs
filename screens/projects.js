import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {Foundation, Ionicons} from "@expo/vector-icons";
import {connect} from "react-redux";
import {RadioButtons} from 'react-native-radio-buttons';
// Local files
import {initFeed} from "../actions/feed.action";
import {HeaderComponent} from "../components/header";
import {black, blue, grey, grey2, red, white} from "../styles/colors";
import TriangleIconComponent from "../components/icons/triangle";
import ProjectItemComponent from "../components/projectItem";

const items = [
  {label: 'Sort by finish date', value: 'finishDate'},
  {label: 'Sort by some', value: 'some'},
  {label: 'Hockey', value: 'hockey'},
];

const options = [
  "Ongoing",
  "Planned"
];

function renderOption(option, selected, onSelect, index) {
  const style = selected ?
    {...styles.selectContainer,...styles.selectContainerActive} :
    styles.selectContainer;
  
  return (
    <TouchableOpacity
      activeOpacity={0.55}
      onPress={onSelect}
      key={index}
    >
      <View style={style}>
        <Text style={styles.select}>{option}</Text>
      </View>
    </TouchableOpacity>
  );
}

function renderContainer(optionNodes) {
  return <View style={styles.selectsWrapper}>{optionNodes}</View>;
}

function ProjectsScreen(props) {
  const {feed, initData, navigation} = props;
  const [radioValue, setRadioValue] = useState("Ongoing");
  const [selectValue, setSelected] = useState("finishDate");
  
  useEffect(() => {
    initData();
  }, []);
  
  return <React.Fragment>
    <HeaderComponent/>
    <SafeAreaView style={styles.container}>
      <View style={{...styles.row, ...styles.sortContainer}}>
        <RadioButtons
          options={options}
          onSelection={selected => setRadioValue(selected)}
          selectedOption={radioValue}
          renderOption={renderOption}
          renderContainer={renderContainer}
        />
        <View style={styles.dropdown}>
          <RNPickerSelect
            value={selectValue}
            placeholder={{}}
            onValueChange={(value) => setSelected(value)}
            items={items}
          />
          <TriangleIconComponent style={styles.angleIcon} color={blue}/>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {feed && feed.data && feed.data.map((item, index) => {
          return (
            <ProjectItemComponent
              key={index}
              title={item.title}
              id={item.id}
              navigation={navigation}
              style={styles.row}
            />
          )
        })}
      </ScrollView>
    </SafeAreaView>
  </React.Fragment>
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sortContainer: {
    paddingTop: 24,
    paddingBottom: 13,
    shadowColor: black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: white,
    zIndex: 5
  },
  scrollView: {
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 42,
    textAlign: 'left'
  },
  row: {
    paddingHorizontal: 16
  },
  dropdown: {
    width: 115
  },
  angleIcon: {
    position: 'absolute',
    bottom: 2,
    right: -10
  },
  cardTitle: {
    flexGrow: 5
  },
  date: {
    color: grey2
  },
  select: {
    fontSize: 16,
    fontFamily: 'lato',
    color: black
  },
  selectsWrapper: {
    flexDirection: 'row',
    marginBottom: 16
  },
  selectContainer: {
    marginRight: 25,
    borderColor: 'transparent',
    borderBottomWidth: 2,
    paddingBottom: 6,
  },
  selectContainerActive: {
    borderColor: blue
  }
});


const mapState = ({feed}) => ({
  feed
});

const mapDispatch = dispatch => ({
  initData: () => dispatch(initFeed())
});

export default connect(mapState, mapDispatch)(ProjectsScreen)