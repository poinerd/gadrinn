import Container from '../../components/Container';

export default function Footer() {
  const sections = [
    {
      title: "FormAI",
      items: [
        { label: "Making form creation effortless with AI", isDescription: true }
      ]
    },
    {
      title: "Product",
      items: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Templates", href: "#templates" }
      ]
    },
    {
      title: "Company",
      items: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" }
      ]
    },
    {
      title: "Legal",
      items: [
        { label: "Privacy", href: "#privacy" },
        { label: "Terms", href: "#terms" },
        { label: "Contact", href: "#contact" }
      ]
    }
  ];

  return (
    <footer className="bg-slate-900 text-white py-12 sm:py-16">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-700">
          {sections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-bold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIdx) => (
                  'href' in item ? (
                    <li key={itemIdx}>
                      <a href={item.href} className="text-slate-400 hover:text-indigo-400 transition-colors text-sm">
                        {item.label}
                      </a>
                    </li>
                  ) : (
                    <li key={itemIdx} className="text-slate-400 text-sm">{item.label}</li>
                  )
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center text-slate-400 text-sm">
          <p>&copy; 2026 FormAI. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
