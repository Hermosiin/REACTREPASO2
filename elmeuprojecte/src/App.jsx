
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Header from './Layout/Header';
import Footer from "./Layout/Footer";
import ToDos from "./todosReducer/ToDos";
import ToDosR from "./todosRedux/ToDos";

export default function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='*' element={<> <ToDos/> </>} />
        <Route path="/" element={<> <ToDos/> </>} />
        <Route path="/todosreducer" element={<> <ToDos/> </>} />
        <Route path="/todosredux" element={<> <ToDosR/> </>} />

      </Routes>
      <Footer />
    </>
  );
}
