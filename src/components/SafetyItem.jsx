function SafetyItem({item}) {
  return (
   <li className="w-[200px] h-[160px] bg-[#F5F5F5] rounded-3xl flex flex-col justify-between items-end px-3 py-3">
    {item.icon}
    <p className="font-medium">{item.title}</p>
   </li>
  )
}

export default SafetyItem