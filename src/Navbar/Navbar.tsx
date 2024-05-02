import { useState } from 'react';
import { Text } from '@mantine/core';

import classes from './Navbar.module.css';

const navItems = ['Movies', 'Rated movies'];

export function Navbar() {
  const [active, setActive] = useState('Movies');

  const navElems = navItems.map((item) => (
    <a
      className={classes.link}
      data-active={item === active || undefined}
      href={'/' + item}
      key={item}
      onClick={(event) => {
        event.preventDefault();
        setActive(item);
      }}
    >
      <span>{item}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div>
        <Text fw={500} size="sm" className={classes.title} c="dimmed" mb="xs">
          ArrowFlicks
        </Text>
      </div>

      <div className={classes.navbarMain}>{navElems}</div>
    </nav>
  );
}
