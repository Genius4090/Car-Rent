
function Modal({children,openModal,setOpenModal}) {
  return (
    openModal && <div onClick={(e)=> e.target.id == "wrapper" && setOpenModal()} id="wrapper" className={` w-full h-full fixed top-0 left-0 backdrop-blur-md z-200`}>
    <div className=" absolute w-[400px] h-[600px] bg-white top-0 left-0 right-0 bottom-0 m-auto shadow-2xl rounded-[20px] ">
      {children}
    </div>
</div>
  )
}

export default Modal