QUnit.module("Implement commands that move the rover forward/backward");
QUnit.test("Initialise mars rover location", function (assert) {
    var marsRover = new MarsRover([3, 8]);
    assert.deepEqual(marsRover.location, [3, 8], "Mars Rover location should be set to the [3,8] set value");
});
QUnit.test("Initialise mars rover location when it has no assigned value", function (assert) {
    var marsRover = new MarsRover();
    assert.deepEqual(marsRover.location, [0, 0], "Mars Rover location should initialise to [0,0] if no value has been set");
});
