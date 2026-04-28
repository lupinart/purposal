// 章節 8：版面範例 — 首頁 + 課程頁
function SectionLayouts() {
  return (
    <section className="section" id="layouts">
      <div className="page">
        <div className="sec-head"><span className="sec-num">08 / LAYOUTS</span></div>
        <h2 className="t-h2 sec-title">版面範例：首頁與課程頁。</h2>
        <p className="sec-desc">
          首頁面對「冷受眾」，主敘事是品牌願景與信任建立；課程頁面對「熱受眾」，重點是清晰的課程結構與報名 CTA。兩者共用同一套色彩與組件，靠版型與密度切換調性。
        </p>

        <div style={{height: 40}} />

        {/* Homepage mock */}
        <div className="spec" style={{padding: 0, overflow: 'hidden'}}>
          <div style={{
            background: 'var(--c-ink)',
            color: 'var(--c-paper)',
            padding: '10px 20px',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.1em',
          }}>
            <span>HOMEPAGE.HTML — 1440 × …</span>
            <span>family-facing · 穩重</span>
          </div>
          <HomepageMock />
        </div>

        <div style={{height: 24}} />

        {/* Course page */}
        <div className="spec" style={{padding: 0, overflow: 'hidden'}}>
          <div style={{
            background: 'var(--c-magic)',
            color: 'var(--c-paper)',
            padding: '10px 20px',
            display: 'flex', justifyContent: 'space-between',
            fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.1em',
          }}>
            <span>COURSE.HTML — 1440 × …</span>
            <span>kids-facing · 活潑</span>
          </div>
          <CoursePageMock />
        </div>
      </div>
    </section>
  );
}

