import { StyleSheet } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { myColors } from './Colors';

const baseButton: object = {
  width: 72,
  height: 72,
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 8,
  elevation: 5,
  shadowProp: {
    shadowColor: '#1717173a',
    shadowOffset: { width: -2, height: 40 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
};

export const Styles = StyleSheet.create({
  btnBlue: {
    ...baseButton,
    backgroundColor: myColors.blue,
  },

  btnDark: {
    ...baseButton,
    backgroundColor: myColors.btnDark,
  },
  btnLight: {
    ...baseButton,
    backgroundColor: myColors.white,
  },
  btnGray: {
    ...baseButton,
    backgroundColor: myColors.btnGray,
  },

  smallTextLight: {
    fontSize: 32,
    color: myColors.white,
  },
  smallTextDark: {
    fontSize: 32,
    color: myColors.black,
  },
  // Keyboard
  row: {
    maxWidth: '100%',
    flexDirection: 'row',
  },
  viewBottom: {
    justifyContent: 'flex-end',
    top: 82.50,
    // position: 'absolute',
    // bottom: 50,
  },
  screenFirstNumber: {
    fontSize: 96,
    // fontWeight: 300,
    color: myColors.gray,
    fontWeight: '300',
    alignSelf: 'flex-end',
  },
  screenSecondNumber: {
    fontSize: 40,
    color: myColors.gray,
    fontWeight: '200',
  },
});
