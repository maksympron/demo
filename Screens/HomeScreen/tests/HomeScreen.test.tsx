import { render } from '@/__tests__/test-utils';
import { testIdHomePage } from '@/constants/TestId';
import HomeScreen from '../HomeScreen';

describe('<HomeScreen />', () => {
  test('should render component HomeScreen', () => {
    const tree = render(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should render component HomeScreen with text', () => {
    const { getByTestId } = render(<HomeScreen />);
    getByTestId(testIdHomePage);
  });
});
