export default /* glsl */`
#if ( (defined( USE_UV ) || defined( USE_AOMAP )) && ! defined( UVS_VERTEX_ONLY ) )

	varying vec2 vUv;

#endif
`;
