
export interface WaterPoint {
  id: number;
  group_name: string;
  nr_animals_using_wps?: number;
  type: number;
  troughlength?: number;
  cleanliness: number;
  functioning: string;
  waterflow: string;
  farmId: string;
}

export function defaultWaterPoint(): WaterPoint {
  return {
    id: 0, // Default value for auto-incremented ID
    group_name: '',
    nr_animals_using_wps: undefined,
    type: 0,
    troughlength: undefined,
    cleanliness: 0,
    functioning: '',
    waterflow: '',
    farmId: ''
  };
}
