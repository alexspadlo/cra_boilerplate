import { FAKE_USER, API_LINK } from '../constants/config'
import axios from 'axios'

export const getAllUsers = async (data) => {
    try {
        const response = await axios.get(API_LINK) // get need only the url
        // const response = await axios.post(API_LINK, data)    // post need url and the data that you want to post
        // const response = await axios.put(API_LINK, data)     // put the url also need the id from the data that you want to modify + the new data
        // const response = await axios.delete(API_LINK)  // delete same from put but without the data
        return response.data
    } catch {
        return false
    }
}

export const logIn = (user) => {
    const userString = JSON.stringify(user) // tranform JS object in a string
    localStorage.setItem(FAKE_USER, userString) // setting the item FAKE_USER with the userString value
    setTimeout(() => {
        window.location.href = '/dashboard'
    }, 500)
}

export const logOut = () => {
    localStorage.removeItem(FAKE_USER)
    setTimeout(() => {
        window.location.reload()
    }, 500)
}

export const isLogIn = () => {
    const checkLogIn = localStorage.getItem(FAKE_USER)
    if(checkLogIn) {
        return true
    } 
    return false
}

