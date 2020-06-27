declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};

_.VERSION; // $ExpectType string
_.each([1, 2, 3], (num) => alert(num.toString()));
_.each({ one: 1, two: 2, three: 3 }, (value, key) => alert(value.toString()));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (value, key) => value * 3);
let plucked: string[] = _.map([{key: 'apples'}, {key: 'oranges'}], 'key');

//var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);    // https://typescript.codeplex.com/workitem/1960
var sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github
sum = _.reduce<string, number>({'a':'1', 'b':'2', 'c':'3'}, (memo, numstr) => memo + (+numstr));

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);    // https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight<number[], number[]>(list, (a, b) => a.concat(b), []);

namespace TestFind {
    let array: {a: string}[] = [{a: 'a'}, {a: 'b'}];
    let list: _.List<{a: string}> = {0: {a: 'a'}, 1: {a: 'b'}, length: 2};
    let dict: _.Dictionary<{a: string}> = {a: {a: 'a'}, b: {a: 'b'}};
    let context = {};

    {
        let iterator = (value: {a: string}, index: number, list: _.List<{a: string}>) => value.a === 'b';
        let result: {a: string} | undefined;

        result = _.find<{a: string}>(array, iterator);
        result = _.find<{a: string}>(array, iterator, context);
        result = _.find<{a: string}, {a: string}>(array, {a: 'b'});
        result = _.find<{a: string}>(array, 'a');

        result = _(array).find<{a: string}>(iterator);
        result = _(array).find<{a: string}>(iterator, context);
        result = _(array).find<{a: string}, {a: string}>({a: 'b'});
        result = _(array).find<{a: string}>('a');

        result = _(array).chain().find<{a: string}>(iterator).value();
        result = _(array).chain().find<{a: string}>(iterator, context).value();
        result = _(array).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(array).chain().find<{a: string}>('a').value();

        result = _.find<{a: string}>(list, iterator);
        result = _.find<{a: string}>(list, iterator, context);
        result = _.find<{a: string}, {a: string}>(list, {a: 'b'});
        result = _.find<{a: string}>(list, 'a');

        result = _(list).find<{a: string}>(iterator);
        result = _(list).find<{a: string}>(iterator, context);
        result = _(list).find<{a: string}, {a: string}>({a: 'b'});
        result = _(list).find<{a: string}>('a');

        result = _(list).chain().find<{a: string}>(iterator).value();
        result = _(list).chain().find<{a: string}>(iterator, context).value();
        result = _(list).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(list).chain().find<{a: string}>('a').value();

        result = _.detect<{a: string}>(array, iterator);
        result = _.detect<{a: string}>(array, iterator, context);
        result = _.detect<{a: string}, {a: string}>(array, {a: 'b'});
        result = _.detect<{a: string}>(array, 'a');

        result = _(array).detect<{a: string}>(iterator);
        result = _(array).detect<{a: string}>(iterator, context);
        result = _(array).detect<{a: string}, {a: string}>({a: 'b'});
        result = _(array).detect<{a: string}>('a');

        result = _(array).chain().detect<{a: string}>(iterator).value();
        result = _(array).chain().detect<{a: string}>(iterator, context).value();
        result = _(array).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(array).chain().detect<{a: string}>('a').value();

        result = _.detect<{a: string}>(list, iterator);
        result = _.detect<{a: string}>(list, iterator, context);
        result = _.detect<{a: string}, {a: string}>(list, {a: 'b'});
        result = _.detect<{a: string}>(list, 'a');

        result = _(list).detect<{a: string}>(iterator);
        result = _(list).detect<{a: string}>(iterator, context);
        result = _(list).detect<{a: string}, {a: string}>({a: 'b'});
        result = _(list).detect<{a: string}>('a');

        result = _(list).chain().detect<{a: string}>(iterator).value();
        result = _(list).chain().detect<{a: string}>(iterator, context).value();
        result = _(list).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(list).chain().detect<{a: string}>('a').value();
    }

    {
        let iterator = (element: {a: string}, key: string, list: _.Dictionary<{a: string}>) => element.a === 'b';
        let result: {a: string} | undefined;

        result = _.find<{a: string}>(dict, iterator);
        result = _.find<{a: string}>(dict, iterator, context);
        result = _.find<{a: string}, {a: string}>(dict, {a: 'b'});
        result = _.find<{a: string}>(dict, 'a');

        result = _(dict).find<{a: string}>(iterator);
        result = _(dict).find<{a: string}>(iterator, context);
        result = _(dict).find<{a: string}, {a: string}>({a: 'b'});
        result = _(dict).find<{a: string}>('a');

        result = _(dict).chain().find<{a: string}>(iterator).value();
        result = _(dict).chain().find<{a: string}>(iterator, context).value();
        result = _(dict).chain().find<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(dict).chain().find<{a: string}>('a').value();

        result = _.detect<{a: string}>(dict, iterator);
        result = _.detect<{a: string}>(dict, iterator, context);
        result = _.detect<{a: string}, {a: string}>(dict, {a: 'b'});
        result = _.detect<{a: string}>(dict, 'a');

        result = _(dict).detect<{a: string}>(iterator);
        result = _(dict).detect<{a: string}>(iterator, context);
        result = _(dict).detect<{a: string}, {a: string}>({a: 'b'});
        result = _(dict).detect<{a: string}>('a');

        result = _(dict).chain().detect<{a: string}>(iterator).value();
        result = _(dict).chain().detect<{a: string}>(iterator, context).value();
        result = _(dict).chain().detect<{a: string}, {a: string}>({a: 'b'}).value();
        result = _(dict).chain().detect<{a: string}>('a').value();
    }

    {
        let iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: string | undefined;

        result = _.find<string>('abc', iterator);
        result = _.find<string>('abc', iterator, context);

        result = _('abc').find<string>(iterator);
        result = _('abc').find<string>(iterator, context);

        result = _('abc').chain().find<string>(iterator).value();
        result = _('abc').chain().find<string>(iterator, context).value();

        result = _.detect<string>('abc', iterator);
        result = _.detect<string>('abc', iterator, context);

        result = _('abc').detect<string>(iterator);
        result = _('abc').detect<string>(iterator, context);

        result = _('abc').chain().detect<string>(iterator).value();
        result = _('abc').chain().detect<string>(iterator, context).value();
    }

