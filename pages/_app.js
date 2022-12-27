import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
/**
 * The chain ID 4 represents the Goerli network
 * The `injected` connector is a web3 connection method used by Metamask
 */
const supportedChainIds = [5]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      desiredChainId={ChainId.Goerli}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
