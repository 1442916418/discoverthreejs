import { DirectionalLight, PointLight, SpotLight } from 'three'

/**
 * 创建定向光光源
 */
function createLights() {
  const light = new DirectionalLight('white', 8)

  light.position.set(10, 10, 10)

  let max = 1
  let increasing = true

  light.tick = (delta) => {
    if (increasing) {
      max += 1
      if (max >= 50) {
        increasing = false
      }
    } else {
      max -= 1
      if (max <= 1) {
        increasing = true
      }
    }

    light.position.x = max
  }

  return light
}

/**
 * 创建点光源
 */
function createPointLights() {
  const pointLight = new PointLight(0xff0000, 8)

  pointLight.position.set(150, 50, 50)

  return pointLight
}

/**
 * 创建聚光灯光源
 */
function createSpotLights() {
  const spotLight = new SpotLight(0x00ff00, 10)

  spotLight.position.set(-100, -50, 0)

  return spotLight
}

export { createLights, createPointLights, createSpotLights }
