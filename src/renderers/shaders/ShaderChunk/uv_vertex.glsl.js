export default /* glsl */`
#if (defined( USE_UV ) || defined( USE_AOMAP ))

	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

#endif
`;
