export default function Footer() {
  return (
    <footer className="border-t border-kairo-black/10 py-10 px-6 md:px-12 bg-kairo-cream">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] text-kairo-black/65 tracking-wider">
        <div>
          Kairo by Anansi · © {new Date().getFullYear()} Anansi Technology LLC · Miami, FL
        </div>
        <div className="flex items-center gap-5">
          <a
            href="https://anansi.xyz"
            className="hover:text-kairo-red transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            anansi.xyz
          </a>
          <a
            href="https://www.linkedin.com/in/davidanoel"
            className="hover:text-kairo-red transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:david@anansi.xyz"
            className="hover:text-kairo-red transition-colors"
          >
            david@anansi.xyz
          </a>
        </div>
      </div>
    </footer>
  );
}
