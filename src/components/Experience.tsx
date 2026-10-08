import { Briefcase, GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { experience, education, certifications, achievements } from '@/data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Experience & Education
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-cyan-600" />
              <h3 className="text-lg font-bold text-slate-900">Work Experience</h3>
            </div>
            <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-slate-200">
              {experience.map((job, i) => (
                <div key={i} className="relative animate-[fadeInUp_0.5s_ease-out_both]" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="absolute -left-[1.6rem] top-1 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-cyan-100" />
                  <div className="p-5 rounded-xl bg-white border border-slate-200 hover:shadow-sm transition-shadow">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-slate-900">{job.position}</h4>
                      <span className="text-xs font-medium text-slate-400 whitespace-nowrap ml-2">
                        {job.startDate} — {job.endDate}
                      </span>
                    </div>
                    <p className="text-sm text-cyan-600 font-medium mb-1">{job.company}</p>
                    <p className="text-xs text-slate-400 mb-3">{job.location}</p>
                    <ul className="space-y-1.5 mb-3">
                      {job.responsibilities.map((r, j) => (
                        <li key={j} className="text-sm text-slate-600 flex items-start gap-2 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {job.technologies.map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education + Certifications */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <GraduationCap className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900">Education</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white border border-slate-200">
                    <h4 className="font-bold text-slate-900">{edu.degree}</h4>
                    <p className="text-sm text-cyan-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-xs text-slate-400 mb-3">{edu.location} · {edu.startYear} — {edu.endYear}</p>
                    {edu.achievements.length > 0 && (
                      <div className="mb-3">
                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Achievements</p>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.achievements.map((a) => (
                            <span key={a} className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 text-xs font-medium">
                              {a}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5">Relevant Courses</p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.courses.map((c) => (
                          <span key={c} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <BadgeCheck className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl bg-white border border-slate-200 hover:shadow-sm transition-shadow"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                        <Award className="w-4 h-4 text-cyan-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-800">{cert.name}</p>
                        <p className="text-xs text-slate-400">{cert.org} · {cert.date}</p>
                      </div>
                    </div>
                    {cert.url && (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-xs text-cyan-600 font-medium hover:underline">
                        Verify
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-6">
                <Award className="w-5 h-5 text-cyan-600" />
                <h3 className="text-lg font-bold text-slate-900">Achievements</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {achievements.map((ach, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white border border-slate-200">
                    <p className="text-sm font-semibold text-slate-800 mb-1">{ach.title}</p>
                    <p className="text-xs text-slate-400 mb-2">{ach.org} · {ach.date}</p>
                    <p className="text-xs text-slate-500 leading-relaxed">{ach.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
