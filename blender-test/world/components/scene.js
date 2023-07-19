import { Scene, Color, CubeTextureLoader } from 'three'

/**
 * 创建场景
 */
function createScene() {
  const scene = new Scene()

  // scene.background = new Color('skyblue')
  scene.background = new Color('black')
  // scene.background = new CubeTextureLoader().setPath('assets/hdr/').load(['kloppenheim_02_4k.hdr'])

  return scene
}

export { createScene }
