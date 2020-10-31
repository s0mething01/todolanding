const handleHideNav = (timeline, nav) => {
  const navContainer = nav.current;
  const navList = nav.current.children[2];

  timeline
    .to(navContainer, { y: -1000, duration: 0.6 })
    .to(navContainer, { backgroundColor: 'transparent', duration: 0.01 })
    .to(navList, { backgroundColor: 'transparent', display: 'none', duration: 0.01 })
    .to(navContainer, { y: 0, duration: 0.3 });
};

export default handleHideNav;
