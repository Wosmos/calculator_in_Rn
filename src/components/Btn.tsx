import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Styles } from '../styles/GlobalStyles';
import { ThemeContext } from '../context/ThemeContext';
import LinearGradient from 'react-native-linear-gradient';
interface ButtonProps {
  onPress: () => void;
  title: string;
  isBlue: boolean;
  isGray: boolean;
}

export default function Button({
  onPress,
  title,
  isBlue,
  isGray,
}: ButtonProps) {
  const theme = React.useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={
        isBlue
          ? Styles.btnBlue
          : isGray
          ? Styles.btnGray
          : theme === 'light'
          ? Styles.btnLight
          : Styles.btnDark
      }
      onPress={onPress}
    >
      <Text
        style={
          isBlue || isGray
            ? Styles.smallTextLight
            : theme === 'dark'
            ? Styles.smallTextLight
            : Styles.smallTextDark
        }
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}
