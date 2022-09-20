console.log(THREE)

// The Scene
const scene = new THREE.Scene()

// The Cube
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'purple' })
const mesh = new THREE.Mesh(geometry, material)

// Option 1 to see the object: Push the object BACK from the camera
// Personal notes: This will render the exact same thing as Option 2 below.
mesh.position.z = -3;
mesh.position.x = -1;
mesh.position.y = -1;
scene.add(mesh)

const sizes = {
  width: 800,
  height: 600
}

// The Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// Option 2 to see the object: Move the camera backwards (course demo)
// camera.position.z = 3
// camera.position.x = 1
// camera.position.y = 1
scene.add(camera)


// The Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById('webgl')
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)