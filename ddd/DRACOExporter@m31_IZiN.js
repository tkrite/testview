import{b as h}from"./ddd@DwDq534T.js";class u{parse(a,o={}){if(o=Object.assign({decodeSpeed:5,encodeSpeed:5,encoderMethod:u.MESH_EDGEBREAKER_ENCODING,quantization:[16,8,8,8,8],exportUvs:!0,exportNormals:!0,exportColor:!1},o),DracoEncoderModule===void 0)throw new Error("THREE.DRACOExporter: required the draco_encoder to work.");const d=a.geometry,e=DracoEncoderModule(),n=new e.Encoder;let i,c;if(a.isMesh===!0){i=new e.MeshBuilder,c=new e.Mesh;const t=d.getAttribute("position");i.AddFloatAttributeToMesh(c,e.POSITION,t.count,t.itemSize,t.array);const s=d.getIndex();if(s!==null)i.AddFacesToMesh(c,s.count/3,s.array);else{const r=new(t.count>65535?Uint32Array:Uint16Array)(t.count);for(let l=0;l<r.length;l++)r[l]=l;i.AddFacesToMesh(c,t.count,r)}if(o.exportNormals===!0){const r=d.getAttribute("normal");r!==void 0&&i.AddFloatAttributeToMesh(c,e.NORMAL,r.count,r.itemSize,r.array)}if(o.exportUvs===!0){const r=d.getAttribute("uv");r!==void 0&&i.AddFloatAttributeToMesh(c,e.TEX_COORD,r.count,r.itemSize,r.array)}if(o.exportColor===!0){const r=d.getAttribute("color");if(r!==void 0){const l=O(r);i.AddFloatAttributeToMesh(c,e.COLOR,r.count,r.itemSize,l)}}}else if(a.isPoints===!0){i=new e.PointCloudBuilder,c=new e.PointCloud;const t=d.getAttribute("position");if(i.AddFloatAttribute(c,e.POSITION,t.count,t.itemSize,t.array),o.exportColor===!0){const s=d.getAttribute("color");if(s!==void 0){const r=O(s);i.AddFloatAttribute(c,e.COLOR,s.count,s.itemSize,r)}}}else throw new Error("DRACOExporter: Unsupported object type.");const E=new e.DracoInt8Array,M=o.encodeSpeed!==void 0?o.encodeSpeed:5,y=o.decodeSpeed!==void 0?o.decodeSpeed:5;if(n.SetSpeedOptions(M,y),o.encoderMethod!==void 0&&n.SetEncodingMethod(o.encoderMethod),o.quantization!==void 0)for(let t=0;t<5;t++)o.quantization[t]!==void 0&&n.SetAttributeQuantization(t,o.quantization[t]);let f;if(a.isMesh===!0?f=n.EncodeMeshToDracoBuffer(c,E):f=n.EncodePointCloudToDracoBuffer(c,!0,E),e.destroy(c),f===0)throw new Error("THREE.DRACOExporter: Draco encoding failed.");const S=new Int8Array(new ArrayBuffer(f));for(let t=0;t<f;t++)S[t]=E.GetValue(t);return e.destroy(E),e.destroy(n),e.destroy(i),S}}function O(A){const a=new h,o=A.count,d=A.itemSize,e=new Float32Array(o*d);for(let n=0,i=o;n<i;n++)a.fromBufferAttribute(A,n).convertLinearToSRGB(),e[n*d]=a.r,e[n*d+1]=a.g,e[n*d+2]=a.b,d===4&&(e[n*d+3]=A.getW(n));return e}u.MESH_EDGEBREAKER_ENCODING=1;u.MESH_SEQUENTIAL_ENCODING=0;u.POINT_CLOUD=0;u.TRIANGULAR_MESH=1;u.INVALID=-1;u.POSITION=0;u.NORMAL=1;u.COLOR=2;u.TEX_COORD=3;u.GENERIC=4;export{u as DRACOExporter};