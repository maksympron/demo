import { useMemo } from 'react';

import {
  getCompactSegmentedSelectorStyle,
  getSegmentedSelectorStyle,
  getSwitchSelectorStyle,
} from './styles';

import { useAppSelector } from '@/store/hooks/useApp';
import selectCurrentTheme from '@/store/slices/theme/selectors';

type StyleVariant = 'default' | 'compact' | 'switch';

const useSegmentedSelectorStyles = (variant: StyleVariant = 'default') => {
  const theme = useAppSelector(selectCurrentTheme);

  return useMemo(() => {
    switch (variant) {
      case 'compact':
        return getCompactSegmentedSelectorStyle({ theme });
      case 'switch':
        return getSwitchSelectorStyle({ theme });
      default:
        return getSegmentedSelectorStyle({ theme });
    }
  }, [theme, variant]);
};

export default useSegmentedSelectorStyles;
