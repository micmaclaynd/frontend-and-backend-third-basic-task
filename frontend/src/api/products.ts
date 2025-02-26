import { createAsyncThunk } from '@reduxjs/toolkit'
import { IProduct } from '@/interfaces/products'
import { getStringFromAxiosError } from '@/utils/axios/error'
import { axiosClient } from '@/utils/axios/client'

export const getProducts = createAsyncThunk(
    'products/get',
    async (data, thunkApi) => {
        try {
            const response = await axiosClient.get<IProduct[]>('/products')
            return thunkApi.fulfillWithValue(response.data)
        } catch (error) {
            return thunkApi.rejectWithValue(getStringFromAxiosError(error))
        }
    }
)
