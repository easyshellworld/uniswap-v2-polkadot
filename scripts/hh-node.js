// scripts/hh-node.js
// 使用 node -r 来确保在子进程里先注入 polyfill
const { spawn } = require('child_process');
const path = require('path');

// 确保路径正确（相对仓库根目录）
const hardhatBin = path.resolve('node_modules', '.bin', 'hardhat');

// 使用 node -r to preload hh-polyfill.js
const args = ['-r', path.resolve('scripts', 'hh-polyfill.js'), hardhatBin, 'node'];

// 保持父进程输出可见
const proc = spawn('node', args, { stdio: 'inherit', shell: false });

proc.on('exit', code => process.exit(code));
proc.on('error', err => {
  console.error('Failed to start hardhat node:', err);
  process.exit(1);
});
