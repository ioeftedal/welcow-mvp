
// @ts-ignore
// @ts-nocheck

import {
  PreVisit,
  Group,
  ManagementQuestionnaire,
  SocialBehaviourAndCoughing,
  AvoidanceDistanceTest,
  LyingTimeAndCollision,
  Resources,
  WaterPoint,
  QualitativeBehaviourAnalysis,
  ClinicalScoring,
} from '@prisma/client'

// 6.2.1.1 Absence of prolonged hunger
export function absenceOfProlongedHunger(
  clinicalScoringData: ClinicalScoring[]
): number {
  // % Very lean cows
  const pct_very_lean =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.bcs_wq == 1 ? ++acc : acc),
      0
    ) /
      clinicalScoringData.length) *
    100
  // Index and Score
  const Index = 100 - pct_very_lean
  const knot = 80
  if (Index <= knot) {
    const a = 0
    const b = 0.2216596254
    const c = -0.0027707453
    const d = 0.0000592709
    return a + b * Index + c * Index ** 2 + d * Index ** 3
  } else {
    const a = -2961.3146422677
    const b = 111.2709595652
    const c = -1.3908870043
    const d = 0.0058430887
    return a + b * Index + c * Index ** 2 + d * Index ** 3
  }
}

// 6.2.1.2 Absence of prolonged thirst

export function absenceOfProlongedThirst(
  preVisitData: PreVisit,
  groups: Group[],
  resourcesData: Resources[],
  waterPointsData: WaterPoint[]
): number {
  const herd_size = preVisitData.herd_size
  // In this array the group and resulting scores wil be stored (nested array)
  let scoreList = []

  // Looping though all groups
  for (let i = 0; i < resourcesData.length; i++) {
    const this_group = resourcesData[i].group_name

    // Creating counters to keep track of relevant parameters for each group
    let water_bowls = 0
    let trough_length = 0
    let functioning_drinkers = 0
    let clean_drinkers = 0

    // Filtering out waterpoints corresponding to current group
    let wps_in_group = waterPointsData.filter(
      (waterPoint) => waterPoint.group_name == this_group
    )
    // Loop to check the type of waterpoints and add to the correct counters
    for (let k = 0; k < wps_in_group.length; k++) {
      // Checing if waterpoint is functioning and has suffiient waterflow
      if (
        wps_in_group[k].functioning == 'Functioning' &&
        wps_in_group[k].waterflow == 'Adequate'
      ) {
        // Counting clean and partly clean functional drinkers
        if (
          wps_in_group[k].cleanliness == 0 ||
          wps_in_group[k].cleanliness == 1
        ) {
          clean_drinkers += 1
        }
        functioning_drinkers += 1
        // Checking waterpoint types
        if (
          wps_in_group[k].type == 0 ||
          wps_in_group[k].type == 1 ||
          wps_in_group[k].type == 4
        ) {
          trough_length += wps_in_group[k].troughlength
        } else {
          water_bowls += 1
        }
      }
      // If not functioning properly ie. insuffisient waterflow (counts for half)
      else if (wps_in_group[k].waterflow == 'Inadequate') {
        // Counting clean and partly clean functional drinkers
        if (
          wps_in_group[k].cleanliness == 0 ||
          wps_in_group[k].cleanliness == 1
        ) {
          clean_drinkers += 1
        }
        functioning_drinkers += 1
        // Checking waterpoint types
        if (
          wps_in_group[k].type == 0 ||
          wps_in_group[k].type == 1 ||
          wps_in_group[k].type == 4
        ) {
          trough_length += wps_in_group[k].troughlength / 2
        } else {
          water_bowls += 1 / 2
        }
      } else {
        continue
      }
    }

    // Findig corresponding group based on current resource
    let group = groups.filter((group) => group.group_name == this_group)[0]
    // Checking if there are sufficient drinkers (Yes, Partly, No)
    // Yes: at least 1 water bowl for 10 cows and/or 6 cm of trough per cow
    if (
      group?.group_size / water_bowls <= 10 ||
      trough_length / group?.group_size >= 6
    ) {
      // Drinkers clean?
      if (clean_drinkers == functioning_drinkers) {
        // At least 2 drinkers availible?
        if (resourcesData[i].nr_wps >= 2) {
          scoreList.push({
            group: this_group,
            pct: (group.group_size / herd_size) * 100,
            score: 100,
          })
        } else {
          scoreList.push({
            group: this_group,
            pct: (group.group_size / herd_size) * 100,
            score: 60,
          })
        }
      } else {
        scoreList.push({
          group: this_group,
          pct: (group.group_size / herd_size) * 100,
          score: 32,
        })
      }
    }
    // Partly: at least 1 water bowl for 15 cows and/or 4 cm of trough per cow
    else if (
      group?.group_size / water_bowls >= 15 ||
      trough_length / group?.group_size >= 4
    ) {
      // Drinkers clean?
      if (clean_drinkers == functioning_drinkers) {
        // At least 2 drinkers availible?
        if (resourcesData[i].nr_wps >= 2) {
          scoreList.push({
            group: this_group,
            pct: (group.group_size / herd_size) * 100,
            score: 60,
          })
        } else {
          scoreList.push({
            group: this_group,
            pct: (group.group_size / herd_size) * 100,
            score: 40,
          })
        }
      } else {
        scoreList.push({
          group: this_group,
          pct: (group.group_size / herd_size) * 100,
          score: 20,
        })
      }
    }
    // No
    else {
      scoreList.push({
        group: this_group,
        pct: (group?.group_size / herd_size) * 100,
        score: 3,
      })
    }
  }
  // Sorting array of by acending score values:
  scoreList.sort((a, b) => a.score - b.score)
  //
  if (scoreList[0].pct >= 15) {
    return scoreList[0].score
  } else if (scoreList[0].pct < 15) {
    let pct = scoreList[0].pct
    for (let n = 1; n < scoreList.length; n++) {
      pct += scoreList[n].pct
      if (pct >= 15) {
        return scoreList[n].score
      }
    }
  }
  return 3
}

