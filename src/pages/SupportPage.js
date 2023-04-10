import React, {useState} from "react";
import {Button, TextArea, SearchDropdown} from "../components";
import {documents} from "../data";

export const SupportPage = ({user}) => {
    const [selectedDoc, setSelectedDoc] = useState(null);
    const [message, setMessage] = useState("");
    const handleDocSelect = (doc) => {
        setSelectedDoc(doc);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // send form data to server
        const formData = {
            message,
            selectedDoc,
        };
        console.log(formData);
        // reset form
        setMessage("");
        setSelectedDoc(null);
    };

    return (
        <>
            <main className="flex-1 bg-indigo-100">
                <div className="flex flex-col">
                    <div
                        className="mx-auto grid max-w-2xl items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
                        <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
                            Технічна підтримка
                        </h2>
                        <p className="mt-6 text-center text-gray-500">
                            Ви можете звернутись з будь-яким питанням, заповнивши форму на даннній сторінці
                        </p>
                        <form className="space-y-8 ng-untouched ng-pristine ng-valid" onSubmit={handleSubmit}>
                            <TextArea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Введіть ваше повідомлення"
                            />
                            <TextArea
                                id="messages" м
                                name="messages"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Пропозиції по покращенню"
                            />
                            <SearchDropdown
                                documents={documents}
                                label="Виберіть документ"
                                options={documents}
                                value={selectedDoc}
                                onChange={handleDocSelect}
                            />
                            <Button buttonType="primary" type="submit">
                                Надіслати повідомлення
                            </Button>
                        </form>
                    </div>
                </div>
            </main>
        </>
    );
};
