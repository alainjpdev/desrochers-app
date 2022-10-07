import React from 'react'
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack"
import file from "./pdfTest.pdf"
import imgTest from "./imgTest.png"
import Modal from '../Modal';
import "../Modal.css"

function Map2() {

  const [ numPage, setNumPage ] = useState(null);

  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({numPage}){
    setNumPage(numPage);
    setPageNumber(1);
  }

  const local = `http://localhost:3000/pdfTest.pdf`

  const [modalOpen, setModalOpen] = useState(false);



  return (
    <>
       <div>Map 2</div>
      {/* <header className='App-header'> */}
        {/* <Document file="pdfTest.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}> */}
        {/* <Document file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>

          <Page height="300" pageNumber={pageNumber} />
        </Document>  
      </header>     */}
       <div className="App">
      <h1>Hey, click on the button to open the modal.</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Open
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>    

<img src={imgTest} alt="logo-moke" height={350} to="/" key={"logo-moke"}/>

    </>

  )
}

export default Map2