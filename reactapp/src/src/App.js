import React from "react"
import { Pages } from "./components/pages/Pages"
import "./style/main.scss"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import {persistor, store} from './controller/store'

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Pages />
        </PersistGate>
      </Provider>
    </>
  )
}