// 6.2.1.3 Comfort around resting (page 96)

export function comfortAroundResting(
  lyingTimeAndCollisionData: LyingTimeAndCollision[],
  socialBehaviourAndCoughingData: SocialBehaviourAndCoughing[],
  clinicalScoringData: ClinicalScoring[]
): number {
  let moderate_problems = 0
  let serious_problems = 0
  // Importance of:
  // 3 for resting behaviour: Lie time, lying out, collision.
  // 1 for cleanliness: dirty legs, udder, hindquarter
  // Lie time
  let lie_t_counter = 0
  for (let i = 0; i < lyingTimeAndCollisionData.length; i++) {
    lie_t_counter += lyingTimeAndCollisionData[i].lie_t
  }
  const avg_lie_t = lie_t_counter / lyingTimeAndCollisionData.length
  if (5.2 < avg_lie_t && avg_lie_t <= 6.3) {
    moderate_problems += 3
  } else if (6.3 < avg_lie_t) {
    serious_problems += 3
  }
  // Collision
  const pct_collision =
    (lyingTimeAndCollisionData.reduce(
      (acc, cur) => (cur.collision == 'Present' ? ++acc : acc),
      0
    ) /
      lyingTimeAndCollisionData.length) *
    100
  if (20 < pct_collision && pct_collision <= 30) {
    moderate_problems += 3
  } else if (30 < pct_collision) {
    serious_problems += 3
  }
  // Lying outside
  let lying_out_counter = 0
  let lying_counter = 0
  for (let i = 0; i < socialBehaviourAndCoughingData.length; i++) {
    lying_out_counter +=
      socialBehaviourAndCoughingData[i].lying_out_start +
      socialBehaviourAndCoughingData[i].lying_out_finish
    lying_counter +=
      socialBehaviourAndCoughingData[i].lying_start +
      socialBehaviourAndCoughingData[i].lying_finish
  }
  const pct_lying_out = (lying_out_counter / lying_counter) * 100
  if (3 < pct_lying_out && pct_lying_out <= 5) {
    moderate_problems += 3
  } else if (5 < pct_lying_out) {
    serious_problems += 3
  }
  // Cleanliness: lower legs
  const pct_diry_lower_legs =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.clean_scr_lower_hindleg === 2 ? ++acc : acc),
      0
    ) /
      clinicalScoringData.length) *
    100
  if (20 < pct_diry_lower_legs && pct_diry_lower_legs <= 50) {
    moderate_problems += 1
  } else if (50 < pct_diry_lower_legs) {
    serious_problems += 1
  }
  // Cleanliness: udder
  const pct_diry_udder =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.clean_scr_udderwq === 2 ? ++acc : acc),
      0
    ) /
      clinicalScoringData.length) *
    100
  if (10 < pct_diry_udder && pct_diry_udder <= 19) {
    moderate_problems += 1
  } else if (19 < pct_diry_udder) {
    serious_problems += 1
  }
  // Cleanliness: Upper hindleg
  const pct_diry_hindquarter =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.clean_scr_upper_hindleg === 2 ? ++acc : acc),
      0
    ) /
      clinicalScoringData.length) *
    100
  if (10 < pct_diry_hindquarter && pct_diry_hindquarter <= 19) {
    moderate_problems += 1
  } else if (19 < pct_diry_hindquarter) {
    serious_problems += 1
  }
  // Index and Score
  const Index =
    100 - (100 * (4 * moderate_problems + 9 * serious_problems)) / 108
  const knot = 62
  if (Index <= knot) {
    const a = 0
    const b = 0.5647086656
    const c = 0.0046442175
    const d = -0.0000380402
    return a + b * Index + c * Index ** 2 + d * Index ** 3
  } else {
    const a = -152.5694102955
    const b = 7.9470994784
    const c = -0.1144266019
    const d = 0.0006021255
    return a + b * Index + c * Index ** 2 + d * Index ** 3
  }
}

