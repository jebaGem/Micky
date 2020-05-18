import { all, fork } from "redux-saga/effects";
import setValuesSaga from "./Saga";

export default function* rootSaga() {
  yield all([fork(setValuesSaga)]);
}
