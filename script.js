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
    that.direction = direction;
}