// 6.2.1.4.1 Thermal comfort (page 97)
// This criterion is not assessed for dairy cows, yet.

// 6.2.1.5 Ease of movement (page 97)

export function easeOfMovement(
  managementQuestionnaireData: ManagementQuestionnaire
): number {
  let days_teathered = 365 - managementQuestionnaireData.outdoor_days_year
  let hours_exercise = managementQuestionnaireData.outdoor_hours_day
  let hours_teathered = 24 - hours_exercise
  // if (days_teathered == null) {
  //     days_teathered = 0
  // }
  // if (hours_exercise == null) {
  //     hours_exercise = 0
  // }
  // Loose housed
  if (managementQuestionnaireData.loose_housed == true) {
    return 100
  }
  // Teathered all year round
  else if (days_teathered > 265 && hours_teathered >= 18) {
    // with regular exercise
    if (1 <= hours_exercise) {
      return 32
    }
    // no regular exercise
    else {
      return 15
    }
  }
  // Teathered only in winter
  else if (
    15 <= days_teathered &&
    days_teathered <= 265 &&
    hours_teathered >= 18
  ) {
    // with regular exercise
    if (1 <= hours_exercise) {
      return 60
    }
    // no regular exercise
    else {
      return 34
    }
  }
  // Not teathered
  else {
    return 100
  }
}

// 6.2.1.6 Absence of injuries (page 98)

