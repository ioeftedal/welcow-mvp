import { Anchor, Grid, GridCol, Text } from "@mantine/core";
import { IconSnowflake } from "@tabler/icons-react";

export default function Footer() {
  return (
    <Grid
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        backgroundColor: "#009a80",
        color: "white",
        height: 200,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        zIndex: 1000,
      }}
    >
      <GridCol style={{ display: "flex", justifyContent: "center", alignItems: "center" }} span="auto">
        <Anchor size="lg" href="https://www.eiklab.no/" style={{ color: "white" }}>Made by Eik </Anchor>
        <IconSnowflake size={16} style={{ marginLeft: 5 }} />
      </GridCol>
    </Grid>
  );
}
