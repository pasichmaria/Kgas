import React, {useState} from "react";
import {Search} from "../components";
import {acts} from "../data/acts";

export const ActsPage = ({user}) => {
    const [filteredActs, setFilteredActs] = useState([]);

    const handleSearch = (searchTerm) => {
        const filtered = acts.filter((act) =>
            act.actNumber.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredActs(filtered);
    };

    return (
        <>
            <main className="flex-1 bg-indigo-100 p-9">
                <div className="flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-1 mr-9">
                            <Search onSearch={handleSearch}/>
                        </div>
                        <div>
                            <button
                                onClick={() => {
                                    window.location.href = "/newAct";
                                }}
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Новий акт
                            </button>
                        </div>
                    </div>
                    <div className="overflow-hidden border rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Номер акту</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Дата, час усунення та реєстрації порушення</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Відділення/дільниця</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Вид порушення</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Статус дій по порушенню</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Типорозмір лічильника</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Область</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Місто</th>
                                <th className="px-6 py-4 text-sm font-medium  whitespace-nowrap">Будинок</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-400">
                            {acts.map((act) => (
                                <tr key={act.actNumber}>
                                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                        {act.actNumber}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {act.removalAndRegistrationDate}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                        {act.violationType}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        {act.actionStatus}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        {act.department}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        {act.meterSize}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        {act.house}
                                    </td>
                                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                        {act.region}
                                    </td>
                                </tr>
                            ))}
                                </tbody>
                                </table>
                                </div>
                                </div>
                                </main>
                                </>
                                );
                            };
