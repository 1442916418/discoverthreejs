import { createCamera } from './components/camera.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'
import { createAxesHelper } from './components/helpers.js'
import { loadCubes } from './components/cube/cube.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/resizer.js'
import { Loop } from './systems/loop.js'
import { createControls } from './systems/controls.js'

let camera = void 0
let renderer = void 0
let scene = void 0
let loop = void 0
let controls = void 0

/**
 * World 类
 */
class World {
  constructor(container) {
    camera = createCamera()
    renderer = createRenderer()
    scene = createScene()
    controls = createControls(camera, renderer.domElement)
    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement)

    const { mainLight, ambientLight } = createLights()

    scene.add(mainLight)
    scene.add(createAxesHelper())

    const resizer = new Resizer(container, camera, renderer)

    loop.updatables.push(controls)
  }

  async init() {
    const { cube1 } = await loadCubes()

    if (cube1) {
      scene.add(cube1)
    }
  }

  render() {
    renderer.render(scene, camera)
  }

  start() {
    loop.start()
  }

  stop() {
    loop.stop()
  }
}

export { World }
