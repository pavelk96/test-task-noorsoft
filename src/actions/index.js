import { createAsyncAction } from "../tools/actions-creaters";

export const getTableDataAction = createAsyncAction("GET_TABLE_DATA");
export const saveTableLineAction = createAsyncAction("SAVE_TABLE_LINE");
export const addTableLineAction = createAsyncAction("ADD_TABLE_LINE");
export const deleteTableLineAction = createAsyncAction("DELETE_TABLE_LINE")
