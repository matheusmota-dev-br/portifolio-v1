import type { ReactNode } from "react";
import {
  CardList,
  Container,
  ExternalLinkIcon,
  HeroTerminal,
  Portfolio,
  SectionComment,
  SiteShell,
  iconMap,
  type SocialLink,
} from "@matheusmota-dev-br/ui";
import {
  awards,
  education,
  experiences,
  footerPages,
  interests,
  lectures,
  navItems,
  profile,
  projects,
  social,
  toolSkills,
  workflow,
} from "./content";

const socialLinks: SocialLink[] = social.map((s) => {
  const Icon = iconMap[s.icon];
  return { title: s.title, url: s.url, icon: Icon ? <Icon /> : null };
});

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary underline-offset-4 hover:underline"
    >
      {children}
      <ExternalLinkIcon className="h-3.5 w-3.5" />
    </a>
  );
}

/** Seção de texto com o cabeçalho `# label` do DS e uma âncora do menu. */
function TextSection({ id, label, children }: { id: string; label: string; children: ReactNode }) {
  return (
    <Container as="section" className="py-8">
      <div id={id}>
        <SectionComment label={label} />
        <div className="max-w-3xl space-y-4 leading-relaxed">{children}</div>
      </div>
    </Container>
  );
}

export function App() {
  return (
    <SiteShell
      name={profile.name}
      navItems={navItems}
      footerPages={footerPages}
      social={socialLinks}
      terminalHref={profile.terminalHref}
      researchHref={profile.researchHref}
      researchLabel="Research"
    >
      <div id="about">
        <HeroTerminal
          name={profile.name}
          job={profile.job}
          summary={profile.summary}
          photoSrc={profile.photoSrc}
          skills={toolSkills}
          phrase={profile.phrase}
          cvDownloadHref={profile.cvEnHref}
          cvDownloadLabel="download cv [en-us]"
          cvDownloadAltHref={profile.cvPtHref}
          cvDownloadAltLabel="download cv [pt-br]"
          cvOnlineHref={profile.cvOnlineHref}
          cvOnlineLabel="view cv"
          social={socialLinks}
        />
      </div>

      <Container as="section" className="py-8">
        <div id="experience" className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="mb-12 lg:mb-0 lg:w-1/2">
            <CardList title="Experience" items={experiences} header={<SectionComment label="Experience" />} />
          </div>
          <div className="lg:w-1/2">
            <CardList title="Education" items={education} header={<SectionComment label="Education" />} />
          </div>
        </div>
      </Container>

      <TextSection id="workflow" label="Workflow">
        <ul className="list-disc space-y-1 pl-5 text-offset">
          {workflow.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </TextSection>

      <div id="projects">
        <Portfolio title="Projects" projects={projects} header={<SectionComment label="Projects" />} />
      </div>

      <TextSection id="interests" label="Interests">
        {interests.paragraphs.map((p) => (
          <p key={p} className="text-offset">
            {p}
          </p>
        ))}
        <ul className="list-disc space-y-1 pl-5 font-semibold">
          {interests.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </TextSection>

      <TextSection id="lectures" label="Lectures">
        <p className="text-offset">{lectures.intro}</p>
        <ul className="space-y-4">
          {lectures.items.map((lecture) => (
            <li key={lecture.href}>
              <ExternalLink href={lecture.href}>{lecture.title}</ExternalLink>
              <p className="text-offset">{lecture.description}</p>
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection id="awards" label="Awards & Certifications">
        <ul className="space-y-2">
          {awards.map((award) => (
            <li key={award.title} className="flex flex-wrap items-center gap-x-3">
              {award.href ? <ExternalLink href={award.href}>{award.title}</ExternalLink> : <span>{award.title}</span>}
              {award.certificateHref && (
                <ExternalLink href={award.certificateHref}>
                  <span className="text-sm">certificate</span>
                </ExternalLink>
              )}
            </li>
          ))}
        </ul>
      </TextSection>

      <TextSection id="contact" label="Contact">
        <p className="text-offset">
          {profile.location} · {profile.phone} ·{" "}
          <a href={`mailto:${profile.email}`} className="text-primary underline-offset-4 hover:underline">
            {profile.email}
          </a>
        </p>
      </TextSection>
    </SiteShell>
  );
}
