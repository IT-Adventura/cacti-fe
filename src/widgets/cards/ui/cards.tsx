import Image from "next/image";
import ButtonBuy from "./button";

const Cards = () => {
  return (
      <div>
          {/* Photo container */}
          <div>
              {/* <Image src="cacti-fe\src\shared\ui\assets\images\cards\store-cactus-344-1.png" alt="Cacti" /> */}
          </div>
          <div>
              <h2>Fairy Castle Cactus</h2>
              <p>Acanthocereus tetragonus Fairy Castle</p>
              <ButtonBuy />
          </div>
    </div>
  )
}

export default Cards;