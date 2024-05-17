import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
import Mountain1 from "../Assets/sl2.jpg";
import Mountain2 from "../Assets/sl3.jpg";
import Mountain3 from "../Assets/sl4.jpg";
import Mountain4 from "../Assets/sl5.jpg";
import Mountain5 from "../Assets/sl7.jpg";
import Mountain6 from "../Assets/sl8.jpg";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to enjoy the world</p>
      <DestinationData
        className="first-des"
        heading="Sigiriya Fortress "
        text="Sigiriya is one of Sri Lanka’s most popular tourist attractions – and with good reason. This ruined, fifth century city has some extraordinary features, including moat and wall fortifications, elaborately landscaped gardens, and a monastery. But it is the two-hundred metre high granite rock that stands out from these ruins that is undoubtedly the star attraction, with its exquisite frescoes and the remains of a royal palace on the summit."
        img1={Mountain1}
        img2={Mountain2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Little Adams Peak"
        text="Nestled in the heart of Sri Lanka, Adam's Peak, also known as Sri Pada, is a trek that combines natural beauty with spiritual significance. This notable pyramid-shaped mountain is one of the most sacred mountains on the island, standing at an elevation of 2,243 meters (7,359 feet)"
        img1={Mountain3}
        img2={Mountain4}
      />
      <DestinationData
        className="first-des"
        heading="Galle Fort"
        text="Sigiriya is one of Sri Lanka’s most popular tourist attractions – and with good reason. This ruined, fifth century city has some extraordinary features, including moat and wall fortifications, elaborately landscaped gardens, and a monastery. But it is the two-hundred metre high granite rock that stands out from these ruins that is undoubtedly the star attraction, with its exquisite frescoes and the remains of a royal palace on the summit."
        img1={Mountain5}
        img2={Mountain6}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Little England Cottage"
        text="The Little England Cottages Gated Community is designed, developed, landscaped, maintained and managed by Jaysons Realty (Pvt) Ltd, a Sri Lankan family owned real estate company authorised by the Sri Lanka Board of Investment (BOI). Jaysons Realty (Pvt) Ltd is part of Jaysons Holdings, a group of Sri Lankan companies with expertise in property management and development, hotels, restaurants, International Investment facilitation (Singapore) and Mineral Sands."
        img1={
          "https://i.pinimg.com/originals/3f/b5/9a/3fb59ad327397aa70de3055ed2579bf6.jpg"
        }
        img2={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGGTUNO8yxrJwlyaEEKaDgceorLtonhGAHaPDYN4ZliQ&s"
        }
      />
    </div>
  );
};

export default Destination;
