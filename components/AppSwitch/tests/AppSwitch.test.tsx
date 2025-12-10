import { fireEvent, waitFor } from '@testing-library/react-native';

import { render } from '@/__tests__/test-utils';
import AppSwitch from '@/components/AppSwitch/AppSwitch';
import { testIdAppSwitch } from '@/constants/TestId';

describe('<AppSwitch />', () => {
  test('should render component SettingsScreen', () => {
    const tree = render(
      <AppSwitch
        isEnabled={false}
        toggleSwitch={() => {}}
      />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should call toggleSwitch function', () => {
    const onEventMock = jest.fn();
    const { getByTestId } = render(
      <AppSwitch
        isEnabled={false}
        toggleSwitch={() => onEventMock()}
      />,
    );

    waitFor(() => {
      fireEvent(getByTestId(testIdAppSwitch), 'onValueChange');
    });

    expect(onEventMock).toHaveBeenCalledTimes(1);
  });
});
