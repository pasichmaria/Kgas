import React, { useState } from 'react'
import { Button, TextArea, SearchDropdown, BackButton } from '../components'
import { acts } from '../data'
import { axios } from '../API'

export const SupportPage = ({ user }) => {
  const [formData, setFormData] = useState({
    message: '',
    feedback: '',
    selectedDoc: ''
  })
  const [selectedDoc, setSelectedDoc] = useState(null)
  const [message, setMessage] = useState('')
  const [feedback, setFeedback] = useState('')
  const handleDocSelect = (doc) => {
    setSelectedDoc(doc)
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }
  const isFormValid = Object.values(formData).every((value) => value)
  const handleSubmit = (e) => {
    e.preventDefault()
    {
      axios.post('https://jsonplaceholder.typicode.com/posts', formData).then((response) => {
        console.log(response.data)
        setMessage('')
        setFeedback('')
        setSelectedDoc(null)
      })
    }
  }

  return (
    <>
      <main className="flex-1 bg-indigo-100">
        <div className="flex flex-col">
          <div className="mx-auto grid max-w-2xl items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
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
                id="feedback"
                name="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Пропозиції по покращенню"
              />
              <SearchDropdown
                acts={acts}
                label="Виберіть документ"
                options={acts}
                value={selectedDoc}
                onChange={(e) => setSelectedDoc(e.target.value)}
              />
              <Button
                className={'w-full py-2'}
                variant={'primary'}
                onClick={handleSubmit}
                disabled={!message} // Disable button if the message field is empty
              >
                Надіслати повідомлення
              </Button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
