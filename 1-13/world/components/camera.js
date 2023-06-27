import { PerspectiveCamera } from 'three'

/**
 * 创建相机
 */
function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100)

  camera.position.set(-1, 1.5, 6.5)

  return camera
}

export { createCamera }
