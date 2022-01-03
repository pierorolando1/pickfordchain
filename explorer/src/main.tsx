import React from 'react'
import ReactDOM from 'react-dom'
import {RecoilRoot} from 'recoil'
import './index.css'
import MainRouter from './router'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <MainRouter />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
