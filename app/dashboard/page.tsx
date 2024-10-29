'use client';

import { Button, Checkbox, Fieldset, Grid, GridCol, Table } from "@mantine/core";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { IconCheck, IconDownload, IconListCheck, IconX } from '@tabler/icons-react';
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [elements, setElements] = useState<any[]>([]); // Replace 'any' with your specific type if known

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api'); // Adjust the endpoint as necessary
        const data = await response.json();
        setElements(data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

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
      <Table.Td>{element.id_number}</Table.Td>
      <Table.Td>{element.id}</Table.Td>
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
      <Grid>

        <GridCol span={12}>
          <Button size="lg" leftSection={<IconListCheck size={24} />} fullWidth>
            ADD VISIT
          </Button>
        </GridCol>

        <GridCol span={12}>
          <Fieldset>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th />
                  <Table.Th>ID Number</Table.Th>
                  <Table.Th>ID</Table.Th>
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

        <GridCol span={12}>
          <Button size="md" leftSection={<IconDownload size={20} />} fullWidth>
            EXPORT ALL DATA
          </Button>
        </GridCol>

        <GridCol span={6}>
          <Button leftSection={<IconDownload size={16} />} fullWidth>
            HERD AND INDIVID DATA
          </Button>
        </GridCol>

        <GridCol span={6}>
          <Button leftSection={<IconDownload size={16} />} fullWidth>
            GROUP AND ADDITIONAL DATA
          </Button>
        </GridCol>

        <GridCol span={12}>
          <Button size="md" style={{ marginTop: 50 }} leftSection={<IconDownload size={20} />} fullWidth>
            CALCULATE AND UPDATE SCORES IN DATABASE
          </Button>
        </GridCol>

      </Grid>
      <Footer />
    </div>
  );
}
