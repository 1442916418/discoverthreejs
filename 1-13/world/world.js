import { createCamera } from './components/camera.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'
import { createAxesHelper } from './components/helpers.js'
import { loadBirds } from './components/birds/birds.js'

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

    scene.add(mainLight, ambientLight)
    scene.add(createAxesHelper())

    const resizer = new Resizer(container, camera, renderer)

    loop.updatables.push(controls)
  }

  async init() {
    const { parrot, stork, flamingo } = await loadBirds()
    // const list = [parrot, stork, flamingo]
    // let index = 0

    // controls.target.copy(list[index].position)

    // setInterval(() => {
    //   index++

    //   if (index >= list.length) {
    //     index = 0
    //   }

    //   controls.target.copy(list[index].position)
    // }, 1000 * 5)

    parrot && scene.add(parrot)
    stork && scene.add(stork)
    flamingo && scene.add(flamingo)
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
