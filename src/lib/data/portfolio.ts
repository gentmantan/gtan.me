/**
 * Central content source for the portfolio.
 * Keeping the copy here keeps the components focused on presentation.
 */

export interface Skill {
	name: string;
	level: number; // 0 - 100
	icon: string;
}

export interface SkillGroup {
	title: string;
	blurb: string;
	skills: Skill[];
}

export interface ExperienceClient {
	name: string;
	highlights: string[];
}

export interface ExperienceItem {
	role: string;
	company: string;
	period: string;
	location: string;
	highlights: string[];
	/** Example clients served, e.g. for self-employment or consulting work. */
	clients?: ExperienceClient[];
	stack: string[];
}

export interface Project {
	name: string;
	tagline: string;
	description: string;
	tags: string[];
	metric: { value: string; label: string };
	link: string;
}

export interface Certification {
	name: string;
	issuer: string;
	year: string;
	/** Public verification link (e.g. a Credly badge). */
	link?: string;
}

export interface Social {
	label: string;
	href: string;
	handle: string;
}

export const profile = {
	name: 'Gentman Tan',
	role: 'IT Specialist & Network Engineer',
	tagline:
		'I solve problems and help people through building safe, fast, and efficient infrastructure.',
	location: 'United States of America',
	email: 'hello@gtan.me',
	phone: '+1 (786) 241-1905',
	website: 'gtan.me',
	availability: 'Open to full-time positions and consulting',
	resumeUrl: '/gentman-tan-resume.pdf',
	yearsExperience: '6+ years',
	stats: [
		{ value: '6+ yrs', label: 'Planning, installing & configuring systems' },
		{ value: '114', label: 'ALPR cameras across 3 campuses' },
		{ value: '50K', label: 'Users on a REST API I built' },
		{ value: '20+', label: 'Digital signage & CCTV deployments' }
	]
};

export const socials: Social[] = [
	{ label: 'GitHub', href: 'https://github.com/gentmantan', handle: '@gentmantan' },
	{ label: 'LinkedIn', href: 'https://linkedin.com/in/gentmantan', handle: '/in/gentmantan' },
	{ label: 'Email', href: 'mailto:hello@gtan.me', handle: 'hello@gtan.me' }
];

export const skillGroups: SkillGroup[] = [
	{
		title: 'Network Administration',
		blurb: 'Routing, switching and secure connectivity from campus core to warehouse floor.',
		skills: [
			{ name: 'Cisco routing & switching', level: 80, icon: 'route' },
			{ name: 'VLANs, ACLs & 802.1x', level: 88, icon: 'switch' },
			{ name: 'DNS, VPN & IP services', level: 86, icon: 'globe' },
			{ name: 'UniFi SDN & PFSense', level: 84, icon: 'wan' }
		]
	},
	{
		title: 'Systems & Infrastructure',
		blurb: 'Endpoint management and self-hosted platforms that stay reproducible.',
		skills: [
			{ name: 'Windows, Azure AD & Intune', level: 88, icon: 'gear' },
			{ name: 'Linux, NixOS & systemd', level: 90, icon: 'terminal' },
			{ name: 'Proxmox & virtualization', level: 82, icon: 'server' },
			{ name: 'PowerShell & Bash scripting', level: 84, icon: 'code' }
		]
	},
	{
		title: 'Cloud & Development',
		blurb: 'Shipping full-stack services with infrastructure as code and observability.',
		skills: [
			{ name: 'Azure, AWS & Kubernetes', level: 84, icon: 'cloud' },
			{ name: 'Terraform & GitHub Actions', level: 86, icon: 'stack' },
			{ name: 'SvelteKit, JS & REST APIs', level: 88, icon: 'spark' },
			{ name: 'PostgreSQL & PostGIS', level: 82, icon: 'chart' }
		]
	}
];