export function absenceOfInjuries(
  clinicalScoringData: ClinicalScoring[]
): number {
  // Partial score for integument alterations
  let count_mild_ia = 0
  let count_severe_ia = 0
  for (let i = 0; i < clinicalScoringData.length; i++) {
    // Checking if all integumental alteration scores are Normal (do nothing)
    if (
      clinicalScoringData[i].integ_other == 0 &&
      clinicalScoringData[i].integ_carpus == 0 &&
      clinicalScoringData[i].integ_tarsus == 0 &&
      clinicalScoringData[i].integ_hindquarter == 0 &&
      clinicalScoringData[i].integ_flank_side_udder == 0 &&
      clinicalScoringData[i].integ_neck_shoulder_back == 0 &&
      clinicalScoringData[i].tail_broken == 0
    ) {
      continue
    }
    // Checking if one or more Lesion(s) or Swelling(s) are present (severe)
    else if (
      clinicalScoringData[i].integ_other == 2 ||
      clinicalScoringData[i].integ_carpus == 2 ||
      clinicalScoringData[i].integ_tarsus == 2 ||
      clinicalScoringData[i].integ_hindquarter == 2 ||
      clinicalScoringData[i].integ_flank_side_udder == 2 ||
      clinicalScoringData[i].integ_neck_shoulder_back == 2 ||
      clinicalScoringData[i].tail_broken == 2 ||
      clinicalScoringData[i].integ_other == 3 ||
      clinicalScoringData[i].integ_carpus == 3 ||
      clinicalScoringData[i].integ_tarsus == 3 ||
      clinicalScoringData[i].integ_hindquarter == 3 ||
      clinicalScoringData[i].integ_flank_side_udder == 3 ||
      clinicalScoringData[i].integ_neck_shoulder_back == 3
    ) {
      count_severe_ia += 1
    }
    // If none of the above then one or several Hairless patch(es) are present (mild)
    else {
      count_mild_ia += 1
    }
  }
  const pct_mild_ia = (count_mild_ia / clinicalScoringData.length) * 100
  const pct_severe_ia = (count_severe_ia / clinicalScoringData.length) * 100
  const Index_ia = 100 - (pct_mild_ia + 5 * pct_severe_ia) / 5
  let Score_ia = undefined
  const knot_ia = 65
  if (Index_ia <= knot_ia) {
    const a = 0
    const b = 0.4353924567
    const c = -0.0066983455
    const d = 0.0001281117
    Score_ia = a + b * Index_ia + c * Index_ia ** 2 + d * Index_ia ** 3
  } else {
    const a = 29.8965836056
    const b = -0.9444498651
    const c = 0.0145299979
    const d = 0.0000192484
    Score_ia = a + b * Index_ia + c * Index_ia ** 2 + d * Index_ia ** 3
  }
  // Partial score for lameness
  let count_mild_l = 0
  let count_severe_l = 0
  for (let i = 0; i < clinicalScoringData.length; i++) {
    // Checking moderate lameness
    if (clinicalScoringData[i].lameness == 1) {
      count_mild_l += 1
    }
    // Checking severe lameness
    else if (clinicalScoringData[i].lameness == 2) {
      count_severe_l += 1
    }
  }
  const pct_mild_l = (count_mild_l / clinicalScoringData.length) * 100
  const pct_severe_l = (count_severe_l / clinicalScoringData.length) * 100
  const Index_l = 100 - (2 * pct_mild_l + 7 * pct_severe_l) / 7
  let Score_l = undefined
  const knot_l = 78
  if (Index_l <= knot_l) {
    const a = 0
    const b = 0.0750111002
    const c = -0.0000242066
    const d = 0.0000449587
    Score_l = a + b * Index_l + c * Index_l ** 2 + d * Index_l ** 3
  } else {
    const a = -2129.5217776808
    const b = 81.9796965434
    const c = -1.0500842958
    const d = 0.0045323951
    Score_l = a + b * Index_l + c * Index_l ** 2 + d * Index_l ** 3
  }

  // Score for absence of injuries
  // The two partial scores are combined using a Choquet integral: (S_1 + (S_2 - S_1)*µ_2) if S_1 <= S_2
  // The parameters of the Choquet integral are: µ_ia = 0.56 and µ_l = 0.31
  // INREA clarification about Choquet integral: Aggregated score = worst score + (best – worst)*µbest
  const my_ia = 0.56
  const my_l = 0.31
  if (Score_l <= Score_ia) {
    return Score_l + (Score_ia - Score_l) * my_ia
  } else {
    return Score_ia + (Score_l - Score_ia) * my_l
  }
}

// 6.2.1.7 Absence of disease (page 100)

