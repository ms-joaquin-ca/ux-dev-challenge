module.exports = {
  'src/**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.+(js|ts|tsx)': ['eslint "**/*.{js,ts,tsx}"', 'prettier --write "**/*.{js,ts,tsx}"'],
  'src/**/*.+(ts|tsx)': () =>
    'react-scripts test --watchAll=false --coverage --forceExit --detectOpenHandles --env=jsdom',
}
