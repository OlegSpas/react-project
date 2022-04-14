interface INavbarButton {
	buttonText: string;
	path:string;
}


type Order = 'asc' | 'desc';

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IInvestmentsData) => void;
	order: Order;
	orderBy: string;
}

interface IInvestmentsData {
    industry: string;
    status: string;
    name: string;
    description:string;
    location:string;
    logo:string;
    websSite:string;
}

interface HeadCell {
	disablePadding: boolean;
	id: keyof IInvestmentsData;
	label: string;
	numeric: boolean;
  }

interface IMember  {
	id:number;
	industry?:string;
	name: string;
	job:string;
	description:string;
	biography:string;
	avatar?:any;
	backgroundAvatar:any;
	smallAvatar?:any;
	memberInvestments:{
		investmentsId:number;
	}[];
}  

interface  ITeam {
	typeMembers:string,
	isTeamHeads:boolean,
	membersList:IMember []
}

interface ICaseStudy{
	id:0;
    caseName: string;
    descriptopn:string;
    logo : any;
    path: string;
    industry: string;
    location:string;
    status:string;
    webSite: string;
    feedback: string;
    feedbackBG:any;
    feedbackIMG:any;
    feedbackPerson:string;
    highLights:{
		title:string;
		description:string;
	}[];
	caseInvestments:{
		investmentsId:number;
	}[];
    caseMembers:{
		memberId:number;
	}[];
}

interface IExpertise{
	title:string;
    details:{
        caseTitle:string;
        description:string;
        navName:string;
        primaryLink:{
            primaryLinkName:string;
            primaryLinkPath:string;
        }[];
        links:{
            linkName:string;
            linkPath:string;
        }[]
    }[]
}

interface INvestments{
	industry: string;
    status: string;
    name: string;
    description:string;
    location:string;
    logo:string;
    websSite:string;
}