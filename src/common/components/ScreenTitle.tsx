// Import necessary modules and constants
import { ColorName } from '@/constants/Colors';
import { FontFamily } from '@/constants/Fonts';
import { Text as DefaultText, TextProps } from 'react-native';
import useThemeColor from '../hooks/useThemeColor';

// Define props for the custom Text component
export type CustomTextProps = TextProps & {
    fontFamily?: FontFamily;
    color?: ColorName;
    fontSize?: number;
    marginBottom?: number;
    paddingBottom?: number;
};

// Define the custom Text component
export default function ScreenTitle({
    style,
    fontFamily = 'SFRegular',
    color = 'text',
    fontSize,
    marginBottom = 20,
    paddingBottom = 10,
    ...props
}: CustomTextProps) {
    // Apply themed color based on the specified color name
    const _color = useThemeColor(color);

    // Render the custom Text component with customizable styles
    return (
        <DefaultText
            style={[{ color: _color, fontFamily, fontSize }, style]}
            {...props}
        />
    );
}
