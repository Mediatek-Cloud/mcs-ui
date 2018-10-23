/* global document */
// @flow

import React from 'react';
import { mount } from 'enzyme';
import KeyHandler from '.';

it('should add a "keyup" EventListener of document', () => {
  // ref: https://github.com/airbnb/enzyme/issues/426
  const documentEvents = {};
  (document: any).addEventListener = jest.fn((event, cb) => {
    documentEvents[event] = cb;
  });
  (document: any).removeEventListener = jest.fn();

  // Before mount
  expect(documentEvents).toEqual({});
  const wrapper = mount(
    <KeyHandler eventName="keyup" keyName="a" onClick={() => {}} />,
  );

  // After mount
  expect(documentEvents).toMatchSnapshot();

  // Before Unmount
  expect(document.removeEventListener).not.toHaveBeenCalled();
  // After Unmount
  wrapper.unmount();
  expect(document.removeEventListener).toHaveBeenCalled();
});

it('should handle onClick', () => {
  const documentEvents = {};
  (document: any).addEventListener = jest.fn((event, cb) => {
    documentEvents[event] = cb;
  });
  const mockOnClick = jest.fn();
  mount(<KeyHandler eventName="keyup" keyName="a" onClick={mockOnClick} />);

  // Before clicking
  expect(mockOnClick).not.toHaveBeenCalled();
  // After clicking
  documentEvents.keyup({ key: 'a' });
  expect(mockOnClick).toHaveBeenCalled();
});
