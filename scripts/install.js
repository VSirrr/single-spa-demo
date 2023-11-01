import { execaNode } from 'execa';

const base = process.cwd();
const apps = ['app1/', 'app2/', 'root/'];

apps.forEach(async (app) => {
	await execaNode(base + '/scripts/install-execa.js', {
		cwd: `${base}/${app}`,
	});
});