    {
        _(list).map(x => x.a);
    }
}

var evens = _.filter([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

var capitalLetters = _.filter({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

var listOfPlays = [{ title: "Cymbeline", author: "Shakespeare", year: 1611 }, { title: "The Tempest", author: "Shakespeare", year: 1611 }, { title: "Other", author: "Not Shakespeare", year: 2012 }];
_.where(listOfPlays, { author: "Shakespeare", year: 1611 });

var odds = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 == 0);

_.every([true, 1, null, 'yes'], x => !!_.identity(x));

_.any([null, 0, 'yes', false]);

_.some([1, 2, 3, 4], l => l % 3 === 0);

_.some({ a: 'a', b: 'B', c: 'C', d: 'd' }, l => l === l.toUpperCase());

_.contains([1, 2, 3], 3);

_.contains([1, 2, 3], 3, 1);

_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33479
var foo: any[] = [{'a': 1, 'b': 2}];
_.pluck(foo, 'a');

var stooges = [{ name: 'moe', age: 40 }, { name: 'larry', age: 50 }, { name: 'curly', age: 60 }];
_.pluck(stooges, 'name');

_.max(stooges, (stooge) => stooge.age);
_.min(stooges, (stooge) => stooge.age);
_.max({ a: 1, b: 2 });
_.max({ a: 'a', b: 'bb' }, (v, k) => v.length);
_.min({ a: 1, b: 2 });
_.min({ a: 'a', b: 'bb' }, (v, k) => v.length);

var numbers = [10, 5, 100, 2, 1000];
_.max(numbers);
_.min(numbers);

_.sortBy([1, 2, 3, 4, 5, 6], (num) => Math.sin(num));

_([1, 2, 3]).chain()
    .sortBy(x => -x)
    .sortBy(x => -x)
    .value().length;

_([1.3, 2.1, 2.4]).groupBy((e) => Math.floor(e));
_.groupBy([1.3, 2.1, 2.4], (num) => Math.floor(num).toString());
_.groupBy(['one', 'two', 'three'], 'length');

_.indexBy(stooges, 'age')['40'].age;
_(stooges).indexBy('age')['40'].name;
_(stooges)
    .chain()
    .indexBy('age')
    .value()['40'].age;

let pensioners: string[] = _.chain(stooges)
    .filter(p => p.age >= 60)
    .map(p => p.name)
    .value();

var usersData: _.Dictionary<{ age: number; name: string }> = {
    'user id': { name: 'moe', age: 40 },
    'other user Id': { name: 'larry', age: 50 },
    'fake id': { name: 'curly', age: 60 },
};

let youngPeopleId: string[] = _.chain(usersData)
    .map((p, k: string) => k)
    .value();

let usersTable: { age: number; name: string; id: string }[] = _.chain(usersData)
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return { id: k, ...p };
    })
    .value();

// Test map function with _ChainOfArrays<>
let usersTable_2 /*: { age: number; name: string; id: string }[][]*/ = _.chain(usersData)
    .map<{ age: number; name: string; id: string }[]>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }[]>(p => {
        return [
            {
                login: p.id,
                fullName: p.name,
                score: p.age,
            },
        ];
    })
    .value();

_.countBy([1, 2, 3, 4, 5], (num) => (num % 2 == 0) ? 'even' : 'odd');

_.shuffle([1, 2, 3, 4, 5, 6]);

(function (a, b, c, d) { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);

_.size({ one: 1, two: 2, three: 3 });

_.partition<number>([0, 1, 2, 3, 4, 5], (num) => {return num % 2 == 0 });

interface Family {
    name: string;
    relation: string;
}
var isUncleMoe = _.matches<Family>({ name: 'moe', relation: 'uncle' });
_.filter([{ name: 'larry', relation: 'father' }, { name: 'moe', relation: 'uncle' }], isUncleMoe);
var uncleMoe: Family = { name: 'moe', relation: 'uncle' };
isUncleMoe(uncleMoe);

///////////////////////////////////////////////////////////////////////////////////////

_.first([5, 4, 3, 2, 1]);
_.initial([5, 4, 3, 2, 1]);
_.last([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.compact([0, 1, false, 2, '', 3]);

_.flatten([1, 2, 3, 4]);
_.flatten([1, [2]]);

// typescript doesn't like the elements being different
_.flatten([1, [2], [3, [[4]]]]);
_.flatten([1, [2], [3, [[4]]]], true);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1]);
_.difference([1, 2, 3, 4, 5], [5, 2, 10]);
_.uniq([1, 2, 1, 3, 1, 4]);
_.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false]);
var r = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
_.object([['moe', 30], ['larry', 40], ['curly', 50]]);
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.sortedIndex([10, 20, 30, 40, 50], 35);
_.findIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findIndex([{a: 'a'}, {a: 'b'}], {a: 'b'});
_.findLastIndex([1, 2, 3, 1, 2, 3], num => num % 2 === 0);
_.findLastIndex([{ a: 'a' }, { a: 'b' }], { a: 'b' });
_.range(10);
_.range(1, 11);
_.range(0, 30, 5);
_.range(0, 30, 5);
_.range(0);

///////////////////////////////////////////////////////////////////////////////////////

var func = function (greeting) { return `${greeting}: ${this.name}` };
// need a second var otherwise typescript thinks func signature is the above func type,
// instead of the newly returned _bind => func type.
var func2 = _.bind(func, { name: 'moe' }, 'hi');
func2();

var buttonView = {
    label: 'underscore',
    onClick() { alert('clicked: ' + this.label); },
    onHover() { console.log('hovering: ' + this.label); }
};
_.bindAll(buttonView);
$('#underscore_button').bind('click', buttonView.onClick);

var fibonacci = _.memoize(function (n) {
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
});

class MyClass {};

var classMemoized = _.memoize<MyClass>(function (classInstance) {
    return new classInstance();
});

