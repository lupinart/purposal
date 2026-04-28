// 封面 / Hero / Footer
function CoverHero() {
  return (
    <section style={{
      minHeight: '90vh',
      borderBottom: '1.5px dashed var(--c-line)',
      position: 'relative',
      overflow: 'hidden',
      background: `
        radial-gradient(circle at 20% 80%, var(--c-lab-soft) 0%, transparent 40%),
        radial-gradient(circle at 80% 20%, rgba(244,196,48,0.18) 0%, transparent 40%),
        var(--c-paper)
      `, backgroundColor: "rgb(253, 253, 253)"
    }}>
      <div className="page" style={{ paddingTop: 88, paddingBottom: 88, position: 'relative' }}>
        {/* corner labels */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--c-mute)',
          letterSpacing: '0.16em', marginBottom: 80
        }}>
          <span>BRAND IDENTITY GUIDELINES</span>
          <span>v1.0 · 2026.04</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="divider-tape" style={{ marginBottom: 28 }}>
              FOR INTERNAL USE · 內部使用
            </div>
            <h1 style={{
              fontSize: 'clamp(56px, 7vw, 104px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.98
            }}>
              魔法<span style={{ color: 'var(--c-lab)' }}>科學</span>
              <br />
              視覺規範。
            </h1>
            <p style={{
              fontSize: 18, color: 'var(--c-ink-2)',
              lineHeight: 1.7, marginTop: 28, maxWidth: '46ch'
            }}>
              這份指南把品牌的理念、Logo、色彩、字體、吉祥物燒杯兔、UI 組件、版面、應用，都收在一份可滾動的長卷裡。任何對外素材在製作前，先讀一次這份文件。
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              <a href="#philosophy" className="btn btn-primary">開始閱讀 ↓</a>
              <a href="#voice" className="btn" style={{ color: "rgb(63, 141, 204)" }}>直接看語氣</a>
            </div>
          </div>
          <div style={{ position: 'relative', display: 'grid', placeItems: 'center' }}>
            <LumiFull size={340} />
            <div style={{
              position: 'absolute', top: 20, right: 0,
              background: 'var(--c-spark)', border: '2.5px solid var(--c-ink)',
              padding: '6px 14px', borderRadius: 999,
              transform: 'rotate(-6deg)', fontWeight: 800, fontSize: 13
            }}>Hi, 我是燒杯兔 🐰</div>
            <div style={{
              position: 'absolute', bottom: 40, left: -10,
              background: 'var(--c-magic)', color: 'white', border: '2.5px solid var(--c-ink)',
              padding: '6px 14px', borderRadius: 999,
              transform: 'rotate(4deg)', fontWeight: 800, fontSize: 12
            }}>✨ 這份指南的吉祥物</div>
          </div>
        </div>

        {/* TOC strip */}
        <div style={{
          marginTop: 80,
          paddingTop: 32, borderTop: '2px solid var(--c-ink)'
        }}>
          <div className="t-mono" style={{ color: 'var(--c-mute)', marginBottom: 16 }}>CONTENTS</div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12
          }}>
            {[
            ['01', 'Philosophy', '#philosophy'],
            ['02', 'Logo', '#logo'],
            ['03', 'Color', '#color'],
            ['04', 'Typography', '#type'],
            ['05', 'Mascot', '#mascot'],
            ['06', 'Iconography', '#icons'],
            ['07', 'Components', '#components'],
            ['08', 'Layouts', '#layouts'],
            ['09', 'Applications', '#apps'],
            ['10', 'Voice', '#voice']].
            map(([n, t, h]) =>
            <a key={n} href={h} style={{
              textDecoration: 'none', color: 'var(--c-ink)',
              padding: '14px 14px',
              border: '2px solid var(--c-ink)',
              borderRadius: 'var(--r-md)',
              background: 'var(--c-white)',
              display: 'flex', flexDirection: 'column', gap: 6,
              transition: 'all .12s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '3px 3px 0 var(--c-ink)'}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                <span className="t-mono" style={{ fontSize: 11, color: 'var(--c-mute)' }}>{n}</span>
                <span style={{ fontWeight: 700, fontSize: 14 }}>{t}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function GuideFooter() {
  return (
    <footer style={{
      background: 'var(--c-ink)', color: 'var(--c-paper)',
      padding: '64px 0 40px'
    }}>
      <div className="page">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40 }}>
          <div>
            <div className="t-mono" style={{ color: 'var(--c-spark)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 14 }}>END OF GUIDE</div>
            <h3 style={{ fontSize: 32, fontWeight: 900, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
              一個品牌的紀律，<br />
              來自每個人都用同一套尺。
            </h3>
            <p style={{ marginTop: 18, color: 'rgba(246,241,231,0.7)', fontSize: 14, maxWidth: '46ch' }}>
              本指南為內部使用文件。任何外部合作（印刷廠、社群代操、活動廠商）拿到素材前，請先附上這份指南。
            </p>
          </div>
          <div>
            <div className="t-mono" style={{ color: 'rgba(246,241,231,0.5)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 14 }}>VERSION</div>
            <div style={{ fontSize: 14, lineHeight: 1.9 }}>
              v1.0 · 2026.04<br />
              下次審閱：2026.10<br />
              負責人：黃新堯
            </div>
          </div>
          <div>
            <div className="t-mono" style={{ color: 'rgba(246,241,231,0.5)', fontSize: 11, letterSpacing: '0.18em', marginBottom: 14 }}>CONTACT</div>
            <div style={{ fontSize: 14, lineHeight: 1.9 }}>
              brand@magicscience.tw<br />
              magicscience.tw<br />
              台北 · 板橋 · 台電大樓
            </div>
          </div>
        </div>
        <div style={{
          marginTop: 56, paddingTop: 24,
          borderTop: '1.5px solid rgba(246,241,231,0.15)',
          display: 'flex', justifyContent: 'space-between',
          fontFamily: 'var(--f-mono)', fontSize: 11,
          color: 'rgba(246,241,231,0.5)', letterSpacing: '0.1em'
        }}>
          <span>© 2026 MAGIC SCIENCE · ALL RIGHTS RESERVED</span>
          <span>NTU TEAM · DESIGN BY INTERNAL</span>
        </div>
      </div>
    </footer>);

}

// Top sticky nav
function TopNav() {
  return (
    <div className="topnav">
      <div className="page">
        <div className="topnav-inner">
          <div className="brandmark">
            <div className="ring"><FlaskIcon size={18} /></div>
            <span>魔法科學</span>
            <span className="sub">VISUAL GUIDELINES</span>
          </div>
          <nav className="topnav-links">
            <a href="#philosophy">理念</a>
            <a href="#logo">Logo</a>
            <a href="#color">色彩</a>
            <a href="#type">字體</a>
            <a href="#mascot">燒杯兔</a>
            <a href="#components">組件</a>
            <a href="#layouts">版面</a>
            <a href="#apps">應用</a>
          </nav>
          <span className="topnav-version">v1.0 · 2026.04</span>
        </div>
      </div>
    </div>);

}

Object.assign(window, { CoverHero, GuideFooter, TopNav });