import {
  BoxGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  Mesh,
  LineBasicMaterial,
  LineSegments,
  MathUtils
} from 'three'

/**
 * 创建立方体
 */
function createCube() {
  const geometry = new BoxGeometry(1, 1, 1)
  const material = new MeshStandardMaterial({ color: 'purple' })
  const geometryB = new BoxGeometry(1, 1, 1)
  const materialB = new MeshStandardMaterial({ color: 0xffffff })

  const cube = new Mesh(geometry, material)
  const cubeB = new Mesh(geometryB, materialB)

  cubeB.position.set(2, 1, 1)
  cubeB.rotation.x = MathUtils.degToRad(45)

  cube.add(cubeB)

  // cube.rotation.set(-0.5, -0.1, 0.8)

  cube.rotation.x = MathUtils.degToRad(45)

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
