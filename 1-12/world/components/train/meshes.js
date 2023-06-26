import { Mesh } from 'three'

import { createGeometers } from './geometries.js'
import { createMaterials } from './materials.js'

function createMeshes() {
  const geometries = createGeometers()
  const materials = createMaterials()
}

export { createMeshes }
