import {createReducer} from "@reduxjs/toolkit"

const initialState = {
    dataTable: [],
    isLoadingDataTable: false,
    errorDataTable: "",
};

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase('GET_TABLE_DATA.REQUEST', (state, action) => {
           return {
               ...state,
               dataTable: [],
               isLoadingDataTable: true
           }
        })
        .addCase('GET_TABLE_DATA.SUCCESS', (state, action) => {
            return {
                ...state,
                dataTable: action.payload,
                isLoadingDataTable: false
            }
        })
        .addCase('GET_TABLE_DATA.ERROR', (state, action) => {
            return {
                ...state,
                errorDataTable: action.payload.e,
                isLoadingDataTable: false
            }
        })
        .addCase('SAVE_TABLE_LINE.REQUEST', (state, action) => {
            return {
                ...state
            }
        })
        .addCase('SAVE_TABLE_LINE.SUCCESS', (state, action) => {
            return {
                ...state
            }
        })
        .addCase('SAVE_TABLE_LINE.ERROR', (state, action) => {
            return {
                ...state
            }
        })
        .addCase('DELETE_TABLE_LINE.SUCCESS', (state, action) => {
            return state
        })
})

export default reducer;
