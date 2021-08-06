import { call, put, takeEvery } from 'redux-saga/effects';
import { addTableLineAction, deleteTableLineAction, getTableDataAction, saveTableLineAction } from "../actions";
import { getApiTable, getEditLine, deleteLine, addLine } from "../tools/api";

function* getTableDataWorker () {
    try {
        const dataTable = yield call(getApiTable);
        yield put(getTableDataAction.success(dataTable))
    } catch (e) {
        yield put(getTableDataAction.error(e))
    }
}

function* saveTableLineWorker({ payload }){
    try{
        yield call(getEditLine, payload.data)
        yield put(saveTableLineAction.success())
    }catch (e) {
        yield put(saveTableLineAction.error())
    }
}

function* deleteLineWorker(id) {
    try {
        yield call(deleteLine, id.payload.id)
        yield put(getTableDataAction.request())
    } catch (e) {

    }
}

function* addLimeWorker({payload}) {
    try {
        yield call(addLine, payload.data)
        yield put(getTableDataAction.request())
    } catch (e) {
        yield put(addTableLineAction.error())
    }
}

export default function* rootWatcher () {
    yield takeEvery(getTableDataAction.request, getTableDataWorker)
    yield takeEvery(saveTableLineAction.request, saveTableLineWorker)
    yield takeEvery(deleteTableLineAction.request, deleteLineWorker)
    yield takeEvery(addTableLineAction.request, addLimeWorker)
}
