import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../Assets/5.jpg";
import Trip2 from "../Assets/8.jpg";
import Trip3 from "../Assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Indoesia"
          text="Indonesia is a presidential republic with an elected legislature. It has 38 provinces, of which nine have special autonomous status. The country's capital, Jakarta, is the world's second-most-populous urban area. Indonesia shares land borders with Papua New Guinea, East Timor, and the eastern part of Malaysia, as well as maritime borders with Singapore, Vietnam, Thailand, the Philippines, Australia, Palau, and India. Despite its large population and densely populated regions, Indonesia has vast areas of wilderness that support one of the world's highest levels of biodiversity."
        />
        <TripData
          image={
            "https://media.istockphoto.com/id/1219360293/photo/two-women-shopping-for-earrings-at-street-market.webp?b=1&s=170667a&w=0&k=20&c=yrmjzdsmGGvCX-NCUmRVagFr_synJSGqewIBoSCNk8A="
          }
          heading="Trip in India"
          text="Tourism in India is 4.6% of the country's gross domestic product (GDP). Unlike other sectors, tourism is not a priority sector for the Government of India. Forbes magazine ranked India as the 7th most beautiful country in 'The 50 Most Beautiful Countries In The World' rankings.The World Travel and Tourism Council calculated that tourism generated ₹13.2 lakh crore (US$170 billion) or 5.8% of India's GDP and supported 32.1 million jobs in 2021."
        />
        <TripData
          image={Trip3}
          heading="Trip in Malayasia"
          text="The country has its origins in the Malay kingdoms, which, from the 18th century on, became subject to the British Empire, along with the British Straits Settlements protectorate. During World War Two, British Malaya, along with other nearby British and American colonies, was occupied by the Empire of Japan.[15] Following three years of occupation, Peninsular Malaysia was unified as the Malayan Union in 1946 and then restructured as the Federation of Malaya in 1948. The country achieved independence on 31 August 1957."
        />
      </div>
    </div>
  );
}

export default Trip;
