// Chrome Cells — Originkit

"use client"

import * as React from "react"
import { useEffect, useRef } from "react"

const MAX_DPR = 1.5

const VERT_SRC = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

const FRAG_SRC = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2  uRes;
uniform vec2  uTilt;
uniform float uTime;
uniform float uDpr;
uniform vec3  uBackgroundColor;
uniform vec3  uBaseColor;
uniform vec3  uAccentColor;
uniform float uScale;
uniform float uThick;
uniform float uDetail;
uniform float uWarp;
uniform float uPolish;
uniform float uContrast;
uniform float uLight;

vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xx + p3.yz) * p3.zy);
}

float hash21(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
}

float vnoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = p - i;
    f = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash21(i), hash21(i + vec2(1.0, 0.0)), f.x),
               mix(hash21(i + vec2(0.0, 1.0)), hash21(i + vec2(1.0, 1.0)), f.x), f.y);
}

float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 3; i++) {
        v += a * vnoise(p);
        p = p * 2.03 + vec2(19.3, 7.7);
        a *= 0.5;
    }
    return v / 0.875;
}

vec2 site(vec2 c, float jit, mat2 rt) {
    return vec2(0.5) + jit * (rt * (hash22(c) * 2.0 - 1.0));
}

const float SEAM = 0.055;

vec4 vedge(vec2 p, float jit, mat2 rt, float wide, out float cellR) {
    vec2 n = floor(p);
    vec2 f = p - n;

    vec2 mg = vec2(0.0);
    vec2 mr = vec2(0.0);
    float md = 8.0;
    float ms = 8.0;
    for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
            vec2 g = vec2(float(i), float(j));
            vec2 r = g + site(n + g, jit, rt) - f;
            float d2 = dot(r, r);
            if (d2 < md) { md = d2; ms = d2; mr = r; mg = g; }
        }
    }

    md = 8.0;
    vec2 gr = vec2(0.0, 1.0);
    for (int j = -2; j <= 2; j++) {
        for (int i = -2; i <= 2; i++) {
            if (wide < 0.5 && (i < -1 || i > 1 || j < -1 || j > 1)) continue;
            vec2 g = mg + vec2(float(i), float(j));
            vec2 r = g + site(n + g, jit, rt) - f;
            vec2 df = r - mr;
            float l2 = dot(df, df);
            if (l2 > 1e-6) {
                vec2 dir = df * inversesqrt(l2);
                float d = dot(0.5 * (mr + r), dir);

                float hb = clamp(0.5 + 0.5 * (md - d) / SEAM, 0.0, 1.0);
                md = mix(md, d, hb) - SEAM * hb * (1.0 - hb);
                gr = mix(gr, -dir, hb);
            }
        }
    }

    cellR = sqrt(ms) + md;
    return vec4(md, gr, hash21(n + mg + 0.5));
}

float smaxw(float a, float b, float k, out float wa) {
    wa = clamp(0.5 + 0.5 * (a - b) / k, 0.0, 1.0);
    return mix(b, a, wa) + k * wa * (1.0 - wa);
}

