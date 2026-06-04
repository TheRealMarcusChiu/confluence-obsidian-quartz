---
title: "PlayCanvas Examples"
created: 2025-09-11T00:22:59.479-05:00
modified: 2025-09-13T03:22:31.461-05:00
parent: "[[PlayCanvas WebGL Game Engine]]"
children: []
---
Rendering [[3D Gaussian Splatting (3DGS) File Formats]]

> [!expand-ui]- Engine API - PLY / Bundled SOG File
> Rendering:
> - [[3DGS Polygon File Format (PLY)]]
> - Bundled SOG File
>
> ```
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="utf-8">
>     <style>
>         body { margin: 0; overflow: hidden; }
>     </style>
>     <script type="importmap">
>         {
>             "imports": {
>                 "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas/+esm"
>             }
>         }
>     </script>
> </head>
> <body>
> <script type="module" src="main.js"></script>
> </body>
> </html>
> ```
> ```
> import { Application, Asset, AssetListLoader, Entity, FILLMODE_FILL_WINDOW, RESOLUTION_AUTO } from 'playcanvas';
>
> // Create application
> const canvas = document.createElement('canvas');
> document.body.appendChild(canvas);
>
> const app = new Application(canvas, {
>     graphicsDeviceOptions: {
>         antialias: false
>     }
> });
> app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
> app.setCanvasResolution(RESOLUTION_AUTO);
> app.start();
>
> window.addEventListener('resize', () => app.resizeCanvas());
>
> // Load assets
> const assets = [
>     new Asset('camera-controls', 'script', {
>         url: 'https://cdn.jsdelivr.net/npm/playcanvas/scripts/esm/camera-controls.mjs'
>     }),
>     new Asset('toy', 'gsplat', {
>         url: 'https://developer.playcanvas.com/assets/toy-cat.sog'
>     })
> ];
>
> const loader = new AssetListLoader(assets, app.assets);
> await new Promise(resolve => loader.load(resolve));
>
> // Create camera entity
> const camera = new Entity('Camera');
> camera.setPosition(0, 0, 2.5);
> camera.addComponent('camera');
> camera.addComponent('script');
> camera.script.create('cameraControls');
> app.root.addChild(camera);
>
> // Create splat entity
> const splat = new Entity('Toy Cat');
> splat.setPosition(0, -0.7, 0);
> splat.setEulerAngles(0, 0, 180);
> splat.addComponent('gsplat', { asset: assets[1] });
> app.root.addChild(splat);
> ```

> [!expand-ui]- Engine API - Unbundled SOG
> ![[PlayCanvas Examples/play-canvas-engine-api-unbundled-sogs-example.png]]
>
> Rendering unbundled SOG
> ```
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="utf-8">
>     <style>
>         body { margin: 0; overflow: hidden; }
>     </style>
>     <script type="importmap">
>         {
>             "imports": {
>                 "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas/+esm"
>             }
>         }
>     </script>
> </head>
> <body>
> <script type="module" src="main.js"></script>
> </body>
> </html>
> ```
> ```
> import { Application, Asset, AssetListLoader, Entity, FILLMODE_FILL_WINDOW, RESOLUTION_AUTO } from 'playcanvas';
>
> // Create application
> const canvas = document.createElement('canvas');
> document.body.appendChild(canvas);
>
> const app = new Application(canvas, {
>     graphicsDeviceOptions: {
>         antialias: false
>     }
> });
> app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
> app.setCanvasResolution(RESOLUTION_AUTO);
> app.start();
>
> window.addEventListener('resize', () => app.resizeCanvas());
>
> // Load assets
> const assets = [
>     new Asset('camera-controls', 'script', {
>         url: 'https://cdn.jsdelivr.net/npm/playcanvas/scripts/esm/camera-controls.mjs'
>     }),
>     new Asset(null, 'gsplat', {url: 'data/meta.json'}, null, {
>         mapUrl: mapUrl => {
>             return 'data/' + mapUrl; // for fetching *.webp files
>         }
>     })
> ];
>
> const loader = new AssetListLoader(assets, app.assets);
> await new Promise(resolve => loader.load(resolve));
>
> // Create camera entity
> const camera = new Entity('Camera');
> camera.setPosition(0, 0, 2.5);
> camera.addComponent('camera');
> camera.addComponent('script');
> camera.script.create('cameraControls');
> app.root.addChild(camera);
>
> // Create splat entity
> const splat = new Entity('Toy Cat');
> splat.setPosition(0, 0, 0);
> splat.setEulerAngles(0, 0, 180);
> splat.addComponent('gsplat', { asset: assets[1] });
> //splat.gsplat.material.setDefine('GSPLAT_AA', true);
> //splat.gsplat.highQualitySH = true;
> app.root.addChild(splat);
> ```

> [!expand-ui]- Web Components - PLY / Bundled SOG File
> ```
> <!DOCTYPE html>
> <html lang="en">
> <head>
>     <meta charset="UTF-8">
>     <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
>     <title>My PlayCanvas Web Components App</title>
>     <script type="importmap">
>         {
>             "imports": {
>                 "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas@latest/build/playcanvas.mjs"
>             }
>         }
>     </script>
>     <script type="module" src="https://cdn.jsdelivr.net/npm/@playcanvas/web-components@latest/dist/pwc.mjs"></script>
>     <style>
>         body {
>             margin: 0;
>             overflow: hidden;
>         }
>     </style>
> </head>
> <body>
>     <!-- Your PlayCanvas Web Components elements go here -->
>     <pc-app antialias="false" high-resolution="false">
>         <pc-asset src="https://cdn.jsdelivr.net/npm/playcanvas/scripts/esm/camera-controls.mjs"></pc-asset>
>         <pc-asset id="toy" src="https://developer.playcanvas.com/assets/toy-cat.sog"></pc-asset>
>         <pc-scene>
>             <pc-entity position="0 0 2.5">
>                 <pc-camera></pc-camera>
>                 <pc-scripts>
>                     <pc-script name="cameraControls"></pc-script>
>                 </pc-scripts>
>             </pc-entity>
>             <pc-entity position="0 -0.7 0" rotation="0 0 180">
>                 <pc-splat asset="toy"></pc-splat>
>             </pc-entity>
>         </pc-scene>
>     </pc-app>
> </body>
> </html>
> ```
