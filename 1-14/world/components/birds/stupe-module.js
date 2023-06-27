import { AnimationMixer } from "three"

function stupeModel(data) {
  if (!data || !data.scene) return void 0

  const model = data.scene.children[0]
  const clip = data.animations[0]

  const mixer = new AnimationMixer(model)
  const action = mixer.clipAction(clip)
  action.play()

  model.tick = (delta) => mixer.update(delta)

  return model
}

export { stupeModel }
