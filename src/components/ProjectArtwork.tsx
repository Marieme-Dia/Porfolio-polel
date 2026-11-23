import { ProjectItem } from '../data/projects';
import { PencumPikineLogo } from './PencumPikineLogo';
import { NavaroLogo } from './NavaroLogo';

interface ProjectArtworkProps {
  project: ProjectItem;
}

export default function ProjectArtwork({ project }: ProjectArtworkProps) {
  switch (project.id) {
    case 'opportunite':
      return (
        <div className="relative grid h-full w-full grid-cols-1 items-center gap-4 overflow-hidden bg-gradient-to-br from-[#F5F7FA] via-[#EEF2F9] to-[#E9EEF8] px-5 pt-5 pb-0 sm:grid-cols-12 sm:px-9 sm:py-5">
          {/* Left Side: Clear typographic & visual hierarchy */}
          <div className="relative z-10 flex flex-col items-start justify-center sm:col-span-6">
            <PencumPikineLogo theme="light" symbolSize={46} />

            <p className="mt-3 font-display text-base font-bold leading-snug text-[#020518] sm:mt-4 sm:text-xl">
              « L’opportunité est tout prêt » — en français et en wolof.
            </p>
            <p className="mt-1.5 max-w-md text-xs leading-relaxed text-[#4B5568]">
              Application mobile citoyenne, espace partenaire, résumé audio wolof et assistant IA de candidature.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5 border-t border-[#D8E0EE] pt-2.5 sm:mt-4 sm:pt-3">
              <div className="flex items-center gap-1.5">
                {['#2B3990', '#F29100', '#1E7A3A', '#020518'].map((hex) => (
                  <span
                    key={hex}
                    title={hex}
                    className="h-3 w-3 rounded-sm border border-black/10"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] font-medium text-[#2B3990]">
                Charte 32 p. · Personas · 13 écrans
              </span>
            </div>
          </div>

          {/* Right Side: Responsive fanned mockups visible on mobile & desktop */}
          <div className="relative flex h-[175px] items-end justify-center pt-2 sm:col-span-6 sm:h-full sm:pt-3">
            <div className="relative z-10 h-[155px] w-[84px] translate-y-2 -rotate-3 overflow-hidden rounded-t-2xl border-2 border-[#2B3990]/20 bg-white shadow-lg transition-transform duration-300 ease-out group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:-rotate-6 sm:h-[255px] sm:w-[126px] sm:translate-y-3">
              <img
                src="/assets/opt/03___Bienvenue_6a75672e.webp"
                alt="Maquette Pencum Pikine Bienvenue"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="relative z-20 -ml-4 h-[172px] w-[96px] translate-y-0.5 overflow-hidden rounded-t-2xl border-2 border-[#2B3990]/30 bg-white shadow-xl transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03] sm:-ml-5 sm:h-[282px] sm:w-[142px]">
              <img
                src="/assets/opt/15_____la_une___formation_fbabb803.webp"
                alt="Maquette Pencum Pikine Accueil Formations"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="relative z-10 -ml-4 h-[155px] w-[84px] translate-y-2.5 rotate-3 overflow-hidden rounded-t-2xl border-2 border-[#2B3990]/20 bg-white shadow-lg transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:translate-y-1.5 group-hover:rotate-6 sm:-ml-5 sm:h-[255px] sm:w-[126px] sm:translate-y-3.5">
              <img
                src="/assets/opt/23___Assistant_IA_83db4b5d.webp"
                alt="Maquette Pencum Pikine Assistant IA"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      );

    case 'mairie':
      return (
        <div className="relative flex h-full w-full flex-col justify-between gap-4 overflow-hidden bg-[#164E3B] px-5 pt-5 pb-0 text-white sm:flex-row sm:items-center sm:px-6 sm:py-0">
          <div className="relative z-10 flex w-full flex-col gap-1.5 sm:max-w-[46%]">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#D4A237]">
              Mairie de Pikine-Est
            </span>
            <p className="font-display text-2xl font-bold leading-tight tracking-tight text-white">
              SUNU REGISTRE
            </p>
            <p className="text-xs leading-snug text-[#CDE4D8]">
              Portail Citoyen &amp; Espace Agent · Délai réduit à &lt; 24h
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2">
              {['#164E3B', '#D4A237', '#EEF6F2'].map((hex) => (
                <span
                  key={hex}
                  className="h-3 w-3 rounded-sm border border-white/25"
                  style={{ backgroundColor: hex }}
                />
              ))}
            </div>
          </div>

          <div className="relative z-10 h-[145px] w-full translate-y-1 overflow-hidden rounded-t-xl border border-white/20 bg-[#EEF6F2] p-1.5 shadow-xl transition-transform duration-300 ease-out group-hover:-translate-y-1 sm:h-[215px] sm:w-[52%] sm:translate-y-1.5 sm:p-2">
            <img
              src="/assets/opt/mairie_14.webp"
              alt="Architecture SUNU REGISTRE Portail citoyen et Espace agent"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full rounded object-cover object-top"
            />
          </div>
        </div>
      );

    case 'keur':
      return (
        <div className="relative flex h-full w-full flex-col justify-between gap-4 overflow-hidden bg-gradient-to-br from-[#0E2448] via-[#1B3766] to-[#2B4C82] px-5 pt-5 pb-0 text-white sm:flex-row sm:items-center sm:px-6 sm:py-0">
          <div className="relative z-10 flex w-full flex-col gap-1.5 sm:max-w-[48%]">
            <div className="inline-flex items-center gap-2">
              {/* Geometric Kër Facile hexagon mark from Splash screen */}
              <svg width="26" height="24" viewBox="0 0 28 24" fill="none" aria-hidden="true">
                <path d="M7 2L1.5 12L7 22H12L7.5 12L12 2H7Z" fill="#FFFFFF" />
                <path d="M21 2L26.5 12L21 22H16L20.5 12L16 2H21Z" fill="#FFFFFF" />
              </svg>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                Kër Facile
              </span>
            </div>
            <p className="mt-0.5 text-xs leading-snug text-[#D6E3F8] sm:mt-1">
              Services à domicile certifiés · Garde d’enfants, Ménage, Cuisine &amp; Plomberie
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 sm:mt-2">
              {['#0E2448', '#2E4C80', '#0D8A4E'].map((hex) => (
                <span
                  key={hex}
                  className="h-3 w-3 rounded-sm border border-white/25"
                  style={{ backgroundColor: hex }}
                />
              ))}
              <span className="ml-1 font-mono text-[10px] text-[#B7CEF2]">
                8 écrans · Prototype Figma
              </span>
            </div>
          </div>

          {/* Fanned real Kër Facile mobile mockups visible on mobile & desktop */}
          <div className="relative flex h-[155px] w-full items-end justify-center pt-2 sm:h-full sm:w-[48%] sm:pt-4">
            <div className="relative z-10 h-[138px] w-[78px] translate-y-2 -rotate-6 overflow-hidden rounded-t-2xl border-2 border-white/25 bg-white shadow-lg transition-transform duration-300 ease-out group-hover:-translate-x-1.5 group-hover:-rotate-8 sm:h-[205px] sm:w-[104px] sm:translate-y-3">
              <img
                src="/assets/opt/Description_e85f7736.webp"
                alt="Fiche prestataire certifié Kër Facile"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="relative z-20 -ml-3 h-[150px] w-[86px] translate-y-0.5 overflow-hidden rounded-t-2xl border-2 border-white/40 bg-white shadow-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] sm:-ml-4 sm:h-[222px] sm:w-[112px] sm:translate-y-1">
              <img
                src="/assets/opt/Accueil_7db2e798.webp"
                alt="Accueil Kër Facile services à domicile"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      );

    case 'navaro':
      return (
        <div className="relative grid h-full w-full grid-cols-1 items-center gap-4 overflow-hidden bg-gradient-to-br from-[#280934] via-[#340E42] to-[#1D0626] px-5 py-5 text-white sm:grid-cols-12 sm:gap-5 sm:px-9">
          {/* Left editorial block */}
          <div className="relative z-10 flex flex-col items-start justify-center sm:col-span-5">
            <NavaroLogo variant="white" size={36} />
            <p className="mt-3 font-display text-base font-bold leading-snug text-white sm:mt-4 sm:text-xl">
              Parfumerie 100% Authentique — Nord Foire, Dakar.
            </p>
            <p className="mt-1.5 max-w-md text-xs leading-relaxed text-[#E3CFE6]">
              Logotype étoile, flacon Eau de Parfum, magazine N°01, casquette brodée, sac boutique et cartes de visite.
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-2.5 border-t border-white/15 pt-2.5 sm:mt-4 sm:pt-3">
              <div className="flex items-center gap-1.5">
                {['#280934', '#E61E6E', '#4E314E'].map((hex) => (
                  <span
                    key={hex}
                    title={hex}
                    className="h-3 w-3 rounded-sm border border-white/25"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <span className="font-mono text-[11px] font-medium text-[#F08AA1]">
                Logo · Flacon · Magazine · Casquette · 7 visuels
              </span>
            </div>
          </div>

          {/* Right multi-mockup showcase visible on mobile & desktop */}
          <div className="relative flex h-[135px] items-center justify-center gap-2.5 sm:col-span-7 sm:h-full sm:justify-end sm:gap-3">
            <div className="h-[115px] w-[30%] overflow-hidden rounded-xl border border-white/15 bg-[#3B1E42] shadow-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:-rotate-1 sm:h-[220px]">
              <img
                src="/assets/opt/navaro_rose_thumb.webp"
                alt="Parfum NAVARO Élégance florale rosée"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="h-[130px] w-[38%] overflow-hidden rounded-xl border border-white/25 bg-[#3B1E42] shadow-2xl transition-transform duration-300 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.03] sm:h-[248px]">
              <img
                src="/assets/opt/navaro_charte_thumb.webp"
                alt="Charte Graphique NAVARO Eau de Perfume 60 ml"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="h-[115px] w-[30%] overflow-hidden rounded-xl border border-white/15 bg-[#3B1E42] shadow-lg transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:rotate-1 sm:h-[220px]">
              <img
                src="/assets/opt/navaro_bag_thumb.webp"
                alt="Sac Boutique Luxe NAVARO"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      );
  }
}
