import React from "react";
import { useCheckTokenQuery } from "@/redux/api/customer-api";
import { useGetOrderByCustomerIdQuery } from "@/redux/api/order-api";

const Order = () => {
  const { data } = useCheckTokenQuery(null);
  const { data: orderData, isLoading } = useGetOrderByCustomerIdQuery(
    data?.customer?.id,
    {
      skip: Boolean(!data),
    }
  );

  if (isLoading) {
    return <p className="text-center text-lg">Loading orders...</p>;
  }

  if (!orderData?.data?.order?.length) {
    return <p className="text-center text-lg">No orders found</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>

      {orderData.data.order.map((order: any) => (
        <div key={order.id} className="border rounded-lg p-4 mb-6 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">
              Order ID: {order.id} - Status:{" "}
              <span className="text-blue-600">{order.status}</span>
            </h3>
            <p className="text-gray-600 text-sm">
              {new Date(order.order_date).toLocaleDateString()}
            </p>
          </div>

          <p className="text-gray-700 mt-2">
            <strong>Address:</strong> {order.order_address.region},{" "}
            {order.order_address.district}, {order.order_address.street}
          </p>
          <p className="text-gray-700">
            <strong>Total Price:</strong> ${order.total_price}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {order.order_details.map((detail: any, index: number) => (
              <div
                key={index}
                className="border p-3 rounded-lg flex items-center gap-4"
              >
                <img
                  src={
                    import.meta.env.VITE_BASE_IMAGE_URL +
                    detail.product.images[0]
                  }
                  alt={detail.product.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h4 className="font-medium">{detail.product.name}</h4>
                  <p className="text-gray-600 text-sm">
                    Quantity: {detail.quantity}
                  </p>
                  <p className="text-gray-600 text-sm">
                    Price: $
                    {(
                      detail.product.price -
                      (detail.product.price *
                        detail.product?.discount?.percent || 0) /
                        100
                    ).toFixed(2)}
                  </p>

                  {detail.product.discount?.percent && (
                    <p className="text-red-500 text-sm mt-2">
                      Discount: {detail.product.discount.percent}% OFF
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(Order);
