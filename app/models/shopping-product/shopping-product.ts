import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { ProductModel } from "../product/product"

/**
 * Model description here for TypeScript hints.
 */
export const ShoppingProductModel = types
  .model("ShoppingProduct")
  .props({
    product: types.reference(ProductModel),
    quantity: types.optional(types.number, 1),
    checked: types.optional(types.boolean, false)
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    increase() {
      self.quantity += 1
    },
    decrease(){
      if(self.quantity > 1) self.quantity -= 1
    },
    setChecked(val: boolean){
      self.checked = val
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ShoppingProductType = Instance<typeof ShoppingProductModel>
export interface ShoppingProduct extends ShoppingProductType {}
type ShoppingProductSnapshotType = SnapshotOut<typeof ShoppingProductModel>
export interface ShoppingProductSnapshot extends ShoppingProductSnapshotType {}
export interface ShoppingProductSnapshotOptional extends SnapshotIn<typeof ShoppingProductModel> {}
export const createShoppingProductDefaultModel = () => types.optional(ShoppingProductModel, {})
