import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { stupeModel } from './stupe-module.js'

async function loadCubes() {
  const load = new GLTFLoader()

  // model1: 立方体 model2: 立方体 + 圆柱体 model3.glb: 理工大学校区 wine_bottles_01_4k.gltf: 酒瓶
  const [cube1Data] = await Promise.all([load.loadAsync('assets/models/model3.glb')])
  console.log('🚀 ~ file: cube.js:8 ~ loadCubes ~ cube1Data:', cube1Data)

  const cube1 = stupeModel(cube1Data)
  cube1.position.set(0, 0, 0)
  cube1.scale.set(0.25, 0.25, 0.25)
  // cube1.scale.set(1, 1, 1)

  return { cube1 }
}

export { loadCubes }
