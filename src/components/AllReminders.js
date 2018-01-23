import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image,Alert, TouchableOpacity  } from 'react-native';
import {AllRemind} from '../route/Header';
import reminders from './popular';
import Swipeout from 'react-native-swipeout'


export class Items extends Component {
  constructor(props){
    super(props);
    this.state = {
      favor: false,
      activeRowKey: null
    }
    console.ignoredYellowBox = ["VirtualizedList"];
  }
  render(){
    const swipeSettings={
      autoClose: true,
      onClose:(secId, rowId, direction)=>{
          if(this.state.activeRowKey != null){
            this.setState({activeRowKey: null});
          }
      },
      onOpen:(secId, rowId, direction)=>{
        this.setState({activeRowKey: this.props.item.id})
      },
      right: [
        {
          onPress:()=>{
            Alert.alert(
              'Confirm!!',
              'Are you sure you want to delete this reminder!',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {
                  reminders.splice(this.props.index, 1);
                }},
              ],
              { cancelable: false }
            )
          },
          text: 'Delete', type: 'delete'
        }
      ],
      rowId: this.props.index,
      sectionId:1,
    };

    return(
      <Swipeout {...swipeSettings}>
          <View style={[list.container, {backgroundColor: this.props.index%2 == 0 ?"#fff":"#f1f1f1"}]}>
          <View style={list.detail}>
            <TouchableOpacity
            style={{width: "30%", height: 100}}
            >
              <Image
                style={list.image}
                source={{uri: 'http://image.tmdb.org/t/p/w185'+this.props.item.poster_path}}
              />
            </TouchableOpacity>
          <View style={list.desp}>
            <View style={list.release}>
              <Text style={list.text} numberOfLines={1}>{this.props.item.title} - {this.props.item.release_date.slice(0,4)} - {this.props.item.vote_average}/10</Text>
            </View>
            <View style={list.rate}>
              <Text style={list.infor}>2017-09-16 10:12</Text>
            </View>
          </View>
            <View style={{width: "5%", alignItems: "center", justifyContent: "center"}}>
              <Image style={list.imageright} source={require('../../icons/right.png')}/>
            </View>  
          </View>
        </View>
      </Swipeout>
    )
  }
}

export default class AllReminders extends Component {
  constructor(props){
    super(props);
  }
  onClick_User = () => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <AllRemind open={() => this.onClick_User()}/>
        <FlatList
          refreshing={true}
          data={reminders}
          renderItem={({item, index}) => {
            return <Items item={item} index={index}/>;
          }}
        />
      </View>
    )
  }
}

const list = StyleSheet.create({
  container: {
    // borderBottomWidth: 0.5,
    // borderColor: "#3F485B",   
    padding: 5,
    paddingLeft:10,
    paddingRight:10,
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "25%",
    marginBottom: 5,
    
  },
  detail: {
    flex: 1,
    height: "75%",
    flexDirection: "row",
  },
  imageright:{
    width: 40,
    height: 40,
    tintColor: "#F2C640",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2B40"
  },
  icon: {
    width: 30,
    height:30,
    tintColor: "#F2C640",
  },
  image:{
    width: "100%",
    height: 200,
  },
  desp:{
    width: "65%",
    paddingBottom: "5%",
    paddingTop: "5%",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingRight: 10,
    paddingLeft: 10,
    
  },
  text:{
    fontSize: 16,
    color: "#000"
  },
  texto:{
    fontSize: 15,
    color: "#000",
    alignItems: "center"
  },
  inforo:{
    fontSize: 15,
    color: "red",
  },
  infor:{
    fontSize: 15,
    color: "red",
    marginBottom: 10,
  },
  overview:{
    height: "60%",
    alignItems: "flex-start",
  },
  release:{
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rate:{
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 15,
  },
  over: {
    height: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})