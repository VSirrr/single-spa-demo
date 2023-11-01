import { execaNode } from 'execa';

const base = process.cwd();
const apps = ['app1/', 'app2/', 'root/'];

apps.forEach(async (app) => {
	await execaNode(base + '/scripts/serve.js', {
		cwd: `${base}/${app}`,
	});
});

console.log('the project is started successfully');
console.log('root is running at http://localhost:4000');
console.log('app1 is running at http://localhost:2000');
console.log('app2 is running at http://localhost:2001');
