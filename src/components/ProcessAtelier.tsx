import { useState } from 'react';
import { Briefcase, Download, GraduationCap, Sparkles } from 'lucide-react';
import { EXPERIENCES, FORMATIONS, LANGUES, PROCESS_STEPS, QUALITES, TOOL_ITEMS } from '../data/projects';
import { playSoftChime } from '../utils/sound';
import { ToolIcon } from './ToolIcons';

interface ProcessAtelierProps {
  soundEnabled: boolean;
}

export default function ProcessAtelier({ soundEnabled }: ProcessAtelierProps) {
  const [activeStep, setActiveStep] = useState(0);
  const current = PROCESS_STEPS[activeStep];

  return (
    <section
      id="competences"
      className="mx-auto max-w-[1200px] px-6 py-16 lg:px-10 lg:py-24"
    >
      {/* Header matching reference */}
      <div className="max-w-2xl">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-[#723F7F] dark:text-[#E09FC7]">
          04 — Compétences
        </p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight text-[#2B2630] dark:text-white sm:text-5xl">
          Des compétences au service des idées.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-[#544E58] dark:text-[#CFC6D3] sm:text-base">
          Survolez ou sélectionnez un domaine pour explorer la manière dont j’aborde chaque étape
          de conception et de création.
        </p>
      </div>

      {/* 2-Column Layout matching reference screenshots */}
      <div className="mt-10 grid gap-8 sm:mt-12 lg:grid-cols-12 lg:items-start">
        {/* Left Column: 11 Interactive Skill Rows */}
        <div className="space-y-3 lg:col-span-7">
          {PROCESS_STEPS.map((step, index) => {
            const isSelected = activeStep === index;
            return (
              <div key={step.number}>
                <button
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => {
                    setActiveStep(index);
                    playSoftChime(440 + (index % 6) * 45, soundEnabled);
                  }}
                  data-cursor-label={step.number}
                  className={`flex w-full flex-wrap items-center justify-between gap-2 rounded-2xl border px-4 py-3.5 text-left transition-colors transition-transform duration-150 sm:flex-nowrap sm:gap-4 sm:px-5 sm:py-4 ${
                    isSelected
                      ? 'border-[#2B2630] bg-[#2B2630] text-white shadow-[0_14px_30px_-14px_rgba(43,38,48,0.45)] lg:translate-x-2 dark:border-[#945BA1] dark:bg-[#945BA1]'
                      : 'border-[#EAE1EC] bg-white text-[#2B2630] hover:border-[#D3BED8] dark:border-[#3D3544] dark:bg-[#2B2630] dark:text-white dark:hover:border-[#945BA1]/60'
                  }`}
                >
                  <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                    <span className="font-mono text-xs font-semibold tabular-nums text-[#F08AA1] shrink-0">
                      {step.number}
                    </span>
                    <span className="font-display text-sm font-semibold leading-snug sm:truncate sm:text-lg">
                      {step.title}
                    </span>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-[11px] font-medium whitespace-nowrap shrink-0 sm:px-3.5 sm:text-xs ${
                      isSelected
                        ? 'bg-white/10 text-[#F8C1BB] dark:bg-white/15 dark:text-white'
                        : 'bg-[#F7EFF9] text-[#8B5399] dark:bg-[#382E40] dark:text-[#E09FC7]'
                    }`}
                  >
                    {step.caption}
                  </span>
                </button>

                {/* Inline Note d'atelier drawer on mobile/tablet (<lg) so users see details immediately */}
                {isSelected && (
                  <div className="mt-2 rounded-2xl border border-[#E8D7EC] bg-white p-4 shadow-sm dark:border-[#4A3F53] dark:bg-[#2B2630] lg:hidden">
                    <p className="inline-flex items-center gap-1.5 font-serif-accent text-sm italic text-[#945BA1] dark:text-[#E09FC7]">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" />
                      <span>Note d’atelier</span>
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#4F4A53] dark:text-[#D5CCD9]">
                      {step.description}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2 border-t border-dashed border-[#E6DEE7] pt-3 dark:border-[#3D3544]">
                      {step.tools.map((toolName) => (
                        <div
                          key={toolName}
                          title={toolName}
                          aria-label={toolName}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#EAE1EC] bg-[#FAF8FB] dark:border-[#3D3544] dark:bg-[#221D27]"
                        >
                          <ToolIcon name={toolName} size={20} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column: Sticky Note d'atelier (desktop) + Icon-Only Toolbox */}
        <div className="space-y-6 lg:sticky lg:top-24 lg:col-span-5">
          {/* Card 1: Note d'atelier (desktop) */}
          <div className="hidden rounded-3xl border border-[#E8D7EC] bg-white p-7 shadow-[0_14px_34px_-18px_rgba(148,91,161,0.16)] dark:border-[#4A3F53] dark:bg-[#2B2630] lg:block">
            <p className="inline-flex items-center gap-2 font-serif-accent text-base italic text-[#945BA1] dark:text-[#E09FC7]">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span>Note d’atelier</span>
            </p>

            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-[#2B2630] dark:text-white">
              {current.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-[#4F4A53] dark:text-[#D5CCD9]">
              {current.description}
            </p>

            <div className="my-6 border-t border-dashed border-[#E6DEE7] dark:border-[#3D3544]" />

            <p className="text-xs font-medium text-[#945BA1] dark:text-[#E09FC7]">
              Outils associés :
            </p>

            {/* Icon-only associated tools */}
            <div className="mt-3 flex flex-wrap items-center gap-2.5">
              {current.tools.map((toolName) => (
                <div
                  key={toolName}
                  title={toolName}
                  aria-label={toolName}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAE1EC] bg-[#FAF8FB] transition-transform duration-150 hover:-translate-y-0.5 dark:border-[#3D3544] dark:bg-[#221D27]"
                >
                  <ToolIcon name={toolName} size={24} />
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Boîte à outils créative & technique (Icon-only tiles) */}
          <div className="rounded-3xl border border-[#EFE3F1] bg-[#F7EDF6] p-5 dark:border-[#3D3544] dark:bg-[#2E2535] sm:p-7">
            <h3 className="font-display text-base font-bold text-[#2B2630] dark:text-white sm:text-lg">
              Boîte à outils créative &amp; technique
            </h3>

            <div className="mt-4 grid grid-cols-5 gap-2 sm:mt-5 sm:gap-3">
              {TOOL_ITEMS.map((tool) => {
                const isActiveTool = current.tools.includes(tool.name);
                return (
                  <div
                    key={tool.name}
                    title={tool.name}
                    aria-label={tool.name}
                    className={`flex h-11 items-center justify-center rounded-xl bg-white shadow-[0_4px_12px_-6px_rgba(43,38,48,0.12)] transition-all duration-150 hover:-translate-y-0.5 dark:bg-[#241F29] sm:h-12 ${
                      isActiveTool
                        ? 'ring-2 ring-[#945BA1] dark:ring-[#F08AA1]'
                        : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <ToolIcon name={tool.name} size={24} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Authentic CV Section: Expériences, Formations & Qualités */}
      <div className="mt-16 border-t border-[#E6DEE7] pt-14 dark:border-[#3D3544]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#723F7F] dark:text-[#E09FC7]">
              Parcours &amp; CV
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold text-[#2B2630] dark:text-white">
              Expériences &amp; Formations
            </h3>
          </div>

          <a
            href="/assets/aistudio/Marieme-Dia_UIUX_Designer__Designer_graphique__2__7ad57b79.pdf"
            download="CV-Marieme-Dia-UIUX-Designer.pdf"
            data-cursor-label="CV PDF"
            onClick={() => playSoftChime(659.25, soundEnabled)}
            className="inline-flex items-center gap-2 rounded-xl bg-[#F3EDF6] px-4 py-2.5 text-xs font-semibold text-[#723F7F] transition-colors hover:bg-[#EAE0F0] dark:bg-[#342B3C] dark:text-[#E09FC7] dark:hover:bg-[#41364B] whitespace-nowrap shrink-0"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Télécharger mon CV (PDF)</span>
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Expériences */}
          <div>
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#723F7F] dark:text-[#E09FC7]">
              <Briefcase className="h-3.5 w-3.5" />
              <span>Expériences &amp; Projets clés</span>
            </p>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div
                  key={exp.role}
                  className="rounded-xl border border-[#E6DEE7] bg-white p-5 dark:border-[#3D3544] dark:bg-[#2B2630]"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-base font-semibold text-[#2B2630] dark:text-white">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-[11px] text-[#723F7F] dark:text-[#F08AA1]">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-0.5 text-xs font-medium text-[#6E6873] dark:text-[#BFB5C4]">{exp.org}</p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-[#544E58] dark:text-[#D5CCD9]">
                    {exp.highlights.map((h) => (
                      <li key={h}>· {h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-[#723F7F] dark:text-[#E09FC7]">
              <GraduationCap className="h-3.5 w-3.5" />
              <span>Formations &amp; Certifications</span>
            </p>
            <div className="divide-y divide-[#E6DEE7] rounded-xl border border-[#E6DEE7] bg-white dark:divide-[#3D3544] dark:border-[#3D3544] dark:bg-[#2B2630]">
              {FORMATIONS.map((f) => (
                <div key={f.title} className="flex flex-col justify-between gap-1 p-4 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-sm font-semibold text-[#2B2630] dark:text-white">{f.title}</p>
                    <p className="text-xs text-[#6E6873] dark:text-[#BFB5C4]">{f.place}</p>
                  </div>
                  <span className="font-mono text-[11px] tabular-nums text-[#723F7F] dark:text-[#E09FC7] shrink-0">
                    {f.period}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Qualités & Langues strip from CV */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#EFE8F0] pt-6 text-xs text-[#544E58] dark:border-[#3D3544] dark:text-[#CFC6D3]">
          <p>
            <span className="font-mono uppercase tracking-wider text-[#723F7F] dark:text-[#E09FC7]">
              Qualités :
            </span>{' '}
            {QUALITES.join(' · ')}
          </p>
          <p>
            <span className="font-mono uppercase tracking-wider text-[#723F7F] dark:text-[#E09FC7]">
              Langues :
            </span>{' '}
            {LANGUES.join(' · ')}
          </p>
        </div>
      </div>
    </section>
  );
}
