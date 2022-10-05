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
  const [valueWeight, setValueWeight] = useState(0);
  const [valueGender, setValueGender] = useState(null);
  const [valueTulos, setValueTulos] = useState({ tulos: 0, grammat_jaljella: 0, juotu_litroissa: 0 });


  function laske() {
    var palaute = {}
    var litra = valueBottle * 0.33
    var grammat = litra * 8 * 4.5
    var poltto = valueWeight / 10
    var sukupuoliKerroin = 0;

    if (valueGender == 'Male') {
      sukupuoliKerroin = 0.7;
    } else if (valueGender == 'Female') {
      sukupuoliKerroin = 0.6;
    } else {
      console.log('Radio button not pressed');
    }
    palaute.grammat_jaljella = grammat - (valueHours * poltto)
    palaute.tulos = Math.round(palaute.grammat_jaljella / (valueWeight * sukupuoliKerroin) * 100) / 100
    palaute.juotu_litroissa = Math.round(litra * 100) / 100
    setValueTulos(palaute)
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
        <Text>Anna painosi</Text>
        <TextInput keyboardType='number-pad' placeholder='0' style={styles.numberInput} onChangeText={(value) => setValueWeight(value)} />
        <Text>Syötä juomiesi pullojen määrä (1=0.33l)</Text>
        <DropDownPicker
          listMode='MODAL'
          open={openBottle}
          value={valueBottle}
          items={generItems()}
          setOpen={setOpen}
          setValue={setValue}
        />
        <Text>Missä ajassa joit alkoholin?</Text>
        <DropDownPicker
          listMode='MODAL'
          value={valueHours}
          open={openHours}
          items={generItems()}
          setOpen={setOpenHours}
          setValue={setValueHours}
        />
        <Text>Kumpaa sukupuolta olet?</Text>
        <RadioButton nameB1='Male' nameB2='Female' onChange={setValueGender} callback={setValueGender}></RadioButton>
        <Text>Laske</Text>
        <Button onPress={() => laske({})} title='Calculate'></Button>
        <Text>Tulos: {valueTulos.tulos}</Text>
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
