import { AxesHelper, GridHelper } from 'three'

function createAxesHelper() {
  const axesHelper = new AxesHelper(6)

  axesHelper.position.set(0, 0, 0)

  return axesHelper
}

function createGridHelper() {
  const gridHelper = new GridHelper(6)

  return gridHelper
}

export { createAxesHelper, createGridHelper }
