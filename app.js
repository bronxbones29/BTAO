const $=s=>document.querySelector(s);const KEY='btao_wallet';
const demo=[['Targon',4,91.8],['IOTA',9,88.6],['Chutes',64,86.1],['Gradients',56,83.9],['Compute',27,81.7]];
function short(a){return a?`${a.slice(0,7)}…${a.slice(-6)}`:''}
function renderShell(a){$('#connect').hidden=true;$('#dash').hidden=false;$('#walletShort').textContent=short(a);$('#top5').innerHTML=demo.map((x,i)=>`<div class="rank"><div class="n">0${i+1}</div><div><div class="name">${x[0]}</div><div class="meta">SN${x[1]} · preview layout</div></div><div class="score">—</div></div>`).join('');}
async function refresh(){const a=localStorage.getItem(KEY);if(!a)return;renderShell(a);$('#total').textContent='— τ';$('#liveText').textContent='PROVIDER NEEDED';$('#providerNote').textContent='No secrets are embedded in this public Pages build.';}
$('#walletForm').addEventListener('submit',e=>{e.preventDefault();const a=$('#address').value.trim();if(a.length<20)return alert('Enter a valid public Bittensor coldkey address.');localStorage.setItem(KEY,a);refresh()});$('#refresh').onclick=refresh;const saved=localStorage.getItem(KEY);if(saved){$('#address').value=saved;refresh()}
