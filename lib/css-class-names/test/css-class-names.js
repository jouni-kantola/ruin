import test from "ava";
import cssClasses from "../";

test("should take text and split to array", t => {
    const text = ".a-class {} .another-class {}";
    t.is(cssClasses.split(text).length, 2);
});

test("should take text and create list", t => {
    const text = ".a-class {} .another-class {}";    
    const expected = ["a-class", "another-class"];
    t.same(cssClasses.split(text), expected);
});

test("should replace source with target", t => {
    const content = `.a-class {}
                     .another-class {}
                     .a-class {}`;
    
    const source = "a-class";
    const target = "replaced-class";
    
    const text = cssClasses.replace(content, source, target);

    const sourceRegExp = new RegExp(`.${source}`, "g");
    t.notOk(text.match(sourceRegExp));
    
    const targetRegExp = new RegExp(`.${target}`, "g");
    t.is(text.match(targetRegExp).length, 2);
    
    t.is(text.match(/(?!\.)[0-9a-z\-]+/g).length, 3);
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