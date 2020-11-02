export default function handleHideNav(timeline, nav) {
  const navContainer = nav.current;
  const navHeading = nav.current.children[0];
  const navList = nav.current.children[1];

  timeline
    .to(navContainer, { y: -1000, duration: 0.6 })
    .to(navHeading, { backgroundColor: 'transparent', duration: 0.01 })
    .to(navList, { backgroundColor: 'transparent', display: 'none', duration: 0.01 })
    .to(navContainer, { y: 0, duration: 0.3 });
}
