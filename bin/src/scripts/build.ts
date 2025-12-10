import { execSync } from 'child_process';
execSync('rollup -c rollup.config.ts', { stdio: 'inherit' });
console.log('Build finished!');
