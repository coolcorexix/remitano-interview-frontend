export interface User {
  disabled: boolean;
  displayName: string;
  email: string;
  emailVerified: boolean;
  metadata: {
    lastSignInTime: string;
    creationTime: string;
    lastRefreshTime: string;
  },
  providerData: {
    displayName: string;
    email: string;
    providerId: string;
    uid: string;
  }[];
  tokensValidAfterTime: string;
  uid: string;
}