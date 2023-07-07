import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View,TextInput, TouchableOpacity, Platform,KeyboardAvoidingView } from "react-native";
import Task from "./components/tasks";
import { useRef, useState } from "react";

export default function App() {
  const [text,setText]=useState('')
  const [arr,setArr]=useState([])
  const textInput=useRef(text)

  const AddHandler=()=>{
   textInput.current.clear()
   arr.push(text)
   setArr([...arr])
  }

  const CompleteTask=(index)=>{
    const copyTask=[...arr]
    copyTask.splice(index,1)
    setArr(copyTask)
  }
  

  return (

    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle} >Today's tasks</Text>
        <View style={styles.items}>
        {arr.map((each,i)=>{
          return(
            <TouchableOpacity onPress={()=>CompleteTask(i)}>
              <Task text={each} />
            </TouchableOpacity>
            )
          })}
          </View>
      </View>

      <KeyboardAvoidingView behaviour={Platform.OS=='ios'? "padding":"height"} style={styles.writeTaskWrapper} >
        <TextInput style={styles.input} ref={textInput} onChangeText={(text)=>setText(text)} placeholder="Write a Task here"/>
        <TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text style={styles.addText} onPress={()=>AddHandler()}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },

  taskWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    position:"absolute",
    bottom:60,
    flexDirection:'row',
    alignItems:'center',
    width:'100%',
    justifyContent:"space-around"
  },

  input:{
    paddingHorizontal:12,
    paddingVertical:10,
    backgroundColor:'#FFF',
    width:250,
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1
  },
  textWrapper:{
    backgroundColor:'#FFF',
    width:50,
    height:50,
    // textAlign:'center',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:50,
     borderColor:'#C0C0C0',
    borderWidth:1

  },
  addText:{
    color:'#C0C0C0',
    fontSize:30,
    fontWeight:'300',
    
  }

});
