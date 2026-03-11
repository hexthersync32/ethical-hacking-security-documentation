// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import VitePWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@hexthersync32',
			logo: {
				light: './src/assets/light-logo.png',
				dark: './src/assets/dark-logo.png',
				replacesTitle: true,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/index.css',
			],
			social: [
				{ 
					icon: 'seti:go', 
					label: 'HackerRank', 
					href: 'https://www.hackerrank.com/profile/hexthersync32' 
				},
				{ 
					icon: 'document', 
					label: 'Medium', 
					href: 'https://medium.com/@hexthersync32' 
				},
				{ 
					icon: 'linkedin', 
					label: 'LinkedIn', 
					href: 'https://www.linkedin.com/in/lucas-gomes-7a6a091b4' 
				},
				{ 
					icon: 'github', 
					label: 'GitHub', 
					href: 'https://github.com/hexthersync32' 
				}
			],
			sidebar: [
				{
					label: 'Computer Architecture',
					items: [
						{ 
							label: 'The Von Neuman Architecture', 
							slug: 'computer-architecture/01' 
						},
						{ 
							label: 'Components',
							items: [
								{ label: 'Central Processing Unity', slug: 'computer-architecture/components/01' },		
								{ 
									label: 'Motherboard',
									items: [
										{ label: 'Chipset', slug: 'computer-architecture/01' },
										{ label: 'Lithium Battery', slug: 'computer-architecture/01' },
									]
								 },
								{ label: 'RAM Memory', slug: 'computer-architecture/components/04' },		
								{ label: 'Hard Disk Drive', slug: 'computer-architecture/components/05' },
								{ label: 'Solid State Drive', slug: 'computer-architecture/components/06' },		
								{ label: 'Font', slug: 'computer-architecture/components/07' },	
							]
						},
						{ label: 'Machine Language', slug: 'computer-architecture/02' },
						{ label: 'Ports', slug: 'computer-architecture/03' },
						{ label: 'Server', slug: 'computer-architecture/04' },
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
						{ 
							label: 'DNS', 
							items: [
								{ 
									label: 'Introduction', 
									slug: 'network-protocols/dns/01' 
								},
								{ 
									label: 'DNS Zone', 
									slug: 'network-protocols/dns/02' 
								},
								{ 
									label: 'Main Attacks', 
									slug: 'network-protocols/dns/03' 
								},
								{ 
									label: 'FAQ', 
									slug: 'network-protocols/dns/04' 
								},
								{ 
									label: 'Discovering', 
									slug: 'network-protocols/dns/05' 
								},
							]
						},
						{ 
							label: 'HTTP', 
							slug: 'network-protocols/02' 
						},
					],
				},
				{
					label: 'Operating Systems',
					items: [
						{ label: 'GNU/Linux', slug: 'operating-systems/01' },
					],
				},
				{
					label: 'GNU/Linux',
					items: [
						{ 
							label: 'Main Concepts', 
							slug: 'gnu-linux/01' 
						},
					],
				},
				{
					label: 'Utilities',
					items: [
						{ label: 'curl', slug: 'utilities/01' },
						{ label: 'dig', slug: 'utilities/02' },
						{ label: 'host', slug: 'utilities/08' },
						{ label: 'nmap', slug: 'utilities/03' },
						{ label: 'nslookup', slug: 'utilities/04' },
						{ label: 'ping', slug: 'utilities/05' },
						{ label: 'whois', slug: 'utilities/06' },
						{ label: 'whatweb', slug: 'utilities/07' },
					],
				},
				{
					label: 'Online Reconnaissance',
					items: [
						{ label: 'Google Admin Toolbox', slug: 'online-reconnaissance/01' },
						{ label: 'DNSlytics', slug: 'online-reconnaissance/02' },
					],
				},
				{
					label: 'Tracking',
					items: [
						{ label: 'Grabify', slug: 'tracking/01' },
					],
				},
				{
					label: 'Technical Support Tools',
					items: [
						{ 
							label: 'Third-Party Software',
							items: [
								{ label: 'WinDirStat', slug: 'technical-support/01' },
								{ label: 'Octadesk', slug: 'technical-support/03' },
								{ label: 'CPU-Z', slug: 'technical-support/04' },
								{ label: 'OCCT', slug: 'technical-support/05' },
								{ label: 'Cinebench', slug: 'technical-support/06' },   
								{ label: 'Lazersoft', slug: 'technical-support/08' },
								{ label: 'Malwarebytes', slug: 'technical-support/10' },
							] 
						},
						{ 
							label: 'Windows OS Solutions',
							items: [
								{ label: 'Windows Security', slug: 'technical-support/11' },
								{ label: 'diskmgmt.msc', slug: 'technical-support/12' },             
								{ label: 'chkdsk', slug: 'technical-support/13' },
							] 
						},
						{ 
							label: 'Browser Solutions',
							items: [
								{ label: 'Rundeck', slug: 'technical-support/02' },
								{ label: 'Have I Been Pwned?', slug: 'technical-support/09' },
							] 
						},
						{ 
							label: 'Flash Boot',
							items: [
								{ label: 'Hiren\'s BootCD', slug: 'technical-support/07' },
							] 
						},
					],
				},
				{
					label: 'Social Engineering',
					items: [
						{ label: 'Overview', slug: 'social-engineering/01' },
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
						{ label: 'Malware', slug: 'malware/01' },
						{ 
							label: 'Categories',
							items: [
								{ label: 'Virus', slug: 'malware/02' },        
							] 
						},
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
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,png,svg,ico}']
			},
			manifest: {
				name: 'Ethical Hacking and Pentest Docs',
				short_name: '',
				description: 'Documentation for Security Professionals',
				theme_color: '#000000',
				background_color: '#ffffff',
				display: 'fullscreen',
				start_url: '/',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			},
		})
	],
});
