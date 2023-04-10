import {useState} from "react";
import {Select} from "../components";
import {actionStatus, meterSizes, violationTypes, department} from "../data";
import Label from "../components/base/Label";
import {Input} from "../components/base/Input";

export const NewActPage = () => {

    const [formData, setFormData] = useState({
        actNumber: "",
        removalAndRegistrationDate: "",
        violationType: "",
        actionStatus: "",
        meterSize: "",
        department: "",
        violationAddress: "",
        region: "",
        city: "",
        house: "",

    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault(event);
        console.log(formData); // здесь мы можем отправить данные на сервер для сохранения
    };
    return (
        <>
        <h2 className={"text-5xl font-light text-center mt-6"}>Реєстрація актів порушення</h2>
        <form className="grid grid-cols-2 gap-4 p-9" onSubmit={handleFormSubmit}>

            <div className="col-span-1">
                <Label htmlFor="actNumber" className="block font-bold px-4">
                    Номер акту порушення
                </Label>
                <Input
                    validate
                    type="number"
                    name="actNumber"
                    id="actNumber"
                    className="w-full border rounded py-2 px-3"
                    value={formData.actNumber}
                    onChange={handleInputChange}
                />

                <Label htmlFor="removalAndRegistrationDate" className="block font-bold px-4">
                    Дата та час усунення, реєстрації порушення
                </Label>
                <Input
                    type="datetime-local"
                    name="removalAndRegistrationDate"
                    id="removalAndRegistrationDate"
                    className="w-full border rounded py-2 px-3"
                    value={formData.removalAndRegistrationDate}
                    onChange={handleInputChange}
                />

                <Label htmlFor="department" className="block font-bold px-4">
                    Відділення/дільниця
                </Label>
                <Select
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    options={department}
                />

                <Label htmlFor="violationType" className="block font-bold px-4">
                    Вид порушення
                </Label>
                <Select
                    className="w-full border rounded py-2 px-3"
                    name="violationType"
                    value={formData.violationType}
                    onChange={handleInputChange}
                    options={violationTypes}
                />

                <Label htmlFor="actionStatus" className="block font-bold px-4">
                    Статус дій по порушенню
                </Label>
                <Select
                    className="w-full border rounded py-2 px-3"
                    name="actionStatus"
                    value={formData.actionStatus}
                    onChange={handleInputChange}
                    options={actionStatus}
                />
                <Label htmlFor="meterSize" className="block font-bold px-4">
                    Типорозмір лічильника
                </Label>
                <Select
                    name="meterSize"
                    value={formData.meterSize}
                    onChange={handleInputChange}
                    options={meterSizes}/>
            </div>

            <div className="col-span-1">
                <h2 className={"text-2xl font-light text-center"}>Адреса порушення</h2>
                <Label htmlFor="region" className="block font-bold px-4">
                    Область
                </Label>
                <Input type="text"
                       name="region"
                       id="region"
                       className="w-full border rounded py-2 px-3"
                       value={formData.region}
                       onChange={handleInputChange}/>

                <Label htmlFor="city" className="block font-bold px-4">
                    Місто
                </Label>
                <Input type="text"
                       name="city"
                       id="city"
                       className="w-full border rounded py-2 px-3"
                       value={formData.city}
                       onChange={handleInputChange}/>

                <Label htmlFor="house" className="block font-bold px-4">
                    Адреса
                </Label>
                <Input
                    type="text"
                    name="house"
                    id="house"
                    className="w-full border rounded py-2 px-3"
                    value={formData.house}
                    onChange={handleInputChange}/>
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-3 py-3 px-4 rounded"
                onClick={handleFormSubmit}
            >
                Зберегти акт
            </button>
        </form>
        </>
    )
};
