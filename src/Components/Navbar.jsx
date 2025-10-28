import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gray-900/70 backdrop-blur-md text-white shadow-lg border-b border-cyan-500/30"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-3xl font-extrabold tracking-wide text-cyan-400">
          Ahmed Musab
        </h1>
        <ul className="hidden md:flex gap-8 text-lg">
          {["Home", "Skills", "Projects", "Certifications", "Contact"].map(
            (item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.1, color: "#22d3ee" }}
                className="cursor-pointer transition-all"
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </motion.li>
            )
          )}
        </ul>
      </div>
    </motion.nav>
  );
}
