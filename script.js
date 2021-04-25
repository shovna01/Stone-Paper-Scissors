function spsGame(yourChoice){ // on clicking any of the img elements, ie having reference to that object, the function will run and the argument passed will be that very element
    // console.log(yourChoice);
    console.log(yourChoice);
    var ourChoice, botChoice;

    // ourChoice=yourChoice.id;
    // if we click on stone, the variable ourChoice will get the value "stone" ie, the id of yourChoice(this), where this here is stone
    // botChoice() = number_to_choice(random_to_integer());
    // results=winner(ourChoice,compChoice); // will return the result like an array --> [1,0] , [0.5, 0.5] , [0,1] //human won, draw, computer won
    // the computer has to choose its choice randomly
    // message after the game = message(results) //'you won', 'it's a draw', 'you lost' //the final message will take in the results as its argument and give an output based on the results array //the mesaage will contain an onject in JS, alomgwith the colour of the message
    // the message function will return a dictionary(in python) which is basically an object in JavaScript 
    // {'mesage' : 'You won' , color :'green'}
    // when we click on any image element in the UI, what happens in the frontend is all the img elements are removed, and our choice and the computer's choice, only those 2 elements are picked and then the those images are put in in the frontend
    // spsFrontend(ourChoice, compChoice, message);
    // Math.floor(Math.random() * 3) --->> Math.floor() will floor the decimal, ie 2.8 will be 2, 0.4 will be 0 and so on
    // Math.random() generates a random (decimal) number between 0 and 1 (1 and 0 excluded)
    // multiplying that by 3 will give that decimal * 3, so a decimal more than 0 and always less than 3
    // Math.floor(Math.random() * 3) --->> this line of code (and functions) will give 
    // ['stone' , 'paper' 'scissors'][Math.floor(Math.random() * 3)] --->> this will pick a random number out of 0, 1 and 2, 0 and 1 being included in it and return the value at that index of the array
    
    // compChoice = bot_choice; 
    //the value in the array of stone, paper and scissor choices at random index generated 

    ourChoice=yourChoice.id;
    
    botChoice=number_to_choice(random_to_integer());
    console.log('compChoice:', botChoice);

    results=winner(ourChoice,botChoice);
    console.log(results);

    message=finalMessage(results);
    console.log(message);

    spsFrontend(ourChoice, botChoice, message);

    function random_to_integer(){
        var number = Math.floor(Math.random() * 3); //generates 0, 1 or 2 randomly
        return number;
    }

    function number_to_choice(number){
        var bot_choice = ['stone' , 'paper' , 'scissors'][number]; //returns value at index of the random number generated
        return bot_choice;
    }

    function winner(yourChoice, compChoice){
        var spsPossibilities={ // 'key which shall be picked by us' : dictionary - which will contain all the possible outcomes if we pick rock 
            'stone' : {'scissor': 1, 'stone': 0.5, 'paper': 0},
            'paper' : {'stone': 1, 'paper': 0.5, 'scissors': 0},
            'scissors' : {'paper': 1, 'scissors': 0.5, 'stone': 0}
        }; //almost like a json object --->> a data structure

        var ourScore = spsPossibilities[yourChoice][compChoice];
        var compScore = spsPossibilities[compChoice][yourChoice];

        return[ourScore, compScore];
    }

    function finalMessage([ourScore,compScore]){
        if(ourScore===0){
            return {'message': 'Sorry! You Lost!', 'color': 'red'};
        }
        else if(ourScore===0.5){
            return {'message': 'It is a draw!', 'color': 'orange'};
        }
        else{
            return {'message': 'Congrats! You won!', 'color': 'green'};
        }
    }

    function spsFrontend(ourChoiceImage, botChoiceImage, finalMessage){
        var imagesPossibilities = {
            'stone': document.getElementById('stone').src,
            'paper': document.getElementById('paper').src,
            'scissors': document.getElementById('scissors').src
        };

    //removing the images
    document.getElementById('stone').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    
    //the single quote at the end of the code in the next line will close the img src (tag)
    humanDiv.innerHTML = "<img src='" + imagesPossibilities[ourChoiceImage] + "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(20, 20, 20, 1);'>"
    messageDiv.innerHTML="<h2 style='color: " + finalMessage['color'] + "; font-size: 45px; padding:64px; '>" + finalMessage['message'] + "</h2>"//finalMessage's object's colour is being accessed here
    botDiv.innerHTML = "<img src='" + imagesPossibilities[botChoiceImage] + "'height=200 width=200 style='box-shadow: 0px 10px 50px rgba(20, 20, 20, 1);'>"
    document.getElementById('flex-box-sps-div').appendChild(humanDiv);
    document.getElementById('flex-box-sps-div').appendChild(messageDiv); //to be put in between so that it will show in between the 2 final images 
    document.getElementById('flex-box-sps-div').appendChild(botDiv);

    }
    
}