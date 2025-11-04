import { motion } from "framer-motion";
import todo from '../assets/todo.jpg'
import python from '../assets/python.jpg'
import karve from '../assets/karve.jpg'
import social from '../assets/social.jpg'
import BasicModal from "./BasicModal";
import coursera from '../assets/coursera.jpg'
import aptech from '../assets/aptech.jpg'
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

export default function Landing() {

const [ isOpen, setIsOpen ] = useState(false)
const handleClose = () => setIsOpen(false)
const [ isSelected, setIsSelected ] = useState(null)

const certifications = [
            { title: "Python Course", org: "Coursera", img: coursera, height: '80vh', width: '70vw' },
            { title: "Figma Course", org: "Aptech", img: aptech, height: '80vh', width: '70vw' },
          ]

  return (
    <>
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white min-h-screen pt-24 pb-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="flex flex-col justify-center items-center text-center px-6 h-[90vh] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-cyan-500/10 blur-3xl rounded-full"
        ></motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Ahmed Musab
        </motion.h1>

        <motion.p
  variants={fadeInUp}
  initial="hidden"
  animate="visible"
  className="text-gray-300 text-xl max-w-3xl mb-6 leading-relaxed"
>
  I'm a dedicated <span className="text-cyan-400">Computer Science Undergraduate (5th Semester) </span> 
  with a strong passion for crafting interactive and visually appealing web applications. 
  I enjoy transforming ideas into functional and efficient solutions using 
  <span className="text-cyan-400"> modern technologies like React, Node.js, Firebase,</span> 
  and Tailwind CSS. My goal is to continuously learn, innovate, and create 
  <span className="text-cyan-400"> impactful digital experiences </span> 
  that make a difference.
</motion.p>


       <motion.a
  href="https://www.canva.com/design/DAG3rDhttBY/suGubyx4BOlkcOEasLO2lA/view?utm_content=DAG3rDhttBY&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h499396132d"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{
    scale: 1.1,
    background: "linear-gradient(to right, #06b6d4, #3b82f6, #06b6d4)",
  }}
  className="!px-8 !py-3 bg-cyan-500 rounded-full text-white font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all z-50 relative"
>
  Explore My Resume 🚀
</motion.a>

      </section>

      {/* SKILLS SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mt-24 px-6"
      >
        <h2 id='skills' className="text-4xl font-bold mb-12 text-cyan-400">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            "HTML", "CSS", "JavaScript", "React JS",
            "Node JS", "Express JS", "Firebase", "MongoDB",
            "Tailwind CSS", "Bootstrap", "C++", "Python",
            "Java", "Figma",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              custom={index * 0.1}
              variants={fadeInUp}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 20px #22d3ee",
                rotate: 2,
              }}
              className="bg-gray-800 rounded-2xl py-4 text-lg font-medium shadow-md hover:shadow-cyan-400/50 transition-all"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* PROJECTS SECTION */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 px-6 text-center"
      >
        <h2 id='projects' className="text-4xl font-bold mb-12 text-cyan-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Social Media App",
              desc: "Responsive web app supporting Chatting, Posting etc using JS ",
              img: social,
              url: 'https://ahmedcs09.github.io/social-media/'
            },
            {
              title: "KARVE Gym Website",
              desc: "Responsive website using React, tailwind, routing etc",
              img: karve,
              url: 'https://react-thirdd.netlify.app/'
            },
            {
              title: "Todo App",
              desc: "Responsive listing app consisting of adding, editing & deleting functionality using JS",
              img: todo,
              url: 'https://ahmedcs09.github.io/todo-list/'
            },
            {
              title: "Code Detection System",
              desc: "A functional web interface where you can check three types of python code errors",
              img: python,
              url: 'http://127.0.0.1:5000/'
            }
          ].map((proj, index) => (
            <motion.div
              key={proj.title}
              custom={index * 0.2}
              variants={fadeInUp}
              whileHover={{ scale: 1.08, y: -5 }}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-cyan-400/50 transition-all"
            >
              <a target="blank" href={proj.url}><div style={{backgroundImage: `url(${proj.img})`}} className="bg-cover h-40"></div></a>
              <div className="p-5">
                <h4 className="text-xl font-bold mb-2 text-cyan-300">
                  {proj.title}
                </h4>
                <p className="text-gray-400 text-sm">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CERTIFICATIONS */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 px-6 text-center"
      >
        <h2 id='certifications' className="text-4xl font-bold mb-12 text-cyan-400">
          Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              onClick={() => {
                setIsOpen(true)
                setIsSelected(cert)
              }}
              key={cert.title}
              custom={index * 0.2}
              variants={fadeInUp}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px #22d3ee",
              }}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-cyan-400/50 transition-all"
            >
              <h4 className="text-2xl font-bold mb-2 text-cyan-300">
                {cert.title}
              </h4>
              <p className="text-gray-400">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-32 text-center px-6"
      >
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">Contact</h2>
        <p className="text-gray-300 mb-2">📞 0333-0226330</p>
        <p className="text-gray-300 mb-6">📧 musabahmed305@gmail.com</p>
        <motion.a
          href="mailto:musabahmed305@gmail.com"
          whileHover={{
            scale: 1.1,
            background:
              "linear-gradient(to right, #06b6d4, #3b82f6, #06b6d4)",
          }}
          className="inline-block px-8 py-3 bg-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-400/50 transition-all"
        >
          Send Message 💬
        </motion.a>
      </motion.section> 
    </div>
    <BasicModal isModalOpen = {isOpen} isModalClose = {handleClose} isSelected = {isSelected} />
    </>
  )
}
