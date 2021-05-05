export default /* glsl */`
#ifdef USE_AOMAP

#ifndef AOMAP_UV_CHANNEL
#define AOMAP_UV_CHANNEL vUv2
#endif

	uniform sampler2D aoMap;
	uniform float aoMapIntensity;

#endif
`;
