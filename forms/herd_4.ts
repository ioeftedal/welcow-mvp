import { v4 as uuidv4 } from 'uuid';

import { LyingTimeAndCollision, ManagementQuestionnaire, QualitativeBehaviourAnalysis } from "@prisma/client";

export interface Herd {
  id: string;
  farmId: string;
  lyingTimeAndCollisions: LyingTimeAndCollision[];
  managementQuestionnaire?: ManagementQuestionnaire;
  qualitativeBehaviourAnalysis?: QualitativeBehaviourAnalysis;
}

// Default values for fields
export function defaultHerd(): Herd {
  return {
    id: uuidv4(), // You’ll need to replace this with an actual UUID generation method
    farmId: '',
    lyingTimeAndCollisions: [],
    managementQuestionnaire: undefined,
    qualitativeBehaviourAnalysis: undefined
  };
}
