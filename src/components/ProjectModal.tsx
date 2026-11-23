import { useEffect, useState } from 'react';
import {
  X,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Calendar,
  Volume2,
  ExternalLink,
  Users,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { ProjectItem, PENCUM_SCREENS, MAIRIE_SLIDES, NAVARO_ASSETS, KER_FACILE_SCREENS } from '../data/projects';
import { playSoftChime } from '../utils/sound';
import { PencumPikineLogo } from './PencumPikineLogo';
import { NavaroLogo } from './NavaroLogo';

type ModalTab = 'etude' | 'ux' | 'maquettes' | 'prototype' | 'architecture';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  soundEnabled: boolean;
}

function PencumCaseStudyView({
  activeTab,
  soundEnabled,
}: {
  activeTab: ModalTab;
  soundEnabled: boolean;
}) {
  const [selectedScreenIdx, setSelectedScreenIdx] = useState(3); // Start on 01 · Découvrir Pikine
  const [selectedUxIdx, setSelectedUxIdx] = useState(0); // Start on Parcours Utilisateur
  const [oppFilter, setOppFilter] = useState<'tous' | 'formation' | 'emploi'>('tous');
  const [wolofPlaying, setWolofPlaying] = useState(false);

  const uxDocs = PENCUM_SCREENS.filter((s) => s.group === 'Recherche & Parcours');
  const uiMockups = PENCUM_SCREENS.filter((s) => s.group !== 'Recherche & Parcours');
  const activeUi = uiMockups[Math.min(selectedScreenIdx - 3, uiMockups.length - 1)] || uiMockups[0];

  if (activeTab === 'etude') {
    return (
      <div className="space-y-5">
        {/* Official Brand Lockup & Colors from Pencum_Pikine_-_Charte_graphique_7f1dadbb.pdf */}
        <div className="grid gap-4 rounded-xl border border-[#E6DEE7] bg-white p-5 sm:grid-cols-12 sm:items-center">
          <div className="sm:col-span-5">
            <PencumPikineLogo theme="light" symbolSize={48} />
            <p className="mt-2 text-xs text-[#545D6E]">
              « Pencum » signifie place publique / espace de rencontre à Pikine.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:col-span-7 sm:grid-cols-4">
            {[
              { name: 'Primaire', hex: '#2B3990' },
              { name: 'Secondaire', hex: '#F29100' },
              { name: 'Tertiaire', hex: '#1E7A3A' },
              { name: 'Sombre', hex: '#020518' },
            ].map((c) => (
              <div key={c.hex} className="rounded-lg border border-[#E6DEE7] p-2">
                <div className="h-8 w-full rounded" style={{ backgroundColor: c.hex }} />
                <p className="mt-1.5 text-[11px] font-semibold text-[#2B2630]">{c.name}</p>
                <p className="font-mono text-[10px] text-[#6E6873]">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission / Vision / Valeurs */}
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            {
              idx: '01',
              title: 'Mission',
              text: 'Rassembler et rendre accessibles les opportunités de Pikine pour aider chaque habitant à trouver les ressources utiles à son avenir.',
            },
            {
              idx: '02',
              title: 'Vision',
              text: 'Faire de Pikine une commune où chacun découvre les possibilités qui l’entourent et prend part à son développement.',
            },
            {
              idx: '03',
              title: 'Valeurs',
              text: 'Rapprocher les habitants de l’information, des acteurs locaux et des opportunités — en français et en wolof.',
            },
          ].map((item) => (
            <div key={item.idx} className="rounded-xl border border-[#E6DEE7] bg-white p-4">
              <p className="font-mono text-[11px] font-semibold text-[#2B3990]">{item.idx}</p>
              <h3 className="mt-1 font-display text-sm font-bold text-[#2B2630]">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#544E58]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'ux') {
    const activeDoc = uxDocs[selectedUxIdx] || uxDocs[0];
    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {uxDocs.map((doc, idx) => (
            <button
              key={doc.title}
              type="button"
              onClick={() => {
                setSelectedUxIdx(idx);
                playSoftChime(520 + idx * 40, soundEnabled);
              }}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedUxIdx === idx
                  ? 'bg-[#2B3990] text-white'
                  : 'border border-[#E6DEE7] bg-white text-[#2B2630] hover:border-[#2B3990]'
              }`}
            >
              {doc.title}
            </button>
          ))}
        </div>
        <div className="overflow-hidden rounded-xl border border-[#E6DEE7] bg-white p-3">
          <img
            src={activeDoc.src}
            alt={activeDoc.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="max-h-[420px] w-full rounded-lg object-contain bg-[#FAFBFD]"
          />
          <p className="mt-3 px-2 text-xs text-[#544E58]">{activeDoc.caption}</p>
        </div>
      </div>
    );
  }

  if (activeTab === 'maquettes') {
    return (
      <div className="grid gap-5 sm:grid-cols-12">
        {/* Screen list */}
        <div className="order-2 max-h-[220px] space-y-1.5 overflow-y-auto pr-1 sm:order-1 sm:col-span-6 sm:max-h-[420px]">
          {uiMockups.map((screen, idx) => {
            const globalIdx = idx + 3;
            const isActive = selectedScreenIdx === globalIdx;
            return (
              <button
                key={screen.title}
                type="button"
                onClick={() => {
                  setSelectedScreenIdx(globalIdx);
                  playSoftChime(500 + idx * 18, soundEnabled);
                }}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  isActive
                    ? 'border-[#2B3990] bg-white shadow-sm'
                    : 'border-[#E6DEE7] bg-white/60 hover:bg-white'
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#F29100]">
                  {screen.group}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#2B2630]">{screen.title}</p>
                <p className="mt-0.5 text-xs text-[#5D5761]">{screen.caption}</p>
              </button>
            );
          })}
        </div>

        {/* Selected Phone Frame Preview (first on mobile) */}
        <div className="order-1 flex flex-col items-center justify-center rounded-2xl border border-[#E6DEE7] bg-white p-4 sm:order-2 sm:col-span-6">
          <div className="w-[180px] overflow-hidden rounded-[26px] border-4 border-[#020518] bg-white shadow-xl sm:w-[200px]">
            <img
              src={activeUi.src}
              alt={activeUi.title}
              decoding="async"
              referrerPolicy="no-referrer"
              className="block h-auto w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs font-medium text-[#2B3990]">{activeUi.title}</p>
        </div>
      </div>
    );
  }

  // Interactive prototype simulation
  const offers = [
    {
      title: 'Initiation au numérique',
      org: 'Maison des métiers · Pikine',
      tag: 'Gratuit · 3 mois',
      type: 'formation',
    },
    {
      title: 'Assistant·e commercial·e',
      org: 'Atelier Jappale · Pikine Est',
      tag: 'CDD · Sans expérience',
      type: 'emploi',
    },
    {
      title: 'Conseiller·ère de vente',
      org: 'Atelier Jappale · Pikine Est',
      tag: 'Débutant accepté',
      type: 'emploi',
    },
  ].filter((o) => oppFilter === 'tous' || o.type === oppFilter);

  return (
    <div className="space-y-4 rounded-xl border border-[#E6DEE7] bg-white p-5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <PencumPikineLogo theme="light" symbolSize={30} />
        <button
          type="button"
          onClick={() => {
            setWolofPlaying((prev) => !prev);
            playSoftChime(587.33, soundEnabled);
          }}
          className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
            wolofPlaying
              ? 'bg-[#F29100] text-white'
              : 'bg-[#FFF3E0] text-[#B86A00] hover:bg-[#FFE4BD]'
          }`}
        >
          <Volume2 className="h-3.5 w-3.5" />
          <span>{wolofPlaying ? 'Lecture wolof en cours…' : 'Xibaar yi ci wolof'}</span>
        </button>
      </div>

      <div className="flex gap-1 rounded-lg bg-[#EEF1F7] p-1">
        {(['tous', 'formation', 'emploi'] as const).map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => {
              setOppFilter(tab);
              playSoftChime(520, soundEnabled);
            }}
            className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors ${
              oppFilter === tab ? 'bg-[#2B3990] text-white' : 'text-[#4B5568]'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="divide-y divide-[#EFE8F0]">
        {offers.map((offer) => (
          <div key={offer.title} className="flex items-center justify-between gap-4 py-3">
            <div>
              <p className="text-sm font-semibold text-[#020518]">{offer.title}</p>
              <p className="text-xs text-[#545D6E]">
                {offer.org} · {offer.tag}
              </p>
            </div>
            <span className="font-mono text-xs font-semibold text-[#1E7A3A]">Postuler ↗</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MairieCaseStudyView({
  project,
  activeTab,
  soundEnabled,
}: {
  project: ProjectItem;
  activeTab: ModalTab;
  soundEnabled: boolean;
}) {
  const [selectedUxIdx, setSelectedUxIdx] = useState(0);
  const [selectedArchIdx, setSelectedArchIdx] = useState(0);
  const [portalMode, setPortalMode] = useState<'citoyen' | 'agent'>('citoyen');
  const [mairieStep, setMairieStep] = useState<'etat-civil' | 'rdv' | 'paiement'>('etat-civil');
  const [mairieSubmitted, setMairieSubmitted] = useState(false);

  const uxSlides = MAIRIE_SLIDES.filter((s) => s.group === 'Recherche & Parcours');
  const archSlides = MAIRIE_SLIDES.filter((s) => s.group === 'Architecture & Wireframes');

  if (activeTab === 'ux' || activeTab === 'architecture') {
    const list = activeTab === 'ux' ? uxSlides : archSlides;
    const currentIdx = activeTab === 'ux' ? selectedUxIdx : selectedArchIdx;
    const setIdx = activeTab === 'ux' ? setSelectedUxIdx : setSelectedArchIdx;
    const activeSlide = list[currentIdx] || list[0];

    return (
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {list.map((slide, idx) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => {
                setIdx(idx);
                playSoftChime(520 + idx * 35, soundEnabled);
              }}
              className={`rounded-lg px-3.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                currentIdx === idx
                  ? 'bg-[#164E3B] text-white'
                  : 'border border-[#E6DEE7] bg-white text-[#2B2630] hover:border-[#164E3B]'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-[#D4E2DC] bg-white p-3">
          <img
            src={activeSlide.src}
            alt={activeSlide.title}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            className="max-h-[430px] w-full rounded-lg bg-[#FAFDFC] object-contain"
          />
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-[#EEF6F2] px-2 pt-3">
            <p className="text-xs leading-relaxed text-[#465B53]">{activeSlide.caption}</p>
            <span className="font-mono text-[11px] font-semibold text-[#164E3B]">
              {String(currentIdx + 1).padStart(2, '0')} / {String(list.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Interactive prototype view + Direct Figma Prototype Links (Habitant & Agent)
  return (
    <div className="space-y-4">
      {/* Live Figma Prototype Links */}
      {project.prototypeLinks && project.prototypeLinks.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          {project.prototypeLinks.map((link) => (
            <a
              key={link.role}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              data-cursor-label="Figma"
              onClick={() => playSoftChime(659.25, soundEnabled)}
              className={`flex items-center justify-between rounded-xl border p-4 transition-all hover:-translate-y-0.5 ${
                link.role === 'habitant'
                  ? 'border-[#164E3B] bg-[#164E3B] text-white hover:bg-[#113D2E]'
                  : 'border-[#D4A237] bg-[#FFFDF7] text-[#164E3B] hover:bg-[#FDF6E2]'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    link.role === 'habitant' ? 'bg-white/15 text-[#D4A237]' : 'bg-[#164E3B]/10 text-[#164E3B]'
                  }`}
                >
                  {link.role === 'habitant' ? (
                    <Users className="h-4 w-4" />
                  ) : (
                    <ShieldCheck className="h-4 w-4" />
                  )}
                </span>
                <div>
                  <p className="text-xs font-semibold">{link.label}</p>
                  <p
                    className={`text-[11px] ${
                      link.role === 'habitant' ? 'text-[#CDE4D8]' : 'text-[#5A6E66]'
                    }`}
                  >
                    {link.role === 'habitant'
                      ? 'Parcours citoyen Maimouna Diop'
                      : 'Back-office état civil Moussa Fall'}
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          ))}
        </div>
      )}

      {/* Interactive Simulation */}
      <div className="rounded-xl border border-[#D4E2DC] bg-white p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#D4A237]">
              Mairie de Pikine-Est · TARXISS
            </p>
            <p className="text-xs font-semibold text-[#164E3B]">
              Simulation · SUNU REGISTRE
            </p>
          </div>

          <div className="flex gap-1 rounded-lg bg-[#EEF6F2] p-1">
            <button
              type="button"
              onClick={() => {
                setPortalMode('citoyen');
                setMairieSubmitted(false);
                playSoftChime(520, soundEnabled);
              }}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                portalMode === 'citoyen'
                  ? 'bg-[#164E3B] text-white'
                  : 'text-[#465B53] hover:text-[#164E3B]'
              }`}
            >
              Portail Citoyen
            </button>
            <button
              type="button"
              onClick={() => {
                setPortalMode('agent');
                setMairieSubmitted(false);
                playSoftChime(587, soundEnabled);
              }}
              className={`rounded-md px-3 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                portalMode === 'agent'
                  ? 'bg-[#164E3B] text-white'
                  : 'text-[#465B53] hover:text-[#164E3B]'
              }`}
            >
              Espace Agent
            </button>
          </div>
        </div>

        {portalMode === 'citoyen' ? (
          <>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {[
                { id: 'etat-civil', label: 'Acte de naissance' },
                { id: 'rdv', label: 'Rendez-vous < 24h' },
                { id: 'paiement', label: 'Wave / Orange Money' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    setMairieStep(s.id as typeof mairieStep);
                    setMairieSubmitted(false);
                    playSoftChime(500, soundEnabled);
                  }}
                  className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                    mairieStep === s.id
                      ? 'border-[#164E3B] bg-[#EEF6F2] text-[#164E3B]'
                      : 'border-[#E6DEE7] bg-white text-[#546B63] hover:border-[#164E3B]'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>

            <div className="rounded-lg bg-[#EEF6F2] p-4">
              {mairieSubmitted ? (
                <div className="flex items-center gap-3 text-sm text-[#164E3B]">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#164E3B]" />
                  <span>
                    Dossier #PKN-2026 enregistré — Alerte WhatsApp / SMS activée pour le retrait sous 24h.
                  </span>
                </div>
              ) : (
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-[#164E3B]">
                      {mairieStep === 'etat-civil' &&
                        'Extrait d’acte de naissance, mariage ou certificat de résidence'}
                      {mairieStep === 'rdv' &&
                        'Choix d’un créneau horaire garanti sans file d’attente'}
                      {mairieStep === 'paiement' &&
                        'Règlement officiel instantané par Wave ou Orange Money avec reçu'}
                    </p>
                    <p className="mt-0.5 text-xs text-[#4D685E]">
                      Parcours pensé pour Maimouna Diop : délai réduit de 7 jours à moins de 24h.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setMairieSubmitted(true);
                      playSoftChime(660, soundEnabled);
                    }}
                    className="rounded-lg bg-[#164E3B] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#113D2E] whitespace-nowrap shrink-0"
                  >
                    Simuler la demande
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-3 rounded-lg bg-[#EEF6F2] p-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-semibold text-[#164E3B]">
                Poste Agent · Moussa Fall (État Civil)
              </p>
              <span className="font-mono text-[11px] font-medium text-[#8C6411]">
                50 000+ actes indexés
              </span>
            </div>
            <div className="grid gap-2.5 sm:grid-cols-3">
              {[
                { label: 'Recherche multicritère', value: '< 3 sec par registre' },
                { label: 'Demandes en file', value: '14 dossiers vérifiés' },
                { label: 'Journal d’activité', value: 'Traçabilité sécurisée' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-lg border border-[#D4E2DC] bg-white p-3">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-[#5A6E66]">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#164E3B]">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function NavaroCaseStudyView({
  project,
  activeTab,
  soundEnabled,
}: {
  project: ProjectItem;
  activeTab: ModalTab;
  soundEnabled: boolean;
}) {
  const [selectedAssetIdx, setSelectedAssetIdx] = useState(0);
  const [logoVariant, setLogoVariant] = useState<'color' | 'black' | 'white'>('color');

  const activeAsset = NAVARO_ASSETS[selectedAssetIdx] || NAVARO_ASSETS[0];

  if (activeTab === 'maquettes') {
    return (
      <div className="grid gap-5 sm:grid-cols-12">
        <div className="order-2 max-h-[220px] space-y-2 overflow-y-auto pr-1 sm:order-1 sm:col-span-5 sm:max-h-[400px]">
          {NAVARO_ASSETS.map((asset, idx) => {
            const isActive = selectedAssetIdx === idx;
            return (
              <button
                key={asset.title}
                type="button"
                onClick={() => {
                  setSelectedAssetIdx(idx);
                  playSoftChime(500 + idx * 25, soundEnabled);
                }}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  isActive
                    ? 'border-[#E61E6E] bg-white shadow-sm'
                    : 'border-[#E6DEE7] bg-white/70 hover:bg-white'
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#9B165B]">
                  {asset.group}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#280934]">{asset.title}</p>
                <p className="mt-0.5 text-xs text-[#5D5761]">{asset.caption}</p>
              </button>
            );
          })}
        </div>

        <div className="order-1 flex flex-col justify-between rounded-2xl border border-[#E6DEE7] bg-white p-3 sm:order-2 sm:col-span-7 sm:p-4">
          <div className="flex h-[240px] items-center justify-center overflow-hidden rounded-xl bg-[#280934]/5 sm:h-[340px]">
            <img
              src={activeAsset.src}
              alt={activeAsset.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-[#F0E8F1] pt-3">
            <p className="text-xs font-medium text-[#280934]">{activeAsset.title}</p>
            <span className="font-mono text-[11px] font-semibold text-[#E61E6E]">
              {String(selectedAssetIdx + 1).padStart(2, '0')} / {String(NAVARO_ASSETS.length).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'etude') {
    return (
      <div className="space-y-5">
        <div className="grid gap-4 rounded-xl border border-[#E6DEE7] bg-white p-5 sm:grid-cols-12 sm:items-center">
          <div className="sm:col-span-5">
            <NavaroLogo variant="color" size={44} />
            <p className="mt-2 text-xs text-[#5D5761]">
              NAVARO Parfumerie 100% Authentique · Nord Foire, Dakar.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:col-span-7 sm:grid-cols-4">
            {[
              { name: 'Prune Impérial', hex: '#280934' },
              { name: 'Magenta', hex: '#E61E6E' },
              { name: 'Aubergine', hex: '#4E314E' },
              { name: 'Satin Noir', hex: '#180520' },
            ].map((c) => (
              <div key={c.hex} className="rounded-lg border border-[#E6DEE7] p-2">
                <div className="h-8 w-full rounded" style={{ backgroundColor: c.hex }} />
                <p className="mt-1.5 text-[11px] font-semibold text-[#280934]">{c.name}</p>
                <p className="font-mono text-[10px] text-[#6E6873]">{c.hex}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#9B165B]">01. Problématique</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4F4A53]">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#9B165B]">02. Réponse créative</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4F4A53]">{project.approach}</p>
          </div>
        </div>
      </div>
    );
  }

  // Interactive logo specimen tab
  const bgMap = {
    color: 'border-[#E6DEE7] bg-white',
    black: 'border-[#E6DEE7] bg-[#F7F5F6]',
    white: 'border-[#280934] bg-[#280934]',
  };

  return (
    <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold text-[#280934]">
          Système Logotype NAVARO · Déclinaisons officielles
        </p>
        <div className="flex gap-1 rounded-lg bg-[#F3EDF4] p-1">
          {[
            { id: 'color', label: 'Couleur dégradé' },
            { id: 'black', label: 'Monochrome Noir' },
            { id: 'white', label: 'Monochrome Blanc' },
          ].map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => {
                setLogoVariant(v.id as typeof logoVariant);
                playSoftChime(520, soundEnabled);
              }}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                logoVariant === v.id ? 'bg-white text-[#280934] shadow-sm' : 'text-[#6D6671]'
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`flex h-36 flex-col items-center justify-center gap-2 rounded-xl border transition-colors duration-300 ${bgMap[logoVariant]}`}>
        <NavaroLogo variant={logoVariant} size={52} />
        <p
          className={`font-mono text-[10px] tracking-[0.2em] ${
            logoVariant === 'white' ? 'text-[#E09FC7]' : 'text-[#6E6873]'
          }`}
        >
          EAU DE PERFUME · NORD FOIRE, DAKAR
        </p>
      </div>
    </div>
  );
}

function KeurCaseStudyView({
  project,
  activeTab,
  soundEnabled,
}: {
  project: ProjectItem;
  activeTab: ModalTab;
  soundEnabled: boolean;
}) {
  const [selectedScreenIdx, setSelectedScreenIdx] = useState(3); // Start on Accueil
  const [selectedService, setSelectedService] = useState<'Garde d’enfants' | 'Ménage' | 'Cuisine' | 'Plomberie'>('Garde d’enfants');
  const [contacted, setContacted] = useState(false);

  const activeScreen = KER_FACILE_SCREENS[selectedScreenIdx] || KER_FACILE_SCREENS[0];

  if (activeTab === 'maquettes') {
    return (
      <div className="grid gap-5 sm:grid-cols-12">
        <div className="order-2 max-h-[220px] space-y-1.5 overflow-y-auto pr-1 sm:order-1 sm:col-span-6 sm:max-h-[470px]">
          {KER_FACILE_SCREENS.map((screen, idx) => {
            const isActive = selectedScreenIdx === idx;
            return (
              <button
                key={screen.title}
                type="button"
                onClick={() => {
                  setSelectedScreenIdx(idx);
                  playSoftChime(500 + idx * 20, soundEnabled);
                }}
                className={`w-full rounded-xl border p-3 text-left transition-colors ${
                  isActive
                    ? 'border-[#0E2448] bg-white shadow-sm'
                    : 'border-[#E6DEE7] bg-white/65 hover:bg-white'
                }`}
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-[#2E4C80]">
                  {screen.group}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-[#0E2448]">{screen.title}</p>
                <p className="mt-0.5 text-xs text-[#5D5761]">{screen.caption}</p>
              </button>
            );
          })}
        </div>

        <div className="order-1 flex flex-col items-center justify-center rounded-2xl border border-[#E6DEE7] bg-white p-4 sm:order-2 sm:col-span-6">
          <div className="w-[180px] overflow-hidden rounded-[26px] border-4 border-[#0E2448] bg-white shadow-xl sm:w-[200px]">
            <img
              src={activeScreen.src}
              alt={activeScreen.title}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="block h-auto w-full"
            />
          </div>
          <p className="mt-3 text-center text-xs font-medium text-[#0E2448]">{activeScreen.title}</p>
        </div>
      </div>
    );
  }

  if (activeTab === 'etude') {
    return (
      <div className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#2E4C80]">01. Problématique</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4F4A53]">{project.problem}</p>
          </div>
          <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-[#2E4C80]">02. Réponse créative</p>
            <p className="mt-2 text-sm leading-relaxed text-[#4F4A53]">{project.approach}</p>
          </div>
        </div>

        <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
          <p className="font-mono text-[11px] uppercase tracking-wider text-[#2E4C80]">Livrables conçus</p>
          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#0E2448]">
            {project.deliverables.map((d, idx) => (
              <span key={d} className="inline-flex items-center gap-2">
                {idx > 0 && <span className="text-[#C2CFE3]" aria-hidden="true">/</span>}
                <span>{d}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const providers: Record<typeof selectedService, { name: string; rate: string; rating: string; desc: string }> = {
    'Garde d’enfants': {
      name: 'Khadija Ndiaye',
      rate: '2 500 fc/h',
      rating: '5.0 (12 avis)',
      desc: 'Garde d’enfants à domicile et suivi des devoirs après l’école à Pikine.',
    },
    'Ménage': {
      name: 'Khadija Ndiaye',
      rate: '2 000 fc/h',
      rating: '4.9 (18 avis)',
      desc: 'Spécialiste du ménage, repassage et préparation de repas à domicile à Pikine.',
    },
    'Cuisine': {
      name: 'Awa Diop',
      rate: '3 000 fc/h',
      rating: '4.9 (9 avis)',
      desc: 'Préparation de repas familiaux et organisation hebdomadaire sur mesure.',
    },
    'Plomberie': {
      name: 'Moussa Gueye',
      rate: '3 500 fc/h',
      rating: '5.0 (15 avis)',
      desc: 'Réparation de fuites et installation sanitaire à domicile à Pikine.',
    },
  };

  const currentProvider = providers[selectedService];

  return (
    <div className="space-y-4">
      {project.prototypeLinks && project.prototypeLinks.length > 0 && (
        <a
          href={project.prototypeLinks[0].url}
          target="_blank"
          rel="noreferrer"
          data-cursor-label="Figma"
          onClick={() => playSoftChime(659.25, soundEnabled)}
          className="flex items-center justify-between rounded-xl bg-[#0E2448] p-4 text-white transition-colors hover:bg-[#1B3766]"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
              <ExternalLink className="h-4 w-4 text-white" />
            </span>
            <div>
              <p className="text-xs font-semibold">Ouvrir le Prototype Interactif Figma · Kër Facile</p>
              <p className="text-[11px] text-[#B7CEF2]">Tester le parcours complet Splash, Connexion, Services &amp; Chat</p>
            </div>
          </div>
          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </a>
      )}

      <div className="rounded-xl border border-[#E6DEE7] bg-white p-5">
        <p className="mb-3 text-xs font-semibold text-[#0E2448]">Simulation · Trouver un prestataire certifié à Pikine</p>
        <div className="flex flex-wrap gap-1.5">
          {(['Garde d’enfants', 'Ménage', 'Cuisine', 'Plomberie'] as const).map((srv) => (
            <button
              key={srv}
              type="button"
              onClick={() => {
                setSelectedService(srv);
                setContacted(false);
                playSoftChime(520, soundEnabled);
              }}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                selectedService === srv
                  ? 'border-[#0E2448] bg-[#0E2448] text-white'
                  : 'border-[#DCE3EE] bg-[#F7F9FC] text-[#2E4C80] hover:border-[#0E2448]'
              }`}
            >
              {srv}
            </button>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-[#E6ECF5] bg-[#F7F9FC] p-4">
          {contacted ? (
            <div className="flex items-center gap-3 text-sm font-medium text-[#0D8A4E]">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>Demande envoyée avec succès à {currentProvider.name} !</span>
            </div>
          ) : (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <p className="text-sm font-bold text-[#0E2448]">{currentProvider.name}</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[11px] font-medium text-[#2E4C80] shadow-xs">
                    <ShieldCheck className="h-3 w-3 text-[#0D8A4E]" />
                    Profil Certifié
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] text-[#4B5568]">
                    <Star className="h-3 w-3 fill-[#F5B400] text-[#F5B400]" />
                    {currentProvider.rating}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#4B5568]">{currentProvider.desc}</p>
                <p className="mt-1 font-mono text-xs font-semibold text-[#0E2448]">
                  <MapPin className="mr-1 inline h-3 w-3" />
                  Pikine · {currentProvider.rate}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setContacted(true);
                  playSoftChime(659.25, soundEnabled);
                }}
                className="rounded-xl bg-[#0E2448] px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#1B3766] whitespace-nowrap shrink-0"
              >
                Contacter le prestataire
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectModal({ project, onClose, soundEnabled }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('etude');

  useEffect(() => {
    if (project?.id === 'opportunite' || project?.id === 'navaro' || project?.id === 'keur') {
      setActiveTab('maquettes');
    } else if (project?.id === 'mairie') {
      setActiveTab('ux');
    } else {
      setActiveTab('etude');
    }
  }, [project?.id]);

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  const isPencum = project?.id === 'opportunite';
  const isMairie = project?.id === 'mairie';
  const isKeur = project?.id === 'keur';
  const isNavaro = project?.id === 'navaro';

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#1D1D1B]/80"
      />

      <div
        className={`animate-modal-pop relative z-10 max-h-[92vh] w-full overflow-y-auto rounded-2xl border border-[#E6DEE7] bg-[#F7F5F6] p-4 shadow-2xl sm:p-8 ${
          isPencum || isMairie || isNavaro || isKeur ? 'max-w-4xl' : 'max-w-2xl'
        }`}
      >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-[#E6DEE7] pb-4 sm:gap-4 sm:pb-5">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6873]">
                  <span className="font-mono font-medium text-[#723F7F]">{project.index}</span>
                  <span aria-hidden="true">·</span>
                  <span>{project.context}</span>
                  <span aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1 font-mono tabular-nums">
                    <Calendar className="h-3 w-3" />
                    {project.year}
                  </span>
                </div>
                <h2 id="project-modal-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-[#2B2630] sm:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-1 text-xs text-[#5D5761] sm:text-sm">{project.subtitle}</p>

                {project.prototypeLinks && project.prototypeLinks.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.prototypeLinks.map((link) => (
                      <a
                        key={link.role}
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-label="Figma"
                        onClick={() => playSoftChime(659.25, soundEnabled)}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                          link.role === 'habitant'
                            ? 'bg-[#164E3B] text-white hover:bg-[#113D2E]'
                            : link.role === 'figma'
                              ? 'bg-[#0E2448] text-white hover:bg-[#1B3766]'
                              : 'border border-[#164E3B]/30 bg-white text-[#164E3B] hover:border-[#164E3B]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Fermer la fenêtre du projet"
                data-cursor-label="Fermer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#DCD2DE] bg-white text-[#2B2630] transition-colors hover:bg-[#2B2630] hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Segmented Control */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
              <div className="inline-flex flex-wrap gap-1 rounded-lg bg-[#ECE5ED] p-1">
                {isPencum ? (
                  <>
                    {[
                      { id: 'maquettes', label: 'Maquettes UI (10)' },
                      { id: 'ux', label: 'Personas & Parcours' },
                      { id: 'etude', label: 'Charte & Identité' },
                      { id: 'prototype', label: 'Aperçu interactif' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.id as ModalTab);
                          playSoftChime(520, soundEnabled);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === tab.id ? 'bg-white text-[#2B2630] shadow-sm' : 'text-[#625B67] hover:text-[#2B2630]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </>
                ) : isMairie ? (
                  <>
                    {[
                      { id: 'ux', label: 'Parcours & User Flow (3)' },
                      { id: 'architecture', label: 'Architecture & Wireframes (2)' },
                      { id: 'prototype', label: 'Prototypes & Simulation' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.id as ModalTab);
                          playSoftChime(520, soundEnabled);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === tab.id ? 'bg-white text-[#164E3B] shadow-sm' : 'text-[#625B67] hover:text-[#164E3B]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </>
                ) : isKeur ? (
                  <>
                    {[
                      { id: 'maquettes', label: 'Maquettes UI (8)' },
                      { id: 'etude', label: 'Étude & Démarche' },
                      { id: 'prototype', label: 'Prototype & Simulation' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.id as ModalTab);
                          playSoftChime(520, soundEnabled);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === tab.id ? 'bg-white text-[#0E2448] shadow-sm' : 'text-[#625B67] hover:text-[#0E2448]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </>
                ) : (
                  <>
                    {[
                      { id: 'maquettes', label: 'Mockups & Charte (7)' },
                      { id: 'etude', label: 'Identité & Couleurs' },
                      { id: 'prototype', label: 'Déclinaisons Logo' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => {
                          setActiveTab(tab.id as ModalTab);
                          playSoftChime(520, soundEnabled);
                        }}
                        className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap shrink-0 ${
                          activeTab === tab.id ? 'bg-white text-[#280934] shadow-sm' : 'text-[#625B67] hover:text-[#280934]'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </>
                )}
              </div>
              <span className="text-xs text-[#6E6873]">{project.role}</span>
            </div>

            {/* Tab Content */}
            <div className="mt-6">
              {isPencum ? (
                <PencumCaseStudyView activeTab={activeTab} soundEnabled={soundEnabled} />
              ) : isMairie ? (
                <MairieCaseStudyView project={project} activeTab={activeTab} soundEnabled={soundEnabled} />
              ) : isKeur ? (
                <KeurCaseStudyView project={project} activeTab={activeTab} soundEnabled={soundEnabled} />
              ) : (
                <NavaroCaseStudyView project={project} activeTab={activeTab} soundEnabled={soundEnabled} />
              )}
            </div>

            {/* Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#E6DEE7] pt-5">
              <div className="flex items-center gap-2 text-xs text-[#6E6873]">
                <span>Palette :</span>
                {project.palette.map((hex) => (
                  <span
                    key={hex}
                    title={hex}
                    className="inline-block h-4 w-4 rounded-sm border border-black/10"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <a
                href={`mailto:mariemedia525@gmail.com?subject=${encodeURIComponent(`À propos du projet ${project.title}`)}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#2B2630] px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-[#723F7F] whitespace-nowrap shrink-0"
              >
                Discuter de ce projet
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
      </div>
    </div>
  );
}
