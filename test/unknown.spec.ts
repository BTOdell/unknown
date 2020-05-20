import {hasProperty} from "unknown";
import chai from "chai";
const expect = chai.expect;

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
const unknownObject: unknown = { something: "string" };
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
