// 章節 9：社群貼文 + 印刷品
function SectionApplications() {
  return (
    <section className="section" id="apps">
      <div className="page">
        <div className="sec-head"><span className="sec-num">09 / APPLICATIONS</span></div>
        <h2 className="t-h2 sec-title">應用：社群、印刷、實體。</h2>
        <p className="sec-desc">
          以下範例涵蓋 IG 貼文、限時動態、DM 文宣、名片。同一個視覺系統在不同尺寸與媒介下保持一致辨識度，但對家長端會更收斂、對孩子端會更活潑。
        </p>

        <div style={{height: 40}} />

        {/* IG Posts */}
        <div className="spec">
          <span className="spec-tag">SOCIAL — INSTAGRAM</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 24}}>社群貼文版型（1080 × 1080）</h4>
          <div className="grid g-3" style={{gap: 16}}>
            <IGPost variant="quote" />
            <IGPost variant="course" />
            <IGPost variant="kid" />
          </div>
        </div>

        <div style={{height: 16}} />

        {/* Story */}
        <div className="grid g-2">
          <div className="spec">
            <span className="spec-tag">STORY</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>限時動態（1080 × 1920）</h4>
            <IGStory />
          </div>
          <div className="spec">
            <span className="spec-tag">PRINT — BUSINESS CARD</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>名片（90 × 55mm）</h4>
            <BusinessCards />
          </div>
        </div>

        <div style={{height: 16}} />

        <div className="spec">
          <span className="spec-tag">PRINT — DM / FLYER</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 24}}>單張 DM（A4 / A5 通用）</h4>
          <DMSpread />
        </div>
      </div>
    </section>
  );
}

