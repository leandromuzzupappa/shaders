#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main() {

    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(.0);

    vec2 translate = vec2(-.5, -.5);
    coord += translate;

    for(int n = 0; n < 10; n++){
        float i = float(n);
        float radius = .3;
        float rad = radians(360.0 /10.0) * i;


        color += .005 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));

    }

    
    gl_FragColor = vec4(color, 1.0);
}