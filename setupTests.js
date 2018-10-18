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

// For rc-tween-one
jest.mock('react-overlay-pack/lib/Transition/index', () => 'mock-transition');
