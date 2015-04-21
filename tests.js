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
