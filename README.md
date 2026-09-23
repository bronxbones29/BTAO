# BTAO Pages V1
Mobile-first static GitHub Pages shell for a TAO-denominated Bittensor Top-5 dashboard.

## Deploy free on GitHub Pages
1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. GitHub: Settings → Pages → Deploy from a branch → `main` / root.
4. Open the Pages URL in Safari. Share → Add to Home Screen.

## Security
BTAO only stores the public coldkey in browser localStorage. Never enter a seed phrase/private key.

## Live data status
This build intentionally does not embed a TaoStats API key in public client code. The UI refuses to represent preview values as live. Add a browser-safe public chain/RPC adapter or a free secret-holding proxy/Action before enabling live balance/ranking labels.

## Ranking target
60% emissions-vs-market-cap efficiency; 40% confirmation (TAO-relative momentum, flows, liquidity, emission trend, fundamentals/risk), with emission-trap and anti-churn filters.
