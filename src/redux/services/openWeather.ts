import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResults } from "../../types/IWeather";



export const weatherApi = createApi({
    reducerPath: "weatherApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://api.openweathermap.org/data/2.5/",
    }),
    endpoints: (builder) => ({
        getWeatherApi: builder.query<IResults, string>({
            query: (location) =>
                `weather?q=${location}&appid=2832c0956a45255c86e88019a5807954`,
        }),
    }),
});

export const { useLazyGetWeatherApiQuery } = weatherApi;
