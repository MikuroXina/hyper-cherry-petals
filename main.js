const backgroundColor = '#1a1d1a';
const foregroundColor = '#fafafa';
const cursorColor = 'rgba(28,121,255,0.8)';
const borderColor = '#000';

exports.decorateConfig = (config) => {
  return Object.assign(config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor
  });
};
