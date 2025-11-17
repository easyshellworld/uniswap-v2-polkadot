// scripts/hh-node.js
// 在任何 polkadot 相关包被加载前先注入 WebSocket
global.WebSocket = require('ws');

const { spawn } = require('child_process');

const args = ['hardhat', 'node'];
const proc = spawn('npx', args, { stdio: 'inherit' });

proc.on('exit', code => process.exit(code));
proc.on('error', err => {
  console.error('failed to start hardhat:', err);
  process.exit(1);
});
