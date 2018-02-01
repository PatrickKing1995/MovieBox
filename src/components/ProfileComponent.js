import React, { Component } from 'react'
import { Text,TextInput,FlatList, View, TouchableOpacity,Platform, Dimensions,StyleSheet,KeyboardAvoidingView, Image,AsyncStorage, TouchableNativeFeedback } from 'react-native';
import DatePicker from "react-native-datepicker";
const {height} = Dimensions.get('window');
var ImagePicker = require('react-native-image-picker');
import {queryAllReminder} from '../localdatabase/allSchemas';
import realm from '../localdatabase/allSchemas';

const NAME_USER = "name_user";
const DATE_USER = "date_user";
const MAIL_USER = "mail_user";
const GENDER_USER = "gender_user";
const AVATAR_USER = "avatar_uer"
// More info on all the options is below in the README...just some common use cases shown here
var options = {
  title: 'Select Avatar',
  customButtons: [
    {name: 'fb', title: 'Choose Photo from Facebook'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};


let pickAvatar=(image)=>{
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    }
    else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    }
    else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    }
    else {
      let source = { uri: response.uri };
      image(source);
    }
  });
}

export default class ProfileComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      editable: false,
      nameuser: null,
      dateuser: null,
      mailuser: null,
      gender: null,
      avatarSource: null,
      dataGender: ['Male','Female'],
      checked: 0,
      listReminder: [],
    }
    this.reloadData();
    realm.addListener('change', () => {
        this.reloadData();
    });
  }

  reloadData = () => {
    queryAllReminder().then((listReminder) => {
        this.setState({ listReminder });
    }).catch((error) => {
        this.setState({ listReminder: [] });
    });
    console.log(`reloadData`);
  }

  componentWillMount(){
    this.getUserInfor()
  }

  async getUserInfor(){
    const name = await AsyncStorage.getItem(NAME_USER,(err, item)=>{
      if(item==null){
        this.setState({nameuser: 'Username'})
      } else {
        this.setState({nameuser: item})
      }
    });
    const date = await AsyncStorage.getItem(DATE_USER,(err, item)=>{
      if(item==null){
        this.setState({dateuser: '00/00/0000'})
      } else {
        this.setState({dateuser: item})
      }
    });
    const mail = await AsyncStorage.getItem(MAIL_USER,(err, item)=>{
      if(item==null){
        this.setState({mailuser: 'example@enclave.vn'})
      } else {
        this.setState({mailuser: item})
      }
    });
    const gender = await AsyncStorage.getItem(GENDER_USER,(err, item)=>{
      if(item==null){
        this.setState({gender: 'Male'})
      } else {
        item=='Male'?
        this.setState({gender: item, checked: 0}):this.setState({gender: item, checked: 1})
      }
    });
    const avatar = await AsyncStorage.getItem(AVATAR_USER,(err, item)=>{
      this.setState({avatarSource: JSON.parse(item)})
  });
  }

  async setUserInfor(name, date, mail, gender, avatar){
    await AsyncStorage.setItem(NAME_USER,name)
    await AsyncStorage.setItem(DATE_USER,date)
    await AsyncStorage.setItem(MAIL_USER,mail)
    await AsyncStorage.setItem(GENDER_USER,gender)
    await AsyncStorage.setItem(AVATAR_USER,JSON.stringify(avatar))
    this.getUserInfor()
    this.setState({editable: !this.state.editable})
  }

  _clickCancel(){
    this.getUserInfor()
    this.setState({editable: !this.state.editable})
  }

  show(){
    pickAvatar(source=>this.setState({avatarSource: source}));
  }

  

  editable=()=>(
    <View style={user.editarea}>
            <View style={user.buttedit}>
              <TouchableOpacity
              style={user.cancel}
              onPress={()=>this._clickCancel()}
              >
                <Image style={user.bttedit} source={require('../../icons/close.png')}/>
              </TouchableOpacity>
              <TouchableOpacity
              style={user.done}
              onPress={()=>this.setUserInfor(this.state.nameuser, this.state.dateuser, this.state.mailuser, this.state.gender, this.state.avatarSource)}
              >
                <Image style={user.bttedit} source={require('../../icons/check.png')}/>
              </TouchableOpacity>
            </View>
            <View style={user.profilearea}>
                <View style={user.headedit}>
                <View elevation={10} style={sha.containerin}>
                <TouchableOpacity
                  onPress={this.show.bind(this)}
                >
                  <Image style={user.avatar} source={this.state.avatarSource==null?require('../../images/people.png'):this.state.avatarSource}/>
                </TouchableOpacity>
                </View>
                  <TextInput 
                  underlineColorAndroid="transparent"
                  placeholderTextColor='#fff'
                  onChangeText={(nameuser) => this.setState({nameuser})}
                  value={this.state.nameuser}
                  style={user.nameTextEdit}/>
                </View>
                <View style={user.inforedit}>
                  <View style={user.listEdit}>
                    <Image style={user.icon} source={require('../../icons/cake.png')}/>
                    <DatePicker
                      style={{justifyContent: "flex-end"}}
                      date={this.state.dateuser}
                      mode="date"
                      placeholder={this.state.dateuser}
                      format="DD/MM/YYYY"
                      minDate="01-01-1800"
                      maxDate="01-01-3000"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: "absolute",
                          left: 0,
                          top: 4,
                          tintColor: "#566a81",
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 10
                        }
                      }}
                      onDateChange={date => {
                        this.setState({ dateuser: date.replace(/-/g, "/") });
                      }}
                    />
                  </View>
                  <View style={user.listEdit}>
                    <Image style={user.icon} source={require('../../icons/email-variant.png')}/>
                    
                      <TextInput
                        disableFullscreenUI={true}
                        underlineColorAndroid="transparent"
                        placeholderTextColor='#fff'
                        multiline={false}
                        keyboardType= "email-address"
                        onChangeText={(mailuser) => this.setState({mailuser})}
                        value={this.state.mailuser}
                        style={user.textEE}/>
                    
                  </View>
                  <View style={user.listEdit}>
                    <Image style={user.icon} source={require('../../icons/account-outline.png')}/>
                      <View style={{flexDirection: 'row', justifyContent: "center", alignItems: 'flex-start'}}>
                      {this.state.dataGender.map((data, key)=>{
                          return(
                            <View key={key} style={radio.container}>
                              {
                                this.state.checked==key?
                                <TouchableOpacity
                                  style={radio.buttRadio}
                                >
                                  <Image style={radio.imageRadio} source={require('../../icons/marked.png')}/>
                                  <Text style={radio.textRadio}>{data}</Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity
                                  style={radio.buttRadio}
                                  onPress={()=>{this.setState({checked: key,gender: data})}}
                                >
                                  <Image style={radio.imageRadio} source={require('../../icons/blank.png')}/>
                                  <Text style={radio.textRadio}>{data}</Text>
                                </TouchableOpacity>
                              }
                            </View>
                          )
                        })
                      }
                      </View>
                    
                  </View>
                  </View>
            </View>
          </View>
  )

  render() {
    return (
      <View style={user.container}>
        {
          this.state.editable?
          this.editable():
          <View style={user.editarea}>
                <View style={user.buttAccount}>
                  <TouchableOpacity
                  style={user.edit}
                  onPress={()=>this.setState({editable: !this.state.editable})}
                  >
                    <Image style={user.bttedit} source={require('../../icons/account-edit.png')}/>
                  </TouchableOpacity>
                </View>
              <View style={user.top}>
              <View style={user.head}>
              <View elevation={10} style={sha.containerin}>
              <Image style={user.avatar} source={this.state.avatarSource==null?require('../../images/people.png'):this.state.avatarSource}/>
              </View>
                <Text style={user.nameText}>{this.state.nameuser}</Text>
              </View>
              <View style={user.infor}>
                <View style={user.list}>
                  <Image style={user.icon} source={require('../../icons/cake.png')}/>
                  <Text style={user.textBD}>{this.state.dateuser}</Text>
                </View>
                <View style={user.list}>
                  <Image style={user.icon} source={require('../../icons/email-variant.png')}/>
                  <Text style={user.text}>{this.state.mailuser}</Text>
                </View>
                <View style={user.listGender}>
                  <Image style={user.icon} source={require('../../icons/account-outline.png')}/>
                  <Text style={user.textDate}>{this.state.gender}</Text>
                </View>
              </View>
            </View>
            <View style={user.center}>
              <View style={user.reminder}>
                <Text style={user.textreminder}>Reminder List:</Text>
                <TouchableOpacity
                  style={user.press}
                  onPress={()=>{this.props.navigation.navigate("Screen_All")}}
                >
                  <Text style={user.textshow}>Show All</Text>
                  <Image style={user.iconReminder} source={require('../../icons/right.png')}/>
                </TouchableOpacity>
              </View>
              <View style={user.listreminder}>
              <FlatList
                  data={this.state.listReminder.slice(this.state.listReminder.length-2,this.state.listReminder.length)}
                  showsVerticalScrollIndicator={false}
                  initialNumToRender={2}
                  scrollEnabled={false}
                  renderItem={({item, index}) => {
                    return <View style={user.detail} elevation={10} >
                    <Text style={user.textDetail}>{item.title} - {item.release_date.slice(0,4)} - {item.vote_average}/10</Text>
                    <Text style={user.textDetail}>{item.dateremind}</Text>
                  </View>;
                  }}
                  style={{width: "100%", height: "15%"}}
                  keyExtractor={item => item.id}
                />
              </View>
            </View>
          </View>
        }
        <View style={user.bottom}>
          <Text style={user.copy}>Copyright@Enc 2018</Text>
        </View>
      </View>
    )
  }
}

