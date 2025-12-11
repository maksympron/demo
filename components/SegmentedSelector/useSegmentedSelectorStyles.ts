import { useMemo } from 'react';
import {
  getCompactSegmentedSelectorStyle,
  getSegmentedSelectorStyle,
  getSwitchSelectorStyle,
} from './styles';

type StyleVariant = 'default' | 'compact' | 'switch';

const useSegmentedSelectorStyles = (variant: StyleVariant = 'default') => {
  return useMemo(() => {
    switch (variant) {
      case 'compact':
        return getCompactSegmentedSelectorStyle();
      case 'switch':
        return getSwitchSelectorStyle();
      default:
        return getSegmentedSelectorStyle();
    }
  }, [variant]);
};

export default useSegmentedSelectorStyles;
