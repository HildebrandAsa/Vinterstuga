
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import GuestbookForm from "../components/GuestbookForm"


const GuestbookPage = () => {

  const { feedback } = useContext(FeedbackContext)

  return (
    <div className="guestbook-container">
      <GuestbookForm />
      <div className="guestbook-div">
        {feedback.map((feedback) => (
          <div className="guestbook-square" key={feedback.id}>
            <p>{feedback.name}</p>
            <p>{feedback.text}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default GuestbookPage
