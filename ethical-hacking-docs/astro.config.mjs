// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@hexthersync32',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Computer Architecture',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Server', slug: 'computer-architecture/example' },
						{ label: 'Ports', slug: 'computer-architecture/example02' },
					],
				},
				{
					label: 'Cyber Security Principles',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Cyber Security Principles', slug: 'security-basics/01' },
						{ label: 'Enumeration', slug: 'security-basics/02' },
						{ label: 'Ethical Hacking', slug: 'security-basics/03' },
						{ label: 'Footprinting', slug: 'security-basics/04' },
					],
				},
				{
					label: 'Protocols',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Protocols', slug: 'protocols/01' },
					],
				},
				{
					label: 'Networking',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'OSI Model', slug: 'networking/01' },
						{ label: 'CIDR', slug: 'networking/02' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
