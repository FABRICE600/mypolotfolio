import { useState } from 'react';
import { skills } from '@/data/portfolio';

const categories = [
  { key: 'frontend', label: 'Frontend', icon: '🎨' },
  { key: 'backend', label: 'Backend', icon: '⚙️' },
  { key: 'database', label: 'Database', icon: '🗄️' },
  { key: 'tools', label: 'Tools', icon: '🔧' },
  { key: 'other', label: 'Other', icon: '✨' },
] as const;

type CategoryKey = typeof categories[number]['key'];

export default function Skills() {
  const [active, setActive] = useState<CategoryKey>('frontend');
  const activeSkills = skills[active];

  return (
    <section id="skills" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            SKILLS & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What I work with
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A comprehensive toolkit built over years of shipping production software.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                active === cat.key
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5 max-w-4xl mx-auto">
          {activeSkills.map((skill, i) => (
            <div
              key={skill.name}
              className="animate-[fadeInUp_0.4s_ease-out_both]"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">{skill.name}</span>
                <span className="text-xs font-medium text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
