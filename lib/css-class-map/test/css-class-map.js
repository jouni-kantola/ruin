import test from "ava";
import map from "../";

test("can only map arrays", t => {
    const expectedError = "Only arrays are supported mapping types.";
    t.throws(() => map(undefined, undefined), expectedError);
    t.throws(() => map(["a"], undefined), expectedError);
    t.throws(() => map("1,2,3", "1,2,3"), expectedError);
    t.throws(() => map(["a"], "1,2,3"), expectedError);
});

test("can only map non empty arrays", t => {
    const expectedError = "Only non-empty arrays can be mapped.";

    t.throws(() => map([], ["a"]), expectedError);
    t.throws(() => map(["a"], []), expectedError);
    t.ok(map(["a"], ["a"]), expectedError);
});
            
test("should take list and create map", t => {
    const classNames = ["a-class", "another-class"];
    const shortClassNames = ["a", "b"];

    const cssClassMap = map(classNames, shortClassNames);
    const keys = Object.keys(cssClassMap);

    keys.forEach((key, index) => {
        t.is(classNames.findIndex(val => val === key), index);
        t.ok(cssClassMap[key]);
    });

    t.is(keys.length, classNames.length);
});

test("short css class names should be exhausted", t => {
    const classNames = ["1", "2"];
    const shortClassNames = ["a", "b"];
    map(classNames, shortClassNames);
    t.is(shortClassNames.length, 0);
});