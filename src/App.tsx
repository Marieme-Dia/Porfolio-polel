import { lazy, Suspense, useEffect, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Copy,
  Check,
  Volume2,
  VolumeX,
  Menu,
  X,
  Moon,
  Sun,
  Eye,
  Rocket,
  Folder,
  Star,
  Layout,
  Code2,
  PenTool,
  Search,
  Sparkles,
  ExternalLink,
  Mail,
  Linkedin,
  Download,
} from 'lucide-react';
import CuteMouseCursor from './components/CuteMouseCursor';
import PolelBloomHero from './components/PolelBloomHero';
import ProjectArtwork from './components/ProjectArtwork';
import ProcessAtelier from './components/ProcessAtelier';
import { PolelOutlineFlower, PolelPetalBand, PolelSymbol } from './components/PolelLogo';
import { PROJECTS, ProjectCategory, ProjectItem } from './data/projects';
import { playSoftChime } from './utils/sound';

const ProjectModal = lazy(() => import('./components/ProjectModal'));

const CAPABILITY_LIST = [
  { label: 'UI/UX Design', icon: Layout },
  { label: 'Développement Web', icon: Code2 },
  { label: 'Design Graphique', icon: PenTool },
  { label: 'Recherche Utilisateur', icon: Search },
  { label: 'Créativité Sans Limite', icon: Sparkles },
];

