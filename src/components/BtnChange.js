import { StyleSheet,TouchableHighlight,Text, Button } from "react-native"
import { showAlert } from "./util/generalFunctions"
import { colors } from "./global/constants"

const BtnChange = ({typeColor , setColor}) => {

  const {name, background} = colors[typeColor]

  const handleChangeColor = () => {
    setColor(typeColor); 
    showAlert(typeColor);
  }

  return (
    <TouchableHighlight 
      style={{backgroundColor:background , margin:5}}
      title={name}
      onPress={() => handleChangeColor(typeColor)}
    >
      <Text style={styles.textButton}> Botón {name}</Text>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  textButton: {
    margin: 5, 
    paddingVertical: 3, 
    paddingHorizontal: 10,
    fontSize: 20,
    color: 'white',
  }
});
export default BtnChange