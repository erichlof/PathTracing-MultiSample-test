// scene/demo-specific variables go here
var EPS_intersect;
var sceneIsDynamic = true;
var camFlightSpeed = 60;

var ellipsoidTranslate, cylinderTranslate, coneTranslate, paraboloidTranslate, hyperboloidTranslate, hyperbolicParaboloidTranslate;
var ellipsoidRotate, cylinderRotate, coneRotate, paraboloidRotate, hyperboloidRotate, hyperbolicParaboloidRotate;
var ellipsoidScale, cylinderScale, coneScale, paraboloidScale, hyperboloidScale, hyperbolicParaboloidScale;
var ellipsoidClip, cylinderClip, coneClip, paraboloidClip, hyperboloidClip, hyperbolicParaboloidClip;

var ellipsoidTranslateAngle, cylinderTranslateAngle, coneTranslateAngle, paraboloidTranslateAngle, hyperboloidTranslateAngle, hyperbolicParaboloidTranslateAngle;
var ellipsoidRotateAngle, cylinderRotateAngle, coneRotateAngle, paraboloidRotateAngle, hyperboloidRotateAngle, hyperbolicParaboloidRotateAngle;
var ellipsoidScaleAngle, cylinderScaleAngle, coneScaleAngle, paraboloidScaleAngle, hyperboloidScaleAngle, hyperbolicParaboloidScaleAngle;

var spacing = 50;
var baseXPos = 200;
var baseYPos = 50;
var baseZPos = -200;
var posXOffset = 25;


