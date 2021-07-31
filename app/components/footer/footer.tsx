import * as React from "react"
import { StyleProp, TextStyle, TouchableOpacity, View, ViewStyle, SafeAreaView } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
// import { Text } from "../"
import { Icon } from "../icon/icon"
import { Text } from "../text/text"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { RoutesName } from "../../config/Routes"

const CONTAINER: ViewStyle = {
  width: '100%',
  height: 90,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
}

const TAB: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center'
}
const TAB_TITLE: TextStyle = {
  color: color.palette.black,
  fontSize: 14,
  marginTop: spacing[2]
}

const TAB_TITLE_ACTIVE: TextStyle = {
  color: color.primary
}

const ICON: TextStyle = {
  color: color.palette.black,
  fontSize: 27
}
const ICON_PLUS: TextStyle = {
  fontSize: 50
}

const ICON_ACTIVE: TextStyle = {
  color: color.primary,
  fontSize: 27
}

export interface FooterProps {

}

export interface TabItemProps {
  tx: string
  icon: string
  isActive: boolean
  onPress: () => any
}

function TabItem(props: TabItemProps){
  const { icon, isActive, onPress, tx } = props
  return (
    <TouchableOpacity style={TAB} onPress={onPress}>
      <Icon icon={icon} mci style={[ICON, isActive && ICON_ACTIVE]} />
      <Text tx={tx} style={[TAB_TITLE, isActive && TAB_TITLE_ACTIVE]}/>
    </TouchableOpacity>
  )
}

/**
 * Describe your component here
 */
const Footer = observer(function Footer(props: FooterProps) {

  const [currentTab, setCurrentTab] = useState(RoutesName.ACCOUNT)
  const {navigate} = useNavigation()
    const onPress = (route: string) => () => {
        navigate(route)
        setCurrentTab(route)
  }

  return (
      <SafeAreaView style={CONTAINER}>
        <TabItem isActive={currentTab === RoutesName.EXPLORE} icon="map" tx="footer.explore" onPress={onPress(RoutesName.EXPLORE)} />
        <TabItem isActive={currentTab === RoutesName.CHALLENGE} icon="gamepad-variant" tx="footer.challenges" onPress={onPress(RoutesName.CHALLENGE)} />
        <TouchableOpacity style={TAB}>
          <Icon icon="plus-circle" mci style={[ICON, ICON_PLUS]} />
        </TouchableOpacity>
        <TabItem isActive={currentTab === RoutesName.NOTIFICATION} icon="bell-ring" tx="footer.notification" onPress={onPress(RoutesName.NOTIFICATION)} />
        <TabItem isActive={currentTab === RoutesName.ACCOUNT} icon="account" tx="footer.me" onPress={onPress(RoutesName.ACCOUNT)} />
      </SafeAreaView>
  )
})

export default Footer