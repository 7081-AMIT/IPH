// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   SafeAreaView,
//   StatusBar,
//   id,
//   TextInput,
//   Dimensions,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// const { width, height } = Dimensions.get("window");

// const F12 = ({ navigation }) => {
//   const FlatList1 = [
//     {
//       id: require('./image/m5.png'),
//       name: "Mohammed",
      
//     },
    
   



//   ];
//   return (
//     <View style={{
//        backgroundColor: '#ADD8E6', height: height * 1,}}>
//       <View style={{ 
//         //backgroundColor: 'green', 
//         height: height * 0.1, width: width * 0.9, alignSelf: 'center',marginTop:20 }}>
//         <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
//           <View>
//             <Image
//               source={require('../AMIT/image/f.png')}
//               style={styles.img1}
//             />
//           </View>
//           <View style={{
//             // backgroundColor: 'red',
//               height: height * 0.04, width: width * 0.24, marginTop: 10, alignSelf: 'center' }}>
//             <Text style={{ textAlign: 'center', fontSize: 20, color: 'black' }}> Coaches



//             </Text>
//           </View>
//           <View style={{
//             // backgroundColor: 'black',
//            height: height * 0.04, width: width * 0.24, marginTop: 10, alignSelf: 'center' }}>
//             <Text style={{ textAlign: 'center', fontSize: 20, color: 'red' }}>
//               32 min

//             </Text>
//           </View>
//         </View>
//         <View style={{backgroundColor:'white',height:height*0.2,width:width*0.99,alignSelf:'center',marginTop:5}}>
//           <View style={{
//             //backgroundColor:'red',
//             width:width*0.9,alignSelf:'center',margin:10}}>
//           <Text style={{fontSize:18,color:'black'}}>Favorites</Text>
//           </View>
//           <View style={styles.main}>
//         <View style={styles.a2}>
//           <StatusBar backgroundColor="blue" barStyle="light-content" />
//           <View style={{
//            // backgroundColor:'cyan'
//             }}>
//             <FlatList
//               numColumns="6"
//               data={FlatList1}
//               renderItem={({ item }) => {
//                 return (
//               <View style={{flexDirection:'row',}}>
//                     <View style={{backgroundColor:'white',paddingLeft:15}}>
//                             <Image
//               source={require('../AMIT/image/m1.png')}
//               style={styles.img}
//             />
//             <Text>Mohammed</Text>
             
              
//                   </View>
//                   <View style={{backgroundColor:'white',paddingLeft:10}}>
//                             <Image
//               source={require('../AMIT/image/m6.png')}
//               style={styles.img}
//             />
//             <Text>lsabelle78</Text>
             
              
//                   </View>
//                   <View style={{backgroundColor:'white',paddingLeft:10}}>
//                             <Image
//               source={require('../AMIT/image/m2.png')}
//               style={styles.img}
//             />
//             <Text>Juleseror</Text>
             
              
//                   </View>
//                   <View style={{backgroundColor:'white',paddingLeft:10}}>
//                             <Image
//               source={require('../AMIT/image/m3.png')}
//               style={styles.img}
//             />
//             <Text>Maxime c.</Text>
             
              
//                   </View>
//                   <View style={{backgroundColor:'white',paddingLeft:10}}>
//                             <Image
//               source={require('../AMIT/image/m5.png')}
//               style={styles.img}
//             />
//             <Text>Caew</Text>
             
              
//                   </View>
//               </View>
//                 );
//               }}
//             />
//           </View>
//         </View>
//       </View>
         
          

