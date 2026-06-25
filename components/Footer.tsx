import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer className="w-full py-5 bg-gray-900">
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4 px-4">
        <div className="flex space-x-6">
          <a href="https://www.github.com/aungthawe">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-2xl text-white/70 hover:text-white transition-transform hover:-translate-y-1"
            />
          </a>
          <a href="https://t.me/dxaniel_i">
            <FontAwesomeIcon
              icon={faTelegram}
              className="text-2xl text-white/70 hover:text-white transition-transform hover:-translate-y-1"
            />
          </a>
          <a href="https://www.facebook.com/aungthawethit">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-2xl text-white/70 hover:text-white transition-transform hover:-translate-y-1"
            />
          </a>
          <a href="https://www.linkedin.com/in/aung-thawe-thit-oo-a99753394/">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-2xl text-white/70 hover:text-white transition-transform hover:-translate-y-1"
            />
          </a>
          <a href="mailto:aungthawethit@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-2xl text-white/70 hover:text-white transition-transform hover:-translate-y-1"
            />
          </a>
        </div>

        <p className="text-white/50 text-sm">
          © {new Date().getFullYear()} Aung Thawe Thit Oo — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
