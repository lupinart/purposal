// 章節 1：理念識別 + 故事
function SectionPhilosophy() {
  return (
    <section className="section" id="philosophy">
      <div className="page">
        <div className="sec-head">
          <span className="sec-num">01 / PHILOSOPHY</span>
        </div>
        <h2 className="t-h2 sec-title">為什麼是「魔法」加上「科學」。</h2>
        <p className="sec-desc">
          創辦人黃新堯來自台大物理系，也是台大魔術社成員。他相信：當孩子第一秒被「魔術般的驚奇」吸引、第二秒就被引導發現背後的科學原理，學習才會真正發生。這個品牌的識別系統，就是把這份「驚喜 → 探究」的體驗，翻譯成可被一致使用的視覺語言。
        </p>

        <div style={{height: 56}} />

        <div className="grid g-3" style={{gap: 24}}>
          {[
            {
              tag: 'MISSION',
              title: '我們存在的理由',
              body: '打破「科學很枯燥」的刻板印象，讓大班至國中孩子在驚奇與歡笑中，主動探索世界、學會解決問題。',
            },
            {
              tag: 'VISION',
              title: '我們在去的地方',
              body: '成為全台最具影響力、家長首選的 STEAM 教育精品品牌；讓「魔法科學」成為兒童科學教育的代名詞。',
            },
            {
              tag: 'VALUES',
              title: '我們堅持的原則',
              body: '做中玩、玩中學。引發興趣是一切的起點；精緻小班、頂尖師資是體驗的底線。',
            },
          ].map((c) => (
            <div key={c.tag} className="spec" style={{padding: '32px 28px'}}>
              <span className="spec-tag">{c.tag}</span>
              <h3 className="t-h3" style={{marginTop: 18, marginBottom: 12}}>{c.title}</h3>
              <p className="t-body">{c.body}</p>
            </div>
          ))}
        </div>

        <div style={{height: 48}} />

        <div className="spec" style={{
          background: 'var(--c-ink)',
          borderColor: 'var(--c-ink)',
          color: 'var(--c-paper)',
          padding: '48px',
          display: 'flex',
          alignItems: 'center',
          gap: 40,
        }}>
          <div style={{flex: 1}}>
            <div style={{
              fontFamily: 'var(--f-mono)', fontSize: 12,
              color: 'var(--c-spark)', letterSpacing: '0.16em', marginBottom: 18,
            }}>BRAND VOICE / SLOGAN</div>
            <h3 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.01em',
            }}>
              精彩孩子的人生，
              <br/>
              從培養學習興趣開始。
            </h3>
            <p style={{marginTop: 24, color: 'rgba(246,241,231,0.7)', fontSize: 15, maxWidth: '52ch'}}>
              這是創辦人寫給家長的一句話，也是品牌所有對外溝通的第一錨點。在任何延伸文案、課程介紹、海報視覺中，這句話的精神都不能被稀釋。
            </p>
          </div>
          <div style={{flexShrink: 0}}>
            <LumiFull size={200} />
          </div>
        </div>
      </div>
    </section>
  );
}

