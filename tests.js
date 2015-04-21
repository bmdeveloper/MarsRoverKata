QUnit.module("Implement commands that move the rover forward/backward");
QUnit.test("Initialise mars rover location", function (assert) {
    var marsRover = new MarsRover([3, 8]);
    assert.deepEqual(marsRover.location, [3, 8], "Mars Rover location should be set to the [3,8] set value");
});
QUnit.test("Initialise mars rover location when it has no assigned value", function (assert) {
    var marsRover = new MarsRover();
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should initialise to [0,0] if no value has been set");
});
QUnit.test("Initialise mars rover direction", function (assert) {
    var marsRover = new MarsRover([0, 0], "S");
    assert.equal(marsRover.direction, "S", "Mars Rover direction should be the set value S");
});
QUnit.test("Initialise mars rover direction when it has no assigned value", function (assert) {
    var marsRover = new MarsRover([0, 0]);
    assert.equal(marsRover.direction, "N", "Mars Rover direction should initialise to N if no value has been set");
});
QUnit.test("Check forward movement when facing North", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 1], "Mars Rover location should move to [0,1]");
});
QUnit.test("Check forward movement when facing South", function (assert) {
    var marsRover = new MarsRover([0, 1], "S");
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should move to [0,0]");
});
QUnit.test("Check forward movement when facing East", function (assert) {
    var marsRover = new MarsRover([0, 0], "E");
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [1, 0], "Mars Rover location should move to [1,0]");
});
QUnit.test("Check forward movement when facing West", function (assert) {
    var marsRover = new MarsRover([1, 0], "W");
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should move to [0,0]");
});
QUnit.test("Check backward movement when facing North", function (assert) {
    var marsRover = new MarsRover([0, 1], "N");
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should move to [0,0]");
});
QUnit.test("Check backward movement when facing South", function (assert) {
    var marsRover = new MarsRover([0, 0], "S");
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [0, 1], "Mars Rover location should move to [0,1]");
});
QUnit.test("Check backward movement when facing East", function (assert) {
    var marsRover = new MarsRover([1, 0], "E");
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should move to [0,0]");
});
QUnit.test("Check backward movement when facing West", function (assert) {
    var marsRover = new MarsRover([0, 0], "W");
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [1, 0], "Mars Rover location should move to [1,0]");
});
QUnit.module("Implement commands that turn the rover left/right ");
QUnit.test("Check left turn when facing North", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("l");
    assert.equal(marsRover.direction, "W", "Mars Rover direction should change from North to West");
});
QUnit.test("Check right turn when facing North", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("r");
    assert.equal(marsRover.direction, "E", "Mars Rover direction should change from North to East");
});
QUnit.test("Check left turn when facing South", function (assert) {
    var marsRover = new MarsRover([0, 0], "S");
    marsRover.commandsInput("l");
    assert.equal(marsRover.direction, "W", "Mars Rover direction should change from South to West");
});
QUnit.test("Check right turn when facing South", function (assert) {
    var marsRover = new MarsRover([0, 0], "S");
    marsRover.commandsInput("r");
    assert.equal(marsRover.direction, "E", "Mars Rover direction should change from South to East");
});
QUnit.test("Check left turn when facing East", function (assert) {
    var marsRover = new MarsRover([0, 0], "E");
    marsRover.commandsInput("l");
    assert.equal(marsRover.direction, "N", "Mars Rover direction should change from East to North");
});
QUnit.test("Check right turn when facing East", function (assert) {
    var marsRover = new MarsRover([0, 0], "E");
    marsRover.commandsInput("r");
    assert.equal(marsRover.direction, "S", "Mars Rover direction should change from East to South");
});
QUnit.test("Check left turn when facing West", function (assert) {
    var marsRover = new MarsRover([0, 0], "W");
    marsRover.commandsInput("l");
    assert.equal(marsRover.direction, "S", "Mars Rover direction should change from West to South");
});
QUnit.test("Check right turn when facing West", function (assert) {
    var marsRover = new MarsRover([0, 0], "W");
    marsRover.commandsInput("r");
    assert.equal(marsRover.direction, "N", "Mars Rover direction should change from West to North");
});
QUnit.module("Test both movement and turning");
QUnit.test("Multiple commands test", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("ffrfrbl");
    assert.deepEqual(marsRover.location, [1, 3], "Mars Rover location should be [1,3]");
    assert.equal(marsRover.direction, "W", "Mars Rover direction should change to W");
});
QUnit.test("Empty commands test", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should be [0,0]");
    assert.equal(marsRover.direction, "N", "Mars Rover direction should stay at N");
});
QUnit.test("Invalid commands test", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    marsRover.commandsInput("qwerty");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should be [0,0]");
    assert.equal(marsRover.direction, "E", "Mars Rover direction should change to E and ignore the other invalid commands");
});
QUnit.module("Implement wrapping from one edge of the grid to another");
QUnit.test("Initialise grid with assigned values", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10]);
    assert.deepEqual(marsRover.grid, [10, 10], "Mars Rover grid should be [10,10] ");
});
QUnit.test("Initialise default grid if there is no assigned value", function (assert) {
    var marsRover = new MarsRover([0, 0], "N");
    assert.deepEqual(marsRover.grid, [100, 100], "Mars Rover grid should be the default [100,100] ");
});
QUnit.test("Check the top Y wrapping", function (assert) {
    var marsRover = new MarsRover([0, 9], "N", [10, 10]);
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover Y location should go to 0");
});
QUnit.test("Check the top X wrapping", function (assert) {
    var marsRover = new MarsRover([9, 0], "E", [10, 10]);
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover X location should go to 0");
});
QUnit.test("Check the bottom Y wrapping", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10]);
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [0, 9], "Mars Rover Y location should go to 9");
});
QUnit.test("Check the bottom X wrapping", function (assert) {
    var marsRover = new MarsRover([0, 0], "E", [10, 10]);
    marsRover.commandsInput("b");
    assert.deepEqual(marsRover.location, [9, 0], "Mars Rover X location should go to 9");
});
QUnit.module("Implement obstacle detection before each move to a new square");
QUnit.test("Initialise obstacles with assigned values", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10], [[4, 6], [2, 5], [0, 9]]);
    assert.deepEqual(marsRover.obstacles, [[4, 6], [2, 5], [0, 9]], "Mars Rover obstacles should be [4, 6], [2, 5], [0, 9]");
});
QUnit.test("Initialise obstacles when it has no assigned value", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10], []);
    assert.deepEqual(marsRover.obstacles, [], "Mars Rover obstacles should be the default empty");
});
QUnit.test("Mars Rover should detect an obstacle", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10], [[0, 1]]);
    marsRover.commandsInput("f");
    assert.equal(marsRover.message, "Obstacle detected at 0,1", "Mars Rover should write obstacle detected message");
});
QUnit.test("Check Mars Rover knows when there are no obstacles", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10], []);
    marsRover.commandsInput("f");
    assert.equal(marsRover.message, "", "Mars Rover message should be empty");
});
QUnit.test("Mars Rover should not try to move to obstacle", function (assert) {
    var marsRover = new MarsRover([0, 0], "N", [10, 10], [[0, 1], [4, 5]]);
    marsRover.commandsInput("f");
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover should stay at [0,0]");
});
QUnit.test("Mars Rover should stop when an obstacle is detected", function (assert) {
    var marsRover = new MarsRover([0, 0], "E", [10, 10], [[3, 0], [8, 9]]);
    marsRover.commandsInput("ffflb");
    assert.deepEqual(marsRover.location, [2, 0], "Mars Rover should stop at [2,0]");
});
QUnit.test("Mars Rover should stop when an obstacle is detected after Y wrapping", function (assert) {
    var marsRover = new MarsRover([0, 9], "N", [10, 10], [[0, 5], [8, 9]]);
    marsRover.commandsInput("ffffff");
    assert.deepEqual(marsRover.location, [0, 4], "Mars Rover should stop at [0,0]");
});



