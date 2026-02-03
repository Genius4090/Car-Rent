

function Button({title,icon,iconPos,extraStyle,moreStyle,onClick}) {
  return (
    <button onClick={onClick} className={`cursor-pointer bg-[#F5F5F5] font-medium rounded-full flex gap-2 text-lg items-center p-[18px] ${moreStyle} ${extraStyle && "px-[30px] text-white bg-[#299764]!"}`}>
       {icon && iconPos == "left" && icon}
        {title}
        {icon && iconPos == "right" && icon}
       
    </button>
  )
}

export default Button