export default function App() {
  const [filter, setFilter] = useState<'all' | ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const visibleProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((project) => project.category === filter);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('mariemedia525@gmail.com');
      setCopiedEmail(true);
      playSoftChime(659.25, soundEnabled);
      window.setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = 'mailto:mariemedia525@gmail.com';
    }
  };

  return (
    <div className="min-h-screen bg-[#F7F5F6] text-[#1D1D1B] transition-colors duration-300 selection:bg-[#945BA1] selection:text-white dark:bg-[#1E1A22] dark:text-[#F7F5F6]">
      <CuteMouseCursor />

      {/* 3-Zone Top Bar Contract matching reference header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#2B2630]/[0.98] text-white">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:h-[76px] sm:gap-8 sm:px-6 lg:px-10">
          {/* Zone 1: Single text element + exact POLEL symbol */}
          <a
            href="#accueil"
            data-cursor-label="Accueil"
            className="inline-flex items-center gap-3 font-display text-lg font-semibold tracking-[0.12em] text-white whitespace-nowrap shrink-0"
          >
            <PolelSymbol size={30} animated />
            <span>MARIEME</span>
          </a>

          {/* Zone 2: 4 concise single-line nav links */}
          <nav aria-label="Navigation principale" className="hidden items-center gap-7 md:flex">
            <a
              href="#apropos"
              className="text-sm font-medium text-[#EFE7F2] transition-colors hover:text-[#F08AA1] whitespace-nowrap shrink-0"
            >
              À propos
            </a>
            <a
              href="#projets"
              className="text-sm font-medium text-[#EFE7F2] transition-colors hover:text-[#F08AA1] whitespace-nowrap shrink-0"
            >
              Projets
            </a>
            <a
              href="#competences"
              className="text-sm font-medium text-[#EFE7F2] transition-colors hover:text-[#F08AA1] whitespace-nowrap shrink-0"
            >
              Compétences
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[#EFE7F2] transition-colors hover:text-[#F08AA1] whitespace-nowrap shrink-0"
            >
              Me contacter
            </a>
          </nav>

          {/* Zone 3: 1 primary action (Theme toggle matching screenshot) + mobile menu toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => {
                setDarkMode((prev) => !prev);
                playSoftChime(587.33, soundEnabled);
              }}
              data-cursor-label={darkMode ? 'Mode clair' : 'Mode nuit'}
              aria-label={darkMode ? 'Activer le thème clair' : 'Activer le thème sombre'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[#F8C1BB] transition-colors hover:border-[#F08AA1] hover:bg-white/10"
            >
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white md:hidden"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Navigation mobile"
            className="flex flex-col gap-3 border-t border-white/10 bg-[#2B2630] px-6 py-5 md:hidden"
          >
            {[
              { href: '#apropos', label: 'À propos' },
              { href: '#projets', label: 'Projets' },
              { href: '#competences', label: 'Compétences' },
              { href: '#contact', label: 'Me contacter' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main>
        {/* Atmospheric Dark Plum Hero matching image_0a3dd2b3.png */}
        <section
          id="accueil"
          className="relative overflow-hidden bg-[#2B2630] text-white"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 65% 65% at 78% 45%, rgba(148,91,161,0.34), transparent 70%), radial-gradient(ellipse 45% 45% at 15% 85%, rgba(240,138,161,0.18), transparent 65%)',
          }}
        >
          <div className="mx-auto max-w-[1200px] px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 lg:px-10 lg:pt-20 lg:pb-20">
            <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
              {/* Left Column: Headline + Intro + Actions */}
              <div className="relative lg:col-span-6">
                <p className="mb-4 text-[11px] font-medium tracking-[0.14em] uppercase text-[#E09FC7] sm:text-xs sm:tracking-[0.16em]">
                  UI/UX Designer · Designer Graphique · Développeuse Web
                </p>

                <div className="relative inline-block">
                  {/* Coral accent burst matching screenshot */}
                  <svg
                    aria-hidden="true"
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    className="absolute -left-7 -top-4 hidden sm:block"
                  >
                    <path d="M18 4L21 13" stroke="#F08AA1" strokeWidth="3.2" strokeLinecap="round" />
                    <path d="M6 12L14 17" stroke="#F08AA1" strokeWidth="3.2" strokeLinecap="round" />
                    <path d="M5 24L13 23" stroke="#F08AA1" strokeWidth="3.2" strokeLinecap="round" />
                  </svg>

                  <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[72px]">
                    Les idées
                    <br />
                    prennent{' '}
                    <span className="relative inline-block">
                      <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(100deg, #945BA1 0%, #F08AA1 65%, #F8C1BB 100%)' }}
                      >
                        vie.
                      </span>
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 130 16"
                        fill="none"
                        className="absolute -bottom-2 left-0 w-full"
                      >
                        <path
                          d="M3 11C38 3 86 2 127 7"
                          stroke="#F08AA1"
                          strokeWidth="4.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </h1>
                </div>

                <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#E3DAE6] sm:mt-7 sm:text-base">
                  Bonjour, moi c’est <strong className="font-semibold text-white">Marieme Dia</strong>.
                  J’imagine et je conçois des expériences numériques élégantes, claires et humaines.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9 sm:gap-6">
                  <a
                    href="#projets"
                    data-cursor-label="Explorer"
                    onClick={() => playSoftChime(523.25, soundEnabled)}
                    className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0"
                    style={{ background: 'linear-gradient(100deg, #945BA1 0%, #F08AA1 100%)' }}
                  >
                    <Rocket className="h-4 w-4" />
                    <span>Explorer mes projets</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>

                  <a
                    href="#apropos"
                    className="inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm font-medium text-white transition-colors hover:border-[#F08AA1] hover:text-[#F8C1BB] whitespace-nowrap shrink-0"
                  >
                    <Eye className="h-4 w-4 text-[#E09FC7]" />
                    <span>Découvrir mon univers</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const next = !soundEnabled;
                      setSoundEnabled(next);
                      if (next) playSoftChime(587.33, true);
                    }}
                    data-cursor-label={soundEnabled ? 'Muet' : 'Son'}
                    aria-label={soundEnabled ? 'Couper les sons doux' : 'Activer les sons doux'}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs text-[#E3DAE6] transition-colors hover:border-[#F08AA1]/60 hover:text-white whitespace-nowrap shrink-0"
                  >
                    {soundEnabled ? <Volume2 className="h-3.5 w-3.5 text-[#F08AA1]" /> : <VolumeX className="h-3.5 w-3.5" />}
                    <span>{soundEnabled ? 'Son actif' : 'Muet'}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive POLEL Orbit Stage */}
              <div className="lg:col-span-6">
                <PolelBloomHero soundEnabled={soundEnabled} />
              </div>
            </div>

            {/* Centered Scroll Down Cue matching screenshot */}
            <div className="mt-10 flex justify-center">
              <a
                href="#apropos"
                aria-label="Faire défiler vers À propos"
                data-cursor-label="Descendre"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-[#2B2630]/80 text-white transition-transform hover:translate-y-1 hover:border-[#F08AA1]"
              >
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Official POLEL Motif Pétales Bandeau */}
          <PolelPetalBand theme="dark" height={54} />
        </section>

        {/* Section 01: À propos — Matching image_0a3dd2b3.png 3-column composition */}
        <section id="apropos" className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* Column 1: Real Professional Portrait Photo */}
            <div className="relative flex justify-center lg:col-span-4">
              {/* Coral burst decoration top-left of portrait */}
              <svg
                aria-hidden="true"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className="absolute -left-2 top-3 z-10 hidden sm:block"
              >
                <path d="M14 3L16 10" stroke="#945BA1" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M4 10L11 14" stroke="#945BA1" strokeWidth="2.6" strokeLinecap="round" />
                <path d="M3 20L10 19" stroke="#945BA1" strokeWidth="2.6" strokeLinecap="round" />
              </svg>

              <div className="relative h-[320px] w-full max-w-[290px] overflow-hidden rounded-[32px] border border-[#E6DEE7] bg-[#2B2630] shadow-[0_24px_50px_-22px_rgba(43,38,48,0.28)] dark:border-[#3D3544] sm:h-[380px] sm:max-w-[320px] sm:rounded-[36px]">
                <img
                  src="/assets/marieme-profil.webp"
                  alt="Portrait professionnel de Marieme Dia, Designer UI/UX et Développeuse Web"
                  width={900}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            {/* Column 2: Bio & 2 Highlight Cards */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-[2px] w-6 bg-[#F08AA1]" aria-hidden="true" />
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-[#723F7F] dark:text-[#E09FC7]">
                  À propos
                </p>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-[#2B2630] dark:text-white sm:text-4xl">
                Un peu de moi, beaucoup{' '}
                <span className="text-[#E05A7A] dark:text-[#F08AA1]">d’idées.</span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#4F4A53] dark:text-[#D5CCD9]">
                Je suis <strong>Marieme Dia</strong>. Je conçois des maquettes web et mobiles, des
                prototypes interactifs et des supports de communication visuelle en alliant créativité,
                esthétique et besoins des utilisateurs — entre Master 1 à l’Université Cheikh Hamidou
                Kane et certification UI/UX Design à <strong>Simplon Sénégal</strong>.
              </p>

              {/* Two stat cards matching screenshot */}
              <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-4 rounded-2xl border border-[#E6DEE7] bg-white p-4 dark:border-[#3D3544] dark:bg-[#2B2630]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F3E8F4] text-[#945BA1] dark:bg-[#3A2E42] dark:text-[#F08AA1]">
                    <Folder className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold tabular-nums text-[#2B2630] dark:text-white">
                      04
                    </p>
                    <p className="text-xs text-[#6E6873] dark:text-[#BFB5C4]">projets à découvrir</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl border border-[#E6DEE7] bg-white p-4 dark:border-[#3D3544] dark:bg-[#2B2630]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FDECF0] text-[#E05A7A] dark:bg-[#3F2C38] dark:text-[#F08AA1]">
                    <Star className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-xl font-bold text-[#2B2630] dark:text-white">
                      Fr · Wo
                    </p>
                    <p className="text-xs text-[#6E6873] dark:text-[#BFB5C4]">Français &amp; Wolof</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: 5 Core Pillars List (2 columns on tablet, 1 column on desktop) */}
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-1 lg:gap-4">
              {CAPABILITY_LIST.map((cap) => {
                const Icon = cap.icon;
                return (
                  <div key={cap.label} className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E6DEE7] bg-[#F3E8F4] text-[#723F7F] dark:border-[#3D3544] dark:bg-[#2B2630] dark:text-[#E09FC7]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-[#2B2630] dark:text-[#EFE7F2]">
                      {cap.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 02: Bento Showcase of all 5 Projects */}
        <section
          id="projets"
          className="border-y border-[#E6DEE7] bg-white py-16 lg:py-20 dark:border-[#3D3544] dark:bg-[#241F29]"
        >
          <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#723F7F] dark:text-[#E09FC7]">
                  02. Mes explorations
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#2B2630] dark:text-white sm:text-5xl">
                  Des idées devenues{' '}
                  <span className="font-serif-accent font-normal italic text-[#723F7F] dark:text-[#F08AA1]">
                    projets.
                  </span>
                </h2>
              </div>

              {/* Interactive Filter Controls */}
              <div className="flex w-full flex-wrap gap-1 self-start rounded-lg bg-[#F3EDF4] p-1 dark:bg-[#312A38] sm:inline-flex sm:w-auto sm:flex-nowrap md:self-auto">
                {[
                  { id: 'all', label: 'Tous (4)' },
                  { id: 'simplon', label: 'Simplon Pikine (3)' },
                  { id: 'identite', label: 'Identité & Brand (1)' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setFilter(tab.id as typeof filter);
                      playSoftChime(523.25, soundEnabled);
                    }}
                    data-cursor-label="Filtrer"
                    className={`rounded-md px-2.5 py-2 text-xs font-medium transition-colors whitespace-nowrap shrink-0 sm:px-3.5 ${
                      filter === tab.id
                        ? 'bg-white text-[#2B2630] shadow-sm dark:bg-[#2B2630] dark:text-white'
                        : 'text-[#625B67] hover:text-[#2B2630] dark:text-[#BFB5C4] dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Bento Grid — zero empty cells across all filter states */}
            <div className="mt-10 grid gap-7 sm:mt-12 md:grid-cols-2">
              {visibleProjects.map((project) => {
                const isFullSpan = project.id === 'opportunite' || project.id === 'navaro';

                return (
                  <article
                    key={project.id}
                    className={`cv-auto-card group flex flex-col justify-between ${isFullSpan ? 'md:col-span-2' : ''}`}
                  >
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedProject(project);
                        playSoftChime(659.25, soundEnabled);
                      }}
                      data-cursor-label="Explorer"
                      className="w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#723F7F]"
                    >
                      <div
                        className={`overflow-hidden rounded-2xl border border-[#E6DEE7] transition-transform duration-300 group-hover:-translate-y-1.5 dark:border-[#3D3544] ${
                          isFullSpan ? 'min-h-[300px] sm:h-[340px]' : 'min-h-[260px] sm:h-[260px]'
                        }`}
                      >
                        <ProjectArtwork project={project} />
                      </div>

                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 text-xs text-[#6E6873] dark:text-[#BFB5C4]">
                            <span className="font-mono font-medium text-[#723F7F] dark:text-[#F08AA1]">
                              {project.index}
                            </span>
                            <span aria-hidden="true">·</span>
                            <span>{project.categoryLabel}</span>
                            <span aria-hidden="true">·</span>
                            <span className="font-mono tabular-nums">{project.year}</span>
                          </div>
                          <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#2B2630] dark:text-white">
                            {project.title}
                          </h3>
                          <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-[#544E58] dark:text-[#D5CCD9]">
                            {project.summary}
                          </p>
                        </div>

                        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E2D6E4] text-[#723F7F] transition-all duration-200 group-hover:rotate-45 group-hover:border-[#723F7F] group-hover:bg-[#723F7F] group-hover:text-white dark:border-[#4A3F53] dark:text-[#E09FC7]">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </button>

                    {project.prototypeLinks && project.prototypeLinks.length > 0 && (
                      <div className="mt-4 flex flex-wrap items-center gap-2.5">
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
                                  : 'border border-[#164E3B]/30 bg-[#EEF6F2] text-[#164E3B] hover:border-[#164E3B] dark:border-[#4A6B5D] dark:bg-[#24362E] dark:text-[#CDE4D8]'
                            }`}
                          >
                            <span>{link.label}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>

            <p className="mt-12 border-t border-[#EFE8F0] pt-6 text-xs text-[#6E6873] dark:border-[#3D3544] dark:text-[#BFB5C4]">
              Cliquez sur chaque projet pour consulter l’étude UX complète et tester son aperçu interactif.
            </p>
          </div>
        </section>

        {/* Manifesto Band — 03 Manifeste Créatif */}
        <section className="contain-paint relative overflow-hidden bg-[#2B2630] px-4 py-16 text-center text-white sm:px-6 sm:py-24 lg:py-32">
          <PolelOutlineFlower
            size={440}
            className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] animate-polel-spin-slow sm:h-[440px] sm:w-[440px]"
          />

          <div className="relative z-10 mx-auto max-w-3xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.24em] text-[#D8A8C0]">
              03 — Manifeste créatif
            </p>
            <h2 className="mt-5 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              « Le beau attire.{' '}
              <span className="text-[#F08AA1]">Le simple</span>
              <br />
              <span className="text-[#F08AA1]">reste.</span> »
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#D8CFD9] sm:text-base">
              Je crois aux expériences qui ont du sens, aux détails qui font la différence et aux
              idées qui méritent de fleurir.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4" aria-hidden="true">
              <span className="h-px w-14 bg-[#F08AA1]/35" />
              <PolelSymbol size={20} animated />
              <span className="h-px w-14 bg-[#F08AA1]/35" />
            </div>
          </div>
        </section>

        {/* Section 03: Compétences, Process & Parcours CV */}
        <ProcessAtelier soundEnabled={soundEnabled} />

        {/* Section 05: Échangeons — Contact */}
        <section
          id="contact"
          className="cv-auto-section border-t border-[#E6DEE7] bg-white px-4 py-16 text-center dark:border-[#3D3544] dark:bg-[#241F29] sm:px-6 sm:py-20 lg:py-28"
        >
          <div className="mx-auto max-w-3xl">
            <div className="inline-flex items-end justify-center gap-2.5">
              <span className="mb-2 inline-flex">
                <PolelSymbol size={36} animated />
              </span>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-[#945BA1] dark:text-[#E09FC7]">
                05 — Échangeons
              </p>
            </div>

            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-[#2B2630] dark:text-white sm:text-5xl">
              Une idée à faire éclore ?
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#544E58] dark:text-[#D5CCD9] sm:text-base">
              Parlons de vos idées, d’un projet ou d’une belle collaboration à imaginer.
            </p>

            <div className="mx-auto mt-8 flex max-w-xs flex-col items-center justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="mailto:mariemedia525@gmail.com?subject=Collaboration%20%2F%20Projet%20avec%20Marieme%20Dia"
                data-cursor-label="Envoyer"
                onClick={() => playSoftChime(587.33, soundEnabled)}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_28px_-8px_rgba(240,138,161,0.55)] transition-transform duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 sm:w-auto"
                style={{ background: 'linear-gradient(100deg, #945BA1 0%, #F08AA1 100%)' }}
              >
                <Mail className="h-4 w-4" />
                <span>Envoyer un e-mail</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor-label="LinkedIn"
                onClick={() => playSoftChime(523.25, soundEnabled)}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#E2D6E4] bg-white px-6 py-3.5 text-sm font-semibold text-[#2B2630] transition-colors hover:border-[#945BA1] hover:text-[#723F7F] dark:border-[#4A3F53] dark:bg-[#2B2630] dark:text-white dark:hover:border-[#F08AA1] whitespace-nowrap shrink-0 sm:w-auto"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href="/assets/aistudio/Marieme-Dia_UIUX_Designer__Designer_graphique__2__7ad57b79.pdf"
                download="CV-Marieme-Dia-UIUX-Designer.pdf"
                data-cursor-label="CV PDF"
                onClick={() => playSoftChime(659.25, soundEnabled)}
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#F3EDF6] px-6 py-3.5 text-sm font-semibold text-[#723F7F] transition-colors hover:bg-[#EAE0F0] dark:bg-[#342B3C] dark:text-[#E09FC7] dark:hover:bg-[#41364B] whitespace-nowrap shrink-0 sm:w-auto"
              >
                <Download className="h-4 w-4" />
                <span>Télécharger mon CV</span>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-[#6E6873] dark:text-[#BFB5C4]">
              <button
                type="button"
                onClick={handleCopyEmail}
                data-cursor-label="Copier"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#723F7F] dark:hover:text-[#F08AA1]"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#723F7F] dark:text-[#F08AA1]" />
                    <span>mariemedia525@gmail.com copiée</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>mariemedia525@gmail.com</span>
                  </>
                )}
              </button>
              <span aria-hidden="true">·</span>
              <a href="tel:+221776966864" className="hover:underline">
                +221 77 696 68 64
              </a>
              <span aria-hidden="true">·</span>
              <span>Thiaroye Gare, Dakar</span>
            </div>
          </div>
        </section>
      </main>

      {/* Clean Footer */}
      <footer className="border-t border-[#E6DEE7] bg-[#F7F5F6] py-10 dark:border-[#3D3544] dark:bg-[#1E1A22]">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-4 px-6 text-xs text-[#6E6873] dark:text-[#BFB5C4] sm:flex-row sm:items-center lg:px-10">
          <p className="font-display font-semibold tracking-wide text-[#2B2630] dark:text-white">
            MARIEME DIA · UNIVERS POLEL
          </p>
          <p>Simplon Pikine · UI/UX Design, Design Graphique &amp; Développement Web</p>
          <a href="#accueil" className="font-medium text-[#2B2630] hover:text-[#723F7F] dark:text-white dark:hover:text-[#F08AA1]">
            Haut de page ↑
          </a>
        </div>
      </footer>

      {/* Interactive Case Study & Live Prototype Modal (Lazy-loaded) */}
      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          soundEnabled={soundEnabled}
        />
      </Suspense>
    </div>
  );
}
