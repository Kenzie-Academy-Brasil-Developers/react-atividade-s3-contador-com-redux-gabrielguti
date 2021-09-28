import { useState } from "react";
import { useDispatch } from "react-redux";
import { addValue, subValue } from "../../store/modules/counter/actions";
import "./styles.css";
const Counter = () => {
  const dispatch = useDispatch();

  const [count, setCount] = useState(0);
  const handleAddNumber = () => dispatch(addValue(count));
  const handleSubNumber = () => dispatch(subValue(count));
  return (
    <div className="operationButtons">
      <button onClick={handleAddNumber}>+</button>
      <button onClick={handleSubNumber}>-</button>
    </div>
  );
};
export default Counter;
