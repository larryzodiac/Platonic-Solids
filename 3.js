// ------------------------------------------------- //
// Evan MacHale - N00150552
// Working Three.js
// Testing Half-Edge Data Structure
// ------------------------------------------------- //

const init = () => {
  var scene = new THREE.Scene();

	var box = getBox(1, 1, 1);
	scene.add(box);

	var camera = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1000);
	camera.position.x = 1;
	camera.position.y = 2;
	camera.position.z = 5;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.getElementById('webgl').appendChild(renderer.domElement);
	renderer.render(scene,camera);
}

// ------------------------------------------------- //
// Get Box Fucntion
// ------------------------------------------------- //

const getBox = (w,h,d) => {
  var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({color:'red',wireframe:true});
	var mesh = new THREE.Mesh(geometry,material);
	return mesh;
}

init();
