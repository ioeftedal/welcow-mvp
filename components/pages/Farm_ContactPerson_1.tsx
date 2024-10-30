import { Checkbox, Fieldset, Grid, GridCol, TextInput, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { defaultFarm, Farm } from "../../forms/farm_1";
import { defaultContactPerson, ContactPerson } from "../../forms/contactPerson_1";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function FirstPage() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  // // TODO: @IVAR: Fix this by routing person back to login
  // useEffect(() => {
  //   if (!isLoading && !user) {
  //     router.push("/");
  //   } else {
  //     throw Error();
  //   } [user, isLoading, router]
  // })


  const [farmData, setFarmData] = useState<Farm>(() => {
    const savedFarmData = localStorage.getItem("farmData");
    return savedFarmData ? JSON.parse(savedFarmData) : defaultFarm(user.sub);
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

  return (
    <Fieldset>
      <Grid>

        <GridCol>
          <Title>Farm Details</Title>
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="ID Number"
            value={farmData.id_number}
            onChange={(e) => setFarmData({ ...farmData, id_number: e.target.value })}
          />
        </GridCol>

        <GridCol span={6}>
          <TextInput
            label="Country"
            value={farmData.country || ""}
            onChange={(e) => setFarmData({ ...farmData, country: e.target.value })}
          />
        </GridCol>

        <GridCol span={12}>
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
