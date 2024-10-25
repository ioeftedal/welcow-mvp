export interface ContactPerson {
  id: number;
  name: string;
  phone_a: string;
  phone_b?: string;
  email?: string;
  farmId: string;
}

export function defaultContactPerson(): ContactPerson {
  return {
    id: 0, // Default value for auto-incremented ID
    name: '',
    phone_a: '',
    phone_b: undefined,
    email: undefined,
    farmId: ''
  };
}
