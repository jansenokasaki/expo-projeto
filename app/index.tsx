import { Image, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 180,
    height: 180
  }, 

  bioText: {
    textAlign: "center"
  }
})
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 25
      }}
    >
      <Image style={styles.image}  source = {require("../assets/images/Jansen.jpeg")} />
      <Text>Jansen Okasaki</Text>
      <Text style={styles.bioText}>Sou Jansen Okasaki, estudante do 4º período de Sistemas para Internet na UNICAP. Tenho interesse em desenvolvimento web e estou sempre buscando aprender novas tecnologias e me envolver em projetos que ampliem meus conhecimentos na área.</Text>
    </View>
  );
}
