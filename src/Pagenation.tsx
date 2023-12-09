
import * as React from "react"
import ReactPaginate from "react-paginate"
import Albumlist from "./Albumlist"
import "./Pagenation.css"
import Album from "./Type"



type Props = {
    albums: Album[];
}

const Pagenation = (props: Props) => {
    const { albums } = props;

 
 const itemsPerPage = 6;   //任意で変更可能。今回はスライス関数を後に使うため6と設定

 //ページごとの最初の配列を格納するための状態変数を用意する1
 const [itemOffset, setItemOffset] = React.useState(0);

 //ページごとの最後の配列
 const endOffset = itemOffset + itemsPerPage;

const currentAlbums =  albums.slice(itemOffset,endOffset);


const pageCount = Math.ceil(albums.length / itemsPerPage);

const hamdlePageClick = (e:{ selected: number}) => {
  
  const newOffset = (e.selected * itemsPerPage) % albums.length;
  setItemOffset(newOffset);
}
  return (
  <div className="albumWrapper">
    <Albumlist albums={albums} currentAlbums={currentAlbums} />
    <div className="paginateWrapper">
    <ReactPaginate  nextLabel="next >"
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        //ここまではBootstinp
         pageCount={pageCount} 
         onPageChange={hamdlePageClick}/>
         </div>
  </div>

  )
}

export default Pagenation;