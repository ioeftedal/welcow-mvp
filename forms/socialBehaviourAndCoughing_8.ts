export interface SocialBehaviourAndCoughing {
  id: string;
  segment: string;
  group_name: string;
  start: string;
  finish: string;
  duration: number;
  standing_start: number;
  standing_finish: number;
  eat_drink_start: number;
  eat_drink_finish: number;
  lying_start: number;
  lying_finish: number;
  sum_start: number;
  sum_finish: number;
  lying_out_start: number;
  lying_out_finish: number;
  headbutt: number;
  displacement: number;
  fighting: number;
  chasing: number;
  chasing_up: number;
  coughing: number;
  farmId: string;
}

export function defaultSocialBehaviourAndCoughing(): SocialBehaviourAndCoughing {
  return {
    id: 'uuid()', // You'll need to replace this with an actual UUID generation method
    segment: '',
    group_name: '',
    start: '',
    finish: '',
    duration: 0.0,
    standing_start: 0,
    standing_finish: 0,
    eat_drink_start: 0,
    eat_drink_finish: 0,
    lying_start: 0,
    lying_finish: 0,
    sum_start: 0,
    sum_finish: 0,
    lying_out_start: 0,
    lying_out_finish: 0,
    headbutt: 0,
    displacement: 0,
    fighting: 0,
    chasing: 0,
    chasing_up: 0,
    coughing: 0,
    farmId: ''
  };
}
