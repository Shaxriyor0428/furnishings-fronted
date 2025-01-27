import { mainApi } from "./index";

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    toggleWishlist: build.mutation<any, { productId: number; customerId: number }>(
      {
        query: (body) => ({
          url: "like",
          method: "POST",
          body,
        }),
        invalidatesTags: ["Wishlist","Product"],
      }
    ),
    getWishlist: build.query<any, number>({
      query: (id) => ({
        url: `like/customer/${id}`,
        method: "GET",
      }),
      providesTags: ["Wishlist","Product"],
    }),
  }),
});

export const { useToggleWishlistMutation, useGetWishlistQuery } = extendedApi;
