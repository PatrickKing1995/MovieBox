import React, { Component } from 'react'
import { Text, View, FlatList,TouchableOpacity, StyleSheet, Image,Alert  } from 'react-native'
import{FavorHearder} from '../route/Header';
import {insertNewFavor, deleteFavor,queryAllFavor } from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';



const Item = (item, index,dele)=>(
  <View style={[list.container, {backgroundColor: index%2 == 0 ?"#fff":"#f1f1f1"}]}>
      <View style={list.title}>
        <Text style={list.name}>{item.title}</Text>
  
            <TouchableOpacity
            onPress={()=>{Alert.alert(
              'Confirm!!',
              'Are you sure you want to unfavorite this item!',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => {this.dele(item.id)}},
              ],
              { cancelable: false }
            )}}
            >
              <Image style={list.icon} source={require('../../icons/star.png')}/>
            </TouchableOpacity>
            
      </View>
      <TouchableOpacity style={list.detail}
      onPress={()=>this.open(item.id)}>
      <View
      style={{width: "40%", height: 200}}
      // onPress={()=>this.open(item.id)}
      >
        <Image
          style={list.image}
          source={{uri: 'http://image.tmdb.org/t/p/w185'+item.poster_path}}
        />
      </View>
      <View style={list.desp}>
        <View style={list.release}>
          <Text style={list.text}>Release date:</Text>
          <Text style={list.infor}>{item.release_date}</Text>
        </View>
       <View style={list.rate}>
        <Text style={list.text}>Rating:</Text>
        <Text style={list.infor}>{item.vote_average}<Text style={list.text}>/10</Text></Text>
       </View>
       <View style={list.over}>
        <Text style={list.inforo}>Overview:</Text>
       </View>
        <View style={list.overview}>
          <Text style={list.texto} numberOfLines={4}>{item.overview}</Text>
        </View>
      </View>  
      </TouchableOpacity>
    </View>
)


export default class FavoristComponent extends Component {
    constructor(props){
    super(props);
    this.state = {
      favor: [],
    }
    this.reloadData();
    realm.addListener('change', () => {
        this.reloadData();
    });
    console.ignoredYellowBox = ["VirtualizedList"];
  }

  reloadData = () => {
    queryAllFavor().then((favor) => {
        this.setState({ favor });
    }).catch((error) => {
        this.setState({ favor: [] });
    });
    console.log(`reloadData`);
  }

  deleFavorist=(id)=>{
    deleteFavor(id).then().catch(error => {
      alert(`Failed to delete  with id = ${id}, error=${error}`);
    });
  }

  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#f9f8fd"  }}>
        <FavorHearder open={() => this.onClick_User()}/>
        {
          this.state.favor.length==0?<View style={{height: '100%',alignItems: 'center', justifyContent:'center'}}>
            <Text>No Item</Text>
          </View>:
          <FlatList
          data={this.state.favor}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => Item(item, index,dele=(id)=>this.deleFavorist(id))}
        />
        }
      </View>
    )
  }
}

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