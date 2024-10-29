import { Button, Grid, GridCol, Title } from "@mantine/core";

export default function Header() {
  return (
    <Grid style={{ height: 150 }} align="center">

      <GridCol span={4} style={{ height: '100%' }}>
        <Button>User</Button>
      </GridCol>

      <GridCol span={4} style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <Title>Kutrivsel / WelCow</Title>
      </GridCol>

      <GridCol span={4} style={{ display: 'flex', justifyContent: 'flex-end', height: '100%' }}>
        <Button>Log In</Button>
      </GridCol>

    </Grid>
  );
}
