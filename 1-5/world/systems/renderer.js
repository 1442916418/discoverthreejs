import { WebGLRenderer } from 'three'

/**
 * 创建渲染器
 */
function createRenderer() {
  const renderer = new WebGLRenderer()

  renderer.useLegacyLights = true

  return renderer
}

export { createRenderer }