var log = _.bind(console.log, console);
_.delay(log, 1000, 'logged later');

_.defer(function () { alert('deferred'); });

var updatePosition = (param:string) => alert('updating position... Param: ' + param);
var throttled = _.throttle(updatePosition, 100);
$(window).scroll(throttled);
throttled.cancel();

var calculateLayout = (param:string) => alert('calculating layout... Param: ' + param);
var lazyLayout = _.debounce(calculateLayout, 300);
$(window).resize(lazyLayout);
lazyLayout.cancel();

var createApplication = (param:string) => alert('creating application... Param: ' + param);
var initialize = _.once(createApplication);
initialize("me");
initialize("me");

var notes: any[] = [1,2,3];
var render = () => alert("rendering...");
var renderNotes = _.after(notes.length, render);
_.each(notes, (note) => note.asyncSave({ success: renderNotes }));

var hello = function (name) { return "hello: " + name; };
// can't use the same "hello" var otherwise typescript fails
var hello2 = _.wrap(hello, (func) => { return `before, ${func("moe")} + after`; });
hello2();

var greet = function (name) { return "hi: " + name; };
var exclaim = function (statement) { return statement + "!"; };
var welcome = _.compose(exclaim, greet);
welcome('moe');

var partialApplicationTestFunction = (a: string, b: number, c: boolean, d: string, e: number, f: string) => {  }
var partialApplicationResult = _.partial(partialApplicationTestFunction, "", 1);
var parametersCanBeStubbed = _.partial(partialApplicationResult, _, _, _, "");

///////////////////////////////////////////////////////////////////////////////////////

_.keys({ one: 1, two: 2, three: 3 });
_.values({ one: 1, two: 2, three: 3 });
_.pairs({ one: 1, two: 2, three: 3 });
_.invert({ Moe: "Moses", Larry: "Louis", Curly: "Jerome" });
_.functions(_);
_.extend({ name: 'moe' }, { age: 50 });
_.extendOwn({ name: 'moe'}, { age: 50 });
_.assign({ name: 'moe'}, { age: 50 });

_.pick({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age').age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']).age = 5;
_.pick({ name: 'moe', age: 50, userid: 'moe1' }, (value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).age = 5;
_({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).age = 5;

_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick('name', 'age').value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick(['name', 'age']).value().age = 5;
_.chain({ name: 'moe', age: 50, userid: 'moe1' }).pick((value, key) => {
    return key === 'name' || key === 'age';
}).value().age = 5;

_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, 'name', 'age');
_.omit({ name: 'moe', age: 50, userid: 'moe1' }, ['name', 'age']);

_.mapObject({ a: 1, b: 2 }, val => val * 2) === _.mapObject({ a: 2, b: 4 }, _.identity);
_.mapObject({ a: 1, b: 2 }, (val, key, o) => o[key] * 2) === _.mapObject({ a: 2, b: 4}, _.identity);
_.mapObject({ x: "string 1", y: "string 2" }, 'length') === _.mapObject({ x: "string 1", y: "string 2"}, _.property('length'));

var iceCream = { flavor: "chocolate" };
_.defaults(iceCream, { flavor: "vanilla", sprinkles: "lots" });

_.clone({ name: 'moe' });
_.clone(['i', 'am', 'an', 'object!']);

_([1, 2, 3, 4])
    .chain()
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.chain([1, 2, 3, 200])
    .filter((num) => { return num % 2 == 0; })
    .tap(alert)
    .map((num) => { return num * num; })
    .value();

_.has({ a: 1, b: 2, c: 3 }, "b");

var moe = { name: 'moe', luckyNumbers: [13, 27, 34] };
var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
moe == clone;
_.isEqual(moe, clone);

_.isEmpty([1, 2, 3]);
_.isEmpty({});

_.isElement($('body')[0]);

(function () { return _.isArray(arguments); })();
_.isArray([1, 2, 3]);

_.isObject({});
_.isObject(1);

_.property('name')(moe);
_.property(['name'])(moe);
_.property(['luckyNumbers', 2])(moe)

// (() => { return _.isArguments(arguments); })(1, 2, 3);
_.isArguments([1, 2, 3]);

_.isFunction(alert);

_.isString("moe");

_.isNumber(8.4 * 5);

_.isFinite(-101);

_.isFinite(-Infinity);

_.isBoolean(null);

_.isDate(new Date());

_.isRegExp(/moe/);

_.isNaN(NaN);
_.isNaN(undefined);

_.isNull(null);
_.isNull(undefined);

_.isUndefined((window).missingVariable);

//////////////////////////////////// User Defined Guard tests

function useElement(arg: Element) {};
function useArguments(arg: IArguments) {};
function useFunction(arg: Function) {};
function useError(arg: Error) {};
function useString(arg: String) {};
function useNumber(arg: Number) {};
function useBoolean(arg: Boolean) {};
function useDate(arg: Date) {};
function useRegExp(arg: RegExp) {};
function useArray<T>(arg: T[]) {};
function useSymbol(arg: symbol) {};

var guardedType: {} = {};
if(_.isElement(guardedType)) useElement(guardedType);
if(_.isArray(guardedType)) useArray(guardedType);
if(_.isArray<String>(guardedType)) useArray(guardedType);
if(_.isArguments(guardedType)) useArguments(guardedType);
if(_.isFunction(guardedType)) useFunction(guardedType);
if(_.isError(guardedType)) useError(guardedType);
if(_.isString(guardedType)) useString(guardedType);
if(_.isNumber(guardedType)) useNumber(guardedType);
if(_.isBoolean(guardedType)) useBoolean(guardedType);
if(_.isDate(guardedType)) useDate(guardedType);
if(_.isRegExp(guardedType)) useRegExp(guardedType);
if(_.isSymbol(guardedType)) useSymbol(guardedType);

///////////////////////////////////////////////////////////////////////////////////////

var UncleMoe = { name: 'moe' };
_.constant(UncleMoe)();

typeof _.now() === "number";

var underscore = _.noConflict();

var moe2 = { name: 'moe' };
moe2 === _.identity(moe);

var genie;
var r2 = _.times(3, (n) => { return n * n });
_(3).times(function (n) { genie.grantWishNumber(n); });

_.random(0, 100);

_.mixin({
    capitalize(string) {
        return string.charAt(0).toUpperCase() + string.substring(1).toLowerCase();
    }
});
(<any>_("fabio")).capitalize();

_.uniqueId('contact_');

_.escape('Curly, Larry & Moe');

var object = { cheese: 'crumpets', stuff() { return 'nonsense'; } };
_.result(object, 'cheese');

_.result(object, 'stuff');

var compiled = _.template("hello: <%= name %>");
compiled({ name: 'moe' });
let source: string = compiled.source;
var list2 = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list2)({ people: ['moe', 'curly', 'larry'] });
var template = _.template("<b><%- value %></b>");
template({ value: '<script>' });
var compiled2 = _.template("<% print('Hello ' + epithet); %>");
compiled2({ epithet: "stooge" });
var oldTemplateSettings = _.templateSettings;
_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};
var template2 = _.template("Hello {{ name }}!");
template2({ name: "Mustache" });
_.template("Using 'with': <%= data.answer %>", oldTemplateSettings)({ variable: 'data' });

