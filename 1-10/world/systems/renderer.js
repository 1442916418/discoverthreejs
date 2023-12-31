import { WebGLRenderer } from 'three'

/**
 * 创建渲染器
 */
function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true })

  renderer.useLegacyLights = true

  return renderer
}

export { createRenderer }
