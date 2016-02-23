import test from "ava";
import mock from "mock-fs";

import io from "../";

test("should find files matching glob", async t => {
    const targetDir = "fake-dir";
    const firstFile = "first-file.js";
    const secondFile = "second-file.js";
    const mockedFile = { [targetDir]: { [firstFile]: "", [secondFile]: "" } }; 
    mock(mockedFile);

    const paths = await io.find("**/*.js");
    t.true(paths.some(path => path === `${targetDir}/${firstFile}`));
    t.true(paths.some(path => path === `${targetDir}/${secondFile}`));
    
    mock.restore();
});
