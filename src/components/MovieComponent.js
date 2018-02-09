import React, { Component } from 'react'
import { Text, View, FlatList,StyleSheet,Image, TouchableOpacity,Alert, RefreshControl  } from 'react-native';
import HeaderMovieContainer from '../containers/HeaderMovieContainer';
import {insertNewFavor, deleteFavor,queryAllFavor } from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';
import PopupDialog, { SlideAnimation, DialogTitle, ScaleAnimation } from 'react-native-popup-dialog';


const Item =(item,view,index,open,add,dele, favor, check)=>(
  view ? Grid(item,index, open):List(item, index, open,add,dele, favor, check)
)

const List = (item, index,open,add,dele, favor, check)=>(
  <View style={[list.container, {backgroundColor: index%2 == 0 ?"#fff":"#f1f1f1"}]}>
      <View style={list.title}>
        <Text style={list.name} numberOfLines={1}>{item.title}</Text>
          { this.check(favor, 'id', item.id)?
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
            :
            <TouchableOpacity
            onPress={()=>this.add(item)}
            >
              <Image style={list.icon} source={require('../../icons/star-outline.png')}/>
            </TouchableOpacity>
          }
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

const Grid=(item, index,open)=>(
  <View style={[moduleview.containermodule, {paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: index%2==0?12:6,
    paddingRight:index%2==0?6:12,}]}>
    <TouchableOpacity
    style={{width: "100%", height: 200}}
    onPress={()=>this.open(item.id)}
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
      filter: '',
      favor: [],
      dialogTitle: "Filter Movie",
      dataSource: null,
      flatListReady: false,
      current_page: 1,
    };
    console.ignoredYellowBox = ["Warning"];
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

  _onClickDetail=(id)=>{
    this.props.fetchDetail(id)
    this.props.navigation.navigate("Screen_Detail")
  }

  componentWillMount(){
    this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.url+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1')
    // this.setState({dataSource: this.state.})
  }

  // componentWillUpdate(){
  //   this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.kindFilter+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1')
  // }

  _onRefresh() {
    this.setState({refreshing: true});
    this.setState({current_page: 1})
    this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.url+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page='+this.state.current_page)
      this.setState({refreshing: false})
    
  }

  onClick_User = () => {
    this.props.navigation.navigate('DrawerOpen');
  };

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
      alert(`Insert new favor error ${error}`);
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


  loadMore = () => {
    if (this.state.current_page +1 <= 1000)
    {
      this.props.fetchData('https://api.themoviedb.org/3/movie/'+this.props.url+'?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page='+this.state.current_page)
    }
    }
  
  render() {
    const { dialogTitle } = this.state;
    return (
      <View style={{ flex: 1,  backgroundColor: "#f9f8fd"  }}>
      <PopupDialog
                ref={(popupDialog) => { this.popupDialog = popupDialog; }}
                dialogTitle={<DialogTitle titleStyle={{backgroundColor: '#2E7866'}} titleTextStyle={{ fontSize: 18, color: '#fff', fontWeight: 'bold'}} title={dialogTitle} />}
                width={0.5} height={0.35}
                dialogAnimation={<SlideAnimation toValue={10} slideFrom={'bottom'}></SlideAnimation>}
                dialogStyle={{backgroundColor: '#2c3e50'}}
          >
               <View style={{justifyContent: 'space-between', alignItems:'center', height: '70%', padding: 10}}>
                  <TouchableOpacity
                  onPress={()=>{this.props.onClickFilter('Popular'), this.props.fetchData('https://api.themoviedb.org/3/movie/popular?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1'), this.popupDialog.dismiss() }}
                >
                  <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Popular</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{this.props.onClickFilter('Top Rated'), this.props.fetchData('https://api.themoviedb.org/3/movie/top_rated?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1'), this.popupDialog.dismiss() }}
                >
                  <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Top Rated</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{this.props.onClickFilter('Now Playing'), this.props.fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1'), this.popupDialog.dismiss() }}
                >
                  <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Now Playing</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={()=>{this.props.onClickFilter('Upcoming'), this.props.fetchData('https://api.themoviedb.org/3/movie/upcoming?api_key=0267c13d8c7d1dcddb40001ba6372235&language=en-US&page=1'), this.popupDialog.dismiss() }}
                >
                  <Text style={{fontSize: 18, color: '#fff', fontWeight: 'bold'}}>Upcoming</Text>
                </TouchableOpacity>
               </View>
        </PopupDialog>
        <HeaderMovieContainer open={() => this.onClick_User()}  showModal={()=>this.popupDialog.show()}/>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh.bind(this)}
            />
          }
          data={this.props.items}
          keyExtractor={(item, index) => index}
          numColumns={this.props.kindView?2:1}
          renderItem={({item, index}) => Item(item,this.props.kindView, index, open=(id)=>this._onClickDetail(id),add=(item)=>this.addFavor(item),dele=(id)=>this.deleFavorist(id),this.state.favor, check=()=>this.findObjectByKey(this.state.favor, 'id', item.id))}
          key={this.props.kindView?1:0}
          // onEndReached={(x) => {this.setState({current_page: ++this.state.current_page}),this.loadMore()}}
          // onEndReachedThreshold={0.5}
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
    width: '90%',
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