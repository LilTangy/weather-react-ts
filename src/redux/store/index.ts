import { configureStore } from '@reduxjs/toolkit'
import { weatherApi } from '../services/openWeather'

const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(weatherApi.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>

