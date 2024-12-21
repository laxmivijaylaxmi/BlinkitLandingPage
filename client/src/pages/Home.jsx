import React from 'react'
import BannerSlider from '../component/Banner/BannerSlider'
import SubMainBanner from '../component/SubMainBanner/SubMainBanner'
import SubImage from '../component/SubImage/SubImage'
import SubContent from '../component/SubContent/SubContent'
import SubContent2 from '../component/SubContent2/SubContent2'

const Home = () => {
  return (
    <div>
      <BannerSlider/>
      <SubMainBanner/>
      <SubImage/>
      <h2 className='font-bold  px-14 text-3xl'>Dairy,Bread & Eggs</h2>
      <SubContent/>
      <h2 className='font-bold px-14 text-3xl mt-6'>Rolling paper & tobacco</h2>
      <SubContent2/>
    </div>
  )
}

export default Home
