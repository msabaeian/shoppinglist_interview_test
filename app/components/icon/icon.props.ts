import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"
import { IconTypes } from "./icons"

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle|TextStyle>

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>

  /**
   * The name of the icon
   */

  icon?: IconTypes | string

  /**
   * is MCI (to load icon from vector icons)
   */
  mci?: boolean
}
