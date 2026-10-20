"use client";
import { useId } from "react";
import { LungBiologyArtwork } from "@/components/LungBiologyArtwork";
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
            return <LungBiologyArtwork />;
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
