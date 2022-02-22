import {FIRM,INVESTMENTS,CASESTUDIES,TEAM,NEWS,CONTACT, TERMS, SITEMAP  } from "./routes.ts"

export const Routes: INavbarButton[] = [
	{
		buttonText: 'Firm',
		path: FIRM
	},
	{
		buttonText: 'Investments',
		path: INVESTMENTS
	},
	{
		buttonText: 'Case Studies',
		path: CASESTUDIES
	},
	{
		buttonText: 'Our team',
		path: TEAM
	},
	{
		buttonText: 'News',
		path: NEWS
	},
	{
		buttonText: 'Contact Us',
		path: CONTACT
	},
	{
		buttonText: 'Terms of Use',
		path: TERMS
	},
	{
		buttonText: 'Sitemap',
		path: SITEMAP
	}
	
]