// called automatically from within initTHREEjs() function
function initSceneData() {
        
        // scene/demo-specific three.js objects setup goes here
        EPS_intersect = mouseControl ? 0.01 : 1.0; // less precision on mobile

        // set camera's field of view
        worldCamera.fov = 60;
        focusDistance = 325.0;

        // position and orient camera
        cameraControlsObject.position.set(0,20,120);
        ///cameraControlsYawObject.rotation.y = 0.0;
        // look slightly downward
        ///cameraControlsPitchObject.rotation.x = -0.4;

        // translation models
        ellipsoidTranslate = new THREE.Object3D();
        pathTracingScene.add(ellipsoidTranslate);
        ellipsoidTranslate.position.set(spacing * -3 + posXOffset, baseYPos + 3, baseZPos);
        ellipsoidTranslate.scale.set(20, 20, 20);

        cylinderTranslate = new THREE.Object3D();
        pathTracingScene.add(cylinderTranslate);
        cylinderTranslate.position.set(spacing * -2 + posXOffset, baseYPos, baseZPos);
        cylinderTranslate.scale.set(20, 20, 20);

        coneTranslate = new THREE.Object3D();
        pathTracingScene.add(coneTranslate);
        coneTranslate.position.set(spacing * -1 + posXOffset, baseYPos, baseZPos);
        coneTranslate.scale.set(20, 20, 20);

        paraboloidTranslate = new THREE.Object3D();
        pathTracingScene.add(paraboloidTranslate);
        paraboloidTranslate.position.set(spacing * 0 + posXOffset, baseYPos - 3, baseZPos);
        paraboloidTranslate.scale.set(20, 20, 20);

        hyperboloidTranslate = new THREE.Object3D();
        pathTracingScene.add(hyperboloidTranslate);
        hyperboloidTranslate.position.set(spacing * 1 + posXOffset, baseYPos, baseZPos);
        hyperboloidTranslate.scale.set(20, 20, 20);

        hyperbolicParaboloidTranslate = new THREE.Object3D();
        pathTracingScene.add(hyperbolicParaboloidTranslate);
        hyperbolicParaboloidTranslate.position.set(spacing * 2 + posXOffset, baseYPos + 5, baseZPos);
        hyperbolicParaboloidTranslate.scale.set(20, 20, 20);


        // rotation models
        ellipsoidRotate = new THREE.Object3D();
        pathTracingScene.add(ellipsoidRotate);
        ellipsoidRotate.position.set(baseXPos, baseYPos + 5, spacing * -3);
        ellipsoidRotate.scale.set(20, 20, 10);

        cylinderRotate = new THREE.Object3D();
        pathTracingScene.add(cylinderRotate);
        cylinderRotate.position.set(baseXPos, baseYPos, spacing * -2);
        cylinderRotate.scale.set(18, 16, 18);

        coneRotate = new THREE.Object3D();
        pathTracingScene.add(coneRotate);
        coneRotate.position.set(baseXPos, baseYPos, spacing * -1);
        coneRotate.scale.set(20, 20, 20);

        paraboloidRotate = new THREE.Object3D();
        pathTracingScene.add(paraboloidRotate);
        paraboloidRotate.position.set(baseXPos, baseYPos, spacing * 0);
        paraboloidRotate.scale.set(20, 20, 20);

        hyperboloidRotate = new THREE.Object3D();
        pathTracingScene.add(hyperboloidRotate);
        hyperboloidRotate.position.set(baseXPos, baseYPos + 1, spacing * 1);
        hyperboloidRotate.scale.set(20, 20, 20);

        hyperbolicParaboloidRotate = new THREE.Object3D();
        pathTracingScene.add(hyperbolicParaboloidRotate);
        hyperbolicParaboloidRotate.position.set(baseXPos, baseYPos, spacing * 2);
        hyperbolicParaboloidRotate.scale.set(20, 20, 20);


        // scaling models
        ellipsoidScale = new THREE.Object3D();
        pathTracingScene.add(ellipsoidScale);
        ellipsoidScale.position.set(-baseXPos, baseYPos, spacing * 2);
        ellipsoidScale.scale.set(20, 20, 20);

        cylinderScale = new THREE.Object3D();
        pathTracingScene.add(cylinderScale);
        cylinderScale.position.set(-baseXPos, baseYPos + 1, spacing * 1);
        cylinderScale.scale.set(20, 20, 20);

        coneScale = new THREE.Object3D();
        pathTracingScene.add(coneScale);
        coneScale.position.set(-baseXPos, baseYPos, spacing * 0);
        coneScale.scale.set(20, 20, 20);

        paraboloidScale = new THREE.Object3D();
        pathTracingScene.add(paraboloidScale);
        paraboloidScale.position.set(-baseXPos, baseYPos, spacing * -1);
        paraboloidScale.scale.set(20, 20, 20);

        hyperboloidScale = new THREE.Object3D();
        pathTracingScene.add(hyperboloidScale);
        hyperboloidScale.position.set(-baseXPos, baseYPos, spacing * -2);
        hyperboloidScale.scale.set(20, 20, 20);

        hyperbolicParaboloidScale = new THREE.Object3D();
        pathTracingScene.add(hyperbolicParaboloidScale);
        hyperbolicParaboloidScale.position.set(-baseXPos, baseYPos + 5, spacing * -3);
        hyperbolicParaboloidScale.scale.set(20, 20, 20);


        // clipping models
        ellipsoidClip = new THREE.Object3D();
        pathTracingScene.add(ellipsoidClip);
        ellipsoidClip.rotation.z = Math.PI * 0.5;
        ellipsoidClip.position.set(spacing * 2 + posXOffset, baseYPos + 3, -baseZPos);
        ellipsoidClip.scale.set(20, 20, 20);

        cylinderClip = new THREE.Object3D();
        pathTracingScene.add(cylinderClip);
        cylinderClip.position.set(spacing * 1 + posXOffset, baseYPos, -baseZPos);
        cylinderClip.scale.set(20, 20, 20);

        coneClip = new THREE.Object3D();
        pathTracingScene.add(coneClip);
        coneClip.position.set(spacing * 0 + posXOffset, baseYPos, -baseZPos);
        coneClip.scale.set(20, 20, 20);
        
        paraboloidClip = new THREE.Object3D();
        pathTracingScene.add(paraboloidClip);
        paraboloidClip.position.set(spacing * -1 + posXOffset, baseYPos - 3, -baseZPos);
        paraboloidClip.scale.set(20, 20, 20);
        
        hyperboloidClip = new THREE.Object3D();
        pathTracingScene.add(hyperboloidClip);
        hyperboloidClip.position.set(spacing * -2 + posXOffset, baseYPos, -baseZPos);
        hyperboloidClip.scale.set(20, 20, 20);

        hyperbolicParaboloidClip = new THREE.Object3D();
        pathTracingScene.add(hyperbolicParaboloidClip);
        hyperbolicParaboloidClip.position.set(spacing * -3 + posXOffset, baseYPos + 5, -baseZPos);
        hyperbolicParaboloidClip.scale.set(20, 20, 20);


        // init all angles to 0
        ellipsoidTranslateAngle = cylinderTranslateAngle = coneTranslateAngle = paraboloidTranslateAngle = hyperboloidTranslateAngle = hyperbolicParaboloidTranslateAngle =
          ellipsoidRotateAngle = cylinderRotateAngle = coneRotateAngle = paraboloidRotateAngle = hyperboloidRotateAngle = hyperbolicParaboloidRotateAngle =
          ellipsoidScaleAngle = cylinderScaleAngle = coneScaleAngle = paraboloidScaleAngle = hyperboloidScaleAngle = hyperbolicParaboloidScaleAngle =
          ellipsoidClipAngle = cylinderClipAngle = coneClipAngle = paraboloidClipAngle = hyperboloidClipAngle = hyperbolicParaboloidClipAngle = 0;

} // end function initSceneData()



