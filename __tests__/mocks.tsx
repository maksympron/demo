export const mockedNavigate = jest.fn();
export const mockedGoBack = jest.fn();

jest.mock('expo-router', () => {
  const actualNav = jest.requireActual('expo-router');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedGoBack,
    }),
  };
});
