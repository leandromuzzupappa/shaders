#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float rectshape(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

mat2 rotate(float angle) {
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main() {
    
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(22.3, coord.y, 0.4);

    coord -= vec2(.5);
    coord += rotate(3.0 * u_time) * coord / 3.0;
    coord += vec2(.5);

    color += vec3(rectshape(coord, vec2(.3, .3)));


    gl_FragColor = vec4(color, 1.0);
}