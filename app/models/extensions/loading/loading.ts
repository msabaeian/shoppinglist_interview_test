import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Loading model
 */
export const LoadingModel = types
  .model("Loading")
  .props({
    state: types.optional(types.boolean, false)
  })
  .actions((self) => ({
    setState(val: boolean){
      self.state = val
    }
  }))

type LoadingType = Instance<typeof LoadingModel>
export interface Loading extends LoadingType {}
type LoadingSnapshotType = SnapshotOut<typeof LoadingModel>
export interface LoadingSnapshot extends LoadingSnapshotType {}
export const createLoadingDefaultModel = () => types.optional(LoadingModel, {})
