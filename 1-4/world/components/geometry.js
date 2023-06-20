import { BoxGeometry, SphereGeometry, MeshBasicMaterial, Mesh } from 'three'

/**
 * 创建立方体
 */
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshBasicMaterial()

  const cube = new Mesh(geometry, material)

  return cube
}

/**
 * 创建球体
 */
function createSphere() {
  const geometry = new SphereGeometry(2, 32, 16)
  const material = new MeshBasicMaterial({ color: 0xffff00 })

  const sphere = new Mesh(geometry, material)

  sphere.position.set(5, 0, 0)

  return sphere
}

export { createCube, createSphere }
