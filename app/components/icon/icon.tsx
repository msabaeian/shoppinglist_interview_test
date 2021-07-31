import * as React from "react"
import { View, ImageStyle, TextStyle } from "react-native"
import { AutoImage as Image } from "../auto-image/auto-image"
import { IconProps } from "./icon.props"
import { icons } from "./icons"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const ROOT: ImageStyle = {
  resizeMode: "contain",
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, mci, containerStyle } = props

  return (
    <View style={containerStyle}>
      {mci ? 
      <MaterialCommunityIcon style={styleOverride as TextStyle} name={icon} /> :
      <Image style={[ROOT, styleOverride as ImageStyle]} source={icons[icon]} />
      }
      
    </View>
  )
}
