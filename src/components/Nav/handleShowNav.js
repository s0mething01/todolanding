export default function handleShowNav(timeline, nav, theme) {
  const navContainer = nav.current;
  const navHeading = nav.current.children[0];
  const navList = nav.current.children[1];

  timeline
    .to(navContainer, { y: -1000, duration: 0.6 })
    .to(navHeading, { backgroundColor: theme.colors.secondary, duration: 0.01 })
    .to(navList, { backgroundColor: theme.colors.secondary, display: 'flex', duration: 0.01 })
    .to(navContainer, { y: 0, duration: 0.4 });
}
