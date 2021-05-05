export default /* glsl */`
#if (defined( USE_UV ) || defined( USE_AOMAP ))

	#ifdef UVS_VERTEX_ONLY

		vec2 vUv;

	#else

		varying vec2 vUv;

	#endif

	uniform mat3 uvTransform;

#endif
`;
