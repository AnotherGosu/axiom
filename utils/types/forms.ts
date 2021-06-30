import { StaticFields } from "./estate";

export interface SignUpForm {
  lastName: string;
  name: string;
  patronim: string;
  email: string;
  phone: string;
}

export interface AddEstateForm extends StaticFields {
  images?: File[];
  plan?: File;
}

export interface EditEstateForm extends StaticFields {
  id?: string;
  createdAt?: string;
  images?: File[] | Array<{ id: string; url: string }>;
  plan?: File | { id: string; url: string };
}
