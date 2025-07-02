import {
  Group,
  Button,
  Text,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Image,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconHomeFilled,
  IconLogout2,
} from '@tabler/icons-react';
import classes from './Header.module.css';

export default function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  function deleteLocalStorage() {
    localStorage.clear();
  }


  return (
    <Box pb={20}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Image alt="mowell_logo" src={""} style={{ maxWidth: 160 }} />

          <Group
            h="100%"
            gap={0}
            visibleFrom="sm"
            style={{ display: "flex", justifyContent: "center" }}>
            <Text size='xl' style={{ color: "#000", fontSize: 70 }}>MoWell</Text>
          </Group>

          <Group visibleFrom="sm">

            <Button
              style={{ height: 50 }}
              component="a"
              href="/dashboard"
              leftSection={<IconHomeFilled size={18} />}
            >
              DASHBOARD
            </Button>

            <Button
              style={{
                backgroundColor: "#e75244",
                height: 50,
              }}
              onClick={deleteLocalStorage}
              component="a"
              href="api/auth/logout"
              leftSection={<IconLogout2 size={18} />}
            >
              LOG OUT
            </Button>

          </Group>

          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">

            <Button
              style={{ height: 50 }}
              component="a"
              href="/dashboard"
              leftSection={<IconHomeFilled size={18} />}
            >
              DASHBOARD
            </Button>

            <Button
              style={{
                backgroundColor: "#e75244",
                height: 50,
              }}
              onClick={deleteLocalStorage}
              component="a"
              href="api/auth/logout"
              leftSection={<IconLogout2 size={18} />}
            >
              LOG OUT
            </Button>

          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
