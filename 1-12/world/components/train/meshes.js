import { Mesh } from 'three'

import { createGeometers } from './geometries.js'
import { createMaterials } from './materials.js'

function createMeshes() {
  const geometries = createGeometers()
  const materials = createMaterials()

  // 货舱
  const cabin = new Mesh(geometries.cabin, materials.body)
  cabin.position.set(1.5, 1.4, 0)

  // 烟囱
  const chimney = new Mesh(geometries.chimney, materials.detail)
  chimney.position.set(-2, 1.9, 0)

  // 鼻子
  const nose = new Mesh(geometries.nose, materials.body)
  nose.position.set(-1, 1, 0)
  nose.rotation.z = Math.PI / 2

  // 小轮子 - 后
  const smallWheelRear = new Mesh(geometries.wheel, materials.detail)
  smallWheelRear.position.y = 0.5
  smallWheelRear.rotation.x = Math.PI / 2

  // 小轮子 - 中
  const smallWheelCenter = smallWheelRear.clone()
  smallWheelCenter.position.x = -1

  // 小轮子 - 前
  const smallWheelFront = smallWheelRear.clone()
  smallWheelFront.position.x = -2

  // 大轮子
  const bigWheel = smallWheelRear.clone()
  bigWheel.position.set(1.5, 0.9, 0)
  bigWheel.scale.set(2, 1.25, 2)

  return {
    cabin,
    chimney,
    nose,
    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel
  }
}

export { createMeshes }
