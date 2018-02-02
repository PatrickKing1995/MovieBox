import React, { Component } from 'react';
import { View, Text, StatusBar,Picker,StyleSheet,ToastAndroid, Image, TouchableOpacity, BackHandler } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { insertNewReminder } from '../localdatabase/allSchemas';
import PushNotification from 'react-native-push-notification';

export  class MoviesHearder extends Component {

  constructor(props){
    super(props);
    this.state={
      show: false,
      filter: "Popular",
      modalVisible: false,
    }
  }
  
  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  componentWillMount(){
    this.props.onClickFilter('Popular')
  }

  render() {
    return (
     
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#2E7866'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={this.props.showModal}
                  >
                    <Text style={header.title}>{this.props.kindFilter}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>{this.props.onClickSwitch()}}
                  >
                  {
                    this.props.kindView?
                    <Image style={header.image2} source={require('../../icons/view-list.png')}/> :
                    <Image style={header.image2} source={require('../../icons/view-module.png')}/>
                  }
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class FavorHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>Favorites</Text>
                <TouchableOpacity
                  >
                  <Text style={header.image2}></Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class SettingHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>Settings</Text>
                <TouchableOpacity
                  >
                  <Text style={header.image2}></Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class AboutHearder extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <StatusBar translucent={true} backgroundColor={'transparent'}/>
            <View style={[header.container, {backgroundColor: "#2E7866"}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rap}>
                <TouchableOpacity
                onPress={this.props.open}
                  >
                    <Image style={header.image2} source={require('../../icons/menu.png')}/>
                </TouchableOpacity>
                <Text style={header.title}>About</Text>
                <TouchableOpacity
                  >
                  <Text style={header.image2}></Text>
                </TouchableOpacity>
              </View>
            </View>
        </View>
    )
  }
}

export  class AllRemind extends Component {
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#2E7866'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rapback}>
                <TouchableOpacity
                style={header.back}
                onPress={this.props.open}
                  >
                    <Image style={header.imageback} source={require('../../icons/left.png')}/>
                    <Text style={header.backText}>Settings</Text>
                </TouchableOpacity>
                <Text style={header.titleback}>All Reminders</Text>
              </View>
            </View>
        </View>
    )
  }
}

export  class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
      date: null,
      time: null,
      isDateTimePickerVisible: false,
    }
  }

  checkTime(i) 
    {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    let month = +date.getMonth()+1;
    let day = +date.getDate();
    let datereminder= date.getFullYear()+'-'+this.checkTime(month)+'-'+this.checkTime(day)+'  '+this.checkTime(date.getHours())+':'+this.checkTime(date.getMinutes());
    const newReminders = {
      id: this.props.id,
      title: this.props.detailFilm.title,
      poster_path: this.props.detailFilm.poster_path,
      release_date: this.props.detailFilm.release_date,
      vote_average: this.props.detailFilm.vote_average.toString(),
      dateremind: datereminder,
    };
    insertNewReminder(newReminders).then(()=>{
      PushNotification.localNotificationSchedule({
        id: this.props.id.toString(),
        message: this.props.detailFilm.title+'/'+datereminder,
        date: date
      });
      ToastAndroid.showWithGravity(
        'Reminder Success',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    }).catch((error) => {
      alert(`This film was been reminder!`);
});
    // this.props.addRemind()
    
    this._hideDateTimePicker();
  };

  componentDidMount() {
    PushNotification.configure({
      onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
      },
    });
  }
  render() {
    return (
        <View style={header.wrapp} elevation={20}>
            <View style={[header.container, {backgroundColor: '#2E7866'}]}>
            <View style={header.statusbar}>
            </View>
              <View style={header.rapback}>
                <TouchableOpacity
                style={header.back}
                onPress={this.props.open}
                  >
                    <Image style={header.imageback} source={require('../../icons/left.png')}/>
                    <Text style={header.backText}>Back</Text>
                </TouchableOpacity>
                <Text style={header.titlebackDetail} numberOfLines={2}>{this.props.name}</Text>
                <TouchableOpacity
                style={header.remind}
                onPress={()=>this._showDateTimePicker()}
                  >
                    <Image style={header.imageremind} source={require('../../icons/bell-plus.png')}/>
                </TouchableOpacity>
                <DateTimePicker
                mode='datetime'
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this._handleDatePicked}
                onCancel={this._hideDateTimePicker}
              />
              </View>
            </View>
        </View>
    )
  }
}

const header = StyleSheet.create({
  statusbar: {
    height: "30%"
  },
  remind:{
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  imageremind:{
    height: 25,
    width: 25
  },
  back: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  backText: {
    color: '#FFFFFF',
    fontSize: 20,
    alignSelf: 'center'
  },
  wrapp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 0,
    shadowOpacity: 1,
  },
  container: {
    height: 70,
  },
  rap:  {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    padding: 10,
  },
  rapback: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingRight: 5,
  },
  picker:  {
    width: "40%",
    color: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: '#FFFFFF'
  },
  titlebackDetail:{
    width: "50%",
    color: '#FFFFFF',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    paddingRight: 10,
  },
  titleback:{
    width: "60%",
    color: '#FFFFFF',
    fontSize: 22,
  },
  image1: {
    height: 26,
    width: 26,
    marginLeft: 100
  },
  imageback: {
    height: 40,
    width: 20,
    marginLeft: 10,
  },
  image2: {
    height: 30,
    width: 30,
  }
});