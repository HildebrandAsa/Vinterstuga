import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FeedbackProvider } from "./context/FeedbackContext";

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import ContactPage from "./pages/ContactPage"
import MapPage from "./pages/MapPage"
import Footer from "./components/Footer"
import PicturePage from "./pages/PicturePage";
import GuestbookPage from "./pages/GuestbookPage";

function App() {
  return (
    <FeedbackProvider>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path = "/" element = {<HomePage />}/>
        <Route path = "/map" exact element = {<MapPage />}/>
        <Route path = "/contact" exact element = {<ContactPage />}/>
        <Route path = "/pictures" exact element = {<PicturePage />}/>
        <Route path = "/guestbook" exact element = {<GuestbookPage />}/>
      </Routes>
    <Footer />
    </BrowserRouter>
    </FeedbackProvider>
  );
}

export default App;
