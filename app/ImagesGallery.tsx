import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const regex = /\["(https:\/\/lh3\.googleusercontent\.com\/pw\/[a-zA-Z0-9\-_]*)"/g

function extractPhotos(content: any) {
 const links = new Set()
  let match
  while (match = regex.exec(content)) {
    links.add(match[1])
  } 
  return Array.from(links)
}

async function getAlbum(id: any) {
  const response = await axios.get(`https://photos.app.goo.gl/${id}`)
  return extractPhotos(response.data)
}

const ImagesGallery = () => {
  const [images, setImages] = React.useState(null)
  React.useEffect((): any => {
    let shouldCancel = false
    const call = async () => {
      const response: any = await getAlbum("WMBRv7jsUj41nwD99")
      if (!shouldCancel && response && response.length > 0) {
        setImages(response.map((url: any) => ({
          original: `${url}=w1024`,
          thumbnail: `${url}=w100`
        })))
      }
    }
    call()
    return () => shouldCancel = true
  }, [])
  return images ? <ImageGallery items={images} /> : null
}
export default ImagesGallery