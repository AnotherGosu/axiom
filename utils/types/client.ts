export interface Client {
  sub: string;
  email: string;
  name: string;
  phone: string;
  contactName: string;
  contactPhone: string;
  createdAt: string;
}

export type ClientProfile = Pick<Client, "contactName" | "contactPhone">;
