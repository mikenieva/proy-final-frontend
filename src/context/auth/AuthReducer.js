/* eslint-disable import/no-anonymous-default-export */

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    REGISTRAR_INGRESOS,

} from '../../types/index'

export default (state, action) => {
    switch(action.type){

        case LOGIN_EXITOSO:
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token)
            
            return{
                ...state,
                autenticado: true,
                mensaje: null
            }
        
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token')

            return {
                ...state,
                token: null,
                usuario: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }
        
            case OBTENER_USUARIO:
                return {
                    ...state,
                    autenticado: true,
                    usuario: action.payload
                }
            
            case REGISTRAR_INGRESOS:
                return {
                    ...state,
                    datosUsuario: action.payload
                }
            
            default:
                return state
    }
}