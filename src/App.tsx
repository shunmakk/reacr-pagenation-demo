import * as React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import Pagenation from './Pagenation';
import Album from './Type';

function App() {

const [albums,setAlbums] = useState<Album[]>([]);


useEffect(() => {
  const getAlbums = async () => {
    await fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then((res) => 
    res.json()
    ).then((albums) => setAlbums(albums));
  };
  getAlbums();
}, []);
 
  return (
    <>
   <Pagenation albums={albums}/>
    </>
  )
}

export default App
