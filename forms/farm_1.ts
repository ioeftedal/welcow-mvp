import { AvoidanceDistanceTest, ClinicalScoring, ContactPerson, Group, Herd, PreVisit, Resources, Score, SocialBehaviourAndCoughing, WaterPoint } from "@prisma/client";
import { v4 as uuidv4 } from 'uuid';

export interface Farm {
  id: string;
  user_id: string;
  country?: string;
  address?: string;
  zip?: string;
  town?: string;
  visit_date_arranged: string;
  visit_date_actual?: string;
  id_number: string;
  visit_completed?: boolean;
  preVisit?: PreVisit;
  score?: Score;
  contactPersons: ContactPerson[];
  herd?: Herd;
  groups: Group[];
  socialBehaviourAndCoughing: SocialBehaviourAndCoughing[];
  resources: Resources[];
  waterPoints: WaterPoint[];
  avoidanceDistanceTests: AvoidanceDistanceTest[];
  clinicalScoring: ClinicalScoring[];
}

export function defaultFarm(): Farm {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    user_id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    visit_date_arranged: new Date().toISOString(),
    id_number: '',
    visit_completed: false,
    contactPersons: [],
    groups: [],
    socialBehaviourAndCoughing: [],
    resources: [],
    waterPoints: [],
    avoidanceDistanceTests: [],
    clinicalScoring: []
  };
}


