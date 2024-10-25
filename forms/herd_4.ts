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
    id: 'uuid()', // You’ll need to replace this with an actual UUID generation method
    farmId: '',
    lyingTimeAndCollisions: [],
    managementQuestionnaire: undefined,
    qualitativeBehaviourAnalysis: undefined
  };
}
