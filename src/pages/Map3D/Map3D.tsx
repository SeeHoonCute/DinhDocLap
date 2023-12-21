import React, { useEffect } from "react";
import classes from "./Map3D.module.css";
import { loadModules } from "esri-loader";

// import Map from 'esri/Map';
// import SceneView from 'esri/views/SceneView';
// import GeoJSONLayer from 'esri/layers/GeoJSONLayer';
// import SceneLayer from 'esri/layers/SceneLayer';
// import GraphicsLayer from 'esri/layers/GraphicsLayer';
// import Graphic from 'esri/Graphic';
// import esriRequest from 'esri/request';
// import Point from 'esri/geometry/Point';
// import Mesh from 'esri/geometry/Mesh';
// import MeshTexture from 'esri/geometry/support/MeshTexture';
// import SpatialReference from 'esri/geometry/SpatialReference';
// import geometryService from 'esri/rest/geometryService';
// import DistanceParameters from 'esri/geometry/support/DistanceParameters';
// import meshUtils from 'esri/geometry/support/meshUtils';

const Map3D = () => {
	// useEffect(() => {
	// 	loadModules([
	// 		"esri/Map",
	// 		"esri/views/SceneView",
	// 		"esri/layers/GeoJSONLayer",
	// 		"esri/layers/SceneLayer",
	// 		"esri/layers/GraphicsLayer",
	// 		"esri/Graphic",
	// 		"esri/request",
	// 		"esri/geometry/Point",
	// 		"esri/geometry/Mesh",
	// 		"esri/geometry/support/MeshTexture",
	// 		"esri/geometry/SpatialReference",
	// 		"esri/rest/geometryService",
	// 		"esri/rest/support/DistanceParameters",
	// 		"esri/geometry/support/meshUtils",
	// 	]).then(
	// 		([
	// 			Map,
	// 			SceneView,
	// 			GeoJSONLayer,
	// 			SceneLayer,
	// 			GraphicsLayer,
	// 			Graphic,
	// 			esriRequest,
	// 			Point,
	// 			Mesh,
	// 			MeshTexture,
	// 			SpatialReference,
	// 			geometryService,
	// 			DistanceParameters,
	// 			meshUtils,
	// 		]) => {
	// 			const a = 86.19609697819396;
	// 			const b = 35.777078869019;
	// 			const c = 29.373043461846656;
	// 			const d = 14.893092119035835;
	// 			const e = 5.362867866395603;
	// 			const f = 13.196519450343406;
	// 			const g = 4.669535492104023;
	// 			const h = 19.326979335433652;
	// 			const i = 21.470659471369636;
	// 			const j = 4.662351792212651;
	// 			const k = 31.106531103747145;
	// 			const l = 32.64048964664293;
	// 			const m = 10.77580050922984;
	// 			const n = 10.94537832397216;
	// 			const o = 15.35567862550349;

	// 			const map = new Map({
	// 				basemap: "topo-vector",
	// 				ground: "world-elevation",
	// 				layers: [],
	// 			});
    //             console.log("here");
	// 			const view = new SceneView({
	// 				container: "viewDiv",
	// 				map: map,
	// 				camera: {
	// 					position: [106.696851, 10.783157, 400],
	// 					heading: 910,
	// 					tilt: 60,
	// 				},
	// 				zoom: 100,
	// 			});

	// 			function movePoint(pt, distance, angle) {
	// 				//rayon of the earth
	// 				const R = 6371e3;
	// 				// latitude in rad
	// 				let lat1 = (pt.latitude * Math.PI) / 180;
	// 				// longitude in rad
	// 				let long1 = (pt.longitude * Math.PI) / 180;
	// 				// the angle between the 2 points in rad
	// 				angle = ((90 - angle) * Math.PI) / 180;
	// 				const sigma = distance / R;
	// 				const delLat = sigma * Math.cos(angle);
	// 				//latitude of the destination point
	// 				let lat2 = ((lat1 + delLat) * 180) / Math.PI;
	// 				const del = Math.log(
	// 					Math.tan(lat2 / 2 + Math.PI / 4) /
	// 						Math.tan(lat1 / 2 + Math.PI / 4)
	// 				);
	// 				const q = Math.cos(lat1);

	// 				const delLong = (sigma * Math.sin(angle)) / q;
	// 				//longitude of the destination point
	// 				let long2 = ((long1 + delLong) * 180) / Math.PI;

	// 				return new Point({
	// 					x: long2,
	// 					y: lat2,
	// 					z: pt.z,
	// 				});
	// 			}

	// 			function createPyramid(pt, params) {
	// 				const height = params.size.height;
	// 				const halfWidth = params.size.width / 2;
	// 				const halfDepth = params.size.depth / 2;
	// 				const hypotenuse = Math.sqrt(
	// 					Math.pow(halfWidth, 2) + Math.pow(halfDepth, 2)
	// 				);

	// 				const vertexA = { x: pt.x, y: pt.y, z: pt.z + height };
	// 				const vertexB = movePoint(pt, hypotenuse, -45);
	// 				const vertexC = movePoint(pt, hypotenuse, 45);
	// 				const vertexD = movePoint(pt, hypotenuse, 135);
	// 				const vertexE = movePoint(pt, hypotenuse, -135);

	// 				// Vertex locations that make up the pyramid,
	// 				// the first triple represents the top of the pyramid,
	// 				// while the remaining 4 triples represent the base
	// 				// of the pyramid
	// 				const position = [
	// 					vertexA.x,
	// 					vertexA.y,
	// 					vertexA.z,
	// 					vertexB.x,
	// 					vertexB.y,
	// 					vertexB.z,
	// 					vertexC.x,
	// 					vertexC.y,
	// 					vertexC.z,
	// 					vertexD.x,
	// 					vertexD.y,
	// 					vertexD.z,
	// 					vertexE.x,
	// 					vertexE.y,
	// 					vertexE.z,
	// 				];

	// 				// The UV coordinates will be used to map an
	// 				// image material to the mesh. The coordinates are
	// 				// setup such that the top of the pyramid has (0.5, 0),
	// 				// while the base of the pyramid alternates between
	// 				// (0, 1) and (1, 1). This is sufficient for the linear
	// 				// gradient image that we want to map to the pyramids.
	// 				const uv = [0.5, 0, 0, 1, 1, 1, 0, 1, 1, 1];

	// 				const pyramid = new Mesh({
	// 					// The vertex attributes of the mesh
	// 					vertexAttributes: {
	// 						position: position,
	// 						uv: uv,
	// 					},

	// 					// The four triangles that make up the pyramid
	// 					components: [
	// 						{ faces: [0, 1, 2], material: params.material },
	// 						{ faces: [0, 2, 3], material: params.material },
	// 						{ faces: [0, 3, 4], material: params.material },
	// 						{ faces: [0, 4, 1], material: params.material },
	// 					],

	// 					spatialReference: pt.spatialReference,
	// 				});

	// 				return pyramid;
	// 			}

	// 			//Hiển thị thông tin chi tiết của Dinh Độc Lập
	// 			view.popup.defaultPopupTemplateEnabled = true;

	// 			fetch("./data/tree_corr.json")
	// 				.then((response) => response.json())
	// 				.then((json) => {
	// 					for (var corr in json) {
	// 						const tree_loc = new Point({
	// 							x: json[corr][0],
	// 							y: json[corr][1],
	// 							z: 15,
	// 						});

	// 						Mesh.createFromGLTF(
	// 							tree_loc,
	// 							"./Model/Tree/Tree.glb"
	// 						) //Thêm tượng demo
	// 							.then(function (geometry) {
	// 								// increase it a factor of 3
	// 								geometry.scale(5, {
	// 									origin: tree_loc,
	// 								});
	// 								// rotate it by 90 degrees around the z axis
	// 								geometry.rotate(0, 0, 114);
	// 								// add it to a graphic
	// 								const graphic = new Graphic({
	// 									geometry,
	// 									symbol: {
	// 										type: "mesh-3d", // autocasts as new MeshSymbol3D()
	// 										symbolLayers: [
	// 											{
	// 												type: "fill", // autocasts as new FillSymbol3DLayer()
	// 												material: {
	// 													//color: "gray"
	// 												},
	// 												size: 1000,
	// 											},
	// 										],
	// 									},
	// 								});

	// 								view.graphics.add(graphic);
	// 							})
	// 							.catch(console.error);
	// 					}
	// 				});

	// 			const fountain_loc = new Point({
	// 				x: 106.69596145527656,
	// 				y: 10.777612314732947,
	// 				z: 16,
	// 			});

	// 			Mesh.createFromGLTF(
	// 				fountain_loc,
	// 				"./Model/Fountain/Fountain.gltf"
	// 			) //Thêm tượng demo
	// 				.then(function (geometry) {
	// 					// increase it a factor of 3
	// 					geometry.scale(0.5, {
	// 						origin: fountain_loc,
	// 					});
	// 					// rotate it by 90 degrees around the z axis
	// 					geometry.rotate(0, 0, 114);
	// 					// add it to a graphic
	// 					const graphic = new Graphic({
	// 						geometry,
	// 						symbol: {
	// 							type: "mesh-3d", // autocasts as new MeshSymbol3D()
	// 							symbolLayers: [
	// 								{
	// 									type: "fill", // autocasts as new FillSymbol3DLayer()
	// 									material: {
	// 										//color: "gray"
	// 									},
	// 									size: 1000,
	// 								},
	// 							],
	// 						},
	// 					});

	// 					view.graphics.add(graphic);
	// 				})
	// 				.catch(console.error);

	// 			//Click copy tọa độ
	// 			view.on("click", function (event) {
	// 				view.hitTest(event).then(function (hitTestResults) {
	// 					if (hitTestResults.results) {
	// 						list_points.push([
	// 							event.mapPoint.longitude,
	// 							event.mapPoint.latitude,
	// 						]);
	// 						string_points =
	// 							"[" +
	// 							event.mapPoint.longitude +
	// 							", " +
	// 							event.mapPoint.latitude +
	// 							"]";
	// 						copyTextToClipboard(string_points);
	// 					}
	// 				});
	// 			});
	// 		}
	// 	);
	// }, []);

	return <iframe src="http://localhost:8080/map" style={{ width: "100%", height: "80vh" }}></iframe>;
};

export default Map3D;
