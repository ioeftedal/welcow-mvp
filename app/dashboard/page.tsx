'use client';

import { Button, Checkbox, Fieldset, Grid, GridCol, Table } from "@mantine/core";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IconCalculator, IconCheck, IconDownload, IconListCheck, IconX } from '@tabler/icons-react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Farm } from "../../forms/farm_1";

export default function Dashboard() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [elements, setElements] = useState<any[]>([]);
  const router = useRouter();
  const { user } = useUser();

  if (user === undefined) {
    router.push("/");
  }

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();

        if (user) {
          const filteredData = data.filter((element: Farm) => element.user_id === user.sub);
          setElements(Array.isArray(filteredData) ? filteredData : []);
        }

      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, [user]);

  const addVisit = () => {
    router.push("/add-visit");
  }

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.id}
      bg={selectedRows.includes(element.id_number) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.id_number)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.id_number]
                : selectedRows.filter((position) => position !== element.id_number)
            )
          }
        />
      </Table.Td>
      {/* <Table.Td>{element.id_number}</Table.Td> */}
      {/* <Table.Td>{element.id}</Table.Td> */}
      <Table.Td>{element.address}</Table.Td>
      <Table.Td>{element.contactPersons[0]?.name}</Table.Td>
      <Table.Td>{element.contactPersons[0]?.phone_a}</Table.Td>
      <Table.Td>{element.visit_date_arranged}</Table.Td>
      <Table.Td>{element.visit_completed ? <IconCheck /> : <IconX />}</Table.Td>
      <Table.Td>
        <Button leftSection={<IconListCheck size={14} />}>View</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <div>
      <Header />
      <Grid style={{ padding: 40, display: "flex", justifyContent: "center" }}>

        <GridCol span={8} style={{ margin: "auto" }}>
          <Button onClick={addVisit} size="lg" leftSection={<IconListCheck size={24} />} fullWidth>
            ADD VISIT
          </Button>
        </GridCol>

        <GridCol span={8} style={{ margin: "auto" }} >
          <Fieldset style={{ marginTop: 20, backgroundColor: "white" }}>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th />
                  {/* <Table.Th>ID Number</Table.Th> */}
                  {/* <Table.Th>ID</Table.Th> */}
                  <Table.Th>Address</Table.Th>
                  <Table.Th>Contact Person</Table.Th>
                  <Table.Th>Phone</Table.Th>
                  <Table.Th>Arranged Visit Date</Table.Th>
                  <Table.Th>Completed</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Fieldset>
        </GridCol>

        <GridCol span={8} style={{ margin: "auto" }}>
          <Button style={{ marginTop: 20 }} size="md" leftSection={<IconDownload size={20} />} fullWidth>
            EXPORT ALL DATA
          </Button>
        </GridCol>

        <GridCol span={12}></GridCol>
        <GridCol span={2}></GridCol>

        <GridCol span={4} style={{ marginLeft: 0 }}>
          <Button size="md" leftSection={<IconDownload size={16} />} fullWidth >
            HERD AND INDIVID DATA
          </Button>
        </GridCol>

        <GridCol span={4} style={{ marginRight: 0 }}>
          <Button size="md" leftSection={<IconDownload size={16} />} fullWidth >
            GROUP AND ADDITIONAL DATA
          </Button>
        </GridCol>

        <GridCol span={2}></GridCol>
        <GridCol span={12}></GridCol>

        <GridCol span={8} style={{ margin: "auto", marginTop: 20 }}>
          <Button style={{}} size="md" leftSection={<IconCalculator size={20} />} fullWidth>
            CALCULATE AND UPDATE SCORES IN DATABASE
          </Button>
        </GridCol>

      </Grid>
      <Footer />
    </div>
  );
}
