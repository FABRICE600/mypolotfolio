import { useState } from 'react';
import { Github, ExternalLink, ArrowLeft, CheckCircle2, X } from 'lucide-react';
import { projects, type Project } from '@/data/portfolio';

const categories = ['All', 'Web App', 'Dashboard', 'Developer Tool', 'Mobile/Web', 'Analytics'];

const projectGradients: Record<string, string> = {
  taskflow: 'from-cyan-500 to-blue-600',
  devboard: 'from-violet-500 to-purple-600',
  snippetvault: 'from-emerald-500 to-teal-600',
  weatherlite: 'from-amber-500 to-orange-600',
  learnsphere: 'from-rose-500 to-pink-600',
  pulse: 'from-blue-500 to-indigo-600',
};

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            PORTFOLIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A selection of things I've built. Click any project to learn more.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all bg-white cursor-pointer animate-[fadeInUp_0.4s_ease-out_both]"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => setSelected(project)}
            >
              {/* Project thumbnail */}
              <div className={`h-44 bg-gradient-to-br ${projectGradients[project.id] || 'from-slate-400 to-slate-600'} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
                  backgroundSize: '24px 24px',
                }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl tracking-tight opacity-90">
                    {project.name}
                  </span>
                </div>
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Project info */}
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                  {project.name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-500 text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <span className="ml-auto text-xs text-slate-400 font-medium">
                    {new Date(project.date + '-01').toLocaleDateString('en-US', { year: 'numeric', month: 'short' })}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} gradient={projectGradients[selected.id] || 'from-slate-400 to-slate-600'} />
      )}
    </section>
  );
}

function ProjectModal({
  project,
  onClose,
  gradient,
}: {
  project: Project;
  onClose: () => void;
  gradient: string;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 animate-[fadeIn_0.15s_ease-out]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl animate-[slideUp_0.25s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`h-36 bg-gradient-to-br ${gradient} relative flex items-center justify-center`}>
          <span className="text-white font-bold text-3xl tracking-tight opacity-90">
            {project.name}
          </span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">{project.category}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.name}</h3>
            <p className="text-slate-600 leading-relaxed">{project.longDescription}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Features</h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
              <h4 className="text-sm font-semibold text-amber-900 mb-1">Challenge</h4>
              <p className="text-sm text-amber-700 leading-relaxed">{project.challenge}</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100">
              <h4 className="text-sm font-semibold text-emerald-900 mb-1">Solution</h4>
              <p className="text-sm text-emerald-700 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
