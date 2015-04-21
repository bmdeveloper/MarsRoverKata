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
        }
        var newLocation = [that.location[0] + xIndexChange, that.location[1] + yIndexChange];
        that.location = newLocation;
    }



}