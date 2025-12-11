import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Web3AuthProvider } from '@web3auth/modal/react'
import web3AuthContextConfig from './web3authContext'

createRoot(document.getElementById('root')!).render(
    <Web3AuthProvider config={web3AuthContextConfig}>
      <App />
    </Web3AuthProvider>
)
