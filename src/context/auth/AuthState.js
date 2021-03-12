import React, {useReducer} from 'react'

import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'

import clienteAxios from '../../config/axios'
import tokenAuth from '../../config/token'

import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR,
    CERRAR_SESION,
    REGISTRAR_INGRESOS,
    ERROR_REGISTRAR_INGRESOS
} from '../../types/index'

const AuthState = props => {

    //Datos iniciales para empezar el estado global
    const initialState = {
        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null, // info del usuario
        datosUsuario: null
    }

    const [state, dispatch] = useReducer(AuthReducer,initialState)

    // Registra un usuario

    const registrarUsuario = async datos => {
        try{
            const respuesta = await clienteAxios.post('/usuarios',datos)

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            // Obtener el usuario
            usuarioAutenticado()

        } catch(error){
            dispatch({
                type: REGISTRO_ERROR,
            })
        }
    }

    // Retorna el usuario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token') // LEER EL TOKEN DE LOCAL STORAGE

        if(token) {
            // Función para enviar el token por headers
            tokenAuth(token)
        }

        try {                       
            const respuesta = await clienteAxios.get('/auth')

            console.log("Respuesta:", respuesta)

            // YA TENGO LOS DATOS, AHORA QUÉ? 
            // TOCA MODIFICAR EL ESTADO GLOBAL
            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario // PAYLOAD = ARGUMENTO ---> action.payload
            })

        } catch(error) {
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    // Cuando el usuario inicia sesión
    const iniciarSesion = async datos => {
        try{
            const respuesta = await clienteAxios.post('/auth', datos)

            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            })

            usuarioAutenticado()

        } catch(error){
            console.log(error)
            // const alerta = {
            //     msg: error.response.data.msg,
            //     categoria:'alerta-error'
            //}
            dispatch({
                type: LOGIN_ERROR
                // payload: alerta
            })
        }
    }

    // Actualizar los ingresos cuando se ingresen

    const registrarIngresos = async (datos) => {
        try {
            // const respuestaApi = await clienteAxios.get('/usuarios',datos)
            // console.log("Usuario con ingresos:",respuestaApi)
            
            const respuesta = await clienteAxios.post('/ingresos')
            console.log("Ingreso registrado:",respuesta)

            dispatch({
                type: REGISTRAR_INGRESOS,
                payload: respuesta.data.usuario
            })
        } catch(error) {
            console.log(error)
            dispatch({
                type: ERROR_REGISTRAR_INGRESOS
            })
            
        }
    }
    // Cierra la sesión del usuario
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    }

    return (
        <AuthContext.Provider value={{
            token: state.token,
            autenticado: state.autenticado,
            usuario: state.usuario,
            datosUsuario: state.datosUsuario,
            registrarUsuario,
            iniciarSesion,
            usuarioAutenticado,
            cerrarSesion,
            registrarIngresos
        }}>
            {props.children}
            </AuthContext.Provider>
    )
}

export default AuthState