# PrimeStakedEth

## How to get some stETH locally

```sh

# Change LUCKY_USER to your own account.

# stETH
export TOKEN=0xae7ab96520de3a18e5e111b5eaab095312d7fe84
export WHALE=0xd8d041705735cd770408ad31f883448851f2c39d
export LUCKY_USER=0x09fDdBBAf37b19Ca477649Aeef6f4bB46B3Dfb7B

# sfrxETH
export TOKEN=0xac3e018457b222d93114458476f3e3416abbe38f
export WHALE=0x41dda7be30130cebd867f439a759b9e7ab2569e9
export LUCKY_USER=0xd7Df465c5223e4EDAC8fdE5B3dcD97A107659a94

cast rpc anvil_impersonateAccount $WHALE
cast send $TOKEN --from $WHALE "transfer(address,uint256)(bool)" $LUCKY_USER 10000000000000000000 --unlocked
cast rpc anvil_stopImpersonatingAccount $WHALE

# Below is optional to check balances
cast call $TOKEN "balanceOf(address)(uint256)" $WHALE
cast call $TOKEN "balanceOf(address)(uint256)" $LUCKY_USER
```

- [Remix Docs](https://remix.run/docs)

## Development

You will be utilizing Wrangler for local development to emulate the Cloudflare
runtime. This is already wired up in your package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Open up [http://127.0.0.1:8788](http://127.0.0.1:8788) and you should be ready
to go!

## Deployment

Cloudflare Pages are currently only deployable through their Git provider
integrations.

If you don't already have an account, then
[create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages)
and after verifying your email address with Cloudflare, go to your dashboard and
follow the
[Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build
output directory" should be set to `public`.

## TODO

- USD amounts in swap component

- Add balance to token chooser
- Dashboard components
- Stats: Tooltips
- Landing page
- Mobile views
- Dapp Footer?
