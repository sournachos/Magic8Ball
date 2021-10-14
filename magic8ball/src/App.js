import React, {useState} from 'react';
import logo from './images/log.png'
import './App.css';


function App() {
  //states for questions, and api response history
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState([]);

  //api call parameters
  let params = encodeURIComponent("Is today going to be a good day?");
  let uri = "https://8ball.delegator.com/magic/JSON/" + params;

  //getting the 8 ball image for later targetting
  let image = document.getElementById("img")

  const myFunction = () => {

    //regex to make sure the questions has only letters, numbers, apostrophes,
    //one consecutive white space, and a question mark
    if (question.match(/^[A-Za-z'0-9 ]+[?]/)) {

      //animating 8 ball when submit button is clicked
      image.style.transform = 'rotateY(3.142rad)';
      image.style.transition = '.2s ease-in';

      //api call
      fetch(uri)
      .then(response => response.json())
      .then(json => {
        //displaying api response to end user
        document.getElementById("query").innerHTML = JSON.stringify(json.magic.answer);
        //Function(line49)
        //checking the history array for proper length
        checkHistory(question, json.magic.answer);
        //animating 8 ball to original position for repetitive use
        image.style.transform = 'rotateY(-3.142rad)';
        image.style.transition = '.2s ease-in';
      }) 
    } else {
      //user error handling if question parameters were not met (line22)
      document.getElementById("query").innerHTML = "That wasn't a question.";
    } 
  };

  //function that deletes a search history entry when array lenght 
  //reaches 10, otherwise it adds the latest question to the array
  const checkHistory = (question, x) => {
    if (history.length === 10) {
      history.shift();
    } 
    if (history.length < 10) {
      history.push([question, x]);
    }
  };

  //Function set the question to the value of the user input
  const questionFunc = (e) => {
      setQuestion(e.target.value);
    };

  //Alert to show the history, sorry I didn't make a modal :)
  const historyAlert = () => {
    window.alert(history);
  };


  return (
<div className='background' >

    <div className='parent'>

      <h1>
        Magic 8-Ball
      </h1>

       <img id='img' src={logo}/>

      <div className='queryResult'>
        <p id="query">Hello Friend !!</p>
      </div>

       <input placeholder="Got a question?" onChange={questionFunc}/>

      <button id="btn" onClick={myFunction}>Submit</button>

      <button onClick={historyAlert}>History</button>       

    </div>

</div>
  );
}

export default App;
