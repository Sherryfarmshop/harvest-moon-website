export default function FooterBar() {
  return (
    <footer className="bg-[#F0EBE1] py-5 border-t border-[#D6CCBC]/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-[#8B7355] font-source">
          &copy; 2025 Harvest Moon Farm Shop
        </p>
        <div className="flex gap-8 text-[11px] text-[#8B7355] font-source uppercase tracking-[0.15em]">
          <a href="#farm" className="hover:text-[#3D2B1F] transition-colors">Our Farm</a>
          <a href="#shop" className="hover:text-[#3D2B1F] transition-colors">Shop (Opening 2027)</a>
          <a href="#farmstand" className="hover:text-[#3D2B1F] transition-colors">Farm Stand</a>
          <a href="#contact" className="hover:text-[#3D2B1F] transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}
