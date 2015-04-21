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
            move(commands[i]);
        }
    }
    function move(command) {
        var yIndexChange;
        switch (that.direction) {
            case "N":
                yIndexChange = 1;
                break;
        }
        var newLocation = [that.location[0],that.location[1]+yIndexChange];
        that.location = newLocation;
    }



}