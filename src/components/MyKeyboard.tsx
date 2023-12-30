import { StyleSheet, Text, View } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import * as React from 'react';
import Btn from './Btn';
import { myColors } from '../styles/Colors';

const MyKeyboard = (): JSX.Element => {
  const [firstNumber, setFirstNumber] = React.useState('');
  const [secondNumber, setSecondNumber] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [result, setResult] = React.useState<Number | null>(null);
  const handleNumberPress = (buttonValue: string) => {
    if (firstNumber.length < 10) {
      setFirstNumber(firstNumber + buttonValue);
    }
  };

  const handleOperationPress = (buttonValue: string) => {
    setOperation(buttonValue);
    setSecondNumber(firstNumber);
    setFirstNumber('');
  };
  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setOperation('');
    setResult(null);
  };

  const getResult = () => {
    switch (operation) {
      case '+':
        clear();
        setResult(parseInt(secondNumber) + parseInt(firstNumber));
        break;
      case '-':
        clear();
        setResult(parseInt(secondNumber) - parseInt(firstNumber));
        break;
      case '*':
        clear();
        setResult(parseInt(secondNumber) * parseInt(firstNumber));
        break;
      case '/':
        clear();
        setResult(parseInt(secondNumber) / parseInt(firstNumber));
        break;
      case '%':
        setResult(parseInt(secondNumber) % parseInt(firstNumber));
      default:
        clear();
        setResult(0);
        break;
    }
  };
  const firstNumberDisplay = () => {
    if (result !== null) {
      return (
        <Text
          style={
            Number(result) < 99999
              ? [Styles.screenFirstNumber, { color: myColors.result }]
              : [
                  Styles.screenFirstNumber,
                  { fontSize: 50, color: myColors.result },
                ]
          }
        >
          {result?.toString()}
        </Text>
      );
    }
    if (firstNumber && firstNumber.length < 6) {
      return <Text style={Styles.screenFirstNumber}>{firstNumber}</Text>;
    }
    if (firstNumber == '') {
      return <Text style={Styles.screenFirstNumber}>{'0'}</Text>;
    }
    if (firstNumber.length > 5 && firstNumber.length < 8) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 70 }]}>
          {firstNumber}
        </Text>
      );
    }
    if (firstNumber.length > 7) {
      return (
        <Text style={[Styles.screenFirstNumber, { fontSize: 50 }]}>
          {' '}
          {firstNumber}
        </Text>
      );
    }
  };

  return (
    <View style={[Styles.viewBottom, { width: '100%', height: '80%', alignItems: 'center'}]}>
      {/* screen */}
      <View
        style={{
          
          height: "42.5%",
          width: '90%',
          justifyContent: 'flex-end',
          alignSelf: 'center',
        }}
      >
        <Text style={Styles.screenSecondNumber}>
          {secondNumber}
          <Text style={{ color: 'purple', fontSize: 50, fontWeight: '500' }}>
            {operation}
          </Text>
          {firstNumberDisplay()}
        </Text>
      </View>
      {/* first row */}
      <View style={Styles.row}>
        <Btn title='AC' isGray onPress={clear} isBlue={false}  />
        <Btn
          title='+/-'
          isGray
          onPress={() => handleOperationPress('+/-')}
          isBlue={false}
        />
        <Btn
          title='%'
          isGray
          onPress={() => handleOperationPress('%')}
          isBlue={false}
        />
        <Btn
          title='/'
          isBlue
          onPress={() => handleOperationPress('/')}
          isGray={false}
        />
      </View>
      {/* secound row */}
      <View style={Styles.row}>
        <Btn
          title='7'
          onPress={() => handleNumberPress('7')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='8'
          onPress={() => handleNumberPress('8')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='9'
          onPress={() => handleNumberPress('9')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='*'
          isBlue
          onPress={() => handleOperationPress('*')}
          isGray={false}
        />
      </View>
      {/* third row */}
      <View style={Styles.row}>
        <Btn
          title='4'
          onPress={() => handleNumberPress('4')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='5'
          onPress={() => handleNumberPress('5')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='6'
          onPress={() => handleNumberPress('6')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='-'
          isBlue
          onPress={() => handleOperationPress('-')}
          isGray={false}
        />
      </View>
      {/* forth row */}
      <View style={Styles.row}>
        <Btn
          title='1'
          onPress={() => handleNumberPress('1')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='2'
          onPress={() => handleNumberPress('2')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='3'
          onPress={() => handleNumberPress('3')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='+'
          isBlue
          onPress={() => handleOperationPress('+')}
          isGray={false}
        />
      </View>
      {/* fifth row */}
      <View style={Styles.row}>
        <Btn
          title='.'
          onPress={() => handleNumberPress('.')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='0'
          onPress={() => handleNumberPress('0')}
          isBlue={false}
          isGray={false}
        />
        <Btn
          title='⌫'
          onPress={() => setFirstNumber(firstNumber.slice(0, -1))}
          isBlue={false}
          isGray={false}
        />
        <Btn title='=' isBlue onPress={() => getResult()} isGray={false} />
      </View>
    </View>
  );
};


export default MyKeyboard;

const styles = StyleSheet.create({});
