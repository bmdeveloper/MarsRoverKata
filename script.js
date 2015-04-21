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
}