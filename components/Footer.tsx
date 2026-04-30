export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl text-cream mb-3">My Restaurant</h3>
            <p className="text-sm">Authentic flavors, unforgettable moments.</p>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-3">Visit Us</h4>
            <p className="text-sm">Multiple locations to serve you better.</p>
          </div>
          <div>
            <h4 className="font-semibold text-cream mb-3">Hours</h4>
            <p className="text-sm">Check our locations page for hours.</p>
          </div>
        </div>
        <div className="border-t border-cream/10 mt-8 pt-6 text-center text-sm">
          © {new Date().getFullYear()} My Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
}