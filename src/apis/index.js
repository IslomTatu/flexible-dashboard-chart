import axios from 'axios'
import authApi from './authApi'
import widgetApi from './widgetApi';


export const base_url = "URL"

export const satellite = axios.create({
    baseURL: base_url,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export const api = {
    auth: authApi,
    widget: widgetApi
}