export function absenceOfDisease(
  preVisitData: PreVisit,
  managementQuestionnaireData: ManagementQuestionnaire,
  avoidanceDistanceTestingData: AvoidanceDistanceTest[],
  socialBehaviourAndCoughingData: SocialBehaviourAndCoughing[],
  clinicalScoringData: ClinicalScoring[]
): number {
  const herd_size = preVisitData.herd_size
  const sample_size = avoidanceDistanceTestingData.length
  // TODO: how to calculate % mortality, downercows, dystocia etc
  const pct_nasal_discharge =
    (avoidanceDistanceTestingData.reduce(
      (acc, cur) => (cur.nasal_discharge == 'Present' ? ++acc : acc),
      0
    ) /
      sample_size) *
    100
  const pct_ocular_discharge =
    (avoidanceDistanceTestingData.reduce(
      (acc, cur) => (cur.ocular_discharge == 'Present' ? ++acc : acc),
      0
    ) /
      sample_size) *
    100

  let sum_coughing_avg = 0
  let total_time_sum_segments = 0
  for (let i = 0; i < socialBehaviourAndCoughingData.length; i++) {
    const nr_animals =
      socialBehaviourAndCoughingData[i].standing_start +
      socialBehaviourAndCoughingData[i].standing_finish +
      socialBehaviourAndCoughingData[i].eat_drink_start +
      socialBehaviourAndCoughingData[i].eat_drink_finish +
      socialBehaviourAndCoughingData[i].lying_start +
      socialBehaviourAndCoughingData[i].lying_finish
    const avg_num_cows_segment = nr_animals / 2
    sum_coughing_avg += socialBehaviourAndCoughingData[i].coughing / avg_num_cows_segment
    /* total_time_sum_segments += socialBehaviourAndCoughingData[i].duration // In minutes */
  }
  const avg_coughing_quarter = sum_coughing_avg / 8
  const pct_hampered_respiration =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.hampered_respiration === 2 ? ++acc : acc),
      0
    ) /
      sample_size) *
    100
  const pct_diarrhoea =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.diarrhoea === 2 ? ++acc : acc),
      0
    ) /
      sample_size) *
    100
  const pct_vulval_discharge =
    (clinicalScoringData.reduce(
      (acc, cur) => (cur.vulval_discharge === 2 ? ++acc : acc),
      0
    ) /
      sample_size) *
    100
  const pct_mastitis = managementQuestionnaireData.pct_scc400k_3mos
  const pct_dystocia =
    (managementQuestionnaireData.nr_dystocia_12_mos /
      managementQuestionnaireData.avg_calvings_year) *
    100
  const pct_downercows =
    (managementQuestionnaireData.nr_downercows_12_mos /
      managementQuestionnaireData.avg_dairy_cow_12mos) *
    100
  const pct_mortality =
    (managementQuestionnaireData.nr_mortality_12_mos /
      managementQuestionnaireData.avg_dairy_cow_12mos) *
    100
  let warnings = 0
  let alarms = 0
  if (pct_nasal_discharge >= 10) {
    alarms += 1
  } else if (10 > pct_nasal_discharge && pct_nasal_discharge >= 5) {
    warnings += 1
  }
  if (pct_ocular_discharge >= 6) {
    alarms += 1
  } else if (6 > pct_ocular_discharge && pct_ocular_discharge >= 3) {
    warnings += 1
  }
  if (avg_coughing_quarter >= 6) {
    alarms += 1
  } else if (6 > avg_coughing_quarter && avg_coughing_quarter >= 3) {
    warnings += 1
  }
  if (pct_hampered_respiration >= 6.5) {
    alarms += 1
  } else if (
    6.5 > pct_hampered_respiration &&
    pct_hampered_respiration >= 3.25
  ) {
    warnings += 1
  }
  if (pct_diarrhoea >= 6.5) {
    alarms += 1
  } else if (6.5 > pct_diarrhoea && pct_diarrhoea >= 3.25) {
    warnings += 1
  }
  if (pct_vulval_discharge >= 4.5) {
    alarms += 1
  } else if (4.5 > pct_vulval_discharge && pct_vulval_discharge >= 2.25) {
    warnings += 1
  }
  if (pct_mastitis >= 17.5) {
    alarms += 1
  } else if (17.5 > pct_mastitis && pct_mastitis >= 8.75) {
    warnings += 1
  }
  if (pct_dystocia >= 5.5) {
    alarms += 1
  } else if (5.5 > pct_dystocia && pct_dystocia >= 2.75) {
    warnings += 1
  }
  if (pct_downercows >= 5.5) {
    alarms += 1
  } else if (5.5 > pct_downercows && pct_downercows >= 2.75) {
    warnings += 1
  }
  if (pct_mortality >= 4.5) {
    alarms += 1
  } else if (4.5 > pct_mortality && pct_mortality >= 2.25) {
    warnings += 1
  }
  const weighted_sum = warnings + 3 * alarms
  const Index = 100 - (100 * weighted_sum) / 24 // should it not be 30? (=> max alarms 10*3) not 24
  const knot = 65
  if (Index <= knot) {
    const a = 0
    const b = 0.5280510652
    const c = -0.0036474543
    const d = 0.0000595889
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  } else {
    const a = -154.241702402
    const b = 7.6468988725
    const c = -0.1131681899
    const d = 0.0006212337
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  }
}

