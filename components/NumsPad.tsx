import { Button, View } from "react-native";

interface INumsPad {
  onPressNumber: (num: number) => void;
  onPressOperator: (operator: string) => void;
  onPressEquals: () => void;
  onPressCE: () => void;
  onPressC: () => void;
  onPressPeriod: () => void;
}

export default function NumPads(props: INumsPad) {
  return (
    <View>
      <Button title="%" />
      <Button title="CE" onPress={() => props?.onPressCE?.()} />
      <Button title="C" onPress={() => props?.onPressC?.()} />
      <Button title="÷" onPress={() => props?.onPressOperator?.("÷")} />
      <Button title="7" onPress={() => props?.onPressNumber?.(7)} />
      <Button title="8" onPress={() => props?.onPressNumber?.(8)} />
      <Button title="9" onPress={() => props?.onPressNumber?.(9)} />
      <Button title="×" onPress={() => props?.onPressOperator?.("×")} />
      <Button title="4" onPress={() => props?.onPressNumber?.(4)} />
      <Button title="5" onPress={() => props?.onPressNumber?.(5)} />
      <Button title="6" onPress={() => props?.onPressNumber?.(6)} />
      <Button title="-" onPress={() => props?.onPressOperator?.("-")} />
      <Button title="1" onPress={() => props?.onPressNumber?.(1)} />
      <Button title="2" onPress={() => props?.onPressNumber?.(2)} />
      <Button title="3" onPress={() => props?.onPressNumber?.(3)} />
      <Button title="+" onPress={() => props?.onPressOperator?.("+")} />
      <Button title="+/-" onPress={() => props?.onPressOperator?.("+/-")} />
      <Button title="0" onPress={() => props?.onPressNumber?.(0)} />
      <Button title="." onPress={() => props?.onPressPeriod?.()} />
      <Button title="=" onPress={() => props?.onPressEquals?.()} />
    </View>
  );
}
