// @flow
import fs from 'fs';
import * as R from 'ramda';
import * as Modules from '../index';

const IGNORES = [
  '__tests__',
  'index.js',
  'utils',
  '.DS_Store',
  'Icons',
  'hooks',
  'Logo',
  'svg',
  '__snapshots__',
];

it('should export es module of each Component folder', () => {
  const dirnames = R.without(IGNORES)(fs.readdirSync('./src'));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of Form folder', () => {
  const dirnames = R.without([...IGNORES, 'Form.example.js'])(
    fs.readdirSync('./src/Form'),
  ).map(name => name.replace('.js', ''));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of KeyHandler folder', () => {
  const dirnames = R.without([
    ...IGNORES,
    'KeyHandler.example.js',
    'KeyHandler.test.js',
  ])(fs.readdirSync('./src/KeyHandler')).map(name => name.replace('.js', ''));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of Icons folder', () => {
  const dirnames = R.without(IGNORES)(fs.readdirSync('./src/Icons/svgr')).map(
    name => name.replace('.js', ''),
  );
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of hooks folder', () => {
  const dirnames = R.without(IGNORES)(fs.readdirSync('./src/hooks')).map(name =>
    name.replace('.js', ''),
  );
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of Logo folder', () => {
  const dirnames = R.without([
    ...IGNORES,
    'LogoMTK.example.js',
    'LogoMCS.example.js',
  ])(fs.readdirSync('./src/Logo')).map(name => name.replace('.js', ''));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of utils folder', () => {
  const dirnames = R.without([
    ...IGNORES,
    'theme.example.js',
    'type.flow.js',
    'react.js',
  ])(fs.readdirSync('./src/utils')).map(name => name.replace('.js', ''));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of theme', () => {
  expect(Modules).toHaveProperty('theme');
});
