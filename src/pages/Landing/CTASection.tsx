import Button from '../../components/Button';
import Container from '../../components/Container';

export default function CTASection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-pink-500">
      <Container>
        <div className="text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Ready to Transform Your Forms?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands of businesses creating smarter forms with AI
          </p>
          <Button variant="primary" size="lg" className="bg-white text-indigo-600 hover:bg-slate-100">
            Get Started Free Today
          </Button>
        </div>
      </Container>
    </section>
  );
}
