import { useContext } from "react"
import { Context } from "../Context/Context"
import Button from "./Button"
import InputForm from "./InputForm"
import SelectForm from "./SelectForm"


function CreateForm() {
    const { carsSortList, carsModelList, carManageList, handleCreate } = useContext(Context)
    return (
        <form onSubmit={handleCreate} className="flex flex-col items-center justify-around py-8 gap-4 h-full px-10 ">
            <h2 className="font-semibold text-lg">Create new Car :</h2>
            <InputForm value={"title"} placeholder={"title"} inpType="text" />
            <InputForm value={"image"} placeholder={"image"} inpType="text" />
            <InputForm value={"seats"} placeholder={"seats"} inpType="number" />
            <SelectForm selName="carManage" mapper={carManageList}/>
            <InputForm value={"madeFrom"} placeholder={"madeFrom"} inpType="text" />
            <InputForm value={"consumption"} placeholder={"consumption"} inpType="text" />
            <SelectForm selName="carModel" mapper={carsModelList}/>
            <SelectForm selName="carSort" mapper={carsSortList}/>
            <Button title={"Create"} extraStyle={"extraStyle"} moreStyle={"px-10! py-2"} />
        </form>
    )
}

export default CreateForm