export const experience: ExperienceItem[] = [
	{
		role: 'IT Generalist II',
		company: 'Florida International University',
		period: 'May 2024 — Present',
		location: 'University Park, FL',
		highlights: [
			'Implemented Genetec Security Center (Omnicast, Synergis & AutoVu) for traffic-flow monitoring, parking enforcement and perimeter security.',
			'Managed 100+ workstations with SCCM for imaging, patching and software deployment, and with Active Directory for unified authentication and access control.',
			'Installed and maintained 114 SharpV ALPR IP cameras across three campuses, using Cisco VRF routing to keep sensitive PII on a segmented network perimeter.',
			'Orchestrated 20+ Daktronics outdoor digital signs showing real-time alerts, wayfinding and parking occupancy to guide 2,000+ students a day.',
			'Built a full-stack parking web app with a REST API scaling to 50,000 users; managed endpoints with SCCM, Intune and Addigy.'
		],
		stack: ['Genetec', 'Cisco VRF', 'SCCM', 'Intune', 'Daktronics']
	},
	{
		role: 'IT Consultant',
		company: 'Logic Pro, Corp.',
		period: '2018 — 2024',
		location: 'South Florida',
		highlights: ['Provided IT consulting and services for businesses across South Florida.'],
		clients: [
			{
				name: 'Jademar Lighting Corporation',
				highlights: [
					'Configured and deployed a network of 20 IP cameras with web and mobile viewing for secure remote monitoring.',
					'Established a secure UniFi wireless access-point SDN system for 100% warehouse coverage of workstations and wireless CCTV.'
				]
			},
			{
				name: 'Interport Logistics',
				highlights: [
					'Deployed a warehouse monitoring system for continuous facility visibility.',
					'Expanded networking to workstations with centralized AAA and VLAN segmentation.',
					'Hardened physical security with biometric door locks.'
				]
			}
		],
		stack: ['UniFi', 'Hikvision', 'systemd', 'Networking']
	}
];

export const projects: Project[] = [
	{
		name: 'Panther Park',
		tagline: 'Campus parking platform, built to scale.',
		description:
			'Full-stack SvelteKit + PostGIS application serving campus events, permits and location-based parking wayfinding, deployed to Azure Kubernetes Service.',
		tags: ['SvelteKit', 'PostGIS', 'ElysiaJS', 'AKS'],
		metric: { value: '50K', label: 'Users served' },
		link: 'https://api.parking.fiu.edu'
	},
	{
		name: 'FIU Parking DMS',
		tagline: 'Digital signage that people can actually read.',
		description:
			'Replaced an aging Genetec signage plugin with headless-browser web templates showing live occupancy across 20+ outdoor signs on campus.',
		tags: ['JavaScript', 'CSS', 'Digital Signage'],
		metric: { value: '20+', label: 'Signs deployed' },
		link: 'https://github.com/gentmantan/fiu-dms-templates'
	},
	{
		name: 'NixOS Dotfiles',
		tagline: 'Operating system as code.',
		description:
			'Declarative, reproducible system configuration — my daily driver, servers and services defined in Nix flakes and version-controlled.',
		tags: ['Nix Flakes', 'Podman', 'systemd'],
		metric: { value: '1', label: 'Config to rule them all' },
		link: 'https://github.com/gentmantan/dotfiles'
	}
];

export const certifications: Certification[] = [
	{
		name: 'CompTIA A+',
		issuer: 'CompTIA',
		year: '2025',
		link: 'https://www.credly.com/earner/earned/badge/5065cc75-ee46-4293-8114-71d01edde026'
	},
	{
		name: 'CompTIA Network+',
		issuer: 'CompTIA',
		year: '2025',
		link: 'https://www.credly.com/earner/earned/badge/21b127bf-cb2a-4bdc-879b-4cf3e16567d2'
	},
	{
		name: 'CompTIA Security+',
		issuer: 'CompTIA',
		year: '2025',
		link: 'https://www.credly.com/earner/earned/badge/fc997cb4-06b6-44c8-8ca1-f15973e5bb55'
	},
	{ name: 'CCNA', issuer: 'Cisco', year: 'In progress' }
];

export const navLinks = [
	{ href: '#about', label: 'About' },
	{ href: '#skills', label: 'Skills' },
	{ href: '#experience', label: 'Experience' },
	{ href: '#projects', label: 'Projects' },
	{ href: '#certifications', label: 'Certs' },
	{ href: '#contact', label: 'Contact' }
];
