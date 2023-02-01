import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ClientSearchNip(props) {
  const [clients, setClients] = useState([]);
  const [input, setInput] = useState('');
  const [suggestion, setSuggestions] = useState([]);
  const [select, setSelect] = useState('');

  const navigate = useNavigate();

  const getClients = (props) => {
    axios
      .get('http://localhost:5000/api/client/niptable')
      .then((req) => {
        setClients(req.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getClients();
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    let matches = [];

    if (value.length >= 1) {
      const regex = new RegExp(`^${value}`, 'i');
      matches = clients.filter((item) => regex.test(item.nip));
    }
    setSuggestions(matches);
    setInput(value);
  };

  const selectValue = (item) => {
    setSelect(item);
    setSuggestions('');
    setInput('');
  };

  const clearSearch = () => {
    setInput('');
    setSuggestions('');
    setSelect('');
  };

  const handleSearchBy = (t) => {
    navigate(`/client/nip/${select}`);
  };

  return (
    <div className="search">
      <div className="form-wrapper">
        <input
          className="input"
          type="text"
          placeholder="szukaj po NIP"
          value={input}
          onChange={handleChange}
        />
        <div className="icon" onClick={clearSearch}>
          {suggestion.length > 0 ? (
            <i className="fa fa-times" />
          ) : (
            <i className="fa fa-search" />
          )}
        </div>
        {suggestion?.length > 0 ? (
          <div className="suggestion-wrapper">
            {suggestion.map((item) => (
              <div
                className="suggestions"
                key={item.id}
                onClick={() => selectValue(item.nip)}
              >
                {item.nip}
              </div>
            ))}
          </div>
        ) : null}
      </div>
      <div className="selectNip">
        Pokaż firmę o NIP:
        <span className="selected">{select}</span>
        {' '}
        <button
          onClick={() => {
            handleSearchBy(selectValue);
          }}
        >
          {' '}
          szukaj
        </button>
      </div>

    </div>
  );
}
export default ClientSearchNip;