import test from "ava";
import mock from "mock-fs";

import io from "../";

test("should read file", async t => {
    const path = "fake-dir/read-target-file";
    const content = "reading lorem ipsum";
    const mockedFile = { [path]: content }; 
    mock(mockedFile);

    const data = await io.read(path);
    t.same(data.path, path);
    t.same(data.content, content);
    
    mock.restore();
});