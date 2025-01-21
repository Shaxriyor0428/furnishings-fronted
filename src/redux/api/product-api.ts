import { IGetResponseProducts, IProductQuery } from '@/types'
import { mainApi } from './index'

const extendedApi = mainApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IGetResponseProducts, IProductQuery>({
      query: (params) => ({
        url:'products',
        method: "GET",
        params
      }),
    }),
  }),
})

export const { useGetProductsQuery } = extendedApi;