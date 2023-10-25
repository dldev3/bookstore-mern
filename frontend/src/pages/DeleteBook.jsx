import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const DeleteBook = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const goBackToHome = () => {
    navigate('/');
  }

  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert('An error happened. Please check console');
        console.log(error);
      })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl'>Are you sure You want to delete this book?</h3>
        <div className='flex flex-row space-x-5 mt-10'>
          <button className='bg-red-600 py-4 px-8 text-white w-full' onClick={handleDeleteBook}>Delete Book</button>
          <button className='bg-yellow-600 py-4 px-8 text-white w-full' onClick={goBackToHome}>Cancel</button>

        </div>
      </div>
    </div>
  )
}

export default DeleteBook

