// 1 初始设置
// 1.1 从 three.js 中导入类
import { Scene, WebGL1Renderer, PerspectiveCamera, Mesh, MeshBasicMaterial, BoxGeometry, Color } from 'three'

// 1.2 获取容器
const container = document.querySelector('#scene-container')

// 2 创建场景
// 2.1 创建场景
const scene = new Scene()

// 2.2 设置场景背景颜色
scene.background = new Color('skyblue')

// 3 创建相机（透视投影）
const fov = 35 // 视野
const aspect = container.clientWidth / container.clientHeight // 纵横比
const near = 0.1 // 近剪裁平面
const far = 100 // 远剪裁平面

// 3.1 创建相机（视锥体）
const camera = new PerspectiveCamera(fov, aspect, near, far)

// 3.2 定位相机
camera.position.set(0, 0, 10)

// 4. 创建一个可见对象
// 4.1 创建集合体
const geometry = new BoxGeometry(2, 2, 2)

// 4.1 创建材质
const material = new MeshBasicMaterial()

// 4.2 创建网格
const mesh = new Mesh(geometry, material)

// 4.3 网格添加到场景中
scene.add(mesh)

// 5 创建渲染器
// 5.1 创建
const renderer = new WebGL1Renderer()

// 5.2 设置渲染器大小
renderer.setSize(container.clientWidth, container.clientHeight)

// 5.3 设置设备像素比（DPR）
renderer.setPixelRatio(window.devicePixelRatio)

// 5.4 将元素 canvas 添加到页面里
container.append(renderer.domElement)

// 6 渲染场景
renderer.render(scene, camera)
