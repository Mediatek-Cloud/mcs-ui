/* eslint react/no-array-index-key: 0 */
// @flow
import * as React from 'react';
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

/**
 * ref: https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
 */

registerRequireContextHook();

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-spring', () => ({
  Transition: ({ children }: { children: Array<React.ComponentType<*>> }) => (
    <div>
      {children.map((Child, index) => (
        <Child key={index} />
      ))}
    </div>
  ),
}));

jest.mock('rc-tween-one/lib/TweenOne', () => 'mock-TweenOne');
jest.mock('react-topbar-progress-indicator');
