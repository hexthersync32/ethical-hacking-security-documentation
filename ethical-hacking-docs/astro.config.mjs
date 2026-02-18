// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '@hexthersync32',
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: true,
			},
			customCss: [
				// Relative path to your custom CSS file
				'./src/styles/index.css',
			],
			social: [
				{ 
					icon: 'seti:python', 
					label: 'HackerRank', 
					href: 'https://github.com/lucaxgomex' 
				},
				{ 
					icon: 'document', 
					label: 'Medium', 
					href: 'https://github.com/lucaxgomex' 
				},
				{ 
					icon: 'linkedin', 
					label: 'LinkedIn', 
					href: 'https://github.com/lucaxgomex' 
				},
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
						{ 
							label: 'The Von Neuman Architecture', 
							slug: 'computer-architecture/01' 
						},
						{ 
							label: 'Components',
							items: [
								{ label: 'Central Processing Unity', slug: 'computer-architecture/01' },		
								{ label: 'Motherboard', slug: 'computer-architecture/01' },		
								{ label: 'Chipset', slug: 'computer-architecture/01' },		
								{ label: 'RAM Memory', slug: 'computer-architecture/01' },		
								{ label: 'Hard Disk Drive', slug: 'computer-architecture/01' },
								{ label: 'Solid State Drive', slug: 'computer-architecture/01' },		
								{ label: 'Font', slug: 'computer-architecture/01' },	
							]
						},
						{ label: 'Machine Language', slug: 'computer-architecture/02' },
						{ label: 'Ports', slug: 'computer-architecture/02' },
						{ label: 'Server', slug: 'computer-architecture/03' },
					],
				},
				{
					label: 'Ethical Hacking',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What it is?', slug: 'ethical-hacking/01' },
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
							label: 'The Von Neuman Architecture', 
							slug: 'computer-architecture/01' 
						},
						{ 
							label: 'Components',
							items: [
								{ label: 'Central Processing Unity', slug: 'computer-architecture/01' },		
								{ label: 'Motherboard', slug: 'computer-architecture/01' },		
								{ label: 'Chipset', slug: 'computer-architecture/01' },		
								{ label: 'RAM Memory', slug: 'computer-architecture/01' },		
								{ label: 'Hard Disk Drive', slug: 'computer-architecture/01' },
								{ label: 'Solid State Drive', slug: 'computer-architecture/01' },		
								{ label: 'Font', slug: 'computer-architecture/01' },	
							]
						},
						{ label: 'Machine Language', slug: 'computer-architecture/02' },
						{ label: 'Ports', slug: 'computer-architecture/02' },
						{ label: 'Server', slug: 'computer-architecture/03' },
					],
				},
				{
					label: 'Utilities',
					items: [
						{ label: 'dig', slug: 'utilities/01' },
						{ label: 'nurl', slug: 'utilities/02' },
						{ label: 'nmap', slug: 'utilities/03' },
						{ label: 'nslookup', slug: 'utilities/04' },
						{ label: 'ping', slug: 'utilities/05' },
						{ label: 'whois', slug: 'utilities/06' },
						{ label: 'whatweb', slug: 'utilities/07' },
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
								{ label: 'Ransomware', slug: 'malware/categories/02' },        
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
	],
});
