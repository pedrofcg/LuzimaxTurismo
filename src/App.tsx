import React from 'react';
import { MapPin, Sun, Plane, Hotel, Car, Menu, X, Mail, Phone, MapPinIcon } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Sun className="h-8 w-8 text-[#FFD700]" />
                <MapPin className="h-8 w-8 text-[#6EC3E0] -ml-2" />
                <span className="ml-2 text-2xl font-light text-gray-800">Luzimax Turismo</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#destinations" className="text-gray-600 hover:text-[#6EC3E0]">Destinos</a>
              <a href="#packages" className="text-gray-600 hover:text-[#6EC3E0]">Pacotes</a>
              <a href="#about" className="text-gray-600 hover:text-[#6EC3E0]">Sobre Nós</a>
              <a href="#contact" className="text-gray-600 hover:text-[#6EC3E0]">Contato</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#destinations" className="block px-3 py-2 text-gray-600 hover:text-[#6EC3E0]">Destinos</a>
              <a href="#packages" className="block px-3 py-2 text-gray-600 hover:text-[#6EC3E0]">Pacotes</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-[#6EC3E0]">Sobre Nós</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-[#6EC3E0]">Contato</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80"
            alt="Beautiful beach destination"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
            Descubra o mundo com<br />
            <span className="font-normal">Luzimax Turismo</span>
          </h1>
          <p className="mt-6 text-xl text-gray-100 max-w-3xl">
            Explore destinos incríveis e viva experiências únicas com nossos pacotes personalizados.
          </p>
          <div className="mt-10">
            <a
              href="#packages"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#6EC3E0] hover:bg-[#5BA3C0] transition-colors duration-300"
            >
              Ver Pacotes
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900">Nossos Serviços</h2>
          <p className="mt-4 text-lg text-gray-600">Oferecemos soluções completas para sua viagem</p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#6EC3E0] bg-opacity-10">
              <Plane className="h-8 w-8 text-[#6EC3E0]" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Passagens Aéreas</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Encontre as melhores ofertas em voos nacionais e internacionais.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#FFD700] bg-opacity-10">
              <Hotel className="h-8 w-8 text-[#FFD700]" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Hospedagem</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Hotéis e resorts selecionados para sua melhor experiência.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-[#6EC3E0] bg-opacity-10">
              <Car className="h-8 w-8 text-[#6EC3E0]" />
            </div>
            <h3 className="mt-6 text-lg font-medium text-gray-900">Transporte</h3>
            <p className="mt-2 text-base text-gray-600 text-center">
              Aluguel de carros e transfers para sua comodidade.
            </p>
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div id="destinations" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900">Destinos Populares</h2>
            <p className="mt-4 text-lg text-gray-600">Conheça alguns dos nossos destinos mais procurados</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Paris"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-medium">Paris</h3>
                  <p className="text-gray-200">França</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Rio de Janeiro"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-medium">Rio de Janeiro</h3>
                  <p className="text-gray-200">Brasil</p>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Tokyo"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-medium">Tokyo</h3>
                  <p className="text-gray-200">Japão</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Packages Section */}
      <div id="packages" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900">Pacotes em Destaque</h2>
            <p className="mt-4 text-lg text-gray-600">Escolha o pacote perfeito para sua próxima viagem</p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Paris Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Paris Romântica</h3>
                <p className="mt-2 text-gray-600">7 dias / 6 noites</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Plane className="h-4 w-4 mr-2" />
                    Passagem aérea ida e volta
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Hotel className="h-4 w-4 mr-2" />
                    Hotel 4 estrelas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Car className="h-4 w-4 mr-2" />
                    Transfers inclusos
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-semibold text-[#6EC3E0]">R$ 8.999</span>
                  <span className="text-gray-600">/pessoa</span>
                </div>
                <button className="mt-4 w-full bg-[#6EC3E0] text-white py-2 px-4 rounded-md hover:bg-[#5BA3C0] transition-colors duration-300">
                  Reservar Agora
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1528127269322-539801943592?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Rio Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Rio de Janeiro</h3>
                <p className="mt-2 text-gray-600">5 dias / 4 noites</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Plane className="h-4 w-4 mr-2" />
                    Passagem aérea ida e volta
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Hotel className="h-4 w-4 mr-2" />
                    Hotel 5 estrelas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Car className="h-4 w-4 mr-2" />
                    Transfers inclusos
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-semibold text-[#6EC3E0]">R$ 3.499</span>
                  <span className="text-gray-600">/pessoa</span>
                </div>
                <button className="mt-4 w-full bg-[#6EC3E0] text-white py-2 px-4 rounded-md hover:bg-[#5BA3C0] transition-colors duration-300">
                  Reservar Agora
                </button>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Tokyo Package"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-medium text-gray-900">Tokyo Express</h3>
                <p className="mt-2 text-gray-600">8 dias / 7 noites</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Plane className="h-4 w-4 mr-2" />
                    Passagem aérea ida e volta
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Hotel className="h-4 w-4 mr-2" />
                    Hotel 4 estrelas
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Car className="h-4 w-4 mr-2" />
                    Transfers inclusos
                  </li>
                </ul>
                <div className="mt-6">
                  <span className="text-2xl font-semibold text-[#6EC3E0]">R$ 12.999</span>
                  <span className="text-gray-600">/pessoa</span>
                </div>
                <button className="mt-4 w-full bg-[#6EC3E0] text-white py-2 px-4 rounded-md hover:bg-[#5BA3C0] transition-colors duration-300">
                  Reservar Agora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-light text-gray-900">Sobre Nós</h2>
              <p className="mt-4 text-lg text-gray-600">
                A Luzimax Turismo é uma agência de viagens comprometida em proporcionar experiências únicas e memoráveis aos nossos clientes. Com mais de 10 anos de mercado, nos especializamos em criar roteiros personalizados que atendem às expectativas mais exigentes.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Nossa equipe de especialistas em viagens está sempre pronta para ajudar você a planejar a viagem dos seus sonhos, cuidando de cada detalhe para garantir sua total satisfação.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#6EC3E0]">10+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#6EC3E0]">5000+</div>
                  <div className="text-sm text-gray-600">Clientes satisfeitos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-[#6EC3E0]">50+</div>
                  <div className="text-sm text-gray-600">Destinos</div>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-light text-gray-900">Entre em Contato</h2>
            <p className="mt-4 text-lg text-gray-600">Estamos aqui para ajudar você a planejar sua próxima aventura</p>
          </div>
          <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6EC3E0] focus:ring-[#6EC3E0] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6EC3E0] focus:ring-[#6EC3E0] sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6EC3E0] focus:ring-[#6EC3E0] sm:text-sm"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6EC3E0] hover:bg-[#5BA3C0] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6EC3E0]"
                  >
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="space-y-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPinIcon className="h-6 w-6 text-[#6EC3E0]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Endereço</h3>
                    <p className="mt-1 text-gray-600">
                      Av. Coronel Tubertino Rios, Centro<br />
                      Jaraguá, GO - Brasil
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-[#6EC3E0]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Telefone</h3>
                    <p className="mt-1 text-gray-600">+55 (62) 1234-5678</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#6EC3E0]" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">contato@luzimax.com.br</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;