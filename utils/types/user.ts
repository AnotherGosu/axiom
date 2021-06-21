export interface CreateUserFormFields {
  name: string;
  email: string;
  phone: string;
}

export interface CreateUserRequest {
  name: string;
  email: string;
  phone: string;
  issuer: string;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
}

export interface UserContacts {
  name: string;
  phone: string;
}
