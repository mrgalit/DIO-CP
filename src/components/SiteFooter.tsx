export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-sm text-mist">
      <div className="wrap flex flex-wrap justify-between gap-4 py-7">
        <span>© {new Date().getFullYear()} DIO Capital Partners. All rights reserved.</span>
        <span className="label">Independent sponsor</span>
      </div>
    </footer>
  );
}
