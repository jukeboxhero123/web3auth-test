import './App.css'
import { useWeb3Auth, useWeb3AuthConnect, useWeb3AuthDisconnect } from '@web3auth/modal/react'
import { WALLET_CONNECTORS, AUTH_CONNECTION } from '@web3auth/modal'

function App() {
  const { disconnect } = useWeb3AuthDisconnect();
  const { connectTo } = useWeb3AuthConnect();
  const { isConnected } = useWeb3Auth();

  const loginWithGoogle = () => {
    connectTo(WALLET_CONNECTORS.AUTH, { authConnection: AUTH_CONNECTION.GOOGLE })
  }

  return (
    <>
      {isConnected ? (
        <div>
          <p>Connected</p>
          <button onClick={() => disconnect()}>Disconnect</button>
        </div>
      ) : (
        <button onClick={loginWithGoogle}>Login with Google</button>
      )}
    </>
  )
}

export default App
