
// import { StyleSheet, Text, View ,StatusBar} from 'react-native';
// import Component from './components/Component';


// export default function App() {

//   return (
//     <View style={styles.container}>
//      <Component></Component>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop:'80%',
//     flexDirection:'column',
//     alignItems:'center',
//     justifyContent:'center'
//   },
// });

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% props and map method %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */

// import { StyleSheet, Text, View ,StatusBar} from 'react-native';
// import Component from './components/Component';

// export default function App() {

//   const dummy = [
//     {
//       name:'Gauhar',
//       age:"21",
//       department:'Btech'
//     },


//     {
//       name:'Gauhar',
//       age:"21",
//       department:'Btech'
//     },

    
//   ]

//   const email = "ajdawdgawg@gmail.com"

//   return (
//     <View style={styles.container}>
//       <StatusBar></StatusBar>
//       <Text>{email}</Text>
//       <Component email={email}/>

//      {
//       dummy.map( (data,index) => (
//         <View style={{flexDirection:'row',gap:10}} key={index}>
//           <Text>{index}</Text>
//           <Text>{data.name}</Text>
//           <Text>{data.age}</Text>
//           <Text>{data.department}</Text>
//         </View>
//       ))
//      }

//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop:'80%',
//     flexDirection:'column',
//     alignItems:'center',
//     justifyContent:'center'
//   },
// });


/****************** L14 simple form i*************/


// import React, { useState } from 'react';
// import { Text, TextInput, StyleSheet, View, Button } from 'react-native';

// const App = () => {
//   /************ use state *************/
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [display, setDisplay] = useState(false);
//  /**************create function for clear value**********/
//  const clearDeteils =()=>{
//   setDisplay("")
//   setPassword("")
//   setEmail("")
//   setName("")

//  }

//   return (

//     <View>
//       <Text style={style.text}> Login Form </Text>

//       <TextInput placeholder='enter your Name '  //use inputText for name 
//         style={style.container}
//         onChangeText={(text) => setName(text)}
//         value={name}
//       />

//       <TextInput placeholder='enter your Password ' // for password
//         style={style.container}
//         onChangeText={(text) => setPassword(text)}
//         secureTextEntry={true}//for secure password
//         value={password}
//       />
//       {/* input text for email */}
//       <TextInput placeholder='enter your E-mail ' 
//         style={style.container}
//         onChangeText={(text) => setEmail(text)}
//         value={email}
//       />
//       {/* clear and print button */}
//       <View style={{ margin: 35, gap: 10 }}> 
//         <Button color={"green"} title='print details' onPress={() => setDisplay(true)} /> 
//         <Button title='clear details'
//         onPress={clearDeteils}/>
//       </View> 

//       {
//       display ?//use for display value 
//         <View>
//           <Text style={{fontSize:20}}>user name is : {name}</Text>
//           <Text style={{fontSize:20}} >user Password is : {password}</Text>
//           <Text style={{fontSize:20}}>user Email is : {email}</Text>
//         </View>
//         : null}

//     </View>
//   );
// }
// // styling
// const style = StyleSheet.create({
//   container: {
//     marginTop: '3%',
//     marginLeft: '10%',
//     display: 'flex',
//     borderWidth: 2,
//     borderColor: 'blue',
//     width: '80%',
//     fontSize: 18,
//   },
//   text: {
//     fontSize: 30,
//     textAlign: 'center',
//     marginTop: '10%',
//   }
// })

// export default App;



// /*%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L15 flate list  => flate list taked normal array and object array   %%%%%%%%%%%%%%%%%%%%%%%%%%% */
// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   data: {
//     padding: 10,
//     fontSize: 18,
//     height: 44,
//   },
//   itemContainer: {
//     backgroundColor: '#f0f0f0',  // light background color for each item
//     marginBottom: 10,             // space between items
//     padding: 15,                  // padding inside each container
//     borderRadius: 8,              // rounded corners for the container
//   },
// });

// const FlatListBasics = () => {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={[
//           { id: '1', name: 'Devin' },
//           { id: '2', name: 'John' },
//           { id: '3', name: 'Emily' },
//           { id: '4', name: 'Sophia' },
//           { id: '5', name: 'Michael' },
//         ]}
//         renderItem={({ item }) => (
//           <View style={styles.itemContainer}>
//             <Text style={styles.data}>
//               {item.name} {item.id}
//             </Text>
//           </View>
//         )}
     
//       />
//     </View>
//   );
// };

// export default FlatListBasics;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% second method flatlist %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1, 
//     paddingTop: 22,
//   },
// data:{ //styling of data
//   margin:20,
//   padding:5,
//   color:'blue',
//   backgroundColor:'green',
//   fontSize:20,
//   textAlign:'center',
// }
// });

// const FlatListBasics = () => {
//   // Array of data
//   const users = [
//     {
//       id: 1,
//       name: 'Devin'
//     },
//     {
//       id: 2,
//       name: 'John'
//     },
//     {
//       id: 3,
//       name: 'Emily'
//     },
//     {
//       id: 4,
//       name: 'Alice'
//     },
//     {
//       id: 5,
//       name: 'Bob'
//     },
//   ];

