import React, { useState } from 'react'


export const UrlShortener = () => {

const[shortUrl,setShortUrl] = useState(''); 

  function generateShortCode(e){
    e.preventDefault();

    const Longurl = document.getElementById("LongUrl").value;
    console.log(Longurl)


    fetch("http://localhost:5000/api/shorten",
        {
        method: "POST",
        headers:
        {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
           "longUrl":Longurl
          })
      }).then(r => {
        return r.json()
      }).then(d => {
        console.log(d)
        setShortUrl(d.shortUrl)
      });
  }

  return (
    <div>
      <form onSubmit={generateShortCode}>
        <label >URL </label>
        <input type='text' id='LongUrl'></input>
        <button >generate</button>
      </form>
      {shortUrl &&
      <div>{shortUrl}</div>
      }
    </div>
  )
}
