import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getAddress: build.query({
      query: () => ({
        url: `order-addresses`,
        method: "GET",
      }),
      providesTags: ["Address"],
    }),
  }),
});

export const { useGetAddressQuery } = extendedApi;
