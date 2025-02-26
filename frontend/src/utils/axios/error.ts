import axios, { AxiosError } from 'axios'

import { IApiError } from '@/interfaces/api'

export const getStringFromAxiosError = (error: any) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<IApiError>
        if (axiosError.response) {
            return axiosError.response.data.message
        } else {
            return axiosError.message
        }
    } else {
        return 'Неизвестная ошибка'
    }
}
