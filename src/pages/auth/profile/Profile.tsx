import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCustomerByIdQuery } from "../../../redux/api/customer-api";
import { clearOtp } from "@/redux/features/otp-slice";
import { getStorage } from "../../../utils";
import { ICustomerDataResponse } from "@/types";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const customerId = getStorage("customerId");
  const dispatch = useDispatch();
  const { data }: { data?: ICustomerDataResponse } = useGetCustomerByIdQuery({
    id: Number(customerId),
  });

  if (!customerId) {
    navigate("/auth/sign-in", { replace: true });
  }

  useEffect(() => {
    dispatch(clearOtp());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
        {data ? (
          <>
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-indigo-500 text-white flex items-center justify-center rounded-full text-2xl font-bold">
                {data.data.customer.first_name[0]}
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  {data.data.customer.first_name} {data.data.customer.last_name}
                </h2>
                <p className="text-gray-600 text-sm">
                  {data.data.customer.email}
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Phone:</p>
                <p className="text-gray-900 font-medium">
                  {data.data.customer.phone_number}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
