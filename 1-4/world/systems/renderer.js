import { WebGL1Renderer } from 'three'

/**
 * 创建渲染器
 */
function createRenderer() {
  const renderer = new WebGL1Renderer()

  return renderer
}

export { createRenderer }
