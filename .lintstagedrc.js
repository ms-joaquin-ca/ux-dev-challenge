module.exports = {
  'src/**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
  'src/**/*.+(js|ts|tsx)': ['eslint "**/*.{js,ts,tsx}"', 'prettier --write "**/*.{js,ts,tsx}"'],
  'src/**/*.+(ts|tsx)': () =>
    'jest --watchAll=false --coverage --forceExit --detectOpenHandles --env=jsdom',
}
