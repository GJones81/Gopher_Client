import { CHANGE_AUTH } from './types'

export function changeAuth(jsonWebToken){
    return {
        type: CHANGE_AUTH,
        payload: jsonWebToken
    }
}