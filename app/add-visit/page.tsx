"use client";

import { useState } from 'react';
import { Button, Grid, GridCol, Group, Pagination } from '@mantine/core';
import FirstPage from '../../components/pages/Farm_ContactPerson_1';
import SecondPage from '../../components/pages/PreVisit_2';
import ThirdPage from '../../components/pages/ManagementQuestionnaire_3';
import FourthPage from '../../components/pages/AvoidanceDistanceTesting_4';
import FifthPage from '../../components/pages/QualitativeBehaviourAnalysis_5';
import SixthPage from '../../components/pages/Herd_LyingTimeAndCollision_6';
import SeventhPage from '../../components/pages/SocialBehaviourAndCoughing_7';
import EighthPage from '../../components/pages/Resources_WaterPoint_8';
import NinthPage from '../../components/pages/ClinicalScoring_9';
import TenthPage from '../../components/pages/Score_10';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


export default function AddVisit() {
  const [activePage, setActivePage] = useState(1);


  // Define keys for each dataset
  const dataSets = [
    "farmData",
    "contactPersonData",
    "clinicalScoringData",
    "managementQuestionnaireData",
    "preVisitData",
    "qualitativeBehaviourAnalysisData",
    "resourcesData",
    "waterPointData",
    "avoidanceDistanceData",
    "herdData",
    "lyingTimeAndCollissionData",
    "socialBehaviourAndCoughingData",
    "groupData",
    "scoreData"
  ];

  // Gather data for each dataset and add to formData object
  const gatherDataFromLocalStorage = () => {
    const formData: Record<string, unknown> = {}; // Specify the type for formData

    dataSets.forEach((dataSet) => {
      const storedItem = localStorage.getItem(dataSet);
      if (storedItem) {
        try {
          // Parse the JSON data and assign it to formData[dataSet]
          formData[dataSet] = JSON.parse(storedItem);
        } catch (error) {
          console.error(`Error parsing ${dataSet}:`, error);
          formData[dataSet] = storedItem; // Store raw data if parsing fails
        }
      }
    });

    return formData; // Return structured formData with each dataset under its own key
  };

  // Handle form submission and send each key's data in the request body
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = gatherDataFromLocalStorage();
    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) // Send each section as a separate key in the body
      });
      if (response.ok) {
        console.log("Data posted successfully!");
      } else {
        console.error("Failed to post data:", response.statusText);
      }
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setActivePage(page);
  };

  const handleNextPage = () => {
    if (activePage < 10) {
      setActivePage(activePage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (activePage > 1) {
      setActivePage(activePage - 1);
    }
  };

  // Render the corresponding page based on activePage value
  const renderPage = () => {
    switch (activePage) {
      case 1:
        return <FirstPage />;
      case 2:
        return <SecondPage />;
      case 3:
        return <ThirdPage />;
      case 4:
        return <FourthPage />;
      case 5:
        return <FifthPage />;
      case 6:
        return <SixthPage />;
      case 7:
        return <SeventhPage />;
      case 8:
        return <EighthPage />;
      case 9:
        return <NinthPage />;
      case 10:
        return <TenthPage />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header />
      <Pagination.Root
        value={activePage}
        onChange={handlePageChange}
        siblings={7}
        total={10}
        color='#009a80'
        style={{ paddingTop: 40, paddingBlock: 40 }}
        size="lg"
      >
        <Group gap={9} justify="center">
          <Pagination.First />
          <Pagination.Previous />
          <Pagination.Items />
          <Pagination.Next />
          <Pagination.Last />
        </Group>
      </Pagination.Root>

      <Grid>
        <GridCol span={{ xs: 0, sm: 1, md: 2, lg: 2 }}></GridCol>
        <GridCol span={{ xs: 12, sm: 10, md: 8, lg: 8 }}>
          {renderPage()}
        </GridCol>
        <GridCol span={{ xs: 0, sm: 1, md: 2, lg: 2 }}></GridCol>
      </Grid>

      <Grid style={{ marginTop: 50, marginBottom: 100 }}>
        <GridCol span={2}></GridCol>
        <GridCol span={4}>
          <Button size="md" fullWidth onClick={handlePreviousPage}>Previous</Button>
        </GridCol>
        <GridCol span={4}>
          <Button size="md" fullWidth onClick={activePage === 11 ? handleSubmit : handleNextPage}>
            {activePage === 10 ? "Submit" : "Next"}
          </Button>
        </GridCol>
        <GridCol span={2}></GridCol>
      </Grid>

    </div>
  );
}
