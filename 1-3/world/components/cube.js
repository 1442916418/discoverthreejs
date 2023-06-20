import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three'

/**
 * 创建立方体
 */
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshBasicMaterial()

  const cube = new Mesh(geometry, material)

  return cube
}

export { createCube }
