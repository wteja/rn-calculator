import { Text } from "react-native";

interface IDisplay {
  num: number;
}

export default function Display(props: IDisplay) {
  return <Text>{props.num}</Text>;
}
