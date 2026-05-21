export default function Footer() {
  return (
    <footer className="border-t border-kairo-black/10 py-8 px-6 md:px-12 bg-kairo-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] tracking-wide">
        <p className="text-kairo-black/50">
          Kairo <span className="text-kairo-black/30">by</span> Anansi
          <span className="text-kairo-black/25 mx-2">·</span>
          © {new Date().getFullYear()} Anansi Technology LLC
        </p>
        <div className="flex items-center gap-5 text-kairo-black/85">
          <a href="https://anansi.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-kairo-red transition-colors">anansi.xyz</a>
          <a href="https://www.linkedin.com/in/davidanoel" target="_blank" rel="noopener noreferrer" className="hover:text-kairo-red transition-colors">LinkedIn</a>
          <a href="#cta" className="hover:text-kairo-red transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
