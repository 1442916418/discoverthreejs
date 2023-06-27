import { Group, MathUtils } from 'three'

import { createMeshes } from './meshes.js'

const wheelSpeed = MathUtils.degToRad(24)

class Train extends Group {
  constructor() {
    super()

    this.meshes = createMeshes()

    this.add(
      this.meshes.nose,
      this.meshes.cabin,
      this.meshes.chimney,
      this.meshes.smallWheelRear,
      this.meshes.smallWheelCenter,
      this.meshes.smallWheelFront,
      this.meshes.bigWheel
    )
  }

  tick(delta) {
    this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta
    this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta
    this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta
    this.meshes.bigWheel.rotation.y += wheelSpeed * delta
  }
}

function createTrains() {
  const train = new Train()
  const train1 = train.clone()

  train1.position.set(6, 0, 0)

  return { train, train1 }
}

function createTrainGroups() {
  const group = new Group()
  const train = new Train()
  const xSpace = 6
  const zSpace = 3

  for (let i = 0; i <= 5; i++) {
    for (let j = 0; j <= 5; j++) {
      const child = train.clone()

      child.position.set(i ? i * xSpace : 0, 0, j ? j * zSpace : 0)

      group.add(child)
    }
  }

  
  group.tick = (delta) => {
    group.children.forEach((ele) => {
      ele.tick(delta)
    })
  }

  return group
}

export { Train, createTrains, createTrainGroups }