float smin2f(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

float capW(float w, float cellR) {
    float lim = 0.34 * cellR;
    return smin2f(w, lim, 0.35 * lim + 1e-5);
}

float smin2(float a, float b, float k) {
    float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
    return mix(b, a, h) - k * h * (1.0 - h);
}

vec3 env(vec3 r) {
    vec3 rn = normalize(r + vec3(1e-5));
    float c = clamp(rn.z, -1.0, 1.0);
    float s = mix(9.0, 68.0, uPolish);

    float v = 0.030;
    v += 0.46 * smoothstep(0.30, 0.98, c);
    v += 1.00 * exp(-s * 1.00 * (c - 0.74) * (c - 0.74));
    v += 0.30 * exp(-s * 1.60 * (c - 0.38) * (c - 0.38));
    v += 0.62 * exp(-s * 0.70 * (c - 0.06) * (c - 0.06));
    v -= 0.40 * exp(-s * 2.20 * (c - 1.00) * (c - 1.00));
    v += 0.09 * smoothstep(-1.0, 0.5, c);

    float az = atan(rn.y, rn.x);
    v *= 0.68 + 0.32 * cos(3.0 * az - uLight);

    vec3 L = normalize(vec3(cos(uLight) * 0.62, sin(uLight) * 0.62, 0.55));
    float k = max(dot(rn, L), 0.0);
    v += 0.34 * k * k * k;
    v += 1.40 * pow(k, mix(12.0, 90.0, uPolish));

    v = pow(max(v, 1e-5), uContrast);
    return mix(uBaseColor, uAccentColor, clamp(v * 0.72, 0.0, 1.0)) * v;
}

vec3 rotY(vec3 v, float a) { float s = sin(a), c = cos(a); return vec3(v.x * c + v.z * s, v.y, -v.x * s + v.z * c); }
vec3 rotX(vec3 v, float a) { float s = sin(a), c = cos(a); return vec3(v.x, v.y * c - v.z * s, v.y * s + v.z * c); }

const float F1 = 1.0;
const float F2 = 2.45;
const float F3 = 5.90;

void main() {
    vec2 uv = gl_FragCoord.xy / uRes;
    float aspect = uRes.x / uRes.y;
    vec2 q = (uv - 0.5) * vec2(aspect, 1.0) * uScale;
    float t = uTime;

    float px = uScale / uRes.y;

    vec2 wv = vec2(fbm(q * 0.55 + vec2(0.0, t * 0.045)),
                   fbm(q * 0.55 + vec2(5.2, 1.3) - vec2(t * 0.038, 0.0))) - 0.5;
    vec2 qw = q + wv * uWarp;

    vec2 wv2 = vec2(fbm(q * 1.45 + vec2(3.1, 9.9) + vec2(0.0, t * 0.070)),
                    fbm(q * 1.45 + vec2(21.4, 2.2) - vec2(t * 0.061, 0.0))) - 0.5;
    vec2 qf = qw + wv2 * uWarp * 0.55;

    float wa0 = fbm(q * 0.30 + vec2(11.7, 3.1));
    float wb0 = fbm(q * 0.95 + vec2(41.2, 27.5));
    float wmod = 0.35 + 1.35 * pow(clamp(0.38 * wa0 + 0.62 * wb0, 0.0, 1.0), 1.20);

    float a1 = t * 0.150, a2 = -t * 0.205, a3 = t * 0.265;
    mat2 r1 = mat2(cos(a1), sin(a1), -sin(a1), cos(a1));
    mat2 r2 = mat2(cos(a2), sin(a2), -sin(a2), cos(a2));
    mat2 r3 = mat2(cos(a3), sin(a3), -sin(a3), cos(a3));

    float cr1, cr2, cr3;
    vec4 e1 = vedge(qw * F1, 0.35, r1, 1.0, cr1);

    float d1 = e1.x / F1;
    float W1 = capW(0.105 * uThick * wmod, cr1 / F1);

    float det = clamp(uDetail, 0.0, 2.0);
    float on = clamp(det, 0.0, 1.0);
    float cid = fract(e1.w * 43.7 + 0.13);
    float thrM = 0.66 - 0.30 * det;
    float thrF = 0.82 - 0.36 * det;
    float gate2 = on * smoothstep(thrM, thrM + 0.16, cid);
    float gate3 = on * smoothstep(thrF, thrF + 0.18, e1.w);

    vec4 e2 = vec4(8.0, 0.0, 1.0, 0.0);
    float d2 = 8.0;
    float W2 = 0.0;
    if (gate2 > 0.004) {
        e2 = vedge(qf * F2 + vec2(31.7, 12.4), 0.32, r2, 1.0, cr2);
        d2 = e2.x / F2;
        W2 = capW(0.042 * uThick * gate2 * (0.50 + 0.55 * wmod), cr2 / F2);
    }

    vec4 e3 = vec4(8.0, 0.0, 1.0, 0.0);
    float d3 = 8.0;
    float W3 = 0.0;
    if (gate3 > 0.004) {
        e3 = vedge(qf * F3 + vec2(7.3, 41.9), 0.24, r3, 0.0, cr3);
        d3 = e3.x / F3;
        W3 = capW(0.0125 * uThick * gate3 * (0.50 + 0.55 * wmod), cr3 / F3);
    }

    float h1 = sqrt(max(W1 * W1 - d1 * d1, 0.0));
    float h2 = sqrt(max(W2 * W2 - d2 * d2, 0.0));
    float h3 = sqrt(max(W3 * W3 - d3 * d3, 0.0));

    vec2 g1 = -step(1e-7, h1) * min(d1 / max(h1, 1e-5), 9.0) * e1.yz;
    vec2 g2 = -step(1e-7, h2) * min(d2 / max(h2, 1e-5), 9.0) * e2.yz;
    vec2 g3 = -step(1e-7, h3) * min(d3 / max(h3, 1e-5), 9.0) * e3.yz;

    float k12 = 1.50 * max(min(W1, W2), 1e-4);
    float k13 = 1.80 * max(W3, 1e-4);
    float wa;
    float H = smaxw(h1, h2, k12, wa);
    vec2 G = mix(g2, g1, wa);
    H = smaxw(H, h3, k13, wa);
    G = mix(g3, G, wa);

    float sd = smin2(smin2(d1 - W1, d2 - W2, k12), d3 - W3, k13);
    float cov = smoothstep(0.75 * px, -0.75 * px, sd);

    vec2 rip = vec2(vnoise(q * 13.0), vnoise(q * 13.0 + vec2(7.7, 3.3))) - 0.5;
    vec3 n = normalize(vec3(-G * cov + rip * 0.12 * cov, 1.0));
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 R = rotX(rotY(reflect(-V, n), uTilt.x), uTilt.y);

    vec3 col = mix(uBackgroundColor, env(R), cov);

    vec2 gp = floor(gl_FragCoord.xy / max(uDpr, 1.0));
    col += (hash21(gp) - 0.5) * (1.6 / 255.0);

    gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`

function parseColor(input: string | undefined, fb: [number, number, number]): [number, number, number] {
    if (!input) return fb
    const str = String(input).trim()
    if (str.charAt(0) === "#") {
        let hex = str.slice(1)
        if (hex.length === 3 || hex.length === 4) {
            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
        }
        if (hex.length >= 6) {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)
            if (!isNaN(r) && !isNaN(g) && !isNaN(b)) return [r / 255, g / 255, b / 255]
        }
        return fb
    }

    const m = str.match(/[\d.]+/g)
    if (m && m.length >= 3) {
        return [
            Math.min(255, parseFloat(m[0])) / 255,
            Math.min(255, parseFloat(m[1])) / 255,
            Math.min(255, parseFloat(m[2])) / 255,
        ]
    }
    return fb
}

function num(v: unknown, fb: number): number {
    return typeof v === "number" && isFinite(v) ? v : fb
}

function compile(gl: WebGLRenderingContext, type: number, src: string): WebGLShader | null {
    const sh = gl.createShader(type)
    if (!sh) return null
    gl.shaderSource(sh, src)
    gl.compileShader(sh)
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error("ChromeCells shader:", gl.getShaderInfoLog(sh))
        gl.deleteShader(sh)
        return null
    }
    return sh
}

interface WebGroup {
    scale?: number
    thickness?: number
    detail?: number
    warp?: number
}

interface MetalGroup {
    polish?: number
    contrast?: number
    light?: number
}

interface ChromeCellsProps {
    style?: React.CSSProperties
    background?: string
    baseColor?: string
    accentColor?: string
    speed?: number
    hover?: number
    web?: WebGroup
    metal?: MetalGroup
    width?: number
    height?: number
}

const D_WEB: Required<WebGroup> = { scale: 100, thickness: 100, detail: 100, warp: 120 }
const D_METAL: Required<MetalGroup> = { polish: 62, contrast: 108, light: 108 }

function __OriginkitBase_ChromeCells(props: ChromeCellsProps) {
    const {
        style,
        background = "#040405",
        baseColor = "#989898",
        accentColor = "#FFFFFF",
        speed = 100,
        hover = 200,
        web,
        metal,
        width,
        height,
    } = props

    const W = { ...D_WEB, ...(web ?? {}) }
    const M = { ...D_METAL, ...(metal ?? {}) }

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const sizeRef = useRef({ w: 0, h: 0 })
    sizeRef.current = { w: num(width, 0), h: num(height, 0) }

    const vRef = useRef({
        backgroundColor: [0, 0, 0] as [number, number, number],
        baseColor: [0, 0, 0] as [number, number, number],
        accentColor: [0, 0, 0] as [number, number, number],
        speed: 1,
        hover: 1,
        scale: 4.4,
        thick: 1,
        detail: 1,
        warp: 0.5,
        polish: 0.62,
        contrast: 1.18,
        light: 1.88,
    })
    vRef.current = {
        backgroundColor: parseColor(background, [0.016, 0.016, 0.02]),
        baseColor: parseColor(baseColor, [0.776, 0.816, 0.847]),
        accentColor: parseColor(accentColor, [1, 1, 1]),
        speed: num(speed, 50) / 50,
        hover: num(hover, 100) / 100,
        scale: (num(W.scale, 100) / 100) * 3.3,
        thick: num(W.thickness, 100) / 100,
        detail: num(W.detail, 100) / 100,
        warp: (num(W.warp, 120) / 100) * 0.62,
        polish: num(M.polish, 62) / 100,
        contrast: num(M.contrast, 108) / 100,
        light: (num(M.light, 108) * Math.PI) / 180,
    }

    const ptrRef = useRef({ tx: 0, ty: 0, on: 0, onTarget: 0, nx: 0.5, ny: 0.5 })

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const gl = canvas.getContext("webgl", { antialias: false, alpha: false, depth: false })
        if (!gl) {
            console.error("ChromeCells: WebGL unavailable")
            return
        }

        const vs = compile(gl, gl.VERTEX_SHADER, VERT_SRC)
        const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG_SRC)
        if (!vs || !fs) return
        const prog = gl.createProgram()
        if (!prog) return
        gl.attachShader(prog, vs)
        gl.attachShader(prog, fs)
        gl.linkProgram(prog)
        if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
            console.error("ChromeCells link:", gl.getProgramInfoLog(prog))
            return
        }
        gl.useProgram(prog)

        const buf = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buf)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
        const posLoc = gl.getAttribLocation(prog, "a_pos")
        gl.enableVertexAttribArray(posLoc)
        gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

        const u = {
            res: gl.getUniformLocation(prog, "uRes"),
            tilt: gl.getUniformLocation(prog, "uTilt"),
            time: gl.getUniformLocation(prog, "uTime"),
            dpr: gl.getUniformLocation(prog, "uDpr"),
            backgroundColor: gl.getUniformLocation(prog, "uBackgroundColor"),
            baseColor: gl.getUniformLocation(prog, "uBaseColor"),
            accentColor: gl.getUniformLocation(prog, "uAccentColor"),
            scale: gl.getUniformLocation(prog, "uScale"),
            thick: gl.getUniformLocation(prog, "uThick"),
            detail: gl.getUniformLocation(prog, "uDetail"),
            warp: gl.getUniformLocation(prog, "uWarp"),
            polish: gl.getUniformLocation(prog, "uPolish"),
            contrast: gl.getUniformLocation(prog, "uContrast"),
            light: gl.getUniformLocation(prog, "uLight"),
        }

        let raf = 0
        let last = performance.now()
        let clock = 0

        const render = (now: number) => {
            const dt = Math.min(0.05, Math.max(0, (now - last) / 1000))
            last = now
            const v = vRef.current
            clock = (clock + dt * v.speed) % 7200

            const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
            const cw = sizeRef.current.w || canvas.clientWidth || 1200
            const ch = sizeRef.current.h || canvas.clientHeight || 800
            const bw = Math.max(1, Math.round(cw * dpr))
            const bh = Math.max(1, Math.round(ch * dpr))
            if (canvas.width !== bw || canvas.height !== bh) {
                canvas.width = bw
                canvas.height = bh
                gl.viewport(0, 0, bw, bh)
            }

            const p = ptrRef.current
            const k = 1 - Math.exp(-5 * dt)
            p.on += (p.onTarget - p.on) * k

            const amt = v.hover * p.on
            const idleX = Math.sin(clock * 0.19) * 0.30
            const idleY = Math.cos(clock * 0.14) * 0.18
            const aimX = (p.nx - 0.5) * 1.6 * amt + idleX * (1 - Math.min(1, amt))
            const aimY = (p.ny - 0.5) * 1.1 * amt + idleY * (1 - Math.min(1, amt))
            p.tx += (aimX - p.tx) * k
            p.ty += (aimY - p.ty) * k

            gl.uniform2f(u.res, bw, bh)
            gl.uniform2f(u.tilt, p.tx, p.ty)
            gl.uniform1f(u.time, clock)
            gl.uniform1f(u.dpr, dpr)
            gl.uniform3f(u.backgroundColor, v.backgroundColor[0], v.backgroundColor[1], v.backgroundColor[2])
            gl.uniform3f(u.baseColor, v.baseColor[0], v.baseColor[1], v.baseColor[2])
            gl.uniform3f(u.accentColor, v.accentColor[0], v.accentColor[1], v.accentColor[2])
            gl.uniform1f(u.scale, v.scale)
            gl.uniform1f(u.thick, v.thick)
            gl.uniform1f(u.detail, v.detail)
            gl.uniform1f(u.warp, v.warp)
            gl.uniform1f(u.polish, v.polish)
            gl.uniform1f(u.contrast, v.contrast)
            gl.uniform1f(u.light, v.light)

            gl.drawArrays(gl.TRIANGLES, 0, 3)
            raf = requestAnimationFrame(render)
        }

        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect()
            const ow = canvas.offsetWidth || 1
            const oh = canvas.offsetHeight || 1
            const sx = r.width > 0 ? ow / r.width : 1
            const sy = r.height > 0 ? oh / r.height : 1
            const p = ptrRef.current
            p.nx = ((e.clientX - r.left) * sx) / ow
            p.ny = 1 - ((e.clientY - r.top) * sy) / oh
        }
        const onEnter = () => {
            ptrRef.current.onTarget = 1
        }
        const onLeave = () => {
            ptrRef.current.onTarget = 0
        }

        canvas.addEventListener("pointermove", onMove)
        canvas.addEventListener("pointerenter", onEnter)
        canvas.addEventListener("pointerleave", onLeave)
        raf = requestAnimationFrame(render)

        return () => {
            cancelAnimationFrame(raf)
            canvas.removeEventListener("pointermove", onMove)
            canvas.removeEventListener("pointerenter", onEnter)
            canvas.removeEventListener("pointerleave", onLeave)
        }
    }, [])

    return (
        <div
            style={{
                position: "relative",
                overflow: "hidden",
                background,
                minWidth: 1200,
                minHeight: 800,
                width: typeof width === "number" && width > 0 ? width : "100%",
                height: typeof height === "number" && height > 0 ? height : "100%",
                ...style,
            }}
        >
            <canvas
                ref={canvasRef}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }}
            />
        </div>
    )
}

const __originkitPresetProps = {
  "web": {
    "warp": 250,
    "scale": 46,
    "detail": 200,
    "thickness": 30
  },
  "metal": {
    "light": 136,
    "polish": 100,
    "contrast": 101
  }
};

export default function ChromeCells(props: Record<string, unknown>) {
  return <__OriginkitBase_ChromeCells {...(__originkitPresetProps as Record<string, unknown>)} {...props} />;
}