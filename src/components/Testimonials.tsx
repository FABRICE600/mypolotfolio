import { Quote } from 'lucide-react';
import { testimonials } from '@/data/portfolio';

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            TESTIMONIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What people say
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow animate-[fadeInUp_0.5s_ease-out_both]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-cyan-200 mb-3" />
              <p className="text-sm text-slate-600 leading-relaxed mb-5 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.split(' ').map((w) => w[0]).join('')}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.position} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
