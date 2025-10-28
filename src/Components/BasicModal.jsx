import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

export default function BasicModal(props) {

    const { isModalOpen, isModalClose, isSelected } = props

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: isSelected?.height,
    width: isSelected?.width,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '15px',
    backgroundImage: `url(${isSelected?.img})`,
    backgroundSize: 'cover',
}

    return (
        <div>
            <Modal
            open={!!isModalOpen}
            onClose={isModalClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                     <button onClick={isModalClose} className="absolute right-3 top-2"><span className="text-xl">X</span></button>
                </Box>
            </Modal>
        </div>
    )
}