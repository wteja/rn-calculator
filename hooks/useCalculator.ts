import { useCallback, useState } from "react";

export function useCalculator() {
  const [num, setNum] = useState(0);
  const handlePressNumber = useCallback(() => {}, []);
  const handlePressOperator = useCallback(() => {}, []);
  const handlePressEquals = useCallback(() => {}, []);
  const handlePressCE = useCallback(() => {}, []);
  const handlePressC = useCallback(() => {}, []);
  const handlePressPeriod = useCallback(() => {}, []);

  return {
    num,
    handlePressNumber,
    handlePressOperator,
    handlePressEquals,
    handlePressCE,
    handlePressC,
    handlePressPeriod,
  };
}
