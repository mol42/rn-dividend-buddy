import { put, takeEvery, call, takeLeading } from 'redux-saga/effects';
import {$A} from "../helper";
import * as $SA from "../modules/stocks/actionTypes";
import stocksApi from "../modules/stocks/stocksApi";


// saga fonksiyonlari aslinda generator fonksiyonlardir.
function* loadAllStocks() {
  try {
    const stocksResult =  yield call(stocksApi.loadAllStocks);
    yield put($A($SA.STORE_ALL_STOCKS, stocksResult.data));
  } catch (err) {
    console.log(err);
  }
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield takeEvery($SA.LOAD_ALL_STOCKS, loadAllStocks);
  // yield takeLeading($SA.LOAD_ALL_STOCKS, loadAllStocks);
  // yield takeEvery($SA.LOAD_ALL_STOCKS, loadAllStocks);
}