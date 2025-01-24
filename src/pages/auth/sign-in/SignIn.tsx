import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSignInMutation } from "../../../redux/api/customer-api";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { saveToken } from "../../../redux/features/token-slice";
import { saveStorage } from "../../../utils";
import { RootState } from "../../../redux";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .required("Email is required."),
  password: yup
    .string()
    .min(4, "Password must be at least 4 characters.")
    .required("Password is required."),
});

interface ISignIn {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  // const token = useSelector((state: RootState) => state.token.access_token);

  // useEffect(() => {
  //   if (token) {
  //     navigate("/auth/profile", { replace: true });
  //   }
  // }, [token, navigate]);

  const [showPassword, setShowPassword] = useState(false);
  const [signIn] = useSignInMutation();
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignIn>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ISignIn) => {
    signIn(data)
      .unwrap()
      .then((res) => {
        dispatch(saveToken(res?.data?.access_token));
        saveStorage("access_token", res?.data?.access_token);
        saveStorage("customerId", res?.data?.id);
        navigate("/auth/profile");
      })
      .catch((err) => {
        let msg = err.data.message;
        toast.error(Array.isArray(msg) ? msg[0] : msg, {
          position: "bottom-right",
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Sign In
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className=" relative">
              <input
                {...register("password")}
                type={showPassword ? "text" : "password"}
                className={`w-full px-4 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all`}
                placeholder="••••••••"
              />
              <span
                onClick={togglePasswordVisibility}
                className="text-xl absolute top-[50%] right-4 cursor-pointer -translate-y-1/2"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password?.message}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <Link
              to={"#"}
              className="text-sm text-indigo-600 hover:text-indigo-500"
            >
              Forgot password?
            </Link>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            to={"/auth/sign-up"}
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
