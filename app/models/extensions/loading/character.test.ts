import { LoadingModel } from "./loading"

test("can be created", () => {
  const instance = LoadingModel.create()

  expect(instance).toBeTruthy()
})
