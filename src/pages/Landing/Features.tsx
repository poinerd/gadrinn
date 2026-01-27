export default function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Generation",
      description: "Describe your form in plain English, and AI creates it instantly"
    },
    {
      icon: "🎨",
      title: "Drag & Drop Editor",
      description: "Easy-to-use interface to customize every aspect of your form"
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "Track submissions, completion rates, and user behavior"
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with GDPR & CCPA"
    },
    {
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect with Zapier, Webhooks, Google Sheets, and 500+ apps"
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Forms automatically adapt to any device or screen size"
    }
  ];

  return (
    <section id="features" className="features">
      <h2>Powerful Features</h2>
      <p className="section-subtitle">Everything you need to create professional forms</p>
      
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
