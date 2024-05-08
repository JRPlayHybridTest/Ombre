const facemeshTextureURL = 'https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.2/examples/face-tracking/assets/canonical_face_model_uv_visualization.png';
const URL_darkBackground = "https://cdn.glitch.global/039bcd98-bd9c-471a-9c87-97eaf687fdf0/Intro_Circle_DarkBackground_2.png?v=1708505264709";

// Old face mesh assets
// const URL_facemeshCheekLeftTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTtiLzwxB8efSbMbr0sXnpiv6xw2YxbXlGKJRpAnh6f0YK521LTSDMQdJpzx2Tc9Yeq2TX_CAxKOxRaYa8nTFe5fhMkpw=s1600";
// const URL_facemeshCheekRightTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYT6BiXQ3rpPMJIlnmXdU24Pk17zvMWyB_sl-HvuaAFLRr_swIlh60M_nWyY6Nm3U-BFAafxU6D-M4vkBbuOXjJC4rxKww=s1600";
// const URL_facemeshChinTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRgDHW0EI064lUJqZx9fi1vVhsWNzXDyJCRUE9-4VJVpvlwVk6kCy0WaVaYZIPY1aGE4oqLHfjOblz-Q4fYgnSIdvkwLw=s1600";
// const URL_facemeshEyeLeftTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYTvmVylovliDzKxclomr9Et6RIrYKWCtWYst9ktFvG32PjuOIJWbn4xtFlV8VrU-Ej9LNjsxbTsKZN4Q1Fok7AoV8qCYw=s1600";
// const URL_facemeshEyeRightTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRXc0Qo7Dz3Vh-gvv8Mv1FbZcDYNq_geIURaz9iICBLqYwaWRmtKC4yb25Tnb0I8I_YAMFr35eakkpr9CxJGUZ6bazWNw=s1600";
// const URL_facemeshNoseTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRa85e9R4S0Vgb9dffQsbfY57l29tA9ckFFnPTPWVBHxxgNKG80Eb62ig0xuXJHoTVbgV9cgRawF_5B1_NGzmYC4e1s=s1600";
// const URL_facemeshForeheadTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQnWlz3j588OYwg7qwbCNlOrds_S-5stWgfyhA_cbsilaIb5UbHdE-g9-8zkYW6N7t4UBhABE-PzkA3Wy7IIYBbEFug=s1600";

// Updated regular face mesh assets
const URL_facemeshCheekLeftTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSZWpnBhdb-yMrYCGIS3gZIWFuPVJtfdK3iMxNwgg7Y9e7LtyV3SwuVXaTCDwGcuL0WppvruThjxDk-2Armrc2tVrgqQQ=s1600";
const URL_facemeshCheekRightTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQZOsGE-xVKS0CP3D9nHIIssAKouEu5VtFxc4mDIbhVr49XebhZxgwCadZNsokFqZr98UnneFk5IkMdjEG8HctZxbwp=s1600";
const URL_facemeshChinTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYS302-cw47WNoPy8-S8aNfWHR06IAbjGy0Md8a7ZJRJYBkUC_uaW0YscCGNJK17msVtMy1yKvmtIEc0o5HR9e0b1KoyQg=s1600";
// const URL_facemeshNoseTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYR2R_wvXf39a_voPNp_Sym1eG-pWo5dxiRMLr8LgnET0ItR3xJJQde9g9i0cBRpqsvfqRuSYoPMNGZ5YLCArxx77iG6hg=s1600"

// Thick lines
// const URL_facemeshCheekLeftTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQdLwRmS5Ela1r7dA4dV2pRd07agpqQr9gxOOGEdsQC_OsSxHp_VA5ouVMqb5Tq6iAxnH5c6mXV9t4ZAkOruFcToApHHw=s1600";
// const URL_facemeshCheekRightTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQKiz2ANJYMRS3fJa6B-3Lop8CFKasrGsGgdIAi5SqT1bJ3Xtzg1H2paXCskfJ5YsHbPyWOVjce4oNQOjDzZlcVMQDC6Q=s1600";
// const URL_facemeshChinTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYS1tCC98zpj4IJf3tME7JV-A50EP725hmHqniV2mDcvhCat2uXR-GrUbH_5dj5QFVQU3ImGtLFHS7M-bQeqKW6qWEGXqg=s1600";
// const URL_facemeshNoseTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSB6DGDve3ut5nKRZLCWduPI0vvr_qIBMGmcz0xwsr79hf6EIYdJCSCIGMVjeXDM12SPIm8jRSrpqZkQ2M6o706buLF1A=s1600";