// called automatically from within initTHREEjs() function
function initPathTracingShaders() {
 
        // scene/demo-specific uniforms go here
        pathTracingUniforms = {

                tPreviousTexture: { type: "t", value: screenTextureRenderTarget.texture },
                
                uCameraIsMoving: { type: "b1", value: false },
        
                uEPS_intersect: { type: "f", value: EPS_intersect },
                uTime: { type: "f", value: 0.0 },
                uSampleCounter: { type: "f", value: 0.0 },
                uFrameCounter: { type: "f", value: 1.0 },
                uULen: { type: "f", value: 1.0 },
                uVLen: { type: "f", value: 1.0 },
                uApertureSize: { type: "f", value: 0.0 },
                uFocusDistance: { type: "f", value: focusDistance },
        
                uResolution: { type: "v2", value: new THREE.Vector2() },
        
                uRandomVector: { type: "v3", value: new THREE.Vector3() },
        
                uCameraMatrix: { type: "m4", value: new THREE.Matrix4() },

                uEllipsoidTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uEllipsoidRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uEllipsoidScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uEllipsoidClipInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uCylinderTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uCylinderRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uCylinderScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uCylinderClipInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uConeTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uConeRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uConeScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uConeClipInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uParaboloidTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uParaboloidRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uParaboloidScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uParaboloidClipInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperboloidTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperboloidRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperboloidScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperboloidClipInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperbolicParaboloidTranslateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperbolicParaboloidRotateInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperbolicParaboloidScaleInvMatrix: { type: "m4", value: new THREE.Matrix4() },
                uHyperbolicParaboloidClipInvMatrix: { type: "m4", value: new THREE.Matrix4() }
        
        };

        pathTracingDefines = {
        	//NUMBER_OF_TRIANGLES: total_number_of_triangles
        };

        // load vertex and fragment shader files that are used in the pathTracing material, mesh and scene
        fileLoader.load('shaders/common_PathTracing_Vertex.glsl', function (shaderText) {
                pathTracingVertexShader = shaderText;

                createPathTracingMaterial();
        });

} // end function initPathTracingShaders()


// called automatically from within initPathTracingShaders() function above
function createPathTracingMaterial() {

        fileLoader.load('shaders/Transforming_Quadric_Geometry_Showcase_Fragment.glsl', function (shaderText) {
                
                pathTracingFragmentShader = shaderText;

                pathTracingMaterial = new THREE.ShaderMaterial({
                        uniforms: pathTracingUniforms,
                        defines: pathTracingDefines,
                        vertexShader: pathTracingVertexShader,
                        fragmentShader: pathTracingFragmentShader,
                        depthTest: false,
                        depthWrite: false
                });

                pathTracingMesh = new THREE.Mesh(pathTracingGeometry, pathTracingMaterial);
                pathTracingScene.add(pathTracingMesh);

                // the following keeps the large scene ShaderMaterial quad right in front 
                //   of the camera at all times. This is necessary because without it, the scene 
                //   quad will fall out of view and get clipped when the camera rotates past 180 degrees.
                worldCamera.add(pathTracingMesh);
                
        });

} // end function createPathTracingMaterial()



