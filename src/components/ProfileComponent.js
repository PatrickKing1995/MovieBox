import React, { Component } from 'react'
import { Text,TextInput, View, TouchableOpacity, Dimensions,StyleSheet, Image,AsyncStorage, TouchableNativeFeedback } from 'react-native';
const {height} = Dimensions.get('window')

const NAME_USER = "name_user";
const DATE_USER = "date_user";
const MAIL_USER = "mail_user";
const GENDER_USER = "gender_user";

export default class ProfileComponent extends Component {
  constructor(props){
    super(props);
    this.state={
      editable: false,
      nameuser: null,
      dateuser: null,
      mailuser: null,
      gender: null,
    }
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
        this.setState({gender: item})
      }
    });
  }

  async setUserInfor(name, date, mail, gender){
    await AsyncStorage.setItem(NAME_USER,name)
    await AsyncStorage.setItem(DATE_USER,date)
    await AsyncStorage.setItem(MAIL_USER,mail)
    await AsyncStorage.setItem(GENDER_USER,gender)
    this.getUserInfor()
    this.setState({editable: !this.state.editable})
  }

  _clickCancel(){
    this.getUserInfor()
    this.setState({editable: !this.state.editable})
  }

  render() {
    return (
      <View style={user.container}>
        {
          this.state.editable?
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
              onPress={()=>this.setUserInfor(this.state.nameuser, this.state.dateuser, this.state.mailuser, this.state.gender)}
              >
                <Image style={user.bttedit} source={require('../../icons/check.png')}/>
              </TouchableOpacity>
            </View>
            <View style={user.profilearea}>
                <View style={user.head}>
                <View elevation={10} style={sha.containerin}>
                <Image style={user.avatar} source={require('../../images/people.png')}/>
                </View>
                  <TextInput 
                  placeholder={this.state.nameuser}
                  keyboardType="default"
                  underlineColorAndroid="transparent"
                  placeholderTextColor='#fff'
                  onChangeText={(nameuser) => this.setState({nameuser})}
                  style={user.nameText}/>
                </View>
                <View style={user.infor}>
                  <View style={user.list}>
                    <Image style={user.icon} source={require('../../icons/cake.png')}/>
                    <TextInput 
                      placeholder='Huy'
                      underlineColorAndroid="transparent"
                      placeholderTextColor='#fff'
                      onChangeText={(dateuser) => this.setState({dateuser})}
                      style={user.textEE}/>
                  </View>
                  <View style={user.list}>
                    <Image style={user.icon} source={require('../../icons/email-variant.png')}/>
                    <TextInput 
                      placeholder={this.state.mailuser}
                      numberOfLines= {1}
                      underlineColorAndroid="transparent"
                      placeholderTextColor='#fff'
                      onChangeText={(mailuser) => this.setState({mailuser})}
                      style={user.textEE}/>
                  </View>
                  <View style={user.list}>
                    <Image style={user.icon} source={require('../../icons/account-outline.png')}/>
                    <TextInput 
                      placeholder={this.state.gender}
                      numberOfLines= {1}
                      underlineColorAndroid="transparent"
                      placeholderTextColor='#fff'
                      onChangeText={(gender) => this.setState({gender})}
                      style={user.textEE}/>
                  </View>
                  </View>
            </View>
          </View>:
          <View style={user.editarea}>
                <View style={user.top}>
              <View style={user.head}>
              <TouchableOpacity
                style={user.edit}
                onPress={()=>this.setState({editable: !this.state.editable})}
                >
                  <Image style={user.bttedit} source={require('../../icons/account-edit.png')}/>
                </TouchableOpacity>
              <View elevation={10} style={sha.containerin}>
              <Image style={user.avatar} source={require('../../images/people.png')}/>
              </View>
                <Text style={user.nameText}>{this.state.nameuser}</Text>
              </View>
              <View style={user.infor}>
                <View style={user.list}>
                  <Image style={user.icon} source={require('../../icons/cake.png')}/>
                  <Text style={user.text}>{this.state.dateuser}</Text>
                </View>
                <View style={user.list}>
                  <Image style={user.icon} source={require('../../icons/email-variant.png')}/>
                  <Text style={user.text}>{this.state.mailuser}</Text>
                </View>
                <View style={user.list}>
                  <Image style={user.icon} source={require('../../icons/account-outline.png')}/>
                  <Text style={user.text}>{this.state.gender}</Text>
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
                <View style={user.detail} elevation={10} >
                  <Text style={user.textDetail}>The Dark Tower - 2017 - 5.6/10</Text>
                  <Text style={user.textDetail}>2017-09-02 10:12</Text>
                </View>
                <View style={user.detail} elevation={10}>
                  <Text style={user.textDetail}>The Dark Tower - 2017 - 5.6/10</Text>
                  <Text style={user.textDetail}>2017-09-02 10:12</Text>
                </View>
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
    flex: 1,
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
    flex:1,
    margin: 10,
    paddingLeft: 25,
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
  text: {
    justifyContent: "center", 
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
  nameText: {
    fontSize: 20,
    width: "90%",
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff"
  },
  textEE:{
    paddingLeft: 10,
    fontSize: 18,
    width: 200,
    color: "#fff"
  },
  infor: {
    flex: 1,
    height: "40%",
  },
  head: {
    paddingBottom: 15,
    height: "60%",
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  editarea:{
    height: '91%',
  },
  buttedit: {
    width: "100%",
    height: "20%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  },
  profilearea:{
    height: '80%',
  },
  top:{
    height: '65%',
    // backgroundColor: '#98d2c1'
  },
  center:{
    height: '35%',
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