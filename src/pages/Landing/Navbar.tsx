import Button from '../../components/Button';
import Container from '../../components/Container';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <Container className="flex justify-between items-center h-16">
        <div className="flex items-center gap-2">
          <span className="text-2xl">⚡</span>
          <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
            FormAI
          </span>
        </div>
        
        <ul className="hidden md:flex items-center gap-8">
          <li><a href="#features" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Features</a></li>
          <li><a href="#how-it-works" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">How It Works</a></li>
          <li><a href="#pricing" className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Pricing</a></li>
          <li><Button size="sm">Sign In</Button></li>
        </ul>
      </Container>
    </nav>
  );
}
