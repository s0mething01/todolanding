const getGradient = (theme, color) => {
  switch (color) {
    case 'primary':
      return theme.colors.gradientLight;
    case 'secondary':
      return theme.colors.gradientDark;
    case 'reversePrimary':
      return theme.colors.reversePrimary;
    default:
      return 'none';
  }
};

export default getGradient;
