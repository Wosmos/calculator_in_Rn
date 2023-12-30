import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch, SafeAreaView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useState } from 'react';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import Btn from './src/components/Btn';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
  const [theme, setTheme] = useState('light');
  const gradientColors = theme === 'light' ? 'dark' : 'light';
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView
        style={theme === 'light' ? styles.container : styles.darkmoodeContainer}
      >
        <StatusBar style='auto' />
        <Switch
          style={{ marginTop: 30 }}
          value={theme === 'light'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <Text
          style={
            theme === 'light'
              ? [styles.text, { position: 'absolute', top: 60 }]
              : [styles.text, { color: 'white', position: 'absolute', top: 60 }]
          }
        >
          Hey Mf World
        </Text>
        <MyKeyboard />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: myColors.light,
  },
  darkmoodeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#110015',
    color: 'white',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  box: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
      borderRadius: 50,
    },

    elevation: 12,
  },
  inner: {
    backgroundColor: 'white',
    padding: 20,
  },
});
