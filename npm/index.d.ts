declare module '@apiverve/ipblacklistlookup' {
  export interface ipblacklistlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface ipblacklistlookupResponse {
    status: string;
    error: string | null;
    data: IPBlacklistLookupData;
    code?: number;
  }


  interface IPBlacklistLookupData {
      ipAddress:       string;
      isIPBlacklisted: boolean;
      ipDetails:       IPDetails;
      parsed:          boolean;
  }
  
  interface IPDetails {
      range:    number[];
      country:  string;
      region:   string;
      timezone: string;
  }

  export default class ipblacklistlookupWrapper {
    constructor(options: ipblacklistlookupOptions);

    execute(callback: (error: any, data: ipblacklistlookupResponse | null) => void): Promise<ipblacklistlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: ipblacklistlookupResponse | null) => void): Promise<ipblacklistlookupResponse>;
    execute(query?: Record<string, any>): Promise<ipblacklistlookupResponse>;
  }
}
