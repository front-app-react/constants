import { StyledProps } from 'styled-components';
import { ThemeColor } from '@front-app-react/theme';

interface ColorHandlerProps {
    $textColor?: Partial<ThemeColor>;
    $bgColor?: Partial<ThemeColor>;
    $borderColor?: Partial<ThemeColor>;
    $isActive?: boolean;
}
type ColorHandler = StyledProps<Omit<ColorHandlerProps, "$sizing">>;
declare const colorHandler: (props: ColorHandler, isAction?: boolean) => string;

export { ColorHandler, ColorHandlerProps, colorHandler };
