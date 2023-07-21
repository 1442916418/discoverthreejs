import { PerspectiveCamera } from 'three'

/**
 * 创建相机
 */
function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 1000)

  camera.position.set(0, 10, 30)

  return camera
}

export { createCamera }
