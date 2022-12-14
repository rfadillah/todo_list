// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './component/Task';

export default function App() {
  return (
    <View style={styles.container}>
      {/* today's task */}
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's task</Text>
      </View>
      <View style={styles.items}>
        {/* this is where the task will go */}
        <Task text = {'Task 1'}/>
        <Task text = {'Task 2'}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    paddingHorizontal: 20,
    marginTop:30,
  }

});
