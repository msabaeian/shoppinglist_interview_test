import React from "react"
import { View, ViewStyle, TextStyle } from "react-native"
import { HeaderProps } from "./header.props"
import { Button } from "../button/button"
import { Text } from "../text/text"
import { Icon } from "../icon/icon"
import { color, spacing } from "../../theme"
import { translate } from "../../i18n/"

// static styles
const ROOT: ViewStyle = {
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  paddingHorizontal: 16
}
const TITLE: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 20,
  textAlign: "center"
}

const ICON: TextStyle = {
  color: color.palette.lightGrey,
  fontSize: 27
}
const ICON_EMPTY: ViewStyle = { width: 32 }

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon = "dots-horizontal",
    leftIcon = "arrow-left",
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""

  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Button preset="link" onPress={onLeftPress}>
          <Icon icon={leftIcon} mci style={ICON} />
        </Button>
      ) : (
        <View style={ICON_EMPTY} />
      )}
      
      <Text preset="bold" tx="shoppingListScreen.header" style={[TITLE, titleStyle]} />
      
      {rightIcon ? (
        <Button preset="link" onPress={onRightPress}>
          <Icon icon={rightIcon} mci style={ICON} />
        </Button>
      ) : (
        <View style={ICON_EMPTY} />
      )}
    </View>
  )
}
