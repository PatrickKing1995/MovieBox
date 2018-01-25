import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image, TouchableOpacity, RefreshControl  } from 'react-native';
import HeaderMovieContainer from '../containers/HeaderMovieContainer';
import flastlistData from './popular'


const Item =(item,view,index)=>(
  view ? Grid(item,index):List(item, index)
)

const List = (item, index)=>(
  <View style={[list.container, {backgroundColor: index%2 == 0 ?"#fff":"#f1f1f1"}]}>
      <View style={list.title}>
        <Text style={list.name}>{item.title}</Text>
        <TouchableOpacity
          // onPress={()=>{this.setState({favor: !this.state.favor})}}
        >
          {false? <Image style={list.icon} source={require('../../icons/star.png')}/>: <Image style={list.icon} source={require('../../icons/star-outline.png')}/>}
        </TouchableOpacity>
      </View>
      <View style={list.detail}>
      <TouchableOpacity
      style={{width: "40%", height: 200}}
      >
        <Image
          style={list.image}
          source={{uri: 'http://image.tmdb.org/t/p/w185'+item.poster_path}}
        />
      </TouchableOpacity>
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
      </View>
    </View>
)

const Grid=(item, index)=>(
  <View style={[moduleview.containermodule, {paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: index%2==0?12:6,
    paddingRight:index%2==0?6:12,}]}>
    <TouchableOpacity
    style={{width: "100%", height: 200}}
    >
      <Image
        style={moduleview.image}
        source={{uri: 'http://image.tmdb.org/t/p/w185'+item.poster_path}}
      />
    </TouchableOpacity>
    <Text style={moduleview.name} numberOfLines={1}>{item.title}</Text>
  </View>
)


export default class MovieComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      refreshing: false,
      filter: 'popular',
      dataSource: null
    };
  }

  componentDidMount(){
    this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.state.filter+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1')
  }

  componentWillUpdate(){
    this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.kindFilter+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US')
  }



  _onRefresh() {
    this.setState({refreshing: true});
    this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.kindFilter+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1')
      this.setState({refreshing: false})
    
  }

  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

  render() {
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
        <HeaderMovieContainer open={() => this.onClick_User()}/>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          data={this.props.items}
          numColumns={this.props.kindView?2:1}
          renderItem={({item, index}) => Item(item,this.props.kindView, index)}
          key={this.props.kindView?1:0}
        />
      </View>
    )
  }
}


const moduleview= StyleSheet.create({
  containermodule:{
    justifyContent:"center",
    alignItems: "center",
    width: '50%',
  },
  name:{
    fontSize: 18,
    marginTop: 10,
    fontWeight: "bold",
    color: "#1F2B40"
  },
  image:{
    width: "100%",
    height: 200,
  },
})

const list = StyleSheet.create({
  container: {   
    paddingTop: 5,
    paddingBottom: 10,
    paddingLeft:10,
    paddingRight:20,
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