// called automatically from within the animate() function
function updateVariablesAndUniforms() {
        
        if ( !cameraIsMoving ) {
                
                if (sceneIsDynamic)
                        sampleCounter = 1.0; // reset for continuous updating of image
                else sampleCounter += 1.0; // for progressive refinement of image
                
                frameCounter += 1.0;

                cameraRecentlyMoving = false;  
        }

        if (cameraIsMoving) {
                sampleCounter = 1.0;
                frameCounter += 1.0;

                if (!cameraRecentlyMoving) {
                        frameCounter = 1.0;
                        cameraRecentlyMoving = true;
                }
        }

        pathTracingUniforms.uTime.value = elapsedTime;
        pathTracingUniforms.uCameraIsMoving.value = cameraIsMoving;
        pathTracingUniforms.uSampleCounter.value = sampleCounter;
        pathTracingUniforms.uFrameCounter.value = frameCounter;
        pathTracingUniforms.uRandomVector.value = randomVector.set(Math.random(), Math.random(), Math.random());
        
        // ELLIPSOID TRANSLATE
        ellipsoidTranslateAngle += (0.1 * frameTime);
        ellipsoidTranslateAngle = ellipsoidTranslateAngle % TWO_PI;
        ellipsoidTranslate.position.x = (spacing * -3 + posXOffset) + (Math.cos(ellipsoidTranslateAngle) * 10);
        ellipsoidTranslate.position.z = baseZPos + (Math.sin(ellipsoidTranslateAngle) * 10);
        ellipsoidTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uEllipsoidTranslateInvMatrix.value.getInverse( ellipsoidTranslate.matrixWorld );

        // ELLIPSOID ROTATE
        ellipsoidRotateAngle += (1.0 * frameTime);
        ellipsoidRotateAngle = ellipsoidRotateAngle % TWO_PI;
        ellipsoidRotate.rotation.y = ellipsoidRotateAngle;
        ellipsoidRotate.updateMatrixWorld(true);
        pathTracingUniforms.uEllipsoidRotateInvMatrix.value.getInverse( ellipsoidRotate.matrixWorld );

        // ELLIPSOID SCALE
        ellipsoidScaleAngle += (1.0 * frameTime);
        ellipsoidScaleAngle = ellipsoidScaleAngle % TWO_PI;
        ellipsoidScale.scale.set(Math.abs(Math.sin(ellipsoidScaleAngle)) * 20 + 0.1, Math.abs(Math.sin(ellipsoidScaleAngle)) * 20 + 0.01, Math.abs(Math.sin(ellipsoidScaleAngle)) * 20 + 0.01);
        ellipsoidScale.updateMatrixWorld(true);
        pathTracingUniforms.uEllipsoidScaleInvMatrix.value.getInverse( ellipsoidScale.matrixWorld );

        // ELLIPSOID CLIP
        ellipsoidClip.updateMatrixWorld(true);
        pathTracingUniforms.uEllipsoidClipInvMatrix.value.getInverse( ellipsoidClip.matrixWorld );


        // CYLINDER TRANSLATE
        cylinderTranslateAngle += (1.0 * frameTime);
        cylinderTranslateAngle = cylinderTranslateAngle % TWO_PI;
        cylinderTranslate.position.y = baseYPos + (Math.sin(cylinderTranslateAngle) * 10);
        cylinderTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uCylinderTranslateInvMatrix.value.getInverse( cylinderTranslate.matrixWorld );

        // CYLINDER ROTATE
        cylinderRotateAngle += (1.0 * frameTime);
        cylinderRotateAngle = cylinderRotateAngle % TWO_PI;
        cylinderRotate.rotation.x = cylinderRotateAngle;
        cylinderRotate.updateMatrixWorld(true);
        pathTracingUniforms.uCylinderRotateInvMatrix.value.getInverse( cylinderRotate.matrixWorld );

        // CYLINDER SCALE
        cylinderScaleAngle += (0.2 * frameTime);
        cylinderScaleAngle = cylinderScaleAngle % TWO_PI;
        if (cylinderScaleAngle == 0) cylinderScaleAngle += 0.01;
        cylinderScale.scale.set((1.0 - Math.abs(Math.sin(cylinderScaleAngle))) * 15 + 5, 
                                Math.abs(Math.sin(cylinderScaleAngle)) * 200 + 20, 
                                (1.0 - Math.abs(Math.sin(cylinderScaleAngle))) * 15 + 5);
        cylinderScale.updateMatrixWorld(true);
        pathTracingUniforms.uCylinderScaleInvMatrix.value.getInverse( cylinderScale.matrixWorld );

        // CYLINDER CLIP
        cylinderClip.updateMatrixWorld(true);
        pathTracingUniforms.uCylinderClipInvMatrix.value.getInverse( cylinderClip.matrixWorld );


        // CONE TRANSLATE
        coneTranslateAngle += (1.0 * frameTime);
        coneTranslateAngle = coneTranslateAngle % TWO_PI;
        coneTranslate.position.x = (spacing * -1 + posXOffset) + (Math.cos(coneTranslateAngle) * 10);
        coneTranslate.position.y = baseYPos + (Math.sin(coneTranslateAngle) * 10);
        coneTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uConeTranslateInvMatrix.value.getInverse( coneTranslate.matrixWorld );

        // CONE ROTATE
        coneRotateAngle += (1.0 * frameTime);
        coneRotateAngle = coneRotateAngle % TWO_PI;
        coneRotate.rotation.z = coneRotateAngle;
        coneRotate.updateMatrixWorld(true);
        pathTracingUniforms.uConeRotateInvMatrix.value.getInverse( coneRotate.matrixWorld );

        // CONE SCALE
        coneScaleAngle += (1.0 * frameTime);
        coneScaleAngle = coneScaleAngle % TWO_PI;
        if (coneScaleAngle == 0) coneScaleAngle += 0.01;
        coneScale.scale.set(20, 20, Math.abs(Math.sin(coneScaleAngle)) * 20 + 0.1);
        coneScale.updateMatrixWorld(true);
        pathTracingUniforms.uConeScaleInvMatrix.value.getInverse( coneScale.matrixWorld );

        // CONE CLIP
        coneClip.updateMatrixWorld(true);
        pathTracingUniforms.uConeClipInvMatrix.value.getInverse( coneClip.matrixWorld );

        // PARABOLOID TRANSLATE
        paraboloidTranslateAngle += (1.0 * frameTime);
        paraboloidTranslateAngle = paraboloidTranslateAngle % TWO_PI;
        paraboloidTranslate.position.x = (spacing * 0 + posXOffset) + (Math.sin(paraboloidTranslateAngle) * 10);
        paraboloidTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uParaboloidTranslateInvMatrix.value.getInverse( paraboloidTranslate.matrixWorld );
        
        // PARABOLOID ROTATE
        paraboloidRotateAngle += (1.0 * frameTime);
        paraboloidRotateAngle = paraboloidRotateAngle % TWO_PI;
        paraboloidRotate.rotation.x = paraboloidRotateAngle;
        paraboloidRotate.rotation.z = paraboloidRotateAngle;
        paraboloidRotate.updateMatrixWorld(true);
        pathTracingUniforms.uParaboloidRotateInvMatrix.value.getInverse( paraboloidRotate.matrixWorld );
        
        // PARABOLOID SCALE
        paraboloidScaleAngle += (1.0 * frameTime);
        paraboloidScaleAngle = paraboloidScaleAngle % TWO_PI;
        if (paraboloidScaleAngle == 0) paraboloidScaleAngle += 0.01;
        paraboloidScale.scale.set(20, Math.sin(paraboloidScaleAngle) * 20 + 0.1, 20);
        paraboloidScale.updateMatrixWorld(true);
        pathTracingUniforms.uParaboloidScaleInvMatrix.value.getInverse( paraboloidScale.matrixWorld );
        
        // PARABOLOID CLIP
        paraboloidClip.updateMatrixWorld(true);
        pathTracingUniforms.uParaboloidClipInvMatrix.value.getInverse( paraboloidClip.matrixWorld );
        

        // HYPERBOLOID TRANSLATE
        hyperboloidTranslateAngle += (1.0 * frameTime);
        hyperboloidTranslateAngle = hyperboloidTranslateAngle % TWO_PI;
        hyperboloidTranslate.position.z = baseZPos + (Math.sin(hyperboloidTranslateAngle) * 10);
        hyperboloidTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uHyperboloidTranslateInvMatrix.value.getInverse( hyperboloidTranslate.matrixWorld );
        
        // HYPERBOLOID ROTATE
        hyperboloidRotateAngle += (1.0 * frameTime);
        hyperboloidRotateAngle = hyperboloidRotateAngle % TWO_PI;
        hyperboloidRotate.rotation.z = -hyperboloidRotateAngle;
        hyperboloidRotate.updateMatrixWorld(true);
        pathTracingUniforms.uHyperboloidRotateInvMatrix.value.getInverse( hyperboloidRotate.matrixWorld );
        
        // HYPERBOLOID SCALE
        hyperboloidScaleAngle += (1.0 * frameTime);
        hyperboloidScaleAngle = hyperboloidScaleAngle % TWO_PI;
        if (hyperboloidScaleAngle == 0) hyperboloidScaleAngle += 0.01;
        hyperboloidScale.scale.set(Math.abs(Math.sin(hyperboloidScaleAngle)) * 20 + 10, 20, 20);
        hyperboloidScale.updateMatrixWorld(true);
        pathTracingUniforms.uHyperboloidScaleInvMatrix.value.getInverse( hyperboloidScale.matrixWorld );
        
        // HYPERBOLOID CLIP
        hyperboloidClip.updateMatrixWorld(true);
        pathTracingUniforms.uHyperboloidClipInvMatrix.value.getInverse( hyperboloidClip.matrixWorld );
        
        // HYPERBOLIC PARABOLOID TRANSLATE
        hyperbolicParaboloidTranslateAngle += (1.0 * frameTime);
        hyperbolicParaboloidTranslateAngle = hyperbolicParaboloidTranslateAngle % TWO_PI;
        hyperbolicParaboloidTranslate.position.x = (spacing * 2 + posXOffset) + (Math.cos(hyperbolicParaboloidTranslateAngle) * 10);
        hyperbolicParaboloidTranslate.position.z = baseZPos + (Math.sin(hyperbolicParaboloidTranslateAngle) * 10);
        hyperbolicParaboloidTranslate.updateMatrixWorld(true);
        pathTracingUniforms.uHyperbolicParaboloidTranslateInvMatrix.value.getInverse( hyperbolicParaboloidTranslate.matrixWorld );
        
        // HYPERBOLIC PARABOLOID ROTATE
        hyperbolicParaboloidRotateAngle += (1.0 * frameTime);
        hyperbolicParaboloidRotateAngle = hyperbolicParaboloidRotateAngle % TWO_PI;
        hyperbolicParaboloidRotate.rotation.y = -hyperbolicParaboloidRotateAngle;
        hyperbolicParaboloidRotate.updateMatrixWorld(true);
        pathTracingUniforms.uHyperbolicParaboloidRotateInvMatrix.value.getInverse( hyperbolicParaboloidRotate.matrixWorld );

        // HYPERBOLIC PARABOLOID SCALE
        hyperbolicParaboloidScaleAngle += (1.0 * frameTime);
        hyperbolicParaboloidScaleAngle = hyperbolicParaboloidScaleAngle % TWO_PI;
        if (hyperbolicParaboloidScaleAngle == 0) hyperbolicParaboloidScaleAngle += 0.01;
        hyperbolicParaboloidScale.scale.set(20, Math.sin(hyperbolicParaboloidScaleAngle) * 20, 20);
        hyperbolicParaboloidScale.updateMatrixWorld(true);
        pathTracingUniforms.uHyperbolicParaboloidScaleInvMatrix.value.getInverse( hyperbolicParaboloidScale.matrixWorld );

        // HYPERBOLIC PARABOLOID CLIP
        hyperbolicParaboloidClip.updateMatrixWorld(true);
        pathTracingUniforms.uHyperbolicParaboloidClipInvMatrix.value.getInverse( hyperbolicParaboloidClip.matrixWorld );
        

        // CAMERA
        cameraControlsObject.updateMatrixWorld(true);
        pathTracingUniforms.uCameraMatrix.value.copy(worldCamera.matrixWorld);
        screenOutputMaterial.uniforms.uOneOverSampleCounter.value = 1.0 / sampleCounter;

        cameraInfoElement.innerHTML = "FOV: " + worldCamera.fov + " / Aperture: " + apertureSize.toFixed(2) + " / FocusDistance: " + focusDistance + "<br>" + "Samples: " + sampleCounter;

} // end function updateUniforms()



init(); // init app and start animating