
/* 
Criterion-scores are combined to form principle-scores with Choquet integrals.
*/
import { choquetIntegral_3, choquetIntegral_4 } from './math'

// Principle Good Feeding
export function principleGoodFeeding(
  absenceOfProlongedHunger: number,
  absenceOfProlongedThirst: number
) {
  // Parameters of Choquet integral:
  // 1, Absence of prolonged hunger: µ_1 = 0.12
  // 2, Absence of prolonged thirst: µ_2 = 0.27
  // INREA clarification about Choquet integral: Aggregated score = worst score + (best – worst)*µbest
  const my_1 = 0.12
  const my_2 = 0.27
  if (absenceOfProlongedHunger <= absenceOfProlongedThirst) {
    return (
      absenceOfProlongedHunger +
      (absenceOfProlongedThirst - absenceOfProlongedHunger) * my_2
    )
  } else {
    return (
      absenceOfProlongedThirst +
      (absenceOfProlongedHunger - absenceOfProlongedThirst) * my_1
    )
  }
}

// Principle Good Housing
export function principleGoodHousing(
  comfortAroundResting: number,
  easeOfMovement: number
) {
  // Thermal comfort is not assessed for dairy cows, it is therefore set accordingly
  const thermal_comfort = 100
  // Parameters of Choquet integral:
  // 3, Comfort around resting: µ_3 = 0.15
  // 4, Thermal comfort: µ_4 = 0.11
  // 5, Ease of movement: µ_5 = 0.12
  const my_3 = 0.12
  const my_4 = 0.27
  const my_5 = 0.27
  const my_34 = 0.34
  const my_35 = 0.43
  const my_45 = 0.37
  return choquetIntegral_3(
    comfortAroundResting,
    thermal_comfort,
    easeOfMovement,
    my_3,
    my_4,
    my_5,
    my_34,
    my_35,
    my_45
  )
}

// Principle Good Health
export function principleGoodHealth(
  absenceOfInjuries: number,
  absenceOfDisease: number,
  absenceOfPain: number
) {
  // Parameters of Choquet integral:
  // 6, Absence of injuries: µ_6 = 0.11
  // 7, Absence of disease: µ_7 = 0.24
  // 8, Absence of pain: µ_8 = 0.13
  const my_6 = 0.11
  const my_7 = 0.24
  const my_8 = 0.13
  const my_67 = 0.42
  const my_68 = 0.24
  const my_78 = 0.24
  return choquetIntegral_3(
    absenceOfInjuries,
    absenceOfDisease,
    absenceOfPain,
    my_6,
    my_7,
    my_8,
    my_67,
    my_68,
    my_78
  )
}

// Principle Good Behavior
export function principleGoodBehavior(
  expressionOfSocialBehaviors: number,
  expressionOfOtherBehaviors: number,
  goodHumanAnimalRelationship: number,
  positiveEmotionalState: number
) {
  // Parameters of Choquet integral:
  // 9, Expression of social behaviors: µ_9 = 0.10
  // 10, Expression of other behaviors: µ_10 = 0.07
  // 11, Good human- animal relationship: µ_11 = 0.12
  // 12, Positive emotional state: µ_12 = 0.17
  const my_9 = 0.1
  const my_10 = 0.07
  const my_11 = 0.12
  const my_12 = 0.17
  const my_910 = 0.12
  const my_911 = 0.12
  const my_912 = 0.18
  const my_1011 = 0.15
  const my_1012 = 0.19
  const my_1112 = 0.27
  const my_91011 = 0.42
  const my_91012 = 0.49
  const my_91112 = 0.52
  const my_101112 = 0.48
  return choquetIntegral_4(
    expressionOfSocialBehaviors,
    expressionOfOtherBehaviors,
    goodHumanAnimalRelationship,
    positiveEmotionalState,
    my_9,
    my_10,
    my_11,
    my_12,
    my_910,
    my_911,
    my_912,
    my_1011,
    my_1012,
    my_1112,
    my_91011,
    my_91012,
    my_91112,
    my_101112
  )
}

export { }
