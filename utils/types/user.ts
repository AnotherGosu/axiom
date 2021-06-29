export interface User {
  issuer: string;
  email: string;
  phone: string;
  name: string;
}

export interface SignUpForm {
  email: string;
  phone: string;
  name: string;
}
