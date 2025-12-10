import { render } from '@/__tests__/test-utils';
import AppText from '@/components/AppText/AppText';

describe('<AppText />', () => {
  test('should render component AppText with text', () => {
    const { getByText } = render(<AppText>test</AppText>);
    getByText('test');
  });
});
