
import { Button, Grid, GridCol, Image, Text } from "@mantine/core";
import { IconHomeFilled, IconLogout2 } from "@tabler/icons-react";

export default function Header() {
  function deleteLocalStorage() {
    localStorage.clear();
  }

  return (
    <Grid
      style={{ padding: 35, borderBottom: '2px solid #009a80', backgroundColor: "#d1e8df" }}
      align="center"
      justify="space-between" // This will distribute space between items
    >
      <GridCol span={8} style={{ display: 'flex', alignItems: 'center' }}> {/* Center text vertically */}
        <Image
          src="nmbu_green.png"
          style={{ width: 100, height: 100 }}
          alt="logo"
        />
        <Text style={{ color: '#009a80', fontSize: 40, fontWeight: "bold", marginLeft: 20 }}>
          Kutrivsel / WelCow
        </Text>
      </GridCol>

      <GridCol span="content" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '10px' }}>
        <Button
          style={{
            height: 50,
          }}
          component="a"
          href="/dashboard"
          leftSection={<IconHomeFilled size={18} />}
        >
          DASHBOARD
        </Button>

        <Button
          style={{
            height: 50,
            backgroundColor: "#e75244",
          }}
          onClick={deleteLocalStorage}
          component="a"
          href="api/auth/logout"
          leftSection={<IconLogout2 size={18} />}
        >
          LOG OUT
        </Button>
      </GridCol>
    </Grid>
  );
}
