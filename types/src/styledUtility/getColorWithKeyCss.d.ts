import { Color } from '@front-app-react/theme';
import { StyledProps } from 'styled-components';

interface GetColorWithKeyCss {
    name: string;
    color?: Partial<Color>;
    props: StyledProps<unknown>;
}
declare const getColorWithKeyCss: ({ name, color, props, }: GetColorWithKeyCss) => string;

export { GetColorWithKeyCss, getColorWithKeyCss };
