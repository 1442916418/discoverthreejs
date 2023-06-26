import { PerspectiveCamera } from 'three'

/**
 * 创建相机
 */
function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 100)

  camera.position.set(-5, 5, 12)

  return camera
}

export { createCamera }
