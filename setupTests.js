/* eslint react/no-array-index-key: 0 */
// @flow
import 'jest-styled-components';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import registerRequireContextHook from 'babel-plugin-require-context-hook/register';

/**
 * ref: https://github.com/storybooks/storybook/tree/master/addons/storyshots/storyshots-core#configure-jest-to-work-with-webpacks-requirecontext
 */

registerRequireContextHook();

Enzyme.configure({ adapter: new Adapter() });

jest.mock('rc-tween-one/lib/TweenOne', () => 'mock-TweenOne');
jest.mock('react-topbar-progress-indicator');
jest.mock('echarts-for-react/lib/core', () => 'mock-ReactEchartsCore');
jest.mock('echarts');
