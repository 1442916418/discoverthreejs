const setSize = (container, camera, renderer) => {
  const { clientWidth, clientHeight } = container

  camera.aspect = clientWidth / clientHeight

  camera.updateProjectionMatrix()

  renderer.setSize(clientWidth, clientHeight)

  renderer.setPixelRatio(window.devicePixelRatio)
}

/**
 * 缩放类
 */
class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer)

    window.addEventListener('resize', () => {
      setSize(container, camera, renderer)

      if ('onResize' in this) {
        this.onResize()
      }
    })
  }
}

export { Resizer }
