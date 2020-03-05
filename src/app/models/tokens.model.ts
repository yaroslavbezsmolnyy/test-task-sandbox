export interface ApiTokens {
  access_token: string;
  expires_in: number;
  owner_id: number;
  refresh_token: string;
  token_type: 'Bearer';
}

export class Tokens {
  access: string;
  ownerId: number;
  refresh: string;
  type: 'Bearer';

  constructor({ access_token, owner_id, refresh_token, token_type }: ApiTokens) {
    this.access = access_token;
    this.ownerId = owner_id;
    this.refresh = refresh_token;
    this.type = token_type;
  }
}
