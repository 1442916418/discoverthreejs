function stupeModel(data) {
  if (!data || !data.scene) return void 0

  const model = data.scene

  // model.traverse(function (child) {
  //   if (child.isMesh) {
  //     if (child.name === 'cube-2') {
  //       // 处理子网格的材质
  //       const material = child.material

  //       // 在这里设置材质的透明度
  //       material.transparent = true // 启用材质的透明度
  //       material.opacity = 0.5 // 设置透明度值，可以根据需要进行调整
  //     }
  //   }
  // })

  model.traverse(function (child) {
    if (child.isMesh) {
      // 处理子网格的材质
      const material = child.material

      child.material.emissive = material.color
      // child.material.emissiveMap = material.map
    }
  })

  console.log('🚀 ~ file: stupe-module.js:30 ~ stupeModel ~ model:', model)
  return model
}

export { stupeModel }
