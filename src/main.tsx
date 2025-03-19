import ReactDOM from 'react-dom/client'
import React from 'react'
import { App } from './app'
import './index.css'
import './lib/locale'

const container = document.getElementById('root') as HTMLDivElement
const root = ReactDOM.createRoot(container)

root.render(
    <App/>
)
