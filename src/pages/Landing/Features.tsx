import Card from '../../components/Card';
import Container from '../../components/Container';

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
    <section id="features" className="py-20 sm:py-24 lg:py-32 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">Everything you need to create professional forms</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index}>
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
