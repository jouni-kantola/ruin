import test from "ava";
import classNames from "../";

const maxLength = 216372;
            
test("should contain heaps of names", t => {
    t.is(classNames().length, maxLength);
});

test("should not contain names with more than 3 chars", t => {
    t.false(classNames().some(name => name.length > 3));
});

test("should not contain names that begin with a digit", t => {
    t.false(classNames().some(name => /^[0-9]/.test(name)));
});

test("should only contain unique values", t => {
    const uniqueValues = new Set(classNames());
    t.is(uniqueValues.size, maxLength);
});

test("exceeded range should return default max", t => {
    t.is(classNames(Number.MAX_VALUE).length, maxLength);
});

test("exceeded range should return default max", t => {
    const rangeLength = 999;
    t.is(classNames(rangeLength).length, rangeLength);
});