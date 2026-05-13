import { Dimensions, PixelRatio } from 'react-native';

/**
 * RESPONSIVENESS UTILITY
 * 
 * Why do we need this?
 * Standard React Native 'dp' units are not the same across all devices. 
 * This utility ensures your UI scales proportionally based on a "Design Baseline".
 */

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// We use 390x844 as the baseline (iPhone 12/13/14/15 standard size).
const DESIGN_WIDTH = 390;
const DESIGN_HEIGHT = 844;

/**
 * hs = Horizontal Scale
 * Use for: width, paddingHorizontal, marginHorizontal, icon sizes, etc.
 * 
 * Math: (Current Device Width / Design Baseline Width) * size
 */
export const hs = (size: number): number => {
    return PixelRatio.roundToNearestPixel((SCREEN_WIDTH / DESIGN_WIDTH) * size);
};

/**
 * vs = Vertical Scale
 * Use for: height, paddingVertical, marginVertical, etc.
 * 
 * Math: (Current Device Height / Design Baseline Height) * size
 */
export const vs = (size: number): number => {
    return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT / DESIGN_HEIGHT) * size);
};

/**
 * ms = Moderate Scale
 * Use for: Font sizes, border-radius, or anything that shouldn't scale too aggressively.
 * 
 * Why? Linear scaling (hs/vs) can make fonts look comically huge on large phones.
 * ms "tethers" the scaling by applying only a percentage of the scale factor.
 * 
 * Math: size + (hs(size) - size) * factor
 */
export const ms = (size: number, factor = 0.5): number => {
    return PixelRatio.roundToNearestPixel(size + (hs(size) - size) * factor);
};

export const deviceWidth = SCREEN_WIDTH;
export const deviceHeight = SCREEN_HEIGHT;
