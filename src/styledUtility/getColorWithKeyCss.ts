import { Color } from "@front-app-react/theme";
import { StyledProps } from "styled-components";

export interface GetColorWithKeyCss {
  name: string;
  color?: Partial<Color>;
  props: StyledProps<unknown>;
}
export const getColorWithKeyCss = ({
  name,
  color,
  props,
}: GetColorWithKeyCss) => {
  if (color) {
    return (
      name +
      ":" +
      props.theme.style.getColor(color?.name, color?.mood, color?.opacity) +
      ";"
    );
  }
  return "";
};
