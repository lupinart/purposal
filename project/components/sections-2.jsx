// 章節 3：色彩系統
function SectionColor() {
  const core = [
    { name: 'Midnight Indigo', hex: '#0E2235', role: '主標 / 文字 / 描邊', cls: 'c-ink' },
    { name: 'Lab Blue', hex: '#3F8DCC', role: '互動 / 連結 / 重點', cls: 'c-lab' },
    { name: 'Paper Cream', hex: '#F6F1E7', role: '主背景', cls: 'c-paper' },
    { name: 'White Mist', hex: '#FDFBF5', role: '卡片 / 內容塊', cls: 'c-white' },
  ];
  const accent = [
    { name: 'Spark Yellow', hex: '#F4C430', role: '亮點 / 提示' },
    { name: 'Flask Mint', hex: '#7FB69E', role: '實驗 / 製作' },
    { name: 'Magic Magenta', hex: '#D45A8C', role: '驚奇 / 強調' },
    { name: 'Coral Glow', hex: '#E8895C', role: '互動 / 溫暖' },
  ];

  return (
    <section className="section" id="color">
      <div className="page">
        <div className="sec-head"><span className="sec-num">03 / COLOR</span></div>
        <h2 className="t-h2 sec-title">調色盤：克制的深藍 + 一點點魔法。</h2>
        <p className="sec-desc">
          主色維持 Logo 的深藍與燒杯水藍，奠定「值得信任」的家長語氣；輔助四色用於孩子向素材，但任一畫面同時最多出現 2 個輔色，避免變成兒童樂園。
        </p>

        <div style={{height: 40}} />
        <div style={{marginBottom: 12}}><span className="divider-tape">CORE PALETTE</span></div>
        <div className="grid g-4">
          {core.map(c => (
            <div key={c.hex} className="swatch">
              <div className="chip" style={{background: c.hex}} />
              <div className="meta">
                <div className="name">{c.name}</div>
                <div className="hex">{c.hex}</div>
                <div className="t-small" style={{marginTop: 6}}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{height: 40}} />
        <div style={{marginBottom: 12}}><span className="divider-tape">ACCENT — STEAM</span></div>
        <div className="grid g-4">
          {accent.map(c => (
            <div key={c.hex} className="swatch">
              <div className="chip" style={{background: c.hex}} />
              <div className="meta">
                <div className="name">{c.name}</div>
                <div className="hex">{c.hex}</div>
                <div className="t-small" style={{marginTop: 6}}>{c.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{height: 40}} />

        {/* 比例條 */}
        <div className="spec">
          <span className="spec-tag">USAGE RATIO</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>應用比例（任一頁面）</h4>
          <div style={{display: 'flex', height: 56, border: '2.5px solid var(--c-ink)', borderRadius: 'var(--r-md)', overflow: 'hidden'}}>
            <div style={{flex: 60, background: 'var(--c-paper)', display: 'grid', placeItems: 'center', borderRight: '2px solid var(--c-ink)'}}>
              <span className="t-mono">Paper 60%</span>
            </div>
            <div style={{flex: 22, background: 'var(--c-ink)', color: 'var(--c-paper)', display: 'grid', placeItems: 'center', borderRight: '2px solid var(--c-ink)'}}>
              <span className="t-mono">Ink 22%</span>
            </div>
            <div style={{flex: 12, background: 'var(--c-lab)', color: 'white', display: 'grid', placeItems: 'center', borderRight: '2px solid var(--c-ink)'}}>
              <span className="t-mono">Lab 12%</span>
            </div>
            <div style={{flex: 6, background: 'var(--c-spark)', display: 'grid', placeItems: 'center'}}>
              <span className="t-mono">Accent 6%</span>
            </div>
          </div>
          <p className="t-small" style={{marginTop: 14}}>
            輔色加總不超過 8%。輔色只負責「點睛」——卡片角標、tag、icon 強調，不做大面積背景。
          </p>
        </div>
      </div>
    </section>
  );
}

// 章節 4：字體系統
function SectionType() {
  return (
    <section className="section" id="type">
      <div className="page">
        <div className="sec-head"><span className="sec-num">04 / TYPOGRAPHY</span></div>
        <h2 className="t-h2 sec-title">字體：Noto Sans TC × Inter × JetBrains Mono。</h2>
        <p className="sec-desc">
          中文採思源黑體（Noto Sans TC），西文與數字採 Inter，技術標籤、編號、座標採 JetBrains Mono。三者搭配可同時兼顧家長頁面的穩重與孩子課程素材的活潑。
        </p>

        <div style={{height: 40}} />

        <div className="spec" style={{padding: '40px'}}>
          <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>NOTO SANS TC / 900 — Display</div>
          <div style={{fontSize: 84, fontWeight: 900, lineHeight: 1, letterSpacing: '-0.02em'}}>魔法科學</div>
          <div style={{fontSize: 14, color: 'var(--c-mute)', marginTop: 12, fontFamily: 'var(--f-mono)'}}>Aa Bb Cc 0123 — abcdefghijklmnopqrstuvwxyz</div>
        </div>

        <div style={{height: 16}} />

        <div className="grid g-2">
          <div className="spec">
            <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>NOTO SANS TC / 700 — Heading</div>
            <div style={{fontSize: 36, fontWeight: 700, lineHeight: 1.2}}>讓孩子愛上學習。</div>
          </div>
          <div className="spec">
            <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>NOTO SANS TC / 400 — Body</div>
            <div style={{fontSize: 16, lineHeight: 1.7, color: 'var(--c-ink-2)'}}>
              我們相信，當孩子第一秒被驚奇吸引、第二秒就被引導發現原理，學習才會真正發生。
            </div>
          </div>
        </div>

        <div style={{height: 16}} />

        <div className="grid g-3">
          <div className="spec">
            <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>INTER / 700</div>
            <div style={{fontFamily: 'var(--f-en)', fontSize: 32, fontWeight: 700}}>Magic Science</div>
          </div>
          <div className="spec">
            <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>JETBRAINS MONO</div>
            <div style={{fontFamily: 'var(--f-mono)', fontSize: 20, fontWeight: 500, letterSpacing: '0.05em'}}>EXP_001 / NaCl</div>
          </div>
          <div className="spec">
            <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>NUMERIC</div>
            <div style={{fontFamily: 'var(--f-en)', fontSize: 32, fontWeight: 800, letterSpacing: '-0.02em'}}>2026 / 02</div>
          </div>
        </div>

        <div style={{height: 32}} />

        {/* 階層表 */}
        <div className="spec">
          <span className="spec-tag">HIERARCHY</span>
          <table style={{width: '100%', marginTop: 18, borderCollapse: 'collapse'}}>
            <thead>
              <tr style={{borderBottom: '2px solid var(--c-ink)'}}>
                <th style={{textAlign: 'left', padding: '10px 8px', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)', letterSpacing: '0.1em'}}>LEVEL</th>
                <th style={{textAlign: 'left', padding: '10px 8px', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)', letterSpacing: '0.1em'}}>SIZE</th>
                <th style={{textAlign: 'left', padding: '10px 8px', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)', letterSpacing: '0.1em'}}>WEIGHT</th>
                <th style={{textAlign: 'left', padding: '10px 8px', fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)', letterSpacing: '0.1em'}}>用途</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['H1', '64–72px', '900', '頁面主標、Hero'],
                ['H2', '40–44px', '800', '區塊標題'],
                ['H3', '24–26px', '700', '卡片標題'],
                ['H4', '18px', '700', '小節'],
                ['Body', '15–16px', '400', '內文'],
                ['Caption', '12–13px', '500', '註解、tag'],
                ['Mono', '11–12px', '500', '編號、技術標籤'],
              ].map(row => (
                <tr key={row[0]} style={{borderBottom: '1px dashed var(--c-line)'}}>
                  <td style={{padding: '12px 8px', fontWeight: 700}}>{row[0]}</td>
                  <td style={{padding: '12px 8px', fontFamily: 'var(--f-mono)', fontSize: 13}}>{row[1]}</td>
                  <td style={{padding: '12px 8px', fontFamily: 'var(--f-mono)', fontSize: 13}}>{row[2]}</td>
                  <td style={{padding: '12px 8px', color: 'var(--c-ink-2)', fontSize: 14}}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// 章節 5：吉祥物
function SectionMascot() {
  return (
    <section className="section" id="mascot">
      <div className="page">
        <div className="sec-head"><span className="sec-num">05 / MASCOT</span></div>
        <h2 className="t-h2 sec-title">認識燒杯兔 — 抱著燒杯的小科學家。</h2>
        <p className="sec-desc">
          燒杯兔是品牌的吉祥物與情感入口。他是一隻灰色的兔子，戴著有紅色帽帶的紳士帽，總是抱著大燒杯做實驗。個性「會變魔術的聰明大哥哥/大姊姊」。在所有對孩子的素材中，燒杯兔都應該出現至少一次。
        </p>

        <div style={{height: 40}} />

        <div className="grid g-2" style={{gap: 24, alignItems: 'stretch'}}>
          <div className="spec graph-bg" style={{padding: 40, display: 'grid', placeItems: 'center'}}>
            <LumiFull size={280} />
          </div>
          <div style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <div className="spec">
              <span className="spec-tag" style={{background: 'var(--c-magic)'}}>PERSONALITY</span>
              <h4 className="t-h4" style={{marginTop: 14, marginBottom: 8}}>燒杯兔的人格</h4>
              <ul style={{listStyle: 'none', padding: 0, marginTop: 12}}>
                <li style={{padding: '8px 0', borderBottom: '1px dashed var(--c-line)'}}>🐰 好奇 — 永遠在問「為什麼？」</li>
                <li style={{padding: '8px 0', borderBottom: '1px dashed var(--c-line)'}}>✨ 友善 — 不說教，會邀請你一起做</li>
                <li style={{padding: '8px 0', borderBottom: '1px dashed var(--c-line)'}}>🔬 嚴謹 — 實驗一定要做完</li>
                <li style={{padding: '8px 0'}}>🎩 體面 — 紳士帽是他對科學的尊重</li>
              </ul>
            </div>
            <div className="spec">
              <span className="spec-tag" style={{background: 'var(--c-flask)'}}>VOICE</span>
              <h4 className="t-h4" style={{marginTop: 14, marginBottom: 8}}>燒杯兔怎麼說話</h4>
              <p className="t-body" style={{marginTop: 8}}>
                <strong>對孩子：</strong>「咦？這個會發生什麼事？我們一起來試試看！」
              </p>
              <p className="t-body" style={{marginTop: 8}}>
                <strong>對家長：</strong>不直接出聲，由品牌正式語氣替代。
              </p>
            </div>
          </div>
        </div>

        <div style={{height: 32}} />

        {/* 表情 / 變體 */}
        <div className="spec">
          <span className="spec-tag">EXPRESSIONS & USE</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>燒杯兔的延伸應用</h4>
          <div className="grid g-4">
            {['好奇 Curious', '驚奇 Wow', '專注 Focus', '完成 Done'].map((label, i) => (
              <div key={label} style={{
                border: '2px solid var(--c-ink)', borderRadius: 'var(--r-md)',
                background: ['var(--c-paper-2)', 'var(--c-lab-soft)', '#FCE9D0', '#E5F0E0'][i],
                padding: 24, textAlign: 'center',
              }}>
                <LumiAvatar size={84} />
                <div className="t-mono" style={{marginTop: 10, color: 'var(--c-mute)'}}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{height: 24}} />

        <div className="do-dont">
          <div className="do">
            <span className="label">DO</span>
            <p className="t-body">在課程教材封面、社群孩子向貼文、教室指標中放置燒杯兔。讓他自然地出現在角落「陪伴」訊息。</p>
          </div>
          <div className="dont">
            <span className="label">DON'T</span>
            <p className="t-body">不要在家長合約、價格頁、嚴肅公告中放燒杯兔；不要改他的配色（灰身 + 黑帽紅帶 + 燒杯是固定的）。</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionColor, SectionType, SectionMascot });
