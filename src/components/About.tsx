import { Code2, Coffee, Rocket, Heart } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '5+' },
  { icon: Rocket, label: 'Projects Shipped', value: '40+' },
  { icon: Coffee, label: 'Cups of Coffee', value: '∞' },
  { icon: Heart, label: 'Open Source Repos', value: '15+' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: heading & stats */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              ABOUT ME
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              Developer, designer, and lifelong learner.
            </h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              {portfolio.location}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-cyan-200 hover:shadow-sm transition-all"
                >
                  <stat.icon className="w-5 h-5 text-cyan-600 mb-2" />
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: bio */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-lg text-slate-700 leading-relaxed">
              {portfolio.about}
            </p>
            <div className="space-y-4">
              {portfolio.aboutLong.split('\n\n').map((para, i) => (
                <p key={i} className="text-slate-600 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
            <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-800 mb-1">What sets me apart</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{portfolio.whatMakesDifferent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
