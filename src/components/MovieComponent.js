import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image, TouchableOpacity  } from 'react-native';
import {MoviesHearder} from '../route/Header';
import flastlistData from './popular'


export class Items extends Component {
  constructor(props){
    super(props);
    this.state = {
      favor: false,
    }
    console.ignoredYellowBox = ["VirtualizedList"];
  }
  render(){
    return(
      <View style={[list.container, {backgroundColor: this.props.index%2 == 0 ?"#fff":"#f1f1f1"}]}>
        <View style={list.title}>
          <Text style={list.name}>{this.props.item.title}</Text>
          <TouchableOpacity
            onPress={()=>{this.setState({favor: !this.state.favor})}}
          >
            {this.state.favor? <Image style={list.icon} source={require('../../icons/star.png')}/>: <Image style={list.icon} source={require('../../icons/star-outline.png')}/>}
          </TouchableOpacity>
        </View>
        <View style={list.detail}>
        <TouchableOpacity
        style={{width: "40%", height: 200}}
        >
          <Image
            style={list.image}
            source={{uri: 'http://image.tmdb.org/t/p/w185'+this.props.item.poster_path}}
          />
        </TouchableOpacity>
        <View style={list.desp}>
          <View style={list.release}>
            <Text style={list.text}>Release date:</Text>
            <Text style={list.infor}>{this.props.item.release_date}</Text>
          </View>
         <View style={list.rate}>
          <Text style={list.text}>Rating:</Text>
          <Text style={list.infor}>{this.props.item.vote_average}<Text style={list.text}>/10</Text></Text>
         </View>
         <View style={list.over}>
          <Text style={list.inforo}>Overview:</Text>
         </View>
          <View style={list.overview}>
            <Text style={list.texto} numberOfLines={4}>{this.props.item.overview}</Text>
          </View>
        </View>  
        </View>
      </View>
    )
  }
}

export class Item extends Component {
  constructor(props){
    super(props);
    console.ignoredYellowBox = ["VirtualizedList"];
  }
  render(){
    return(
      <View style={[lists.container, {backgroundColor: this.props.index%2 == 0 ?"#fff":"#f1f1f1"}]}>
        <View style={lists.title}>
          <Text style={lists.name}>{this.props.item.title}</Text>
        </View>
        <View style={lists.detail}>
        <TouchableOpacity
        style={{width: "40%", height: 200}}
        >
          <Image
            style={lists.image}
            source={{uri: 'http://image.tmdb.org/t/p/w185'+this.props.item.poster_path}}
          />
        </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default class MovieComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      list: true,
    }
  }
  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <MoviesHearder open={() => this.onClick_User()}/>
        <FlatList
          data={flastlistData}
          renderItem={({item, index}) => {
            if (this.state.list) {
              return <Items item={item} index={index}/>};
              return <Item item={item} index={index}/>;
          }}
        />
      </View>
    )
  }
}


const lists= StyleSheet.create({
  container:{
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft:10,
    paddingRight:10,
  },
})

const list = StyleSheet.create({
  container: {
    // borderBottomWidth: 0.5,
    // borderColor: "#3F485B",   
    paddingTop: 5,
    paddingBottom: 10,
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
    width: "63%",
    paddingRight: 10,
    paddingLeft: 10,
    
  },
  text:{
    fontSize: 15,
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