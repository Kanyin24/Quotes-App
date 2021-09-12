import { getQueriesForElement } from "@testing-library/dom";
import React,{useState,useEffect} from "react"

//function that will be exported to app.js
function FetchQuote() {
    const [quote, setQuote] = useState('');
    const [author, setAuthor]= useState('');
    const [quoteCopied, setQuoteCopied] = useState(false);
    
    //function that gets quote from API and stores the value
    function getQuote() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res=> res.json())
        .then(data=>{
            console.log(data);
            setQuoteCopied(false);
            let dataQuotes = data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = data.quotes[randomNum];

            setQuote(randomQuote.quote);
            setAuthor(randomQuote.author);
        })
    }

    //when new quote button is clicked function getQuote() will be called
    const handleClick = () => {
        getQuote();
    };

    //when copy button is clicked quote will be copied to clipboard
    const copyQuote = () => {
        navigator.clipboard.writeText(quote + " - " + author);
        setQuoteCopied(true);
    }

return(
    <>
    {/* Values that will be returned and used in app.js */}
    <div className="container">
        <h1 id="quote">{quote}</h1>
        <p id="author">- {author}</p>
    </div>
    <div className="buttons">
        <button onClick={handleClick} id="new-quote">
            New Quote
        </button>
        <button onClick={copyQuote} id="copied-quote">
            <img src={'https://static.thenounproject.com/png/2342738-200.png'} width="20px" height="20px"/>
        </button>
    </div>
    
    </>
)
}
export default FetchQuote