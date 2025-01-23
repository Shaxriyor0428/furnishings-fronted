import { ICustomer } from '@/types';
import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    createCustomer: build.mutation<any, ICustomer>({
      query: (body) => ({
        url:'customer/auth/signup',
        method: "POST",
        body
      }),
    }),
    createOtp: build.mutation<any, {email:string}>({
      query: (body) => ({
        url:'otp',
        method: "POST",
        body
      }),
    }),
    verifyOtp: build.mutation<any, {email:string, otp: string}>({
      query: (body) => ({
        url:'otp/verify-otp',
        method: "POST",
        body
      }),
    }),
  }),
})

export const { useCreateCustomerMutation, useCreateOtpMutation, useVerifyOtpMutation } = extendedApi;