import { ShoppingProductModel } from "./shopping-product"

test("can be created", () => {
  const instance = ShoppingProductModel.create({})

  expect(instance).toBeTruthy()
})
