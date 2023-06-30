import {
  BoxGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  Mesh,
  LineBasicMaterial,
  LineSegments
} from 'three'

/**
 * 创建立方体
 */
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = new MeshStandardMaterial({ color: COLORS.blueviolet.name })

  const cube = new Mesh(geometry, material)

  cube.rotation.set(-0.5, -0.1, 0.8)

  return cube
}

/**
 * 创建球体
 */
function createSphere() {
  const geometry = new SphereGeometry(1, 32, 16)
  const material = new MeshStandardMaterial({ color: 0xff00ff })
  const sphere = new Mesh(geometry, material)

  sphere.position.set(4, 0, 0)

  return sphere
}

export { createCube, createSphere }
