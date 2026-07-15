declare module '@apiverve/sunrisesunset' {
  export interface sunrisesunsetOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface sunrisesunsetResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
    premium?: PremiumInfo;
  }

  export default class sunrisesunsetWrapper {
    constructor(options: sunrisesunsetOptions);

    execute(callback: (error: any, data: sunrisesunsetResponse | null) => void): Promise<sunrisesunsetResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: sunrisesunsetResponse | null) => void): Promise<sunrisesunsetResponse>;
    execute(query?: Record<string, any>): Promise<sunrisesunsetResponse>;
  }
}
