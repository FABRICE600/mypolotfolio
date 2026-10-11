import { Code2, Layout, Server, Smartphone } from 'lucide-react';
import { services } from '@/data/portfolio';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code: Code2,
  layout: Layout,
  server: Server,
  smartphone: Smartphone,
};

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
            SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What I can do for you
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            From concept to launch, I offer end-to-end development services tailored to your needs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Code2;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-xl transition-all animate-[fadeInUp_0.5s_ease-out_both]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-2 text-lg">{service.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                    <ul className="space-y-1.5">
                      {service.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className="w-1 h-1 rounded-full bg-cyan-500" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
