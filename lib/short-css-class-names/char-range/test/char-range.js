import test from "ava";
import charRange from "../";

test("should create range", t => {
    const range = charRange("0", "9");
    t.is(range.length, 10);
});