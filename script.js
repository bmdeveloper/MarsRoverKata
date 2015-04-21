function MarsRover(location, direction) {
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

    //function that takes commands as an input
    that.commandsInput = function (commands) {
        //loop through commands
        for (var i = 0; i < commands.length; i++) {
            if (commands[i] == "f" || commands[i] == "b") {
                move(commands[i]);
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
        that.location = newLocation;
    }

    //function that turns rover
    function turn(command) {
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
                break;
        }
        that.direction = newDirection;
    }

}