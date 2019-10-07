import { satellite } from './index'

const formdata = new FormData()

formdata.append("_username", "demo")
formdata.append("_password", "demodemo")

const authApi = {
    checkAuth: () => satellite.post('/security/auth_check', formdata)
}

export default authApi