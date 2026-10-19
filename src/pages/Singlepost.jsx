import React, { useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import Article from '../components/Article'


const Singlepost = () => {
  const {data, setData} = useState({})
  return (
  <>
  <div id="page">
    <HeaderMenu/>
  <div id="body">
    <Article title={Info.title} Paragraph1={Info.Paragraph1} Paragraph2={Info.Paragraph2} Date={Info.Date}/>
  </div>

</div>

  </>
  )
}

export default Singlepost