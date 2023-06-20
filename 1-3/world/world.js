import { createCamera } from './components/camera'
import { createCube } from './components/cube'
import { createScene } from './components/scene'

import { createRenderer } from './systems/renderer'
import { Resizer } from './systems/resizer'

let camera = void 0
let renderer = void 0
let scene = void 0

/**
 * World 类
 */
class World {
  constructor(container) {
    camera = createCamera()
    renderer = createRenderer()
    scene = createScene()

    container.append(renderer.domElement)

    const cube = createCube()
    scene.add(cube)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
