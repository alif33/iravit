import React from 'react'
import Container from '../ui/Container'
import Image from 'next/image'
import socialImage1 from '../../../assets/social/social (1).png'
import socialImage2 from '../../../assets/social/social (2).png'
import socialImage3 from '../../../assets/social/social (3).png'
import Button from '../ui/Button'

const Social = () => {
  return (
    <div>
      <Container>
       <div className="flex flex-row">
          {/* Social Left */}
          <div className="grid grid-cols-5 gap-5 ">
            <Image className='col-span-2' src={socialImage1} />
            <Image className='col-span-3' src={socialImage2} />
            <Image className='col-span-5' src={socialImage3} />
          </div>
          {/* Social Right */}
          <div className="">
            <h2 className=""></h2>
            <Button text="See Pricings" btnPadding={"py-3 px-6"} >
              
            </Button>
          </div>
       </div>
      </Container>
    </div>
  )
}

export default Social