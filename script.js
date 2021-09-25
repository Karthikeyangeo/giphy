// Script file for Giphy API

// variable declaration
var btn = document.querySelector(".button");
var output='';
var gif_div = document.querySelector(".gif");

// to display the details while loading DOM
document.addEventListener('DOMContentLoaded',fun);

// adding event to the button 
btn.addEventListener("click",fun);

// function fun 
function fun()
{

    getWord();
    // async function to get the random word from API
    
    async function getWord()
    {
        try
        {
            let res = await fetch ("https://random-word-api.herokuapp.com/word?number=1");
            let data = await res.json();            
            let keyword =data[0];
            console.log(keyword);
            getGiphy(keyword);
        }
        catch(err)
        {
            console.log(err.message);
        }
        
    }

    // async function to display the gifs from giphy API
    
    async function getGiphy(search_keyword)
    {
        try
        {
            let res1 = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=0QGoTJlivGeKLKsNVSAR6U3lGQs0aTW0&q=${search_keyword}&limit=5&offset=0&rating=g&lang=en`);
            let data1 = await res1.json();
            let final_url = data1.data[0].images.original.url;
            output = `<object data=${final_url}  width="500" height ="500"></object>`;
            gif_div.innerHTML=output;
            console.log();    
        }
        catch(err)
        {
            console.log(err.message);
            output =`<h2 style="color:Red">Try another Word</h2>`
            gif_div.innerHTML=output;
        }
    }
    

    
}

