import { getProducts } from '@/api/products'
import { IProduct } from '@/interfaces/products'
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
    list: IProduct[]
    loading: boolean
}

const initialState: IInitialState = {
    list: [],
    loading: false
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addCase(getProducts.pending, (state) => {
                state.loading = true
            })
    }
})

export default productsSlice
