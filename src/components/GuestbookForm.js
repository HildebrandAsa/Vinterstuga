import { useState, useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

const GuestbookForm = () => {

  const [name, setName] = useState("")
  const [text, setText] = useState("")
  const [showMessage, setShowMessage] = useState("")

  const { addFeedback } = useContext(FeedbackContext)
  
  const handleNameChange = (e) => {
    if (name === "") {
      setShowMessage(null)
    } else if (name !== "" && name.trim().length <= 1) {
      setShowMessage("Must be at least 2 characters in your name")
    } else {
      setShowMessage(null)
    }
    setName(e.target.value)
  }

  const handleTextChange = (e) => {

    if (text === "") {
      setShowMessage(null)
    } else if (text !== "" && text.trim().length <= 10) {
      setShowMessage("Must be at least 10 characters")
    } else {
      setShowMessage(null)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        name,
      }


  addFeedback(newFeedback)
  setText("")
  setName("")
}
  }

  return (
    <div className="wrap-container">
      <form className="form-container" onSubmit={handleSubmit}>
        <p>Skriv gärna ett inlägg om hur du upplevde din vistelse i Branäs och Lassiebyn!</p>
        <div className="form-div">
        <label htmlFor="name">Namn:</label>
        <input
          className="name-input"
          name="name"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <label htmlFor="message">Inlägg:</label>
        <textarea
          className="textarea"
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Gästboksinlägg..."
        />
        <button className="button" type="submit" value="Submit">Skicka</button>
        </div>
      {showMessage && <div>{showMessage}</div>}
      </form>
    </div>
  )
}


export default GuestbookForm
