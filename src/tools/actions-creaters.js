import { createAction } from '@reduxjs/toolkit';

export function createAsyncAction(type) {
    return {
        request: createAction(`${type}.REQUEST`),
        success: createAction(`${type}.SUCCESS`),
        error: createAction(`${type}.ERROR`)
    };
}

export {createAction};
