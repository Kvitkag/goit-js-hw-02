const formatString = function (string) {
  const MAX_LENGTH = 40;
  if (string.length <= MAX_LENGTH) return string;

  return string.slice(0, MAX_LENGTH - 3) + '...';
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);