//         </View>
//         <View style={{backgroundColor:'white',height:height*0.9,width:width*0.99,marginTop:12,alignSelf:'center',justifyContent:'space-between'}}>
//           <View style={{width:width*0.9,alignSelf:'center',margin:8}}>
//             <Text style={{color:'black',fontWeight:'bold'}}>Recommended</Text>
          
        
//             <View style={{
//             // backgroundColor:'yellow',
//               width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
//             <Image
//               source={require('../AMIT/image/m1.png')}
//               style={styles.img}
//             />
//           <View style={{flexDirection:'column',margin:10}}>
//           <View style={{
//            // backgroundColor:'red',
//             }}>
//              <Text style={{color:'black',fontWeight:'bold'}}>AlexGT</Text>
//             </View>
//             <View style={{
//              // backgroundColor:'blue',
//               marginTop:5}}>
//               <Text>We can talk about anything except</Text>
//               <Text> cars lol</Text>
//             </View>
//           </View>
//             </View>
  

//             <View style={{
//             // backgroundColor:'yellow',
//               width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
//             <Image
//               source={require('../AMIT/image/m2.png')}
//               style={styles.img}
//             />
//           <View style={{flexDirection:'column',margin:10}}>
//           <View style={{
//            // backgroundColor:'red',
//             }}>
//                 <Text style={{color:'black',fontWeight:'bold'}}>John B.</Text>
//             </View>
//             <View style={{
//              // backgroundColor:'blue',
//               marginTop:5}}>
//               <Text>Cooking, relationships, life in general. </Text>
//               <Text>Who knows a very good recipe with </Text>
             
//             </View>
//           </View>
//             </View>
  

//             <View style={{
//             // backgroundColor:'yellow',
//               width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
//             <Image
//               source={require('../AMIT/image/m3.png')}
//               style={styles.img}
//             />
//           <View style={{flexDirection:'column',margin:10}}>
//           <View style={{
//            // backgroundColor:'red',
//             }}>
//                <Text style={{color:'black',fontWeight:'bold'}}>Charly webber</Text>
//             </View>
//             <View style={{
//              // backgroundColor:'blue',
//               marginTop:5}}>
//               <Text>

// Lorem ipsum dolor sit amet, consectetur

// adipiscing elit, sed do eiusmod </Text>
             
//             </View>
//           </View>
//             </View>
  
//             <View style={{
//             // backgroundColor:'yellow',
//               width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
//             <Image
//               source={require('../AMIT/image/m6.png')}
//               style={styles.img}
//             />
//           <View style={{flexDirection:'column',margin:10}}>
//           <View style={{
//            // backgroundColor:'red',
//             }}>
//               <Text style={{color:'black',fontWeight:'bold'}}>Laui Quin</Text>
//             </View>
//             <View style={{
//              // backgroundColor:'blue',
//               marginTop:5}}>
//               <Text>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip  </Text>
            
//             </View>
//           </View>
//             </View>
  
//             <View style={{
//             // backgroundColor:'yellow',
//               width:width*0.92,alignSelf:'center',flexDirection:'row',height:height*0.095}}>
          
//             <Image
//               source={require('../AMIT/image/m5.png')}
//               style={styles.img}
//             />
//           <View style={{flexDirection:'column',margin:10}}>
//           <View style={{
//            // backgroundColor:'red',
//             }}>
//               <Text style={{color:'black',fontWeight:'bold'}}>Vansile Stancu</Text>
//             </View>
//             <View style={{
//              // backgroundColor:'blue',
//               marginTop:5}}>
//               <Text>Duis aute irure dolor in reprehenderit in </Text>
//               <Text>voluptate velit ease cillium dolorie eu </Text>
//               <Text>fugiat nulla parioatur</Text>
//             </View>
//           </View>
//             </View>
  
//             <View style={{backgroundColor:'white',height:height*0.1,flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
//           <TouchableOpacity>
//           <View>
//               <Image
//               source={require('../AMIT/image/s1.png')}
//               style={styles.img}
//             />

//               </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View>
//               <Image
//               source={require('../AMIT/image/s3.png')}
//               style={styles.img}
//             />

//               </View>
//           </TouchableOpacity>
//           <TouchableOpacity>
//           <View>
//               <Image
//               source={require('../AMIT/image/s2.png')}
//               style={styles.img}
//             />

//               </View>
//           </TouchableOpacity>
//           </View>

         
         
//           </View>
         
        


//         </View>




