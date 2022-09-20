#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

void main() {

    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(.4);

    if(u_mouse.x <= 0.0 || u_mouse.y <= 0.0) {
        /* coord += vec2(
            u_mouse.x * sin(coord.y + u_time + .3) + .8,
            u_mouse.x * sin(coord.x + u_time + .3) + 1.5
        ) */

        coord += vec2(
            sin(coord.y + u_time * 2.0 + .3) + .8, 
            cos(coord.x + u_time / 2.0 + .3)
        );
    }

    gl_FragColor = texture2D(u_tex0, coord);
}