const handleShowNav = (timeline, nav, theme) => {
  const navContainer = nav.current;
  const navList = nav.current.children[2];

  timeline
    .to(navContainer, { y: -1000, duration: 0.6 })
    .to(navContainer, { backgroundColor: theme.colors.secondary, duration: 0.01 })
    .to(navList, { backgroundColor: theme.colors.secondary, display: 'flex', duration: 0.01 })
    .to(navContainer, { y: 0, duration: 0.4 });
};

export default handleShowNav;
