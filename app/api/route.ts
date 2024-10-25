import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON data
    const data = await req.json();

    const farm = await prisma.farm.create({
      data: {
        country: data.farmData?.country,
        address: data.farmData?.address,
        zip: data.farmData?.zip,
        town: data.farmData?.town,
        visit_date_arranged: data.farmData?.visit_date_arranged,
        visit_date_actual: data.farmData?.visit_date_actual,
        id_number: data.farmData?.id_number,
        visit_completed: data.farmData?.visit_completed,
      },
    });

    if (data.preVisitData) {
      const preVisit = await prisma.preVisit.create({
        data: {
          herd_size: data.preVisitData?.herd_size,
          sample_size: data.preVisitData?.sample_size,
          nr_groups: data.preVisitData?.nr_groups,
          pregheifers_mixed: data.preVisitData?.pregheifers_mixed,
          drycows_mixed: data.preVisitData?.drycows_mixed,
          bull: data.preVisitData?.bull,
          bull_sep: data.preVisitData?.bull_sep,
          feeding: data.preVisitData?.feeding,
          milking_system: data.preVisitData?.milking_system,
          morning_routines: data.preVisitData?.morning_routines,
          headlock: data.preVisitData?.headlock,
          nr_headlocks: data.preVisitData?.nr_headlocks,
          on_pasture: data.preVisitData?.on_pasture,
          date_last_claw_trim: data.preVisitData?.date_last_claw_trim,
          interference: data.preVisitData?.interference,
          stockperson_available: data.preVisitData?.stockperson_available,
          farmId: farm.id,
        },
      });
    }

    if (data.clinicalScoringData) {
      const clinicalScoring = await prisma.clinicalScoring.create({
        data: {
          group_name: data.clinicalScoringData?.group_name,
          ear_tag: data.clinicalScoringData?.ear_tag,
          side: data.clinicalScoringData?.side,
          breed: data.clinicalScoringData?.breed,
          bcs_wq: data.clinicalScoringData?.bcs_wq,
          bcs_std: data.clinicalScoringData?.bcs_std,
          clean_scr_lower_hindleg: data.clinicalScoringData?.clean_scr_lower_hindleg,
          clean_scr_upper_hindleg: data.clinicalScoringData?.clean_scr_upper_hindleg,
          clean_scr_udderwq: data.clinicalScoringData?.clean_scr_udderwq,
          clean_scr_udder: data.clinicalScoringData?.clean_scr_udder,
          clean_scr_teats: data.clinicalScoringData?.clean_scr_teats,
          integ_tarsus: data.clinicalScoringData?.integ_tarsus,
          nr_hairless_tarsus: data.clinicalScoringData?.nr_hairless_tarsus,
          nr_lesion_tarsus: data.clinicalScoringData?.nr_lesion_tarsus,
          nr_swelling_tarsus: data.clinicalScoringData?.nr_swelling_tarsus,
          integ_hindquarter: data.clinicalScoringData?.integ_hindquarter,
          nr_hairless_hq: data.clinicalScoringData?.nr_hairless_hq,
          nr_lesion_hq: data.clinicalScoringData?.nr_lesion_hq,
          nr_swelling_hq: data.clinicalScoringData?.nr_swelling_hq,
          integ_neck_shoulder_back: data.clinicalScoringData?.integ_neck_shoulder_back,
          nr_hairless_nsb: data.clinicalScoringData?.nr_hairless_nsb,
          nr_lesion_nsb: data.clinicalScoringData?.nr_lesion_nsb,
          nr_swelling_nsb: data.clinicalScoringData?.nr_swelling_nsb,
          integ_carpus: data.clinicalScoringData?.integ_carpus,
          nr_hairless_carpus: data.clinicalScoringData?.nr_hairless_carpus,
          nr_lesion_carpus: data.clinicalScoringData?.nr_lesion_carpus,
          nr_swelling_carpus: data.clinicalScoringData?.nr_swelling_carpus,
          integ_flank_side_udder: data.clinicalScoringData?.integ_flank_side_udder,
          nr_hairless_fsu: data.clinicalScoringData?.nr_hairless_fsu,
          nr_lesion_fsu: data.clinicalScoringData?.nr_lesion_fsu,
          nr_swelling_fsu: data.clinicalScoringData?.nr_swelling_fsu,
          integ_other: data.clinicalScoringData?.integ_other,
          integ_other_specify: data.clinicalScoringData?.integ_other_specify,
          tail_broken: data.clinicalScoringData?.tail_broken,
          hampered_respiration: data.clinicalScoringData?.hampered_respiration,
          diarrhoea: data.clinicalScoringData?.diarrhoea,
          vulval_discharge: data.clinicalScoringData?.vulval_discharge,
          lameness: data.clinicalScoringData?.lameness,
          comment: data.clinicalScoringData?.comment,
          farmId: farm.id,
        },
      });
    }

    if (data.scoreData) {
      const score = await prisma.score.create({
        data: {
          absence_of_prolonged_hunger: data.scoreData?.absence_of_prolonged_hunger,
          absence_of_prolonged_thirst: data.scoreData?.absence_of_prolonged_thirst,
          comfort_around_resting: data.scoreData?.comfort_around_resting,
          ease_of_movement: data.scoreData?.ease_of_movement,
          absence_of_injuries: data.scoreData?.absence_of_injuries,
          absence_of_disease: data.scoreData?.absence_of_disease,
          absence_of_pain: data.scoreData?.absence_of_pain,
          expression_of_social_behaviors: data.scoreData?.expression_of_social_behaviors,
          expression_of_other_behaviors: data.scoreData?.expression_of_other_behaviors,
          good_human_animal_relationship: data.scoreData?.good_human_animal_relationship,
          positive_emotional_state: data.scoreData?.positive_emotional_state,
          principle_good_feeding: data.scoreData?.principle_good_feeding,
          principle_good_housing: data.scoreData?.principle_good_housing,
          principle_good_health: data.scoreData?.principle_good_health,
          principle_good_behavior: data.scoreData?.principle_good_behavior,
          welfare_category: data.scoreData?.welfare_category,
          farmId: farm.id,
        },
      });
    }

    if (data.contactPersonData) {
      const contactPerson = await prisma.contactPerson.create({
        data: {
          name: data.contactPersonData?.name,
          phone_a: data.contactPersonData?.phone_a,
          phone_b: data.contactPersonData?.phone_b,
          email: data.contactPersonData?.email,
          farmId: farm.id,
        },
      });
    }

    const herd = await prisma.herd.create({
      data: {
        farmId: farm.id,
      },
    });

    if (data.managementQuestionnaireData) {
      const managementQuestionnaire = await prisma.managementQuestionnaire.create({
        data: {
          temp_in: data.managementQuestionnaireData?.temp_in,
          temp_out: data.managementQuestionnaireData?.temp_out,
          pasture_access: data.managementQuestionnaireData?.pasture_access,
          pasture_days_year: data.managementQuestionnaireData?.pasture_days_year,
          pasture_hours_day: data.managementQuestionnaireData?.pasture_hours_day,
          pasture_days_comment: data.managementQuestionnaireData?.pasture_days_comment,
          outdoor_access: data.managementQuestionnaireData?.outdoor_access,
          outdoor_days_year: data.managementQuestionnaireData?.outdoor_days_year,
          outdoor_hours_day: data.managementQuestionnaireData?.outdoor_hours_day,
          loose_housed: data.managementQuestionnaireData?.loose_housed,
          nr_dystocia_12_mos: data.managementQuestionnaireData?.nr_dystocia_12_mos,
          nr_downercows_12_mos: data.managementQuestionnaireData?.nr_downercows_12_mos,
          nr_mortality_12_mos: data.managementQuestionnaireData?.nr_mortality_12_mos,
          disb_deho_on_farm: data.managementQuestionnaireData?.disb_deho_on_farm,
          disb_deho_method: data.managementQuestionnaireData?.disb_deho_method,
          hot_air: data.managementQuestionnaireData?.hot_air,
          disb_deho_anaesthesia: data.managementQuestionnaireData?.disb_deho_anaesthesia,
          disb_deho_analgesia: data.managementQuestionnaireData?.disb_deho_analgesia,
          td_on_farm: data.managementQuestionnaireData?.td_on_farm,
          td_method: data.managementQuestionnaireData?.td_method,
          td_anaesthesia: data.managementQuestionnaireData?.td_anaesthesia,
          td_analgesia: data.managementQuestionnaireData?.td_analgesia,
          calf_mother_time: data.managementQuestionnaireData?.calf_mother_time,
          singlebox_time: data.managementQuestionnaireData?.singlebox_time,
          milk_volume_daily: data.managementQuestionnaireData?.milk_volume_daily,
          colostrum_volume: data.managementQuestionnaireData?.colostrum_volume,
          concentrate_age: data.managementQuestionnaireData?.concentrate_age,
          roughage_age: data.managementQuestionnaireData?.roughage_age,
          water_age: data.managementQuestionnaireData?.water_age,
          fav_cow: data.managementQuestionnaireData?.fav_cow,
          special_measure: data.managementQuestionnaireData?.special_measure,
          special_measure_desc: data.managementQuestionnaireData?.special_measure_desc,
          nr_milkrec_3mos: data.managementQuestionnaireData?.nr_milkrec_3mos,
          avg_dairy_cow_12mos: data.managementQuestionnaireData?.avg_dairy_cow_12mos,
          avg_calvings_year: data.managementQuestionnaireData?.avg_calvings_year,
          pct_scc400k_3mos: data.managementQuestionnaireData?.pct_scc400k_3mos,
          herdId: herd.id, // Associate with the created herd (make sure to replace `herdId` with the actual variable used)
        },
      });
    }

    if (data.qualitativeBehaviourAnalysisData) {
      const qualitativeBehaviourAnalysis = await prisma.qualitativeBehaviourAnalysis.create({
        data: {
          active: data.qualitativeBehaviourAnalysisData?.active,
          relaxed: data.qualitativeBehaviourAnalysisData?.relaxed,
          fearful: data.qualitativeBehaviourAnalysisData?.fearful,
          agitated: data.qualitativeBehaviourAnalysisData?.agitated,
          calm: data.qualitativeBehaviourAnalysisData?.calm,
          content: data.qualitativeBehaviourAnalysisData?.content,
          indifferent: data.qualitativeBehaviourAnalysisData?.indifferent,
          frustrated: data.qualitativeBehaviourAnalysisData?.frustrated,
          friendly: data.qualitativeBehaviourAnalysisData?.friendly,
          bored: data.qualitativeBehaviourAnalysisData?.bored,
          playful: data.qualitativeBehaviourAnalysisData?.playful,
          positively_occupied: data.qualitativeBehaviourAnalysisData?.positively_occupied,
          lively: data.qualitativeBehaviourAnalysisData?.lively,
          inquisitive: data.qualitativeBehaviourAnalysisData?.inquisitive,
          irritable: data.qualitativeBehaviourAnalysisData?.irritable,
          calmless_uneasy: data.qualitativeBehaviourAnalysisData?.calmless_uneasy,
          sociable: data.qualitativeBehaviourAnalysisData?.sociable,
          apathetic: data.qualitativeBehaviourAnalysisData?.apathetic,
          happy: data.qualitativeBehaviourAnalysisData?.happy,
          distressed: data.qualitativeBehaviourAnalysisData?.distressed,
          herdId: herd.id,
        },
      });
    }

    if (data.lyingTimeAndCollissionData) {
      const lyingTimeAndCollision = await prisma.lyingTimeAndCollision.create({
        data: {
          lie_t: data.lyingTimeAndCollissionData?.lie_t,
          collision: data.lyingTimeAndCollissionData?.collision,
          herdId: herd.id,
        }
      });
    }

    if (data.groupData) {
      const group = await prisma.group.create({
        data: {
          group_name: data.groupData?.group_name,
          group_size: data.groupData?.group_size,
          group_sample: data.groupData?.group_sample,
          farmId: farm.id,
        },
      });
    }

    if (data.socialBehaviourAndCoughingData) {
      const socialBehaviourAndCouching = await prisma.socialBehaviourAndCoughing.create({
        data: {
          segment: data.socialBehaviourAndCoughingData?.segment,
          group_name: data.socialBehaviourAndCoughingData?.group_name,
          start: data.socialBehaviourAndCoughingData?.start,
          finish: data.socialBehaviourAndCoughingData?.finish,
          duration: data.socialBehaviourAndCoughingData?.duration,
          standing_start: data.socialBehaviourAndCoughingData?.standing_start,
          standing_finish: data.socialBehaviourAndCoughingData?.standing_finish,
          eat_drink_start: data.socialBehaviourAndCoughingData?.eat_drink_start,
          eat_drink_finish: data.socialBehaviourAndCoughingData?.eat_drink_finish,
          lying_start: data.socialBehaviourAndCoughingData?.lying_start,
          lying_finish: data.socialBehaviourAndCoughingData?.lying_finish,
          sum_start: data.socialBehaviourAndCoughingData?.sum_start,
          sum_finish: data.socialBehaviourAndCoughingData?.sum_finish,
          lying_out_start: data.socialBehaviourAndCoughingData?.lying_out_start,
          lying_out_finish: data.socialBehaviourAndCoughingData?.lying_out_finish,
          headbutt: data.socialBehaviourAndCoughingData?.headbutt,
          displacement: data.socialBehaviourAndCoughingData?.displacement,
          fighting: data.socialBehaviourAndCoughingData?.fighting,
          chasing: data.socialBehaviourAndCoughingData?.chasing,
          chasing_up: data.socialBehaviourAndCoughingData?.chasing_up,
          coughing: data.socialBehaviourAndCoughingData?.coughing,
          farmId: farm.id,
        },
      });
    }

    if (data.avoidanceDistanceData) {
      const avoidanceDistanceTest = await prisma.avoidanceDistanceTest.create({
        data: {
          group_name: data.avoidanceDistanceData?.group_name,
          ear_tag: data.avoidanceDistanceData?.ear_tag,
          side: data.avoidanceDistanceData?.side,
          a_d_t1: data.avoidanceDistanceData?.a_d_t1,
          a_d_t2: data.avoidanceDistanceData?.a_d_t2,
          nasal_discharge: data.avoidanceDistanceData?.nasal_discharge,
          ocular_discharge: data.avoidanceDistanceData?.ocular_discharge,
          comment: data.avoidanceDistanceData?.comment,
          farmId: farm.id,
        },
      });
    }

    if (data.resourcesData) {
      const resources = await prisma.resources.create({
        data: {
          group_name: data.resourcesData?.group_name,
          nr_wps: data.resourcesData?.nr_wps,
          farmId: farm.id,
        },
      });
    }

    if (data.waterPointData) {
      const waterPoint = await prisma.waterPoint.create({
        data: {
          group_name: data.waterPointData?.group_name,
          nr_animals_using_wps: data.waterPointData?.nr_animals_using_wps,
          type: data.waterPointData?.type,
          troughlength: data.waterPointData?.troughlength,
          cleanliness: data.waterPointData?.cleanliness,
          functioning: data.waterPointData?.functioning,
          waterflow: data.waterPointData?.waterflow,
          farmId: farm.id,
        },
      });
    }

    // Return a success response
    return NextResponse.json({ message: 'Data saved successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error saving data:', error);
    return NextResponse.json({ message: 'Failed to save data', error }, { status: 500 });
  }
}
