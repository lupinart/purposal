// 章節 6：圖示系統
function SectionIcons() {
  return (
    <section className="section" id="icons">
      <div className="page">
        <div className="sec-head"><span className="sec-num">06 / ICONOGRAPHY</span></div>
        <h2 className="t-h2 sec-title">圖示：和 Logo 同一支筆畫出來。</h2>
        <p className="sec-desc">
          所有圖示使用統一規格：2.5px 描邊、圓角端點、最小單元為 4px 網格。色塊只用 Lab Blue / Spark Yellow / Flask Mint / Magic Magenta，避免新色侵蝕系統。
        </p>

        <div style={{height: 40}} />

        <div className="spec">
          <span className="spec-tag">SET A — SCIENCE</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>科學/實驗類</h4>
          <div className="grid g-6" style={{gap: 12}}>
            <IconShowcase icon={FlaskIcon} name="flask" />
            <IconShowcase icon={TubeIcon} name="tube" />
            <IconShowcase icon={MicroscopeIcon} name="microscope" />
            <IconShowcase icon={RackIcon} name="rack" />
            <IconShowcase icon={GearIcon} name="gear" />
            <IconShowcase icon={SparkIcon} name="spark" />
          </div>
        </div>

        <div style={{height: 16}} />

        <div className="spec">
          <span className="spec-tag" style={{background: 'var(--c-magic)'}}>SET B — MAGIC</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>魔法/教學類</h4>
          <div className="grid g-6" style={{gap: 12}}>
            <IconShowcase icon={HatIcon} name="hat" />
            <IconShowcase icon={BookIcon} name="book" />
            <IconShowcase icon={SparkIcon} name="magic-spark" />
            <IconShowcase icon={LumiAvatar} name="bunny" />
            <IconShowcase icon={FlaskIcon} name="potion" />
            <IconShowcase icon={GearIcon} name="invent" />
          </div>
        </div>

        <div style={{height: 24}} />

        <div className="spec">
          <span className="spec-tag">SPEC</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>規格</h4>
          <div className="grid g-3">
            <div>
              <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 6}}>STROKE</div>
              <div style={{fontSize: 18, fontWeight: 700}}>2.5px</div>
              <div className="t-small">圓角端點，圓角接合</div>
            </div>
            <div>
              <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 6}}>GRID</div>
              <div style={{fontSize: 18, fontWeight: 700}}>32×32 / 4px 網格</div>
              <div className="t-small">所有節點對齊網格</div>
            </div>
            <div>
              <div className="t-mono" style={{color: 'var(--c-mute)', marginBottom: 6}}>FILL</div>
              <div style={{fontSize: 18, fontWeight: 700}}>≤ 1 色塊</div>
              <div className="t-small">使用品牌四輔色擇一</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 章節 7：UI 組件
function SectionComponents() {
  return (
    <section className="section" id="components">
      <div className="page">
        <div className="sec-head"><span className="sec-num">07 / COMPONENTS</span></div>
        <h2 className="t-h2 sec-title">UI 組件：按鈕、卡片、標籤。</h2>
        <p className="sec-desc">
          按鈕統一使用「圓角 + 重描邊 + 偏移陰影」的玩具感結構：靜態 3px 偏移、hover 5px、active 0px，模擬可被按壓的實體。卡片用 20px 圓角、2.5px 描邊，重要卡片掛上編號膠帶。
        </p>

        <div style={{height: 40}} />

        {/* Buttons */}
        <div className="spec">
          <span className="spec-tag">BUTTONS</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 24}}>按鈕</h4>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center'}}>
            <button className="btn btn-primary">立即報名 →</button>
            <button className="btn">了解課程</button>
            <button className="btn btn-magic">✨ 體驗魔法</button>
            <button className="btn btn-ghost" style={{textDecoration: 'underline'}}>查看 FAQ</button>
            <button className="btn btn-sm">小尺寸</button>
          </div>
          <div style={{marginTop: 24, padding: 16, background: 'var(--c-paper-2)', borderRadius: 8, fontSize: 13, color: 'var(--c-mute)', fontFamily: 'var(--f-mono)'}}>
            HOVER → 偏移 +2px ／ ACTIVE → 偏移歸零，模擬按壓
          </div>
        </div>

        <div style={{height: 16}} />

        {/* Cards */}
        <div className="spec">
          <span className="spec-tag">FEATURE CARDS</span>
          <h4 className="t-h4" style={{marginTop: 14, marginBottom: 24}}>特色卡片（孩子向）</h4>
          <div className="grid g-2">
            {[
              { num: '01', color: 'var(--c-magic)', title: '魔術開場，瞬間入戲。', body: '每堂課的前 5 分鐘，老師會用一個與主題相關的魔術引爆好奇心。', icon: <SparkIcon size={28} /> },
              { num: '02', color: 'var(--c-lab)', title: '台大師資，扎實實驗。', body: '由台大物理／化學系背景的講師，把魔術背後的原理用孩子能懂的方式拆解。', icon: <FlaskIcon size={28} /> },
              { num: '03', color: 'var(--c-flask)', title: '20人小班，每個都被看見。', body: '一班最多 20 人，老師確保每位孩子都動手做、都被叫到名字。', icon: <MicroscopeIcon size={28} /> },
              { num: '04', color: 'var(--c-spark)', title: '帶得走的學習單。', body: '每堂課後孩子會帶回實驗紀錄，把好奇延續到家裡的餐桌。', icon: <BookIcon size={28} /> },
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

        <div style={{height: 16}} />

        {/* Tags & form */}
        <div className="grid g-2">
          <div className="spec">
            <span className="spec-tag">TAGS</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>標籤</h4>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
              {[
                { l: 'STEAM', c: 'var(--c-lab)' },
                { l: '小學中年級', c: 'var(--c-flask)' },
                { l: '熱門', c: 'var(--c-magic)' },
                { l: '新開', c: 'var(--c-spark)' },
                { l: '滿班', c: 'var(--c-mute)' },
              ].map(t => (
                <span key={t.l} style={{
                  display: 'inline-block',
                  fontSize: 12, fontWeight: 700,
                  padding: '4px 12px',
                  background: t.c, color: t.c === 'var(--c-spark)' ? 'var(--c-ink)' : 'white',
                  border: '2px solid var(--c-ink)',
                  borderRadius: 'var(--r-pill)',
                }}>{t.l}</span>
              ))}
            </div>
          </div>
          <div className="spec">
            <span className="spec-tag">INPUT</span>
            <h4 className="t-h4" style={{marginTop: 14, marginBottom: 18}}>表單（浮動標籤 + 偏移聚焦動畫）</h4>
            <div className="tx-input">
              <input id="kn" type="text" placeholder=" " />
              <label htmlFor="kn">孩子的姓名</label>
            </div>
            <div className="tx-input" style={{marginTop: 14}}>
              <input id="ke" type="email" placeholder=" " />
              <label htmlFor="ke">家長 Email</label>
            </div>
            <div className="t-mono" style={{marginTop: 14, color: 'var(--c-mute)', fontSize: 11}}>
              FOCUS → 標籤上浮、卡片偏移、描邊轉粉
            </div>
            <select style={{
              marginTop: 10, width: '100%', padding: '14px 16px',
              border: 'var(--bd-bold) solid var(--c-ink)',
              background: 'var(--c-white)',
              borderRadius: 'var(--r-pill)', fontSize: 15,
              fontFamily: 'var(--f-body)',
              cursor: 'pointer',
            }}>
              <option>孩子目前的學齡 — 國小三年級</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SectionIcons, SectionComponents });
