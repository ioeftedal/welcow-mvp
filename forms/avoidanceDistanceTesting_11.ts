import { v4 as uuidv4 } from 'uuid';

export interface AvoidanceDistanceTest {
  id: string;
  group_name: string;
  ear_tag: string;
  side: string;
  a_d_t1: number;
  a_d_t2?: number;
  nasal_discharge: string;
  ocular_discharge: string;
  comment?: string;
  farmId: string;
}

export function defaultAvoidanceDistanceTest(): AvoidanceDistanceTest {
  return {
    id: uuidv4(), // You'll need to replace this with an actual UUID generation method
    group_name: '',
    ear_tag: '',
    side: '',
    a_d_t1: 0,
    a_d_t2: undefined,
    nasal_discharge: '',
    ocular_discharge: '',
    comment: undefined,
    farmId: ''
  };
}
