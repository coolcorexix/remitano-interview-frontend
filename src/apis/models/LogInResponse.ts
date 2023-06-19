import type {User} from './User'

export interface LogInResponse {
  token: string;
  user: User;
}