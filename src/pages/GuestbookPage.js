
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import GuestbookForm from "../components/GuestbookForm"


const GuestbookPage = () => {

  const { feedback } = useContext(FeedbackContext)

  return (
    <div>
      <div>
        <GuestbookForm />
      </div>
      <div>
        {feedback.map((feedback) => (
          <div key={feedback.id}>
            <p>{feedback.name}</p>
            <p>{feedback.text}</p>

          </div>
        ))}
      </div>
    </div>
  )
}

export default GuestbookPage
