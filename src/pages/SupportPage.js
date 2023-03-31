import React, {useState} from "react";
import {Button, TextArea, SearchDropdown, Document} from "../components";

const documents = [

    // link : `/document/${id}`

    {id: 1, name: "Акт 1", link: "/document-1"},
    {id: 2, name: "Акт 2", link: "/document-2"},
    {id: 3, name: "Акт 3", link: "/document-3"},
    {id: 4, name: "Акт 4", link: "/document-4"},
    {id: 5, name: "Акт 5", link: "/document-5"}
];
export const SupportPage = ({user}) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <>
            <main class="flex-1 bg-indigo-100">
                <div className="flex flex-col">
                    <div
                        className="mx-auto grid max-w-2xl  items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
                            Технічна
                            підтримка</h2>
                        <p className="mt-6 text-center text-gray-500">
                            Ви можете звернутись з будь-яким питанням заповнивши форму на даннній сторінці
                        </p>
                        <form className="space-y-8 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
                            <TextArea
                                id="message"
                                name="message"
                                placeholder="Введіть ваше повідомлення"
                            />
                            <SearchDropdown/>
                            <Button
                                buttonType="primary"
                                type="submit">Надіслати повідомлення</Button>

                        </form>
                    </div>
                </div>
            </main>
        </>
    );
}
