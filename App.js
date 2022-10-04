import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button } from 'react-native';
import { RadioButton } from './custom-components/radiobutton';
import DropDownPicker from 'react-native-dropdown-picker';

export default function App() {
  const [openBottle, setOpen] = useState(false);
  const [valueBottle, setValue] = useState(0);
  const [openHours, setOpenHours] = useState(false);
  const [valueHours, setValueHours] = useState(0);
  function laske(context) {
    var palaute = {}
    var litra = context.pullot * 0.33
    var grammat = context.litra * 8 * 4.5
    var poltto = context.paino / 10

    palaute.tulos = grammat / (context.paino * context.sukupuoli)
    palaute.grammat_jaljella = grammat - (context.aika * poltto)
    palaute.juotu_litroissa = litra
  }

  function generItems() {
    var itemit = []
    for (var i = 0; i <= 24; i++) {
      var itemi = { label: i, value: i }
      itemit.push(itemi);
    }
    console.log(itemit)
    return itemit
  }

  return (
    <ScrollView nestedScrollEnabled={true} >
      <View style={styles.container}>
        <TextInput keyboardType='number-pad' defaultValue='0' style={styles.numberInput} />
        <DropDownPicker
          listMode='MODAL'
          open={openBottle}
          value={valueBottle}
          items={generItems()}
          setOpen={setOpen}
          setValue={setValue}
        />
        <DropDownPicker
          listMode='MODAL'
          value={valueHours}
          open={openHours}
          items={generItems()}
          setOpen={setOpenHours}
          setValue={setValueHours}
        />
        <RadioButton nameB1='Male' nameB2='Female'></RadioButton>
        <Button onPress={() => laske({})} title='Calculate'></Button>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
    flex: 1,
    zIndex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  numberInput: {
    height: 30,
    flex: 0,
    justifyContent: 'center',
    alignSelf: 'auto'
  }
});
