# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.2)](https://tailwindcss.com/blog/tailwindcss-v3-2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/with-tailwindcss)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

```bash
pnpm create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## OPENSEA 2.0 DAPP

The opensea 2.0 is a normal nft market place app where we deployed the nft marketplace contract (by using the third web) in the goerli testnet, and then we ve to deployed the nft token contract as well (the name of the token contract is Bored ape yacht club), we can mint as many nfts we want in this token contract, and then we can list these nft tokens in the marketplace (opensea).\

Then the buyer can visit the marketplace(opensea) and he can buy the nfts as per the listing price or make an offer.\

Its a thirdweb applicaion, and the contracts we ve used are marketplace and the nft token contract and are deployed in the goerli testnet.

The Nftmarket place addr - "0x446eCcE05612A89308dA4FE9B6dB7b047BdaBAFF"
The Nft token(NFT collection) contract addr - "0xB7733D0F7C29e439524C99bAB5b3446691393737" .\

the eth svg logo - ""https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=024""
For the front end the app is wrapped with the thirdweb web3 provider 
In this opensea dapp i ve used sanity for the backend to save the user info  and the market items (nft token collect) info


## Deployment 

The is deployed in the heroku and the deployed url is "https://opensea-eth.herokuapp.com/"
The app is redeployed in vercel and the url is "https://opensea-eth.vercel.app/"