// Filled lines
// const URL_facemeshCheekLeftTextureURL ="https://lh3.googleusercontent.com/drive-viewer/AEYmBYStSf_4bs3nnDVuIemFdXvV2xbpsgUQIW1hOhXS7vF1idrbzFLiwc8aKTBtd_jTwV7OMigiw19YMGMkou8I-_PhQEFNkg=s1600";
// const URL_facemeshCheekRightTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYSFWGCd_CPVBPmBKWkGwWa3JbV2oxgedQv9nMFrGZnsQcSe1IvtN3-gqDyyTBXAYBkJtG_pTVWblx1D1Ra0FEBV_dnmKA=s1600";
// const URL_facemeshChinTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYQ61DVrrDPcODxhM1BqJamZ1wCFJLUOIGODZvl6hG3E0MNIn1GDEdIheBF8DAtphty6IASHaIdWVSYwi3OyJzteUn8PlQ=s1600";
// const URL_facemeshNoseTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYRUvba8z4zYd6XqWQCeU-r6DtOsfzPW2oxxyznby8eEuve6bipnWCt3gQoWKmuXVx2opiDRqpqN2ZBfjAwW9u92E4ZA=s1600";

//Stretched
const URL_facemeshNoseTextureURL = "https://lh3.googleusercontent.com/drive-viewer/AEYmBYT_azzJnDy46hd4wOuBoJ5rU8YsdHJzxbZrN-3f6TTo7__LQplPX-8iadYurJ5d7oXqWjvu1bldHy36rhf4J-ACZkRaBQ=s1600";

const URL_facemeshForeheadTextureURL = "https://cdn.glitch.global/039bcd98-bd9c-471a-9c87-97eaf687fdf0/Forehead_2.png?v=1708403559505";
const URL_facemeshModelURL = "https://cdn.glitch.global/039bcd98-bd9c-471a-9c87-97eaf687fdf0/Face.fbx?v=1708403554832";


import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';
import { TWEEN } from 'https://unpkg.com/three@0.139.0/examples/jsm/libs/tween.module.min.js';
import { FBXLoader } from 'https://unpkg.com/three@0.153.0/examples/jsm/loaders/FBXLoader.js';
import {LightQuality} from './light-quality.js'

