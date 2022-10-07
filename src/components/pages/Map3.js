import React from 'react'
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import file from "./pdfTest.pdf"
import imgTestPhimai from "./imgTestPhimai.png"

function Map3() {

  const [ numPage, setNumPage ] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPage}){
    setNumPage(numPage);
    setPageNumber(1);
  }

  const local = `http://localhost:3000/pdfTest.pdf`



  return (
    <>
       <div>Map 3</div>
      {/* <header className='App-header'> */}
        {/* <Document file="pdfTest.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}> */}
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>

          <Page height="300" pageNumber={pageNumber} />
        </Document>  
      </header>     */}

<img src={imgTestPhimai} alt="phimai-fuego" height={350} to="/" key={"phimai"}/>

    </>

  )
}

export default Map3