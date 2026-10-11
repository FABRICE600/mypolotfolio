import { ArrowDown, Download, Github, Linkedin, Twitter, Mail, Facebook, Instagram } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

export default function Hero() {
  const socials = [
    { icon: Github, href: portfolio.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolio.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolio.social.twitter, label: 'Twitter' },
    { icon: Facebook, href: portfolio.social.facebook, label: 'Facebook' },
    { icon: Instagram, href: portfolio.social.instagram, label: 'Instagram' },
    { icon: Mail, href: `mailto:${portfolio.email}`, label: 'Email' },
  ].filter((s) => s.href);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" style={{ animation: 'blobFloat 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" style={{ animation: 'blobFloat 10s ease-in-out infinite', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-3xl" style={{ animation: 'blobFloat 12s ease-in-out infinite', animationDelay: '2s' }} />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20 pb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 animate-[fadeInUp_0.6s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-slate-300">{portfolio.availability}</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 animate-[fadeInUp_0.7s_ease-out]">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">{portfolio.preferredName}</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-3 animate-[fadeInUp_0.8s_ease-out]">
          {portfolio.title}
        </p>

        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed animate-[fadeInUp_0.9s_ease-out]">
          {portfolio.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-[fadeInUp_1s_ease-out]">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold hover:shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105"
          >
            View My Work
            <ArrowDown className="w-4 h-4" />
          </button>
          {portfolio.resumeUrl && (
            <a
              href={portfolio.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          )}
        </div>

        <div className="flex items-center justify-center gap-3 animate-[fadeInUp_1.1s_ease-out] flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all hover:scale-110"
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
}