// 6.2.1.8 Absence of pain induced by management procedures (page 102)
// TODO: Should "hot_air" be considered in the decision tree?
export function absenceOfPain(
  managementQuestionnaireData: ManagementQuestionnaire
): number {
  // Disbudding / dehorning answer combinations:
  let disb_deho_score = undefined
  // No or N/A
  if (
    managementQuestionnaireData.disb_deho_on_farm === 9999 ||
    managementQuestionnaireData.disb_deho_on_farm === 2
  ) {
    disb_deho_score = 100
  }
  // Method for disbudding or dehorning
  // Thermocautery (Thermal)
  else if (managementQuestionnaireData.disb_deho_method === 1) {
    // Anaesthetic + Analgesic
    if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 75
    }
    // Anaesthetic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 2
    ) {
      disb_deho_score = 52
    }
    // Analgesic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 2 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 49
    }
    // Nothing
    else {
      disb_deho_score = 28
    }
  }
  // Caustic paste (Chemical)
  else if (managementQuestionnaireData.disb_deho_method === 2) {
    // Anaesthetic + Analgesic
    if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 58
    }
    // Anaesthetic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 2
    ) {
      disb_deho_score = 39
    }
    // Analgesic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 2 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 41
    }
    // Nothing
    else {
      disb_deho_score = 20
    }
  }
  // Dehorned
  else if (managementQuestionnaireData.disb_deho_method === 3) {
    // Anaesthetic + Analgesic
    if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 22
    }
    // Anaesthetic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 0 &&
      managementQuestionnaireData.disb_deho_analgesia === 2
    ) {
      disb_deho_score = 14
    }
    // Analgesic
    else if (
      managementQuestionnaireData.disb_deho_anaesthesia === 2 &&
      managementQuestionnaireData.disb_deho_analgesia === 0
    ) {
      disb_deho_score = 13
    }
    // Nothing
    else {
      disb_deho_score = 2
    }
  }

  // Tail docking answer combinations:
  let tail_docking_score = undefined
  // No or N/A
  if (
    managementQuestionnaireData.td_on_farm === 9999 ||
    managementQuestionnaireData.td_on_farm === 2
  ) {
    tail_docking_score = 100
  }
  // Rubber ring
  else if (managementQuestionnaireData.td_method === 0) {
    // Anaesthetic + Analgesic
    if (
      managementQuestionnaireData.td_anaesthesia === 0 &&
      managementQuestionnaireData.td_analgesia === 0
    ) {
      tail_docking_score = 28
    }
    // Anaesthetic
    else if (
      managementQuestionnaireData.td_anaesthesia === 0 &&
      managementQuestionnaireData.td_analgesia === 2
    ) {
      tail_docking_score = 21
    }
    // Analgesic
    else if (
      managementQuestionnaireData.td_anaesthesia === 2 &&
      managementQuestionnaireData.td_analgesia === 0
    ) {
      tail_docking_score = 19
    }
    // Nothing
    else {
      tail_docking_score = 3
    }
  }
  // Surgery
  else if (managementQuestionnaireData.td_method === 2) {
    // Anaesthetic + Analgesic
    if (
      managementQuestionnaireData.td_anaesthesia === 0 &&
      managementQuestionnaireData.td_analgesia === 0
    ) {
      tail_docking_score = 33
    }
    // Anaesthetic
    else if (
      managementQuestionnaireData.td_anaesthesia === 0 &&
      managementQuestionnaireData.td_analgesia === 2
    ) {
      tail_docking_score = 19
    }
    // Analgesic
    else if (
      managementQuestionnaireData.td_anaesthesia === 2 &&
      managementQuestionnaireData.td_analgesia === 0
    ) {
      tail_docking_score = 16
    }
    // Nothing
    else {
      tail_docking_score = 0
    }
  } else {
    return undefined
  }

  // Returning worst score among the two partial scores:
  if (tail_docking_score < disb_deho_score) {
    return tail_docking_score
  } else {
    return disb_deho_score
  }
}

