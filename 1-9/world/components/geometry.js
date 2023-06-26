import {
  BoxGeometry,
  SphereGeometry,
  MeshBasicMaterial,
  MeshStandardMaterial,
  MeshPhongMaterial,
  Mesh,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  TextureLoader
} from 'three'

/**
 * 创建立方体纹理
 */
function createCubeMaterial() {
  const loader = new TextureLoader()
  const texture = loader.load('assets/textures/uv-test-bw.png')
  const material = new MeshStandardMaterial({ map: texture })

  return material
}

/**
 * 创建立方体
 */
function createCube() {
  const geometry = new BoxGeometry(2, 2, 2)
  const material = createCubeMaterial()

  const cube = new Mesh(geometry, material)
  const radiansPerSecond = MathUtils.degToRad(30)

  cube.rotation.set(-0.5, -0.1, 0.8)

  cube.tick = (delta) => {
    cube.rotation.x += radiansPerSecond * delta
    cube.rotation.y += radiansPerSecond * delta
    cube.rotation.z += radiansPerSecond * delta
  }

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
