import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    createOrder: build.mutation<any, any>({
      query: (body) => ({
        url: `http://localhost:3000/api/order`,
        // url:"order",
        method: "POST",
        body,
      }),
      invalidatesTags: [],
    }),
  }),
});

export const { useCreateOrderMutation } = extendedApi;
