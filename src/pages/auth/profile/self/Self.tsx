import { memo } from "react";
import { useGetOrderQuery } from "@/redux/api/order-api";

const Self = () => {
  const { data } = useGetOrderQuery(null);

  console.log(data);

  return <div>Self</div>;
};

export default memo(Self);
