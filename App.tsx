import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';


const App = () => {
  return(
    <View>
       <View>
          <Tabs/>
        </View>
      <View>
        <Header />
      </View>
      <ScrollView>
        <Box1 />
        <Box2 />
        <Box3 />
        <Box4 />
        <Box5 />
        <Box6 />
        </ScrollView>
       
        </View>
      
        
  );
};
const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/gamer.png')} style={styles.tinylogo} />
      <Text style={styles.headText}>Namaste</Text>
      <Text style={styles.headText2}>Anand Ji !</Text>
    </View>
  );
};
const Box1 = () => {
  return (
    <View style={styles.container2}>
      <View style={{marginLeft:10}}>
      <Text style={styles.commontext}>My GenWise Familly</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        Connect better with them
      </Text>
      </View>
    </View>
  );
};
const Box2 = () => {
  return (
    <View style={styles.box2}>
      <View style={styles.col}>
        <View style={styles.row}>
          <Image
            source={require('./assets/watsapplogo.png')}
            style={{height: 50, width: 50}}
          />
          <Text style={styles.commontext}>Watsapp</Text>
          <Text style={styles.commontext}>Greetings</Text>
          <Text style={styles.comonly}>SEND NOW</Text>
        </View>
        <View style={styles.row}>
          <Image 
          source={require('./assets/shorts.png')} 
          style={{height: 50, width: 50}}/>
          <Text style={styles.commontext}>Genwise </Text>
          <Text style={styles.commontext}>Shorts</Text>
          <Text style={styles.comonly}>WATCH NOW</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
          <Image source={require('./assets/medicine.png')} style={{height: 50, width: 50}}/>
          <Text style={styles.commontext}>Medicine </Text>
          <Text style={styles.commontext}>Reminders</Text>
          <Text style={styles.comonly}>SET NOW</Text>
        </View>
        <View style={styles.row}>
          <Image source={require('./assets/phone.png')} style={{height: 50, width: 50}}/>
          <Text style={styles.commontext}>Personal Assisstant (PA) </Text>
          <Text style={styles.comonly}>CALL NOW</Text>
        </View>
      </View>
      <View style={styles.col}>
        <View style={styles.row}>
        <Image source={require('./assets/bank.png')} style={{height: 50, width: 50}}/>
          <Text style={styles.commontext}>Risk-free</Text>
          <Text style={styles.commontext}>Passbook</Text>
          <Text style={styles.comonly}>CHECK NOW</Text>
        </View>
        <View style={styles.row}>
        <Image source={require('./assets/community.png')} style={{height: 50, width: 50}}/>
          <Text style={styles.commontext}>Join Our</Text>
          <Text style={styles.commontext}>Community</Text>
          <Text style={styles.comonly}>JOIN NOW  </Text>
        </View>
      </View>
    </View>
  );
};
const Box3 = () => {
  return (
    <View style={styles.container2}>
      <View>
      <Image source={require('./assets/calendar.png')} style={{height: 50, width: 50}}/>
      </View>
      <View style={{marginLeft:30}}>
      <Text style={styles.commontext}>GenWise Events</Text>
      <Text style={{fontSize: 15, fontWeight: 'bold'}}>
        Learn,Enjoy and much more!
      </Text>
      </View>
    </View>
  );
};
const Box4 = () => {
  return (
    <View style={styles.container3}>
      <View>
        <Text style={styles.commontext}>Join Our Community on</Text>
        <Text style={styles.commontext}>WatsaApp</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          Get updates on new features</Text>
        </View>
      <View>
      <Image source={require('./assets/watsapcomunity.jpeg')} style={styles.imgprop}/>
      </View>
    </View>
  );
};
const Box5 = () => {
  return (
    <View style={styles.container3}>
      <View>
        <Text style={styles.commontext}>Have a question? Call Us!</Text>
        <Text style={{fontSize:15,fontWeight:'bold'}}>Free call with a GenWise agent now </Text>
        </View>
      <View>
      <Image source={require('./assets/callus.jpeg')} style={{height: 90, 
    width: 90,
    marginLeft:30,
    marginTop:-25,
    borderRadius:10}}/>
      </View>
    </View>
  );
};
const Box6 = () => {
  return (
    <View style={styles.container3}>
      <View>
        <Text style={styles.commontext}>Know more about GenWise</Text>
        <Text style={styles.commontext}>Exclusive Benefits</Text>
        </View>
      <View>
      <Image source={require('./assets/callus.jpeg')} style={{height: 90, 
    width: 90,
    marginLeft:30,
    marginTop:-25,
    borderRadius:10}}/>
      </View>
    </View>
  );
};

const Shdml = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity:1,
    shadowRadius: 3,
    backgroundColor:'white',
    elevation:20,
  },
});
const Shdm = StyleSheet.create({
  shadow: {
    shadowColor: 'black',
    shadowOpacity:1,
    shadowRadius: 3,
    elevation:20,
  },
});

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    fontSize: '20',
  },
  tinylogo: {
    marginTop: 5,
    width: 50,
    height: 50,
  },
  headText: {
    marginTop: 5,
    marginLeft: -15,
    fontSize: 30,
    color: '#000000',
  },
  headText2: {
    marginTop: 5,
    marginLeft:-18,
    fontSize: 30,
    color: '#ECC440',
  },
  container2: {
    borderRadius:10,
    margin: 10,
    height: 100,
    flexDirection: 'row',
    
    alignItems: 'center',
    backgroundColor: '#ECC440',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
    ...Shdm.shadow,
  },
  container3: {
    margin:10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginBottom: 10,
    height:140,
    ...Shdml.shadow,
  },
  commontext: {
    fontSize:20,
    fontWeight: 'bold',
    color: '#000000',
    fontFamily: 'sans-serif',
  },
  box2: {
    marginTop: 20,
    
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  col: {
    
    flexDirection: 'row',
  },
  row: {
    height: 160,
    width: 170,
    borderRadius:10,
    fontSize: 40,
    fontWeight: 'bolder',
    fontFamily: 'sans-serif verdana-genova',
    margin: 20,
    fontweight: 'bold',
    padding: 10,
    ...Shdml.shadow,
  },
  comonly: {
    fontSize: 15,
    color: '#ECC440',
    fontWeight: 'bold',
    marginTop: 20,
  },
  imgprop:{
    height: 90, 
    width: 90,
    marginLeft:60,
    marginTop:-25,
    borderRadius:10
  }
});

export default App;
