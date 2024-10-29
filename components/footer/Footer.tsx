import { Grid, GridCol, Text } from "@mantine/core";

export default function Footer() {
  return (
    <Grid
      style={{
        backgroundColor: "tan",
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GridCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }} span="auto">
        <Text>Made by Eik</Text>
      </GridCol>
    </Grid>
  );
}
