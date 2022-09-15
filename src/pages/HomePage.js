import house from "../images/house.png"
import tree from "../images/tree.jpg"

const HomePage = () => {

  return (
    <>
    <div className="heading-container">
      <h1>Välkommen till Lassiebyn i Branäs</h1>
    </div>
    <div className="page-container">
      <div className="text-container">
        <p>Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.</p>
        <p>Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.</p>
        <p>Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.
          Lassiebyn är en mysig liten stugby nedanför Branäsbacken.</p>
      </div>
      <div className="photo-container">
        <img className="house-photo" src={house} alt="house"></img>
        <img className="tree-photo" src={tree} alt="tree"></img>
      </div>
    </div>
    </>
  )
}

export default HomePage