const sha=StyleSheet.create({
  containerin: {
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 0,
    shadowOpacity: 1,
    backgroundColor: "white",
    alignItems: "center",
    padding: 2
  },
})

const user = StyleSheet.create({
  container: {
    justifyContent: "center",
    backgroundColor: "#3F485B",
  },
  copy: {
    color: "#fff"
  },
  detail:{
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 0,
    shadowOpacity: 0.6,
    margin: 15,
    paddingLeft: 5,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#2E7866"
  },
  cancel:{
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#c12127" 
  },
  done:{
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#2E7866"
  },
  topavatar:{
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  textDetail: {
     
    fontSize: 16,
    color: "#fff"
  },
  edituser:{
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#F2C640"
  },
  edit:{
    alignItems: "center",
    justifyContent: "center",
    left: 117,
    height: 40,
    width: 40,
    borderRadius: 50,
    backgroundColor: "#F2C640"
  },
  textshow:{
    padding: 5,
    fontSize: 15,
    color: "#F2C640"
  },
  bttedit:{
    height: 30,
    width: 30, 
  },
  btteditable: {
    height: 40,
    width: 40, 
  },
  iconReminder: {
    height: 25,
    width: 25,
    tintColor: "#F2C640"
  },
  press: {
    flex: 1,
    opacity: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-end",
    padding: 5,
  },
  list: {
    // borderBottomWidth: 1,
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  listEdit:{  
    marginLeft: 10,
    marginBottom: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: "center"
  },
  listGender: {
    // borderBottomWidth: 1,
    flex: 1,
    marginLeft: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: "flex-start",
    alignItems: 'baseline',
  },
  textreminder:{
    padding: 15,
    alignItems: "center", 
    fontWeight: "bold",
    fontSize: 18,
    color: "#F2C640"
  },
  reminder: {
    flex: 1,
    height: "15%",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "space-between",
  },
  icon:{
    height: 30,
    width: 30,
    tintColor: "#fff"
  },
  listreminder:{
    justifyContent: "center",
    alignItems: 'flex-end',
    width: "100%",
    height: "85%",
  },
  textBD:{
    paddingTop: 5,
    paddingLeft: 10,
    fontSize: 18,
    width: 200,
    color: "#fff",
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  text: {
    justifyContent: "center", 
    paddingLeft: 10,
    fontSize: 18,
    width: 200,
    color: "#fff"
  },
  textDate: {
    paddingLeft: 10,
    fontSize: 18,
    width: 200,
    color: "#fff"
  },
  avatar: {
    borderRadius: 50,
    borderWidth: 10,
    height: 90,
    width: 90,
  },
  nameTextEdit: {
    fontSize: 20,
    width: "90%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff"
  },
  nameText: {
    paddingTop: 10,
    fontSize: 20,
    width: "90%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff"
  },
  textEE:{
    paddingLeft: 10,
    fontSize: 18,
    alignSelf: "flex-end",
    color: "#fff"
  },
  infor: {
    height: "50%",
  },
  inforedit:{
    height: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  headedit:{
    alignItems: 'center',
    height: "40%",
    justifyContent: 'center',
  },
  head: {
    height: "50%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  editarea:{
    height: '91%',
  },
  buttedit: {
    width: "100%",
    height: "15%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  buttAccount:{
    height: "15%",
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight: 20,
  },
  profilearea:{
    height: '85%',
    justifyContent: "center",
  },
  top:{
    height: '55%',
    // backgroundColor: '#98d2c1'
  },
  center:{
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    height: '9%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f06966'
  }
})

const radio= StyleSheet.create({
  container:{
    marginLeft: 10,
    flexDirection: 'row',
    width: 125,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  buttRadio:{
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  imageRadio:{
    width: 25,
    height: 25
  },
  textRadio:{
    fontSize: 15,
    color: "white"
  },
})