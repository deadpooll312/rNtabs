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
            <TouchableOpacity
              onPress={() => navigation.navigate("Order")}
              key={index}
              style={{...styles.row, ...styles.borderBottom}}
              activeOpacity={0.55}
            >
              <View style={{...styles.cardHeader, ...styles.cardRow}}>
                <Foundation style={{marginRight: 10}} name="clipboard-notes" size={24} color={black}/>
                <Text style={styles.cardTitle}>#{item.id} {item.title}</Text>
                <Text style={styles.date}>22/6 - 1/8</Text>
              </View>
              <View style={{...styles.cardBody, ...styles.cardRow}}>
                <Text style={styles.cardText}>Bygga exklusivt badrum i guld och machogny hos Greve von Dinkelspiel af
                  ...</Text>
                <Ionicons name="ios-arrow-forward" size={24} color={grey2}/>
              </View>
              <View style={{...styles.cardFooter, ...styles.cardRow}}>
                <Ionicons name="ios-pin" size={18} color={blue} style={{marginRight: 15}}/>
                <Text style={styles.cardLocationText}>Grev Magnigattan 22</Text>
              </View>
            </TouchableOpacity>
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
    backgroundColor: white
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
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderStyle: 'solid'
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardHeader: {
    paddingRight: 40,
    marginBottom: 5
  },
  cardTitle: {
    flexGrow: 5
  },
  date: {
    color: grey2
  },
  cardBody: {
    marginBottom: 10
  },
  cardText: {
    color: grey2,
    fontSize: 16,
    width: '85%',
    marginRight: 20,
    flexGrow: 5
  },
  cardFooter: {},
  cardLocationText: {
    color: blue
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