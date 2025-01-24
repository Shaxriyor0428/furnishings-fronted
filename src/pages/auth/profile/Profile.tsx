// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useGetCustomerByIdQuery } from "../../../redux/api/customer-api";
// import { clearOtp } from "@/redux/features/otp-slice";
// import { getStorage } from "../../../utils";
// import { ICustomerDataResponse } from "@/types";
// import { useNavigate } from "react-router-dom";

const Profile = () => {
  // const navigate = useNavigate();
  // const customerId = getStorage("customerId");
  // const dispatch = useDispatch();
  // const { data }: { data?: ICustomerDataResponse } = useGetCustomerByIdQuery({
  //   id: Number(customerId),
  // });

  // if (!customerId) {
  //   navigate("/auth/sign-in", { replace: true });
  // }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-center dark:text-black">
      profile
    </div>
  );
};

export default Profile;
