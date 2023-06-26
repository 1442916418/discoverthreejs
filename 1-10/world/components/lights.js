import { DirectionalLight, PointLight, SpotLight, AmbientLight, HemisphereLight, Color } from 'three'

/**
 * 创建定向光光源
 */
function createLights() {
  // 环境光
  // const ambientLight = new AmbientLight(0xffffff, 2)

  // 半球光
  const ambientLight = new HemisphereLight(0xffffff, 0xffffff, 1)

  // ambientLight.color = new Color(0xff0000)
  // ambientLight.groundColor = new Color(0x00ff00)
  // ambientLight.intensity = 2
  // ambientLight.position.set(0, 1, 0)

  const mainLight = new DirectionalLight('white', 8)

  mainLight.visible = true
  mainLight.position.set(10, 10, 10)

  mainLight.tick = (delta) => {}

  return { mainLight, ambientLight }
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