class Facemesh {
  constructor() {
    this.forehead = null;
    this.foreheadTexture = null;
    this.cheekLeft = null;
    this.cheekLeftTexture = null;
    this.cheekRight = null;
    this.cheekRightTexture = null;
    this.chin = null;
    this.chinTexture = null;
    this.nose = null
    this.noseTexture = null;    
  }
  async init() {      
    
  const { renderer, scene, camera } = mindarThree;
    const loader = new FBXLoader();
    const textureLoader = new THREE.TextureLoader();
    const foreheadTexture = await new Promise((resolve) => {
      resolve(textureLoader.load(URL_facemeshForeheadTextureURL));
    }).then((texture) => {
      this.foreheadTexture = texture;
    });
    
    const forehead = await new Promise((resolve) => {
      loader.load(URL_facemeshModelURL, (fbx) => {
        resolve(fbx);
      });
    }).then((object) => {
      object.children[0].material = new THREE.MeshStandardMaterial();
      var material = object.children[0].material;
      object.scale.set(0.06, 0.06, 0.06);
      object.position.set(0,0.1,-0.4);
      object.material = new THREE.MeshStandardMaterial();
      object.material.map = this.foreheadTexture;
      object.material.transparent = true;
      object.material.needsUpdate = true;
      //object.material.opacity = 0;
      object.material.color.setHex( 0xffffff );
      material.map = this.foreheadTexture;
      material.transparent = true;
      material.needsUpdate = true;
      material.opacity = 0;
      material.color.setHex( 0xffffff );
      //anchor.add(object);
      //object.material.visible = true;
      material.visible = false;
      this.forehead = object;
      
    });  
    
    const cheekLeftTexture = await new Promise((resolve) => {
      resolve(textureLoader.load(URL_facemeshCheekLeftTextureURL));
    }).then((texture) => {
      this.cheekLeftTexture = texture;
    });
    
    const cheekLeft = await new Promise((resolve) => {
      resolve(mindarThree.addFaceMesh());
    }).then((object) => {
      object.material.map = this.cheekLeftTexture;
      object.material.transparent = true;
      object.material.needsUpdate = true;
      object.material.opacity = 0;
      object.material.color.setHex( 0xffffff );
      scene.add(object);
      object.material.visible = false;
      this.cheekLeft = object;
    }); 
    
    const cheekRightTexture = await new Promise((resolve) => {
      resolve(textureLoader.load(URL_facemeshCheekRightTextureURL));
    }).then((texture) => {
      this.cheekRightTexture = texture;
    });
    
    const cheekRight = await new Promise((resolve) => {
      resolve(mindarThree.addFaceMesh());
    }).then((object) => {
      object.material.map = this.cheekRightTexture;
      object.material.transparent = true;
      object.material.needsUpdate = true;
      object.material.opacity = 0;
      object.material.color.setHex( 0xffffff );
      scene.add(object);
      object.material.visible = false;
      this.cheekRight = object;
    });
    
    const chinTexture = await new Promise((resolve) => {
      resolve(textureLoader.load(URL_facemeshChinTextureURL));
    }).then((texture) => {
      this.chinTexture = texture;
    });
    
    const chin = await new Promise((resolve) => {
      resolve(mindarThree.addFaceMesh());
    }).then((object) => {
      object.material.map = this.chinTexture;
      object.material.transparent = true;
      object.material.needsUpdate = true;
      object.material.opacity = 0;
      object.material.color.setHex( 0xffffff );
      scene.add(object);
      object.material.visible = false;
      this.chin = object;
    });
    
    const noseTexture = await new Promise((resolve) => {
      resolve(textureLoader.load(URL_facemeshNoseTextureURL));
    }).then((texture) => {
      this.noseTexture = texture;
    });
    
    const nose = await new Promise((resolve) => {
      resolve(mindarThree.addFaceMesh());
    }).then((object) => {
      object.material.map = this.noseTexture;
      object.material.transparent = true;
      object.material.needsUpdate = true;
      object.material.opacity = 0;
      object.material.color.setHex( 0xffffff );
      scene.add(object);
      object.material.visible = false;
      this.nose = object;
    });
  }
}

let mindarThree = null;
let facemesh = null;
let anchor = null;
let lightQuality = null;

const setup = async () => {
  mindarThree = new MindARThree({
    container: document.querySelector("#container"),
  });
  const { renderer, scene, camera } = mindarThree;
  const light = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
  scene.add(light);
  anchor = mindarThree.addAnchor(1);
  lightQuality = new LightQuality();
}

// const visibleHeightAtZDepth = ( depth, camera ) => {
//   // compensate for cameras not positioned at z=0
//   const cameraOffset = camera.position.z;
//   if ( depth < cameraOffset ) depth -= cameraOffset;
//   else depth += cameraOffset;

//   // vertical fov in radians
//   const vFOV = camera.fov * Math.PI / 180; 

//   // Math.abs to ensure the result is always positive
//   return 2 * Math.tan( vFOV / 2 ) * Math.abs( depth );
// };

// const visibleWidthAtZDepth = ( depth, camera ) => {
//   const height = visibleHeightAtZDepth( depth, camera );
//   return height * camera.aspect;
// };

