declare module '@apiverve/ipblacklistlookup' {
  export interface ipblacklistlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface ipblacklistlookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class ipblacklistlookupWrapper {
    constructor(options: ipblacklistlookupOptions);

    execute(callback: (error: any, data: ipblacklistlookupResponse | null) => void): Promise<ipblacklistlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: ipblacklistlookupResponse | null) => void): Promise<ipblacklistlookupResponse>;
    execute(query?: Record<string, any>): Promise<ipblacklistlookupResponse>;
  }
}
