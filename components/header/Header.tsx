import { Button, Divider, Grid, GridCol } from "@mantine/core";

export default function Header() {
  return (
    <Grid>

      <GridCol style={{ marginLeft: '30px' }} span="auto">
        <Button>Logo</Button>
      </GridCol>

      <GridCol span={2}>
        <Button>Dashboard</Button>
      </GridCol>

      <GridCol span={2}>
        <Button>Log In</Button>
      </GridCol>

    </Grid>
  )
}
