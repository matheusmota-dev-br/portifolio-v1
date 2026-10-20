import type { ReactNode } from "react";
import {
  Collection,
  IconList,
  ProjectTile,
  ResumeEntry,
  ResumeIntro,
  ResumeSection,
  ResumeTemplate,
  SkillPills,
  iconMap,
  type SocialLink,
} from "@matheusmota-dev-br/ui";
import {
  awards,
  education,
  experiences,
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

const [firstName, lastName] = profile.name.split(" ");

/** Subtítulo de bloco (mono, primária) — o `.subheading` do layout original. */
function Subheading({ children }: { children: ReactNode }) {
  return <h3 className="mb-3 font-mono text-base font-semibold text-primary">{children}</h3>;
}

function Link({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary">
      {children}
    </a>
  );
}

export function App() {
  return (
    <ResumeTemplate sidebar={{ name: profile.name, photoSrc: profile.photoSrc, photoAlt: "photo of matheus smile", navItems }}>
      <ResumeSection id="about" align="center">
        <ResumeIntro
          firstName={firstName}
          lastName={lastName}
          job={profile.job}
          contact={[
            profile.location,
            profile.phone,
            <a key="email" href={`mailto:${profile.email}`} className="hover:text-secondary">
              {profile.email}
            </a>,
          ]}
          summary={profile.summary}
          actions={[
            { label: "download cv [en-us]", href: profile.cvEnHref, primary: true },
            { label: "download cv [pt-br]", href: profile.cvPtHref, primary: true },
            { label: "view cv", href: profile.cvOnlineHref, external: true },
            { label: "research", href: profile.researchHref, external: true },
          ]}
          social={socialLinks}
        />
      </ResumeSection>

      <ResumeSection id="experience" title="Experience">
        {experiences.map((item) => (
          <ResumeEntry key={item.title + item.sub_title} {...item} />
        ))}
      </ResumeSection>

      <ResumeSection id="education" title="Education" align="center">
        {education.map((item) => (
          <ResumeEntry key={item.title} {...item} />
        ))}
      </ResumeSection>

      <ResumeSection id="skills" title="Skills" align="center">
        <Subheading>Languages &amp; Tools</Subheading>
        <SkillPills skills={toolSkills} className="mb-8" />
        <Subheading>Workflow</Subheading>
        <IconList items={workflow} />
      </ResumeSection>

      <ResumeSection id="projects" title="Projects" align="center">
        <Collection
          items={projects}
          as="div"
          layout="grid"
          columns={3}
          gap="md"
          getKey={(project) => project.url}
          renderItem={(project) => <ProjectTile {...project} />}
        />
      </ResumeSection>

      <ResumeSection id="interests" title="Interests" align="center">
        {interests.paragraphs.map((p) => (
          <p key={p} className="mb-4 leading-relaxed">
            {p}
          </p>
        ))}
        <ul className="list-disc space-y-1 pl-6 font-semibold text-default">
          {interests.courses.map((course) => (
            <li key={course}>{course}</li>
          ))}
        </ul>
      </ResumeSection>

      <ResumeSection id="lectures" title="Lectures" align="center">
        <p className="mb-6">{lectures.intro}</p>
        {lectures.items.map((lecture) => (
          <div key={lecture.href} className="mb-4">
            <a
              href={lecture.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono font-semibold text-primary hover:text-secondary"
            >
              {lecture.title}
            </a>
            <p>{lecture.description}</p>
          </div>
        ))}
      </ResumeSection>

      <ResumeSection id="awards" title="Awards & Certifications" align="center">
        <IconList
          icon="trophy"
          items={awards.map((award) => (
            <>
              {award.href ? <Link href={award.href}>{award.title}</Link> : award.title}
              {award.certificateHref && (
                <>
                  {" - "}
                  <Link href={award.certificateHref}>Certificado</Link>
                </>
              )}
            </>
          ))}
        />
      </ResumeSection>
    </ResumeTemplate>
  );
}
