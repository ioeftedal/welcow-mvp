import { v4 as uuidv4 } from 'uuid';

export interface Resources {
  id: string;
  group_name: string;
  nr_wps: number;
  farmId: string;
}

// Default values for fields
export function defaultResources(): Resources {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    group_name: '',
    nr_wps: 0,
    farmId: ''
  };
}
