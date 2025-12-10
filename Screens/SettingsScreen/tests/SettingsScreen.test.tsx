import { fireEvent } from '@testing-library/react-native';
import { render } from '@/__tests__/test-utils';
import Colors from '@/constants/Colors';
import { testIdAppSwitch, testIdSettingPage, testIdLogoutButton } from '@/constants/TestId';
import SettingsScreen from '../SettingsScreen';
import { useSession } from '@/context/SessionProvider';

jest.mock('@/context/SessionProvider', () => ({
  useSession: jest.fn(() => ({
    signOut: jest.fn(),
  })),
}));

describe('<SettingsScreen />', () => {
  test('should render component SettingsScreen', () => {
    const tree = render(<SettingsScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('AppSwitch should change theme', () => {
    const {
      getByTestId,
      store: { getState },
    } = render(<SettingsScreen />);
    const appSwitch = getByTestId(testIdAppSwitch);
    const initScreenStyles = getByTestId(testIdSettingPage).props.style;

    expect(initScreenStyles.backgroundColor).toBe(Colors[getState().theme.theme].background);

    expect(appSwitch).toBeDefined();

    fireEvent(appSwitch, 'valueChange', {});

    const updatedScreenStyles = getByTestId(testIdSettingPage).props.style;

    expect(updatedScreenStyles.backgroundColor).toBe(Colors[getState().theme.theme].background);
  });

  test('should call signOut on button press', () => {
    const signOut = jest.fn();
    (useSession as jest.Mock).mockReturnValue({ signOut });

    const { getByTestId } = render(<SettingsScreen />);
    const logoutButton = getByTestId(testIdLogoutButton);

    fireEvent.press(logoutButton);

    expect(signOut).toHaveBeenCalledTimes(1);
  });
});
