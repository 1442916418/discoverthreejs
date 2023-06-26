import { BoxGeometry, CylinderGeometry } from 'three'

function createGeometers() {
  // 货舱
  const cabin = new BoxGeometry(2, 2.25, 1.5)

  // 鼻子
  const nose  = new CylinderGeometry(0.75, 0.75, 3, 12)

  // 车轮（重复使用）
  const wheel = new CylinderGeometry(0.4, 0.4, 1.75, 16)

  // 烟囱
  const chimney = new CylinderGeometry(0.3, 0.1, 0.5, 8) 
}

export { createGeometers  }
