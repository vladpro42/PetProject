import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = "http://localhost:3001/"

export const taskApi = createApi(
    {
        reducerPath: "taskAPi",
        baseQuery: fetchBaseQuery({ baseUrl, }),

        endpoints: (builder) => ({
            getAllTasks: builder.query({
                query: (name) => `api/${name}`,
            }),
        }),
    }
);

export const { useGetAllTasksQuery } = taskApi;