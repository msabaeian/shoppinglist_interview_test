import { applySnapshot, Instance, SnapshotOut, types } from "mobx-state-tree"
import { LoadingModel } from "../extensions/loading/loading"
import { ProductModel, ProductSnapshot } from "../product/product"

/**
 * Model description here for TypeScript hints.
 */
export const ProductStoreModel = types
  .model("ProductStore")
  .props({
    loading: types.optional(LoadingModel, {state: true}),
    products: types.optional(types.array(ProductModel), [])
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    saveProducts(products: ProductSnapshot[]){
      applySnapshot(self.products, products)
    }
  }))
  .actions((self) => ({
    loadProducts(){
      // load from api goes here, for now (testing) I set my own value (of course we can use MockAdapter for tests too)
      self.saveProducts(sampleData)
      self.loading.setState(false)
    }
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

type ProductStoreType = Instance<typeof ProductStoreModel>
export interface ProductStore extends ProductStoreType {}
type ProductStoreSnapshotType = SnapshotOut<typeof ProductStoreModel>
export interface ProductStoreSnapshot extends ProductStoreSnapshotType {}
export const createProductStoreDefaultModel = () => types.optional(ProductStoreModel, {})

const sampleData:ProductSnapshot[] = [
  {
    id:1,
    image: null,
    subtitle: null,
    title:"Milk"
  },
  {
    id:2,
    image: null,
    subtitle: null,
    title:"Soft Drink"
  },
  {
    id:3,
    image: null,
    subtitle: null,
    title:"Biscuit"
  },
  {
    id:4,
    image: null,
    subtitle: null,
    title:"Mineral water"
  },
  {
    id:5,
    image: null,
    subtitle: null,
    title:"Popcorn"
  },
  {
    id:6,
    image: null,
    subtitle: "48 oz",
    title:"Mezzetta Organics Kalamata Olives"
  },
  {
    id:7,
    image: "https://picsum.photos/200/200?random=3",
    subtitle: "33 oz",
    title:"Kirkland Signature Artichoke Hearts"
  },
  {
    id:8,
    image: "https://picsum.photos/200/200?random=2",
    subtitle: "8 ct",
    title:"Garaofalo Organic Spaghetti"
  },
  {
    id:9,
    image: null,
    subtitle: null,
    title:"Cucumber"
  },
  {
    id:10,
    image: "https://picsum.photos/200/200",
    subtitle: "36 oz",
    title:"Bonne Maman Preserves"
  },
  {
    id:11,
    image: null,
    subtitle: null,
    title:"Bread"
  }
]