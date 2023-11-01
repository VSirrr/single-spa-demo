import { $ } from 'execa';

const { stdout } = await $`npm run serve`;

console.log(stdout);
