function MarsRover(location, direction, gridSize, obstacles) {

    var that = (this === window) ? {} : this;
    var g = new Grid(location, gridSize, obstacles);
    var direction = setDirection(direction, g);

    that.location = [g.xCoordinate, g.yCoordinate];
    that.direction = direction;
    that.grid = g;
    that.message = "";

    function setDirection(direction, grid) {
        var directionToObject = [["N", new North(grid)], ["S", new South(grid)], ["E", new East(grid)], ["W", new West(grid)]];
        var result = new North(grid);
        directionToObject.forEach(function (element) {
            if (element[0] == direction) {
                result = element[1];
            }
        });

        return result;
    }

    //function that takes commands as an input
    that.commandsInput = function (commands) {
        //loop through commands
        for (var i = 0; i < commands.length; i++) {
            switch (commands[i]) {
                case "f":
                    if (that.direction.moveForward()) {
                        that.location = [g.xCoordinate, g.yCoordinate];
                    }
                    else {
                        that.message = "Obstacle detected at " + g.detectedObstacleDetails;
                        return;
                    }
                    break;
                case "b":
                    if (that.direction.moveBackward()) {
                        that.location = [g.xCoordinate, g.yCoordinate];
                    }
                    else {
                        that.message = "Obstacle detected at " + g.detectedObstacleDetails;
                        return;
                    }
                    break;
                case "l":
                    that.direction = that.direction.turnLeft()
                    break;
                case "r":
                    that.direction = that.direction.turnRight()
                    break;
            }

        }
    }
}

function North(grid) {
    var that = (this === window) ? {} : this;
    that.moveForward = function () {

        if (grid.moveYForward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.moveBackward = function () {
        if (grid.moveYBackward()) {
            return true;
        }
        else {
            return false;
        }

    }
    that.turnLeft = function () {
        return new West(grid);
    }
    that.turnRight = function () {
        return new East(grid);
    }
}

function South(grid) {
    var that = (this === window) ? {} : this;
    that.moveForward = function () {
        if (grid.moveYBackward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.moveBackward = function () {
        if (grid.moveYForward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.turnLeft = function () {
        return new West(grid);
    }
    that.turnRight = function () {
        return new East(grid);
    }

}

function East(grid) {
    var that = (this === window) ? {} : this;
    that.moveForward = function () {
        if (grid.moveXForward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.moveBackward = function () {
        if (grid.moveXBackward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.turnLeft = function () {
        return new North(grid);
    }
    that.turnRight = function () {
        return new South(grid);
    }
}

function West(grid) {
    var that = (this === window) ? {} : this;
    that.moveForward = function () {
        if (grid.moveXBackward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.moveBackward = function () {
        if (grid.moveXForward()) {
            return true;
        }
        else {
            return false;
        }
    }
    that.turnLeft = function () {
        return new South(grid);
    }
    that.turnRight = function () {
        return new North(grid);
    }
}

function Grid(roverLocation, gridSize, obstacles) {
    var that = (this === window) ? {} : this;

    if (roverLocation) {
        that.xCoordinate = roverLocation[0];
        that.yCoordinate = roverLocation[1];
    }

    else {
        that.xCoordinate = 0;
        that.yCoordinate = 0;
    }

    if (gridSize) {
        that.xLength = gridSize[0];
        that.yLength = gridSize[1];
    }

    else {
        that.xLength = 100;
        that.yLength = 100;
    }

    if (obstacles) {
        that.obstacles = obstacles;
    }
    else {
        that.obstacles = [];
    }

    that.detectedObstacleDetails = "";

    that.moveYForward = function () {
        var result;
        if (that.yCoordinate < (that.yLength - 1)) {
            result = that.yCoordinate + 1;
        }
        else {
            result = 0;
        }
        if (!isObstacle([that.xCoordinate, result])) {
            that.yCoordinate = result;
            return true;
        }
        else {
            that.detectedObstacleDetails = [that.xCoordinate, result];
            return false;
        }
    }

    that.moveXForward = function () {
        var result;
        if (that.xCoordinate < (that.xLength - 1)) {
            result = that.xCoordinate + 1;
        }
        else {
            result = 0;
        }
        if (!isObstacle([result, that.yCoordinate])) {
            that.xCoordinate = result;
            return true
        }
        else {
            that.detectedObstacleDetails = [result, that.yCoordinate];
            return false;
        }
    }

    that.moveYBackward = function () {
        var result;
        if (that.yCoordinate > 0) {
            result = that.yCoordinate - 1;
        }
        else {
            result = that.yLength - 1;
        }
        if (!isObstacle([that.xCoordinate, result])) {
            that.yCoordinate = result;
            return true;
        }
        else {
            that.detectedObstacleDetails = [that.xCoordinate, result];
            return false;
        }
    }

    that.moveXBackward = function () {
        var result;
        if (that.xCoordinate > 0) {
            result = that.xCoordinate - 1;
        }
        else {
            result = that.xLength - 1;
        }
        if (!isObstacle([result, that.yCoordinate])) {
            that.xCoordinate = result;
            return true;
        }
        else {
            that.detectedObstacleDetails = [result, that.yCoordinate];
            return false;
        }
    }

    //function to check for obstacles
    function isObstacle(location) {
        for (var i = 0; i < that.obstacles.length; i++) {
            if (location.toString() == that.obstacles[i].toString()) {
                return true;

            }
        }
        return false;
    }

}

