import Container from '../../components/Container';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 to-slate-800">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-xl text-slate-300">Simple 3-step process to create your perfect form</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {[
            { num: 1, title: "Describe Your Form", desc: "Tell AI what form you want to create" },
            { num: 2, title: "AI Creates It", desc: "Watch as your form is generated in seconds" },
            { num: 3, title: "Customize & Deploy", desc: "Fine-tune the design and share with your audience" }
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
              <p className="text-slate-300 text-center">{step.desc}</p>
              {idx < 2 && (
                <div className="hidden md:block text-slate-500 text-3xl font-bold mt-8 -mr-8">→</div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
