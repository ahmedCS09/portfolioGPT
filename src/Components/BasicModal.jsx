import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { motion, AnimatePresence } from "framer-motion"

export default function BasicModal({ isModalOpen, isModalClose, isSelected }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isSelected?.width || '75vw',
    height: isSelected?.height || '75vh',
    bgcolor: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.3)',
    borderRadius: '20px',
    boxShadow: '0 0 40px rgba(0, 255, 255, 0.3)',
    backdropFilter: 'blur(20px)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const imageStyle = {
    flex: 1,
    width: '100%',
    backgroundImage: `url(${isSelected?.img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  const fadeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  }

  return (
    <AnimatePresence>
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onClose={isModalClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{
            backdropFilter: 'blur(8px)',
            backgroundColor: 'rgba(0,0,0,0.85)',
          }}
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Box sx={style}>
              {/* Close Button */}
              <button
                onClick={isModalClose}
                className="absolute right-4 top-3 text-white text-2xl font-bold hover:text-cyan-400 transition"
              >
                ✕
              </button>

              {/* Image */}
              <div style={imageStyle}></div>

              {/* Caption Area */}
              {isSelected && (
                <div className="w-full text-center py-4 bg-gradient-to-t from-black/60 to-transparent">
                  <h3 className="text-cyan-300 text-2xl font-bold">
                    {isSelected.title}
                  </h3>
                  <p className="text-gray-300">{isSelected.org}</p>
                </div>
              )}
            </Box>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  )
}
