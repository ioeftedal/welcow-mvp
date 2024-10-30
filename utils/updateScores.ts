
import {
  Prisma,
  Farm,
  PreVisit,
  ContactPerson,
  Group,
  ManagementQuestionnaire,
  SocialBehaviourAndCoughing,
  AvoidanceDistanceTest,
  LyingTimeAndCollision,
  Resources,
  WaterPoint,
  QualitativeBehaviourAnalysis,
  ClinicalScoring,
  Score,
} from '@prisma/client'

import {
  absenceOfProlongedHunger,
  absenceOfProlongedThirst,
  comfortAroundResting,
  easeOfMovement,
  absenceOfInjuries,
  absenceOfDisease,
  absenceOfPain,
  expressionOfSocialBehaviors,
  expressionOfOtherBehaviors,
  goodHumanAnimalRelationship,
  positiveEmotionalState,
} from './criteriaScoresCalculations'

import {
  principleGoodFeeding,
  principleGoodHousing,
  principleGoodHealth,
  principleGoodBehavior,
} from './principleScoresCalculations'
import { welfareCategory } from './welfareCategory'

interface Farms {
  id: string
  country: string | null
  address: string | null
  zip: string | null
  town: string | null
  visit_date_arranged: string
  visit_date_actual: string | null
  id_number: string
  visit_completed: boolean | null
  preVisit: PreVisit,
  contactPersons: ContactPerson[],
  groups: Group[],
  herd: {
    lyingTimeAndCollisions: LyingTimeAndCollision[],
    managementQuestionnaire: ManagementQuestionnaire,
    qualitativeBehaviourAnalysis: QualitativeBehaviourAnalysis,
  },
  SocialBehaviourAndCoughing: SocialBehaviourAndCoughing[],
  resources: Resources[],
  waterPoints: WaterPoint[],
  avoidanceDistanceTests: AvoidanceDistanceTest[],
  clinicalScoring: ClinicalScoring[],
  score: Score,
}

const saveScores = async (farmId: string, scoreId: string, scores: object) => {
  try {
    const data = JSON.stringify({
      id: farmId,
      scoreId: scoreId,
      scores: scores,
    })
    const res = await fetch('/api/saveScores', {
      method: 'POST',
      body: data,
    })
    if (res.status === 200) {
      console.log(`Success, added scores to DB for ${farmId}`)
    } else {
      console.log(res)
      console.log(`Woops, something went wrong with: ${farmId}. Status: `, res.status)
    }
  } catch (error) {
    console.error(error)
  }
}

export async function update_scores(
  //farms: Prisma.FarmCreateInput[],
  farms: Farms[]
): Promise<any> {
  for (let i = 0; i < farms.length; i++) {
    if (farms[i].visit_completed) {  // && farms[i].id_number == '157'
      const farmId = farms[i].id
      const scoreId = farms[i].score.id
      // console.log('id_number: ', farms[i].id_number, `(${i+1})`)
      // console.log(farms[i])
      // Criteria scores
      const absence_of_prolonged_hunger = absenceOfProlongedHunger(
        farms[i].clinicalScoring
      )
      const absence_of_prolonged_thirst = absenceOfProlongedThirst(
        farms[i].preVisit,
        farms[i].groups,
        farms[i].resources,
        farms[i].waterPoints
      )
      const comfort_around_resting = comfortAroundResting(
        farms[i].herd.lyingTimeAndCollisions,
        farms[i].SocialBehaviourAndCoughing,
        farms[i].clinicalScoring
      )
      const ease_of_movement = easeOfMovement(
        farms[i].herd.managementQuestionnaire
      )
      const absence_of_injuries = absenceOfInjuries(
        farms[i].clinicalScoring
      )
      const absence_of_disease = absenceOfDisease(
        farms[i].preVisit,
        farms[i].herd.managementQuestionnaire,
        farms[i].avoidanceDistanceTests,
        farms[i].SocialBehaviourAndCoughing,
        farms[i].clinicalScoring
      )
      const absence_of_pain = absenceOfPain(
        farms[i].herd.managementQuestionnaire
      )
      const expression_of_social_behaviors = expressionOfSocialBehaviors(
        farms[i].preVisit,
        farms[i].SocialBehaviourAndCoughing
      )
      const expression_of_other_behaviors = expressionOfOtherBehaviors(
        farms[i].herd.managementQuestionnaire
      )
      const good_human_animal_relationship = goodHumanAnimalRelationship(
        farms[i].avoidanceDistanceTests
      )
      const positive_emotional_state = positiveEmotionalState(
        farms[i].herd.qualitativeBehaviourAnalysis
      )
      // Principle scores
      const principle_good_feeding = principleGoodFeeding(
        absence_of_prolonged_hunger,
        absence_of_prolonged_thirst
      )
      const principle_good_housing = principleGoodHousing(
        comfort_around_resting,
        ease_of_movement
      )
      const principle_good_health = principleGoodHealth(
        absence_of_injuries,
        absence_of_disease,
        absence_of_pain
      )
      const principle_good_behavior = principleGoodBehavior(
        expression_of_social_behaviors,
        expression_of_other_behaviors,
        good_human_animal_relationship,
        positive_emotional_state
      )
      // Welfare category
      const welfare_category = welfareCategory(
        principle_good_feeding,
        principle_good_housing,
        principle_good_health,
        principle_good_behavior
      )
      const scores = {
        absence_of_prolonged_hunger: absence_of_prolonged_hunger,
        absence_of_prolonged_thirst: absence_of_prolonged_thirst,
        comfort_around_resting: comfort_around_resting,
        ease_of_movement: ease_of_movement,
        absence_of_injuries: absence_of_injuries,
        absence_of_disease: absence_of_disease,
        absence_of_pain: absence_of_pain,
        expression_of_social_behaviors: expression_of_social_behaviors,
        expression_of_other_behaviors: expression_of_other_behaviors,
        good_human_animal_relationship: good_human_animal_relationship,
        positive_emotional_state: positive_emotional_state,
        principle_good_feeding: principle_good_feeding,
        principle_good_housing: principle_good_housing,
        principle_good_health: principle_good_health,
        principle_good_behavior: principle_good_behavior,
        welfare_category: welfare_category,
      }
      // console.log(scores)
      await saveScores(farmId, scoreId, scores)
    }
  }
}
