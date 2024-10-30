import { v4 as uuidv4 } from 'uuid';

export interface ClinicalScoring {
  id: string;
  group_name: string;
  ear_tag: string;
  side: string;
  breed: number;
  bcs_wq: number;
  bcs_std?: number;
  clean_scr_lower_hindleg: number;
  clean_scr_upper_hindleg: number;
  clean_scr_udderwq: number;
  clean_scr_udder?: number;
  clean_scr_teats?: number;
  integ_tarsus: number;
  nr_hairless_tarsus?: number;
  nr_lesion_tarsus?: number;
  nr_swelling_tarsus?: number;
  integ_hindquarter: number;
  nr_hairless_hq?: number;
  nr_lesion_hq?: number;
  nr_swelling_hq?: number;
  integ_neck_shoulder_back: number;
  nr_hairless_nsb?: number;
  nr_lesion_nsb?: number;
  nr_swelling_nsb?: number;
  integ_carpus: number;
  nr_hairless_carpus?: number;
  nr_lesion_carpus?: number;
  nr_swelling_carpus?: number;
  integ_flank_side_udder: number;
  nr_hairless_fsu?: number;
  nr_lesion_fsu?: number;
  nr_swelling_fsu?: number;
  integ_other: number;
  integ_other_specify?: string;
  tail_broken?: number;
  hampered_respiration: number;
  diarrhoea: number;
  vulval_discharge: number;
  lameness: number;
  comment?: string;
  farmId: string;
}

export function defaultClinicalScoring(): ClinicalScoring {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    group_name: '',
    ear_tag: '',
    side: '',
    breed: 0,
    bcs_wq: 0,
    bcs_std: undefined,
    clean_scr_lower_hindleg: 0,
    clean_scr_upper_hindleg: 0,
    clean_scr_udderwq: 0,
    clean_scr_udder: undefined,
    clean_scr_teats: undefined,
    integ_tarsus: 0,
    nr_hairless_tarsus: undefined,
    nr_lesion_tarsus: undefined,
    nr_swelling_tarsus: undefined,
    integ_hindquarter: 0,
    nr_hairless_hq: undefined,
    nr_lesion_hq: undefined,
    nr_swelling_hq: undefined,
    integ_neck_shoulder_back: 0,
    nr_hairless_nsb: undefined,
    nr_lesion_nsb: undefined,
    nr_swelling_nsb: undefined,
    integ_carpus: 0,
    nr_hairless_carpus: undefined,
    nr_lesion_carpus: undefined,
    nr_swelling_carpus: undefined,
    integ_flank_side_udder: 0,
    nr_hairless_fsu: undefined,
    nr_lesion_fsu: undefined,
    nr_swelling_fsu: undefined,
    integ_other: 0,
    integ_other_specify: undefined,
    tail_broken: undefined,
    hampered_respiration: 0,
    diarrhoea: 0,
    vulval_discharge: 0,
    lameness: 0,
    comment: undefined,
    farmId: ''
  };
}