_.template("Using 'with': <%= data.answer %>", { variable: 'data' })({ answer: 'no' });
let template0 = _.template("I don't depend on any variables");
template0();

//////////////// Chain Tests
function chain_tests() {
    // https://typescript.codeplex.com/workitem/1960
    var numArray = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(num => num % 2 == 0)
        .map(num => num * num)
        .value();

    var strArray = _([1, 2, 3, 4])
        .chain()
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => "string" + num)
        .value();

    var n = _.chain([1, 2, 3, 200])
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => num * num)
        .max()
        .value();

    var hoverOverValueShouldBeNumberNotAny = _([1, 2, 3]).chain()
        .map(num => [num, num + 1])
        .flatten()
        .find(num => num % 2 == 0)
        .value();

    var firstVal: number | undefined = _.chain([1, 2, 3])
        .first()
        .value();

    var firstVal2: number | undefined = _.chain([])
        .first()
        .value();

    let numberObjects = [{property: 'odd', value: 1}, {property: 'even', value: 2}, {property: 'even', value: 0}];
    let evenAndOddGroupedNumbers = _.chain(numberObjects)
        .groupBy('property')
        .mapObject((objects) => _.pluck(objects, 'value'))
        .value(); // { odd: [1], even: [0, 2] }

  var matrixOfString : string[][] = _.chain({'foo' : '1', 'bar': '1'})
      .keys()    // return ['foo', 'bar'] : string[]
      .pairs()   // return [['foo', '0'], ['bar', '1']] : string[][]
      .value();

    interface IYears {
        2016: number;
        2017: number;
    }

    let yearObject: IYears = {2016: 1, 2017: 2};
    let valuePerYear: number[] = _.chain(yearObject)
        .values()
        .value()

    const arr1: string[] = ['z', 'x', 'y'];
    const query = 'z';
    let arr2: string[] = ['a', 'b', 'c'];
    arr2 = _.chain(arr1)
        .union(arr2)
        .without(query)
        .value();
}

var obj: { [k: string] : number } = {
       'test' : 5,
       'another' : 8,
       'third' : 10
    };
let empty = {};

_.chain(obj).map(function (value, key) {
    empty[key] = value;
    console.log("vk", value, key);
});

function strong_typed_values_tests() {
    var dictionaryLike: { [k: string] : {title: string, value: number} } = {
        'test' : { title: 'item1', value: 5 },
        'another' : { title: 'item2', value: 8 },
        'third' : { title: 'item3', value: 10 }
    };

    _.chain(dictionaryLike).values().filter((r) => {
        return r.value >= 8;
    }).map((r) => {
        return [r.title, true];
    }).object().value();

    var x: number = _(dictionaryLike).chain().filter((x) => {
        console.log(x.title);
        console.log(x.value.toFixed());
        return x.title == 'item1';
    }).size().value();

    _.values<{title: string, value: number}>(dictionaryLike);
}

// tests for #7931 - verify that the result of a function like reduce that returns a singleton can be chained further
// $ExpectType number[]
_.chain([1, 2, 3])
    .reduce((acc, x) => { acc.unshift(x); return acc; }, [] as number[])
    .map(x => x + 1)
    .value();

// $ExpectType boolean
_.chain([{ a: 1, b: 2, c: 3 }, { a: 4, b: 5, c: 6 }])
    .findWhere({ a: 1 })
    .some(n => n === 2)
    .value();

// $ExpectType number
_.chain([1, 2, 3, 4, 5, 6])
    .chunk(3)
    .first()
    .reduce((aggregate, n) => aggregate + n, 0)
    .value();

// common testing types and objects
const context = {};

interface StringRecord {
    a: string;
    b: string;
}

const stringRecordProperty = 'a';
const partialStringRecord: Partial<StringRecord> = { a: 'b' };

interface StringRecordAugmentedList extends _.List<StringRecord> {
    notAListProperty: boolean;
}

const stringRecordArray: StringRecord[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const stringRecordAugmentedList: StringRecordAugmentedList = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3, notAListProperty: true };
const stringRecordList: _.List<StringRecord> = stringRecordAugmentedList;
const stringRecordListValueIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a;
const stringRecordListBooleanIterator = (value: StringRecord, index: number, list: _.List<StringRecord>) => value.a === 'b';

interface StringRecordExplicitDictionary extends _.Dictionary<StringRecord> {
    a: StringRecord;
    b: StringRecord;
    c: StringRecord;
}

const stringRecordExcplcitDictionary: StringRecordExplicitDictionary = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const stringRecordDictionary: _.Dictionary<StringRecord> = stringRecordExcplcitDictionary;
const stringRecordDictionaryValueIterator = (element: StringRecord, key: string, dictionary: _.Dictionary<StringRecord>) => element.a;
const stringRecordDictionaryBooleanIterator = (element: StringRecord, key: string, list: _.Dictionary<StringRecord>) => element.a === 'b';

