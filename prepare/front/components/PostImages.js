import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { PlusOutlined } from '@ant-design/icons'
import ImagesZoom from './imagesZoom'

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZopm] = useState(false)

  const onZoom = useCallback(() => {
    setShowImagesZopm(true)
  }, [])

  const onClose = useCallback(() => {
    setShowImagesZopm(false)
  }, [])

  if (images.length === 1) {
    return (
      <>
        <img role="presentation" src={images[0].src} alt={images[0].src} onClick={onZoom} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
    )
  }
        if (images.length === 2) {
    return (
        <>
          <img role="presentation" style={{ width: '50%', display: "inline-block" }} src={images[0].src} alt={images[0].src} onClick={onZoom} />
          <img role="presentation" style={{ width: '50%', display: "inline-block" }} src={images[1].src} alt={images[0].src} onClick={onZoom} />
          {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
        </>
        )
  }
        return (
        <>
          <div>
            <img role="presentation" src={images[0].src} alt={images[0].src} style={{ width: '50%' }} onClick={onZoom} />
            {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
            <div
              role="presentation"
              style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
              onClick={onZoom}
            >
              <PlusOutlined />
              <br />
              {images.length - 1}
              개의 사진 더보기
            </div>
          </div>
        </>
        )
}

        export default PostImages