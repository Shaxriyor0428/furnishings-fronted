import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    toggleWishlist: build.mutation<
      any,
      { productId: number; customerId: number }
    >({
      query: (body) => ({
        url: "like",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wishlist"],
    }),
    getWishlist: build.query<any, string>({
      query: (id) => ({
        url: `like/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist"],
    }),
  }),
});

export const { useToggleWishlistMutation, useGetWishlistQuery } = extendedApi;
