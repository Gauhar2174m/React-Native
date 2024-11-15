// import { useState } from "react";
// import { Button, StyleSheet,Text,View } from "react-native";
// const Component=()=>{
//   const [Value,setValue]=useState(0);
//   function Increment(){
// setValue(Value+1);
//   }
//   function Decrement(){
//     setValue(Value-1);
//   }
// return(
// <View>
//   <Button title="Increment" onPress={Increment}/>
//   <Text style={styles.value}>{Value}</Text>
//   <Button title="Decrement" onPress={Decrement}/>

// </View>
// )
// }
// const styles=StyleSheet.create({
// value:{
//   textAlign:'center'
// }
// })
// export default Component;


/* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% props%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
import React, { useState } from "react";
import { StyleSheet,Text,ScrollView, TouchableOpacity, View } from "react-native";


const Component = ({email}) => {
    
    

    const [value,setValue] = useState(0);

    function Increment(){
        setValue(value+2);
    }

    function Decement(){
        setValue(value-2);
    }

    return(
        <ScrollView>

            <View style={styles.container}>
               <TouchableOpacity style={styles.styleButton} onPress={Decement}>
                   <Text style={{color:'white'}}>Decrement</Text>
               </TouchableOpacity>
   
               <View>
                <Text>{value}</Text>
               </View>
   
               <TouchableOpacity style={styles.styleButton} onPress={Increment}>
                   <Text style={{color:'white'}}>Increment</Text>
               </TouchableOpacity>

               <Text>{email}</Text>
            </View>

        </ScrollView>
    )
}

export default Component;

const styles = StyleSheet.create({
    container:{
        marginTop:100,
        flex:1,
        flexDirection:'row',
        gap:20
    },

    styleButton :{
        backgroundColor:'blue',padding:5,borderRadius:5
    }
})

/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% L=21 STATE AND PROPS IN CLASS COMPONENET %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/

// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// class Component extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* Displaying the name received as a prop */}
//         <Text style={styles.headerText}>student name: {this.props.name}</Text>
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   headerText: {
//     color: "#ffffff",
//     fontSize: 20,
//   },
// });

// export default Component;

