import { DirectionalLight, PointLight, SpotLight, AmbientLight, HemisphereLight, Color } from 'three'

/**
 * 创建定向光光源
 */
function createLights() {
  // 半球光
  const hemisphereLight = new HemisphereLight('white', 'darkslategrey', 5)

  // 环境光
  const ambientLight = new AmbientLight('white', 2)

  const mainLight = new DirectionalLight('white', 1)

  mainLight.position.set(0, 100, 50)

  mainLight.tick = (delta) => {}

  return { mainLight, ambientLight, hemisphereLight }
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