// 6.2.1.9 Expression of social behaviors (page 104)
// TODO: Should other fields be considered ?
// (which are considered regarding displacement: disp + fight + chasing + chas_up)
export function expressionOfSocialBehaviors(
  preVisitData: PreVisit,
  socialBehaviourAndCoughingData: SocialBehaviourAndCoughing[]
): number {
  const herd_size = preVisitData.herd_size
  let total_head_butts = 0
  let total_displacements = 0
  let nr_animals = 0
  let total_avg_head_butts = 0
  let total_avg_displacements = 0
  let total_time_sum_segments = 0
  // Assuming all segments are assessed with a duration of 2h (120min)
  for (let i = 0; i < socialBehaviourAndCoughingData.length; i++) {
    total_head_butts = socialBehaviourAndCoughingData[i].headbutt
    total_displacements = socialBehaviourAndCoughingData[i].displacement +
      socialBehaviourAndCoughingData[i].fighting
      + socialBehaviourAndCoughingData[i].chasing
      + socialBehaviourAndCoughingData[i].chasing_up
    nr_animals =
      socialBehaviourAndCoughingData[i].standing_start +
      socialBehaviourAndCoughingData[i].standing_finish +
      socialBehaviourAndCoughingData[i].eat_drink_start +
      socialBehaviourAndCoughingData[i].eat_drink_finish +
      socialBehaviourAndCoughingData[i].lying_start +
      socialBehaviourAndCoughingData[i].lying_finish
    let nr_animals_avg_per_segment = nr_animals / 2 // Due to us having an start and a finish
    let sum_avg_head_buts_per_segment = total_head_butts / nr_animals_avg_per_segment
    let sum_avg_displacements_per_segment = total_displacements / nr_animals_avg_per_segment
    total_avg_head_butts += sum_avg_head_buts_per_segment
    total_avg_displacements += sum_avg_displacements_per_segment
    total_time_sum_segments += socialBehaviourAndCoughingData[i].duration // In minutes
  }
  // Calculating average head butts and displacements over the number over all the segments
  const avg_head_butts = total_avg_head_butts / 2
  const avg_displacements = total_avg_displacements / 2
  /* const avg_time_per_segment = total_time_sum_segments / socialBehaviourAndCoughingData.length */
  /* const scaling_factor_factor_time = 60 / avg_time_per_segment */

  // const hbt_animal_hour = total_head_butts / (nr_animals / 2) / 2
  // const disp_animal_hour = total_displacements / (nr_animals / 2) / 2
  const hbt_animal_hour = avg_head_butts
  const disp_animal_hour = avg_displacements
  const Index =
    (100 * (43.8 - (4 * hbt_animal_hour + 11 * disp_animal_hour))) / 43.8
  const knot = 70
  if (Index <= knot) {
    const a = 0
    const b = 0.3919305016
    const c = -0.0055990072
    const d = 0.0001240486
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  } else {
    const a = 92.1225251801
    const b = -3.5561777144
    const c = 0.0508025387
    const d = -0.0001445301
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  }
}

// 6.2.1.10 Expression of other behaviors (page 105)

export function expressionOfOtherBehaviors(
  managementQuestionnaireData: ManagementQuestionnaire
): number {
  if (managementQuestionnaireData.pasture_hours_day >= 6) {
    const pct_days =
      (managementQuestionnaireData.pasture_days_year / 365) * 100
    const knot = 50
    if (pct_days <= knot) {
      const a = 0
      const b = 1.7752743048
      const c = -0.000924337
      const d = -0.0001056035
      const Score =
        a + b * pct_days + c * pct_days ** 2 + d * pct_days ** 3
      return Score
    } else {
      const a = -37.3194755012
      const b = 4.0144428355
      const c = -0.0457077076
      const d = 0.0001929523
      const Score =
        a + b * pct_days + c * pct_days ** 2 + d * pct_days ** 3
      return Score
    }
  } else {
    return 0
  }
}

