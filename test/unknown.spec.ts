import {hasProperty} from "unknown";
import {expect} from "chai";

type KnownObject = { known: "known" };

const knownObject: KnownObject = { known: "known" };
const knownObjectWithMore: KnownObject & Record<string, unknown> = { known: "known", else: "else" };

const unknownUndefined: unknown = undefined;
const unknownNull: unknown = null;
const unknownFalse: unknown = false;
const unknownTrue: unknown = true;
const unknownZero: unknown = 0;
const unknownNumber: unknown = 42;
const unknownEmpty: unknown = "";
const unknownString: unknown = "some string here";
const unknownFunction: unknown = function() {};
const unknownArrow: unknown = () => {};
const unknownEmptyObject: unknown = {};
const unknownObject: unknown = { something: "string" } as unknown;
const unknownObject2: unknown = { something: "something", somethingElse: "somethingElse" } as unknown;
const unknownNumberObject: unknown = { 0: "number" };
const unknownSymbolObject: unknown = { [Symbol("name")]: "symbol" };

describe("unknownObject", function() {
    it("should have 'something'", function() {
        expect(hasProperty(unknownObject, "something")).to.equal(true);
    });
    it("shouldn't have 'nothing'", function() {
        expect(hasProperty(unknownObject, "nothing")).to.equal(false);
    });
    it("shouldn't have zero", function() {
        expect(hasProperty(unknownObject, 0)).to.equal(false);
    });
});

function testUnknownObject2(u: unknown) {
    const test1 = hasProperty(u, "something");
    if (test1) {
        expect(u.something).eq("something");
        const u2: { "something": unknown } = u;
        const test2 = hasProperty(u2, "nothing");
        if (test2) {
            expect(u2.nothing).eq(undefined);
        }
        expect(test2).eq(false);
        const test3 = hasProperty(u2, "somethingElse");
        if (test3) {
            expect(u2.somethingElse).eq("somethingElse");
        }
    }
    expect(test1).eq(true);
}

describe("unknownObject2", function() {
    it("should maintain typing across two checks", testUnknownObject2.bind(undefined, unknownObject2));
});

describe("knownObject", function() {
    it("should preserve the string type", function() {
        if (hasProperty(knownObject, "known")) {
            expect(knownObject.known).eq("known");
        }
    });
    it("should preserve typing across two checks", function() {
        const test1 = hasProperty(knownObjectWithMore, "else");
        if (test1) {
            expect(knownObjectWithMore.known).eq("known");
        }
        expect(test1).eq(true);
    });
});
