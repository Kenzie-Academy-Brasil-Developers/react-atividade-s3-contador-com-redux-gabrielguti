import { useSelector } from "react-redux";

const Value = () => {
  const count = useSelector((store) => store.count);
  return <div>{count}</div>;
};

export default Value;
