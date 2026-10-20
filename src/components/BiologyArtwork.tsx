"use client";
import { useId } from "react";
/** Supplied Biology artwork, adapted to theme tokens and independently animated layers.
 * Geometry and labels come from biology-track-visuals.zip; no challenge facts are added.
 * Inline SVG lets the active site theme and reduced-motion settings reach every element.
 */
export function BiologyArtwork({ src }: {
    src: string;
}) {
    const id = useId();
    switch (src.split("/").pop()) {
        case "01-hero-lung-rna.svg":
            return (<svg viewBox="0 0 1200 520" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <radialGradient id={`${id}-hl-halo`} cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="var(--c-purple)" stopOpacity=".42"/>
            <stop offset="1" stopColor="var(--c-purple)" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id={`${id}-hl-lung`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--c-purple)" stopOpacity=".42"/>
            <stop offset="1" stopColor="var(--c-brand)" stopOpacity=".2"/>
            </linearGradient>
            <linearGradient id={`${id}-hl-strand`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="var(--bio-cyan)"/>
            <stop offset=".5" stopColor="var(--c-purple)"/>
            <stop offset="1" stopColor="var(--c-lavender)"/>
            </linearGradient>
            <filter id={`${id}-hl-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-hl-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <ellipse cx="470" cy="270" rx="330" ry="240" fill={`url(#${id}-hl-halo)`}/>
            <circle cx="205" cy="355" r="13" fill="var(--c-purple)" opacity="0.18" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="265" cy="406" r="9" fill="var(--bio-cyan)" opacity="0.18" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="289" cy="12" r="4" fill="var(--c-pink)" opacity="0.09" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="947" cy="126" r="3" fill="var(--c-lavender)" opacity="0.17" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="1185" cy="395" r="6" fill="var(--c-pink)" opacity="0.09" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="398" cy="259" r="2" fill="var(--c-purple)" opacity="0.08" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="884" cy="54" r="2" fill="var(--c-pink)" opacity="0.11" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="870" cy="211" r="3" fill="var(--bio-cyan)" opacity="0.21" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="565" cy="420" r="2" fill="var(--bio-cyan)" opacity="0.12" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="1153" cy="457" r="9" fill="var(--c-lavender)" opacity="0.10" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="572" cy="424" r="3" fill="var(--c-purple)" opacity="0.26" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="1057" cy="215" r="4" fill="var(--c-pink)" opacity="0.18" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="385" cy="252" r="4" fill="var(--c-lavender)" opacity="0.25" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="198" cy="368" r="6" fill="var(--c-lavender)" opacity="0.18" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="660" cy="384" r="3" fill="var(--c-purple)" opacity="0.19" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="745" cy="100" r="3" fill="var(--c-purple)" opacity="0.25" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="402" cy="391" r="4" fill="var(--bio-cyan)" opacity="0.10" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="87" cy="417" r="6" fill="var(--c-purple)" opacity="0.11" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="53" cy="270" r="13" fill="var(--bio-cyan)" opacity="0.16" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="1177" cy="491" r="9" fill="var(--c-lavender)" opacity="0.26" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="589" cy="198" r="3" fill="var(--bio-cyan)" opacity="0.11" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="92" cy="413" r="13" fill="var(--c-pink)" opacity="0.09" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="350" cy="437" r="13" fill="var(--c-purple)" opacity="0.09" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="303" cy="207" r="4" fill="var(--bio-cyan)" opacity="0.28" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="890" cy="249" r="4" fill="var(--bio-cyan)" opacity="0.27" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="630" cy="374" r="2" fill="var(--bio-cyan)" opacity="0.26" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="442" cy="87" r="4" fill="var(--c-pink)" opacity="0.18" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="1075" cy="248" r="3" fill="var(--c-purple)" opacity="0.11" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="861" cy="201" r="3" fill="var(--c-lavender)" opacity="0.13" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="395" cy="135" r="9" fill="var(--c-pink)" opacity="0.13" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="489" cy="489" r="3" fill="var(--bio-cyan)" opacity="0.11" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="478" cy="103" r="13" fill="var(--c-pink)" opacity="0.24" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="95" cy="70" r="4" fill="var(--bio-cyan)" opacity="0.14" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="1122" cy="208" r="3" fill="var(--bio-cyan)" opacity="0.12" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="1022" cy="111" r="13" fill="var(--c-lavender)" opacity="0.20" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="606" cy="383" r="2" fill="var(--c-lavender)" opacity="0.16" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="1030" cy="209" r="9" fill="var(--bio-cyan)" opacity="0.25" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="285" cy="492" r="9" fill="var(--c-purple)" opacity="0.23" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="299" cy="88" r="13" fill="var(--c-purple)" opacity="0.24" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="958" cy="255" r="9" fill="var(--c-lavender)" opacity="0.19" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="81" cy="307" r="4" fill="var(--c-purple)" opacity="0.14" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="747" cy="389" r="3" fill="var(--c-lavender)" opacity="0.20" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="394" cy="111" r="2" fill="var(--c-purple)" opacity="0.21" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="506" cy="444" r="13" fill="var(--c-lavender)" opacity="0.21" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="963" cy="499" r="9" fill="var(--c-lavender)" opacity="0.22" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="843" cy="245" r="9" fill="var(--c-pink)" opacity="0.26" filter={`url(#${id}-hl-soft)`} className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <g fill={`url(#${id}-hl-lung)`} stroke="var(--c-lavender)" strokeWidth="3" strokeLinejoin="round" strokeOpacity=".85" className="bio-breathe" style={{ animationDelay: "-4.35s" }}>
            <path d="M 498 128 C 566 112 650 168 662 290 C 672 392 628 462 556 464 C 514 466 496 436 496 384 Z"/>
            <path d="M 442 128 C 374 112 290 168 278 290 C 268 392 312 462 384 464 C 426 466 444 436 444 384 Z"/>
            </g>
            <g fill="none" stroke="var(--c-lavender)" strokeWidth="3" strokeLinecap="round" opacity=".8" className="bio-breathe" style={{ animationDelay: "-4.64s" }}>
            <path d="M 470 52 L 470 176"/>
            <path d="M 470 176 C 466 196 440 206 408 224"/>
            </g>
            <g fill="none" stroke="var(--c-lavender)" strokeWidth="2.2" strokeLinecap="round" opacity=".55" className="bio-breathe" style={{ animationDelay: "0.0s" }}>
            <path d="M 470 172 C 478 196 500 206 532 224"/>
            <path d="M 470 172 C 462 196 440 206 408 224"/>
            <path d="M 532 224 C 560 238 586 256 604 288"/>
            <path d="M 408 224 C 380 238 354 256 336 288"/>
            <path d="M 532 224 C 548 252 552 282 548 320"/>
            <path d="M 408 224 C 392 252 388 282 392 320"/>
            <path d="M 548 320 C 560 346 566 376 560 410"/>
            <path d="M 392 320 C 380 346 374 376 380 410"/>
            <path d="M 548 320 C 570 326 592 340 606 366"/>
            <path d="M 392 320 C 370 326 348 340 334 366"/>
            <path d="M 604 288 C 618 296 628 308 634 326"/>
            <path d="M 336 288 C 322 296 312 308 306 326"/>
            <path d="M 604 288 C 614 274 622 260 626 244"/>
            <path d="M 336 288 C 326 274 318 260 314 244"/>
            <path d="M 560 410 C 574 420 582 430 584 442"/>
            <path d="M 380 410 C 366 420 358 430 356 442"/>
            <path d="M 560 410 C 546 424 540 436 540 448"/>
            <path d="M 380 410 C 394 424 400 436 400 448"/>
            <path d="M 606 366 C 616 380 618 396 612 412"/>
            <path d="M 334 366 C 324 380 322 396 328 412"/>
            </g>
            <circle cx="634" cy="326" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="306" cy="326" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="626" cy="244" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="314" cy="244" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="584" cy="442" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="356" cy="442" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="540" cy="448" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="400" cy="448" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="612" cy="412" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="328" cy="412" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="606" cy="366" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="334" cy="366" r="5" fill="var(--c-lavender)" opacity=".7" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <path d="M 830 276 C 890 276 915 205 971 205" fill="none" stroke="var(--bio-gold)" strokeWidth="1.8" strokeDasharray="2 7" strokeLinecap="round" opacity=".7" className="bio-flow" style={{ animationDelay: "-3.77s" }}/>
            <path d="M 830 276 C 890 276 1015 285 1071 285" fill="none" stroke="var(--bio-gold)" strokeWidth="1.8" strokeDasharray="2 7" strokeLinecap="round" opacity=".7" className="bio-flow" style={{ animationDelay: "-4.06s" }}/>
            <path d="M 830 276 C 890 276 870 330 926 330" fill="none" stroke="var(--bio-gold)" strokeWidth="1.8" strokeDasharray="2 7" strokeLinecap="round" opacity=".7" className="bio-flow" style={{ animationDelay: "-4.35s" }}/>
            <path d="M 830 276 C 890 276 980 170 1036 170" fill="none" stroke="var(--bio-gold)" strokeWidth="1.8" strokeDasharray="2 7" strokeLinecap="round" opacity=".7" className="bio-flow" style={{ animationDelay: "-4.64s" }}/>
            <path d="M 30.0 276.0 L 32.0 278.8 L 34.0 281.6 L 36.0 284.4 L 38.0 287.1 L 40.0 289.8 L 42.0 292.4 L 44.0 295.0 L 46.0 297.4 L 48.0 299.7 L 50.0 301.9 L 52.0 304.0 L 54.0 306.0 L 56.0 307.8 L 58.0 309.5 L 60.0 311.1 L 62.0 312.5 L 64.0 313.7 L 66.0 314.8 L 68.0 315.8 L 70.0 316.6 L 72.0 317.3 L 74.0 317.8 L 76.0 318.2 L 78.0 318.5 L 80.0 318.6 L 82.0 318.6 L 84.0 318.6 L 86.0 318.4 L 88.0 318.2 L 90.0 317.9 L 92.0 317.5 L 94.0 317.1 L 96.0 316.7 L 98.0 316.2 L 100.0 315.7 L 102.0 315.2 L 104.0 314.7 L 106.0 314.2 L 108.0 313.7 L 110.0 313.2 L 112.0 312.8 L 114.0 312.4 L 116.0 312.0 L 118.0 311.7 L 120.0 311.4 L 122.0 311.2 L 124.0 311.0 L 126.0 310.8 L 128.0 310.7 L 130.0 310.7 L 132.0 310.6 L 134.0 310.6 L 136.0 310.6 L 138.0 310.6 L 140.0 310.6 L 142.0 310.6 L 144.0 310.6 L 146.0 310.6 L 148.0 310.5 L 150.0 310.4 L 152.0 310.2 L 154.0 310.0 L 156.0 309.7 L 158.0 309.3 L 160.0 308.8 L 162.0 308.3 L 164.0 307.6 L 166.0 306.8 L 168.0 305.9 L 170.0 304.8 L 172.0 303.7 L 174.0 302.4 L 176.0 300.9 L 178.0 299.4 L 180.0 297.7 L 182.0 295.9 L 184.0 293.9 L 186.0 291.9 L 188.0 289.7 L 190.0 287.4 L 192.0 285.0 L 194.0 282.6 L 196.0 280.0 L 198.0 277.4 L 200.0 274.7 L 202.0 272.0 L 204.0 269.3 L 206.0 266.5 L 208.0 263.8 L 210.0 261.0 L 212.0 258.3 L 214.0 255.7 L 216.0 253.0 L 218.0 250.5 L 220.0 248.0 L 222.0 245.6 L 224.0 243.4 L 226.0 241.2 L 228.0 239.2 L 230.0 237.3 L 232.0 235.5 L 234.0 233.9 L 236.0 232.5 L 238.0 231.2 L 240.0 230.1 L 242.0 229.1 L 244.0 228.3 L 246.0 227.7 L 248.0 227.2 L 250.0 226.9 L 252.0 226.7 L 254.0 226.7 L 256.0 226.8 L 258.0 227.1 L 260.0 227.5 L 262.0 228.0 L 264.0 228.6 L 266.0 229.2 L 268.0 230.0 L 270.0 230.9 L 272.0 231.8 L 274.0 232.7 L 276.0 233.7 L 278.0 234.7 L 280.0 235.8 L 282.0 236.8 L 284.0 237.9 L 286.0 238.9 L 288.0 239.9 L 290.0 240.9 L 292.0 241.8 L 294.0 242.7 L 296.0 243.6 L 298.0 244.4 L 300.0 245.2 L 302.0 245.9 L 304.0 246.5 L 306.0 247.2 L 308.0 247.7 L 310.0 248.3 L 312.0 248.8 L 314.0 249.2 L 316.0 249.6 L 318.0 250.1 L 320.0 250.4 L 322.0 250.8 L 324.0 251.2 L 326.0 251.7 L 328.0 252.1 L 330.0 252.6 L 332.0 253.1 L 334.0 253.7 L 336.0 254.3 L 338.0 255.0 L 340.0 255.7 L 342.0 256.6 L 344.0 257.6 L 346.0 258.6 L 348.0 259.8 L 350.0 261.0 L 352.0 262.4 L 354.0 263.8 L 356.0 265.4 L 358.0 267.1 L 360.0 268.9 L 362.0 270.8 L 364.0 272.9 L 366.0 275.0 L 368.0 277.2 L 370.0 279.5 L 372.0 281.8 L 374.0 284.2 L 376.0 286.7 L 378.0 289.2 L 380.0 291.8 L 382.0 294.3 L 384.0 296.9 L 386.0 299.4 L 388.0 302.0 L 390.0 304.4 L 392.0 306.9 L 394.0 309.3 L 396.0 311.6 L 398.0 313.8 L 400.0 315.9 L 402.0 317.8 L 404.0 319.7 L 406.0 321.4 L 408.0 323.0 L 410.0 324.4 L 412.0 325.7 L 414.0 326.8 L 416.0 327.7 L 418.0 328.5 L 420.0 329.1 L 422.0 329.5 L 424.0 329.7 L 426.0 329.8 L 428.0 329.7 L 430.0 329.5 L 432.0 329.1 L 434.0 328.5 L 436.0 327.8 L 438.0 326.9 L 440.0 326.0 L 442.0 324.9 L 444.0 323.7 L 446.0 322.5 L 448.0 321.1 L 450.0 319.7 L 452.0 318.3 L 454.0 316.8 L 456.0 315.2 L 458.0 313.7 L 460.0 312.1 L 462.0 310.6 L 464.0 309.0 L 466.0 307.5 L 468.0 306.0 L 470.0 304.6 L 472.0 303.2 L 474.0 301.8 L 476.0 300.5 L 478.0 299.3 L 480.0 298.1 L 482.0 297.0 L 484.0 296.0 L 486.0 295.0 L 488.0 294.1 L 490.0 293.2 L 492.0 292.4 L 494.0 291.6 L 496.0 290.9 L 498.0 290.2 L 500.0 289.5 L 502.0 288.8 L 504.0 288.2 L 506.0 287.5 L 508.0 286.8 L 510.0 286.2 L 512.0 285.5 L 514.0 284.7 L 516.0 283.9 L 518.0 283.1 L 520.0 282.2 L 522.0 281.2 L 524.0 280.2 L 526.0 279.1 L 528.0 277.9 L 530.0 276.6 L 532.0 275.3 L 534.0 273.9 L 536.0 272.4 L 538.0 270.8 L 540.0 269.1 L 542.0 267.4 L 544.0 265.6 L 546.0 263.7 L 548.0 261.7 L 550.0 259.7 L 552.0 257.7 L 554.0 255.6 L 556.0 253.5 L 558.0 251.4 L 560.0 249.3 L 562.0 247.1 L 564.0 245.1 L 566.0 243.0 L 568.0 241.0 L 570.0 239.1 L 572.0 237.2 L 574.0 235.4 L 576.0 233.7 L 578.0 232.1 L 580.0 230.7 L 582.0 229.4 L 584.0 228.2 L 586.0 227.1 L 588.0 226.2 L 590.0 225.5 L 592.0 225.0 L 594.0 224.6 L 596.0 224.4 L 598.0 224.3 L 600.0 224.4 L 602.0 224.7 L 604.0 225.2 L 606.0 225.8 L 608.0 226.6 L 610.0 227.6 L 612.0 228.7 L 614.0 229.9 L 616.0 231.2 L 618.0 232.7 L 620.0 234.3 L 622.0 236.0 L 624.0 237.7 L 626.0 239.5 L 628.0 241.4 L 630.0 243.3 L 632.0 245.2 L 634.0 247.2 L 636.0 249.1 L 638.0 251.1 L 640.0 253.0 L 642.0 254.9 L 644.0 256.8 L 646.0 258.6 L 648.0 260.3 L 650.0 262.0 L 652.0 263.6 L 654.0 265.1 L 656.0 266.5 L 658.0 267.8 L 660.0 269.1 L 662.0 270.2 L 664.0 271.3 L 666.0 272.3 L 668.0 273.2 L 670.0 274.0 L 672.0 274.7 L 674.0 275.3 L 676.0 275.9 L 678.0 276.4 L 680.0 276.9 L 682.0 277.4 L 684.0 277.8 L 686.0 278.1 L 688.0 278.5 L 690.0 278.8 L 692.0 279.2 L 694.0 279.6 L 696.0 280.0 L 698.0 280.4 L 700.0 280.9 L 702.0 281.4 L 704.0 282.0 L 706.0 282.6 L 708.0 283.3 L 710.0 284.1 L 712.0 284.9 L 714.0 285.8 L 716.0 286.8 L 718.0 287.8 L 720.0 289.0 L 722.0 290.2 L 724.0 291.4 L 726.0 292.7 L 728.0 294.1 L 730.0 295.5 L 732.0 297.0 L 734.0 298.5 L 736.0 300.0 L 738.0 301.5 L 740.0 303.0 L 742.0 304.5 L 744.0 306.0 L 746.0 307.5 L 748.0 308.9 L 750.0 310.2 L 752.0 311.4 L 754.0 312.6 L 756.0 313.7 L 758.0 314.7 L 760.0 315.6 L 762.0 316.3 L 764.0 316.9 L 766.0 317.4 L 768.0 317.7 L 770.0 317.9 L 772.0 318.0 L 774.0 317.8 L 776.0 317.6 L 778.0 317.1 L 780.0 316.5 L 782.0 315.8 L 784.0 314.9 L 786.0 313.9 L 788.0 312.7 L 790.0 311.4 L 792.0 310.0 L 794.0 308.5 L 796.0 306.9 L 798.0 305.2 L 800.0 303.4 L 802.0 301.5 L 804.0 299.6 L 806.0 297.6 L 808.0 295.7 L 810.0 293.7 L 812.0 291.7 L 814.0 289.7 L 816.0 287.8 L 818.0 285.9 L 820.0 284.0 L 822.0 282.2 L 824.0 280.5 L 826.0 278.8 L 828.0 277.3 L 830.0 275.8" fill="none" stroke="var(--c-purple)" strokeWidth="14" strokeLinecap="round" opacity=".28" filter={`url(#${id}-hl-glow)`}/>
            <path d="M 30.0 276.0 L 32.0 278.8 L 34.0 281.6 L 36.0 284.4 L 38.0 287.1 L 40.0 289.8 L 42.0 292.4 L 44.0 295.0 L 46.0 297.4 L 48.0 299.7 L 50.0 301.9 L 52.0 304.0 L 54.0 306.0 L 56.0 307.8 L 58.0 309.5 L 60.0 311.1 L 62.0 312.5 L 64.0 313.7 L 66.0 314.8 L 68.0 315.8 L 70.0 316.6 L 72.0 317.3 L 74.0 317.8 L 76.0 318.2 L 78.0 318.5 L 80.0 318.6 L 82.0 318.6 L 84.0 318.6 L 86.0 318.4 L 88.0 318.2 L 90.0 317.9 L 92.0 317.5 L 94.0 317.1 L 96.0 316.7 L 98.0 316.2 L 100.0 315.7 L 102.0 315.2 L 104.0 314.7 L 106.0 314.2 L 108.0 313.7 L 110.0 313.2 L 112.0 312.8 L 114.0 312.4 L 116.0 312.0 L 118.0 311.7 L 120.0 311.4 L 122.0 311.2 L 124.0 311.0 L 126.0 310.8 L 128.0 310.7 L 130.0 310.7 L 132.0 310.6 L 134.0 310.6 L 136.0 310.6 L 138.0 310.6 L 140.0 310.6 L 142.0 310.6 L 144.0 310.6 L 146.0 310.6 L 148.0 310.5 L 150.0 310.4 L 152.0 310.2 L 154.0 310.0 L 156.0 309.7 L 158.0 309.3 L 160.0 308.8 L 162.0 308.3 L 164.0 307.6 L 166.0 306.8 L 168.0 305.9 L 170.0 304.8 L 172.0 303.7 L 174.0 302.4 L 176.0 300.9 L 178.0 299.4 L 180.0 297.7 L 182.0 295.9 L 184.0 293.9 L 186.0 291.9 L 188.0 289.7 L 190.0 287.4 L 192.0 285.0 L 194.0 282.6 L 196.0 280.0 L 198.0 277.4 L 200.0 274.7 L 202.0 272.0 L 204.0 269.3 L 206.0 266.5 L 208.0 263.8 L 210.0 261.0 L 212.0 258.3 L 214.0 255.7 L 216.0 253.0 L 218.0 250.5 L 220.0 248.0 L 222.0 245.6 L 224.0 243.4 L 226.0 241.2 L 228.0 239.2 L 230.0 237.3 L 232.0 235.5 L 234.0 233.9 L 236.0 232.5 L 238.0 231.2 L 240.0 230.1 L 242.0 229.1 L 244.0 228.3 L 246.0 227.7 L 248.0 227.2 L 250.0 226.9 L 252.0 226.7 L 254.0 226.7 L 256.0 226.8 L 258.0 227.1 L 260.0 227.5 L 262.0 228.0 L 264.0 228.6 L 266.0 229.2 L 268.0 230.0 L 270.0 230.9 L 272.0 231.8 L 274.0 232.7 L 276.0 233.7 L 278.0 234.7 L 280.0 235.8 L 282.0 236.8 L 284.0 237.9 L 286.0 238.9 L 288.0 239.9 L 290.0 240.9 L 292.0 241.8 L 294.0 242.7 L 296.0 243.6 L 298.0 244.4 L 300.0 245.2 L 302.0 245.9 L 304.0 246.5 L 306.0 247.2 L 308.0 247.7 L 310.0 248.3 L 312.0 248.8 L 314.0 249.2 L 316.0 249.6 L 318.0 250.1 L 320.0 250.4 L 322.0 250.8 L 324.0 251.2 L 326.0 251.7 L 328.0 252.1 L 330.0 252.6 L 332.0 253.1 L 334.0 253.7 L 336.0 254.3 L 338.0 255.0 L 340.0 255.7 L 342.0 256.6 L 344.0 257.6 L 346.0 258.6 L 348.0 259.8 L 350.0 261.0 L 352.0 262.4 L 354.0 263.8 L 356.0 265.4 L 358.0 267.1 L 360.0 268.9 L 362.0 270.8 L 364.0 272.9 L 366.0 275.0 L 368.0 277.2 L 370.0 279.5 L 372.0 281.8 L 374.0 284.2 L 376.0 286.7 L 378.0 289.2 L 380.0 291.8 L 382.0 294.3 L 384.0 296.9 L 386.0 299.4 L 388.0 302.0 L 390.0 304.4 L 392.0 306.9 L 394.0 309.3 L 396.0 311.6 L 398.0 313.8 L 400.0 315.9 L 402.0 317.8 L 404.0 319.7 L 406.0 321.4 L 408.0 323.0 L 410.0 324.4 L 412.0 325.7 L 414.0 326.8 L 416.0 327.7 L 418.0 328.5 L 420.0 329.1 L 422.0 329.5 L 424.0 329.7 L 426.0 329.8 L 428.0 329.7 L 430.0 329.5 L 432.0 329.1 L 434.0 328.5 L 436.0 327.8 L 438.0 326.9 L 440.0 326.0 L 442.0 324.9 L 444.0 323.7 L 446.0 322.5 L 448.0 321.1 L 450.0 319.7 L 452.0 318.3 L 454.0 316.8 L 456.0 315.2 L 458.0 313.7 L 460.0 312.1 L 462.0 310.6 L 464.0 309.0 L 466.0 307.5 L 468.0 306.0 L 470.0 304.6 L 472.0 303.2 L 474.0 301.8 L 476.0 300.5 L 478.0 299.3 L 480.0 298.1 L 482.0 297.0 L 484.0 296.0 L 486.0 295.0 L 488.0 294.1 L 490.0 293.2 L 492.0 292.4 L 494.0 291.6 L 496.0 290.9 L 498.0 290.2 L 500.0 289.5 L 502.0 288.8 L 504.0 288.2 L 506.0 287.5 L 508.0 286.8 L 510.0 286.2 L 512.0 285.5 L 514.0 284.7 L 516.0 283.9 L 518.0 283.1 L 520.0 282.2 L 522.0 281.2 L 524.0 280.2 L 526.0 279.1 L 528.0 277.9 L 530.0 276.6 L 532.0 275.3 L 534.0 273.9 L 536.0 272.4 L 538.0 270.8 L 540.0 269.1 L 542.0 267.4 L 544.0 265.6 L 546.0 263.7 L 548.0 261.7 L 550.0 259.7 L 552.0 257.7 L 554.0 255.6 L 556.0 253.5 L 558.0 251.4 L 560.0 249.3 L 562.0 247.1 L 564.0 245.1 L 566.0 243.0 L 568.0 241.0 L 570.0 239.1 L 572.0 237.2 L 574.0 235.4 L 576.0 233.7 L 578.0 232.1 L 580.0 230.7 L 582.0 229.4 L 584.0 228.2 L 586.0 227.1 L 588.0 226.2 L 590.0 225.5 L 592.0 225.0 L 594.0 224.6 L 596.0 224.4 L 598.0 224.3 L 600.0 224.4 L 602.0 224.7 L 604.0 225.2 L 606.0 225.8 L 608.0 226.6 L 610.0 227.6 L 612.0 228.7 L 614.0 229.9 L 616.0 231.2 L 618.0 232.7 L 620.0 234.3 L 622.0 236.0 L 624.0 237.7 L 626.0 239.5 L 628.0 241.4 L 630.0 243.3 L 632.0 245.2 L 634.0 247.2 L 636.0 249.1 L 638.0 251.1 L 640.0 253.0 L 642.0 254.9 L 644.0 256.8 L 646.0 258.6 L 648.0 260.3 L 650.0 262.0 L 652.0 263.6 L 654.0 265.1 L 656.0 266.5 L 658.0 267.8 L 660.0 269.1 L 662.0 270.2 L 664.0 271.3 L 666.0 272.3 L 668.0 273.2 L 670.0 274.0 L 672.0 274.7 L 674.0 275.3 L 676.0 275.9 L 678.0 276.4 L 680.0 276.9 L 682.0 277.4 L 684.0 277.8 L 686.0 278.1 L 688.0 278.5 L 690.0 278.8 L 692.0 279.2 L 694.0 279.6 L 696.0 280.0 L 698.0 280.4 L 700.0 280.9 L 702.0 281.4 L 704.0 282.0 L 706.0 282.6 L 708.0 283.3 L 710.0 284.1 L 712.0 284.9 L 714.0 285.8 L 716.0 286.8 L 718.0 287.8 L 720.0 289.0 L 722.0 290.2 L 724.0 291.4 L 726.0 292.7 L 728.0 294.1 L 730.0 295.5 L 732.0 297.0 L 734.0 298.5 L 736.0 300.0 L 738.0 301.5 L 740.0 303.0 L 742.0 304.5 L 744.0 306.0 L 746.0 307.5 L 748.0 308.9 L 750.0 310.2 L 752.0 311.4 L 754.0 312.6 L 756.0 313.7 L 758.0 314.7 L 760.0 315.6 L 762.0 316.3 L 764.0 316.9 L 766.0 317.4 L 768.0 317.7 L 770.0 317.9 L 772.0 318.0 L 774.0 317.8 L 776.0 317.6 L 778.0 317.1 L 780.0 316.5 L 782.0 315.8 L 784.0 314.9 L 786.0 313.9 L 788.0 312.7 L 790.0 311.4 L 792.0 310.0 L 794.0 308.5 L 796.0 306.9 L 798.0 305.2 L 800.0 303.4 L 802.0 301.5 L 804.0 299.6 L 806.0 297.6 L 808.0 295.7 L 810.0 293.7 L 812.0 291.7 L 814.0 289.7 L 816.0 287.8 L 818.0 285.9 L 820.0 284.0 L 822.0 282.2 L 824.0 280.5 L 826.0 278.8 L 828.0 277.3 L 830.0 275.8" fill="none" stroke={`url(#${id}-hl-strand)`} strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round"/>
            <line x1="38.0" y1="287.1" x2="25.9" y2="296.0" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="25.9" cy="296.0" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <line x1="55.0" y1="306.9" x2="67.2" y2="293.7" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="67.2" cy="293.7" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <line x1="72.0" y1="317.3" x2="66.0" y2="337.4" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="66.0" cy="337.4" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <line x1="89.0" y1="318.1" x2="86.7" y2="303.2" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="86.7" cy="303.2" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <line x1="106.0" y1="314.2" x2="110.3" y2="331.6" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="110.3" cy="331.6" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <line x1="123.0" y1="311.1" x2="121.0" y2="290.2" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="121.0" cy="290.2" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <line x1="140.0" y1="310.6" x2="139.9" y2="325.6" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="139.9" cy="325.6" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <line x1="157.0" y1="309.5" x2="153.6" y2="291.8" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="153.6" cy="291.8" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <line x1="174.0" y1="302.4" x2="185.8" y2="319.7" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="185.8" cy="319.7" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <line x1="191.0" y1="286.2" x2="179.5" y2="276.6" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="179.5" cy="276.6" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <line x1="208.0" y1="263.8" x2="222.6" y2="274.4" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="222.6" cy="274.4" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <line x1="225.0" y1="242.3" x2="209.6" y2="228.0" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="209.6" cy="228.0" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <line x1="242.0" y1="229.1" x2="248.0" y2="242.8" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="248.0" cy="242.8" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <line x1="259.0" y1="227.3" x2="262.4" y2="209.6" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="262.4" cy="209.6" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <line x1="276.0" y1="233.7" x2="266.5" y2="252.5" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="266.5" cy="252.5" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <line x1="293.0" y1="242.3" x2="299.2" y2="228.6" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="299.2" cy="228.6" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <line x1="310.0" y1="248.3" x2="305.6" y2="265.7" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="305.6" cy="265.7" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <line x1="327.0" y1="251.9" x2="331.5" y2="231.4" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="331.5" cy="231.4" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <line x1="344.0" y1="257.6" x2="337.3" y2="271.0" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="337.3" cy="271.0" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <line x1="361.0" y1="269.9" x2="373.4" y2="256.9" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="373.4" cy="256.9" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <line x1="378.0" y1="289.2" x2="361.5" y2="302.2" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="361.5" cy="302.2" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <line x1="395.0" y1="310.4" x2="406.3" y2="300.6" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="406.3" cy="300.6" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <line x1="412.0" y1="325.7" x2="402.8" y2="341.2" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="402.8" cy="341.2" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <line x1="429.0" y1="329.6" x2="426.3" y2="308.8" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="426.3" cy="308.8" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <line x1="446.0" y1="322.5" x2="454.2" y2="335.0" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="454.2" cy="335.0" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <line x1="463.0" y1="309.8" x2="452.0" y2="295.5" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="452.0" cy="295.5" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <line x1="480.0" y1="298.1" x2="490.4" y2="316.4" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="490.4" cy="316.4" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <line x1="497.0" y1="290.5" x2="492.0" y2="276.3" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="492.0" cy="276.3" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <line x1="514.0" y1="284.7" x2="520.4" y2="301.5" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="520.4" cy="301.5" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <line x1="531.0" y1="276.0" x2="519.3" y2="258.5" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="519.3" cy="258.5" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <line x1="548.0" y1="261.7" x2="558.5" y2="272.4" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="558.5" cy="272.4" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <line x1="565.0" y1="244.0" x2="552.1" y2="231.5" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="552.1" cy="231.5" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <line x1="582.0" y1="229.4" x2="593.2" y2="247.1" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="593.2" cy="247.1" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <line x1="599.0" y1="224.4" x2="600.0" y2="209.4" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="600.0" cy="209.4" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <line x1="616.0" y1="231.2" x2="605.6" y2="245.9" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="605.6" cy="245.9" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <line x1="633.0" y1="246.2" x2="647.7" y2="231.2" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="647.7" cy="231.2" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <line x1="650.0" y1="262.0" x2="640.5" y2="273.6" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="640.5" cy="273.6" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <line x1="667.0" y1="272.7" x2="674.3" y2="256.3" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="674.3" cy="256.3" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <line x1="684.0" y1="277.8" x2="680.0" y2="298.4" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="680.0" cy="298.4" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <line x1="701.0" y1="281.1" x2="704.8" y2="266.6" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="704.8" cy="266.6" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <line x1="718.0" y1="287.8" x2="709.4" y2="303.6" stroke="var(--c-purple)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="709.4" cy="303.6" r="5.2" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <line x1="735.0" y1="299.2" x2="747.6" y2="282.5" stroke="var(--bio-cyan)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="747.6" cy="282.5" r="5.2" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <line x1="752.0" y1="311.4" x2="744.2" y2="324.2" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="744.2" cy="324.2" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <line x1="769.0" y1="317.9" x2="770.7" y2="299.9" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="770.7" cy="299.9" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <line x1="786.0" y1="313.9" x2="796.1" y2="332.3" stroke="var(--c-pink)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="796.1" cy="332.3" r="5.2" fill="var(--c-pink)" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <line x1="803.0" y1="300.6" x2="792.6" y2="289.7" stroke="var(--bio-gold)" strokeWidth="3" strokeLinecap="round"/>
            <circle cx="792.6" cy="289.7" r="5.2" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="930" cy="160" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="985" cy="205" r="26" fill="var(--bio-gold)" opacity=".55" filter={`url(#${id}-hl-glow)`} className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="985" cy="205" r="13" fill="var(--bio-gold)" stroke="var(--bio-gold-halo)" strokeWidth="2" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="1050" cy="170" r="26" fill="var(--bio-gold)" opacity=".55" filter={`url(#${id}-hl-glow)`} className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="1050" cy="170" r="13" fill="var(--bio-gold)" stroke="var(--bio-gold-halo)" strokeWidth="2" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="1110" cy="215" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="950" cy="262" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="1020" cy="250" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="1085" cy="285" r="26" fill="var(--bio-gold)" opacity=".55" filter={`url(#${id}-hl-glow)`} className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="1085" cy="285" r="13" fill="var(--bio-gold)" stroke="var(--bio-gold-halo)" strokeWidth="2" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="1135" cy="330" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="940" cy="330" r="26" fill="var(--bio-gold)" opacity=".55" filter={`url(#${id}-hl-glow)`} className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="940" cy="330" r="13" fill="var(--bio-gold)" stroke="var(--bio-gold-halo)" strokeWidth="2" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="1000" cy="318" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="1062" cy="352" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="1110" cy="392" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="965" cy="392" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="1030" cy="410" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="905" cy="215" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="905" cy="300" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="1090" cy="130" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="1145" cy="262" r="8" fill="var(--c-purple)" opacity=".35" stroke="var(--c-lavender)" strokeOpacity=".5" strokeWidth="1.5" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            </svg>);
        case "02-four-notes.svg":
            return (<svg viewBox="0 0 1200 292" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <linearGradient id={`${id}-fn-bar`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="var(--c-lavender)"/>
            <stop offset="1" stopColor="var(--c-purple)"/>
            </linearGradient>
            <filter id={`${id}-fn-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-fn-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <rect x="56" y="76" width="8" height="97" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.58s" }}/>
            <rect x="74" y="51" width="8" height="148" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.87s" }}/>
            <rect x="92" y="36" width="8" height="177" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.16s" }}/>
            <rect x="110" y="28" width="8" height="193" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.45s" }}/>
            <rect x="128" y="33" width="8" height="184" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.74s" }}/>
            <rect x="146" y="51" width="8" height="149" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.03s" }}/>
            <rect x="164" y="69" width="8" height="112" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.32s" }}/>
            <rect x="182" y="80" width="8" height="90" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.61s" }}/>
            <rect x="200" y="98" width="8" height="54" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.9s" }}/>
            <rect x="216" y="47" width="12" height="157" rx="6" fill="var(--bio-gold)" opacity=".5" filter={`url(#${id}-fn-glow)`} className="bio-note" style={{ animationDelay: "-3.19s" }}/>
            <rect x="217" y="47" width="10" height="157" rx="5" fill="var(--bio-gold)" className="bio-note" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="222" cy="31" r="4.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <rect x="236" y="101" width="8" height="49" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.06s" }}/>
            <rect x="254" y="105" width="8" height="40" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.35s" }}/>
            <rect x="272" y="102" width="8" height="47" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.64s" }}/>
            <rect x="290" y="99" width="8" height="51" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "0.0s" }}/>
            <rect x="308" y="87" width="8" height="76" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.29s" }}/>
            <rect x="326" y="74" width="8" height="102" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.58s" }}/>
            <rect x="344" y="52" width="8" height="146" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.87s" }}/>
            <rect x="362" y="35" width="8" height="180" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.16s" }}/>
            <rect x="380" y="30" width="8" height="191" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.45s" }}/>
            <rect x="398" y="30" width="8" height="190" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.74s" }}/>
            <rect x="416" y="43" width="8" height="163" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.03s" }}/>
            <rect x="434" y="69" width="8" height="112" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.32s" }}/>
            <rect x="452" y="88" width="8" height="74" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.61s" }}/>
            <rect x="468" y="47" width="12" height="157" rx="6" fill="var(--bio-gold)" opacity=".5" filter={`url(#${id}-fn-glow)`} className="bio-note" style={{ animationDelay: "-2.9s" }}/>
            <rect x="469" y="47" width="10" height="157" rx="5" fill="var(--bio-gold)" className="bio-note" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="474" cy="31" r="4.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <rect x="488" y="81" width="8" height="87" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-3.77s" }}/>
            <rect x="506" y="75" width="8" height="101" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.06s" }}/>
            <rect x="524" y="66" width="8" height="118" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.35s" }}/>
            <rect x="542" y="72" width="8" height="106" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.64s" }}/>
            <rect x="560" y="74" width="8" height="102" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "0.0s" }}/>
            <rect x="578" y="74" width="8" height="103" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.29s" }}/>
            <rect x="596" y="71" width="8" height="108" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.58s" }}/>
            <rect x="614" y="61" width="8" height="128" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.87s" }}/>
            <rect x="632" y="55" width="8" height="139" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.16s" }}/>
            <rect x="650" y="45" width="8" height="160" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.45s" }}/>
            <rect x="668" y="48" width="8" height="155" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.74s" }}/>
            <rect x="686" y="53" width="8" height="145" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.03s" }}/>
            <rect x="704" y="71" width="8" height="107" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.32s" }}/>
            <rect x="722" y="102" width="8" height="46" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.61s" }}/>
            <rect x="738" y="47" width="12" height="157" rx="6" fill="var(--bio-gold)" opacity=".5" filter={`url(#${id}-fn-glow)`} className="bio-note" style={{ animationDelay: "-2.9s" }}/>
            <rect x="739" y="47" width="10" height="157" rx="5" fill="var(--bio-gold)" className="bio-note" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="744" cy="31" r="4.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <rect x="758" y="64" width="8" height="122" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-3.77s" }}/>
            <rect x="776" y="43" width="8" height="164" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.06s" }}/>
            <rect x="794" y="42" width="8" height="167" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.35s" }}/>
            <rect x="812" y="44" width="8" height="162" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.64s" }}/>
            <rect x="830" y="56" width="8" height="137" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "0.0s" }}/>
            <rect x="848" y="66" width="8" height="117" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.29s" }}/>
            <rect x="866" y="77" width="8" height="96" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.58s" }}/>
            <rect x="884" y="82" width="8" height="86" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.87s" }}/>
            <rect x="902" y="80" width="8" height="90" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.16s" }}/>
            <rect x="920" y="77" width="8" height="95" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.45s" }}/>
            <rect x="938" y="73" width="8" height="103" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-1.74s" }}/>
            <rect x="956" y="79" width="8" height="92" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.03s" }}/>
            <rect x="974" y="88" width="8" height="74" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-2.32s" }}/>
            <rect x="990" y="47" width="12" height="157" rx="6" fill="var(--bio-gold)" opacity=".5" filter={`url(#${id}-fn-glow)`} className="bio-note" style={{ animationDelay: "-2.61s" }}/>
            <rect x="991" y="47" width="10" height="157" rx="5" fill="var(--bio-gold)" className="bio-note" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="996" cy="31" r="4.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <rect x="1010" y="73" width="8" height="103" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-3.48s" }}/>
            <rect x="1028" y="53" width="8" height="144" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-3.77s" }}/>
            <rect x="1046" y="39" width="8" height="171" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.06s" }}/>
            <rect x="1064" y="25" width="8" height="199" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.35s" }}/>
            <rect x="1082" y="27" width="8" height="197" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-4.64s" }}/>
            <rect x="1100" y="39" width="8" height="172" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "0.0s" }}/>
            <rect x="1118" y="60" width="8" height="129" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.29s" }}/>
            <rect x="1136" y="79" width="8" height="92" rx="4" fill={`url(#${id}-fn-bar)`} opacity=".55" className="bio-note" style={{ animationDelay: "-0.58s" }}/>
            <text x="600" y="272" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="400" letterSpacing="3" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"A FEW NOTES ARE ENOUGH TO RECOGNISE THE SONG"}</text>
            </svg>);
        case "03-redundant-vs-complementary.svg":
            return (<svg viewBox="0 0 1200 330" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <filter id={`${id}-ov-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-ov-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <rect x="12" y="6" width="576" height="318" rx="24" fill="var(--c-surface)" stroke="var(--c-border)" strokeWidth="1.5"/>
            <rect x="36" y="26" width="134" height="32" rx="16" fill="none" stroke="var(--c-fg-subtle)" strokeWidth="1.6" opacity=".9"/>
            <text x="103.0" y="47" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"REDUNDANT"}</text>
            <rect x="612" y="6" width="576" height="318" rx="24" fill="var(--c-surface)" stroke="var(--c-border)" strokeWidth="1.5"/>
            <rect x="636" y="26" width="182" height="32" rx="16" fill="none" stroke="var(--bio-gold)" strokeWidth="1.6" opacity=".9"/>
            <text x="727.0" y="47" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--bio-gold)" textAnchor="middle" opacity="1">{"COMPLEMENTARY"}</text>
            <clipPath id={`${id}-ov-ca`}>
            <circle cx="232" cy="165" r="74" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            </clipPath>
            <circle cx="232" cy="165" r="74" fill="var(--c-purple)" opacity=".55" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="296" cy="165" r="74" fill="var(--bio-cyan)" opacity=".5" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="296" cy="165" r="74" fill="var(--c-lavender)" opacity=".6" clipPath={`url(#${id}-ov-ca)`}/>
            <text x="190" y="170" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="400" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Gene A"}</text>
            <text x="338" y="170" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="400" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Gene B"}</text>
            <text x="300" y="290" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="500" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Tell almost the same story."}</text>
            <clipPath id={`${id}-ov-cb`}>
            <circle cx="778" cy="165" r="74" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            </clipPath>
            <circle cx="778" cy="165" r="74" fill="var(--c-purple)" opacity=".55" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="912" cy="165" r="74" fill="var(--bio-cyan)" opacity=".5" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="912" cy="165" r="74" fill="var(--bio-gold)" opacity=".55" clipPath={`url(#${id}-ov-cb)`}/>
            <text x="748" y="170" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="400" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Gene A"}</text>
            <text x="944" y="170" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="400" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Gene B"}</text>
            <text x="900" y="290" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="500" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Each one adds something new."}</text>
            </svg>);
        case "04-team.svg":
            return (<svg viewBox="0 0 1200 316" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <filter id={`${id}-tm-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-tm-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <rect x="498" y="14" width="204" height="38" rx="19" fill="var(--bio-gold)"/>
            <text x="600" y="39" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="14" fontWeight="600" letterSpacing="2.5" fill="var(--c-on-gold)" textAnchor="middle" opacity="1">{"TEAMS OF 3\u20134"}</text>
            <path d="M 600 52 C 600 100 195 70 195 118" fill="none" stroke="var(--c-purple)" strokeWidth="1.8" opacity=".6" strokeDasharray="3 6" strokeLinecap="round" className="bio-flow" style={{ animationDelay: "-1.16s" }}/>
            <path d="M 600 52 C 600 100 465 70 465 118" fill="none" stroke="var(--bio-cyan)" strokeWidth="1.8" opacity=".6" strokeDasharray="3 6" strokeLinecap="round" className="bio-flow" style={{ animationDelay: "-1.45s" }}/>
            <path d="M 600 52 C 600 100 735 70 735 118" fill="none" stroke="var(--c-pink)" strokeWidth="1.8" opacity=".6" strokeDasharray="3 6" strokeLinecap="round" className="bio-flow" style={{ animationDelay: "-1.74s" }}/>
            <path d="M 600 52 C 600 100 1005 70 1005 118" fill="none" stroke="var(--c-brand-strong)" strokeWidth="1.8" opacity=".6" strokeDasharray="3 6" strokeLinecap="round" className="bio-flow" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="195" cy="176" r="58" fill="var(--c-surface)" stroke="var(--c-purple)" strokeWidth="2.4" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="195" cy="176" r="66" fill="var(--c-purple)" opacity=".12" filter={`url(#${id}-tm-glow)`} className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <g transform="translate(195 176) scale(1.1)">
            <circle cx="0" cy="-12" r="11" fill="none" stroke="var(--c-purple)" strokeWidth="2.6" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <path d="M -22 24 C -22 4 22 4 22 24" fill="none" stroke="var(--c-purple)" strokeWidth="2.6" strokeLinecap="round"/>
            </g>
            <text x="195" y="268" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Biology and health"}</text>
            <circle cx="465" cy="176" r="58" fill="var(--c-surface)" stroke="var(--bio-cyan)" strokeWidth="2.4" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="465" cy="176" r="66" fill="var(--bio-cyan)" opacity=".12" filter={`url(#${id}-tm-glow)`} className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <g transform="translate(465 176) scale(1.1)">
            <circle cx="0" cy="-12" r="11" fill="none" stroke="var(--bio-cyan)" strokeWidth="2.6" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <path d="M -22 24 C -22 4 22 4 22 24" fill="none" stroke="var(--bio-cyan)" strokeWidth="2.6" strokeLinecap="round"/>
            </g>
            <text x="465" y="268" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Computer science"}</text>
            <circle cx="735" cy="176" r="58" fill="var(--c-surface)" stroke="var(--c-pink)" strokeWidth="2.4" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="735" cy="176" r="66" fill="var(--c-pink)" opacity=".12" filter={`url(#${id}-tm-glow)`} className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <g transform="translate(735 176) scale(1.1)">
            <circle cx="0" cy="-12" r="11" fill="none" stroke="var(--c-pink)" strokeWidth="2.6" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <path d="M -22 24 C -22 4 22 4 22 24" fill="none" stroke="var(--c-pink)" strokeWidth="2.6" strokeLinecap="round"/>
            </g>
            <text x="735" y="268" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Engineering"}</text>
            <circle cx="1005" cy="176" r="58" fill="var(--c-surface)" stroke="var(--c-brand-strong)" strokeWidth="2.4" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="1005" cy="176" r="66" fill="var(--c-brand-strong)" opacity=".12" filter={`url(#${id}-tm-glow)`} className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <g transform="translate(1005 176) scale(1.1)">
            <circle cx="0" cy="-12" r="11" fill="none" stroke="var(--c-brand-strong)" strokeWidth="2.6" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <path d="M -22 24 C -22 4 22 4 22 24" fill="none" stroke="var(--c-brand-strong)" strokeWidth="2.6" strokeLinecap="round"/>
            </g>
            <text x="1005" y="268" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Any other major"}</text>
            </svg>);
        case "05-pipeline.svg":
            return (<svg viewBox="0 0 1200 226" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <filter id={`${id}-pl-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-pl-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <line x1="172" y1="96" x2="308" y2="96" stroke="var(--c-border)" strokeWidth="2"/>
            <path d="M 294 88 l 12 8 l -12 8" fill="none" stroke="var(--c-purple)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="120" cy="96" r="44" fill="var(--c-surface)" stroke="var(--c-purple)" strokeWidth="2.2" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <g transform="translate(120 96) scale(1)">
            <rect x="-20" y="-16" width="40" height="32" rx="4" fill="none" stroke="var(--c-lavender)" strokeWidth="2.2"/>
            <path d="M -20 -5 H 20 M -20 6 H 20 M -7 -16 V 16 M 7 -16 V 16" stroke="var(--c-lavender)" strokeWidth="2"/>
            </g>
            <text x="120" y="36" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-purple)" textAnchor="middle" opacity="1">{"01"}</text>
            <text x="120" y="176" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Gene activity table"}</text>
            <text x="120" y="202" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"Provided by organisers"}</text>
            <line x1="412" y1="96" x2="548" y2="96" stroke="var(--c-border)" strokeWidth="2"/>
            <path d="M 534 88 l 12 8 l -12 8" fill="none" stroke="var(--c-purple)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="360" cy="96" r="44" fill="var(--c-surface)" stroke="var(--c-purple)" strokeWidth="2.2" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <g transform="translate(360 96) scale(1)">
            <line x1="-17" y1="-10" x2="-4" y2="14" stroke="var(--c-lavender)" strokeWidth="1.8" opacity=".7"/>
            <line x1="-4" y1="14" x2="16" y2="-14" stroke="var(--c-lavender)" strokeWidth="1.8" opacity=".7"/>
            <line x1="-17" y1="-10" x2="16" y2="-14" stroke="var(--c-lavender)" strokeWidth="1.8" opacity=".7"/>
            <line x1="16" y1="-14" x2="18" y2="12" stroke="var(--c-lavender)" strokeWidth="1.8" opacity=".7"/>
            <line x1="-4" y1="14" x2="18" y2="12" stroke="var(--c-lavender)" strokeWidth="1.8" opacity=".7"/>
            <circle cx="-17" cy="-10" r="5" fill="var(--c-lavender)" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="-4" cy="14" r="5" fill="var(--c-lavender)" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="16" cy="-14" r="5" fill="var(--c-lavender)" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="18" cy="12" r="5" fill="var(--c-lavender)" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            </g>
            <text x="360" y="36" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-purple)" textAnchor="middle" opacity="1">{"02"}</text>
            <text x="360" y="176" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Score the panel"}</text>
            <text x="360" y="202" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"Write it as a QUBO"}</text>
            <line x1="652" y1="96" x2="788" y2="96" stroke="var(--c-border)" strokeWidth="2"/>
            <path d="M 774 88 l 12 8 l -12 8" fill="none" stroke="var(--c-purple)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="600" cy="96" r="44" fill="var(--c-surface)" stroke="var(--c-purple)" strokeWidth="2.2" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <g transform="translate(600 96) scale(1)">
            <ellipse cx="0" cy="0" rx="22" ry="8.5" fill="none" stroke="var(--c-lavender)" strokeWidth="2" transform="rotate(0)"/>
            <ellipse cx="0" cy="0" rx="22" ry="8.5" fill="none" stroke="var(--c-lavender)" strokeWidth="2" transform="rotate(60)"/>
            <ellipse cx="0" cy="0" rx="22" ry="8.5" fill="none" stroke="var(--c-lavender)" strokeWidth="2" transform="rotate(120)"/>
            <circle r="3.8" fill="var(--c-lavender)" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            </g>
            <text x="600" y="36" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-purple)" textAnchor="middle" opacity="1">{"03"}</text>
            <text x="600" y="176" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Search for the best four"}</text>
            <text x="600" y="202" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"QAOA vs classical"}</text>
            <line x1="892" y1="96" x2="1028" y2="96" stroke="var(--c-border)" strokeWidth="2"/>
            <path d="M 1014 88 l 12 8 l -12 8" fill="none" stroke="var(--c-purple)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="840" cy="96" r="44" fill="var(--c-surface)" stroke="var(--bio-gold)" strokeWidth="2.2" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="840" cy="96" r="52" fill="var(--bio-gold)" opacity=".16" filter={`url(#${id}-pl-glow)`} className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <g transform="translate(840 96) scale(1)">
            <circle cx="-10" cy="-10" r="6.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="-10" cy="10" r="6.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="10" cy="-10" r="6.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="10" cy="10" r="6.5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            </g>
            <text x="840" y="36" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-purple)" textAnchor="middle" opacity="1">{"04"}</text>
            <text x="840" y="176" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Your four genes"}</text>
            <text x="840" y="202" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"One panel, exactly four"}</text>
            <circle cx="1080" cy="96" r="44" fill="var(--c-surface)" stroke="var(--bio-cyan)" strokeWidth="2.2" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <g transform="translate(1080 96) scale(1)">
            <circle cx="-4" cy="-4" r="13" fill="none" stroke="var(--c-lavender)" strokeWidth="2.6" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="var(--c-lavender)" strokeWidth="3.2" strokeLinecap="round"/>
            <path d="M -10 -4 l 4 4 l 8 -8" fill="none" stroke="var(--c-lavender)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <text x="1080" y="36" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="2" fill="var(--c-purple)" textAnchor="middle" opacity="1">{"05"}</text>
            <text x="1080" y="176" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="19" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="middle" opacity="1">{"Check and explain"}</text>
            <text x="1080" y="202" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="middle" opacity="1">{"Test it, then the biology"}</text>
            </svg>);
        case "06-cells-to-samples.svg":
            return (<svg viewBox="0 0 1200 372" aria-hidden="true" className="biology-artwork block h-auto w-full">
            <defs>
            <filter id={`${id}-cs-glow`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="7"/>
            </filter>
            <filter id={`${id}-cs-soft`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2.5"/>
            </filter>
            </defs>
            <text x="20" y="34" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="3" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"SINGLE CELLS"}</text>
            <circle cx="107" cy="169" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="129" cy="150" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="121" cy="133" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="123" cy="120" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="79" cy="94" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="66" cy="130" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="116" cy="163" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="120" cy="133" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="126" cy="123" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="60" cy="146" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="88" cy="132" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="97" cy="170" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="136" cy="135" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="71" cy="148" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="78" cy="155" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="60" cy="121" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="131" cy="98" r="5.4" fill="var(--c-purple)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="258" cy="118" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="283" cy="96" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="267" cy="154" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="212" cy="88" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="270" cy="90" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="221" cy="145" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="279" cy="141" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="284" cy="132" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="235" cy="61" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="270" cy="78" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="256" cy="126" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="215" cy="102" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="293" cy="129" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="208" cy="106" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="255" cy="132" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="279" cy="110" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="247" cy="140" r="5.4" fill="var(--bio-cyan)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="85" cy="282" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="134" cy="237" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="102" cy="262" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="92" cy="208" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="131" cy="292" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="116" cy="255" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="121" cy="221" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="134" cy="279" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="122" cy="282" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="88" cy="261" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="95" cy="236" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="130" cy="258" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="146" cy="272" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="89" cy="285" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="76" cy="249" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="130" cy="248" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="137" cy="252" r="5.4" fill="var(--c-pink)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <circle cx="233" cy="269" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.87s" }}/>
            <circle cx="261" cy="214" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="265" cy="243" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <circle cx="274" cy="224" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-1.74s" }}/>
            <circle cx="268" cy="238" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="305" cy="234" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <circle cx="300" cy="242" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <circle cx="284" cy="288" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="249" cy="249" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="234" cy="222" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <circle cx="243" cy="247" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-3.77s" }}/>
            <circle cx="289" cy="270" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="245" cy="249" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <circle cx="222" cy="260" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-4.64s" }}/>
            <circle cx="255" cy="210" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "0.0s" }}/>
            <circle cx="238" cy="263" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="265" cy="266" r="5.4" fill="var(--c-brand-strong)" opacity=".85" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <text x="20" y="352" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="12" fontWeight="400" letterSpacing="2" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"EACH COLOUR IS ONE PATIENT"}</text>
            <line x1="352" y1="190" x2="452" y2="190" stroke="var(--c-purple)" strokeWidth="2.4"/>
            <path d="M 440 181 l 12 9 l -12 9" fill="none" stroke="var(--c-purple)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"/>
            <text x="402" y="170" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="12" fontWeight="400" letterSpacing="2" fill="var(--c-lavender)" textAnchor="middle" opacity="1">{"COMBINED"}</text>
            <text x="402" y="214" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="12" fontWeight="400" letterSpacing="2" fill="var(--c-lavender)" textAnchor="middle" opacity="1">{"PER SAMPLE"}</text>
            <text x="500" y="34" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="13" fontWeight="400" letterSpacing="3" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"SAMPLE-LEVEL TABLE"}</text>
            <circle cx="514" cy="73" r="5" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-2.61s" }}/>
            <rect x="530" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <rect x="564" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-3.19s" }}/>
            <rect x="598" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-3.48s" }}/>
            <rect x="632" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-3.77s" }}/>
            <rect x="666" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <rect x="700" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-4.35s" }}/>
            <rect x="734" y="60" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-4.64s" }}/>
            <rect x="768" y="60" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "0.0s" }}/>
            <rect x="802" y="60" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "-0.29s" }}/>
            <circle cx="514" cy="106" r="5" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-0.58s" }}/>
            <rect x="530" y="93" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-0.87s" }}/>
            <rect x="564" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-1.16s" }}/>
            <rect x="598" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-1.45s" }}/>
            <rect x="632" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-1.74s" }}/>
            <rect x="666" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-2.03s" }}/>
            <rect x="700" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-2.32s" }}/>
            <rect x="734" y="93" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-2.61s" }}/>
            <rect x="768" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <rect x="802" y="93" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-3.19s" }}/>
            <circle cx="514" cy="139" r="5" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-3.48s" }}/>
            <rect x="530" y="126" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-3.77s" }}/>
            <rect x="564" y="126" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <rect x="598" y="126" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-4.35s" }}/>
            <rect x="632" y="126" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-4.64s" }}/>
            <rect x="666" y="126" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "0.0s" }}/>
            <rect x="700" y="126" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-0.29s" }}/>
            <rect x="734" y="126" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-0.58s" }}/>
            <rect x="768" y="126" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-0.87s" }}/>
            <rect x="802" y="126" width="30" height="26" rx="5" fill="var(--bio-cool-4)" className="bio-cell" style={{ animationDelay: "-1.16s" }}/>
            <circle cx="514" cy="172" r="5" fill="var(--c-purple)" className="bio-particle" style={{ animationDelay: "-1.45s" }}/>
            <rect x="530" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-1.74s" }}/>
            <rect x="564" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-2.03s" }}/>
            <rect x="598" y="159" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "-2.32s" }}/>
            <rect x="632" y="159" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-2.61s" }}/>
            <rect x="666" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <rect x="700" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-4)" className="bio-cell" style={{ animationDelay: "-3.19s" }}/>
            <rect x="734" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-4)" className="bio-cell" style={{ animationDelay: "-3.48s" }}/>
            <rect x="768" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-3.77s" }}/>
            <rect x="802" y="159" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <circle cx="514" cy="205" r="5" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-4.35s" }}/>
            <rect x="530" y="192" width="30" height="26" rx="5" fill="var(--bio-warm-1)" className="bio-cell" style={{ animationDelay: "-4.64s" }}/>
            <rect x="564" y="192" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "0.0s" }}/>
            <rect x="598" y="192" width="30" height="26" rx="5" fill="var(--bio-cool-4)" className="bio-cell" style={{ animationDelay: "-0.29s" }}/>
            <rect x="632" y="192" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "-0.58s" }}/>
            <rect x="666" y="192" width="30" height="26" rx="5" fill="var(--bio-warm-1)" className="bio-cell" style={{ animationDelay: "-0.87s" }}/>
            <rect x="700" y="192" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-1.16s" }}/>
            <rect x="734" y="192" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-1.45s" }}/>
            <rect x="768" y="192" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-1.74s" }}/>
            <rect x="802" y="192" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-2.03s" }}/>
            <circle cx="514" cy="238" r="5" fill="var(--bio-cyan)" className="bio-particle" style={{ animationDelay: "-2.32s" }}/>
            <rect x="530" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-2.61s" }}/>
            <rect x="564" y="225" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <rect x="598" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-3.19s" }}/>
            <rect x="632" y="225" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-3.48s" }}/>
            <rect x="666" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-3.77s" }}/>
            <rect x="700" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <rect x="734" y="225" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-4.35s" }}/>
            <rect x="768" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-4.64s" }}/>
            <rect x="802" y="225" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "0.0s" }}/>
            <circle cx="514" cy="271" r="5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-0.29s" }}/>
            <rect x="530" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-1)" className="bio-cell" style={{ animationDelay: "-0.58s" }}/>
            <rect x="564" y="258" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-0.87s" }}/>
            <rect x="598" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-1.16s" }}/>
            <rect x="632" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-1.45s" }}/>
            <rect x="666" y="258" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-1.74s" }}/>
            <rect x="700" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-2.03s" }}/>
            <rect x="734" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-2.32s" }}/>
            <rect x="768" y="258" width="30" height="26" rx="5" fill="var(--bio-warm-3)" className="bio-cell" style={{ animationDelay: "-2.61s" }}/>
            <rect x="802" y="258" width="30" height="26" rx="5" fill="var(--bio-cool-1)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <circle cx="514" cy="304" r="5" fill="var(--bio-gold)" className="bio-particle" style={{ animationDelay: "-3.19s" }}/>
            <rect x="530" y="291" width="30" height="26" rx="5" fill="var(--bio-warm-2)" className="bio-cell" style={{ animationDelay: "-3.48s" }}/>
            <rect x="564" y="291" width="30" height="26" rx="5" fill="var(--bio-warm-1)" className="bio-cell" style={{ animationDelay: "-3.77s" }}/>
            <rect x="598" y="291" width="30" height="26" rx="5" fill="var(--bio-cool-3)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <rect x="632" y="291" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-4.35s" }}/>
            <rect x="666" y="291" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "-4.64s" }}/>
            <rect x="700" y="291" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "0.0s" }}/>
            <rect x="734" y="291" width="30" height="26" rx="5" fill="var(--bio-warm-1)" className="bio-cell" style={{ animationDelay: "-0.29s" }}/>
            <rect x="768" y="291" width="30" height="26" rx="5" fill="var(--bio-warm-4)" className="bio-cell" style={{ animationDelay: "-0.58s" }}/>
            <rect x="802" y="291" width="30" height="26" rx="5" fill="var(--bio-cool-2)" className="bio-cell" style={{ animationDelay: "-0.87s" }}/>
            <text x="530" y="336" fontFamily="'IBM Plex Mono', ui-monospace, monospace" fontSize="12" fontWeight="400" letterSpacing="2" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"ROWS: SAMPLES \u00b7 COLUMNS: GENES"}</text>
            <rect x="862" y="56" width="318" height="82" rx="16" fill="var(--c-surface)" stroke="var(--c-purple)" strokeWidth="2"/>
            <rect x="862" y="56" width="8" height="82" rx="4" fill="var(--c-purple)" className="bio-cell" style={{ animationDelay: "-1.74s" }}/>
            <text x="890" y="92" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="start" opacity="1">{"Training set"}</text>
            <text x="890" y="118" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="14.5" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"Labelled \u00b7 build your method"}</text>
            <rect x="862" y="152" width="318" height="82" rx="16" fill="var(--c-surface)" stroke="var(--bio-cyan)" strokeWidth="2"/>
            <rect x="862" y="152" width="8" height="82" rx="4" fill="var(--bio-cyan)" className="bio-cell" style={{ animationDelay: "-2.9s" }}/>
            <text x="890" y="188" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="start" opacity="1">{"Validation set"}</text>
            <text x="890" y="214" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="14.5" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"Labelled \u00b7 check and refine"}</text>
            <rect x="862" y="248" width="318" height="82" rx="16" fill="var(--c-surface)" stroke="var(--bio-gold)" strokeWidth="2" strokeDasharray="7 6"/>
            <rect x="862" y="248" width="8" height="82" rx="4" fill="var(--bio-gold)" className="bio-cell" style={{ animationDelay: "-4.06s" }}/>
            <text x="890" y="284" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="20" fontWeight="600" letterSpacing="0" fill="var(--c-fg)" textAnchor="start" opacity="1">{"Hidden test set"}</text>
            <text x="890" y="310" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="14.5" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"Held by the organisers"}</text>
            <g transform="translate(1146 289) scale(1.1)">
            <rect x="-11" y="-3" width="22" height="17" rx="4" fill="var(--bio-gold)" className="bio-cell" style={{ animationDelay: "-0.29s" }}/>
            <path d="M -6 -3 v -5 a 6 6 0 0 1 12 0 v 5" fill="none" stroke="var(--bio-gold)" strokeWidth="2.6"/>
            </g>
            <text x="862" y="352" fontFamily="'IBM Plex Sans', system-ui, sans-serif" fontSize="15" fontWeight="400" letterSpacing="0" fill="var(--c-fg-subtle)" textAnchor="start" opacity="1">{"Every patient stays in one split."}</text>
            </svg>);
        default: return <img src={src} alt="" loading="lazy" decoding="async" className="block h-auto w-full"/>;
    }
}
