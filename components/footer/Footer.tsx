import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import classes from './FooterLinks.module.css';

const data = [

  {
    title: 'Kontakt',
    links: [
      { label: 'LavaDino', link: '' },
    ],
  },
];

export default function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image alt="mowell_logo.svg" src=".svg" />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2025 MoWell AS. All rights reserved.
        </Text>

      </Container>
    </footer>
  );
}
