import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { stupeModel } from './stupe-module.js'

async function loadBirds() {
  const load = new GLTFLoader()

  const [parrotData, storkData, flamingoData] = await Promise.all([
    load.loadAsync('assets/models/Parrot.glb'),
    load.loadAsync('assets/models/Stork.glb'),
    load.loadAsync('assets/models/Flamingo.glb')
  ])

  const parrot = stupeModel(parrotData)
  console.log('🚀 ~ file: birds.js:14 ~ loadBirds ~ parrotData:', parrotData)
  parrot.position.set(0, 0, 0.25)
  
  const stork = stupeModel(storkData)
  stork.position.set(7.5, 0, -10)
  
  const flamingo = stupeModel(flamingoData)
  flamingo.position.set(0, 2.5, -10)

  return { parrot, stork, flamingo }
}

export { loadBirds }
