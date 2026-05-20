export default function Footer() {
  return (
    <footer className="border-t border-kairo-black/10 py-10 px-6 md:px-12 bg-kairo-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-kairo-black/70 tracking-wide">
          Kairo <span className="text-kairo-black/40">by</span> Anansi
        </p>
        <div className="flex items-center gap-6 text-[13px] text-kairo-black/60">
          <a href="https://anansi.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-kairo-red transition-colors">anansi.xyz</a>
          <a href="https://www.linkedin.com/in/davidanoel" target="_blank" rel="noopener noreferrer" className="hover:text-kairo-red transition-colors">LinkedIn</a>
          <a href="mailto:kairo@anansi.xyz" className="hover:text-kairo-red transition-colors">Contact</a>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto mt-6 pt-6 border-t border-kairo-black/[0.06]">
        <p className="text-[11px] text-kairo-black/40 tracking-wide">
          © {new Date().getFullYear()} Anansi Technology LLC · Miami, FL
        </p>
      </div>
    </footer>
  );
}
