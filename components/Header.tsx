import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerItems} activeOpacity={0.4}>
        <Icon name="menu" size={24} />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.headerItems}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  heading: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
  headerItems: {
    flex: 1,
  },
});
