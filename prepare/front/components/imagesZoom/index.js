import React from 'react'
import { useState } from 'react'
import Slick from 'react-slick'
import styled, { createGlobalStyle } from 'styled-components'

const Overlay = styled.div`
    position: fixed;
    z-index: 99;
    top:0;
    left:0;
    right:0;
    bottom:0;
`

const Header = styled.header`
    background-color: #fff;
    position: relative;
    padding: 0;
    text-align: center;

    & h1 {
        margin: 0;
        font-size: 17px;
        color:#000;

    }
`

const CloseBtn = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    padding: 15px;
    line-height: 14px;
    cursor: pointer;
`

const SlickWrapper = styled.div`
    height: calc(100% - 44px);
    background-color: #090909;
`

const ImgWrapper = styled.div`
    padding: 32px;
    text-align: center;

    & img {
        margin: 0 auto;
        max-width: 750px;
    }
`

const Indicator = styled.div`
  text-align: center;
  
  & > div {
    width: 75px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    background: #313131;
    display: inline-block;
    text-align: center;
    color: white;
    font-size: 15px;
  }
`;

const Global = createGlobalStyle`
    .slick-slide {
        display: inline-block;
    }
`

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
                        afterChange={(slide) => setCurrentSlise(slide)}
                        infinite
                        arrows={false}
                        slidesToShow={1}
                        slidesToScroll={1}
                    >
                        {images.map((item) => (
                            <ImgWrapper key={item.src}>
                                <img src={item.src} alt={item.src} />
                            </ImgWrapper>
                        ))}
                    </Slick>
                </div>
            </SlickWrapper>
        </Overlay>
    )
}

export default ImagesZoom