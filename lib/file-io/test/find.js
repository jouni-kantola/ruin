import test from "ava";
import mock from "mock-fs";

import io from "../";

test("should find files matching glob", async t => {
    const target = "fake-dir/target-file.js";
    const mockedFile = { [target]: "" }; 
    mock(mockedFile);

    const paths = await io.find("**/*.js");
    t.true(paths.some(path => path === target));
    
    mock.restore();
});
