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
  'Form.example.js',
  '__snapshots__',
];

it('should export es module of each folder', () => {
  const dirnames = R.without(IGNORES)(fs.readdirSync('./src'));
  dirnames.forEach(name => {
    expect(Modules).toHaveProperty(name);
  });
});

it('should export es module of Form folder', () => {
  const dirnames = R.without(IGNORES)(fs.readdirSync('./src/Form')).map(name =>
    name.replace('.js', ''),
  );
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

it('should export es module of theme', () => {
  expect(Modules).toHaveProperty('theme');
});
