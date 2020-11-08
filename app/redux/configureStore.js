import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import thunk from "redux-thunk";
import allReducers from "./allReducers";
import allSagas from "./saga/sagas";

// saga middleware yaratiyoruz
const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState) {
  // redux middleware dizisine ekliyoruz
  const middleware = [thunk, sagaMiddleware];

  const store = createStore(
    allReducers,
    initialState,
    compose(applyMiddleware(...middleware))
  );

  return store;
}

const store = configureStore();

// saga bir sistem oldugu icin bu sekilde baslatiyoruz.
// Bu noktada saga paralel bir thread gibi dusunebiliriz
// teknik olarak JS single thread oldugu icin gercekte ayri
// bir thread yaratilmiyor sanki bir thread varmis gibi
// dusununce daha da kolay oluyor sagalar ile calismak.
sagaMiddleware.run(allSagas);

export default store;
