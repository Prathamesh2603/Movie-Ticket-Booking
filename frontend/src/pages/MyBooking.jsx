import { useEffect, useState } from "react"
import { dummyBookingData } from "../assets/assets";
import { Loading } from "../components/Loading";
import { BlurCircle } from "../components/BlurCircle";

export const MyBooking = () => {
  const [bookings, setBookings] = useState([]); // Booking is empty for new user
  const [isLoading, setIsLoading] = useState(true); // it will be false when the data is fetched

  const currency = import.meta.env.VITE_CURRENCY

  const getMyBookings = async () => {
    setBookings(dummyBookingData);
    setIsLoading(false);
  };

  useEffect(() =>{
    getMyBookings();
  }, []);
  
  return !isLoading ? (
    <div className="relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh]">
      <BlurCircle top="100px" left="100px"/>
      <div>
        <BlurCircle top="0" left="600px"/>
      </div>
    </div>
  ) : <Loading />
}
