import axios from 'axios'

import { getBackendUrl } from '@/utils/url'

export const axiosClient = axios.create({
    baseURL: getBackendUrl()
})
