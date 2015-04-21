function MarsRover(location, direction, grid, obstacles) {
    var that = (this === window) ? {} : this;
    //initialise location
    if (!location) {
        that.location = [0, 0];
    }

    else {
        that.location = location;
    }

    //initialise direction
    if (!direction) {
        that.direction = "N";
    }

    else {
        that.direction = direction;
    }

    //initialise grid
    if (!grid) {
        that.grid = [100, 100];
    }
    else {
        that.grid = grid;
    }

    //initialise obstacles
    if (!obstacles) {
        that.obstacles = [];
    }
    else{
    that.obstacles = obstacles;
    }

    //MarsRover message variable
    that.message = "";


    //function that takes commands as an input
    that.commandsInput = function (commands) {
        //loop through commands
        for (var i = 0; i < commands.length; i++) {
            if (commands[i] == "f" || commands[i] == "b") {
                if (!move(commands[i])) {
                    break;
                }
            }
            else if (commands[i] == "l" || commands[i] == "r") {
                turn(commands[i]);
            }
        }
    }

    //function that moves rover
    function move(command) {
        var yIndexChange = 0;
        var xIndexChange = 0;
        switch (that.direction) {
            case "N":
                yIndexChange = 1;
                break;
            case "S":
                yIndexChange = -1;
                break;
            case "E":
                xIndexChange = 1;
                break;
            case "W":
                xIndexChange = -1;
                break;
        }

        //reverse values for backwards movement
        if (command == "b") {
            yIndexChange = yIndexChange * -1;
            xIndexChange = xIndexChange * -1;
        }

        var newLocation = [that.location[0] + xIndexChange, that.location[1] + yIndexChange];
        newLocation = wrapLocation(newLocation);
        if (isObstacle(newLocation)) {
            return false;
        }
        else {
            that.location = newLocation;
            return true;
        }
    }

    //function that turns rover
    function turn(command) {
        var newDirection;
        switch (that.direction) {
            case "N":
                if (command == "l") {
                    newDirection = "W";
                }
                else if (command == "r") {
                    newDirection = "E";
                }
                break;
            case "S":
                if (command == "l") {
                    newDirection = "W";
                }
                else if (command == "r") {
                    newDirection = "E";
                }
                break;
            case "E":
                if (command == "l") {
                    newDirection = "N";
                }
                else if (command == "r") {
                    newDirection = "S";
                }
                break;
            case "W":
                if (command == "l") {
                    newDirection = "S";
                }
                else if (command == "r") {
                    newDirection = "N";
                }
                break;
        }
        that.direction = newDirection;
    }

    //function that implements wrapping
    function wrapLocation(location) {
        var wrappedLocation = [(location[0] + that.grid[0]) % that.grid[0], (location[1] + that.grid[1]) % that.grid[1]];
        return wrappedLocation;
    }

    //function to check for obstacles
    function isObstacle(location) {
        for (var i = 0; i < that.obstacles.length; i++) {
            if (location.toString() == that.obstacles[i].toString()) {
                that.message = "Obstacle detected at " + location.toString();
                return true;
            }
        }
        return false;
    }

}