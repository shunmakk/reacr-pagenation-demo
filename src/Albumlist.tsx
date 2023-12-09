import * as React from "react"
import './Albumlist.css'
import Album from "./Type"


type Props = {
    albums: Album[];
    currentAlbums: Album[];
}

const Albumlist = (props: Props) => {
    const {currentAlbums} = props;
  return (
    <div className="albumGridWrapper">{currentAlbums.map((album) => (
        <div key={album.id}>
            <img src={album.url} alt="album"/>
        </div>
    ))}</div>
  )
}

export default Albumlist