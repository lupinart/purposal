// SVG components — all share Logo's "thick stroke + rounded line" visual DNA
// 燒杯兔 (Beaker Bunny) — 主吉祥物，依參考圖：灰身、黑紳士帽、紅帶、抱燒杯

const STROKE = "#3D2A26"; // 深棕黑描邊 (依參考圖)

// 主 Logo 圖騰 — 兔子 + 燒杯水 + 紳士帽
function LogoMark({size = 56}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 8 L22 22" />
        <path d="M30 8 L30 22" />
        <path d="M18 22 L34 22 L34 28 L18 28 Z" fill="var(--c-ink)" />
        <path d="M14 28 L38 28" />
        <ellipse cx="26" cy="44" rx="16" ry="13" fill="var(--c-white)" />
        <circle cx="20" cy="42" r="1.6" fill="var(--c-ink)" stroke="none" />
        <circle cx="32" cy="42" r="1.6" fill="var(--c-ink)" stroke="none" />
        <path d="M24 48 Q26 50 28 48" />
        <path d="M44 22 L44 36 Q44 44 50 44 Q56 44 56 36 L56 22" />
        <path d="M42 22 L58 22" />
        <path d="M44 36 Q47 33 50 35 Q53 37 56 35 L56 44 Q53 44 50 44 Q47 44 44 44 Z" fill="var(--c-lab)" stroke="none" />
        <path d="M44 36 Q47 33 50 35 Q53 37 56 35" stroke="var(--c-ink)" />
      </g>
    </svg>
  );
}

// 燒杯兔 — 完整版（直接使用品牌提供的插圖）
function BeakerBunnyFull({ size = 240 }) {
  return (
    <img
      src="assets/beaker-bunny-full.png"
      alt="燒杯兔"
      style={{ width: size, height: 'auto', objectFit: 'contain', display: 'block' }}
    />
  );
}

// 燒杯兔頭像 — 直接使用品牌提供的頭像圖
function BeakerBunnyAvatar({ size = 96 }) {
  return (
    <img
      src="assets/beaker-bunny-avatar.png"
      alt="燒杯兔頭像"
      style={{ width: size, height: size * (259/219), objectFit: 'contain', display: 'block' }}
    />
  );
}

// 燒杯 icon
function FlaskIcon({ size = 32, fill = "var(--c-lab)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 4 L11 13 L6 24 Q5 28 9 28 L23 28 Q27 28 26 24 L21 13 L21 4" />
        <path d="M9 4 L23 4" />
        <path d="M8 19 Q11 17 14 19 Q17 21 20 19 Q23 17 24 19 L26 24 Q27 28 23 28 L9 28 Q5 28 6 24 Z" fill={fill} stroke="none" />
        <path d="M8 19 Q11 17 14 19 Q17 21 20 19 Q23 17 24 19" />
        <circle cx="13" cy="23" r="0.8" fill="var(--c-ink)" stroke="none" />
        <circle cx="19" cy="25" r="0.8" fill="var(--c-ink)" stroke="none" />
      </g>
    </svg>
  );
}

function TubeIcon({ size = 32, fill = "var(--c-flask)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 3 L22 3 L22 24 Q22 29 16 29 Q10 29 10 24 Z" />
        <path d="M10 18 Q13 16 16 18 Q19 20 22 18 L22 24 Q22 29 16 29 Q10 29 10 24 Z" fill={fill} stroke="none" />
        <path d="M10 18 Q13 16 16 18 Q19 20 22 18" />
        <path d="M8 3 L24 3" />
      </g>
    </svg>
  );
}

function HatIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="6" width="14" height="16" rx="1" fill="var(--c-ink)" />
        <path d="M5 22 L27 22 L27 25 L5 25 Z" fill="var(--c-ink)" />
        <rect x="9" y="13" width="14" height="3" fill="#D62828" stroke="none" />
      </g>
    </svg>
  );
}

function SparkIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4 L16 12 M16 20 L16 28 M4 16 L12 16 M20 16 L28 16" />
        <path d="M8 8 L11 11 M21 21 L24 24 M8 24 L11 21 M21 11 L24 8" />
        <circle cx="16" cy="16" r="3" fill="var(--c-spark)" />
      </g>
    </svg>
  );
}

function MicroscopeIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="14" cy="8" r="3" />
        <path d="M14 11 L14 18" />
        <path d="M11 18 L17 18 L20 24 L11 24 Z" fill="var(--c-lab-soft)" />
        <path d="M5 28 L27 28" />
        <path d="M11 24 L8 28 M20 24 L23 28" />
      </g>
    </svg>
  );
}

function BookIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 6 L15 8 L15 27 L5 25 Z" fill="var(--c-paper-2)" />
        <path d="M27 6 L17 8 L17 27 L27 25 Z" fill="var(--c-paper-2)" />
        <path d="M15 8 L17 8" />
        <path d="M8 12 L12 12.6 M8 16 L12 16.6 M20 12 L24 11.4 M20 16 L24 15.4" strokeWidth="1.8" />
      </g>
    </svg>
  );
}

function GearIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4 L18 6 L20 4 L21 7 L23.5 6 L23 9 L26 9 L24 11 L26 13 L23 14 L24 16.5 L21 16 L20 19 L18 17.5 L16 19 L14.5 17 L12 18 L11 15.5 L8 16 L9 13 L7 11.5 L9.5 10 L8.5 7.5 L11 7.5 L11.5 5 L14 6 Z" fill="var(--c-spark)" />
        <circle cx="16" cy="12" r="3" fill="var(--c-paper)" />
      </g>
    </svg>
  );
}

function RackIcon({ size = 32 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g stroke="var(--c-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 24 L27 24" />
        <path d="M7 8 L25 8" />
        <path d="M10 8 L10 22 Q10 24 12 24 Q14 24 14 22 L14 8" fill="var(--c-magic)" fillOpacity="0.4" />
        <path d="M16 8 L16 22 Q16 24 18 24 Q20 24 20 22 L20 8" fill="var(--c-flask)" fillOpacity="0.5" />
      </g>
    </svg>
  );
}

function IconShowcase({ icon: Icon, name }) {
  return (
    <div style={{
      border: '2px solid var(--c-ink)',
      borderRadius: 'var(--r-md)',
      background: 'var(--c-white)',
      padding: '20px',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', gap: '10px',
    }}>
      <Icon size={40} />
      <div style={{fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)'}}>{name}</div>
    </div>
  );
}

// 提供舊名 alias，避免其他檔案還在用 Lumi*
const LumiFull = BeakerBunnyFull;
const LumiAvatar = BeakerBunnyAvatar;

Object.assign(window, {
  LogoMark,
  BeakerBunnyFull, BeakerBunnyAvatar,
  LumiFull, LumiAvatar,  // alias
  FlaskIcon, TubeIcon, HatIcon, SparkIcon, MicroscopeIcon, BookIcon, GearIcon, RackIcon,
  IconShowcase,
});