type StringRecordOrUndefined = StringRecord | undefined;

const stringRecordOrUndefinedArray: StringRecordOrUndefined[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const stringRecordOrUndefinedList: _.List<StringRecordOrUndefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };
const stringRecordOrUndefinedDictionary: _.Dictionary<StringRecordOrUndefined> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: undefined };

interface IntersectingMixedTypeRecord {
    a: boolean;
    c: string;
}

type IntersectingProperties = StringRecord | IntersectingMixedTypeRecord;

const intersectingObjectPropertiesArray: IntersectingProperties[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
const intersectingObjectPropertiesList: _.List<IntersectingProperties> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
const intersectingObjectPropertiesDictionary: _.Dictionary<IntersectingProperties> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };

interface NonIntersectingStringRecord {
    onlyNonIntersectingStringRecord: string;
}

type NonIntersectingProperties = StringRecord | NonIntersectingStringRecord;

const nonIntersectingPropertiesArray: NonIntersectingProperties[] = [{ a: 'a', b: 'c' }, { onlyNonIntersectingStringRecord: 'b' }];
const nonIntersectingPropertiesList: _.List<NonIntersectingProperties> = { 0: { a: 'a', b: 'c' }, 1: { onlyNonIntersectingStringRecord: 'b' }, length: 2 };
const nonIntersectingPropertiesDictionary: _.Dictionary<NonIntersectingProperties> = { a: { a: 'a', b: 'c' }, b: { onlyNonIntersectingStringRecord: 'b' } };

const simpleString = 'abc';
const stringListValueIterator = (value: string, index: number, list: _.List<string>) => value.length;
const stringListBooleanIterator = (value: string, index: number, list: _.List<string>) => value === 'b';

const simpleStringArray: string[] = ['a', 'c'];
const simpleStringList: _.List<string> = { 0: 'a', 1: 'c', length: 2 };

const simpleNumber = 7;

declare const mixedIterabilityValue: number | number[];

// avoid referencing types under test directly by translating them to other types to avoid needing to make lots of changes if
// the types under test need to be refactored
interface UnderscoreType<TWrappedValue, TItemType> { }

interface UnderscoreTypeExtractor {
    <T, V>(chainResult: _.Underscore<T, V>): UnderscoreType<V, T>;
}

declare const extractUnderscoreTypes: UnderscoreTypeExtractor;

interface ChainType<TWrappedValue, TItemType> { }

interface ChainTypeExtractor {
    <T, V>(chainResult: _._Chain<T, V>): ChainType<V, T>;
}

declare const extractChainTypes: ChainTypeExtractor;

// Collections