// const faceMeshCheekLeft = mindarThree.addFaceMesh();
// const textureCheekLeft = textureLoader.load(URL_facemeshCheekLeftTextureURL);
// faceMeshCheekLeft.material.map = textureCheekLeft;
// faceMeshCheekLeft.material.transparent = true;
// faceMeshCheekLeft.material.needsUpdate = true;
// faceMeshCheekLeft.material.opacity = 0;
// faceMeshCheekLeft.material.color.setHex( 0xffffff );
// scene.add(faceMeshCheekLeft);
// faceMeshCheekLeft.material.visible = false;


// const faceMeshCheekRight = mindarThree.addFaceMesh();
// const textureCheekRight = textureLoader.load(URL_facemeshCheekRightTextureURL);
// faceMeshCheekRight.material.map = textureCheekRight;
// faceMeshCheekRight.material.transparent = true;
// faceMeshCheekRight.material.needsUpdate = true;
// faceMeshCheekRight.material.opacity = 0;
// faceMeshCheekRight.material.color.setHex( 0xffffff );
// scene.add(faceMeshCheekRight);
// faceMeshCheekRight.material.visible = false;


// const faceMeshChin = mindarThree.addFaceMesh();
// const textureChin = textureLoader.load(URL_facemeshChinTextureURL);
// faceMeshChin.material.map = textureChin;
// faceMeshChin.material.transparent = true;
// faceMeshChin.material.needsUpdate = true;
// faceMeshChin.material.opacity = 0;
// faceMeshChin.material.color.setHex( 0xffffff );
// scene.add(faceMeshChin);
// faceMeshChin.material.visible = false;


// const faceMeshEyeLeft = mindarThree.addFaceMesh();
// const textureEyeLeft = textureLoader.load(URL_facemeshEyeLeftTextureURL);
// faceMeshEyeLeft.material.map = textureEyeLeft;
// faceMeshEyeLeft.material.transparent = true;
// faceMeshEyeLeft.material.needsUpdate = true;
// faceMeshEyeLeft.material.opacity = 0;
// faceMeshEyeLeft.material.color.setHex( 0xffffff );
// scene.add(faceMeshEyeLeft);
// faceMeshEyeLeft.material.visible = false;


// const faceMeshEyeRight = mindarThree.addFaceMesh();
// const textureEyeRight = textureLoader.load(URL_facemeshEyeRightTextureURL);
// faceMeshEyeRight.material.map = textureEyeRight;
// faceMeshEyeRight.material.transparent = true;
// faceMeshEyeRight.material.needsUpdate = true;
// faceMeshEyeRight.material.opacity = 0;
// faceMeshEyeRight.material.color.setHex( 0xffffff );
// scene.add(faceMeshEyeRight);
// faceMeshEyeRight.material.visible = false;


// const faceMeshNose = mindarThree.addFaceMesh();
// const textureNose = textureLoader.load(URL_facemeshNoseTextureURL);
// faceMeshNose.material.map = textureNose;
// faceMeshNose.material.transparent = true;
// faceMeshNose.material.needsUpdate = true;
// faceMeshNose.material.opacity = 0;
// faceMeshNose.material.color.setHex( 0xffffff );
// scene.add(faceMeshNose);
// faceMeshNose.material.visible = false;


// const faceMeshForehead = mindarThree.addFaceMesh();
// const textureForehead = textureLoader.load(URL_facemeshForeheadTextureURL);
// faceMeshForehead.material.map = textureForehead;
// faceMeshForehead.material.transparent = true;
// faceMeshForehead.material.needsUpdate = true;
// faceMeshForehead.material.opacity = 0;
// faceMeshForehead.material.color.setHex( 0xffffff );
// scene.add(faceMeshForehead);
// faceMeshForehead.material.visible = false;

// const textureForehead = textureLoader.load(URL_facemeshForeheadTextureURL);
// const fbxLoader = new FBXLoader()
// let forehead;
// async function foreheadInit() {
//           fbxLoader.load(
//     'https://cdn.glitch.global/039bcd98-bd9c-471a-9c87-97eaf687fdf0/Face.fbx?v=1708403554832',
//     (object) => {
//         object.scale.set(0.01, 0.01, 0.01)
//         object.material = new THREE.MeshBasicMaterial();
//         object.material.map = textureForehead;
//         object.material.transparent = true;
//         object.material.needsUpdate = true;
//         object.material.opacity = 0;
//         object.material.color.setHex( 0xffffff );
//         anchor.group.add(object);
//         object.material.visible = true;
//     },
//     (xhr) => {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     (error) => {
//         console.log(error)
//     }
//   )
// }

