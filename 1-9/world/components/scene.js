import { Scene, Color } from 'three'

/**
 * 创建场景
 */
function createScene() {
  const scene = new Scene()

  scene.background = new Color('#CCFFFF')

  return scene
}

export { createScene }
