import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        columns: [
            {
                column: 'RFC'
            },
            {
                column: 'NOMBRE'
            },
            {
                column: 'DIRECCION'
            },
            {
                column: 'ALTA'
            }
        ],
        suppliers: [],
        isLoading: false,
        isError: false,
        error: '',
        bienvenido: '',
        version: ''
    },
    reducers: {
        startLoadingSuppliers: (state, /* action */) => {
            state.isLoading = true;
        },
        setSupplier: (state, action) => {
            state.isLoading = false;
            state.suppliers = action.payload.suppliers;
            state.isError = action.payload.isError;
            state.error = action.payload.error;
            state.bienvenido = action.payload.bienvenido;
            state.version = action.payload.version;
        }
    }
});

export const { startLoadingSuppliers, setSupplier } = appSlice.actions;