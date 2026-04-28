// Tweaks: 風格變體切換 — 克制 / 活力 / 編輯
function TweaksRoot() {
  const defaults = /*EDITMODE-BEGIN*/{
    "variant": "balanced",
    "accentHue": "magenta"
  }/*EDITMODE-END*/;

  const [t, setT] = useTweaks(defaults);

  React.useEffect(() => {
    const root = document.documentElement;
    if (t.variant === 'restrained') {
      root.style.setProperty('--c-magic', '#0E2235');
      root.style.setProperty('--c-spark', '#3F8DCC');
      root.style.setProperty('--c-flask', '#3F8DCC');
      root.style.setProperty('--c-coral', '#3F8DCC');
    } else if (t.variant === 'lively') {
      root.style.setProperty('--c-magic', '#D45A8C');
      root.style.setProperty('--c-spark', '#F4C430');
      root.style.setProperty('--c-flask', '#7FB69E');
      root.style.setProperty('--c-coral', '#E8895C');
      root.style.setProperty('--c-paper', '#FFF8E8');
    } else if (t.variant === 'editorial') {
      root.style.setProperty('--c-magic', '#9C3D5F');
      root.style.setProperty('--c-spark', '#C9A227');
      root.style.setProperty('--c-flask', '#5C8E78');
      root.style.setProperty('--c-paper', '#EFE8D8');
    } else {
      // balanced (default)
      root.style.setProperty('--c-magic', '#D45A8C');
      root.style.setProperty('--c-spark', '#F4C430');
      root.style.setProperty('--c-flask', '#7FB69E');
      root.style.setProperty('--c-coral', '#E8895C');
      root.style.setProperty('--c-paper', '#F6F1E7');
    }
  }, [t.variant]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="風格變體">
        <TweakRadio
          value={t.variant}
          options={[
            { value: 'restrained', label: '克制' },
            { value: 'balanced',   label: '克制' },
            { value: 'lively',     label: '克制' },
            { value: 'editorial',  label: '克制' },
          ]}
          onChange={v => setT('variant', v)}
        />
        <div style={{
          fontSize: 11, color: '#666', marginTop: 8, lineHeight: 1.5,
          fontFamily: 'JetBrains Mono, monospace',
        }}>
          {{
            restrained: '只用 Logo 既有的藍色，最克制、最像精品。',
            balanced:   '預設組合，藍主軸 + 4 輔色點睛。',
            lively:     '輔色更亮、米白更暖，主打孩子端。',
            editorial:  '降低彩度、加深輔色，雜誌風格。',
          }[t.variant]}
        </div>
      </TweakSection>

    </TweaksPanel>
  );
}

window.TweaksRoot = TweaksRoot;
