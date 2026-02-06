// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@hexthersync32',
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/index.css',
			],
			social: [
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/lucaxgomex' 
				}
			],
			sidebar: [
				{
					label: 'Computer Architecture',
					items: [
						{ label: 'Components', slug: 'computer-architecture/01' },
						{ label: 'Machine Language', slug: 'computer-architecture/02' },
						{ label: 'Ports', slug: 'computer-architecture/02' },
						{ label: 'Server', slug: 'computer-architecture/03' },
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
						{ label: 'Domain Name', slug: 'networking/03' },
						{ label: 'Devices', slug: 'networking/04' },
						{ label: 'Sockets', slug: 'networking/05' },
					],
				},
				{
					label: 'TCP/IP',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'TCP/IP', slug: 'tcp-ip/01' },
						{ label: 'TCP/UDP', slug: 'tcp-ip/02' },
						{ label: 'Three-Way Handshake', slug: 'tcp-ip/03' },
					],
				},
				{
					label: 'Devices',
					items: [
						{ label: 'Hub', slug: 'devices/01' },
						{ label: 'Switch', slug: 'devices/02' },
						{ label: 'Router', slug: 'devices/03' },
						{ label: 'Modem', slug: 'devices/04' },
						{ label: 'Bridge', slug: 'devices/05' },
						{ label: 'Firewall', slug: 'devices/06' },
						{ label: 'Access Point', slug: 'devices/07' },
						{ label: 'ONU', slug: 'devices/08' },
						{ label: 'ONT', slug: 'devices/09' },
						{ label: 'Repeater', slug: 'devices/10' },
						{ label: 'Gateway', slug: 'devices/11' },
					],
				},
				{
					label: 'Physical Protocols',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Ethernet', slug: 'physical-protocols/01' },
					],
				},
				{
					label: 'Network Protocols',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'DNS', slug: 'network-protocols/01' },
						{ label: 'HTTP', slug: 'network-protocols/02' },
					],
				},
				{
					label: 'Operating Systems',
					items: [
						{ label: 'GNU/Linux', slug: 'operating-systems/01' },
					],
				},
				{
					label: 'Utilities',
					items: [
						{ label: 'Dig', slug: 'utilities/01' },
						{ label: 'Curl', slug: 'utilities/02' },
						{ label: 'Nmap', slug: 'utilities/03' },
						{ label: 'Nslookup', slug: 'utilities/04' },
						{ label: 'Ping', slug: 'utilities/05' },
						{ label: 'Whois', slug: 'utilities/06' },
					],
				},
				{
					label: 'Technical Support Tools',
					items: [
						{ label: 'WinDirStat', slug: 'technical-support/01' },
						{ label: 'Rundeck', slug: 'technical-support/02' },
						{ label: 'Octadesk', slug: 'technical-support/03' },
						{ label: 'CPU-Z', slug: 'technical-support/04' },
						{ label: 'OCCT', slug: 'technical-support/05' },
						{ label: 'Cinebench', slug: 'technical-support/06' },
						{ label: 'Hiren\'s BootCD', slug: 'technical-support/07' },
						{ label: 'Lazersoft', slug: 'technical-support/07' },
						{ label: 'Have I Been Pwned?', slug: 'technical-support/07' },
					],
				},
				{
					label: 'Attacks',
					items: [
						{ label: 'Dos/DDoS', slug: 'attacks/01' },
						{ label: 'Spoofing', slug: 'attacks/02' },
					],
				},
				{
					label: 'Malicious Software',
					items: [
						{ label: 'Total Virus', slug: 'malware/01' },
					],
				},
				{
					label: 'Infection Prevention',
					items: [
						{ label: 'Total Virus', slug: 'infection-prevention/01' },
					],
				},
			],
		}),
	],
});
