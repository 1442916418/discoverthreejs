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

  const cube = new Mesh(geometry, material)
  const radiansPerSecond = MathUtils.degToRad(30)

  cube.rotation.set(-0.5, -0.1, 0.8)

  let max = 0.01
  let increasing = true

  cube.tick = (delta) => {
    if (increasing) {
      max += 0.01
      if (max >= 2) {
        increasing = false
      }
    } else {
      max -= 0.01
      if (max <= 0.01) {
        increasing = true
      }
    }

    cube.scale.x = max
    cube.scale.y = max
    cube.scale.z = max

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
