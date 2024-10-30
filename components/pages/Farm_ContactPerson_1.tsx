import { Button, Checkbox, Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultFarm, Farm } from "../../forms/farm_1";
import { defaultContactPerson, ContactPerson } from "../../forms/contactPerson_1";
import axios from 'axios';

// const fetchUserData = async (userId: string) => {
//   if (!userId) return;
//   try {
//     const response = await axios.get(`https://login.auth0.com/api/v2/users/${userId}`, {
//       headers: {
//         'Accept': 'application/json'
//       }
//     });
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://login.auth0.com/api/v2/users/:id',
//   headers: {
//     'Accept': 'application/json'
//   }
// };
//
// axios.request(config)
//   .then((response) => {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch((error) => {
//     console.log(error);
//   });

export default function FirstPage() {
  const [farmData, setFarmData] = useState<Farm>(() => {
    const savedFarmData = localStorage.getItem("farmData");
    return savedFarmData ? JSON.parse(savedFarmData) : defaultFarm();
  });

  const [contactPersonData, setContactPerson] = useState<ContactPerson>(() => {
    const savedContactPersonData = localStorage.getItem("contactPersonData");
    return savedContactPersonData ? JSON.parse(savedContactPersonData) : defaultContactPerson();
  });

  // Store `farmData` in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("farmData", JSON.stringify(farmData));
  }, [farmData]);

  // Store `contactPersonData` in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("contactPersonData", JSON.stringify(contactPersonData));
  }, [contactPersonData]);


  // useEffect(() => {
  //   const userId = "some-user-id"; // Replace this with the actual user ID
  //   const loadUserData = async () => {
  //     const userData = await fetchUserData(userId);
  //     if (userData) {
  //       setFarmData(prevData => ({ ...prevData, user_id: userData.user_id }));
  //     }
  //   };
  //   loadUserData();
  // }, []);
  //

  return (
    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Farm Details</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Country"
            value={farmData.country || ""}
            onChange={(e) => setFarmData({ ...farmData, country: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Address"
            value={farmData.address || ""}
            onChange={(e) => setFarmData({ ...farmData, address: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="ZIP"
            value={farmData.zip || ""}
            onChange={(e) => setFarmData({ ...farmData, zip: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Town"
            value={farmData.town || ""}
            onChange={(e) => setFarmData({ ...farmData, town: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Visit Date Arranged"
            value={farmData.visit_date_arranged}
            onChange={(e) => setFarmData({ ...farmData, visit_date_arranged: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Actual Visit Date"
            value={farmData.visit_date_actual || ""}
            onChange={(e) => setFarmData({ ...farmData, visit_date_actual: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="ID"
            value={farmData.id_number}
            onChange={(e) => setFarmData({ ...farmData, id_number: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <Checkbox
            label="Visit Completed"
            checked={farmData.visit_completed || false}
            onChange={(e) => setFarmData({ ...farmData, visit_completed: e.currentTarget.checked })}
          />
        </GridCol>

        <GridCol>
          <Title>Contact Info</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Name"
            value={contactPersonData.name}
            onChange={(e) => setContactPerson({ ...contactPersonData, name: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="E-Mail"
            value={contactPersonData.email || ""}
            onChange={(e) => setContactPerson({ ...contactPersonData, email: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Phone A"
            value={contactPersonData.phone_a}
            onChange={(e) => setContactPerson({ ...contactPersonData, phone_a: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Phone B (optional)"
            value={contactPersonData.phone_b || ""}
            onChange={(e) => setContactPerson({ ...contactPersonData, phone_b: e.target.value })}
          />
        </GridCol>

      </Grid>
    </Fieldset>
  );
}
