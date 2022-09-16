#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

void main() {

    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(.4);

    vec2 translate = vec2(sin(u_time), cos(u_time / 3.0));
    coord += translate * -.5;

    color += vec3(circleshape(coord, .1));
    
    gl_FragColor = vec4(color, 1.0);
}