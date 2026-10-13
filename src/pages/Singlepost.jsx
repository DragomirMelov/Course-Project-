import React, { useState } from 'react'
import HeaderMenu from '../components/HeaderMenu'
import Article from '../components/Article'

const Info = {
    title: "MARTIAN ROVER JOURNEY",
    Date: "FEBRUARY 6, 2023",
    Paragraph1: `
            Our website templates are created with inspiration, checked for
            quality and originality and meticulously sliced and coded. What’s
            more, they’re absolutely free! You can do a lot with them. You can
            modify them. You can use them to design websites for clients, so
            long as you agree with the Terms of Use. You can even remove all our
            links if you want to.`,
    Paragraph2: `Looking for more templates? Just browse through all our Free Website
            Templates and find what you’re looking for. But if you don’t find
            any website template you can use, you can try our Free Web Design
            service and tell us all about it. Maybe you’re looking for something
            different, something special. And we love the challenge of doing
            something different and something special.`,
    
  }

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