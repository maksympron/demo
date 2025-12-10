import { render } from '@/__tests__/test-utils';
import ButtonGoBack from '@/components/ButtonGoBack/ButtonGoBack';
import { testIdButtonBack } from '@/constants/TestId';

describe('<ButtonGoBack />', () => {
  test('should render component ButtonGoBack', () => {
    const { getByTestId } = render(<ButtonGoBack />);
    getByTestId(testIdButtonBack);
  });
});
