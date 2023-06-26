import { OrbitControls } from 'three/OrbitControls'
import { MathUtils } from 'three'

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas)

  // 启用阻尼
  controls.enableDamping = true
  controls.dampingFactor = 0.05

  // 限制缩放
  controls.minDistance = 5
  controls.maxDistance = 10

  // 自动旋转
  controls.autoRotate = false
  controls.autoRotateSpeed = 3

  // 禁用旋转
  controls.enableRotate = true

  // 禁用缩放
  controls.enableZoom = true

  // 禁用平移
  controls.enablePan = true

  // 限制水平旋转
  controls.minAzimuthAngle = -Infinity
  controls.maxAzimuthAngle = Infinity

  // 限制垂直旋转
  controls.minPolarAngle = 0
  controls.maxPolarAngle = Math.PI

  controls.tick = () => controls.update()

  return controls
}

export { createControls }
