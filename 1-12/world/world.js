import { createCamera } from './components/camera.js'
import { createScene } from './components/scene.js'
import { createLights } from './components/lights.js'
import { createOriginAxesHelper, createAxesHelper, createGridHelper } from './components/helpers.js'
import { Train, createTrains , createTrainGroups} from './components/train/train.js'

import { createRenderer } from './systems/renderer.js'
import { Resizer } from './systems/resizer.js'
import { Loop } from './systems/loop.js'
import { createControls } from './systems/controls.js'

let camera = void 0
let renderer = void 0
let scene = void 0
let loop = void 0

/**
 * World 类
 */
class World {
  constructor(container) {
    camera = createCamera()
    renderer = createRenderer()
    scene = createScene()
    loop = new Loop(camera, scene, renderer)

    container.append(renderer.domElement)

    const train = new Train()
    // const train = createTrains()
    // const train = createTrainGroups()

    const { mainLight, ambientLight } = createLights()

    scene.add(train, mainLight, ambientLight)
    scene.add(createOriginAxesHelper(), createAxesHelper(), createGridHelper()) 

    const controls = createControls(camera, renderer.domElement)
    const resizer = new Resizer(container, camera, renderer)

    loop.updatables.push(controls, train)
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
