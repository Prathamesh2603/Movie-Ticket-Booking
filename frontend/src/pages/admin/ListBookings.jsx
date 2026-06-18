import React, { useEffect, useState } from 'react'
import { Loading } from '../../components/Loading';
import { dummyBookingData } from '../../assets/assets';
import { Title } from '../../components/admin/Title';

export const ListBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const currency = import.meta.env.VITE_CURRENCY;

  const getAllBookings = async () => {
    setDashboardData(dummyBookingData);
    setLoading(false);
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return !loading
    ? (
        <>
          
        </>
      )
    : <Loading />
}
