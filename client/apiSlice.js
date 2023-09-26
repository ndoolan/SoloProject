import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// rtk query not using

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3500'}),
    endpoints: (builder) => ({
        getTotalClimbs: builder.query({
            query: ()=> '/totalClimbs',
        })
    })
})

export const {
    usegetTotalClimbsQuery
} = apiSlice