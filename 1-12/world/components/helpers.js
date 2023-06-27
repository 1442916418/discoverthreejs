import { AxesHelper, GridHelper } from 'three'

function createOriginAxesHelper() {
  const axesHelper = new AxesHelper(3.5)

  axesHelper.position.set(0, 0, 0)

  return axesHelper
}

function createAxesHelper() {
  const axesHelper = new AxesHelper(6)

  axesHelper.position.set(-3.5, 0, -3.5)

  return axesHelper
}

function createGridHelper() {
  const gridHelper = new GridHelper(6, 10, 0x666666, 0x999999)

  return gridHelper
}

export { createOriginAxesHelper, createAxesHelper, createGridHelper }
