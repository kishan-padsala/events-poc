import { baseAPI } from "..";

export const eventAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    storeEvent: builder.mutation<any, any>({
      query: (body) => ({
        url: `store-event`,
        method: "POST",
        body,
      }),
      async onQueryStarted(arg, { queryFulfilled }): Promise<any> {
        const { data } = await queryFulfilled;

        return data;
      },
    }),

    getEvents: builder.query({
      query: () => ({
        url: "get-events",
        method: "GET"
      }),
      async onQueryStarted(arg, { queryFulfilled }) {
        const { data } = await queryFulfilled;

        return data;
      },
    })
  }),
});

export const { useStoreEventMutation, useGetEventsQuery } = eventAPI;