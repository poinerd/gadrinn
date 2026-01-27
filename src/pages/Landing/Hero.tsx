import Button from '../../components/Button';
import Container from '../../components/Container';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-blue-50 pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pt-48 lg:pb-32">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fadeInLeft">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
              Create Intelligent
            </span>
            {' '}
            <span className="text-slate-900">Forms with AI</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed">
            Generate, customize, and deploy forms in seconds using artificial intelligence. No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" size="lg">Start Building Free</Button>
            <Button variant="secondary" size="lg">Watch Demo</Button>
          </div>
          
          <p className="text-slate-600">✨ No credit card required • 100% free trial</p>
        </div>

        <div className="relative animate-fadeInRight">
          <div className="bg-white rounded-xl shadow-2xl p-8 space-y-4 border border-slate-200">
            <div className="h-12 bg-gradient-to-r from-slate-200 to-transparent rounded-lg animate-pulse"></div>
            <div className="h-12 bg-gradient-to-r from-slate-200 to-transparent rounded-lg animate-pulse"></div>
            <div className="h-12 bg-gradient-to-r from-slate-200 to-transparent rounded-lg animate-pulse"></div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl"></div>
        </div>
      </Container>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInLeft { animation: fadeInLeft 0.8s ease-out; }
        .animate-fadeInRight { animation: fadeInRight 0.8s ease-out; }
      `}</style>
    </section>
  );
}
