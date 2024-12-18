import { v4 as uuidv4 } from 'uuid';

export interface ManagementQuestionnaire {
  id: string;
  temp_in?: number;
  temp_out?: number;
  pasture_access: boolean;
  pasture_days_year: number;
  pasture_hours_day: number;
  pasture_days_comment?: string;
  outdoor_access?: boolean;
  outdoor_days_year?: number;
  outdoor_hours_day?: number;
  loose_housed: boolean;
  nr_dystocia_12_mos: number;
  nr_downercows_12_mos: number;
  nr_mortality_12_mos: number;
  disb_deho_on_farm: number;
  disb_deho_method: number;
  hot_air?: number;
  disb_deho_anaesthesia: number;
  disb_deho_analgesia: number;
  td_on_farm: number;
  td_method: number;
  td_anaesthesia: number;
  td_analgesia: number;
  calf_mother_time?: number;
  singlebox_time?: number;
  milk_volume_daily?: number;
  colostrum_volume?: number;
  concentrate_age?: number;
  roughage_age?: number;
  water_age?: number;
  fav_cow?: boolean;
  special_measure?: boolean;
  special_measure_desc?: string;
  nr_milkrec_3mos?: number;
  avg_dairy_cow_12mos?: number;
  avg_calvings_year?: number;
  pct_scc400k_3mos?: number;
  herdId: string;
}

export function defaultManagementQuestionnaire(): ManagementQuestionnaire {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    temp_in: undefined,
    temp_out: undefined,
    pasture_access: false,
    pasture_days_year: 0,
    pasture_hours_day: 0,
    pasture_days_comment: undefined,
    outdoor_access: undefined,
    outdoor_days_year: undefined,
    outdoor_hours_day: undefined,
    loose_housed: false,
    nr_dystocia_12_mos: 0,
    nr_downercows_12_mos: 0,
    nr_mortality_12_mos: 0,
    disb_deho_on_farm: 0,
    disb_deho_method: 0,
    hot_air: undefined,
    disb_deho_anaesthesia: 0,
    disb_deho_analgesia: 0,
    td_on_farm: 0,
    td_method: 0,
    td_anaesthesia: 0,
    td_analgesia: 0,
    calf_mother_time: undefined,
    singlebox_time: undefined,
    milk_volume_daily: undefined,
    colostrum_volume: undefined,
    concentrate_age: undefined,
    roughage_age: undefined,
    water_age: undefined,
    fav_cow: undefined,
    special_measure: undefined,
    special_measure_desc: undefined,
    nr_milkrec_3mos: undefined,
    avg_dairy_cow_12mos: undefined,
    avg_calvings_year: undefined,
    pct_scc400k_3mos: undefined,
    herdId: ''
  };
}
