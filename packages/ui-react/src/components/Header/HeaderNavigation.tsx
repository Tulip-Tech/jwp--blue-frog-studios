import React, { useRef } from 'react';
import classNames from 'classnames';
import useBreakpoint, { Breakpoint } from '@jwp/ott-ui-react/src/hooks/useBreakpoint';
import { useAccountStore } from '@jwp/ott-common/src/stores/AccountStore';

import Button from '../Button/Button';

import styles from './Header.module.scss';

type NavItem = {
  label: string;
  to: string;
};

const scrollOffset = 100;

const HeaderNavigation = ({ className, navItems }: { className?: string; navItems: NavItem[] }) => {
  const navRef = useRef<HTMLElement>(null);
  const breakpoint: Breakpoint = useBreakpoint();
  const isLoggedIn = useAccountStore(({ user }) => !!user);

  const focusHandler = (event: React.FocusEvent) => {
    if (!navRef.current) return;

    const navRect = navRef.current.getBoundingClientRect();
    const targetRect = (event.target as HTMLElement).getBoundingClientRect();

    // get the element offset position within the navigation scroll container
    const targetScrollTo = targetRect.left + navRef.current.scrollLeft - navRect.left;
    // the first half items will reset the scroll offset to 0
    // all elements after will be scrolled into view with an offset, so that the previous item is still visible
    const scrollTo = targetScrollTo < navRect.width / 2 ? 0 : targetScrollTo - scrollOffset;

    navRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
  };

  const updatedNavItems = [...navItems];
  if (!isLoggedIn) {
    const freeClipsIndex = updatedNavItems.findIndex((item) => item.label === 'Free Clips');
    if (freeClipsIndex !== -1) {
      updatedNavItems.splice(freeClipsIndex, 0, { label: 'Pricing', to: '/pricing' });
    } else {
      updatedNavItems.push({ label: 'Pricing', to: '/pricing' });
    }
  }

  const isSmallScreen = breakpoint === Breakpoint.lg;

  return (
    <nav className={classNames(styles.nav + (isSmallScreen ? ' ' + styles.navMediumScreen : ''), className)} ref={navRef}>
      <ul onFocus={focusHandler}>
        {updatedNavItems.map((item, index) => (
          <li key={index}>
            <Button activeClassname={styles.navButton} label={item.label} to={item.to} variant="text" />
          </li>
        ))}
        <Button activeClassname={styles.navButton} label={'Blue Frog Studios'} to={'https://bluefrogstudios.ca/'} variant="text" />
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
