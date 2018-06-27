export interface ICompany {
    name: string;
    founder: string;
    founded: number;
    employees: number;
    vehicles: number;
    launch_sites: number;
    test_sites: number;
    ceo: string;
    cto: string;
    coo: string;
    cto_propulsion: string;
    valuation: number;
    headquarters: IHeadquarters;
    summary: string;
}
  
export interface IHeadquarters {
    address: string;
    city: string;
    state: string;
}

export interface ICompanyHistory {
    title: string;
    event_date_utc: string;
    event_date_unix: number;
    flight_number?: number;
    details: string;
    links: ILinksCompanyHistory;
}
  
export interface ILinksCompanyHistory {
    reddit?: string;
    article: string;
    wikipedia?: string;
}