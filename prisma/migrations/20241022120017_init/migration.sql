-- CreateTable
CREATE TABLE "Farm" (
    "id" UUID NOT NULL,
    "country" TEXT,
    "address" TEXT,
    "zip" TEXT,
    "town" TEXT,
    "visit_date_arranged" TEXT NOT NULL,
    "visit_date_actual" TEXT,
    "id_number" TEXT NOT NULL,
    "visit_completed" BOOLEAN DEFAULT false,

    CONSTRAINT "Farm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PreVisit" (
    "id" UUID NOT NULL,
    "herd_size" INTEGER,
    "sample_size" INTEGER,
    "nr_groups" INTEGER,
    "pregheifers_mixed" BOOLEAN,
    "drycows_mixed" BOOLEAN,
    "bull" BOOLEAN,
    "bull_sep" INTEGER,
    "feeding" TEXT,
    "milking_system" INTEGER,
    "morning_routines" TEXT,
    "headlock" BOOLEAN,
    "nr_headlocks" INTEGER,
    "on_pasture" BOOLEAN,
    "date_last_claw_trim" TEXT,
    "interference" TEXT,
    "stockperson_available" BOOLEAN,
    "farmId" UUID NOT NULL,

    CONSTRAINT "PreVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Score" (
    "id" UUID NOT NULL,
    "absence_of_prolonged_hunger" REAL NOT NULL,
    "absence_of_prolonged_thirst" REAL NOT NULL,
    "comfort_around_resting" REAL NOT NULL,
    "ease_of_movement" REAL NOT NULL,
    "absence_of_injuries" REAL NOT NULL,
    "absence_of_disease" REAL NOT NULL,
    "absence_of_pain" REAL NOT NULL,
    "expression_of_social_behaviors" REAL NOT NULL,
    "expression_of_other_behaviors" REAL NOT NULL,
    "good_human_animal_relationship" REAL NOT NULL,
    "positive_emotional_state" REAL NOT NULL,
    "principle_good_feeding" REAL NOT NULL,
    "principle_good_housing" REAL NOT NULL,
    "principle_good_health" REAL NOT NULL,
    "principle_good_behavior" REAL NOT NULL,
    "welfare_category" TEXT NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContactPerson" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone_a" TEXT NOT NULL,
    "phone_b" TEXT,
    "email" TEXT,
    "farmId" UUID NOT NULL,

    CONSTRAINT "ContactPerson_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Herd" (
    "id" UUID NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "Herd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LyingTimeAndCollision" (
    "id" SERIAL NOT NULL,
    "lie_t" REAL NOT NULL,
    "collision" TEXT NOT NULL,
    "herdId" UUID NOT NULL,

    CONSTRAINT "LyingTimeAndCollision_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManagementQuestionnaire" (
    "id" UUID NOT NULL,
    "temp_in" REAL,
    "temp_out" REAL,
    "pasture_access" BOOLEAN NOT NULL,
    "pasture_days_year" INTEGER NOT NULL,
    "pasture_hours_day" INTEGER NOT NULL,
    "pasture_days_comment" TEXT,
    "outdoor_access" BOOLEAN,
    "outdoor_days_year" INTEGER,
    "outdoor_hours_day" INTEGER,
    "loose_housed" BOOLEAN NOT NULL,
    "nr_dystocia_12_mos" INTEGER NOT NULL,
    "nr_downercows_12_mos" INTEGER NOT NULL,
    "nr_mortality_12_mos" INTEGER NOT NULL,
    "disb_deho_on_farm" INTEGER NOT NULL,
    "disb_deho_method" INTEGER NOT NULL,
    "hot_air" INTEGER,
    "disb_deho_anaesthesia" INTEGER NOT NULL,
    "disb_deho_analgesia" INTEGER NOT NULL,
    "td_on_farm" INTEGER NOT NULL,
    "td_method" INTEGER NOT NULL,
    "td_anaesthesia" INTEGER NOT NULL,
    "td_analgesia" INTEGER NOT NULL,
    "calf_mother_time" INTEGER,
    "singlebox_time" INTEGER,
    "milk_volume_daily" REAL,
    "colostrum_volume" REAL,
    "concentrate_age" INTEGER,
    "roughage_age" INTEGER,
    "water_age" INTEGER,
    "fav_cow" BOOLEAN,
    "special_measure" BOOLEAN,
    "special_measure_desc" TEXT,
    "nr_milkrec_3mos" INTEGER,
    "avg_dairy_cow_12mos" INTEGER,
    "avg_calvings_year" INTEGER,
    "pct_scc400k_3mos" REAL,
    "herdId" UUID NOT NULL,

    CONSTRAINT "ManagementQuestionnaire_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QualitativeBehaviourAnalysis" (
    "id" UUID NOT NULL,
    "active" INTEGER NOT NULL,
    "relaxed" INTEGER NOT NULL,
    "fearful" INTEGER NOT NULL,
    "agitated" INTEGER NOT NULL,
    "calm" INTEGER NOT NULL,
    "content" INTEGER NOT NULL,
    "indifferent" INTEGER NOT NULL,
    "frustrated" INTEGER NOT NULL,
    "friendly" INTEGER NOT NULL,
    "bored" INTEGER NOT NULL,
    "playful" INTEGER NOT NULL,
    "positively_occupied" INTEGER NOT NULL,
    "lively" INTEGER NOT NULL,
    "inquisitive" INTEGER NOT NULL,
    "irritable" INTEGER NOT NULL,
    "calmless_uneasy" INTEGER NOT NULL,
    "sociable" INTEGER NOT NULL,
    "apathetic" INTEGER NOT NULL,
    "happy" INTEGER NOT NULL,
    "distressed" INTEGER NOT NULL,
    "herdId" UUID NOT NULL,

    CONSTRAINT "QualitativeBehaviourAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "group_size" INTEGER NOT NULL,
    "group_sample" INTEGER NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SocialBehaviourAndCoughing" (
    "id" UUID NOT NULL,
    "segment" TEXT NOT NULL,
    "group_name" TEXT NOT NULL,
    "start" TEXT NOT NULL,
    "finish" TEXT NOT NULL,
    "duration" REAL NOT NULL,
    "standing_start" INTEGER NOT NULL,
    "standing_finish" INTEGER NOT NULL,
    "eat_drink_start" INTEGER NOT NULL,
    "eat_drink_finish" INTEGER NOT NULL,
    "lying_start" INTEGER NOT NULL,
    "lying_finish" INTEGER NOT NULL,
    "sum_start" INTEGER NOT NULL,
    "sum_finish" INTEGER NOT NULL,
    "lying_out_start" INTEGER NOT NULL,
    "lying_out_finish" INTEGER NOT NULL,
    "headbutt" INTEGER NOT NULL,
    "displacement" INTEGER NOT NULL,
    "fighting" INTEGER NOT NULL,
    "chasing" INTEGER NOT NULL,
    "chasing_up" INTEGER NOT NULL,
    "coughing" INTEGER NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "SocialBehaviourAndCoughing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Resources" (
    "id" UUID NOT NULL,
    "group_name" TEXT NOT NULL,
    "nr_wps" INTEGER NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "Resources_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaterPoint" (
    "id" SERIAL NOT NULL,
    "group_name" TEXT NOT NULL,
    "nr_animals_using_wps" INTEGER,
    "type" INTEGER NOT NULL,
    "troughlength" INTEGER,
    "cleanliness" INTEGER NOT NULL,
    "functioning" TEXT NOT NULL,
    "waterflow" TEXT NOT NULL,
    "farmId" UUID NOT NULL,

    CONSTRAINT "WaterPoint_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AvoidanceDistanceTest" (
    "id" UUID NOT NULL,
    "group_name" TEXT NOT NULL,
    "ear_tag" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "a_d_t1" INTEGER NOT NULL,
    "a_d_t2" INTEGER,
    "nasal_discharge" TEXT NOT NULL,
    "ocular_discharge" TEXT NOT NULL,
    "comment" TEXT,
    "farmId" UUID NOT NULL,

    CONSTRAINT "AvoidanceDistanceTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClinicalScoring" (
    "id" UUID NOT NULL,
    "group_name" TEXT NOT NULL,
    "ear_tag" TEXT NOT NULL,
    "side" TEXT NOT NULL,
    "breed" INTEGER NOT NULL,
    "bcs_wq" INTEGER NOT NULL,
    "bcs_std" REAL,
    "clean_scr_lower_hindleg" INTEGER NOT NULL,
    "clean_scr_upper_hindleg" INTEGER NOT NULL,
    "clean_scr_udderwq" INTEGER NOT NULL,
    "clean_scr_udder" INTEGER,
    "clean_scr_teats" INTEGER,
    "integ_tarsus" INTEGER NOT NULL,
    "nr_hairless_tarsus" INTEGER,
    "nr_lesion_tarsus" INTEGER,
    "nr_swelling_tarsus" INTEGER,
    "integ_hindquarter" INTEGER NOT NULL,
    "nr_hairless_hq" INTEGER,
    "nr_lesion_hq" INTEGER,
    "nr_swelling_hq" INTEGER,
    "integ_neck_shoulder_back" INTEGER NOT NULL,
    "nr_hairless_nsb" INTEGER,
    "nr_lesion_nsb" INTEGER,
    "nr_swelling_nsb" INTEGER,
    "integ_carpus" INTEGER NOT NULL,
    "nr_hairless_carpus" INTEGER,
    "nr_lesion_carpus" INTEGER,
    "nr_swelling_carpus" INTEGER,
    "integ_flank_side_udder" INTEGER NOT NULL,
    "nr_hairless_fsu" INTEGER,
    "nr_lesion_fsu" INTEGER,
    "nr_swelling_fsu" INTEGER,
    "integ_other" INTEGER NOT NULL,
    "integ_other_specify" TEXT,
    "tail_broken" INTEGER,
    "hampered_respiration" INTEGER NOT NULL,
    "diarrhoea" INTEGER NOT NULL,
    "vulval_discharge" INTEGER NOT NULL,
    "lameness" INTEGER NOT NULL,
    "comment" TEXT,
    "farmId" UUID NOT NULL,

    CONSTRAINT "ClinicalScoring_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PreVisit_farmId_key" ON "PreVisit"("farmId");

-- CreateIndex
CREATE UNIQUE INDEX "Score_farmId_key" ON "Score"("farmId");

-- CreateIndex
CREATE UNIQUE INDEX "Herd_farmId_key" ON "Herd"("farmId");

-- CreateIndex
CREATE UNIQUE INDEX "ManagementQuestionnaire_herdId_key" ON "ManagementQuestionnaire"("herdId");

-- CreateIndex
CREATE UNIQUE INDEX "QualitativeBehaviourAnalysis_herdId_key" ON "QualitativeBehaviourAnalysis"("herdId");

-- AddForeignKey
ALTER TABLE "PreVisit" ADD CONSTRAINT "PreVisit_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContactPerson" ADD CONSTRAINT "ContactPerson_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Herd" ADD CONSTRAINT "Herd_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LyingTimeAndCollision" ADD CONSTRAINT "LyingTimeAndCollision_herdId_fkey" FOREIGN KEY ("herdId") REFERENCES "Herd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManagementQuestionnaire" ADD CONSTRAINT "ManagementQuestionnaire_herdId_fkey" FOREIGN KEY ("herdId") REFERENCES "Herd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QualitativeBehaviourAnalysis" ADD CONSTRAINT "QualitativeBehaviourAnalysis_herdId_fkey" FOREIGN KEY ("herdId") REFERENCES "Herd"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Group" ADD CONSTRAINT "Group_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SocialBehaviourAndCoughing" ADD CONSTRAINT "SocialBehaviourAndCoughing_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Resources" ADD CONSTRAINT "Resources_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaterPoint" ADD CONSTRAINT "WaterPoint_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AvoidanceDistanceTest" ADD CONSTRAINT "AvoidanceDistanceTest_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClinicalScoring" ADD CONSTRAINT "ClinicalScoring_farmId_fkey" FOREIGN KEY ("farmId") REFERENCES "Farm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