// 6.2.1.11 Good human-animal relationship (page 105)

export function goodHumanAnimalRelationship(
  avoidanceDistanceTestingData: AvoidanceDistanceTest[]
): number {
  const sample_size = avoidanceDistanceTestingData.length
  let cat_1_count = 0
  let cat_2_count = 0
  let cat_3_count = 0
  let cat_4_count = 0
  for (let i = 0; i < avoidanceDistanceTestingData.length; i++) {
    let animal = avoidanceDistanceTestingData[i]
    if (animal.a_d_t2 === null || animal.a_d_t2 === undefined) {
      if (animal.a_d_t1 > 0 && animal.a_d_t1 <= 50) {
        cat_2_count += 1
      } else if (animal.a_d_t1 > 50 && animal.a_d_t1 <= 100) {
        cat_3_count += 1
      } else if (animal.a_d_t1 > 100 && animal.a_d_t1 <= 200) {
        cat_4_count += 1
      } else if (animal.a_d_t1 == 0) {
        cat_1_count += 1
      }
    } else {
      if (animal.a_d_t2 > 0 && animal.a_d_t2 <= 50) {
        cat_2_count += 1
      } else if (animal.a_d_t2 > 50 && animal.a_d_t2 <= 100) {
        cat_3_count += 1
      } else if (animal.a_d_t2 > 100 && animal.a_d_t2 <= 200) {
        cat_4_count += 1
      } else if (animal.a_d_t2 == 0) {
        cat_1_count += 1
      }
    }
  }
  const cat_2_pct = (100 * cat_2_count) / sample_size
  const cat_3_pct = (100 * cat_3_count) / sample_size
  const cat_4_pct = (100 * cat_4_count) / sample_size
  const Index = 100 - (3 * cat_2_pct + 11 * cat_3_pct + 26 * cat_4_pct) / 26
  const knot = 70
  if (Index <= knot) {
    const a = 0
    const b = 0.7221171736
    const c = -0.0103159596
    const d = 0.0001114496
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  } else {
    const a = -247.7002454443
    const b = 11.3378420026
    const c = -0.1619691718
    const d = 0.0008336078
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    return Score
  }
}

// 6.2.1.12 Positive emotional state (page 106)

const qbaWeights = {
  active: 0.00768,
  relaxed: 0.01004,
  fearful: -0.01286,
  agitated: -0.0162,
  calm: 0.00881,
  content: 0.01213,
  indifferent: -0.01116,
  frustrated: -0.01609,
  friendly: 0.01172,
  bored: -0.01087,
  playful: 0.00109,
  positively_occupied: 0.01183,
  lively: 0.00028,
  inquisitive: 0.00048,
  irritable: -0.02182,
  calmless_uneasy: -0.01032,
  sociable: 0.00527,
  apathetic: -0.01562,
  happy: 0.01468,
  distressed: -0.02027,
}

export function positiveEmotionalState(
  qualitativeBehaviorAnalysisData: QualitativeBehaviourAnalysis
): number {
  let Index = -3.40496
  for (const [weightKey, weightValue] of Object.entries(qbaWeights)) {
    for (const [key, value] of Object.entries(
      qualitativeBehaviorAnalysisData
    )) {
      if (weightKey == key) {
        Index += weightValue * value
      } else {
        continue
      }
    }
  }
  const knot = 0
  if (Index <= knot) {
    const a = 50
    const b = 8.75
    const c = 0.3125
    const d = 0
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    if (Score < 0) {
      return 0
    } else if (Score > 100) {
      return 100
    }
    return Score
  } else {
    const a = 50
    const b = 11.6667
    const c = -0.55556
    const d = 0
    const Score = a + b * Index + c * Index ** 2 + d * Index ** 3
    if (Score < 0) {
      return 0
    } else if (Score > 100) {
      return 100
    }
    return Score
  }
}

export { }