function HomepageMock() {
  return (
    <div style={{background: 'var(--c-paper)', padding: '0', fontFamily: 'var(--f-body)'}}>
      {/* Nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '20px 40px', borderBottom: '1.5px solid var(--c-line)',
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LumiAvatar size={40} />
          <div>
            <div style={{fontWeight: 800, fontSize: 16}}>魔法科學</div>
            <div className="t-mono" style={{fontSize: 10, color: 'var(--c-mute)'}}>MAGIC SCIENCE</div>
          </div>
        </div>
        <nav style={{display: 'flex', gap: 28, fontSize: 14, color: 'var(--c-ink-2)'}}>
          <span>關於我們</span><span>課程</span><span>師資</span><span>家長心得</span><span>常見問題</span>
        </nav>
        <button className="btn btn-primary btn-sm">預約體驗</button>
      </div>

      {/* Hero */}
      <div style={{
        padding: '64px 40px',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, alignItems: 'center',
      }}>
        <div>
          <span className="divider-tape">SINCE 2018 · 台大校友創辦</span>
          <h1 style={{
            fontSize: 64, fontWeight: 900, lineHeight: 1.05,
            letterSpacing: '-0.02em', marginTop: 24, marginBottom: 20,
          }}>
            精彩孩子的人生，
            <br/>
            從<span style={{color: 'var(--c-lab)', borderBottom: '6px solid var(--c-spark)'}}>培養興趣</span>開始。
          </h1>
          <p style={{fontSize: 17, color: 'var(--c-ink-2)', maxWidth: '46ch', lineHeight: 1.7}}>
            把魔術的驚奇與物理化學的扎實合在一起。每堂課從一個會讓孩子瞪大眼的瞬間開始，最後讓他親手把原理做出來。
          </p>
          <div style={{display: 'flex', gap: 12, marginTop: 32}}>
            <button className="btn btn-primary">免費索取課程簡章 →</button>
            <button className="btn">看師資介紹</button>
          </div>
          <div style={{display: 'flex', gap: 32, marginTop: 40, paddingTop: 24, borderTop: '1.5px dashed var(--c-line)'}}>
            <div>
              <div style={{fontSize: 28, fontWeight: 900, fontFamily: 'var(--f-en)'}}>2,400+</div>
              <div className="t-small">學員實作經驗</div>
            </div>
            <div>
              <div style={{fontSize: 28, fontWeight: 900, fontFamily: 'var(--f-en)'}}>20<span style={{fontSize: 16}}>人/班</span></div>
              <div className="t-small">精緻小班制</div>
            </div>
            <div>
              <div style={{fontSize: 28, fontWeight: 900, fontFamily: 'var(--f-en)'}}>NTU</div>
              <div className="t-small">台大師資組成</div>
            </div>
          </div>
        </div>
        <div style={{position: 'relative', display: 'grid', placeItems: 'center'}}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(circle at center, var(--c-lab-soft) 0%, transparent 65%)',
          }} />
          <LumiFull size={300} />
          <div style={{
            position: 'absolute', top: 30, right: 0,
            background: 'var(--c-spark)', border: '2.5px solid var(--c-ink)',
            padding: '8px 14px', borderRadius: 'var(--r-pill)',
            transform: 'rotate(6deg)', fontWeight: 700, fontSize: 13,
          }}>✨ 第一堂免費</div>
        </div>
      </div>

      {/* Feature strip */}
      <div style={{padding: '56px 40px', background: 'var(--c-paper-2)', borderTop: '1.5px solid var(--c-line)', borderBottom: '1.5px solid var(--c-line)'}}>
        <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 12}}>— FEATURES</div>
        <h2 style={{fontSize: 40, fontWeight: 900, marginBottom: 32, letterSpacing: '-0.01em'}}>為什麼家長選我們。</h2>
        <div className="grid g-2">
          {[
            { num: '01', color: 'var(--c-magic)', icon: <SparkIcon />, title: '魔術 × 科學的獨家配方', body: '創辦人是台大物理 × 魔術社雙背景。每個課程都從「為什麼」開始，而不是教科書頁碼。' },
            { num: '02', color: 'var(--c-lab)', icon: <FlaskIcon />, title: '台大團隊親自帶課', body: '講師全為台大物理／化學／材料系背景。我們不外包教學品質。' },
            { num: '03', color: 'var(--c-flask)', icon: <MicroscopeIcon />, title: '20 人小班，每個都被看見', body: '不是大教室教學，是工作室式陪伴。每位孩子都會被叫到名字、被問到想法。' },
            { num: '04', color: 'var(--c-spark)', icon: <GearIcon />, title: 'STEAM 跨域實作', body: '一個主題串起科學、技術、工程、藝術、數學。培養的不是答題能力，是面對未知的能力。' },
          ].map(c => (
            <div key={c.num} className="feature-card">
              <span className="num-badge" style={{background: c.color}}>{c.num}</span>
              <div style={{position: 'absolute', top: 24, right: 24}}>{c.icon}</div>
              <h3 className="t-h3" style={{marginTop: 16, marginBottom: 12}}>{c.title}</h3>
              <p className="t-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{padding: '64px 40px', background: 'var(--c-ink)', color: 'var(--c-paper)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 40}}>
        <div>
          <div style={{fontFamily: 'var(--f-mono)', color: 'var(--c-spark)', fontSize: 12, letterSpacing: '0.16em', marginBottom: 14}}>NEXT BATCH OPENS — 2026.07</div>
          <h2 style={{fontSize: 40, fontWeight: 900, lineHeight: 1.15}}>準備讓孩子愛上一個<br/>連他自己都意外的科目嗎？</h2>
        </div>
        <button className="btn" style={{background: 'var(--c-spark)', boxShadow: '4px 4px 0 var(--c-paper)'}}>預約一對一說明 →</button>
      </div>
    </div>
  );
}

function CoursePageMock() {
  return (
    <div style={{background: 'var(--c-paper)', fontFamily: 'var(--f-body)'}}>
      {/* mini nav */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '16px 32px', background: 'var(--c-white)', borderBottom: '2px solid var(--c-ink)',
      }}>
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <LumiAvatar size={36} />
          <span style={{fontWeight: 800}}>魔法科學</span>
        </div>
        <div style={{display: 'flex', gap: 8, fontSize: 12}}>
          <span style={{padding: '6px 14px', background: 'var(--c-lab)', color: 'white', borderRadius: 999, border: '2px solid var(--c-ink)'}}>所有課程</span>
          <span style={{padding: '6px 14px', borderRadius: 999, border: '2px solid var(--c-ink)'}}>低年級</span>
          <span style={{padding: '6px 14px', borderRadius: 999, border: '2px solid var(--c-ink)'}}>中高年級</span>
          <span style={{padding: '6px 14px', borderRadius: 999, border: '2px solid var(--c-ink)'}}>國中</span>
        </div>
      </div>

      {/* Title */}
      <div style={{padding: '40px 32px 24px'}}>
        <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 8}}>COURSE / 中高年級</div>
        <h1 style={{fontSize: 56, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05}}>
          消失的水，
          <br/>
          重現的科學。
        </h1>
        <div style={{display: 'flex', gap: 8, marginTop: 16, flexWrap: 'wrap'}}>
          {[
            { l: 'STEAM', c: 'var(--c-lab)' },
            { l: '小學 4–6 年級', c: 'var(--c-flask)' },
            { l: '熱門', c: 'var(--c-magic)' },
            { l: '剩 4 位', c: 'var(--c-spark)' },
          ].map(t => (
            <span key={t.l} style={{
              fontSize: 12, fontWeight: 700, padding: '4px 12px',
              background: t.c, color: t.c === 'var(--c-spark)' ? 'var(--c-ink)' : 'white',
              border: '2px solid var(--c-ink)', borderRadius: 999,
            }}>{t.l}</span>
          ))}
        </div>
      </div>

      {/* lesson grid */}
      <div style={{padding: '24px 32px 48px'}}>
        <div className="grid g-4" style={{gap: 14}}>
          {[
            { w: 'WEEK 01', t: '魔術開場：消失的水', c: 'var(--c-magic)', icon: <SparkIcon /> },
            { w: 'WEEK 02', t: '高分子的祕密', c: 'var(--c-lab)', icon: <FlaskIcon /> },
            { w: 'WEEK 03', t: '自製吸水膠球', c: 'var(--c-flask)', icon: <TubeIcon /> },
            { w: 'WEEK 04', t: '生活應用：紙尿布', c: 'var(--c-spark)', icon: <GearIcon /> },
          ].map(l => (
            <div key={l.w} style={{
              border: '2.5px solid var(--c-ink)', borderRadius: 'var(--r-lg)',
              background: 'var(--c-white)', padding: 18, position: 'relative',
              boxShadow: '3px 3px 0 var(--c-ink)',
            }}>
              <div style={{
                fontFamily: 'var(--f-mono)', fontSize: 11,
                background: l.c, color: l.c === 'var(--c-spark)' ? 'var(--c-ink)' : 'white',
                padding: '3px 10px', borderRadius: 4,
                display: 'inline-block', border: '2px solid var(--c-ink)',
              }}>{l.w}</div>
              <h4 style={{marginTop: 12, fontWeight: 800, fontSize: 16, lineHeight: 1.3}}>{l.t}</h4>
              <div style={{marginTop: 14}}>{l.icon}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky CTA bar */}
      <div style={{
        padding: '16px 32px',
        background: 'var(--c-ink)', color: 'var(--c-paper)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <div>
          <div className="t-mono" style={{color: 'var(--c-spark)', fontSize: 11, letterSpacing: '0.16em'}}>4 WEEKS · 每週六 14:00</div>
          <div style={{fontSize: 22, fontWeight: 900, marginTop: 4}}>NT$ 4,800<span style={{fontSize: 12, color: 'rgba(246,241,231,0.6)', marginLeft: 8}}>含實驗材料包</span></div>
        </div>
        <button className="btn" style={{background: 'var(--c-spark)', boxShadow: '4px 4px 0 var(--c-paper)'}}>立即報名 →</button>
      </div>
    </div>
  );
}

Object.assign(window, { SectionLayouts });
