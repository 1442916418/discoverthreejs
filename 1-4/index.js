import { World } from './world/world.js'

/**
 * 主入口
 * @description
 *  设置 World 应用程序
 */
function main() {
  const container = document.querySelector('#scene-container')

  const world = new World(container)

  world.render()
}

main()
