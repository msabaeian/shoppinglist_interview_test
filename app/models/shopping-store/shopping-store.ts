import { applySnapshot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ShoppingProduct, ShoppingProductModel, ShoppingProductSnapshotOptional } from "../shopping-product/shopping-product"

/**
 * Model description here for TypeScript hints.
 */
export const ShoppingStoreModel = types
  .model("ShoppingStore")
  .props({
    products: types.optional(types.array(ShoppingProductModel), [])
  })
  .views((self) => ({
    get getProducts() : ShoppingProduct[] {
      return self.products
    },
    getProduct(id: number) : ShoppingProduct {
      return self.products.filter(e => e.product.id === id)[0]
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveProducts(products: ShoppingProductSnapshotOptional[]){
      applySnapshot(self.products, products)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ShoppingStoreType = Instance<typeof ShoppingStoreModel>
export interface ShoppingStore extends ShoppingStoreType {}
type ShoppingStoreSnapshotType = SnapshotOut<typeof ShoppingStoreModel>
export interface ShoppingStoreSnapshot extends ShoppingStoreSnapshotType {}
export const createShoppingStoreDefaultModel = () => types.optional(ShoppingStoreModel, {})
