import { Button, Grid, GridCol, Image, Title } from "@mantine/core";

export default function Login() {
  return (
    <Grid style={{ backgroundColor: "#009a80", height: 500, width: 700, borderRadius: 10, display: "flex", alignItems: "center", marginLeft: "auto", marginRight: "auto", marginTop: 100 }}>

      <GridCol span={12} >
        <Image style={{ display: "flex", margin: "auto" }} alt="logo"></Image>
      </GridCol>

      <GridCol span={12}>
        <Title style={{ display: "flex", color: "white", margin: "auto" }} fw={100}>Kutrivsel</Title>
        <Title style={{ display: "flex", color: "white", margin: "auto" }} fw={100}>WelCow</Title>
      </GridCol>

      <GridCol span={12} >
        <Button style={{ backgroundColor: " white", color: "black", width: 250, display: "flex", margin: "auto" }} component="a" href="/api/auth/login">LOGIN</Button>
      </GridCol>

      {/* <a href="/api/auth/logout">Logout</a> */}
    </Grid >
  )
}
