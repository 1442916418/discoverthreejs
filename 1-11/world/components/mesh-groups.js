import { Group, Mesh, MeshStandardMaterial, SphereGeometry, MathUtils, BoxGeometry } from 'three'

function createMeshGroups() {
  const group = new Group()

  const geometry = new SphereGeometry(0.25, 16, 16)
  const material = new MeshStandardMaterial({ color: 'indigo' })
  const protoSphere = new Mesh(geometry, material)

  const boxGeometry = new BoxGeometry(0.25, 0.25, 1)
  const protoBox = new Mesh(boxGeometry, material)

  for (let i = 0; i < 20; i++) {
    const isEven = i % 2 === 0
    const n = i * 0.05
    const child = isEven ? protoBox.clone() : protoSphere.clone()

    child.position.x = Math.cos(2 * Math.PI * n)
    child.position.y = Math.sin(2 * Math.PI * n)

    child.scale.multiplyScalar(0.01 + n)

    group.add(child)
  }

  group.add(protoSphere)
  group.scale.multiplyScalar(2)

  const radiansPerSecond = MathUtils.degToRad(30)

  group.tick = (delta) => {
    group.rotation.z -= delta * radiansPerSecond
  }

  return group
}

export { createMeshGroups }