// 章節 2：Logo 規範
function SectionLogo() {
  return (
    <section className="section" id="logo">
      <div className="page">
        <div className="sec-head">
          <span className="sec-num">02 / LOGO</span>
        </div>
        <h2 className="t-h2 sec-title">Logo 標準與安全空間。</h2>
        <p className="sec-desc">
          主 Logo 由「燒杯兔」、燒杯水位曲線、紳士帽三個圖騰組合而成。圖騰必須完整、不可拆解使用；下方標語可在小尺寸或社群頭像中省略。
        </p>

        <div style={{height: 48}} />

        {/* 主 Logo 展示 */}
        <div className="spec graph-bg" style={{padding: 64, display: 'grid', placeItems: 'center'}}>
          <BigLogoLockup />
        </div>

        <div style={{height: 24}} />

        {/* 變體 */}
        <div className="grid g-4" style={{gap: 16}}>
          <LogoVariant label="Primary 主標準" bg="var(--c-paper)" inkColor="var(--c-ink)" />
          <LogoVariant label="Reverse 反白" bg="var(--c-ink)" inkColor="var(--c-paper)" />
          <LogoVariant label="Mono 黑" bg="var(--c-paper)" inkColor="var(--c-ink)" mono />
          <LogoVariant label="Brand Blue" bg="var(--c-lab-soft)" inkColor="var(--c-ink)" />
        </div>

        <div style={{height: 48}} />

        {/* 安全空間 + 最小尺寸 */}
        <div className="grid g-2" style={{gap: 24}}>
          <div className="spec">
            <span className="spec-tag">CLEAR SPACE</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>安全空間 = X</h4>
            <p className="t-small" style={{marginBottom: 24}}>
              X 為兔子頭部的高度。Logo 周邊任何方向至少保留 1X 距離，避免其他文字、圖形入侵。
            </p>
            <ClearSpaceDiagram />
          </div>
          <div className="spec">
            <span className="spec-tag">MIN SIZE</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>最小尺寸</h4>
            <p className="t-small" style={{marginBottom: 24}}>
              印刷：圖騰寬度不小於 24mm；數位：不小於 120px。低於此尺寸請改用「圖騰版（無標語）」。
            </p>
            <MinSizeDiagram />
          </div>
        </div>

        <div style={{height: 48}} />

        {/* Do / Dont */}
        <h3 className="t-h3" style={{marginBottom: 20}}>禁用範例</h3>
        <div className="grid g-4" style={{gap: 16}}>
          {[
            { ok: false, label: '禁止 — 變形' },
            { ok: false, label: '禁止 — 重著色' },
            { ok: false, label: '禁止 — 加陰影' },
            { ok: false, label: '禁止 — 旋轉' },
          ].map((d, i) => (
            <DontExample key={i} {...d} kind={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BigLogoLockup() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14}}>
      <img src="assets/logo-full.png" alt="魔法科學 Logo" style={{maxWidth: 560, width: '100%', height: 'auto'}} />
      <div style={{
        fontFamily: 'var(--f-body)',
        fontSize: 18, fontWeight: 600, letterSpacing: '0.05em',
        color: 'var(--c-ink)',
      }}>
        精彩孩子的人生，從培養學習興趣開始。
      </div>
    </div>
  );
}

function _UnusedOldLogo() {
  return (
    <div>
      <svg width="520" height="180" viewBox="0 0 520 180" fill="none">
        <g stroke="var(--c-ink)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* 兔頭 */}
          <path d="M30 70 Q24 30 36 30 L36 70" />
          <path d="M48 70 L48 30 Q60 30 54 70" />
          <ellipse cx="42" cy="100" rx="32" ry="26" fill="var(--c-white)" />
          <circle cx="32" cy="98" r="2.4" fill="var(--c-ink)" stroke="none" />
          <circle cx="52" cy="98" r="2.4" fill="var(--c-ink)" stroke="none" />
          <path d="M42 108 L42 112 M37 115 Q42 118 47 115" />

          {/* 「魔」字 - 簡化代表 */}
          <path d="M100 30 L160 30 L160 130 L100 130 Z" />
          <path d="M110 50 L150 50 M110 70 L150 70 M130 50 L130 130" />
          <path d="M105 100 Q120 92 130 100 Q140 108 155 100 L155 120 Q140 120 130 120 Q120 120 105 120 Z" fill="var(--c-lab)" stroke="none" />
          <path d="M105 100 Q120 92 130 100 Q140 108 155 100" />

          {/* 「法」字 */}
          <path d="M180 50 L185 45 M180 70 L188 65 M180 90 L185 85" />
          <path d="M200 30 L240 30 L240 100 L200 100 Z" />
          <path d="M210 50 L230 50" />
          <path d="M200 75 Q215 70 225 75 Q235 80 240 75 L240 100 L200 100 Z" fill="var(--c-lab)" stroke="none" />
          <path d="M200 75 Q215 70 225 75 Q235 80 240 75" />
          <path d="M210 110 L230 110 L230 130 L210 130 Z" />

          {/* 「科」字 */}
          <path d="M270 30 L300 30 L300 80 L270 80 Z" />
          <path d="M285 30 L285 130" />
          <path d="M268 95 L302 95" />
          <path d="M315 30 L350 30" />
          <path d="M333 30 L333 130" />
          <path d="M315 70 L350 70" />
          <path d="M315 100 L350 100" />

          {/* 「學」字 */}
          <path d="M370 28 L420 28" />
          <path d="M395 28 L395 50" />
          <path d="M375 50 L415 50 L415 75 L375 75 Z" />
          <path d="M395 50 L395 75" />
          <path d="M385 60 L405 60" />
          <path d="M380 88 L410 88" />
          <path d="M395 88 L395 130" />
          <path d="M385 110 L405 110" />

          {/* 紳士帽 */}
          <rect x="445" y="40" width="46" height="22" rx="1.5" fill="var(--c-ink)" />
          <path d="M438 62 L498 62 L498 68 L438 68 Z" fill="var(--c-ink)" />
          <rect x="445" y="48" width="46" height="6" fill="var(--c-paper)" stroke="none" />
          <ellipse cx="468" cy="120" rx="26" ry="20" fill="var(--c-ink)" />
        </g>
      </svg>
      <div style={{
        fontFamily: 'var(--f-body)',
        fontSize: 18, fontWeight: 600, letterSpacing: '0.05em',
        color: 'var(--c-ink)',
      }}>
        精彩孩子的人生，從培養學習興趣開始。
      </div>
    </div>
  );
}

function LogoVariant({ label, bg, inkColor, mono }) {
  const filter = bg === 'var(--c-ink)' ? 'invert(1) brightness(1.1)' : (mono ? 'grayscale(1) contrast(1.2)' : 'none');
  return (
    <div className="spec" style={{padding: 0, overflow: 'hidden'}}>
      <div style={{
        background: bg,
        height: 130,
        display: 'grid', placeItems: 'center',
        borderBottom: '2.5px solid var(--c-ink)',
      }}>
        <img src="assets/logo-full.png" alt="魔法科學" style={{maxWidth: 180, height: 'auto', filter}} />
      </div>
      <div style={{padding: '12px 14px'}}>
        <div className="t-mono" style={{color: 'var(--c-mute)'}}>{label}</div>
      </div>
    </div>
  );
}

function ClearSpaceDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%">
      <rect x="40" y="40" width="240" height="140" fill="none" stroke="var(--c-lab)" strokeWidth="1.5" strokeDasharray="4 4" />
      <rect x="80" y="80" width="160" height="60" fill="var(--c-paper-2)" stroke="var(--c-ink)" strokeWidth="2" />
      <text x="160" y="116" fontSize="14" fontWeight="800" fill="var(--c-ink)" textAnchor="middle">魔法科學</text>
      {/* X labels */}
      <line x1="40" y1="220" x2="80" y2="220" stroke="var(--c-magic)" strokeWidth="2" />
      <text x="60" y="214" fontSize="11" fill="var(--c-magic)" textAnchor="middle" fontFamily="var(--f-mono)">1X</text>
      <line x1="80" y1="220" x2="240" y2="220" stroke="var(--c-ink)" strokeWidth="2" />
      <text x="160" y="214" fontSize="11" fill="var(--c-ink)" textAnchor="middle" fontFamily="var(--f-mono)">LOGO</text>
      <line x1="240" y1="220" x2="280" y2="220" stroke="var(--c-magic)" strokeWidth="2" />
      <text x="260" y="214" fontSize="11" fill="var(--c-magic)" textAnchor="middle" fontFamily="var(--f-mono)">1X</text>
      <text x="20" y="115" fontSize="11" fill="var(--c-magic)" fontFamily="var(--f-mono)">1X</text>
      <text x="290" y="115" fontSize="11" fill="var(--c-magic)" fontFamily="var(--f-mono)">1X</text>
    </svg>
  );
}

