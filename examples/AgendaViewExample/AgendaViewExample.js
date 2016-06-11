/* eslint import/no-unresolved: 0 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import AgendaView from 'react-native-agenda-view';

const list = [
  {
    header: '09:00 - 09:30 am',
    description: 'Breakfast',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: '#a0a0a0',
    startDate: Date.now(),
    endDate: Date.now() + 10 * 60,
  }, {
    header: '09:30 - 10:00 am',
    description: 'Amazing speaker 1: Amazing talk 1',
    startDate: Date.now() + 10 * 60,
    endDate: Date.now() + 2 * 10 * 60,
  }, {
    header: '10:00 - 10:30 am',
    description: 'Amazing speaker 2: Amazing talk 2',
    startDate: Date.now() + 2 * 10 * 60,
    endDate: Date.now() + 3 * 10 * 60,
  }, {
    header: '10:30 - 11:00 am',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: '#a0a0a0',
    description: 'Coffee break',
  }, {
    header: '11:00 am - 1:00 pm',
    description: 'Amazing workshop',
    startDate: Date.now() + 10 * 60,
    endDate: Date.now() + 2 * 10 * 60,
  }, {
    header: '1:00 - 2:00 pm',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: '#a0a0a0',
    description: 'Amazing lunch break',
  }, {
    header: '2:00 - 2:30 pm',
    description: 'Amazing speaker 3: Amazing talk 3',
    startDate: Date.now() + 10 * 60,
    endDate: Date.now() + 2 * 10 * 60,
  }, {
    header: '2:30 - 3:00 pm',
    description: 'Amazing speaker 4: Amazing talk 4',
    startDate: Date.now() + 2 * 10 * 60,
    endDate: Date.now() + 3 * 10 * 60,
  }, {
    header: '3:00 - 3:30 pm',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: '#a0a0a0',
    description: 'Coffee break',
  }, {
    header: '3:30 - 4:00 pm',
    description: 'Amazing speaker 5: Amazing talk 5',
    startDate: Date.now() + 10 * 60,
    endDate: Date.now() + 2 * 10 * 60,
  }, {
    header: '4:00 - 4:30 pm',
    description: 'Amazing speaker 6: Amazing talk 6',
    startDate: Date.now() + 2 * 10 * 60,
    endDate: Date.now() + 3 * 10 * 60,
  }, {
    header: '4:30 - 5:00 pm',
    description: 'Amazing lighting talks',
    startDate: Date.now() + 2 * 10 * 60,
    endDate: Date.now() + 3 * 10 * 60,
  }, {
    header: '5:00 - 10:30 pm',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    color: '#a0a0a0',
    description: 'Dinner & Amazing party!!!',
  },
];

const AgendaViewExample = () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      Amazing conference schedule!
    </Text>
    <AgendaView items={list} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 25,
  },
});

export default AgendaViewExample;
