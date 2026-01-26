import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { contactInfo, socialLinks } from '../../constants/contact';

const socialIcons: Record<string, typeof faInstagram> = {
  instagram: faInstagram,
  facebook: faFacebook,
  whatsapp: faWhatsapp,
  twitter: faInstagram, // fallback
};

export function Footer() {
  return (
    <footer id="contact" className="bg-pastel-purple dark:bg-dark-surface text-white py-8 px-6 md:px-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact info */}
          <div className="text-center md:text-left">
            <div className="font-bold text-xl mb-3">Macscents</div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
              <span>{contactInfo.email}</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
              <span>{contactInfo.phone}</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-4 text-2xl">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-2 rounded-full
                  hover:text-pastel-yellow hover:scale-110
                  transition-all duration-200
                "
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={socialIcons[social.platform]} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-6 border-t border-white/20 text-sm opacity-80">
          &copy; {new Date().getFullYear()} Macscents. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
