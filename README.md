## Setup
1. Use node v.20.19.0+
2. Install npm packages: `npm i`
3. Create a `.env` file in the root directory, and specify your devnet web3auth clientID via `VITE_WEB3AUTH_CLIENT_ID`
4. In your web3auth project settings, whitelist the http://localhost:3000 domain

## Start the app
2. Run `npm run dev` 

## Repro The Crash
1. Browse to `http://localhost:3000/`
2. Use `Login with Google` button to go through the signin flow
3. Press the `Disconnect` button
4. Observe errors in console and the crashed UI state