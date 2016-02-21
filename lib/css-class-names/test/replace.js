import test from "ava";
import cssClasses from "../";

test("should replace a with b", t => {
    const content = `.a-class {}`;
    
    const source = "a-class";
    const target = "replaced-class";
    
    const text = cssClasses.replace(content, source, target);

    const sourceRegExp = new RegExp(`\\.${source}`);
    t.notOk(text.match(sourceRegExp));
    
    const targetRegExp = new RegExp(`\\.${target}`, "g");
    t.is(text.match(targetRegExp).length, 1);
    
    t.is(text.match(/\.[0-9a-z\-]+/g).length, 1);
});

test("should replace source with target", t => {
    const content = `.a-class {}
                     .another-class {}
                     .a-class {}`;
    
    const source = "a-class";
    const target = "replaced-class";
    
    const text = cssClasses.replace(content, source, target);

    const sourceRegExp = new RegExp(`\\.${source}`, "g");
    t.notOk(text.match(sourceRegExp));
    
    const targetRegExp = new RegExp(`\\.${target}`, "g");
    t.is(text.match(targetRegExp).length, 2);
    
    t.is(text.match(/(?!\.)[0-9a-z\-]+/g).length, 3);
});

test("should only replace exact match", t => {
    const content = `.b {}
                     .b-b {}
                     .b-b.m {}
                     .b-b__e {}
                     .b-b--m {}
                     .b-b .e {}
                     .b-b .b-b {}`;
    
    const source = "b-b";
    const target = "replaced-class";
    
    const text = cssClasses.replace(content, source, target);
    const sourceRegExp = new RegExp(`\\.${source}`, "g");
    t.is(text.match(sourceRegExp).length, 2);
    
    const targetRegExp = new RegExp(`\\.${target}`, "g");
    t.is(text.match(targetRegExp).length, 5);
});

test("should preserve number of classes", t => {
    const content = `.b {}
                     .b-b {}
                     .b-b.m {}
                     .b-b__e {}
                     .b-b--m {}
                     .b-b .e {}
                     .b-b .b-b {}`;
    
    const source = "b";
    const target = "replaced-class";
    
    const text = cssClasses.replace(content, source, target);
    
    const re = /\.[\w\-]+/g;
    t.is(content.match(re).length, text.match(re).length);
});

test("should replace all in css class map", t => {
    const content = `.a-class {}
                     .another-class {}
                     .a-class {}`;
        
    const cssClassMap = {
        "a-class": "a-replaced-class",
        "another-class": "another-replaced-class"
    };
    
    const expected = ".a-replaced-class{}.another-replaced-class{}.a-replaced-class{}";

    const updatedContent = cssClasses.replaceAll(content, cssClassMap);

    t.same(updatedContent.replace(/\s/g, ""), expected);
});