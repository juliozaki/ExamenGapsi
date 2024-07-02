import { startLoadingSuppliers, setSupplier } from "./appSlice";
import { gapsiApi } from "../../api/gapsiApi";
import { version } from "react";


export const getBienvenida = () => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSuppliers());

        gapsiApi.get(`getBienvenida`)
            .then((response) => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: false,
                    error: '',
                    bienvenido: response.data,
                    version: ''
                }));
            }).catch(error => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: true,
                    error: error.request.response,
                    bienvenido: '',
                    version: ''
                }));
            });
    }
}


export const getVersion = (bienvenido) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSuppliers());

        gapsiApi.get(`getVersion`)
            .then((response) => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: false,
                    error: '',
                    bienvenido: bienvenido,
                    version: response.data
                }));
            }).catch(error => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: true,
                    error: error.request.response,
                    bienvenido: '',
                    version: ''
                }));
            });
    }
}


export const getSuppliers = () => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSuppliers());

        gapsiApi.get(`getSuppliers`)
            .then((response) => {
                dispatch(setSupplier({
                    suppliers: response.data,
                    isError: false,
                    error: '',
                    bienvenido: '',
                    version: ''
                }));
            }).catch(error => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: true,
                    error: error.request.response,
                    bienvenido: '',
                    version: ''
                }));
            });
    }
}

export const deleteSupplier = (rfc) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSuppliers());

        gapsiApi.get(`deleteSupplier/${rfc}`)
            .then((response) => {

                gapsiApi.get(`getSuppliers`)
                    .then((response) => {
                        dispatch(setSupplier({
                            suppliers: response.data,
                            isError: false,
                            error: 'Eliminado correctamente',
                            bienvenido: '',
                            version: ''
                        }));
                    });
            }).catch(error => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: true,
                    error: error.request.response,
                    bienvenido: '',
                    version: ''
                }));
            });
    }
}


export const saveSupplier = (rfc, nombre, direccion) => {

    return async (dispatch, getState) => {

        dispatch(startLoadingSuppliers());

        gapsiApi.post(`saveSupplier`,
            {
                rfc: rfc,
                nombre: nombre,
                direccion: direccion,
                fecha_alta: new Date().toLocaleDateString('en-US')
            }
        )
            .then((response) => {
                dispatch(setSupplier({
                    suppliers: '',
                    isError: false,
                    error: 'Se ha guardado correctamente',
                    bienvenido: '',
                    version: ''
                }));
            }).catch(error => {
                dispatch(setSupplier({
                    suppliers: [],
                    isError: true,
                    error: error.request.response,
                    bienvenido: '',
                    version: ''
                }));
            });
    }
}