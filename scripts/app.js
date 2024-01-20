let user1Point = 0;
let user2Point = 0;
let wins1 = 0;
let wins2 = 0;


const gameLogic = (userChoice1, userChoice2) => {
    console.log(userChoice1, userChoice2)
    if (userChoice1 == "Rock" && userChoice2 == "Paper") {
        alert("User 1 picked rock and User 2 picked paper, paper beats rock.")
        user2Point++;
    } else if (userChoice1 == "Rock" && userChoice2 == "Rock") {
        alert("it's a tie, no one scores.")
    } else if (userChoice1 == "Rock" && userChoice2 == "Scissors") {
        alert("User 1 picked rock and User 2 picked scissors, rock beats scisosrs.");
        user1Point++;
    } else if (userChoice1 == "Rock" && userChoice2 == "Lizard") {
        alert("User 1 picked rock and User 2 picked lizard, rock beats lizard.");
        user1Point++;
    } else if (userChoice1 == "Rock" && userChoice2 == "Spock") {
        alert("User 1 picked rock and User 2 picked Spock, Spock beats rock.");
        user2Point++;
    } else if (userChoice1 == "Paper" && userChoice2 == "Rock") {
        alert("User 1 picked paper and User 2 picked rock, paper beats rock.")
        user1Point++;
    } else if (userChoice1 == "Paper" && userChoice2 == "Paper") {
        alert("it's a tie, no one scores.")
    } else if (userChoice1 == "Paper" && userChoice2 == "Scissors") {
        alert("User 1 picked paper and User 2 picked scissors, scissors beats paper.");
        user2Point++;
    } else if (userChoice1 == "Paper" && userChoice2 == "Lizard") {
        alert("User 1 picked paper and User 2 picked lizard, lizard beats paper.");
        user2Point++;
    } else if (userChoice1 == "Paper" && userChoice2 == "Spock") {
        alert("User 1 picked paper and User 2 picked Spock, paper beats Spock.");
        user1Point++;
    } else if (userChoice1 == "Scissors" && userChoice2 == "Rock") {
        alert("User 1 picked scissors and User 2 picked rock, rock beats rock.")
        user2Point++;
    } else if (userChoice1 == "Scissors" && userChoice2 == "Paper") {
        alert("User 1 picked scissors and User 2 picked paper, Scissors beats paper.")
        user1Point++;
    } else if (userChoice1 == "Scissors" && userChoice2 == "Scissors") {
        alert("it's a tie, no one scores");
    } else if (userChoice1 == "Scissors" && userChoice2 == "Lizard") {
        alert("User 1 picked scissors and User 2 picked lizard, Scissors beats lizard.");
        user1Point++;
    } else if (userChoice1 == "Scissors" && userChoice2 == "Spock") {
        alert("User 1 picked scissors and User 2 picked Spock, Spock beats scissors.");
        user2Point++;
    } else if (userChoice1 == "Lizard" && userChoice2 == "Rock") {
        alert("User 1 picked lizard and User 2 picked rock, rock beats lizard.");
        user2Point++;
    } else if (userChoice1 == "Lizard" && userChoice2 == "Paper") {
        alert("User 1 picked lizard and User 2 picked paper, lizard beats paper.");
        user1Point++;
    } else if (userChoice1 == "Lizard" && userChoice2 == "Scissors") {
        alert("User 1 picked lizard and User 2 picked scissors, scissors beats lizard.");
        user2Point++;
    } else if (userChoice1 == "Lizard" && userChoice2 == "Lizard") {
        alert("it's a tie, no one scores");
    } else if (userChoice1 == "Lizard" && userChoice2 == "Spock") {
        alert("User 1 picked lizard and User 2 picked Spock, lizard beats Spock.");
        user1Point++;
    } else if (userChoice1 == "Spock" && userChoice2 == "Rock") {
        alert("User 1 picked Spock and User 2 picked rock, Spock beats rock.")
        user1Point++;
    } else if (userChoice1 == "Spock" && userChoice2 == "Paper") {
        alert("User 1 picked Spock and User 2 picked paper, paper beats Spock.")
        user2Point++;
    } else if (userChoice1 == "Spock" && userChoice2 == "Scissors") {
        alert("User 1 picked Spock and User 2 picked scissors, Spock beats scissors.");
        user1Point++;
    } else if (userChoice1 == "Spock" && userChoice2 == "Lizard") {
        alert("User 1 picked Spock and User 2 picked lizard, lizard beats Spock.");
        user2Point++;
    } else if (userChoice1 == "Spock" && userChoice2 == "Spock") {
        alert("it's a tie, no one scores");
    } else {
            console.log("error!") ;
    }
}

const scores = (user1Point, user2Point) => {
    if (user1Point > user2Point) {

    }
}

