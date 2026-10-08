import { ArrowUp, Github, Linkedin, Twitter, Heart } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export default function Footer() {
  const socials = [
    { icon: Github, href: portfolio.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolio.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolio.social.twitter, label: 'Twitter' },
  ].filter((s) => s.href);

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-xs">
              {portfolio.name.split(' ').map((w) => w[0]).join('')}
            </div>
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} {portfolio.name}. Built with
              <Heart className="inline w-3.5 h-3.5 text-rose-400 mx-1" />
              and React.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
