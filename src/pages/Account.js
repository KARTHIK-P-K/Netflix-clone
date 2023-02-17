import React from 'react'
import SavedShow from '../components/SavedShow';

const Account = () => {
  return (
    <>
    <div className='text-white w-full'>
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/54a0de92-feb4-4891-8cb3-00a794ec89f6/IN-en-20230206-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt='/'
     className='  w-full h-[400px] object-cover  '/>
    <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>

    </div>
    <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
        </div>
        </div>
        <SavedShow/>
    </>
  )
}

export default Account