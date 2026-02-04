function ServiceItem({item}) {
  return (
    <li className="w-[590px] h-[216px] bg-[#F5F5F5] rounded-[20px] px-8 py-10">
        <div className="flex justify-between">
            <h3 className="font-medium text-[32px] w-[280px]">{item.title}</h3>
            {item.icon}
        </div>
        <p className="text-[#555555] w-[354px] mt-2.5">{item.desc}</p>
    </li>
  )
}

export default ServiceItem