// () = {
//   await foreheadInit();
// }




const start = async() => {
  if (!mindarThree) {
    await setup();
  }
  await mindarThree.start();  
  const { renderer, scene, camera } = mindarThree;  
  
  facemesh = new Facemesh();
  await facemesh.init();
  anchor.group.add(facemesh.forehead);  
  
  
    //facemesh.forehead.children[0].material.visible = true;
    //facemesh.forehead.children[0].material.opacity = 1;
  
  let rendererSize = new THREE.Vector2();    
  camera.position.z = 2;
  renderer.getSize(rendererSize)
  console.log(rendererSize);
  console.log(camera.aspect);
  renderer.setAnimationLoop(() => {
    renderer.render(scene, camera);
    TWEEN.update();
  });
  
  const startButton = document.querySelector("#startButton");
  const spinningIcon = document.querySelector("#spinning-icon");
  const scanningText = document.querySelector("#scanning-text");
  const instructionText = document.querySelector("#intro-text");
  const introTitle = document.querySelector("#intro-title");
  const scanningTitle = document.querySelector("#scanning-title");
  const photo = document.querySelector("#screenshot");
  const container = document.querySelector("#container");
  const uiContainer = document.querySelector("#ui-container");
  const canvas = document.querySelector('#canvas');
  const offscreenCanvas = document.querySelector('#offscreen-canvas');
  const containerCanvas = container.querySelector('canvas:not([class]):not([id])');

  const video = container.querySelector('video');

  const floatingPanel1 = document.querySelector("#floating-panel-1");
  const floatingPanel2 = document.querySelector("#floating-panel-2");
  const floatingPanel3 = document.querySelector("#floating-panel-3");
  const floatingPanel4 = document.querySelector("#floating-panel-4");
  
  const countdown1 = document.querySelector("#countdown-1");
  const countdown2 = document.querySelector("#countdown-2");
  const countdown3 = document.querySelector("#countdown-3");
  
  const flash = document.querySelector("#flash");
  
  offscreenCanvas.width = containerCanvas.width;
  offscreenCanvas.height = containerCanvas.height;
  
  await lightQuality.init();
  
  
  const tweenOpacityOn = 1;
const tweenOffCheekLeft = new TWEEN.Tween(facemesh.cheekLeft.material).to({
  opacity: 0
  }, 1000).
  onComplete(function(){
    //tweenOnCheekLeft.start();
});

const tweenOnCheekLeft = new TWEEN.Tween(facemesh.cheekLeft.material).to({
  opacity: tweenOpacityOn
  }, 1000).
  onComplete(function(){
    tweenOffCheekLeft.start();
});

const tweenOffCheekRight = new TWEEN.Tween(facemesh.cheekRight.material).to({
  opacity: 0
  }, 1000).
  onComplete(function(){
    //tweenOnCheekRight.start();
});

const tweenOnCheekRight = new TWEEN.Tween(facemesh.cheekRight.material).to({
  opacity: tweenOpacityOn
  }, 1000).
  onComplete(function(){
    tweenOffCheekRight.start();
});

const tweenOffChin = new TWEEN.Tween(facemesh.chin.material).to({
  opacity: 0
  }, 1000).
  onComplete(function(){
    //tweenOnChin.start();
});

const tweenOnChin = new TWEEN.Tween(facemesh.chin.material).to({
  opacity: tweenOpacityOn
  }, 1000).
  onComplete(function(){
    tweenOffChin.start();
});

// const tweenOffEyeLeft = new TWEEN.Tween(faceMeshEyeLeft.material).to({
//   opacity: 0
//   }, 1000).
//   onComplete(function(){
//     //tweenOnEyeLeft.start();
// });

// const tweenOnEyeLeft = new TWEEN.Tween(faceMeshEyeLeft.material).to({
//   opacity: tweenOpacityOn
//   }, 1000).
//   onComplete(function(){
//     tweenOffEyeLeft.start();
// });

// const tweenOffEyeRight = new TWEEN.Tween(faceMeshEyeRight.material).to({
//   opacity: 0
//   }, 1000).
//   onComplete(function(){
//     //tweenOnEyeRight.start();
// });

// const tweenOnEyeRight = new TWEEN.Tween(faceMeshEyeRight.material).to({
//   opacity: tweenOpacityOn
//   }, 1000).
//   onComplete(function(){
//     tweenOffEyeRight.start();
// });

const tweenOffNose = new TWEEN.Tween(facemesh.nose.material).to({
  opacity: 0
  }, 1000).
  onComplete(function(){
    //tweenOnNose.start();
});

const tweenOnNose = new TWEEN.Tween(facemesh.nose.material).to({
  opacity: tweenOpacityOn
  }, 1000).
  onComplete(function(){
    tweenOffNose.start();
});

const tweenOffForehead = new TWEEN.Tween(facemesh.forehead.children[0].material).to({
  opacity: 0
  }, 1000).
  onComplete(function(){
    //tweenOnForehead.start();
});

const tweenOnForehead = new TWEEN.Tween(facemesh.forehead.children[0].material).to({
  opacity: tweenOpacityOn
  }, 1000).
  onComplete(function(){
    tweenOffForehead.start();
});

const getRandomTime = () => {
  var min = 0.1;
  var max = 1.5;
  var rand = Math.floor(Math.random() * (max - min + 1) + min) * 1000; //Generate Random number between 5 - 10
  //console.log('Wait for ' + rand + ' seconds');
  return rand;
}

const fadeInContainers = () => {
  loaded = true;
  container.classList.add("fadein1s");
  setTimeout(() => {
    uiContainer.classList.add("fadein1s");    
  }, 1100);
}




let loaded = false;
var mutationLoading = document.querySelector('.mindar-ui-loading');
var mutationCompatibility = document.querySelector('.mindar-ui-compatibility');
var mutationScanning = document.querySelector('.mindar-ui-scanning');
var mutationObserverConfig = { attributes: true };
let mutationLoadingHidden = false;
let mutationCompatibilityHidden = false;
let mutationScanningHidden = false;
let callbackLoading = ( mutations ) => {
	for( var mutation of mutations ) {
		if ( mutation.attributeName === 'class' ) {
      if (mutationLoading.classList.contains('hidden') && mutationCompatibility.classList.contains('hidden') && mutationScanning.classList.contains('hidden')) {
        fadeInContainers();
      }
		}
	}
};
let callbackCompatibility = ( mutations ) => {
	for( var mutation of mutations ) {
		if ( mutation.attributeName === 'class' ) {
      if (mutationLoading.classList.contains('hidden') && mutationCompatibility.classList.contains('hidden') && mutationScanning.classList.contains('hidden')) {
        fadeInContainers();
      }
		}
	}
};
let callbackScanning = ( mutations ) => {
	for( var mutation of mutations ) {
		if ( mutation.attributeName === 'class' ) {
      if (mutationLoading.classList.contains('hidden') && mutationCompatibility.classList.contains('hidden') && mutationScanning.classList.contains('hidden')) {
        fadeInContainers();
      }
		}
	}
};
let observerLoading = new MutationObserver ( callbackLoading );
observerLoading.observe ( mutationLoading, mutationObserverConfig );
let observerCompatibility = new MutationObserver ( callbackCompatibility );
observerCompatibility.observe ( mutationCompatibility, mutationObserverConfig );
let observerScanning = new MutationObserver ( callbackScanning );
observerScanning.observe ( mutationScanning, mutationObserverConfig );

if (mutationLoading.classList.contains('hidden') && mutationCompatibility.classList.contains('hidden') && mutationScanning.classList.contains('hidden')) {
  loaded = true;
  container.classList.add("fadein1s");
  uiContainer.classList.add("fadein1s");
}

// function clearphoto() {
//   const context = canvas.getContext("2d");
//   context.fillStyle = "#AAA";
//   context.fillRect(0, 0, canvas.width, canvas.height);

//   const data = canvas.toDataURL("image/png");
//   photo.setAttribute("src", data);
// }

function takepicture() {
  const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
}

startButton.addEventListener("click", () => {
  
  containerCanvas.style.aspectRatio = "640 / 480";
  const videoStyle = getComputedStyle(video);
  photo.style.left = videoStyle.left;
  photo.style.right = videoStyle.right;
  photo.style.top = videoStyle.top;
  photo.style.bottom = videoStyle.bottom;
  photo.style.width = videoStyle.width;
  photo.style.height = videoStyle.height;
  canvas.style.width = videoStyle.width;
  canvas.style.height = videoStyle.height;
  canvas.height = video.height;
  canvas.width = video.width;
  //containerCanvas.height = video.height;
  //containerCanvas.width = video.width;
  
  //video.captureStream().getTracks()[0].enabled = false;
  
  
  
  
  startButton.classList.remove("fadein1s");
  startButton.classList.add("fadeout1s");
  introTitle.classList.add("fadeout1s");
  setTimeout(() => {
    scanningTitle.classList.add("fadein1s");
  }, 500);
  // //spinningIcon.classList.remove("hidden");
  
  setTimeout(() => {
    countdown3.style.opacity = 1;
    countdown3.classList.add("fadeout1s");
  }, 2500);
  
  setTimeout(() => {
    countdown2.style.opacity = 1;
    countdown2.classList.add("fadeout1s");
  }, 3500);
  
  setTimeout(() => {
    countdown1.style.opacity = 1;
    countdown1.classList.add("fadeout1s");
  }, 4500);
  
  setTimeout(() => {
    flash.classList.add("fadeinoutflash");
    instructionText.classList.add("fadeout1s");
    scanningTitle.classList.remove("fadein1s");
    scanningTitle.classList.add("fadeout1s");
    takepicture();
    containerCanvas.style.zIndex = 8;
    let clone = facemesh.forehead.clone();
    facemesh.forehead.getWorldPosition(clone.position)
    facemesh.forehead.getWorldQuaternion(clone.rotation)
    facemesh.forehead.getWorldScale(clone.scale)
    scene.add(clone);    
    anchor.group.remove(facemesh.forehead); 
    //photo.style.zIndex = 2;
    //console.log("hi");
  }, 5500);
  
  setTimeout(() => {
    scanningText.classList.remove("hidden");
    scanningText.classList.add("fadeinoutpulse");
  }, 6000);
  
  setTimeout(() => {
    scanningText.classList.add("hidden");
    scanningText.classList.remove("fadeinoutpulse");
  }, 10000);
  
  //facemesh.chin.material.visible = true;
  // faceMeshEyeLeft.material.visible = true;
  // faceMeshEyeRight.material.visible = true;
  //facemesh.nose.material.visible = true;
  // faceMeshForehead.material.visible = true;
  
  
//   setTimeout(() => {    
//     facemesh.cheekLeft.material.visible = true;
//     tweenOnCheekLeft.start();
//   }, 1000);
  
//   setTimeout(() => {    
//     facemesh.cheekRight.material.visible = true;
//     tweenOnCheekRight.start();
//   }, 2000);
  
//   setTimeout(() => {    
//     facemesh.chin.material.visible = true;
//     tweenOnChin.start();
//   }, 3000);
  
//   setTimeout(() => {    
//     faceMeshEyeLeft.material.visible = true;
//     tweenOnEyeLeft.start();
//   }, 4000);
  
//   setTimeout(() => {    
//     faceMeshEyeRight.material.visible = true;
//     tweenOnEyeRight.start();
//   }, 5000);
  
//   setTimeout(() => {    
//     facemesh.nose.material.visible = true;
//     tweenOnNose.start();
//   }, 4000);
  
  setTimeout(() => {    
    facemesh.forehead.children[0].material.visible = true;
    facemesh.forehead.children[0].material.opacity = 1;
    //tweenOnForehead.start();
  }, 4000);
  
//   setTimeout(() => {
//     tweenOnCheekLeft.start();
//     tweenOnCheekRight.start();
//   }, 5000);
  
//   setTimeout(() => {    
//     tweenOnEyeLeft.start();
//     tweenOnEyeRight.start();
//   }, 9000);
  
//   setTimeout(() => {    
//     tweenOnChin.start();
//     tweenOnForehead.start();
//     tweenOnNose.start();
//   }, 6000);  
  
  setTimeout(() => {    
    // tweenOnChin.start();
    // tweenOnCheekLeft.start();
    // tweenOnCheekRight.start();
    // tweenOnNose.start();
    //tweenOnForehead.start();
    setTimeout(() => {
      floatingPanel1.classList.add("fadein1s");
    }, 2000);
  }, 8000);  
  
  setTimeout(() => {
    floatingPanel2.classList.add("fadein1s");
  }, 11000);
  
  setTimeout(() => {
    floatingPanel3.classList.add("fadein1s");
  }, 12000);
  
  setTimeout(() => {
    floatingPanel4.classList.add("fadein1s");
  }, 13000);

  setTimeout(() => {
    var container = document.querySelector("#container");
    var skinmatch = document.querySelector("#smt-questionnaire-64d43f6f0153a-holder");

    container.classList.add("hidden");
    skinmatch.style.opacity = 1;
    skinmatch.style.pointerEvents = "auto";
  }, 16000)
  
});
}
start();