function IGPost({ variant }) {
  // 雜誌封面風 — 大級數標題、kicker、頁碼、刊頭、引言
  if (variant === 'quote') {
    return (
      <div style={{
        aspectRatio: '1', background: 'var(--c-paper)', color: 'var(--c-ink)',
        border: 'var(--bd-bold) solid var(--c-ink)', borderRadius: 'var(--r-sm)',
        padding: 0, display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* 刊頭 */}
        <div style={{
          padding: '10px 16px', borderBottom: '1.5px solid var(--c-ink)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div style={{fontFamily: 'var(--f-en)', fontSize: 10, fontWeight: 800, letterSpacing: '0.2em'}}>MAGIC SCIENCE — VOL.01</div>
          <div className="t-mono" style={{fontSize: 9, color: 'var(--c-mute)'}}>FEB / 2026</div>
        </div>
        {/* Body */}
        <div style={{flex: 1, padding: '20px 22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
          <div>
            <div className="t-mono" style={{fontSize: 9, color: 'var(--c-magic)', letterSpacing: '0.2em', fontWeight: 700}}>FOUNDER&apos;S LETTER ─ NO.01</div>
            <div style={{
              fontSize: 92, fontFamily: 'var(--f-en)', fontWeight: 900,
              lineHeight: 0.85, marginTop: 4, color: 'var(--c-magic)',
              fontStyle: 'italic',
            }}>“</div>
          </div>
          <div>
            <div style={{fontSize: 22, fontWeight: 800, lineHeight: 1.35, letterSpacing: '-0.01em'}}>
              有了<span style={{background: 'var(--c-spark)', padding: '0 4px'}}>興趣</span>，<br/>學習才會<br/>真正發生。
            </div>
            <div style={{
              marginTop: 14, paddingTop: 10,
              borderTop: '1px solid var(--c-ink)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <div className="t-mono" style={{fontSize: 9}}>HUANG SHIN-YAO · CO-FOUNDER</div>
              <div style={{fontFamily: 'var(--f-en)', fontSize: 11, fontWeight: 700}}>p.01</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (variant === 'course') {
    // 雜誌特輯式 — 巨大數字 + 導言
    return (
      <div style={{
        aspectRatio: '1', background: 'var(--c-ink)', color: 'var(--c-paper)',
        border: 'var(--bd-bold) solid var(--c-ink)', borderRadius: 'var(--r-sm)',
        padding: 0, display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* 巨大數字 */}
        <div style={{
          position: 'absolute', top: -30, right: -10,
          fontSize: 280, fontFamily: 'var(--f-en)', fontWeight: 900,
          color: 'var(--c-magic)', lineHeight: 0.8,
          letterSpacing: '-0.05em', opacity: 0.95,
        }}>03</div>
        <div style={{padding: '14px 18px', borderBottom: '1px solid rgba(255,248,232,0.25)', position: 'relative', zIndex: 2}}>
          <div className="t-mono" style={{fontSize: 9, color: 'var(--c-spark)', letterSpacing: '0.2em', fontWeight: 700}}>FEATURE STORY ─ ISSUE 03</div>
        </div>
        <div style={{flex: 1, padding: '18px 18px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', zIndex: 2}}>
          <div style={{
            display: 'inline-block', alignSelf: 'flex-start',
            background: 'var(--c-spark)', color: 'var(--c-ink)',
            padding: '3px 8px', fontSize: 10, fontWeight: 800,
            fontFamily: 'var(--f-mono)', letterSpacing: '0.08em',
            marginBottom: 10,
          }}>SUMMER · 2026</div>
          <div style={{fontSize: 30, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.02em'}}>
            消失的水，<br/><span style={{color: 'var(--c-spark)', fontStyle: 'italic'}}>重現</span>的科學。
          </div>
          <div style={{
            marginTop: 14, paddingTop: 10,
            borderTop: '1px solid rgba(255,248,232,0.3)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            fontFamily: 'var(--f-mono)', fontSize: 9, letterSpacing: '0.05em',
          }}>
            <span>4 WK · 8 LESSONS</span>
            <span style={{fontFamily: 'var(--f-en)', fontWeight: 800, fontSize: 12}}>NT$ 4,800</span>
          </div>
        </div>
      </div>
    );
  }
  // kid — 雜誌「拼貼」式封面
  return (
    <div style={{
      aspectRatio: '1', background: 'var(--c-spark)',
      border: 'var(--bd-bold) solid var(--c-ink)', borderRadius: 'var(--r-sm)',
      padding: 0, display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* 拼貼色塊 */}
      <div style={{position: 'absolute', top: 0, left: 0, right: 0, height: '38%', background: 'var(--c-magic)'}} />
      <div style={{position: 'absolute', top: '38%', right: 0, width: '50%', height: '24%', background: 'var(--c-lab)'}} />

      {/* 大字 */}
      <div style={{position: 'relative', zIndex: 2, padding: '14px 16px 0'}}>
        <div className="t-mono" style={{fontSize: 9, color: 'var(--c-paper)', letterSpacing: '0.2em', fontWeight: 700}}>KIDS&apos; LAB ─ EXPERIMENT 03</div>
        <div style={{
          fontSize: 38, fontWeight: 900, lineHeight: 0.95, marginTop: 8,
          color: 'var(--c-paper)', letterSpacing: '-0.03em',
        }}>
          把醋<br/>變成<br/><span style={{
            display: 'inline-block', background: 'var(--c-paper)', color: 'var(--c-magic)',
            padding: '0 6px', fontStyle: 'italic',
            transform: 'rotate(-2deg)',
          }}>火山</span>
        </div>
      </div>

      {/* 兔兔 */}
      <div style={{
        position: 'absolute', bottom: -8, right: -10, zIndex: 3,
        transform: 'rotate(6deg)',
      }}>
        <LumiFull size={150} />
      </div>

      {/* 雜誌頁碼 */}
      <div style={{
        position: 'absolute', bottom: 12, left: 16, zIndex: 3,
        fontFamily: 'var(--f-en)', fontSize: 11, fontWeight: 800,
        color: 'var(--c-ink)',
        background: 'var(--c-paper)', padding: '3px 8px',
        border: '1.5px solid var(--c-ink)',
      }}>HOW-TO ▸ p.24</div>
    </div>
  );
}

function IGStory() {
  return (
    <div style={{
      aspectRatio: '9 / 16', maxWidth: 200, margin: '0 auto',
      background: 'var(--c-ink)', color: 'var(--c-paper)',
      border: '2.5px solid var(--c-ink)', borderRadius: 'var(--r-md)',
      padding: 16, display: 'flex', flexDirection: 'column',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 12, left: 16, right: 16, height: 3,
        background: 'rgba(246,241,231,0.3)', borderRadius: 999,
      }}>
        <div style={{width: '40%', height: '100%', background: 'var(--c-paper)', borderRadius: 999}} />
      </div>
      <div style={{height: 20}} />
      <div className="t-mono" style={{fontSize: 9, color: 'var(--c-spark)', letterSpacing: '0.2em'}}>FOUNDER LIVE</div>
      <div style={{fontSize: 22, fontWeight: 900, lineHeight: 1.15, marginTop: 8}}>
        週四晚 8 點<br/><span style={{color: 'var(--c-spark)'}}>說明會</span>
      </div>
      <div style={{flex: 1, display: 'grid', placeItems: 'center'}}>
        <LumiFull size={120} />
      </div>
      <div style={{
        background: 'var(--c-spark)', color: 'var(--c-ink)',
        border: '2px solid var(--c-paper)', padding: '10px 14px',
        borderRadius: 999, fontSize: 12, fontWeight: 800, textAlign: 'center',
      }}>滑↑預約 →</div>
    </div>
  );
}

function BusinessCards() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
      {/* Front */}
      <div style={{
        aspectRatio: '90 / 55', background: 'var(--c-paper)',
        border: '2.5px solid var(--c-ink)', borderRadius: 8,
        padding: 18, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end',
      }}>
        <div>
          <div style={{fontSize: 18, fontWeight: 900, letterSpacing: '-0.01em'}}>黃新堯</div>
          <div className="t-small">創辦人 / Co-Founder</div>
          <div style={{height: 10}} />
          <div className="t-mono" style={{fontSize: 10, color: 'var(--c-mute)'}}>shinyao@magicscience.tw · 0912-345-678</div>
        </div>
        <LumiAvatar size={56} />
      </div>
      {/* Back */}
      <div style={{
        aspectRatio: '90 / 55', background: 'var(--c-ink)', color: 'var(--c-paper)',
        border: '2.5px solid var(--c-ink)', borderRadius: 8,
        padding: 18, display: 'grid', placeItems: 'center', position: 'relative',
      }}>
        <div style={{textAlign: 'center'}}>
          <div style={{fontSize: 22, fontWeight: 900, letterSpacing: '-0.01em'}}>魔法科學</div>
          <div className="t-mono" style={{fontSize: 10, color: 'var(--c-spark)', letterSpacing: '0.2em', marginTop: 4}}>MAGIC SCIENCE · NTU TEAM</div>
        </div>
        <div style={{
          position: 'absolute', bottom: 12, right: 14,
          fontFamily: 'var(--f-mono)', fontSize: 9, color: 'rgba(246,241,231,0.5)',
        }}>magicscience.tw</div>
      </div>
    </div>
  );
}

function DMSpread() {
  return (
    <div style={{
      background: 'var(--c-paper-3)', borderRadius: 8,
      padding: 24, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
      backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14,34,53,0.15) 1px, transparent 0)',
      backgroundSize: '8px 8px',
    }}>
      {/* Front — 實驗筆記封面 */}
      <div style={{
        aspectRatio: '210 / 297',
        background: 'var(--c-white)',
        border: 'var(--bd-bold) solid var(--c-ink)',
        borderRadius: 4,
        position: 'relative', overflow: 'hidden',
        boxShadow: '4px 4px 0 rgba(14,34,53,0.6)',
      }}>
        {/* 方格紙底 */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(63,141,204,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(63,141,204,0.12) 1px, transparent 1px)
          `,
          backgroundSize: '14px 14px',
        }} />
        {/* 紅線左邊距 */}
        <div style={{position: 'absolute', left: 24, top: 0, bottom: 0, width: 1.5, background: 'var(--c-magic)', opacity: 0.5}} />

        {/* 上方刊頭（被釘住） */}
        <div style={{
          position: 'absolute', top: 14, left: 16, right: 16,
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontFamily: 'var(--f-mono)', fontSize: 9, color: 'var(--c-mute)',
          letterSpacing: '0.15em',
        }}>
          <span>LAB NOTEBOOK · NO. 026</span>
          <span>2026 / 07</span>
        </div>

        {/* 右上印章 */}
        <div style={{
          position: 'absolute', top: 30, right: 14,
          width: 70, height: 70, borderRadius: '50%',
          border: '2px solid var(--c-magic)',
          color: 'var(--c-magic)',
          display: 'grid', placeItems: 'center',
          textAlign: 'center', lineHeight: 1.05,
          fontWeight: 800, fontSize: 9,
          transform: 'rotate(-12deg)', opacity: 0.85,
          fontFamily: 'var(--f-mono)', letterSpacing: '0.05em',
        }}>
          <div>
            APPROVED<br/>
            <span style={{fontSize: 14, fontFamily: 'var(--f-en)'}}>NTU</span><br/>
            <span style={{fontSize: 7}}>SCIENCE TEAM</span>
          </div>
        </div>

        {/* 主標 */}
        <div style={{position: 'absolute', top: 60, left: 36, right: 16}}>
          <div style={{fontFamily: 'var(--f-mono)', fontSize: 9, color: 'var(--c-magic)', letterSpacing: '0.18em', fontWeight: 700}}>EXP. SUMMER · 2026</div>
          <div style={{fontSize: 30, fontWeight: 900, lineHeight: 0.95, marginTop: 10, letterSpacing: '-0.025em'}}>
            這個夏天，<br/>讓孩子愛上<br/><span style={{
              background: 'var(--c-spark)', padding: '0 4px',
              fontStyle: 'italic',
            }}>「為什麼」。</span>
          </div>
        </div>

        {/* 公式註解 */}
        <div style={{
          position: 'absolute', top: 196, left: 36, right: 16,
          padding: '8px 10px',
          border: '1.5px dashed var(--c-ink)',
          background: 'rgba(255,210,63,0.18)',
          fontFamily: 'var(--f-mono)', fontSize: 9.5, lineHeight: 1.55,
        }}>
          <div style={{color: 'var(--c-mute)', fontSize: 8, marginBottom: 2}}>HYPOTHESIS</div>
          當 <span style={{color: 'var(--c-magic)', fontWeight: 800}}>驚奇</span> + <span style={{color: 'var(--c-lab)', fontWeight: 800}}>原理</span> = <span style={{fontWeight: 800}}>主動學習</span>
        </div>

        {/* 兔兔（貼在筆記上） */}
        <div style={{
          position: 'absolute', bottom: 78, right: 4,
          transform: 'rotate(-4deg)',
        }}>
          <LumiFull size={120} />
        </div>

        {/* 手寫箭頭 + 註 */}
        <svg style={{position: 'absolute', bottom: 100, left: 60, width: 90, height: 60}} viewBox="0 0 90 60" fill="none">
          <path d="M 5 50 Q 30 10 80 25" stroke="var(--c-magic)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="3,2" />
          <path d="M 75 18 L 82 25 L 73 30" stroke="var(--c-magic)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        </svg>
        <div style={{
          position: 'absolute', bottom: 145, left: 36,
          fontFamily: 'var(--f-mono)', fontSize: 10, color: 'var(--c-magic)',
          fontStyle: 'italic', fontWeight: 700,
          transform: 'rotate(-3deg)',
        }}>← 主角：燒杯兔</div>

        {/* CTA 條 */}
        <div style={{
          position: 'absolute', left: 16, right: 16, bottom: 16,
          background: 'var(--c-ink)', color: 'var(--c-paper)',
          padding: '10px 12px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <div style={{fontSize: 11, fontWeight: 800}}>掃 QR · 索取簡章</div>
            <div className="t-mono" style={{fontSize: 8, color: 'var(--c-spark)', letterSpacing: '0.15em'}}>MAGICSCIENCE.TW</div>
          </div>
          <div style={{
            width: 36, height: 36, background: 'var(--c-paper)',
            display: 'grid', placeItems: 'center',
          }}>
            <div style={{
              width: 24, height: 24,
              backgroundImage: `
                linear-gradient(45deg, var(--c-ink) 25%, transparent 25%),
                linear-gradient(-45deg, var(--c-ink) 25%, transparent 25%),
                linear-gradient(45deg, transparent 75%, var(--c-ink) 75%),
                linear-gradient(-45deg, transparent 75%, var(--c-ink) 75%)
              `,
              backgroundSize: '6px 6px',
              backgroundPosition: '0 0, 0 3px, 3px -3px, -3px 0',
            }} />
          </div>
        </div>
      </div>

      {/* Back — 實驗清單 */}
      <div style={{
        aspectRatio: '210 / 297',
        background: 'var(--c-white)',
        border: 'var(--bd-bold) solid var(--c-ink)',
        borderRadius: 4,
        position: 'relative', overflow: 'hidden',
        boxShadow: '4px 4px 0 rgba(14,34,53,0.6)',
      }}>
        {/* 方格紙 */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(63,141,204,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(63,141,204,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '14px 14px',
        }} />

        <div style={{position: 'relative', padding: '18px 18px 0', height: '100%', display: 'flex', flexDirection: 'column'}}>
          {/* 刊頭 */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            paddingBottom: 8, borderBottom: '1.5px solid var(--c-ink)',
          }}>
            <div className="t-mono" style={{fontSize: 9, color: 'var(--c-mute)', letterSpacing: '0.18em'}}>EXPERIMENT INDEX</div>
            <div className="t-mono" style={{fontSize: 9, fontWeight: 700}}>4 WK / 8 LAB</div>
          </div>

          <div style={{height: 12}} />

          {/* 實驗條目（像實驗紀錄） */}
          {[
            { w: '01', t: '消失的水', sub: 'POLYMER · 高分子', c: 'var(--c-magic)', f: 'C₆H₉NaO₇' },
            { w: '02', t: '會自己亮的電池', sub: 'ELECTROCHEM · 電化學', c: 'var(--c-lab)', f: 'Zn → Zn²⁺ + 2e⁻' },
            { w: '03', t: '看不見的氣體', sub: 'GAS LAW · 氣體', c: 'var(--c-flask)', f: 'PV = nRT' },
            { w: '04', t: '科學玩具設計', sub: 'MAKER · 動手做', c: 'var(--c-spark)', f: 'F = ma' },
          ].map((c, i) => (
            <div key={c.w} style={{
              padding: '8px 0',
              borderBottom: i < 3 ? '1px dashed var(--c-line)' : 'none',
              display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: 8, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 22, height: 22, background: c.c,
                color: c.c === 'var(--c-spark)' ? 'var(--c-ink)' : 'white',
                fontFamily: 'var(--f-en)', fontWeight: 800, fontSize: 11,
                display: 'grid', placeItems: 'center',
                marginTop: 1,
              }}>{c.w}</div>
              <div>
                <div style={{fontSize: 12, fontWeight: 800, lineHeight: 1.2}}>{c.t}</div>
                <div className="t-mono" style={{fontSize: 8, color: 'var(--c-mute)', letterSpacing: '0.1em', marginTop: 2}}>{c.sub}</div>
              </div>
              <div style={{
                fontFamily: 'var(--f-mono)', fontSize: 9, color: c.c,
                fontWeight: 700, marginTop: 3,
              }}>{c.f}</div>
            </div>
          ))}

          <div style={{height: 12}} />

          {/* 數據區塊 */}
          <div style={{
            border: '1.5px solid var(--c-ink)',
            display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
          }}>
            {[
              { n: '4', l: 'WEEKS' },
              { n: '8', l: 'LESSONS' },
              { n: '6:1', l: 'STUDENT/TA' },
            ].map((s, i) => (
              <div key={s.l} style={{
                padding: '8px 6px', textAlign: 'center',
                borderRight: i < 2 ? '1px solid var(--c-ink)' : 'none',
              }}>
                <div style={{fontFamily: 'var(--f-en)', fontSize: 18, fontWeight: 900, lineHeight: 1, color: 'var(--c-ink)'}}>{s.n}</div>
                <div className="t-mono" style={{fontSize: 7, color: 'var(--c-mute)', letterSpacing: '0.12em', marginTop: 2}}>{s.l}</div>
              </div>
            ))}
          </div>

          <div style={{flex: 1}} />

          {/* 簽名區 */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            paddingTop: 8, paddingBottom: 12,
            borderTop: '1px dashed var(--c-line)',
          }}>
            <div>
              <div style={{
                fontFamily: 'cursive', fontSize: 16, color: 'var(--c-magic)',
                fontStyle: 'italic', fontWeight: 700,
                transform: 'rotate(-4deg)', display: 'inline-block',
              }}>Shin-Yao H.</div>
              <div className="t-mono" style={{fontSize: 7, color: 'var(--c-mute)', letterSpacing: '0.12em', marginTop: 2}}>LEAD INSTRUCTOR</div>
            </div>
            <div style={{textAlign: 'right'}}>
              <div className="t-mono" style={{fontSize: 8, color: 'var(--c-mute)'}}>板橋 · 台電大樓</div>
              <div className="t-mono" style={{fontSize: 8, color: 'var(--c-mute)'}}>02-1234-5678</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 章節 10：語氣
function SectionVoice() {
  return (
    <section className="section" id="voice">
      <div className="page">
        <div className="sec-head"><span className="sec-num">10 / VOICE</span></div>
        <h2 className="t-h2 sec-title">語氣：兩個聲道，一個品牌。</h2>
        <p className="sec-desc">
          家長頁與孩子頁同一個品牌、同一套色彩，但語氣不同。家長端用「專業、穩重、可信任」的方式說話；孩子端用「驚奇、邀請、可動手」的口吻。
        </p>

        <div style={{height: 32}} />

        <div className="grid g-2">
          <div className="spec" style={{background: 'var(--c-paper-2)'}}>
            <span className="spec-tag">TO PARENTS</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 16}}>對家長</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{padding: '10px 0', borderBottom: '1px dashed var(--c-line)'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#1f7a3a'}}>✓ DO</div>
                <div style={{marginTop: 4}}>「由台大物理／化學系背景講師親自帶課，4 週 8 堂課完整實作。」</div>
              </li>
              <li style={{padding: '10px 0', borderBottom: '1px dashed var(--c-line)'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#1f7a3a'}}>✓ DO</div>
                <div style={{marginTop: 4}}>「每堂課後提供實作紀錄，讓您看見孩子的學習軌跡。」</div>
              </li>
              <li style={{padding: '10px 0'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#b03030'}}>✗ DON'T</div>
                <div style={{marginTop: 4}}>「超 fun 的科學營等你來，包你小孩玩到不想回家！」</div>
              </li>
            </ul>
          </div>
          <div className="spec" style={{background: 'var(--c-lab-soft)'}}>
            <span className="spec-tag" style={{background: 'var(--c-magic)'}}>TO KIDS</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 16}}>對孩子</h4>
            <ul style={{listStyle: 'none', padding: 0}}>
              <li style={{padding: '10px 0', borderBottom: '1px dashed var(--c-line)'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#1f7a3a'}}>✓ DO</div>
                <div style={{marginTop: 4}}>「咦？這杯水怎麼不見了？我們一起把它變回來！」</div>
              </li>
              <li style={{padding: '10px 0', borderBottom: '1px dashed var(--c-line)'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#1f7a3a'}}>✓ DO</div>
                <div style={{marginTop: 4}}>「燒杯兔今天要教你做一個會跳舞的氣球。準備好了嗎？」</div>
              </li>
              <li style={{padding: '10px 0'}}>
                <div className="t-mono" style={{fontSize: 10, color: '#b03030'}}>✗ DON'T</div>
                <div style={{marginTop: 4}}>「本課程旨在培養學生對於高分子化學的基礎理解。」</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionApplications, SectionVoice });
