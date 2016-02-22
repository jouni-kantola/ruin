import test from "ava";
import cssClasses from "../";

test("should split classes to array", t => {
    const text = ".class-1 {} .second_2 {} ._third .-fourth {}";
    t.is(cssClasses.split(text).length, 4);
});

test("should preserve class names", t => {
    const text = ".a-class {} .another-class {}";    
    const expected = ["a-class", "another-class"];
    t.same(cssClasses.split(text), expected);
});

test("should locate delimiter", t => {
    const text = ".a-class.a-modifier {} .another-class:pseudo {}";    
    const expected = ["a-class", "a-modifier", "another-class"];
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