function MinSizeDiagram() {
  return (
    <svg viewBox="0 0 320 220" width="100%">
      <g stroke="var(--c-ink)" strokeWidth="1.5">
        <rect x="40" y="60" width="220" height="80" fill="var(--c-paper-2)" />
        <text x="150" y="106" fontSize="22" fontWeight="800" fill="var(--c-ink)" textAnchor="middle" stroke="none">魔法科學</text>
      </g>
      <g stroke="var(--c-ink)" strokeWidth="1.5">
        <rect x="40" y="160" width="80" height="40" fill="var(--c-paper-2)" />
        <text x="80" y="186" fontSize="11" fontWeight="800" fill="var(--c-ink)" textAnchor="middle" stroke="none">魔法科學</text>
      </g>
      <text x="270" y="105" fontSize="11" fill="var(--c-mute)" fontFamily="var(--f-mono)">220px</text>
      <text x="130" y="186" fontSize="11" fill="var(--c-mute)" fontFamily="var(--f-mono)">120px</text>
      <text x="130" y="200" fontSize="10" fill="var(--c-magic)" fontFamily="var(--f-mono)">最小</text>
    </svg>
  );
}

function DontExample({ ok, label, kind }) {
  const transform = ['skewX(-12deg)', '', 'drop-shadow(4px 6px 0 rgba(0,0,0,0.3))', 'rotate(-12deg)'][kind];
  const fillColor = kind === 1 ? 'var(--c-magic)' : 'var(--c-ink)';
  return (
    <div className="spec" style={{padding: 0, overflow: 'hidden', position: 'relative'}}>
      <div style={{
        height: 120,
        display: 'grid', placeItems: 'center',
        background: 'var(--c-paper-2)',
        borderBottom: '2.5px solid var(--c-ink)',
      }}>
        <div style={{
          transform: kind === 0 ? 'skewX(-15deg)' : (kind === 3 ? 'rotate(-12deg)' : ''),
          filter: kind === 2 ? 'drop-shadow(4px 6px 0 rgba(0,0,0,0.3))' : '',
          fontSize: 22, fontWeight: 900,
          color: fillColor,
        }}>
          魔法科學
        </div>
      </div>
      <div style={{
        position: 'absolute', top: 8, right: 8,
        width: 28, height: 28, borderRadius: '50%',
        background: '#b03030', color: 'white',
        display: 'grid', placeItems: 'center',
        fontWeight: 900, fontSize: 18, border: '2px solid var(--c-ink)',
      }}>×</div>
      <div style={{padding: '12px 14px'}}>
        <div className="t-mono" style={{color: 'var(--c-mute)'}}>{label}</div>
      </div>
    </div>
  );
}

Object.assign(window, { SectionPhilosophy, SectionLogo });
