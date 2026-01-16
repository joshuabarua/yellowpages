uniform float time;
uniform vec2 uMouse;

varying vec2 vUv;

float circle(vec2 uv, vec2 circlePosition, float radius) {
	float dist = distance(circlePosition, uv);
	return 1. - smoothstep(0.0, radius, dist);
}

float elevation(vec2 uvCoords, float radius, float intensity) {
	float circleShape = circle(uvCoords, (uMouse * 0.5) + 0.5, radius);
	return circleShape * intensity;
}

void main() {
	vec3 newPosition = position;
	newPosition.z += elevation(uv, 0.2, 0.7);

	csm_Position = newPosition;
	vUv = uv;
}