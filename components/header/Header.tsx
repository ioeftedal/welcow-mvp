import { Button, Grid, GridCol, Title } from "@mantine/core";

export default function Header() {
  return (
    <Grid style={{ height: 100, paddingTop: 20, paddingBottom: 20 }} align="center">

      <GridCol span={4} style={{ height: '100%' }}>
        <Button>User</Button>
      </GridCol>

      <GridCol span={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <Title style={{ color: '#009a80' }}>Kutrivsel / WelCow</Title>
      </GridCol>

      <GridCol span={4} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button component="a" href="api/auth/logout">Log Out</Button>
      </GridCol>

    </Grid>
  );
}