// map, collect
{
    // function iterator
    _.map(stringRecordArray, stringRecordListValueIterator); // $ExpectType string[]
    _.map(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordArray).map(stringRecordListValueIterator); // $ExpectType string[]
    _(stringRecordArray).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordArray).map(stringRecordListValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordArray).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordArray, stringRecordListValueIterator); // $ExpectType string[]
    _.collect(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordArray).collect(stringRecordListValueIterator); // $ExpectType string[]
    _(stringRecordArray).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordListValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordList, stringRecordListValueIterator); // $ExpectType string[]
    _.map(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).map(stringRecordListValueIterator); // $ExpectType string[]
    _(stringRecordList).map(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordListValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordList).map(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordList, stringRecordListValueIterator); // $ExpectType string[]
    _.collect(stringRecordList, stringRecordListValueIterator, context); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordListValueIterator); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordListValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordListValueIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType string[]
    _.map(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordDictionaryValueIterator); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType string[]
    _.collect(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordDictionaryValueIterator); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryValueIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordDictionaryValueIterator, context)); // $ExpectType ChainType<string[], string>

    _.map(simpleString, stringListValueIterator); // $ExpectType number[]
    _.map(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).map(stringListValueIterator); // $ExpectType number[]
    _(simpleString).map(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).map(stringListValueIterator)); // $ExpectType ChainType<number[], number>
    extractChainTypes(_.chain(simpleString).map(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>
    _.collect(simpleString, stringListValueIterator); // $ExpectType number[]
    _.collect(simpleString, stringListValueIterator, context); // $ExpectType number[]
    _(simpleString).collect(stringListValueIterator); // $ExpectType number[]
    _(simpleString).collect(stringListValueIterator, context); // $ExpectType number[]
    extractChainTypes(_.chain(simpleString).collect(stringListValueIterator)); // $ExpectType ChainType<number[], number>
    extractChainTypes(_.chain(simpleString).collect(stringListValueIterator, context)); // $ExpectType ChainType<number[], number>

    // partial object iterator with a non-nullable single type
    _.map(stringRecordArray, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordArray).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordArray, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordArray).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a non-nullable intersecting type union
    _.map(intersectingObjectPropertiesArray, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesArray).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(intersectingObjectPropertiesArray, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesArray).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(intersectingObjectPropertiesList, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(intersectingObjectPropertiesList, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(intersectingObjectPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(intersectingObjectPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]
    _(intersectingObjectPropertiesDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(intersectingObjectPropertiesDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a nullable type union
    _.map(stringRecordOrUndefinedArray, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedArray).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordOrUndefinedArray, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedArray).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordOrUndefinedList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordOrUndefinedList, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(stringRecordOrUndefinedDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordOrUndefinedDictionary, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordOrUndefinedDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesArray).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(nonIntersectingPropertiesArray, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesArray).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesList).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(nonIntersectingPropertiesList, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesList).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    _.map(nonIntersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesDictionary).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(nonIntersectingPropertiesDictionary, partialStringRecord); // $ExpectType boolean[]
    _(nonIntersectingPropertiesDictionary).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // partial object iterator with type any (see #33479)
    _.map(stringRecordArray as any, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordArray as any).map(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordArray as any).map(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>
    _.collect(stringRecordArray as any, partialStringRecord); // $ExpectType boolean[]
    _(stringRecordArray as any).collect(partialStringRecord); // $ExpectType boolean[]
    extractChainTypes(_.chain(stringRecordArray as any).collect(partialStringRecord)); // $ExpectType ChainType<boolean[], boolean>

    // property name iterator with a non-nullable single type
    _.map(stringRecordArray, stringRecordProperty); // $ExpectType string[]
    _(stringRecordArray).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordArray).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordArray, stringRecordProperty); // $ExpectType string[]
    _(stringRecordArray).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordArray).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.map(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).map(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).map(stringRecordProperty)); // $ExpectType ChainType<string[], string>
    _.collect(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).collect(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iterator with a non-nullable intersecting type union
    _.map(intersectingObjectPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesArray).map(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>
    _.collect(intersectingObjectPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.map(intersectingObjectPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesList).map(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesList).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>
    _.collect(intersectingObjectPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesList).collect(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesList).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.map(intersectingObjectPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesDictionary).map(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>
    _.collect(intersectingObjectPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesDictionary).collect(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    // property name iterator with a nullable type union
    _.map(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedList).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedList).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedList).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedList).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedDictionary).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedDictionary).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with a non-nullable non-intersecting type union
    _.map(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.map(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesDictionary).map(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).map(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>
    _.collect(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesDictionary).collect(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).collect(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with type any (see #33479)
    _.map(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]
    _(stringRecordArray as any).map(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordArray as any).map(stringRecordProperty)); // $ExpectType ChainType<any[], any>
    _.collect(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]
    _(stringRecordArray as any).collect(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordArray as any).collect(stringRecordProperty)); // $ExpectType ChainType<any[], any>
}

// filter, select
{
    // function iterator
    _.filter(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordArray).filter(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).filter(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordArray, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.select(stringRecordArray, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordArray).select(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordArray).select(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).select(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordArray).select(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _.select(stringRecordList, stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordListBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordListBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordListBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordList).select(stringRecordListBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _.filter(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _.select(stringRecordDictionary, stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordDictionaryBooleanIterator, context)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(simpleString, stringListBooleanIterator); // $ExpectType string[]
    _.filter(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).filter(stringListBooleanIterator); // $ExpectType string[]
    _(simpleString).filter(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).filter(stringListBooleanIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).filter(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>
    _.select(simpleString, stringListBooleanIterator); // $ExpectType string[]
    _.select(simpleString, stringListBooleanIterator, context); // $ExpectType string[]
    _(simpleString).select(stringListBooleanIterator); // $ExpectType string[]
    _(simpleString).select(stringListBooleanIterator, context); // $ExpectType string[]
    extractChainTypes(_.chain(simpleString).select(stringListBooleanIterator)); // $ExpectType ChainType<string[], string>
    extractChainTypes(_.chain(simpleString).select(stringListBooleanIterator, context)); // $ExpectType ChainType<string[], string>

    // partial object iterator
    _.filter(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordArray).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordArray, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordArray).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordList).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, partialStringRecord); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(partialStringRecord); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(partialStringRecord)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // property name iterator
    _.filter(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordArray).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordArray, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordArray).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordList, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordList).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.filter(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).filter(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).filter(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
    _.select(stringRecordDictionary, stringRecordProperty); // $ExpectType StringRecord[]
    _(stringRecordDictionary).select(stringRecordProperty); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordDictionary).select(stringRecordProperty)); // $ExpectType ChainType<StringRecord[], StringRecord>
}

// pluck
{
    // property name iterator with a non-nullable single type
    _.pluck(stringRecordArray, stringRecordProperty); // $ExpectType string[]
    _(stringRecordArray).pluck(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordArray).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.pluck(stringRecordList, stringRecordProperty); // $ExpectType string[]
    _(stringRecordList).pluck(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordList).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    _.pluck(stringRecordDictionary, stringRecordProperty); // $ExpectType string[]
    _(stringRecordDictionary).pluck(stringRecordProperty); // $ExpectType string[]
    extractChainTypes(_.chain(stringRecordDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<string[], string>

    // property name iterator with a non-nullable intersecting type union
    _.pluck(intersectingObjectPropertiesArray, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.pluck(intersectingObjectPropertiesList, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesList).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesList).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    _.pluck(intersectingObjectPropertiesDictionary, stringRecordProperty); // $ExpectType (string | boolean)[]
    _(intersectingObjectPropertiesDictionary).pluck(stringRecordProperty); // $ExpectType (string | boolean)[]
    extractChainTypes(_.chain(intersectingObjectPropertiesDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | boolean)[], string | boolean>

    // property name iterator with a nullable type union
    _.pluck(stringRecordOrUndefinedArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(stringRecordOrUndefinedList, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedList).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedList).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(stringRecordOrUndefinedDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(stringRecordOrUndefinedDictionary).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(stringRecordOrUndefinedDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with a non-nullable non-intersecting type union
    _.pluck(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(nonIntersectingPropertiesArray, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesArray).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    _.pluck(nonIntersectingPropertiesDictionary, stringRecordProperty); // $ExpectType (string | undefined)[]
    _(nonIntersectingPropertiesDictionary).pluck(stringRecordProperty); // $ExpectType (string | undefined)[]
    extractChainTypes(_.chain(nonIntersectingPropertiesDictionary).pluck(stringRecordProperty)); // $ExpectType ChainType<(string | undefined)[], string | undefined>

    // property name iterator with type any (see #33479)
    _.pluck(stringRecordArray as any, stringRecordProperty); // $ExpectType any[]
    _(stringRecordArray as any).pluck(stringRecordProperty); // $ExpectType any[]
    extractChainTypes(_.chain(stringRecordArray as any).pluck(stringRecordProperty)); // $ExpectType ChainType<any[], any>
}

// groupBy
{
    // function iterator
    _.groupBy(stringRecordArray, stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordArray, stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordArray).groupBy(stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordArray).groupBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordArray).groupBy(stringRecordListValueIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordArray).groupBy(stringRecordListValueIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordList, stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordList, stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordListValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordListValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordList).groupBy(stringRecordListValueIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordList).groupBy(stringRecordListValueIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordDictionary, stringRecordDictionaryValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _.groupBy(stringRecordDictionary, stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator, context); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
    _.chain(stringRecordDictionary).groupBy(stringRecordDictionaryValueIterator, context); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    // property name iterator
    _.groupBy(stringRecordArray, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordArray).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordArray).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordList, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordList).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordList).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>

    _.groupBy(stringRecordDictionary, stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _(stringRecordDictionary).groupBy(stringRecordProperty); // $ExpectType Dictionary<StringRecord[]>
    _.chain(stringRecordDictionary).groupBy(stringRecordProperty); // // $ExpectType _Chain<StringRecord[], Dictionary<StringRecord[]>>
}

// Arrays

// flatten
{
    const twoDimensionArray: StringRecord[][] = [stringRecordArray];
    const twoDimensionList: _.List<_.List<StringRecord>> = { 0: stringRecordList, length: 1 };
    const threeDimensionArray: StringRecord[][][] = [[stringRecordArray]];
    const threeDimensionList: _.List<_.List<_.List<StringRecord>>> = { 0: { 0: stringRecordList, length: 1 }, length: 1 };
    const fourDimensionArray: StringRecord[][][][] = [[[stringRecordArray]]];
    const fourDimensionList: _.List<_.List<_.List<_.List<StringRecord>>>> = { 0: { 0: { 0: stringRecordList, length: 1 }, length: 1 }, length: 1 };
    const mixedDimensionArray: (StringRecord | StringRecord[] | StringRecord[][])[] = [stringRecordArray[0], stringRecordArray, [stringRecordArray]];
    const stringArray: string[][] = [simpleStringArray];
    const stringList: _.List<_.List<string>> = { 0: simpleStringList, length: 1 };
    const typeUnionArray: NonIntersectingProperties[][] = [nonIntersectingPropertiesArray];
    const typeUnionList: _.List<_.List<NonIntersectingProperties>> = { 0: nonIntersectingPropertiesList, length: 1 };

    // one dimension, deep
    _.flatten(stringRecordArray); // $ExpectType StringRecord[]
    _(stringRecordArray).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(stringRecordList); // $ExpectType StringRecord[]
    _(stringRecordList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // one dimension, shallow
    _.flatten(stringRecordArray, true); // $ExpectType StringRecord[]
    _(stringRecordArray).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordArray).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(stringRecordList, true); // $ExpectType StringRecord[]
    _(stringRecordList).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(stringRecordList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, deep
    _.flatten(twoDimensionArray); // $ExpectType StringRecord[]
    _(twoDimensionArray).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(twoDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(twoDimensionList); // $ExpectType StringRecord[]
    _(twoDimensionList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(twoDimensionList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // two dimensions, shallow
    _.flatten(twoDimensionArray, true); // $ExpectType StringRecord[]
    _(twoDimensionArray).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(twoDimensionArray).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(twoDimensionList, true); // $ExpectType StringRecord[]
    _(twoDimensionList).flatten(true); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(twoDimensionList).flatten(true)); // $ExpectType ChainType<StringRecord[], StringRecord>

    // three dimensions, deep
    _.flatten(threeDimensionArray); // $ExpectType StringRecord[]
    _(threeDimensionArray).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(threeDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    _.flatten(threeDimensionList); // $ExpectType StringRecord[]
    _(threeDimensionList).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(threeDimensionList).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // three dimensions, shallow
    _.flatten(threeDimensionArray, true); // $ExpectType StringRecord[][]
    _(threeDimensionArray).flatten(true); // $ExpectType StringRecord[][]
    extractChainTypes(_.chain(threeDimensionArray).flatten(true)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    _.flatten(threeDimensionList, true); // $ExpectType List<StringRecord>[]
    _(threeDimensionList).flatten(true); // $ExpectType List<StringRecord>[]
    extractChainTypes(_.chain(threeDimensionList).flatten(true)); // $ExpectType ChainType<List<StringRecord>[], List<StringRecord>>

    // four dimensions, deep - this is where recursion gives up and results in any[]
    _.flatten(fourDimensionArray); // $ExpectType any[]
    _(fourDimensionArray).flatten(); // $ExpectType any[]
    extractChainTypes(_.chain(fourDimensionArray).flatten()); // $ExpectType ChainType<any[], any>

    _.flatten(fourDimensionList); // $ExpectType any[]
    _(fourDimensionList).flatten(); // $ExpectType any[]
    extractChainTypes(_.chain(fourDimensionList).flatten()); // $ExpectType ChainType<any[], any>

    // mixed dimensions, deep
    _.flatten(mixedDimensionArray); // $ExpectType StringRecord[]
    _(mixedDimensionArray).flatten(); // $ExpectType StringRecord[]
    extractChainTypes(_.chain(mixedDimensionArray).flatten()); // $ExpectType ChainType<StringRecord[], StringRecord>

    // mixed dimensions, shallow
    _.flatten(mixedDimensionArray, true); // $ExpectType (StringRecord | StringRecord[])[]
    _(mixedDimensionArray).flatten(true); // $ExpectType (StringRecord | StringRecord[])[]
    extractChainTypes(_.chain(mixedDimensionArray).flatten(true)); // $ExpectType ChainType<(StringRecord | StringRecord[])[], StringRecord | StringRecord[]>

    // string lists, deep
    _.flatten(stringArray); // $ExpectType string[]
    _(stringArray).flatten(); // $ExpectType string[]
    extractChainTypes(_.chain(stringArray).flatten()); // $ExpectType ChainType<string[], string>

    _.flatten(stringList); // $ExpectType string[]
    _(stringList).flatten(); // $ExpectType string[]
    extractChainTypes(_.chain(stringList).flatten()); // $ExpectType ChainType<string[], string>

    // string lists, shallow
    _.flatten(simpleStringArray, true); // $ExpectType string[]
    _(simpleStringArray).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(simpleStringArray).flatten(true)); // $ExpectType ChainType<string[], string>

    _.flatten(simpleStringList, true); // $ExpectType string[]
    _(simpleStringList).flatten(true); // $ExpectType string[]
    extractChainTypes(_.chain(simpleStringList).flatten(true)); // $ExpectType ChainType<string[], string>

    // type unions, deep
    _.flatten(typeUnionArray); // $ExpectType NonIntersectingProperties[]
    _(typeUnionArray).flatten(); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(typeUnionArray).flatten()); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    _.flatten(typeUnionList); // $ExpectType NonIntersectingProperties[]
    _(typeUnionList).flatten(); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(typeUnionList).flatten()); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    // type unions, shallow
    _.flatten(nonIntersectingPropertiesArray, true); // $ExpectType NonIntersectingProperties[]
    _(nonIntersectingPropertiesArray).flatten(true); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(nonIntersectingPropertiesArray).flatten(true)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>

    _.flatten(nonIntersectingPropertiesList, true); // $ExpectType NonIntersectingProperties[]
    _(nonIntersectingPropertiesList).flatten(true); // $ExpectType NonIntersectingProperties[]
    extractChainTypes(_.chain(nonIntersectingPropertiesList).flatten(true)); // $ExpectType ChainType<NonIntersectingProperties[], NonIntersectingProperties>
}

// chunk
{
    const length = 2;

    _.chunk(stringRecordArray, length); // $ExpectType StringRecord[][]
    _(stringRecordArray).chunk(length); // $ExpectType StringRecord[][]
    extractChainTypes(_.chain(stringRecordArray).chunk(length)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    _.chunk(stringRecordList, length); // $ExpectType StringRecord[][]
    _(stringRecordList).chunk(length); // $ExpectType StringRecord[][]
    extractChainTypes(_.chain(stringRecordList).chunk(length)); // $ExpectType ChainType<StringRecord[][], StringRecord[]>

    _.chunk(simpleString, length); // $ExpectType string[][]
    _(simpleString).chunk(length); // $ExpectType string[][]
    extractChainTypes(_.chain(simpleString).chunk(length)); // $ExpectType ChainType<string[][], string[]>
}

// OOP Style

// underscore
{
    extractUnderscoreTypes(_(stringRecordArray)); // $ExpectType UnderscoreType<StringRecord[], StringRecord>

    extractUnderscoreTypes(_(stringRecordAugmentedList)); // $ExpectType UnderscoreType<StringRecordAugmentedList, StringRecord>
    extractUnderscoreTypes(_(stringRecordList)); // $ExpectType UnderscoreType<List<StringRecord>, StringRecord>

    extractUnderscoreTypes(_(stringRecordExcplcitDictionary)); // $ExpectType UnderscoreType<StringRecordExplicitDictionary, StringRecord>
    extractUnderscoreTypes(_(stringRecordDictionary)); // $ExpectType UnderscoreType<Dictionary<StringRecord>, StringRecord>

    extractUnderscoreTypes(_(simpleString)); // $ExpectType UnderscoreType<string, string>
    extractUnderscoreTypes(_(simpleNumber)); // $ExpectType UnderscoreType<number, never>

    extractUnderscoreTypes(_(mixedIterabilityValue)); // $ExpectType UnderscoreType<number | number[], number>
}

// value
// verify that the object type given to underscore is returned by value
{
    _(stringRecordArray).value(); // $ExpectType StringRecord[]

    _(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _(stringRecordList).value(); // $ExpectType List<StringRecord>

    _(stringRecordExcplcitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    _(simpleString).value(); // $ExpectType string
    _(simpleNumber).value(); // $ExpectType number

    _(mixedIterabilityValue).value(); // $ExpectType number | number[]
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
{
    extractChainTypes(_.chain(stringRecordArray)); // $ExpectType ChainType<StringRecord[], StringRecord>
    extractChainTypes(_(stringRecordArray).chain()); // $ExpectType ChainType<StringRecord[], StringRecord>

    extractChainTypes(_.chain(stringRecordAugmentedList)); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>
    extractChainTypes(_(stringRecordAugmentedList).chain()); // $ExpectType ChainType<StringRecordAugmentedList, StringRecord>

    extractChainTypes(_.chain(stringRecordList)); // $ExpectType ChainType<List<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordList).chain()); // $ExpectType ChainType<List<StringRecord>, StringRecord>

    extractChainTypes(_.chain(stringRecordExcplcitDictionary)); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>
    extractChainTypes(_(stringRecordExcplcitDictionary).chain()); // $ExpectType ChainType<StringRecordExplicitDictionary, StringRecord>

    extractChainTypes(_.chain(stringRecordDictionary)); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>
    extractChainTypes(_(stringRecordDictionary).chain()); // $ExpectType ChainType<Dictionary<StringRecord>, StringRecord>

    extractChainTypes(_.chain(simpleString)); // $ExpectType ChainType<string, string>
    extractChainTypes(_(simpleString).chain()); // $ExpectType ChainType<string, string>

    extractChainTypes(_.chain(simpleNumber)); // $ExpectType ChainType<number, never>
    extractChainTypes(_(simpleNumber).chain()); // $ExpectType ChainType<number, never>

    extractChainTypes(_.chain(mixedIterabilityValue)); // $ExpectType ChainType<number | number[], number>
    extractChainTypes(_(mixedIterabilityValue).chain()); // $ExpectType ChainType<number | number[], number>
}

// value
// verify that the object type given to chain is returned by value
{
    _.chain(stringRecordArray).value(); // $ExpectType StringRecord[]

    _.chain(stringRecordAugmentedList).value(); // $ExpectType StringRecordAugmentedList
    _.chain(stringRecordList).value(); // $ExpectType List<StringRecord>

    _.chain(stringRecordExcplcitDictionary).value(); // $ExpectType StringRecordExplicitDictionary
    _.chain(stringRecordDictionary).value(); // $ExpectType Dictionary<StringRecord>

    _.chain(simpleString).value(); // $ExpectType string
    _.chain(simpleNumber).value(); // $ExpectType number

    _.chain(mixedIterabilityValue).value(); // $ExpectType number | number[]
}
