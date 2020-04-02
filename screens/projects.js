import React from 'react';
import {HeaderComponent} from "../components/header";
import {SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import {Foundation, Ionicons} from "@expo/vector-icons";
import {black, blue, grey, grey2} from "../styles/colors";
import {initFeed} from "../actions/feed.action";
import {connect} from "react-redux";

const items = [
  {label: 'Football', value: 'football'},
  {label: 'Baseball', value: 'baseball'},
  {label: 'Hockey', value: 'hockey'},
];

function ProjectsScreen(props) {
  const { feed, initData, navigation } = props;
  
  React.useEffect(() => {
    initData();
  }, []);
  
  return <React.Fragment>
    <HeaderComponent/>
    <SafeAreaView style={styles.container}>
      <View style={{...styles.row, ...styles.borderBottom}}>
        <View style={styles.dropdown}>
          <RNPickerSelect
            placeholder={{label: 'Select value'}}
            onValueChange={(value) => console.log(value)}
            items={items}
          />
          <Ionicons style={styles.angleIcon} name="ios-arrow-dropdown-circle" size={12} color={blue}/>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {feed && feed.data && feed.data.map((item, index) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Order")} key={index} style={{...styles.row, ...styles.borderBottom}}>
              <View style={{...styles.cardHeader, ...styles.cardRow}}>
                <Foundation style={{marginRight: 10}} name="clipboard-notes" size={24} color={black}/>
                <Text style={styles.cardTitle}>#{item.id} {item.title}</Text>
                <Text style={styles.date}>22/6 - 1/8</Text>
              </View>
              <View style={{...styles.cardBody, ...styles.cardRow}}>
                <Text style={styles.cardText}>Bygga exklusivt badrum i guld och machogny hos Greve von Dinkelspiel af ...</Text>
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
  scrollView: {
    paddingHorizontal: 0,
  },
  text: {
    fontSize: 42,
    textAlign: 'left'
  },
  row: {
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  dropdown: {
    width: 200
  },
  angleIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderColor: grey,
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
  }
});


const mapState = ({feed}) => ({
  feed
});

const mapDispatch = dispatch => ({
  initData: () => dispatch(initFeed())
});

export default connect(mapState, mapDispatch)(ProjectsScreen)