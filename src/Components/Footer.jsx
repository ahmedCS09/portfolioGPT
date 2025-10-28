import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-gray-400 text-center py-8 border-t border-gray-800"
    >
      <p className="text-sm">
        © 2025 Ahmed Musab | Built with ❤️ using React, Tailwind & Framer Motion
      </p>
      <div className="flex justify-center gap-6 mt-4 text-xl">
        <a
          href="https://github.com/ahmedCS09"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition-all"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="mailto:musabahmed305@gmail.com"
          className="hover:text-cyan-400 transition-all"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </motion.footer>
  );
}
