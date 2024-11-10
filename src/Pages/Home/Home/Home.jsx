import About from "../About/About";
import BookingTable from "../BookingTable/BookingTable";
import PopularFood from "../PopularFood/PopularFood";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div>
            <About></About>
            <PopularFood></PopularFood>
            <BookingTable></BookingTable>
            <Review></Review>
        </div>
    );
};

export default Home;