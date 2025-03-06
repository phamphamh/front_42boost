'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Code2, Users, PiggyBank, Rocket, Linkedin } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [currentArgument, setCurrentArgument] = useState(0);

  const features = [
    {
      icon: <Code2 className="h-8 w-8 text-blue-600" />,
      title: "Expertise 42",
      description: "Nos développeurs sont formés à 42, l'une des meilleures écoles d'informatique au monde, avec un apprentissage en peer-learning basé sur des projets concrets.",
      color: "bg-blue-50/50"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Juniors bons et appliqués",
      description: "Nous sélectionnons les meilleurs talents, passionnés et rigoureux, garantissant un travail de qualité, dans le respect des délais.",
      color: "bg-green-50/50"
    },
    {
      icon: <PiggyBank className="h-8 w-8 text-yellow-600" />,
      title: "Prix imbattable",
      description: "Profitez d'un service professionnel à un prix compétitif, adapté aux startups et entreprises en quête d'excellence technique.",
      color: "bg-yellow-50/50"
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-600" />,
      title: "Collaboration avec les talents de demain",
      description: "Nos développeurs sont à l'affût des nouvelles technologies et maîtrisent le front-end, le back-end, l'IA, la data et les infrastructures serveur.",
      color: "bg-purple-50/50"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentArgument((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 glass-effect z-50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 text-white p-2 rounded-xl">
              <Code2 className="h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight">42 Boost</span>
          </div>
          <Button 
            onClick={scrollToContact}
            className="font-medium hover:bg-blue-50"
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            L'expertise 42 au service de vos projets
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Une équipe de développeurs talentueux, formés à l'école 42, 
            prête à transformer vos idées en solutions technologiques innovantes.
          </p>
          <Button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
          >
            Démarrer votre projet
          </Button>
        </div>
      </section>

      {/* Arguments Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Pourquoi choisir 42 Boost ?
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div 
                className="transition-all duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentArgument * 100}%)`,
                  display: 'flex'
                }}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`w-full flex-shrink-0 ${feature.color} rounded-2xl p-10 transition-all duration-300`}
                    style={{ minWidth: '100%' }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 rounded-2xl bg-white shadow-md mb-8">
                        {feature.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-8">
              {features.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentArgument === index ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentArgument(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contactez-nous
          </h2>
          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-700">
                Envoyer
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 text-white p-2 rounded-xl">
                <Code2 className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">42 Boost</span>
            </div>
            <a 
              href="https://www.linkedin.com/company/105804485"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span>Suivez-nous sur LinkedIn</span>
            </a>
            <div className="text-center space-y-2">
              <p className="text-gray-600">
                La Junior-Entreprise de l'école 42
              </p>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} 42 Boost. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}