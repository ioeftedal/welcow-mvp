import { v4 as uuidv4 } from 'uuid';

export interface PreVisit {
  id: string;
  herd_size?: number;
  sample_size?: number;
  nr_groups?: number;
  pregheifers_mixed?: boolean;
  drycows_mixed?: boolean;
  bull?: boolean;
  bull_sep?: number;
  feeding?: string;
  milking_system?: number;
  morning_routines?: string;
  headlock?: boolean;
  nr_headlocks?: number;
  on_pasture?: boolean;
  date_last_claw_trim?: string;
  interference?: string;
  stockperson_available?: boolean;
  farmId: string;
}

export function defaultPreVisit(): PreVisit {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    herd_size: undefined,
    sample_size: undefined,
    nr_groups: undefined,
    pregheifers_mixed: undefined,
    drycows_mixed: undefined,
    bull: undefined,
    bull_sep: undefined,
    feeding: '',
    milking_system: undefined,
    morning_routines: '',
    headlock: undefined,
    nr_headlocks: undefined,
    on_pasture: undefined,
    date_last_claw_trim: '',
    interference: '',
    stockperson_available: undefined,
    farmId: ''
  };
}
