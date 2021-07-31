import * as React from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity, Image, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, spacing, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import { useStores } from "../../models"
import CheckBox from '@react-native-community/checkbox';
import { Icon } from "../icon/icon"

const ROW_CONTAINER: TextStyle = {
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row'
}

const CONTAINER: ViewStyle = {
  width: '100%',
  justifyContent: 'space-between',
  flexDirection: 'row',
  marginTop: spacing[4],
  alignItems: 'flex-start'
}

const PRODUCT_CHECKBOX: ViewStyle = {
  width: 20, 
  height: 20
}

const CONTENT: ViewStyle = {
  flex: 9, 
  paddingBottom: spacing[2], 
  borderBottomColor: color.line, 
  borderBottomWidth: 1, 
  justifyContent: 'space-between', 
  flexDirection: 'row', 
  alignItems: 'flex-start'
}

const CONTENT_INFO: ViewStyle = {
  width: '40%'
}

const TITLE: TextStyle = {
  color: color.palette.lighterBlack, 
  fontSize: 18
}
const SUBTITLE: TextStyle = {
  color: color.palette.lightGrey, 
  fontSize: 18, 
  marginTop: spacing[1]
}

const THUMBNAIL: ImageStyle = {
  height: 60, 
  width: 60
}

const COUNTER: ViewStyle = {
  ...ROW_CONTAINER,
  width: 100
}

const BTN: ViewStyle = {
  paddingHorizontal: spacing[1]
}

const COUNTER_TEXT: TextStyle = {
  fontSize: 18,
  color: color.palette.lighterBlack
}
const CURRENT_COUNT: TextStyle = {
  ...COUNTER_TEXT,
  fontSize: 20,
}

export interface ShoppingProductProps {
  id: number
}

/**
 * Describe your component here
 */
const ShoppingProduct = observer(function ShoppingProduct(props: ShoppingProductProps) {
  const { id } = props
  const { shoppingStore } = useStores()
  const item = shoppingStore.getProduct(id)

  return (
    <View style={CONTAINER}>
        <View style={{flex: 1}}>
            <CheckBox onValueChange={item.setChecked} value={item.checked} boxType="square" tintColor={color.line} onTintColor={color.primary} onCheckColor={color.primary} style={PRODUCT_CHECKBOX} />
        </View>
        <View style={CONTENT}>
          <View style={CONTENT_INFO}>
            <Text text={item.product.title} preset="bold" style={TITLE} numberOfLines={2} />
            <Text text={item.product.subtitle} style={SUBTITLE} numberOfLines={2} />
          </View>
          {item.product.image ? 
          <Image source={{uri: item.product.image}} style={THUMBNAIL} resizeMode="contain" />
          : null}
          <View style={COUNTER}>
            <TouchableOpacity style={BTN} onPress={item.decrease}>
              <Icon icon="minus" mci style={COUNTER_TEXT} />
            </TouchableOpacity>
            <Text text={String(item.quantity)} preset="bold" style={CURRENT_COUNT} />
            <TouchableOpacity style={BTN} onPress={item.increase}>
              <Icon icon="plus" mci style={COUNTER_TEXT}/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
})

export default ShoppingProduct