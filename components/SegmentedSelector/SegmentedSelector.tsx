import React, {
  memo, useCallback, useEffect, useMemo,
} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import useSegmentedSelectorStyles from './useSegmentedSelectorStyles';

import type { JSX } from 'react';
import type { TextStyle, ViewStyle } from 'react-native';

interface Option<T = string> {
  id: T,
  label: string,
  icon?: React.ReactNode,
}

type StyleVariant = 'default' | 'compact' | 'switch';

interface SegmentedSelectorProps<T = string> {
  options: Option<T>[],
  value: T,
  onChange: (value: T) => void,
  variant?: StyleVariant,
  textStyle?: TextStyle,
  containerStyle?: ViewStyle,
  activeTextStyle?: TextStyle,
  sliderStyle?: ViewStyle,
  buttonStyle?: ViewStyle,
  animationConfig?: {
    damping?: number,
    stiffness?: number,
    mass?: number,
  },
}

const OptionItem = memo(({
  option,
  isActive,
  variant,
  styles,
  textStyle,
  activeTextStyle,
  buttonStyle,
  onPress,
  optionsLength,
}: {
  option: Option<any>,
  isActive: boolean,
  variant: StyleVariant,
  styles: Record<string, any>,
  textStyle?: TextStyle,
  activeTextStyle?: TextStyle,
  buttonStyle?: ViewStyle,
  onPress: (id: any) => void,
  optionsLength: number,
}) => {
  const handlePress = useCallback(() => {
    onPress(option.id);
  }, [onPress, option.id]);

  const optionStyleProp = variant === 'switch' ? 'option' : 'button';
  const textStyleProp = variant === 'switch' ? 'label' : 'text';
  const activeTextStyleProp = variant === 'switch' ? 'labelSelected' : 'activeText';

  const buttonStyleMemo = useMemo(() => [
    styles[optionStyleProp],
    buttonStyle,
    variant === 'switch' && { width: `${100 / optionsLength}%` },
  ], [styles, optionStyleProp, buttonStyle, variant, optionsLength]);

  const textStyleMemo = useMemo(() => [
    styles[textStyleProp],
    textStyle,
    isActive && styles[activeTextStyleProp],
    isActive && activeTextStyle,
  ], [styles, textStyleProp, textStyle, isActive, activeTextStyleProp, activeTextStyle]);

  return (
    <TouchableOpacity
      style={buttonStyleMemo}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {option.icon && React.isValidElement(option.icon) ? (
        <View style={styles.iconContainer || { marginBottom: option.label ? 2 : 0 }}>
          {React.cloneElement(option.icon as React.ReactElement, {
            ...(option.icon.props || {}),
            size: variant === 'switch' ? 24 : 20,
            color: isActive ? '#FFFFFF' : '#0A2E36',
          } as any)}
        </View>
      ) : null}
      <Text style={textStyleMemo}>
        {option.label}
      </Text>
    </TouchableOpacity>
  );
});

function SegmentedSelector<T = string>({
  options,
  value,
  onChange,
  variant = 'default',
  textStyle,
  containerStyle,
  activeTextStyle,
  sliderStyle,
  buttonStyle,
  animationConfig = {
    damping: 20,
    stiffness: 300,
    mass: 1,
  },
}: SegmentedSelectorProps<T>) {
  const styles = useSegmentedSelectorStyles(variant);
  const [containerWidth, setContainerWidth] = React.useState(0);
  const translateX = useSharedValue(0);

  const optionWidth = useMemo(
    () => containerWidth / options.length,
    [containerWidth, options.length],
  );

  const currentIndex = useMemo(
    () => options.findIndex((option) => option.id === value),
    [options, value],
  );

  const targetTranslate = useMemo(() => {
    if (containerWidth === 0 || currentIndex === -1) return 0;

    return variant === 'switch'
      ? Math.max(4, Math.min(optionWidth * currentIndex, containerWidth - optionWidth - 8))
      : optionWidth * currentIndex;
  }, [variant, optionWidth, currentIndex, containerWidth]);

  useEffect(() => {
    if (containerWidth === 0 || currentIndex === -1) return;

    translateX.value = withSpring(targetTranslate, animationConfig);
  }, [targetTranslate, translateX, animationConfig]);

  const handleLayout = useCallback((e: any) => {
    const { width } = e.nativeEvent.layout;
    if (width !== containerWidth) {
      setContainerWidth(width);
    }
  }, [containerWidth]);

  const animatedSliderStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }), []);

  const sliderWidth = useMemo(
    () => (variant === 'switch' ? optionWidth : optionWidth - 4),
    [variant, optionWidth],
  );

  const sliderStyleProp = variant === 'switch' ? 'selector' : 'slider';

  const containerStyleMemo = useMemo(() => [
    styles.container,
    containerStyle,
  ], [styles.container, containerStyle]);

  const sliderStyleMemo = useMemo(() => [
    styles[sliderStyleProp],
    sliderStyle,
    { width: sliderWidth },
    animatedSliderStyle,
  ], [styles, sliderStyleProp, sliderStyle, sliderWidth, animatedSliderStyle]);

  return (
    <View
      style={containerStyleMemo}
      onLayout={handleLayout}
    >
      {containerWidth > 0 && (
        <Animated.View style={sliderStyleMemo} />
      )}

      {options.map((option) => (
        <OptionItem
          key={String(option.id)}
          option={option}
          isActive={value === option.id}
          variant={variant}
          styles={styles}
          textStyle={textStyle}
          activeTextStyle={activeTextStyle}
          buttonStyle={buttonStyle}
          onPress={onChange}
          optionsLength={options.length}
        />
      ))}
    </View>
  );
}

export default memo(SegmentedSelector) as <T = string>(props: SegmentedSelectorProps<T>) => JSX.Element;
