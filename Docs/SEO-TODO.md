# SEO TODO — Kinepro

Poznámky k plánu zlepšení pozic ve vyhledávání (hlavní cíl: dotaz **„vojtova metoda olomouc"**).

## Kontext / zjištění (2026-06-26)

- Web je technicky dobře připravený: `MedicalClinic` schema, geo tagy, canonical, sitemap, dobrý title + description.
- Konkurenti před námi ve výsledcích:
  - **rl-corpus.cz** — oficiální školicí pracoviště Vojtovy metody v ČR, sídlí v Olomouci. Obrovská autorita + zpětné odkazy. Na holé „vojtova metoda" těžko porazitelný. Jejich stránka má ~4 500 slov.
  - **rehabilitace-roskol.cz** — na on-page SEO je SLABŠÍ než my (~900 slov, žádné schema, žádné FAQ). Před námi je hlavně kvůli: **stáří/zavedenosti domény** (web od 2018, ordinace od 2013 jako součást G-CENTRUM), **množství zpětných odkazů a citací** (doktor.cz, znamylekar.cz, firmy.cz, g-centrum.cz, AGEL), a **čistší struktuře URL** (`/rehabilitace/vojtova-metoda`).
- Závěr: obsahem jsme srovnatelní/lepší. Deficit je hlavně **off-page autorita + lokální signály**, ne web sám.

## Co chceme udělat

### 1. FAQ na hlavní keyword stránky (úkol v rukou kódu)

- FAQ s `FAQPage` schématem už MÁME ve všech 10 článcích v `/clanky/` (5 otázek každý) — to je hotové a dobré.
- [x] **HOTOVO 2026-06-27: `VojtovaMetoda.html`** — přidán FAQ blok (accordion jako v článcích) + `FAQPage` schema (5 otázek). Použito **ověřené znění Q&A** z `clanky/vojtova-metoda-u-kojencu.html`. Pojišťovna záměrně NEzmíněna (ordinace je bez smluv s pojišťovnami, vše přímá úhrada).
  - Otázky: kdy začít, bolí/proč pláče, jak často, kontraindikace (kdy nesmí), doporučení od lékaře.
- [ ] `index.html` — stále 0 FAQ (volitelně doplnit později).
- Nezařazeno (návrh): otázka „Kdo u vás Vojtovu metodu vede?" s důrazem na **výukové terapeuty** — vynechána, protože její znění není na webu ověřené. Přidat, až bude potvrzené doložitelné znění (viz bod 4).

### 2. Drobné on-page úpravy (kód)

- [x] **HOTOVO 2026-06-27:** H1 na `VojtovaMetoda.html`: „Vojtova metoda - Kompletní informace" → „Vojtova metoda".
- Rozšířit obsah `VojtovaMetoda.html` (teď ~1 470 slov) směrem k vyčerpávajícímu pokrytí tématu.

### 3. Off-page / mimo kód (akce uživatele) — POTVRZENO 2026-06-26

- **Registrace do katalogů, kde JSME NE a konkurence ANO** (toto je hlavní deficit):
  - [ ] **Mapy.cz / czmapy.cz (Firmy.cz)** — registrovat. Konkurence (Roskol) tam je, my ne.
  - [ ] **ZnámýLékař.cz** — registrovat. Konkurence tam je, my ne.
  - [ ] dále zvážit: Doktor.cz, Najisto.cz.
  - Registraci musí udělat majitel (ověření identity/IČO, SMS/e-mail). Claude to nemůže udělat za nás.
  - Claude může připravit **„NAP balíček"** = jeden zdroj s přesně stejným názvem/adresou/telefonem/popisem k vložení do všech katalogů (konzistence NAP = důvěra u Googlu). Před přípravou potvrdit přesnou adresu + telefon.
- **Google firemní profil + recenze** — největší pákový bod pro lokální dotazy „...olomouc". Vyplnit 100 %, aktivně sbírat recenze.
- **Pokračovat v článcích** dle plánu (long-tail dotazy) — viz content strategie.

### 4. „Výukový terapeut Vojtovy metody" jako autorita (E-E-A-T)

- Mgr. Miroslav Kutín a Mgr. Eva Machačová jsou **výukoví terapeuti** Vojtovy metody (učí ji, ne jen provádějí). Toto je nejsilnější odlišení vůči konkurenci (Roskol to nemá).
- Stav: už je v textu týmu i ve schématu (`jobTitle`). Lze posílit:
  - vysvětlit na webu, co „výukový terapeut" znamená (sami školí další fyzioterapeuty),
  - dostat do title/description hlavních stránek,
  - použít i v popisech katalogových profilů (NAP balíček),
  - doplnit do schématu vazbu na akreditaci (ČVS / RL-Corpus) — POTŘEBA ověřit přesné doložitelné znění kvalifikace.
