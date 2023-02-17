import React,{useState,useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie'

const Row = ({title,fetchUrl,rowId}) => {
  const [movies,setMovies]= useState([])



  useEffect(()=>{
    fetch(fetchUrl)
      .then(res=>res.json())
      .then(data=>setMovies(data.results))
  },[fetchUrl])

  function slideLeft(id){
    let slider = document.getElementById('slider'+id)
    slider.scrollLeft-=500
  }
  
  function slideRight(id){
    let slider = document.getElementById('slider'+id)
    slider.scrollLeft+=500
  }
  
  return (
    <>
      <h2 className='text-white md:text-xl p-4 font-bold'>{title}</h2>
      <div className='relative flex items-center group'>
        <MdChevronLeft onClick={()=>slideLeft(rowId)} size={40} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 z-10 cursor-pointer hidden group-hover:block' />
        <div id={'slider' + rowId}  className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'  >
            {movies.map((item,id) => (
                  <Movie item={item} key={id} />
  ))}
  </div>
        <MdChevronRight onClick={()=>slideRight(rowId)} size={40} className=' bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        
      </div>
    </>
  )
}

export default Row