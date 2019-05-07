const backgroundColor = '#1a1d1aCC';
const foregroundColor = '#fbcbfb';
const cursorColor = 'rgba(28,201,121,0.8)';
const borderColor = '#000';

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor: borderColor
  });
};