function receive_SMT_message(e){

  if (e.origin === 'https://getskinmatch.com' || e.origin === 'https://www.getskinmatch.com') {
      if (typeof e.data === 'object') {
          if('smt-profile' in e.data) {
              var smtProfile = e.data;
              console.log(smtProfile);

              // TO DO: If you need to save the user profile data
              // or want to do anything with it, you can do that here.
          }
      }

      if(e.data.action == "add-to-cart") {
          var smtEAN = e.data.ean;
          console.log("Add "+smtEAN+" to cart");

          // TO DO: Write necessary code to add the ean to the cart
          // In case that the "add routine to cart" option is enabled, check
          // whether you get one EAN or multiple.
          // Multiple will be provided as a comma-separated list.
          // You can split it by using smtEAN.split(",")

      }

      if(e.data.action == "add-to-wishlist") {
          var smtEAN = e.data.ean;
          console.log("Add "+smtEAN+" to wishlist");
      }

      if(e.data.action == "remove-from-wishlist") {
          var smtEAN = e.data.ean;
          console.log("Remove "+smtEAN+" from wishlist");
      }

      if(e.data.action == "smt-matching-results") {
          // Matches are submitted as JSON once the user
          // finishes the questionnaire. You'll get one post message
          // per product group as set in the questionnaire configuration.
          // The matches-JSON is NOT ordered by match-percentage.
          // It includes the ean, match-value (0-100), match weight, and reasons-why.
          // Sorting in the questionnaire is first by match-value and then by match weight,
          // with higher weight resulting in a higher position.

          var matchGroup = e.data.group;
          var matches = e.data.results;
          console.log(matches);
      }

      if(e.data.action == "next-slide") {
          // This event fires when the user navigates to the next slide
          // either by using the arrow-navigation or by answering a question
          var slideIndex = e.data.slideIndex;
      }

      if(e.data.action == "previous-slide") {
          // This event fires when the user navigates to the previous question
          // by using the arrow-navigation
          var slideIndex = e.data.slideIndex;
      }

      if(e.data.action == "goto-slide") {
          // This event fires anytime a slide changes.
          // This catches skipping around within the questionnaire by means of
          // the progress bar navigation, as well as any regular navigation.
          // It will fire after the next/previous events.
          var slideIndex = e.data.slideIndex;
      }

      if(e.data == "smt-finish-questionnaire") {
          console.log("Finished questionnaire");

          // If you want to do some action after the user finished
          // the questionnaire, here is the correct place to do so
      }
  }
}
window.addEventListener('message', receive_SMT_message, false);

