import { useState } from 'react';
import { Text, ScrollView, View, TextInput, Button, Image } from 'react-native';
import { RadioButton } from './custom-components/radiobutton';
import DropDownPicker from 'react-native-dropdown-picker';
import { styles } from './styles'

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

    if (valueGender == 'Mies') {
      sukupuoliKerroin = 0.7;
    } else if (valueGender == 'Nainen') {
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
        <View style={styles.imageView}>
          <Image source={require('./assets/IMG_0320.jpg')} style={styles.image} />
        </View>
        <Text style={styles.title}>Anna painosi</Text>
        <TextInput keyboardType='number-pad' placeholder='0' style={styles.numberInput} onChangeText={(value) => setValueWeight(value)} />
        <Text style={styles.title}>Syötä juomiesi pullojen määrä (1=0.33l)</Text>
        <View style={styles.dropDown}>
          <DropDownPicker
            listMode='MODAL'
            open={openBottle}
            value={valueBottle}
            items={generItems()}
            setOpen={setOpen}
            setValue={setValue}
          />
        </View>
        <Text style={styles.title}>Missä ajassa joit alkoholin?</Text>
        <View style={styles.dropDown}>
          <DropDownPicker
            listMode='MODAL'
            value={valueHours}
            open={openHours}
            items={generItems()}
            setOpen={setOpenHours}
            setValue={setValueHours}
          />
        </View>
        <Text style={styles.title}>Kumpaa sukupuolta olet?</Text>
        <RadioButton nameB1='Mies' nameB2='Nainen'
          callback={setValueGender} colorSelected='#2196F3' colorNotSelected='#dcdcdc' style={styles.radioButton}></RadioButton>
        <Text style={styles.title}>Laske</Text>
        <Button onPress={() => laske({})} title='Laske' style={styles.submitButton}></Button>
        <Text style={styles.result}>Tulos: {valueTulos.tulos}‰</Text>
      </View>
    </ScrollView >
  );
}


