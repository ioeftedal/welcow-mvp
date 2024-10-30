import { v4 as uuidv4 } from 'uuid';

export interface Group {
  id: number;
  group_name: string;
  group_size: number;
  group_sample: number;
  farmId: string;
}

export function defaultGroup(): Group {
  return {
    id: 0, // Default value for auto-incremented ID
    group_name: '',
    group_size: 0,
    group_sample: 0,
    farmId: ''
  };
}
