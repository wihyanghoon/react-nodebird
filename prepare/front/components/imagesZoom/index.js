import React from 'react'
import { useState } from 'react'
import Slick from 'react-slick'
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles'

const ImagesZoom = ({ images, onClose }) => {
    const [currentSlise, setCurrentSlise] = useState(0)
    return (
        <Overlay>
            <Global />
            <Header>
                <h1>상세이미지</h1>
                <CloseBtn onClick={onClose}>x</CloseBtn>
            </Header>
            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        beforeChange={(slide) => setCurrentSlise(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((item) => (
                            <ImgWrapper key={item.src}>
                                <img src={`http://localhost:3065/${item.src}`} alt={item.src} />
                            </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlise + 1}
                            {'/'}
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>
    )
}

export default ImagesZoom