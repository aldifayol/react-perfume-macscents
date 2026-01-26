import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faStar, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const products = [
  {
    name: 'Aurora Bliss',
    desc: 'Aroma floral segar dengan sentuhan citrus yang membangkitkan semangat.',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Velvet Night',
    desc: 'Wangian malam yang elegan, memadukan vanilla dan amber.',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Citrus Muse',
    desc: 'Kombinasi citrus dan musk yang segar dan tahan lama.',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
  },
];

const testimonials = [
  {
    name: 'Ayu',
    review: 'Wanginya unik dan tahan lama! Saya langsung jatuh cinta dengan Aurora Bliss.',
    rating: 5,
  },
  {
    name: 'Rizky',
    review: 'Velvet Night benar-benar elegan, cocok untuk acara malam.',
    rating: 5,
  },
  {
    name: 'Sinta',
    review: 'Pelayanan ramah dan produk berkualitas. Highly recommended!',
    rating: 5,
  },
];

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="font-sans bg-pastelPink min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-8 bg-white/80 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-pastelPurple tracking-wide">Macscents</span>
        </div>
        <nav className="space-x-6 text-pastelPurple font-medium">
          <a href="#home" className="hover:text-pastelBlue">
            Home
          </a>
          <a href="#products" className="hover:text-pastelBlue">
            Products
          </a>
          <a href="#about" className="hover:text-pastelBlue">
            About Us
          </a>
          <a href="#contact" className="hover:text-pastelBlue">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section (AIDA) */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-8 py-16 bg-pastelBlue/40">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pastelPurple mb-4">
            Temukan Karakter Unikmu Bersama <span className="text-pastelGreen">Macscents</span>
          </h1>
          <p className="text-lg text-gray-700">
            Wangian bukan sekadar aroma, tapi ekspresi karakter. Macscents menghadirkan parfum
            dengan keunikan dan kualitas premium, siap menemani setiap momen spesialmu.
          </p>
          <button
            className="mt-4 px-8 py-3 bg-pastelPurple text-white rounded-full shadow hover:bg-pastelBlue transition"
            onClick={() => {
              setShowProducts(true);
              document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
            }}>
            Explore Our Scents
          </button>
        </div>
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
          alt="Macscents Perfume"
          className="md:w-1/2 w-full rounded-3xl shadow-lg mt-10 md:mt-0"
        />
      </section>

      {/* About Us Section */}
      <section id="about" className="px-8 py-16 bg-pastelYellow/60 text-center">
        <h2 className="text-3xl font-bold text-pastelPurple mb-4">Tentang Macscents</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Macscents adalah brand parfum lokal yang menghadirkan aroma berbeda dari yang lain. Setiap
          varian kami dirancang untuk menonjolkan karakter unik, dengan bahan berkualitas dan
          sentuhan modern. Jadikan harimu lebih percaya diri dengan aroma khas Macscents.
        </p>
      </section>

      {/* Products Section */}
      <section id="products" className="px-8 py-16 bg-pastelGreen/40">
        <h2 className="text-3xl font-bold text-pastelPurple mb-8">Produk Unggulan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
              <img
                src={p.img}
                alt={p.name}
                className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-pastelPurple/20"
              />
              <h3 className="text-xl font-semibold text-pastelPurple mb-2">{p.name}</h3>
              <p className="text-gray-600 text-center mb-4">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-pastelPurple text-white rounded-full shadow hover:bg-pastelBlue transition text-lg font-semibold flex items-center gap-2">
            <FontAwesomeIcon icon={faWhatsapp} /> Explore Our Scents
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 py-16 bg-pastelPink/60">
        <h2 className="text-3xl font-bold text-pastelPurple mb-8 text-center">
          Testimoni Pelanggan
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl shadow p-6 flex flex-col items-center">
              <div className="flex gap-1 mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <FontAwesomeIcon icon={faStar} className="text-yellow-400" key={i} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-2">"{t.review}"</p>
              <span className="font-semibold text-pastelPurple">- {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-16 bg-pastelBlue/40 text-center">
        <h2 className="text-2xl font-bold text-pastelPurple mb-4">Tertarik Memesan?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Klik tombol di bawah untuk konsultasi dan pemesanan langsung via WhatsApp.
        </p>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-pastelPurple text-white rounded-full shadow hover:bg-pastelBlue transition text-lg font-semibold">
          <FontAwesomeIcon icon={faWhatsapp} /> Hubungi Kami
        </a>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-pastelPurple text-white py-8 px-8 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <div className="font-bold text-lg">Macscents</div>
            <div className="flex items-center gap-2 mt-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>macscents@email.com</span>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <FontAwesomeIcon icon={faPhone} />
              <span>+62 812-3456-7890</span>
            </div>
          </div>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://instagram.com/macscents"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastelYellow">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://facebook.com/macscents"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastelYellow">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastelYellow">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-sm">
          &copy; {new Date().getFullYear()} Macscents. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
