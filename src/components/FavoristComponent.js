import React, { Component } from 'react'
import { Text, View, FlatList,TouchableOpacity, StyleSheet, Image,Alert, TextInput  } from 'react-native'
import{FavorHearder} from '../route/Header';
import {insertNewFavor, deleteFavor,queryAllFavor,queryAFavor } from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';



const Item = (item, index,dele,openNavi)=>(
  <View style={[list.container, {backgroundColor: index%2 == 0 ?"#fff":"#f1f1f1"}]}>
      <View style={list.title}>
        <Text style={list.name} numberOfLines={1}>{item.title}</Text>
  
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
      onPress={()=>this.openNavi(item.id)}>
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
      AFavor: [],
      searchText: '',
      searchable: false
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

  _onClickDetail=(id)=>{
    this.props.fetchDetail(id)
    this.props.navigation.navigate("Screen_DetailFavor")
  }

  loadFavor = (name) => {
    queryAFavor(name).then((AFavor) => {
        this.setState({ AFavor });
    }).catch((error) => {
        this.setState({ AFavor: [] });
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
      <View style={{ flex: 1, backgroundColor: "#f1f1f1"  }}>
        <FavorHearder open={() => this.onClick_User()}/>
        <View style={styles.SectionStyle}>
 
        <TouchableOpacity
          onPress={()=>{this.state.searchable?this.setState({searchText: ''}):null,this.setState({searchable: !this.state.searchable}), this.loadFavor(this.state.searchText.toLowerCase())}}
        >
        <Image source={this.state.searchable?require('../../icons/close.png'):require('../../icons/magnify.png')} style={styles.ImageStyle} />
        </TouchableOpacity>
 
          <TextInput
              style={{flex:1}}
              placeholder="Enter Film's Name"
              editable={this.state.searchable?false:true}
              placeholderTextColor={'#dcdcdc'}
              onChangeText={(searchText) => this.setState({searchText})}
              underlineColorAndroid="transparent"
              value={this.state.searchText}
          />
        </View>
        {
          this.state.favor.length==0?<View style={{height: '100%',alignItems: 'center', justifyContent:'center'}}>
            <Text>No Item</Text>
          </View>:
          <FlatList
          data={this.state.searchable?this.state.AFavor:this.state.favor}
          keyExtractor={(item, index) => index}
          renderItem={({item, index}) => Item(item, index,dele=(id)=>this.deleFavorist(id), openNavi=(id)=>this._onClickDetail(id))}
        />
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 5 ,
    marginHorizontal: 5,
    marginVertical: 8,
},
 
ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    tintColor: '#3F485B',
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
},
 
});

const search = StyleSheet.create({
  container:{
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 8,
    height: "11%",
    alignItems: 'center',
    backgroundColor: '#E4E4E4'
  },
  searchBar:{
    paddingLeft: 20,
    fontSize: 16,
    borderRadius: 5,
    width: "100%",
    height: '100%',
    backgroundColor: '#fff'
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
    width: '90%',
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