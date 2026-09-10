import React from 'react';
// import { Link } from 'react-router-dom'
import { movies } from '../Data/data'
import MovieCard from '../Component/MovieCard'
import MovieGallery from '../Component/MovieGallery';

function Home() {
  return (
    <div className='mx-auto max-w-5xl p-8 text-center'>

      <h1 className='mb-6 text-2xl font-bold text-slate-800'>
        🏠 หน้าแรก
      </h1>

      <p className='mt-2 text-slate-500'>
        ยินดีต้อนรับสู่ MovieHub
      </p>

      <h2 className='mt-8 text-2xl font-bold text-slate-800'>
        หนังแนะนำ
      </h2>

      <div className='mx-auto mt-8 flex flex-wrap justify-center gap-6'>
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            year={m.year}
          />
        ))}
      </div>
        <h2 className='mt-8 text-2xl font-bold text-slate-800'>ดูหนังทีละเรื่อง</h2>
        <div className='mx-auto mt-8 max-w-md'>
          <MovieGallery/>
        </div>
    </div>
  );
}

export default Home;