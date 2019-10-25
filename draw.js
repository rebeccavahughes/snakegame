var drawModule = (function () {
    var bodySnake = function (x, y) {
        //this is the single square
        ctx.fillStyle = 'green';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        //this is the border of the square
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
    }
    var pizza = function (x, y) {
        //this is the border of the pizza
        ctx.fillStyle = 'yellow';
        ctx.fillRect(x * snakeSize, y * snakeSize, snakeSize, snakeSize);
        //this is the single square
        ctx.fillStyle = 'red';
        ctx.fillRect(x * snakeSize + 1, y * snakeSize + 1, snakeSize - 2, snakeSize - 2);
    }
    var scoreText = function () {
        // How many pizzas did the snake eat
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 145, h - 5);
    }
    var drawSnake = function () {
        //Initially the body of the snake will be formed by 5 squares. 
        var length = 4;
        snake = [];

        //using a for loop we push the 5 elements inside the array(squares).
        //every element will have x = 0 and y will take the value of the index
        for (var i = length; i >= 0; i--) {
            snake.push({
                x: i,
                y: 0
            });
        }
    }


    var createFood = function () {
        food = {
            //generate random numbers
            x: Math.floor((Math.random() * 30) + 1),
            y: Math.floor((Math.random() * 30) + 1)
        }

        //look at the position of the snakes body.
        for (vari = 0; i > snake.length; i++) {
            var snakeX = snake[i].x;
            var snakeY = snake[i].y;

            if (food.x === snakeX || food.y === snakeY || food.y === snakeY && food.x === snakeX) {
                food.x = Math.floor((Math.random() * 30) + 1);
            }
        }
    }

    var checkCollision = function (x, y, array) {
        for (i = 0; i < array.length; i++) {
            if (array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    }
    //main function
    var paint = function () {
        //var's draw the space in which the snake will move.
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(0, 0, w, h)

        //give it a border
        ctx.strokeStyle = "black";
        ctx.strokeRect(0, 0, w, h);

        //disable the start button when playing.
        btn.setAttribute("disabled", true);

        var snakeX = snake[0].x
        var snakeY = snake[0].y

        // make the snake move
        // use a variable ('direction') to control the movement
        // to move the snake, pop out the last element of the array and shift it ontop as the first element
        if (direction == "right") {
            snakeX++;
        } else if (direction == "left") {
            snakeX--;
        } else if (direction == "up") {
            snakeY--;
        } else if (direction == "down") {
            snakeY++;
        }

        /*
            If the snake touches the canvas path or itself, it will die!
            Therefore if x or y of an element of the snake, don't fit inside the canvas, the game will be stopped.
            If the check_collision is true, it means the the snake has crashed on its body itself, then the game will be stopped again. 
            */
        if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || checkCollision(snakeX, snakeY, snake)) {
            // stop the game

            //make the start button enabled again. 
            btn.removeAttribute("disabled", true);

            //clean up the canvas
            ctx.clearRect(0, 0, w, h);
            gameloop = clearInterval(gameloop);
            return;
        }

        //If the snake eats food it becomes longer and this means that, in this case, you shouldn't pop out the last element of the array.
        if (snakeX == food.x && snakeY == food.y) {
            //create a new square instead of moving the tail.
            var tail = {
                x: snakeX,
                y: snakeY
            };
            score++

            //create new food
            createFood()
        } else {
            //pop out the last cell
            var tail = snake.pop();
            tail.x = snakeX;
            tail.y = snakeY;
        }

        //puts the tail as the first cell.
        snake.unshift(tail);

        //For each element of the array create a square using the bodySnake function we created before.
        for (i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake.y);
        }

        //create food using the pizza function.
        pizza(food.x, food.y);

        //put the score text.
        scoreText();
    }

    var init = function () {
        direction = "down";
        drawSnake();
        createFood();
        gameloop = setInterval(paint, 80);
    }

    //You need to return only the _init_ function at the end of the Module.

    return {
        init: init
    };

    //close the module
}());