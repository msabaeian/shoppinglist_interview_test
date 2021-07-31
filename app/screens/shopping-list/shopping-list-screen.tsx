import React from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, View, TextStyle, TouchableOpacity, Image, SafeAreaView, FlatList } from "react-native"
import { Button, Header, Icon, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { useEffect } from "react"
import { useStores } from "../../models"
import ShoppingProduct from "../../components/shopping-product/shopping-product"

const CONTAINER: ViewStyle = {
  backgroundColor: color.palette.white,
  flex: 1
}

const PADDING = {
  paddingHorizontal: 16
}

const ROW_CONTAINER: TextStyle = {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
}

const DIVIDER: ViewStyle = {
  width: '100%',
  height: 1,
  backgroundColor: color.line,
  marginTop: spacing[2]
}
const ADD_ITEM_TEXT: TextStyle = {
  fontSize: 20
}

const TYPE_BUTTON: ViewStyle = {
  width: '32%',
  height: 40,
  borderColor: color.primary,
  borderWidth: 1,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 4
}

const TYPE_BUTTON_ACTIVE: ViewStyle = {
  backgroundColor: color.primary
}

const TYPE_TEXT: TextStyle = {
  color: color.primary,
  fontSize: 16
}

const TYPE_TEXT_ACTIVE: TextStyle = {
  color: "white"
}

const ADD_ITEM_CONTAINER: ViewStyle = {
  position: 'absolute',
  bottom: spacing[4],
  left: 0,
  right: 0,
  justifyContent: 'center',
  alignItems: 'center'
}
const ADD_ITEM: ViewStyle = {
  width: '60%'
}
const FLATLISTCONTENT: ViewStyle = {
  paddingTop: spacing[4]
}
const TYPES: ViewStyle = {
  marginBottom: spacing[3]
}


export const ShoppingListScreen = observer(function ShoppingListScreen() {
  // Pull in one of our MST stores
  const { productStore, shoppingStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()

  useEffect(() => {
    productStore.loadProducts()
    shoppingStore.saveProducts([{product: 1},{product: 11},{product: 8}, {product: 3}, {product: 9}, {product: 5}, {product: 2}])
  }, [])
  return (
    <Screen style={CONTAINER} preset="fixed" statusBar="dark-content">
      <Header />
      <View style={DIVIDER} />
      
      
      <FlatList 
        data={shoppingStore.getProducts}
        extraData={shoppingStore.getProducts.length}
        keyExtractor={(item) => String(item.product.id)}
        contentContainerStyle={[PADDING, FLATLISTCONTENT]}
        renderItem={({item}) => <ShoppingProduct id={item.product.id} />}
        ListHeaderComponent={() => (
          <View style={[ROW_CONTAINER, TYPES]}>
            {['Cosctco','Target',"Trader Joe's"].map((item, index) => (
              <TouchableOpacity key={item} style={[TYPE_BUTTON, index === 2 && TYPE_BUTTON_ACTIVE]}>
                <Text text={item} key={item} preset="bold" style={[TYPE_TEXT, index === 2 && TYPE_TEXT_ACTIVE]} />
              </TouchableOpacity>
            ))}
          </View>
        )}
      />

      <View style={ADD_ITEM_CONTAINER}>
        <Button
          style={ADD_ITEM}
          textStyle={ADD_ITEM_TEXT}
          tx="shoppingListScreen.addItemBtn"
        />
      </View>
      
      
    </Screen>
  )
})
