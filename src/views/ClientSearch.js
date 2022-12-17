import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

const ClientSearch = (props) => {
  const [searchNip, setSearchNip] = useState("");
  const [searchMiasto, setSearchMiasto] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSearchNip(e.target.value);
  };
  const handleSearchByNip = (e) => {
    navigate("/client/nip/" + searchNip);
  };

  const handleInputChangeMiasto = (e) => {
    setSearchMiasto(e.target.value);
  };

  const handleSearchByMiasto = (e) => {
    navigate("/client/miasto/" + searchMiasto);
  };



  return (
    <div>
      <input
        onChange={handleInputChange}
        type="text"
        name="nip"
        placeholder="wyszukaj firmy po NIP"
      />{" "}
      <button
        onClick={() => {
          handleSearchByNip();
        }}
      >
        {" "}
        szukaj
      </button>
      <input
        onChange={handleInputChangeMiasto}
        id="nazwa_firmy"
        type="text"
        name="miasto"
        placeholder="wyszukaj klientów w danym mieście"
      />{" "}
      <button
        onClick={() => {
          handleSearchByMiasto();
        }}
      >
        {" "}
        szukaj
      </button>
    </div>
  );
};

export default ClientSearch;
