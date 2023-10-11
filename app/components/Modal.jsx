


const Modal = ({children, setShowModal, showModal}) => {
  return (
    showModal &&
    <div className="inset-0 bg-black/50 fixed">
        <div className="items-center flex justify-center h-full">
            <div className="w-1/2 bg-red-50 rounded-md flex flex-col p-5">
                <button className="text-2xl mb-3 ml-auto" onClick={()=>setShowModal(false)}>
                    &times;
                </button>
                {children}
            </div>

        </div>
        
    </div>
  )
}

export default Modal