//   return (
//     <View>
//       <Text>Flat list element</Text>
//       <FlatList
//         data={users} //props 
//         renderItem={({item}) => <Text style={styles.data}>{item.name}</Text>}//render of array data data 
//         // keyExtractor={(data) => data.id.toString()}
//       />
//     </View>
//   );
// }

// export default FlatListBasics;


// /*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L16 LIST WITH MAP FUNCTION %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// import React from 'react';
// import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
// const App = () => {
//   // Array of data
//   const users = [

//     {
//       id: 2,
//       name: 'Bob'
//     },
//     {
//       id: 2,
//       name: 'John'
//     },
//     {
//       id: 3,
//       name: 'Emily'
//     },
//     {
//       id: 4,
//       name: 'Alice'
//     },
//     {
//       id: 5,
//       name: 'Bob'
//     },
//   ];

//   return (
//     <ScrollView>
//       <Text>List with map function </Text>
//       {
//         users.map((data) => <Text style={styles.data}>{data.name} {data.id}</Text>) //use map function for array list
//       }

//     </ ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   data: { //styling of data
//     margin: 20,
//     padding: 5,
//     color: 'blue',
//     backgroundColor: 'green',
//     fontSize: 20,
//     textAlign: 'center',
//   }
// });

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L17  Make Grid  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// import React from 'react';
// import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
// const App = () => {
//   // Array of data
//   const users = [

//     {
//       id: 5,
//       name: 'Bob'
//     },
//     {
//       id: 2,
//       name: 'John'
//     },
//     {
//       id: 3,
//       name: 'Emily'
//     },
//     {
//       id: 4,
//       name: 'Alice'
//     },
//     {
//       id: 5,
//       name: 'Bob'
//     },
//      {
//       id: 5,
//       name: 'Bob'
//     },
//   ];
//   return (
//     <ScrollView>
//       <Text style={{fontSize:20,textAlign:'center'}}> Make Grid </Text>
//       <View style={styles.grid}>
//         {/* <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text>
//         <Text style={styles.data}>GAUHAR</Text> */}
//         {
//           users.map((data)=><Text style={styles.data}>{data.name}</Text>) //that is use for make grid of list 
//         }
//       </View>

//     </ ScrollView>
//   );
// }

// const styles = StyleSheet.create({
// grid:{
//   flex:1,
//   flexDirection:'row',
//   flexWrap:'wrap',//this is the main property of grid 

// },
// data:{
//   margin:5,
//   padding:5,
//   width:120,
//   height:120,
//   backgroundColor:'green',
//   textAlign:'center',
//   textAlignVertical:'center',
//   fontSize:21,
// }
// });

// export default App;

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L18 COMPONENT IN LOOP WITH FLATELIST  %%%%%%%%%%%%%%%%%%%%%%%%%%%%*/



// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 22,
//   },
//   data: { // Styling of data
//     margin: 20,
//     padding: 5,
//     color: 'blue',
//     backgroundColor: 'green',
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   box: {
//     flexDirection: 'row',
//     borderWidth: 2,
//     borderColor: 'orange',
//     margin: 10,
//   },
// });

// // UserData component: Renders individual user data
// const UserData = (props) => {
//   const data = props.data;
//   return (
//     <View style={styles.box}>
//       <Text style={styles.data}>{data.id}</Text>
//       <Text style={styles.data}>{data.name}</Text>
//       <Text style={styles.data}>{data.email}</Text>
//     </View>
//   );
// }

// // FlatListBasics component: Renders a FlatList of users
// const FlatListBasics = () => {
//   // Array of data
//   const users = [
//     { id: 1, name: 'Devin', email: 'abc@gmail.com' },
//     { id: 2, name: 'John', email: 'abc@gmail.com' },
//     { id: 3, name: 'Emily', email: 'abc@gmail.com' },
//     { id: 4, name: 'Alice', email: 'abc@gmail.com' },
//     { id: 5, name: 'Bob', email: 'abc@gmail.com' },
//   ];

//   return (
//     <View>
//       {/* Title for FlatList */}
//       <Text>Flat list element</Text>
//       {/* FlatList component rendering users */}
//       <FlatList
//         data={users} // Data prop: Array of user data
//         renderItem={({ item }) => <UserData data={item} />} // RenderItem prop: Renders UserData component for each data
//       />
//     </View>
//   )
// }

// export default FlatListBasics;


////////////////////////////////////// second code of flatlist /////////////////////////////////////
// import React from 'react';
// import { FlatList, StyleSheet, Text, View } from 'react-native';

// // Sample data array
// const data = [
//   { id: '1', name: 'John Doe' },
//   { id: '2', name: 'Jane Smith' },
//   { id: '3', name: 'Alice Johnson' },
//   { id: '4', name: 'Bob Brown' },
//   { id: '5', name: 'Charlie Davis' },
// ];

// // Main component
// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* Title */}
//       <Text style={styles.header}>User List</Text>
      
//       {/* FlatList component */}
//       <FlatList
//         data={data} // Array of data
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.itemText}>{item.name} {item.id }</Text>
//           </View>
//         )}
//      // Unique key for each item
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   item: {
//     backgroundColor: '#f8f8f8',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   itemText: {
//     fontSize: 18,
//   },
// });

// export default App;




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L19 Section List with Array  %%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// SECTION LIST KA USE NESTED ARRAY KO DISPLAY KRANE KE LIYE KARTE HAI 

// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

// const App = () => {
//   const users = [
//     {
//       id: 1,
//       name: 'Devin',
//       data: ["php", "js", "Saud"] // Nested data list
//     },
//     {
//       id: 2,
//       name: 'John',
//       data: ["php", "js", "Umam"]
//     },
//     {
//       id: 3,
//       name: 'Emily',
//       data: ["php", "js", "Tabrez"]
//     },
//     {
//       id: 4,
//       name: 'Sophia',
//       data: ["php", "js", "Aliza s "]
//     },
//     {
//       id: 5,
//       name: 'Michael',
//       data: ["php", "js", "Sidra"]
//     }
//   ];

//   return (
//     <View style={{ flex: 1 }}>
//       <Text style={{ fontSize: 20, textAlign: 'center' }}>Section List</Text>
//       <SectionList
//         sections={users}
//         renderItem={({ item }) => (
//           <Text style={{ fontSize: 30, marginLeft: 20 }}>{item}</Text>
//         )}
//         renderSectionHeader={({ section }) => (
//           <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
//             <Text style={{ fontSize: 20, color: 'red' }}>{section.name}</Text>
//             <Text style={{ fontSize: 14, color: 'gray' }}>{section.id}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => item + index} // Provide a unique key for each item
//       />
//     </View>
//   );
// };

// export default App;


/////////////////////////////////////////////// second type code of section list ////////////////////////

// import React from 'react';
// import { SectionList, StyleSheet, Text, View } from 'react-native';

// // Sample data array for SectionList
// const sections = [
//   {
//     title: 'A', // Section header
//     data: ['Alice', 'Anna', 'Andrew'], // Items in this section
//   },
//   {
//     title: 'B', // Section header
//     data: ['Bob', 'Ben', 'Brittany'],
//   },
//   {
//     title: 'C', // Section header
//     data: ['Charlie', 'Catherine', 'Chris'],
//   },
// ];

// // Main component
// const App = () => {
//   return (
//     <View style={styles.container}>
//       {/* Title */}
//       <Text style={styles.header}>User List by Alphabet</Text>

//       {/* SectionList component */}
//       <SectionList
//         sections={sections} // Sections prop with grouped data
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text style={styles.itemText}>{item}</Text>
//           </View>
//         )}
//         renderSectionHeader={({ section }) => (
//           <View style={styles.headerContainer}>
//             <Text style={styles.sectionHeader}>{section.title}</Text>
//           </View>
//         )}
//         keyExtractor={(item, index) => item + index} // Unique key for each item
//       />
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 50,
//     paddingHorizontal: 20,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   headerContainer: {
//     backgroundColor: '#f1f1f1',
//     padding: 10,
//     marginBottom: 5,
//   },
//   sectionHeader: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   item: {
//     backgroundColor: '#f8f8f8',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   itemText: {
//     fontSize: 18,
//   },
// });

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=20 MAKE CLASS COMPONENET %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1= Make class component 
2= add component in class componenet 
3= add event and function in class component */


// import React from "react";
// import { View, Text, StyleSheet, Button } from "react-native";
// import Component from "./components/Component"; // Importing the Component from the components folder
// class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* Header Text */}
//         <Text style={styles.headerText}>Class Component</Text>
//         <Button title="press me "/>

//         {/* Rendering the Component */}
//         <Component />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#806B33",
//   },
//   headerText: {
//     color: "#ffffff",
//     fontSize: 20,
//   },
// });

// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=21 STATE AND PROPS IN CLASS COMPONENET %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React from "react";
// import { View, Text, StyleSheet, TextInput } from "react-native";
// import Component from "./components/Component"; // Importing the Component from the components folder

// class App extends React.Component {
//   constructor() { // constructor use in class component for state define 
//     super();// parent component ki class constructor ko call karne  ke liye super key use hoti hai 
//     this.state = { //is object ke ander jitni bhi key hongi bo state hpongi 
//       name: "anil",
//       age: "21",
//     };
//     this.updateName = this.updateName.bind(this); // Bind the updateName function
//   }

//   updateName(val) {
//     this.setState({ name: val });
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {/* Header Text */}
//         <Text style={styles.headerText}>{this.state.name}{this.state.age}</Text>

//         {/* Text input to update name */}
//         <TextInput placeholder="type here " onChangeText={(text) => this.updateName(text)} />

//         {/* Rendering the Component */}
//         <Component name={this.state.name} />

//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#806B33",
//   },
//   headerText: {
//     color: "#ffffff",
//     fontSize: 20,
//   },
// });

// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=22 LIFE CYCLE METHOD IN REACT NATIVE  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/* 1 mounting
   2 update
   3 unmounting
   evry component keep own life cycle  method 
   %%%%%%%%%%%%%%%%%%%%    L23 hoooks in react native           %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
     hooks are used only functional component note use in tha class based component
     1.state
     2. Life cycle Method
     3.Content API
     4.ref and Memo
     5.we can make custom hooks also  */

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L=24 USEEFFECT HOOKS FOR LIFE CYVCLED METHOD %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/* 1. what is use effect hooks ==> jab bhi hume functional component ke ander life cycle method use karne hote hai hai to hum effecct 
    hooks ka use karte hai */

//     import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const App = () => {
//     const[count,setcount]=useState(0);
//     useEffect(()=>{
//         console.warn("hello");
//     },[])//,[] lgane se bass ek baar hi call hoga jab iski need hogi
//   return (
//     <View style={styles.container}>
//       <Text>Hello World!{count}</Text>
//       <Button title='update Count' onPress={()=>setcount(count+1)} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=25 USEEFFECT HOOKS FOR LIFE CYCLED METHOD %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const App = () => {
//     const[count,setcount]=useState(0)
//     const[data,setdata]=useState(100)

//     useEffect(()=>{
//         console.warn(count)
//     },[data]); // jo bhi state likhi hoti hai yeh usi par work karta hai 

//   return (
//     <View style={styles.container}>
//       <Text style={{fontSize:30,}}>{data}Hello World!{count}</Text>
//     <Button
//     title='update counter' onPress={()=>setcount(count+1)
//     }/>
//     <Button
//     title='update data' onPress={()=>setdata(data+1)
//     }/>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=26 SHOW HIDE AND TOGGLE COMPONENT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
    1=> HOW WE DO UNMOUNT THE COMPONENT 
    2=> WHY WE UNMOUNT THE COMPONENET  
    => MAKE COMPONENT
    => BUTTON AND STAGE FOR TOGGLE */



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const App = () => {
//   const [show, setshow] = useState(true)// useState true that means state visible 
//   return (
//     <View>
//       <Text style={{
//         fontSize: 30, color: 'green',
//         textAlign: "center",
//         justifyContent: 'center'
//       }}>
//         Show / Hide component
//       </Text>
//       {
//         show == true ? <User /> : null
//       }

//       <Button title='Hide component'
//         onPress={() => setshow(false)} //setShow false state hide
//       />

//       <Button title='Show Component'
//         onPress={() => setshow(true)} //setShow false state hide
//       />

//       {/* <Button title='toggle component'
//         onPress={() => setshow(!show)} /> */} //
//     </View>
//   )
// }

// const User = () => {
//   return (
//     <View >
//       <Text style={{ fontSize: 30 }}>User component</Text>
//     </View>
//   );
// }



// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L=27 useEffect hooks in unmounting  *%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/




// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button } from 'react-native';

// const App = () => {
//   const [show,setshow] =useState(true);// useState true that means state visible 
//   return (
//     <View>
//       <Text style={{
//         fontSize: 30, color: 'green',
//         textAlign: "center",
//         justifyContent: 'center'
//       }}>
//         Show / Hide component
//       </Text>
//       <Button title='Toggle'
//         onPress={() => setshow(!show)} />
//       {
//         show == true ? <Student /> : null// jsx 
//       }
//     </View>
//   )
// }
// const Student = () => {
//   let timer= setInterval(()=>{
//     console.warn("timer called")
//   },2000)
//   useEffect(()=>{
//     return ()=>
//       clearInterval(timer)  // where we use return () becouse use effect don't work on unmount without return ()

//   })
//   return (
//     <View >
//       <Text style={{ fontSize: 30 }}> Student </Text>
//     </View>
//   );
// }
//  export default App;



/*  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=28 RESPONSIVE LAYOUT WITH FLEX BOX  %%%%%%%%%%%%%%%%%%%%%% */



// import React from 'react';
// import { Text, View ,StyleSheet} from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View style={{flex:1,}}>

//     <View style={{ flex: 1,backgroundColor:'yellow', flexDirection:'row', }}>
//       <Text style={{fontSize:30,}}> </Text>
//       <View style={Styles.innerbox}></View>
//       <View style={Styles.innerbox}></View>
//       <View style={Styles.innerbox}></View>
//     </View> 
//     <View style={{ flex: 1,backgroundColor:'red' }}>
//       <Text style={{fontSize:30,}}> </Text>
//     </View>
//     <View style={{ flex: 1,backgroundColor:'green' }}>
//       <Text style={{fontSize:30,}}> </Text>
//     </View>

//     </View>
//   );
// }

// const Styles=StyleSheet.create({
// innerbox:{
//   flex:1,

//   backgroundColor:'blue',
//   margin:10,
// }
// })
// export default HelloWorldApp;


/*  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=29 STYLE WITH BUTTON  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%
=> TWO TYPES OF BUTTON COMPONENT 
1. TOUCHABLE HIGHLIGHT
1. TOUCHABLE OPECITY */


// import React from 'react';
// import { Text, StyleSheet, View, TouchableHighlight, Button } from 'react-native';

// const HelloWorldApp = () => {
//   return (
//     <View style={Styles.main}>
//       <TouchableHighlight  ><Text  style={Styles.Button} > press here </Text></TouchableHighlight>
//       <Button title='press here ' style={Styles.B}>  </Button>
//     </View>
//   );
// }
// const Styles=StyleSheet.create({
// main:{
//   flex: 1,
//    justifyContent: 'center',  
//    alignItems: 'center'

// },
// Button:{
//   height:45,
//   width:300,
//   backgroundColor:'grey',
//   textAlign:'center',
//   borderRadius:10,
//   fontSize:20,
//   margin:10,
//   shadowColor:'black',
//   elevation:10,
//   shadowOpacity:1,
// },
// B:{
//   height:30,
//   width:100,
//   backgroundColor:'red'
// }
// })

// export default HelloWorldApp;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=30 RADIO BUTTON %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
 1. make 2 touchable opecity button with styling and use state on a button */

// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View, StyleSheet, Button } from 'react-native';

// const HelloWorldApp = () => {
//   const [selectradio,setselectradio]=useState(2)
//   return (
//     <View style={Styles.main}>
//       <TouchableOpacity  onPress={()=>setselectradio(1) // onpress 1 then check radio 1
//       }>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <View style={Styles.radio}>
//             {
//               selectradio===1 ? <View style={Styles.bg}></View>:null// if radio button value 1 then it will check 
//             }

//           </View>
//           <Text style={{ fontSize: 20 }}>radio button </Text>
//         </View>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={()=>setselectradio(2)  // on press 2 then check radio 2 
//       }>
//         <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//           <View style={Styles.radio}>
//           {
//               selectradio===2 ? <View style={Styles.bg}></View>:null // if redio button value 2 then it will  check
//             }
//           </View>
//           <Text style={{ fontSize: 20 }}>radio button  </Text>
//         </View>
//       </TouchableOpacity>

//     </View>
//   );
// }
// const Styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,

//   },
//   radio: {
//     height: 50,
//     width: 50,
//     borderRadius: 25,
//     borderWidth: 2,
//     borderColor: 'black',
//   },
//   bg:
// {

//   height: 42,
//   width: 42,
//   borderRadius: 21.5,
//   backgroundColor:'grey',
//   margin:2,

// }  

// }
// )

// export default HelloWorldApp;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=32 DYNAMIC REDIO BUTTON %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React, { useState } from 'react';
// import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

// const HelloWorldApp = () => {
//   // State to keep track of the selected radio button
//   const [selectedRadio, setSelectedRadio] = useState(1);

//   // Array of students
//   const students = [
//     { id: 1, name: 'Alice', age: 20 },
//     { id: 2, name: 'Bob', age: 22 },
//     { id: 3, name: 'Charlie', age: 21 },
//     { id: 4, name: 'David', age: 23 },
//   ];

//   return (
//     <View style={styles.main}>
//       {/* Mapping over the students array to display each student */}
//       {students.map((data, index) => (
//         <TouchableOpacity key={data.id} onPress={() => setSelectedRadio(data.id)}>
//           {/* When a student is pressed, set the selected radio button */}
//           <View style={styles.rowContainer}>
//             <View style={styles.radio}>
//               {/* If the current radio button value matches the current student's id, display the checked background */}
//               {selectedRadio === data.id && <View style={styles.bg}></View>}
//             </View>
//             <Text style={styles.text}>{data.name}</Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   radio: {
//     height: 20,
//     width: 20,
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: 'black',
//     marginRight: 10,
//   },
//   bg: {
//     height: 12,
//     width: 12,
//     borderRadius: 6,
//     backgroundColor: 'grey',
//   },
//   text: {
//     fontSize: 20,
//   },
// });

// export default HelloWorldApp;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=32 ACTIVITY INDICATOR %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
 1. USE OF ACTIVITY INDICATOR 
 2. COMMON PROPS , HIDE AND HOW WITH BUTTON */


//  import React, { useState } from 'react';
//  import { ActivityIndicator, Button, Text, View } from 'react-native';

//  const App = () => {
//   const [Show ,setShow]=useState(false)  // state use 
//   const displayLoader=()=>{ // for showing loader
// setShow(true)
//   }
//   setTimeout(()=>{ // API call hone ke baad loader hide 
//     setShow(false)
//   },3000)
//    return (
//      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ActivityIndicator                 // first method of showingb loader
//       size={'large'} animating={Show}/>
//       {/* {
//         Show ?  <ActivityIndicator
//         size={'large'} animating={Show}/> : null // second method of showing loader 
//       } */}
//       <Button title='hide'onPress={displayLoader}/>
//        <Text>ACTIVITY INDICATOR</Text>
//      </View>
//    );
//  };

//  export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=33 MODAL IN REACT NTIVE ( DIALOG BOX ) %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1.IMPORT BUTTON AND MODAL
=> ADD STYLDE IN BUTTON AND MODAL
=> HIDE AND SHOW BUTTON AND MODAL
*/
// import React, { useState } from 'react';
// import { StyleSheet, View, Text, Button, Modal } from 'react-native';

// const DialogBox = () => {
//   const [Show, setShow] = useState(true);

//   return (
//     <View style={styles.container}>
//       <Modal transparent={true}//background transparent karne ke liye 
//        animationType="slide"
//          visible={Show}>
//         <View style={styles.centeredView}>
//           <View style={styles.modalView}>
//             <Text style={styles.modalText}>Hello Step by Step</Text>
//             <Button title='Close modal' onPress={() => setShow(false)} // for close modal 
//              /> 
//           </View>
//         </View>
//       </Modal>
//       <View style={styles.openView}>
//         <Button title='Open modal' onPress={() => setShow(true)} // for show modal 
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalView: {
//     backgroundColor: '#fff',
//     padding: 50,
//     borderRadius: 25,
//     shadowColor: 'blue',
//     // Remove elevation if targeting iOS
//      elevation: 5,
//   },
//   openView: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     marginBottom: 20, // Added margin to avoid button covering the modal
//   },
//   modalText: {
//     fontSize: 20,
//     marginBottom: 20,
//   },
// });

// export default DialogBox;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=34  pressable LONG PRESS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// import React, { useState } from 'react';
// import { View, Text, Pressable, StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Pressable style={styles.button}
//       // onpress event add in pressab le component 
//       onPress={()=>console.warn("short press")}
//       onLongPress={()=>console.warn("long press")}
//       onPressIn={()=>console.warn("press in")}
//       onPressOut={()=>console.warn("pres out")}
//        >
//         <Text style={styles.buttonText}>press me</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 20,
//     borderRadius: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 20,
//   },
// });

// export default App;




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=35  pressable LONG PRESS %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1. what is statusbar
2. hide and update status bAR */

// import React, { useState } from 'react';
// import { View, StatusBar,Text, Pressable, StyleSheet, Button } from 'react-native';

// const App = () => {
//   const[hide,sethide]=useState(false) // by default false rahega  
//   const[barStyle,setbarstyle]=useState("default") // by default default hi rahega 
//   return ( 
//   <View style={styles.content}>
//     <StatusBar backgroundColor={"orange"}
//     barStyle={barStyle}
//     hidden={hide}/>
//     <Button title='toggle status bar  'onPress={()=>sethide(!hide)}//press karne par sethide ka reverse ho jaye
//     /> 
//     <Button title='update  ' onPress={()=>setbarstyle("dark-content")} //onpress content  dark ho jayega

//     /> 
//   </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// content:{
//   flex:1,
//   justifyContent:'center',
//   textAlign:'center',
// }
// });

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L=38 MAKE COSTUM MODEL %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Button,  } from 'react-native';

// const CustomModal = () => {
//   const[Show,setShow]=useState(false) // use state by deafault false 
//   return (

//       <View style={styles.modalContainer}>
//     {
//       Show?  
//          <View style={styles.modalContent}>
//       <Text style={styles.modalTitle}>Custom Modal Title</Text>
//       <Text style={styles.modalText}>This is a custom modal content.</Text>
//       <Button title='close' onPress={()=>setShow(false)} // on press close modal 
//       />

//     </View >:null
//     }

//           <Button style={styles.Button}title='open' onPress={()=>setShow(true)} // ON press open modal
//           />
//       </View>
//   )    
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   modalText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   closeButton: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#ccc',
//     borderRadius: 5,
//   },
//   closeButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },

// });

// export default CustomModal;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=39 navigation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
1.what is nevigation => we nevigate one screen to another screen 
2. types of nevigation
  -stack
  -drawer
  -tab */

// In App.js in a new project

// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() { // component
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function loginScreen(props) { // component
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>LoginScreen </Text>
//       <Button title='go to home screen ' onPress={()=>props.navigation.navigate("Home")}/>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator(); // function 

// function App() {
//   return (
//     <NavigationContainer > 
//       <Stack.Navigator>

//         <Stack.Screen name="login" component={loginScreen}  // pass the component in the stack screen 
//         /> 

//         <Stack.Screen name="Home" component={HomeScreen}  // pass the component in the stack screen
//          />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



/****%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=41 BUTTON AND COMPONENT IN STACK NAVIGATION%%%%%%%%%%%%%%%%%%%%% */




// import React from 'react';
// import { View, Text, Button, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// function HomeScreen() { // component
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function loginScreen(props) { // component
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>LoginScreen </Text>
//       <Button title='go to home screen ' onPress={()=>props.navigation.navigate("Home")}/>
//     </View>
//   );
// }

// function btnAction (){
// console.warn("pressed left btn ")
// }
// function btnAction2 (){
//   console.warn("pressed right btn ")
//   }

// const Stack = createNativeStackNavigator(); // function 

// function App() {
//   return (
//     <NavigationContainer 
//     ScreenOptions={{

//     }} > 
//       <Stack.Navigator>

//         <Stack.Screen name="login" component={loginScreen}  // pass the component in the stack screen 
//        options={{
//         headerTitle:()=><Button title='left' onPress={btnAction}/>,
//         headerRight:()=><Button title='right' onPress={btnAction2}/>,
//         headerStyle:{
//           backgroundColor:'orange'
//         }

//        }}
//        /> 

//         <Stack.Screen name="Home" component={HomeScreen}  // pass the component in the stack screen
//          />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=44 TAB NAVIGATION  %%%%%%%%%%%%%%%%%%%%%%%%%%%
  MAKE TWO COMPONENTS FOR THED SCRFEEN npm install @react-navigation/material-top-tabs react-native-tab-view
  MAKE THE WRAPPER */




import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Define your screens
const login = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> Login</Text>
  </View>
);

const signUp = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text> signUp</Text>
  </View>
);

// Main component
const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={login} // pass the component in the  tab navigation
         />
        <Tab.Screen name="signUp" component={signUp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;




/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=45 TOP TAB NAVIGATION  %%%%%%%%%%%%%%%%%%%%%%%%%%%
  MAKE TWO COMPONENTS FOR THED SCRFEEN npm install @react-navigation/material-top-tabs react-native-tab-view
  MAKE THE WRAPPER */


// import React from 'react';
// import { Text, View } from 'react-native';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import { NavigationContainer } from '@react-navigation/native';

// // Create a Top Tab Navigator
// const Tab = createMaterialTopTabNavigator();// these  function use for navigation

// // Define your screens
// const HomeScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Home Screen</Text>
//   </View>
// );

// const SettingsScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// // Main component
// const TabNavigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="signUp" component={HomeScreen} />
//         <Tab.Screen name="login" component={SettingsScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };

// export default TabNavigation;









/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=46 API CALL %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   => Android Application ko direct database se connect karne ke liye Api ki need hoti hai 
   => Api server site scripted jo server par run hoti hai like (php node.js) is par banti hai 
   
   1. MAKE FUNCTION FOR API
   2. API STORE IN STATE  
   3. DISPLAY API */

// import React, { useEffect, useState } from 'react';
// import { Text, View } from 'react-native';

// const App = () => {

//   const [data, setdata] = useState(undefined)
// // async function tab use hota hai jab api me data jada hota h to baki ki application ko nahi rokta hai 
//   const getAPIData = async () => { 
//     const url = "https://jsonplaceholder.typicode.com/posts/1"//url of API
//     let result = await fetch(url); // fetch data 
//     result = await result.json(); // result convert in JSON formate 
//     console.warn(result) // only check data 
//     setdata(result) // use state 

//   }
//   useEffect(() => { // call api function in use effect yeh jab call hoti hai jab hum koi bhi change karte hai props me ya state me 
//     getAPIData();

//   })
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Api call</Text>
//       {
//         data ? <View>
//           {/* here we use the api key of data from api  */}
//           <Text> {data.id} </Text>
//           <Text> {data.userId} </Text>
//           <Text> {data.title} </Text>
//           <Text> {data.title} </Text>
//           <Text> {data.title} </Text>
//         </View> : null
//       }
//     </View>
//   );
// }

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   L=47 LIST WITH API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  => MAKE API CALL FUNCTION 
     USE MAP FUNCTION FOR RENDER DATA 
     ADD STYLE AND SCROLL VIEW %%%%%%%%*/


// import React, { useEffect, useState } from 'react';
// import { ScrollView, Text, View } from 'react-native';

// const App = () => {

//   const [data, setdata] = useState([]);
//   // async function tab use hota hai jab api me data jada hota h to baki ki application ko nahi rokta hai 
//   const getAPIData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts"//url of API
//     let result = await fetch(url); // fetch data 
//     result = await result.json(); // result convert in JSON formate 
//     // only check data 
//     setdata(result) // use state 

//   }
//   useEffect(() => { // call api function in use effect yeh jab call hoti hai jab hum koi bhi change karte hai props me ya state me 
//     getAPIData();

//   },[])
//   return (
//     <ScrollView >
//       <Text>Api all</Text>
//       {
//         data.length ?
//           data.map((data) =>// map function use becouse API LIST 
//             <View>
//               <Text style={{backgroundColor:'grey', fontSize:30}}>Id: {data.id} </Text>
//               <Text>userId: {data.userId} </Text>
//               <Text>title: {data.title} </Text>
//               <Text>body: {data.body} </Text>
//             </View>
//           ) : null
//       }
//     </ScrollView>
//   );
// }

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   L=47 FLATLIST WITH API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/


// import React, { useEffect, useState } from 'react';
// import { FlatList, ScrollView, Text, View } from 'react-native';

// const App = () => {

//   const [data, setdata] = useState([]);
//   // async function tab use hota hai jab api me data jada hota h to baki ki application ko nahi rokta hai 
//   const getAPIData = async () => {
//     const url = "https://jsonplaceholder.typicode.com/posts"//url of API
//     let result = await fetch(url); // fetch data 
//     result = await result.json(); // result convert in JSON formate 
//     // only check data 
//     setdata(result) // use state 

//   }
//   useEffect(() => { // call api function in use effect yeh jab call hoti hai jab hum koi bhi change karte hai props me ya state me 
//     getAPIData();

//   }, [])
//   return (
//     <ScrollView >
//       <Text>Api all</Text>
//       {
//         data.length ?
//           <FlatList
//             data={data} // baecouse our state name is data so we pass the data
//             // renderitem me ek object me callback () or call back
//             // function me ek object bnakar parameter pass karte h 
//             renderItem={({item})=><View> 
//               {/* print the data with the help of key  */}
//               <Text  style={{backgroundColor:'grey', fontSize:30}}> {item.id}</Text>
//               <Text> {item.userId}</Text>
//               <Text> {item.title}</Text>
//               <Text> {item.body}</Text>
//             </View>}
//           />

//           : null
//       }
//     </ScrollView>
//   );
// }

// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%   L=49 FLATLIST WITH API  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
=> JSON-SERVER FAKE API BNA SAKTE HAI 
=> FAKE API JASON SERVER PAR HI SAVE HOTI HAI BUT JAB LARGE API KI NEED HOTI HAI TAB HUM 
REAL API KA USE KARTE HAI 
=> J SON SERVERN  KISI BHI DATA BASE SE CONNECT NAHI HOTA HAI */


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%  L=54  form validation %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/



// import React, { useState } from 'react';
// import {Button, Text, View, StyleSheet, TextInput ,TouchableOpacity} from 'react-native';

// const App = () => {
//   const [email,setemail] =useState(null);
//   const [password,setpassword] =useState(null);

//   const [emailError,setemailError] =useState(false);// email validation state 
//   const [passwordError,setpasswordError] =useState(false);// password validation state 

//   const saveData = async() => {
//     /*condition for validation*/
//     if(!email){
//       setemailError(true)
//       }
//       if(!password){
//         setpasswordError(true)
//         }
//       if(!email){
//         return false
//       }

//     console.warn(email)
//     // post the data throw Api on local host 
//     const url = "http://localhost:3000/profile";
//     let result = await fetch(url,{
//       method:"post",
//       headers: {
//         "content-type":"Application/json"
//       },
//       body:JSON.stringify({email,password})

//     })
//   }
//   return (
//     <View style={styles.container}>
//       <View style={styles.inputfield}>
//         <View style={styles.Text}>
//       <Text >Email ID</Text>
//       <TextInput
//     value={email}
//      onChangeText={(text)=>setemail(text)}
//         style={styles.input}
//         placeholder='entetr email Id'
//         autoCapitalize="none"
//         autoCorrect={false}
//         clearButtonMode="while-editing"
//         keyboardType="email-address" />
//         {
//           emailError ? <Text> enter the valid e mail</Text>:null
//         }
//          </View>
//          <View style={styles.Text}>
//       <Text >password</Text>
//       <TextInput
//     value={password}
//      onChangeText={(text)=>setpassword(text)}

//       autoCapitalize="none"
//       autoCorrect={false}
//       clearButtonMode="while-editing"
//       keyboardType='password'
//         style={styles.input}
//         placeholder='enter password ' />
//           {
//           passwordError ? <Text> enter the valid e password</Text>:null
//         }
//           </View>
//           <View>
//                 <TouchableOpacity style={styles.btn}   onPress={saveData}>
//                    <Text style={styles.btnText}> Register Now </Text>

//                 </TouchableOpacity>
//                 </View>
//         </View>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     paddingVertical: 24,
//     paddingHorizontal: 0,
//     flexGrow: 1,
//     flexShrink: 1,
//     flexBasis: 0,

//   },
//   btn:{
//     backgroundColor:"blue",
//     height:45,
//     width:200,
//     marginTop:20,
//     borderRadius:5, 

//     },
//     btnText:{
//       textAlign:'center',
//       fontSize:22,
//     },
//   input: {
//     height: 50,
//     width: 300,
//     borderRadius: 12,
//     fontSize: 15,
//     borderWidth: 2,
//     borderColor: 'gray',
//   },
//   Text:{ 
//   },
//   inputfield:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center'
//   }
// });

// export default App;



/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=52 Post Api  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React from 'react';
// import { Text, View, StyleSheet, Button } from 'react-native';
// import { Header } from 'react-native/Libraries/NewAppScreen';

// const App = () => {
//   const saveData= async()=>{
//     // console.warn("hello")
//     const data ={
//       "id":22,
//       "name":"raja",
//       "age":"17"
//     }
//     const url ="http://10.0.2.2:3000/users"
//     let result =await fetch(url,
//    {   method: "post",
//       Headers:{"content-type":"Application/json "},
//     body:JSON.stringify(data)}
//     )
//     result=result.json
//     console.warn(result)

//   }
//   return (
//     <View style={styles.container}>
//       <Text> post Api data call </Text>
//       <Button
//         title='Save Data '
//         onPress={saveData} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems:'center'
//   },

// });

// export default App;


/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=53 post Api with input field %%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React, { useState } from 'react';
// import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0); // Initialize as number, not string

//   return (
//     <View style={styles.container}>
//       <Button
//         onPress={() => setCount(count + 1)}
//         title="Press here to Increment"
//       />
      
//       {/* Added marginBottom to add space between the buttons */}
//       <View style={{height:20}} />
      
//       <Button
//         title="Press here to Decrement"
//         onPress={() => setCount(count - 1)}
//       />
      
//       <Text style={styles.countText}>{count}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   // buttonSpacing: {
//   //   height: 20, // You can adjust this value to control the gap between buttons
//   // },
//   countText: {
//     marginTop: 20, // Add a margin between count text and buttons
//     fontSize: 24,
//   },
// });

// export default App;
