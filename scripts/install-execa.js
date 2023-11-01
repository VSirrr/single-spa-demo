import { $ } from 'execa';

const { stdout } = await $`npm install`;

console.log(stdout);