//       </View>
  
//     </View>
//   );
// };

// export default F12;

// const styles = StyleSheet.create({
//   a2: {
//     // margin:50,
//     backgroundColor: "green",
//     height: 100
//   },
//   a2: {
//     //  margin:60,
//   },
//   main: {
//     //backgroundColor: "green",
//     height: height * 0.12,
//     margin: 8,
//     width:width*0.95,
//     alignSelf:'center',
    
//   },
//   img: {
//     height: height * 0.07,
//     width: width * 0.15,
//     marginTop: 10,
//     borderRadius: 100
//   },
//   img1: {
//     height: height * 0.07,
//     width: width * 0.19,
//     marginTop: 10,
//     borderRadius: 10,
    
//   }

  
// });




//second part



import React, {useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import Icon from 'react-native-vector-icons/EvilIcons';
//import Icon from 'react-native-vector-icons/Fontisto';

//import {TextInput} from 'react-native-paper';
import {Avatar} from 'react-native-paper';

const {height, width} = Dimensions.get('window');

const Login1 = ({navigation}) => {
  const [passwordVisible, setPasswordVisible] = useState('false');
  const [isSelected, setSelection] = useState(false);

  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState(null);

  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState(null);

  const [password, setPassword] = useState('');
  const [Errorpassword, setErrorpassword] = useState(null);

  const nameValidate = name => {
    var Regex = /^[a-zA-Z ]{2,40}$/;
    if (name === '' || name === undefined || name === null) {
      setErrorName('please enter name');
    }
    if (!Regex.test(name)) {
      setErrorName('not correct format for name');
    } else {
      setErrorName(null);
    }
  };

  const emailValidate = email => {
    var Regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === '' || email === undefined || email === null) {
      setErrorEmail('please enter email');
    }
    if (!Regex.test(email)) {
      setErrorEmail('not correct format for email address');
    } else {
      setErrorEmail(null);
    }
  };
    const passwordValidate = password => {
    var Regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    if (password === '' || password === undefined || password === null) {
      setErrorpassword('Please enter password');
    }
    if (!Regex.test(password)) {
      setErrorpassword('please use at least 6 - 12 characters');
    } else {
      setErrorpassword(null);
    }
  };

  const validate = () => {
    const flag = true;
    if (email === '') {
      setErrorEmail('Please enter email');
    }
    if (password === '') {
      setErrorpassword('Please enter password');
    }
    return flag;
  };

  const onSubmit = () => {
    if (validate()) {
      navigation.navigate('SignIn');
    } else {
      alert('Something went wrong');
    }
  };
  return (
    <SafeAreaView>
    <ScrollView>
    <View style={styles.main}>
      <View>
        <Image source={require('../AMIT/image/logo.png')} style={styles.img}></Image>
      </View>
      <View style={styles.m1}>
        <Text style={styles.txt}>Register with Us!</Text>
        <Text style={styles.txt1}>Signup to Continue</Text>

      </View>
      <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Name
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="Username"
                placeholderTextColor={'black'}
                keyboardType="name-phone-pad"
                onChangeText={text => {
                  setName(text), nameValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorName !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorName}
                </Text>
              </View>
            ) : null}
            <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Email
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="example@gmail.com"
                placeholderTextColor={'black'}
                keyboardType="name-phone-pad"
                onChangeText={text => {
                  setEmail(text), emailValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {errorEmail !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {errorEmail}
                </Text>
              </View>
            ) : null}
               <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Password
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="*********"
                placeholderTextColor={'black'}
                
                keyboardType="default"
                onChangeText={text => {
                  setPassword(text), passwordValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}
               <View style={{marginTop:10}}>
            <View style={styles.m2}>
        <View style={{
         // backgroundColor:'red',
          width:width/1.32,alignSelf:'center'}}>
          <Text style={styles.txt2}>
            Confirm Password
          </Text>
        </View>
      
        <View style={styles.input}>
              {/* <Icon name="email" size={30} /> */}
             {/* // <Icon size={34} name="person-circle"  style={{color:'purple'}} /> */}
           

                <TextInput
                placeholder="********"
                placeholderTextColor={'black'}
                keyboardType="default"
                onChangeText={text => {
                  setPassword(text), passwordValidate(text);
                }}
                style={{
                  alignSelf: 'center',
                  height: height * 0.05,
                  width: width * 0.78,
                 // backgroundColor: 'yellow',
                }}
              />
            </View>
            {Errorpassword !== null ? (
              <View
                style={{
                  height: '5%',
                  width: '80%',
                  //backgroundColor: 'green',
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <View style={{height: 20}}></View>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  {Errorpassword}
                </Text>
              </View>
            ) : null}
            <View style={styles.btn}>
             <TouchableOpacity>
             <View style={{backgroundColor:'white',borderRadius:2,borderWidth:2,height:height*0.03,width:width*0.05,borderColor:'grey'}}></View>
             </TouchableOpacity>
              
              <TouchableOpacity>

              </TouchableOpacity>
              <Text>  Email me if you have any deal</Text>
            </View>
            <TouchableOpacity>
            <View style={{backgroundColor:'#8B8000',height:height*0.06,width:width*0.3,borderRadius:100,alignSelf:'center',justifyContent:'center',marginTop:10}}>
              <Text style={{textAlign:'center',}}>Sign up</Text>

            </View>
            </TouchableOpacity>
            <View style={{alignSelf:'center',marginTop:20}}>
              <Text>or login using social media</Text>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',width:width*0.25,justifyContent:'space-between',margin:10}}>
             <TouchableOpacity>
             <View>
              <Image source={require('../AMIT/image/fb.png')} style={styles.img1}></Image>

              </View>
             </TouchableOpacity>
           <TouchableOpacity>
           <View>
              <Image source={require('../AMIT/image/ga.png')} style={styles.img1}></Image>

              </View>
           </TouchableOpacity>
            <TouchableOpacity>
            <View>
              <Image source={require('../AMIT/image/t.png')} style={styles.img1}></Image>

              </View>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row',alignSelf:'center',margin:20}}>
              <Text>Already have an account ?</Text>
              <TouchableOpacity>
              <Text style={{color:'blue'}}>Sign In</Text>
              </TouchableOpacity>
            </View>


      </View>
            </View>

      </View>
            </View>
            

      </View>
      
            </View>
            
            

      </View>
      
  
  
   
     

      </View>

    </ScrollView>
     
    </SafeAreaView>
  );
};

export default Login1;

const styles = StyleSheet.create({
  main: {
  backgroundColor: 'white',
    height: height * 1,
    width: width * 1,
    
  },
  txt: {
    fontSize: 25,
    //fontWeight: 'bold',
    textAlign: 'center',
    color:'black'
  },
  txt2: {
    fontSize: 15,
   // fontWeight: 'bold',
    //textAlign: 'center',
  },
  txt1: {
    fontSize: 16,
    //fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    height: height * 0.199,
    width: width * 0.35,
   // borderRadius: 100,
    alignSelf: 'center',
    marginTop:10
  },
  input: {
   // borderRadius: 10,
    height: height * 0.04,
    width: width / 1.3,
  //  borderWidth: 2,
    borderColor: 'grey',
    alignSelf: 'center',
    alignItems:'center',
    flexDirection: 'row',
   // backgroundColor: 'yellow',
   borderBottomWidth:2
    
  },
  input1: {
    backgroundColor: 'skyblue',
    borderRadius: 10,
    height: height * 0.07,
    width: width / 1.1,
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  input2: {
    alignItems:'center',
    alignSelf:'center',
    justifyContent:'center'
  },
  m2:{
   // backgroundColor:'cyan',
    height:height*0.7
  },
  btn:{
    flexDirection:'row',
    alignSelf:'center',
    margin:20,
    width:width/1.3
  },
  img1:{
    height:height*0.03,
    width:width*0.07,alignSelf:'center',
    borderRadius:100
  }
});