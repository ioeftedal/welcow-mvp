export interface QualitativeBehaviourAnalysis {
  id: string;
  active: number;
  relaxed: number;
  fearful: number;
  agitated: number;
  calm: number;
  content: number;
  indifferent: number;
  frustrated: number;
  friendly: number;
  bored: number;
  playful: number;
  positively_occupied: number;
  lively: number;
  inquisitive: number;
  irritable: number;
  calmless_uneasy: number;
  sociable: number;
  apathetic: number;
  happy: number;
  distressed: number;
  herdId: string;
}

export function defaultQualitativeBehaviourAnalysis(): QualitativeBehaviourAnalysis {
  return {
    id: 'uuid()', // You'll need to replace this with an actual UUID generation method
    active: 0,
    relaxed: 0,
    fearful: 0,
    agitated: 0,
    calm: 0,
    content: 0,
    indifferent: 0,
    frustrated: 0,
    friendly: 0,
    bored: 0,
    playful: 0,
    positively_occupied: 0,
    lively: 0,
    inquisitive: 0,
    irritable: 0,
    calmless_uneasy: 0,
    sociable: 0,
    apathetic: 0,
    happy: 0,
    distressed: 0,
    herdId: ''
  };
}
