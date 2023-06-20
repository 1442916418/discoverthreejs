import { createCamera } from './components/camera.js'
import { createCube, createSphere } from './components/geometry.js'
import { createScene } from './components/scene.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/resizer.js'

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

    const sphere = createSphere()
    scene.add(sphere)

    const resizer = new Resizer(container, camera, renderer)
  }

  render() {
    renderer.render(scene, camera)
  }
}

export { World }
