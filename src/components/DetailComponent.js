import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image,Alert, TouchableOpacity,Dimensions  } from 'react-native';
import HeaderDetailContainer from '../containers/HeaderDetailContainer';
import {insertNewFavor, deleteFavor,queryAllFavor } from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';
const {width,height} = Dimensions.get('window')

const Item = (item,index)=>(
        <View key={index} style={details.charac}>
          <View style={[details.topCharac,{borderWidth: item.profile_path==null?1:0, borderColor: item.profile_path==null?"#DADCDB":"#fff"}]}>
          <Image
            style={details.imageCharac}
            source={item.profile_path==null?require('../../images/notfound.png'):{uri: 'http://image.tmdb.org/t/p/w185'+item.profile_path}}
          />
          </View>
          <View style={details.bottomCharac}>
            <Text style={details.textCharac} numberOfLines={2}>{item.name}</Text>
          </View>
        </View>
    )

export default class DetailComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      favor: [],
    }
    this.reloadData();
    realm.addListener('change', () => {
        this.reloadData();
    });
  }

  reloadData = () => {
    queryAllFavor().then((favor) => {
        this.setState({ favor });
    }).catch((error) => {
        this.setState({ favor: [] });
    });
    console.log(`reloadData`);
  }

  addFavor=(item)=>{
    const newFavor = {
      id: item.id,
      title: item.title,
      lowtitle: item.title.toLowerCase(),
      poster_path: item.poster_path,
      release_date: item.release_date,
      vote_average: item.vote_average.toString(),
      overview: item.overview,
    };
    insertNewFavor(newFavor).then().catch((error) => {
      alert(`This film was favorite!`);
    });
  }

  deleFavorist=(id)=>{
    deleteFavor(id).then().catch(error => {
      alert(`Failed to delete  with id = ${id}, error=${error}`);
    });
  }

  findObjectByKey=(array, key, value) =>{
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return true;
        }
    }
    return false;
  }

  onClick_User = () => {
    this.props.navigation.goBack();
  };

  _keyExtractor = (item, index) => item.cast_id;


  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <HeaderDetailContainer open={() => this.onClick_User()} name={this.props.detailFilm.title} id={this.props.detailFilm.id}/>
        <View style={details.container}>
          <View style={details.top}>
            <View style={details.name}>
              <View style={details.favor}>
              { this.findObjectByKey(this.state.favor, 'id', this.props.detailFilm.id)?
                  <TouchableOpacity
                  onPress={()=>{Alert.alert(
                    'Confirm!!',
                    'Are you sure you want to unfavorite this item!',
                    [
                      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'OK', onPress: () => {this.deleFavorist(this.props.detailFilm.id)}},
                    ],
                    { cancelable: false }
                  )}}
                  >
                    <Image style={details.icon} source={require('../../icons/star.png')}/>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity
                  onPress={()=>this.addFavor(this.props.detailFilm)}
                  >
                    <Image style={details.icon} source={require('../../icons/star-outline.png')}/>
                  </TouchableOpacity>
                }
              </View>
              <View style={details.guess}>
                <View style={details.date}>
                  <Text style={details.text}>Release date:</Text>
                  <Text style={details.infor}>{this.props.detailFilm.release_date}</Text>
                </View>
                <View style={details.rate}>
                  <Text style={details.text}>Rating:</Text>
                  <Text style={details.inforo}>{this.props.detailFilm.vote_average}<Text style={details.text}>/10</Text></Text>
                </View>
              </View>
            </View>
            <View style={details.overview}>
              <View style={details.left}>
                <View style={details.image}>
                  <Image
                    style={details.imagefilm}
                    source={{uri: 'http://image.tmdb.org/t/p/w185'+this.props.detailFilm.poster_path}}
                  />
                </View>
              </View>
              <View style={details.right}>
                <View style={details.over}>
                  <Text style={details.infor}>Overview:</Text>      
                </View>
                <View style={details.tail}>
                  <Text style={details.text} numberOfLines={11}>{this.props.detailFilm.overview}</Text> 
                </View>
              </View>
            </View>
          </View>
          <View style={details.bottom}>
            <View style={details.cast}>
              <Text style={details.castcrew}>Cast & Crew</Text>
            </View>
            <View style={details.crew}>
              <FlatList
                data={this.props.castFilm}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={this._keyExtractor}
                renderItem={({item, index}) => Item(item,index)}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const details = StyleSheet.create({
  charac:{
    flex: 1,
    padding: width*0.008,
    width:"25%",
    justifyContent: "center",
    alignItems: "center",
  },
  topCharac:{
    height: "75%",
    width: width*0.25*0.936,
  },
  bottomCharac:{
    height: "25%",
    width: width*0.25*0.936,
    alignItems: "center",
    justifyContent: "center",
  },
  imageCharac:{
    height: "100%",
    width: "100%",
  },
  textCharac:{
    textAlign: "center",
    fontSize: 12,
    color: "#000",
  },
  container:{
    flex:1,
    paddingTop: 5,
    flexDirection: "column",
  },
  top:{
    flex:1,
    height: "65%",
    flexDirection: "column",
  },
  favor:{
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon:{
    height: 35,
    width: 35,
    tintColor: "#F2C640"
  },
  guess:{
    width: "80%",
    flexDirection:'column',
    paddingRight: 10,
  },
  date:{
    height: "50%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 15,
    color: "#000",
    alignItems: "center"
  },
  inforo:{
    fontSize: 15,
    color: "red",
    marginRight: 15,
  },
  infor:{
    fontSize: 15,
    color: "red",
  },
  rate:{
    height: "50%",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  left:{
    width: "45%",
    marginTop:5,
    flexDirection: 'column'
  },
  image:{
    height: "100%",
    paddingLeft: 10,
  },
  imagefilm:{
    width: "100%",
    height: "100%",
  },
  right:{
    width: "55%",
    flexDirection: 'column',
    alignItems: "flex-start",
    padding: 10,
  },
  over:{
    height: "10%",
  },
  tail:{
    height: "90%",
    paddingTop: 10,
  },
  cast:{
    height: "15%",
    paddingLeft: 10,
    justifyContent: "center"
  },
  castcrew:{
    color: "#000",
    alignItems: "center",
    fontSize: 17,
    fontWeight: "bold"
  },
  crew:{
    height: "85%",
    flexDirection: 'column'
  },
  imageCha:{
    height: "80%",
  },
  nameCha:{
    height: "20%",
  },
  name:{
    height: "17%",
    flexDirection: 'row'
  },
  overview:{
    height: "83%",
    flexDirection: 'row'
  },
  bottom:{
    height: "35%",
  },
})