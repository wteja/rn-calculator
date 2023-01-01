import { StyleSheet, SafeAreaView } from "react-native";
import Display from "./components/Display";
import NumsPad from "./components/NumsPad";
import { useCalculator } from "./hooks/useCalculator";

export default function App() {
  const {
    num,
    handlePressNumber,
    handlePressOperator,
    handlePressEquals,
    handlePressC,
    handlePressCE,
    handlePressPeriod,
  } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <Display num={num} />
      <NumsPad
        onPressNumber={handlePressNumber}
        onPressOperator={handlePressOperator}
        onPressEquals={handlePressEquals}
        onPressCE={handlePressCE}
        onPressC={handlePressC}
        onPressPeriod={handlePressPeriod}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
