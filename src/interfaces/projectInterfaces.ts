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