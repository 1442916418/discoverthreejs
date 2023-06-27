function stupeModel(data) {
  if (!data || !data.scene) return void 0

  const model = data.scene.children[0]

  return model
}

export { stupeModel }
