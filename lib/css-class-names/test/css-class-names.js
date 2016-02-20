import test from "ava";
import cssClasses from "../";

test("should split classes to array", t => {
    const text = ".a-class {} .another-class {}";
    t.is(cssClasses.split(text).length, 2);
});

test("should preserve class names", t => {
    const text = ".a-class {} .another-class {}";    
    const expected = ["a-class", "another-class"];
    t.same(cssClasses.split(text), expected);
});

test("should trim whitespace", t => {
    const className = "a-class";
    const text = `.${className}    
                 {}  `;
    t.is(cssClasses.split(text)[0], className);
});

test("should handle _ and - as part of class name", t => {
   const text = ".a-b_c {} .a--b__c {}";
   const expected = ["a-b_c", "a--b__c"];
   t.same(cssClasses.split(text), expected);
});

test("should not split string values", t => {
   const text = `.a-b_c {} .a--b__c
                 {} '.a' "
                 .b"`;
   const expected = ["a-b_c", "a--b__c"];
   t.same(cssClasses.split(text), expected);
});

test("should identify class hierarchies", t => {
   const text = ".b-e .b-e--m {} .b-e.m{}";
   const expected = ["b-e", "b-e--m", "m"];
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