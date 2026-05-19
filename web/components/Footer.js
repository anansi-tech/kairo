export default function Footer() {
  return (
    <footer className="border-t border-anansi-espresso/10 py-6 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto text-[12px] text-anansi-espresso/65 tracking-wider">
        Kairo by Anansi · © {new Date().getFullYear()} Anansi Technology LLC · Miami, FL
      </div>
    </footer>
  );
}
