import { useContext } from "react"
import { Context } from "../Context/Context"
import Button from "./Button"
import FormInput from "./FormInput"


function CreateForm() {
    const { carsSortList, carsModelList, carManageList, handleCreate } = useContext(Context)
    return (
        <form onSubmit={handleCreate} className="flex flex-col items-center justify-center gap-4 h-full px-10 ">
            <h2 className="font-semibold text-lg">Create new Car:</h2>

            <FormInput value={"title"} placeholder={"title"} inpType="text" />
            <FormInput value={"image"} placeholder={"image"} inpType="text" />
            <FormInput value={"seats"} placeholder={"seats"} inpType="number" />
            <select name="carManage" className="outline-none border w-full py-1 rounded-[6px] px-2">
                {carManageList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}

            </select>
            <FormInput value={"madeFrom"} placeholder={"madeFrom"} inpType="text" />
            <FormInput value={"consumption"} placeholder={"consumption"} inpType="text" />
            <select name="carModel" className="outline-none border w-full py-1 rounded-[6px] px-2">
                {carsModelList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}
            </select>
            <select name="carSort" className="outline-none border w-full py-1 rounded-[6px] px-2">
                {carsSortList.map(item => <option key={item.id} value={item.id}>{item.title}</option>)}

            </select>
            <Button title={"Create"} extraStyle={"extraStyle"} moreStyle={"px-10! py-2"} />
        </form>
    )
}

export default CreateForm