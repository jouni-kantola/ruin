import test from "ava";
import mock from "mock-fs";

import io from "../";

test("should write content to file", async t => {
    const path = "fake-dir/write-target-file";
    const content = "writing lorem ipsum";
    const mockedFile = { [path]: "" }; 
    mock(mockedFile);
    
    await io.write(path, content);
    const data = await io.read(path);
    t.same(data, content);
    
    mock.restore();    
});