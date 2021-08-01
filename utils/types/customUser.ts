export interface customUserProfile {
  phone: string;
  name: string;
  contactName: string;
  contactPhone: string;
}

export interface customUser extends customUserProfile {
  email: string;
  sub: string;
}
