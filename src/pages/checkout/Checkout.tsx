import { memo } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return <div>Checkout</div>;
};

export default memo(Checkout);
