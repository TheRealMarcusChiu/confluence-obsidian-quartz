---
title: "Three.js"
created: 2019-12-21T17:34:58.938-06:00
modified: 2025-10-15T22:14:51.138-05:00
parent: "[[WebGL - Frameworks]]"
children: []
---
###### Three.js ([https://threejs.org/](https://threejs.org/))
- is a cross-browser [[JavaScript]] library and API used to create and display animated 3D computer graphics in a web browser
- is a [[JavaScript - WebGL 1 & 2|WebGL]] framework

# Introduction
- documentation - [https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- examples - [https://threejs.org/examples/#webgl_animation_cloth](https://threejs.org/examples/#webgl_animation_cloth)
- editor - [https://threejs.org/editor/](https://threejs.org/editor/)

# Fundamentals
- [https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html](https://threejsfundamentals.org/threejs/lessons/threejs-fundamentals.html)

# Example HTML
```xml
<html>
<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r71/three.min.js"></script>
	<style>
		/* We want our scene to span the entire window */
		body { margin: 0; }
	</style>
</head>
<body>
	<script>
		var scene;
		var camera;
		var renderer;

		// function to set up scene & camera
		function scene_setup(){
			// First Initialize Scene & Camera
			scene = new THREE.Scene();
			camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

			// Create WebGL renderer, then add it into document
			renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );
		}

		// function to render everything
		function render() {
			requestAnimationFrame( render );
			renderer.render( scene, camera );
		}

		scene_setup();
		// TODO: add your code here!
		render();
	</script>
</body>
</html>
```
# Other
- [[Three.js Shading Language (TSL)]]
