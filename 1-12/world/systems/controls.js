import { OrbitControls } from 'three/OrbitControls'

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)

  controls.target.y = 1

  // 启用阻尼
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  controls.tick = () => controls.update()

  return controls
}

export { createControls }
