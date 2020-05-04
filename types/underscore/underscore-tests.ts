declare const $: any;
declare const window: any;
declare const alert: (msg: string) => any;
declare const console: {log: any};

_.each([1, 2, 3], (num) => alert(num.toString()));
_.each({ one: 1, two: 2, three: 3 }, (value, key) => alert(value.toString()));

_.map([1, 2, 3], (num) => num * 3);
_.map({ one: 1, two: 2, three: 3 }, (value, key) => value * 3);
let plucked: string[] = _.map([{key: 'apples'}, {key: 'oranges'}], 'key');

//var sum = _.reduce([1, 2, 3], (memo, num) => memo + num, 0);	// https://typescript.codeplex.com/workitem/1960
var sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num, 0);
sum = _.reduce<number, number>([1, 2, 3], (memo, num) => memo + num); // memo is optional #issue 5 github
sum = _.reduce<string, number>({'a':'1', 'b':'2', 'c':'3'}, (memo, numstr) => memo + (+numstr));

var list = [[0, 1], [2, 3], [4, 5]];
//var flat = _.reduceRight(list, (a, b) => a.concat(b), []);	// https://typescript.codeplex.com/workitem/1960
var flat = _.reduceRight<number[], number[]>(list, (a, b) => a.concat(b), []);

namespace TestEach {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
    let context = {};

    {
        let iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: _.List<{ a: string }>;

        result = _.each<{ a: string }>(array, iterator);
        result = _.each<{ a: string }>(array, iterator, context);
        result = _.each(array, iterator);
        result = _.each(array, iterator, context);

        result = _<{ a: string }>(array).each(iterator);
        result = _<{ a: string }>(array).each(iterator, context);
        result = _(array).each(iterator);
        result = _(array).each(iterator, context);

        result = _.chain<{ a: string }>(array).each(iterator).value();
        result = _.chain<{ a: string }>(array).each(iterator, context).value();
        result = _.chain(array).each(iterator).value();
        result = _.chain(array).each(iterator, context).value();

        result = _<{ a: string }>(array).chain().each(iterator).value();
        result = _<{ a: string }>(array).chain().each(iterator, context).value();
        result = _(array).chain().each(iterator).value();
        result = _(array).chain().each(iterator, context).value();

        result = _.each<{ a: string }>(list, iterator);
        result = _.each<{ a: string }>(list, iterator, context);
        result = _.each(list, iterator);
        result = _.each(list, iterator, context);

        result = _<{ a: string }>(list).each(iterator);
        result = _<{ a: string }>(list).each(iterator, context);
        result = _(list).each(iterator);
        result = _(list).each(iterator, context);

        result = _.chain<{ a: string }>(list).each(iterator).value();
        result = _.chain<{ a: string }>(list).each(iterator, context).value();
        result = _.chain(list).each(iterator).value();
        result = _.chain(list).each(iterator, context).value();

        result = _<{ a: string }>(list).chain().each(iterator).value();
        result = _<{ a: string }>(list).chain().each(iterator, context).value();
        result = _(list).chain().each(iterator).value();
        result = _(list).chain().each(iterator, context).value();

        result = _.forEach<{ a: string }>(array, iterator);
        result = _.forEach<{ a: string }>(array, iterator, context);
        result = _.forEach(array, iterator);
        result = _.forEach(array, iterator, context);

        result = _<{ a: string }>(array).forEach(iterator);
        result = _<{ a: string }>(array).forEach(iterator, context);
        result = _(array).forEach(iterator);
        result = _(array).forEach(iterator, context);

        result = _.chain<{ a: string }>(array).forEach(iterator).value();
        result = _.chain<{ a: string }>(array).forEach(iterator, context).value();
        result = _.chain(array).forEach(iterator).value();
        result = _.chain(array).forEach(iterator, context).value();

        result = _<{ a: string }>(array).chain().forEach(iterator).value();
        result = _<{ a: string }>(array).chain().forEach(iterator, context).value();
        result = _(array).chain().forEach(iterator).value();
        result = _(array).chain().forEach(iterator, context).value();

        result = _.forEach<{ a: string }>(list, iterator);
        result = _.forEach<{ a: string }>(list, iterator, context);
        result = _.forEach(list, iterator);
        result = _.forEach(list, iterator, context);

        result = _<{ a: string }>(list).forEach(iterator);
        result = _<{ a: string }>(list).forEach(iterator, context);
        result = _(list).forEach(iterator);
        result = _(list).forEach(iterator, context);

        result = _.chain<{ a: string }>(list).forEach(iterator).value();
        result = _.chain<{ a: string }>(list).forEach(iterator, context).value();
        result = _.chain(list).forEach(iterator).value();
        result = _.chain(list).forEach(iterator, context).value();

        result = _<{ a: string }>(list).chain().forEach(iterator).value();
        result = _<{ a: string }>(list).chain().forEach(iterator, context).value();
        result = _(list).chain().forEach(iterator).value();
        result = _(list).chain().forEach(iterator, context).value();
    }

    {
        let iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: _.Dictionary<{ a: string }>;

        result = _.each<{ a: string }>(dict, iterator);
        result = _.each<{ a: string }>(dict, iterator, context);
        result = _.each(dict, iterator);
        result = _.each(dict, iterator, context);

        result = _<{ a: string }>(dict).each(iterator);
        result = _<{ a: string }>(dict).each(iterator, context);
        result = _(dict).each(iterator);
        result = _(dict).each(iterator, context);

        result = _.chain<{ a: string }>(dict).each(iterator).value();
        result = _.chain<{ a: string }>(dict).each(iterator, context).value();
        result = _.chain(dict).each(iterator).value();
        result = _.chain(dict).each(iterator, context).value();

        result = _<{ a: string }>(dict).chain().each(iterator).value();
        result = _<{ a: string }>(dict).chain().each(iterator, context).value();
        result = _(dict).chain().each(iterator).value();
        result = _(dict).chain().each(iterator, context).value();

        result = _.forEach<{ a: string }>(dict, iterator);
        result = _.forEach<{ a: string }>(dict, iterator, context);
        result = _.forEach(dict, iterator);
        result = _.forEach(dict, iterator, context);

        result = _<{ a: string }>(dict).forEach(iterator);
        result = _<{ a: string }>(dict).forEach(iterator, context);
        result = _(dict).forEach(iterator);
        result = _(dict).forEach(iterator, context);

        result = _.chain<{ a: string }>(dict).forEach(iterator).value();
        result = _.chain<{ a: string }>(dict).forEach(iterator, context).value();
        result = _.chain(dict).forEach(iterator).value();
        result = _.chain(dict).forEach(iterator, context).value();

        result = _<{ a: string }>(dict).chain().forEach(iterator).value();
        result = _<{ a: string }>(dict).chain().forEach(iterator, context).value();
        result = _(dict).chain().forEach(iterator).value();
        result = _(dict).chain().forEach(iterator, context).value();
    }

    // consider adding overlaods for a single string as an argument and test those separately since _.each('abc', () => {})
    // returns the original string rather than a set of strings
}

namespace TestMap {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
    let context = {};

    {
        let iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a;
        let result: _.List<string>;

        result = _.map<{ a: string }, string>(array, iterator);
        result = _.map<{ a: string }, string>(array, iterator, context);
        result = _.map(array, iterator);
        result = _.map(array, iterator, context);

        result = _<{ a: string }>(array).map<string>(iterator);
        result = _<{ a: string }>(array).map<string>(iterator, context);
        result = _(array).map(iterator);
        result = _(array).map(iterator, context);

        result = _.chain<{ a: string }>(array).map<string>(iterator).value();
        result = _.chain<{ a: string }>(array).map<string>(iterator, context).value();
        result = _.chain(array).map(iterator).value();
        result = _.chain(array).map(iterator, context).value();

        result = _<{ a: string }>(array).chain().map<string>(iterator).value();
        result = _<{ a: string }>(array).chain().map<string>(iterator, context).value();
        result = _(array).chain().map(iterator).value();
        result = _(array).chain().map(iterator, context).value();

        result = _.map<{ a: string }, string>(list, iterator);
        result = _.map<{ a: string }, string>(list, iterator, context);
        result = _.map(list, iterator);
        result = _.map(list, iterator, context);

        result = _<{ a: string }>(list).map<string>(iterator);
        result = _<{ a: string }>(list).map<string>(iterator, context);
        result = _(list).map(iterator);
        result = _(list).map(iterator, context);

        result = _.chain<{ a: string }>(list).map<string>(iterator).value();
        result = _.chain<{ a: string }>(list).map<string>(iterator, context).value();
        result = _.chain(list).map(iterator).value();
        result = _.chain(list).map(iterator, context).value();

        result = _<{ a: string }>(list).chain().map<string>(iterator).value();
        result = _<{ a: string }>(list).chain().map<string>(iterator, context).value();
        result = _(list).chain().map(iterator).value();
        result = _(list).chain().map(iterator, context).value();

        result = _.collect<{ a: string }, string>(array, iterator);
        result = _.collect<{ a: string }, string>(array, iterator, context);
        result = _.collect(array, iterator);
        result = _.collect(array, iterator, context);

        result = _<{ a: string }>(array).collect<string>(iterator);
        result = _<{ a: string }>(array).collect<string>(iterator, context);
        result = _(array).collect(iterator);
        result = _(array).collect(iterator, context);

        result = _.chain<{ a: string }>(array).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(array).collect<string>(iterator, context).value();
        result = _.chain(array).collect(iterator).value();
        result = _.chain(array).collect(iterator, context).value();

        result = _<{ a: string }>(array).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(array).chain().collect<string>(iterator, context).value();
        result = _(array).chain().collect(iterator).value();
        result = _(array).chain().collect(iterator, context).value();

        result = _.collect<{ a: string }, string>(list, iterator);
        result = _.collect<{ a: string }, string>(list, iterator, context);
        result = _.collect(list, iterator);
        result = _.collect(list, iterator, context);

        result = _<{ a: string }>(list).collect<string>(iterator);
        result = _<{ a: string }>(list).collect<string>(iterator, context);
        result = _(list).collect(iterator);
        result = _(list).collect(iterator, context);

        result = _.chain<{ a: string }>(list).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(list).collect<string>(iterator, context).value();
        result = _.chain(list).collect(iterator).value();
        result = _.chain(list).collect(iterator, context).value();

        result = _<{ a: string }>(list).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(list).chain().collect<string>(iterator, context).value();
        result = _(list).chain().collect(iterator).value();
        result = _(list).chain().collect(iterator, context).value();
    }

    {
        let iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a;
        let result: _.List<string>;

        result = _.map<{ a: string }, string>(dict, iterator);
        result = _.map<{ a: string }, string>(dict, iterator, context);
        result = _.map(dict, iterator);
        result = _.map(dict, iterator, context);

        result = _<{ a: string }>(dict).map<string>(iterator);
        result = _<{ a: string }>(dict).map<string>(iterator, context);
        result = _(dict).map(iterator);
        result = _(dict).map(iterator, context);

        result = _.chain<{ a: string }>(dict).map<string>(iterator).value();
        result = _.chain<{ a: string }>(dict).map<string>(iterator, context).value();
        result = _.chain(dict).map(iterator).value();
        result = _.chain(dict).map(iterator, context).value();

        result = _<{ a: string }>(dict).chain().map<string>(iterator).value();
        result = _<{ a: string }>(dict).chain().map<string>(iterator, context).value();
        result = _(dict).chain().map(iterator).value();
        result = _(dict).chain().map(iterator, context).value();

        result = _.collect<{ a: string }, string>(dict, iterator);
        result = _.collect<{ a: string }, string>(dict, iterator, context);
        result = _.collect(dict, iterator);
        result = _.collect(dict, iterator, context);

        result = _<{ a: string }>(dict).collect<string>(iterator);
        result = _<{ a: string }>(dict).collect<string>(iterator, context);
        result = _(dict).collect(iterator);
        result = _(dict).collect(iterator, context);

        result = _.chain<{ a: string }>(dict).collect<string>(iterator).value();
        result = _.chain<{ a: string }>(dict).collect<string>(iterator, context).value();
        result = _.chain(dict).collect(iterator).value();
        result = _.chain(dict).collect(iterator, context).value();

        result = _<{ a: string }>(dict).chain().collect<string>(iterator).value();
        result = _<{ a: string }>(dict).chain().collect<string>(iterator, context).value();
        result = _(dict).chain().collect(iterator).value();
        result = _(dict).chain().collect(iterator, context).value();
    }

    {
        let iterator = (value: string, index: number, list: _.List<string>) => value + 'b';
        let result: _.List<string>;

        result = _.map<string, string>('abc', iterator);
        result = _.map<string, string>('abc', iterator, context);
        result = _.map('abc', iterator);
        result = _.map('abc', iterator, context);

        result = _<string>('abc').map<string>(iterator);
        result = _<string>('abc').map<string>(iterator, context);
        result = _('abc').map(iterator);
        result = _('abc').map(iterator, context);

        result = _<string>('abc').chain().map<string>(iterator).value();
        result = _<string>('abc').chain().map<string>(iterator, context).value();
        result = _('abc').chain().map(iterator).value();
        result = _('abc').chain().map(iterator, context).value();

        result = _.collect<string, string>('abc', iterator);
        result = _.collect<string, string>('abc', iterator, context);
        result = _.collect('abc', iterator);
        result = _.collect('abc', iterator, context);

        result = _<string>('abc').collect<string>(iterator);
        result = _<string>('abc').collect<string>(iterator, context);
        result = _('abc').collect(iterator);
        result = _('abc').collect(iterator, context);

        result = _<string>('abc').chain().collect<string>(iterator).value();
        result = _<string>('abc').chain().collect<string>(iterator, context).value();
        result = _('abc').chain().collect(iterator).value();
        result = _('abc').chain().collect(iterator, context).value();
    }
}

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

namespace TestFilter {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
    let context = {};

    {
        let iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: _.List<{ a: string }>;

        result = _.filter<{ a: string }>(array, iterator);
        result = _.filter<{ a: string }>(array, iterator, context);
        result = _.filter(array, iterator);
        result = _.filter(array, iterator, context);

        result = _<{ a: string }>(array).filter(iterator);
        result = _<{ a: string }>(array).filter(iterator, context);
        result = _(array).filter(iterator);
        result = _(array).filter(iterator, context);

        result = _.chain<{ a: string }>(array).filter(iterator).value();
        result = _.chain<{ a: string }>(array).filter(iterator, context).value();
        result = _.chain(array).filter(iterator).value();
        result = _.chain(array).filter(iterator, context).value();

        result = _<{ a: string }>(array).chain().filter(iterator).value();
        result = _<{ a: string }>(array).chain().filter(iterator, context).value();
        result = _(array).chain().filter(iterator).value();
        result = _(array).chain().filter(iterator, context).value();

        result = _.filter<{ a: string }>(list, iterator);
        result = _.filter<{ a: string }>(list, iterator, context);
        result = _.filter(list, iterator);
        result = _.filter(list, iterator, context);

        result = _<{ a: string }>(list).filter(iterator);
        result = _<{ a: string }>(list).filter(iterator, context);
        result = _(list).filter(iterator);
        result = _(list).filter(iterator, context);

        result = _.chain<{ a: string }>(list).filter(iterator).value();
        result = _.chain<{ a: string }>(list).filter(iterator, context).value();
        result = _.chain(list).filter(iterator).value();
        result = _.chain(list).filter(iterator, context).value();

        result = _<{ a: string }>(list).chain().filter(iterator).value();
        result = _<{ a: string }>(list).chain().filter(iterator, context).value();
        result = _(list).chain().filter(iterator).value();
        result = _(list).chain().filter(iterator, context).value();

        result = _.select<{ a: string }>(array, iterator);
        result = _.select<{ a: string }>(array, iterator, context);
        result = _.select(array, iterator);
        result = _.select(array, iterator, context);

        result = _<{ a: string }>(array).select(iterator);
        result = _<{ a: string }>(array).select(iterator, context);
        result = _(array).select(iterator);
        result = _(array).select(iterator, context);

        result = _.chain<{ a: string }>(array).select(iterator).value();
        result = _.chain<{ a: string }>(array).select(iterator, context).value();
        result = _.chain(array).select(iterator).value();
        result = _.chain(array).select(iterator, context).value();

        result = _<{ a: string }>(array).chain().select(iterator).value();
        result = _<{ a: string }>(array).chain().select(iterator, context).value();
        result = _(array).chain().select(iterator).value();
        result = _(array).chain().select(iterator, context).value();

        result = _.select<{ a: string }>(list, iterator);
        result = _.select<{ a: string }>(list, iterator, context);
        result = _.select(list, iterator);
        result = _.select(list, iterator, context);

        result = _<{ a: string }>(list).select(iterator);
        result = _<{ a: string }>(list).select(iterator, context);
        result = _(list).select(iterator);
        result = _(list).select(iterator, context);

        result = _.chain<{ a: string }>(list).select(iterator).value();
        result = _.chain<{ a: string }>(list).select(iterator, context).value();
        result = _.chain(list).select(iterator).value();
        result = _.chain(list).select(iterator, context).value();

        result = _<{ a: string }>(list).chain().select(iterator).value();
        result = _<{ a: string }>(list).chain().select(iterator, context).value();
        result = _(list).chain().select(iterator).value();
        result = _(list).chain().select(iterator, context).value();
    }

    {
        let iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: _.List<{ a: string }>;

        result = _.filter<{ a: string }>(dict, iterator);
        result = _.filter<{ a: string }>(dict, iterator, context);
        result = _.filter(dict, iterator);
        result = _.filter(dict, iterator, context);

        result = _<{ a: string }>(dict).filter(iterator);
        result = _<{ a: string }>(dict).filter(iterator, context);
        result = _(dict).filter(iterator);
        result = _(dict).filter(iterator, context);

        result = _.chain<{ a: string }>(dict).filter(iterator).value();
        result = _.chain<{ a: string }>(dict).filter(iterator, context).value();
        result = _.chain(dict).filter(iterator).value();
        result = _.chain(dict).filter(iterator, context).value();

        result = _<{ a: string }>(dict).chain().filter(iterator).value();
        result = _<{ a: string }>(dict).chain().filter(iterator, context).value();
        result = _(dict).chain().filter(iterator).value();
        result = _(dict).chain().filter(iterator, context).value();

        result = _.select<{ a: string }>(dict, iterator);
        result = _.select<{ a: string }>(dict, iterator, context);
        result = _.select(dict, iterator);
        result = _.select(dict, iterator, context);

        result = _<{ a: string }>(dict).select(iterator);
        result = _<{ a: string }>(dict).select(iterator, context);
        result = _(dict).select(iterator);
        result = _(dict).select(iterator, context);

        result = _.chain<{ a: string }>(dict).select(iterator).value();
        result = _.chain<{ a: string }>(dict).select(iterator, context).value();
        result = _.chain(dict).select(iterator).value();
        result = _.chain(dict).select(iterator, context).value();

        result = _<{ a: string }>(dict).chain().select(iterator).value();
        result = _<{ a: string }>(dict).chain().select(iterator, context).value();
        result = _(dict).chain().select(iterator).value();
        result = _(dict).chain().select(iterator, context).value();
    }

    {
        let iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: _.List<string>;

        result = _.filter<string>('abc', iterator);
        result = _.filter<string>('abc', iterator, context);
        result = _.filter('abc', iterator);
        result = _.filter('abc', iterator, context);

        result = _<string>('abc').filter(iterator);
        result = _<string>('abc').filter(iterator, context);
        result = _('abc').filter(iterator);
        result = _('abc').filter(iterator, context);

        result = _<string>('abc').chain().filter(iterator).value();
        result = _<string>('abc').chain().filter(iterator, context).value();
        result = _('abc').chain().filter(iterator).value();
        result = _('abc').chain().filter(iterator, context).value();

        result = _.select<string>('abc', iterator);
        result = _.select<string>('abc', iterator, context);
        result = _.select('abc', iterator);
        result = _.select('abc', iterator, context);

        result = _<string>('abc').select(iterator);
        result = _<string>('abc').select(iterator, context);
        result = _('abc').select(iterator);
        result = _('abc').select(iterator, context);

        result = _<string>('abc').chain().select(iterator).value();
        result = _<string>('abc').chain().select(iterator, context).value();
        result = _('abc').chain().select(iterator).value();
        result = _('abc').chain().select(iterator, context).value();
    }
}

namespace TestWhere {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };

    {
        let properties = { a: 'b' };
        let result: _.List<{ a: string }>;

        result = _.where<{ a: string }, { a: string }>(array, properties);
        result = _.where(array, properties);

        result = _<{ a: string }>(array).where<{ a: string }>(properties);
        result = _(array).where(properties);

        result = _.chain<{ a: string }>(array).where<{ a: string }>(properties).value();
        result = _.chain(array).where(properties).value();

        result = _<{ a: string }>(array).chain().where<{ a: string }>(properties).value();
        result = _(array).chain().where(properties).value();

        result = _.where<{ a: string }, { a: string }>(list, properties);
        result = _.where(list, properties);

        result = _<{ a: string }>(list).where<{ a: string }>(properties);
        result = _(list).where(properties);

        result = _.chain<{ a: string }>(list).where<{ a: string }>(properties).value();
        result = _.chain(list).where(properties).value();

        result = _<{ a: string }>(list).chain().where<{ a: string }>(properties).value();
        result = _(list).chain().where(properties).value();
    }
}

namespace TestFindWhere {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };

    // ideally the return value for these functions should be updated to include undefined

    {
        let properties = { a: 'b' };
        let result: { a: string } | undefined;

        result = _.findWhere<{ a: string }, { a: string }>(array, properties);
        result = _.findWhere(array, properties);

        result = _<{ a: string }>(array).findWhere<{ a: string }>(properties);
        result = _(array).findWhere(properties);

        result = _.chain<{ a: string }>(array).findWhere<{ a: string }>(properties).value();
        result = _.chain(array).findWhere(properties).value();

        result = _<{ a: string }>(array).chain().findWhere<{ a: string }>(properties).value();
        result = _(array).chain().findWhere(properties).value();

        result = _.findWhere<{ a: string }, { a: string }>(list, properties);
        result = _.findWhere(list, properties);

        result = _<{ a: string }>(list).findWhere<{ a: string }>(properties);
        result = _(list).findWhere(properties);

        result = _.chain<{ a: string }>(list).findWhere<{ a: string }>(properties).value();
        result = _.chain(list).findWhere(properties).value();

        result = _<{ a: string }>(list).chain().findWhere<{ a: string }>(properties).value();
        result = _(list).chain().findWhere(properties).value();
    }
}

namespace TestReject {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };
    let context = {};

    {
        let iterator = (value: { a: string }, index: number, list: _.List<{ a: string }>) => value.a === 'b';
        let result: _.List<{ a: string }>;

        result = _.reject<{ a: string }>(array, iterator);
        result = _.reject<{ a: string }>(array, iterator, context);
        result = _.reject(array, iterator);
        result = _.reject(array, iterator, context);

        result = _<{ a: string }>(array).reject(iterator);
        result = _<{ a: string }>(array).reject(iterator, context);
        result = _(array).reject(iterator);
        result = _(array).reject(iterator, context);

        result = _.chain<{ a: string }>(array).reject(iterator).value();
        result = _.chain<{ a: string }>(array).reject(iterator, context).value();
        result = _.chain(array).reject(iterator).value();
        result = _.chain(array).reject(iterator, context).value();

        result = _<{ a: string }>(array).chain().reject(iterator).value();
        result = _<{ a: string }>(array).chain().reject(iterator, context).value();
        result = _(array).chain().reject(iterator).value();
        result = _(array).chain().reject(iterator, context).value();

        result = _.reject<{ a: string }>(list, iterator);
        result = _.reject<{ a: string }>(list, iterator, context);
        result = _.reject(list, iterator);
        result = _.reject(list, iterator, context);

        result = _<{ a: string }>(list).reject(iterator);
        result = _<{ a: string }>(list).reject(iterator, context);
        result = _(list).reject(iterator);
        result = _(list).reject(iterator, context);

        result = _.chain<{ a: string }>(list).reject(iterator).value();
        result = _.chain<{ a: string }>(list).reject(iterator, context).value();
        result = _.chain(list).reject(iterator).value();
        result = _.chain(list).reject(iterator, context).value();

        result = _<{ a: string }>(list).chain().reject(iterator).value();
        result = _<{ a: string }>(list).chain().reject(iterator, context).value();
        result = _(list).chain().reject(iterator).value();
        result = _(list).chain().reject(iterator, context).value();
    }

    {
        let iterator = (element: { a: string }, key: string, list: _.Dictionary<{ a: string }>) => element.a === 'b';
        let result: _.List<{ a: string }>;

        result = _.reject<{ a: string }>(dict, iterator);
        result = _.reject<{ a: string }>(dict, iterator, context);
        result = _.reject(dict, iterator);
        result = _.reject(dict, iterator, context);

        result = _<{ a: string }>(dict).reject(iterator);
        result = _<{ a: string }>(dict).reject(iterator, context);
        result = _(dict).reject(iterator);
        result = _(dict).reject(iterator, context);

        result = _.chain<{ a: string }>(dict).reject(iterator).value();
        result = _.chain<{ a: string }>(dict).reject(iterator, context).value();
        result = _.chain(dict).reject(iterator).value();
        result = _.chain(dict).reject(iterator, context).value();

        result = _<{ a: string }>(dict).chain().reject(iterator).value();
        result = _<{ a: string }>(dict).chain().reject(iterator, context).value();
        result = _(dict).chain().reject(iterator).value();
        result = _(dict).chain().reject(iterator, context).value();
    }

    {
        let iterator = (value: string, index: number, list: _.List<string>) => value === 'b';
        let result: _.List<string>;

        result = _.reject<string>('abc', iterator);
        result = _.reject<string>('abc', iterator, context);
        result = _.reject('abc', iterator);
        result = _.reject('abc', iterator, context);

        result = _<string>('abc').reject(iterator);
        result = _<string>('abc').reject(iterator, context);
        result = _('abc').reject(iterator);
        result = _('abc').reject(iterator, context);

        result = _<string>('abc').chain().reject(iterator).value();
        result = _<string>('abc').chain().reject(iterator, context).value();
        result = _('abc').chain().reject(iterator).value();
        result = _('abc').chain().reject(iterator, context).value();
    }
}

namespace TestShuffle {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    {
        let result: _.List<{ a: string }>;

        result = _.shuffle<{ a: string }>(array);
        result = _.shuffle(array);

        result = _<{ a: string }>(array).shuffle();
        result = _(array).shuffle();

        result = _.chain<{ a: string }>(array).shuffle().value();
        result = _.chain(array).shuffle().value();

        result = _<{ a: string }>(array).chain().shuffle().value();
        result = _(array).chain().shuffle().value();

        result = _.shuffle<{ a: string }>(list);
        result = _.shuffle(list);

        result = _<{ a: string }>(list).shuffle();
        result = _(list).shuffle();

        result = _.chain<{ a: string }>(list).shuffle().value();
        result = _.chain(list).shuffle().value();

        result = _<{ a: string }>(list).chain().shuffle().value();
        result = _(list).chain().shuffle().value();
    }

    {
        let result: _.List<{ a: string }>;

        result = _.shuffle<{ a: string }>(dict);
        result = _.shuffle(dict);

        result = _<{ a: string }>(dict).shuffle();
        result = _(dict).shuffle();

        result = _.chain<{ a: string }>(dict).shuffle().value();
        result = _.chain(dict).shuffle().value();

        result = _<{ a: string }>(dict).chain().shuffle().value();
        result = _(dict).chain().shuffle().value();
    }

    {
        let result: _.List<string>;

        result = _.shuffle<string>('abc');
        result = _.shuffle('abc');

        result = _<string>('abc').shuffle();
        result = _('abc').shuffle();

        result = _<string>('abc').chain().shuffle().value();
        result = _('abc').chain().shuffle().value();
    }
}

namespace TestSample {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    // ideally all versions of sample without n should include undefined as a possible result since _.sample([]) yields undefined
    // also, ideally _Chain.sample should be updated to return _ChainSingle<T | undefined>

    // without n
    {
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(array);
        result = _.sample(array);

        result = _<{ a: string }>(array).sample();
        result = _(array).sample();

        result = _.chain<{ a: string }>(array).sample<{ a: string }>().value();
        result = _.chain(array).sample<{ a: string }>().value();

        result = _<{ a: string }>(array).chain().sample<{ a: string }>().value();
        result = _(array).chain().sample<{ a: string }>().value();

        result = _.sample<{ a: string }>(list);
        result = _.sample(list);

        result = _<{ a: string }>(list).sample<{ a: string }>();
        result = _(list).sample<{ a: string }>();

        result = _.chain<{ a: string }>(list).sample<{ a: string }>().value();
        result = _.chain(list).sample<{ a: string }>().value();

        result = _<{ a: string }>(list).chain().sample<{ a: string }>().value();
        result = _(list).chain().sample<{ a: string }>().value();
    }

    {
        let result: { a: string } | undefined;

        result = _.sample<{ a: string }>(dict);
        result = _.sample(dict);

        result = _<{ a: string }>(dict).sample<{ a: string }>();
        result = _(dict).sample<{ a: string }>();

        result = _.chain<{ a: string }>(dict).sample<{ a: string }>().value();
        result = _.chain(dict).sample<{ a: string }>().value();

        result = _<{ a: string }>(dict).chain().sample<{ a: string }>().value();
        result = _(dict).chain().sample<{ a: string }>().value();
    }

    {
        let result: string | undefined;

        result = _.sample<string>('abc');
        result = _.sample('abc');

        result = _<string>('abc').sample<string>();
        result = _('abc').sample<string>();

        result = _<string>('abc').chain().sample<string>().value();
        result = _('abc').chain().sample<string>().value();
    }

    // with n
    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.sample<{ a: string }>(array, n);
        result = _.sample(array, n);

        result = _<{ a: string }>(array).sample(n);
        result = _(array).sample(n);

        result = _.chain<{ a: string }>(array).sample<{ a: string }>(n).value();
        result = _.chain(array).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(array).chain().sample<{ a: string }>(n).value();
        result = _(array).chain().sample<{ a: string }>(n).value();

        result = _.sample<{ a: string }>(list, n);
        result = _.sample(list, n);

        result = _<{ a: string }>(list).sample<{ a: string }>(n);
        result = _(list).sample<{ a: string }>(n);

        result = _.chain<{ a: string }>(list).sample<{ a: string }>(n).value();
        result = _.chain(list).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(list).chain().sample<{ a: string }>(n).value();
        result = _(list).chain().sample<{ a: string }>(n).value();
    }

    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.sample<{ a: string }>(dict, n);
        result = _.sample(dict, n);

        result = _<{ a: string }>(dict).sample<{ a: string }>(n);
        result = _(dict).sample<{ a: string }>(n);

        result = _.chain<{ a: string }>(dict).sample<{ a: string }>(n).value();
        result = _.chain(dict).sample<{ a: string }>(n).value();

        result = _<{ a: string }>(dict).chain().sample<{ a: string }>(n).value();
        result = _(dict).chain().sample<{ a: string }>(n).value();
    }

    {
        let result: _.List<string>;
        let n = 2;

        result = _.sample<string>('abc', n);
        result = _.sample('abc', n);

        result = _<string>('abc').sample<string>(n);
        result = _('abc').sample<string>(n);

        result = _<string>('abc').chain().sample<string>(n).value();
        result = _('abc').chain().sample<string>(n).value();
    }
}

namespace TestToArray {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    {
        let result: { a: string }[];

        result = _.toArray<{ a: string }>(array);
        result = _.toArray(array);

        result = _<{ a: string }>(array).toArray();
        result = _(array).toArray();

        result = _.chain<{ a: string }>(array).toArray().value();
        result = _.chain(array).toArray().value();

        result = _<{ a: string }>(array).chain().toArray().value();
        result = _(array).chain().toArray().value();

        result = _.toArray<{ a: string }>(list);
        result = _.toArray(list);

        result = _<{ a: string }>(list).toArray();
        result = _(list).toArray();

        result = _.chain<{ a: string }>(list).toArray().value();
        result = _.chain(list).toArray().value();

        result = _<{ a: string }>(list).chain().toArray().value();
        result = _(list).chain().toArray().value();
    }

    {
        let result: { a: string }[];

        result = _.toArray<{ a: string }>(dict);
        result = _.toArray(dict);

        result = _<{ a: string }>(dict).toArray();
        result = _(dict).toArray();

        result = _.chain<{ a: string }>(dict).toArray().value();
        result = _.chain(dict).toArray().value();

        result = _<{ a: string }>(dict).chain().toArray().value();
        result = _(dict).chain().toArray().value();
    }

    {
        let result: string[];

        result = _.toArray<string>('abc');
        result = _.toArray('abc');

        result = _<string>('abc').toArray();
        result = _('abc').toArray();

        result = _<string>('abc').chain().toArray().value();
        result = _('abc').chain().toArray().value();
    }
}

namespace TestFirst {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    // ideally _Chain.head and _Chain.take should be updated to return _ChainSingle<T | undefined> like _Chain.first correctly does

    // without n
    {
        let result: { a: string } | undefined;

        result = _.first<{ a: string }>(array);
        result = _.first(array);

        result = _<{ a: string }>(array).first();
        result = _(array).first();

        result = _.chain<{ a: string }>(array).first().value();
        result = _.chain(array).first().value();

        result = _<{ a: string }>(array).chain().first().value();
        result = _(array).chain().first().value();

        result = _.first<{ a: string }>(list);
        result = _.first(list);

        result = _<{ a: string }>(list).first();
        result = _(list).first();

        result = _.chain<{ a: string }>(list).first().value();
        result = _.chain(list).first().value();

        result = _<{ a: string }>(list).chain().first().value();
        result = _(list).chain().first().value();

        result = _.head<{ a: string }>(array);
        result = _.head(array);

        result = _<{ a: string }>(array).head();
        result = _(array).head();

        result = _.chain<{ a: string }>(array).head().value();
        result = _.chain(array).head().value();

        result = _<{ a: string }>(array).chain().head().value();
        result = _(array).chain().head().value();

        result = _.head<{ a: string }>(list);
        result = _.head(list);

        result = _<{ a: string }>(list).head();
        result = _(list).head();

        result = _.chain<{ a: string }>(list).head().value();
        result = _.chain(list).head().value();

        result = _<{ a: string }>(list).chain().head().value();
        result = _(list).chain().head().value();

        result = _.take<{ a: string }>(array);
        result = _.take(array);

        result = _<{ a: string }>(array).take();
        result = _(array).take();

        result = _.chain<{ a: string }>(array).take().value();
        result = _.chain(array).take().value();

        result = _<{ a: string }>(array).chain().take().value();
        result = _(array).chain().take().value();

        result = _.take<{ a: string }>(list);
        result = _.take(list);

        result = _<{ a: string }>(list).take();
        result = _(list).take();

        result = _.chain<{ a: string }>(list).take().value();
        result = _.chain(list).take().value();

        result = _<{ a: string }>(list).chain().take().value();
        result = _(list).chain().take().value();
    }

    {
        let result: string | undefined;

        result = _.first<string>('abc');
        result = _.first('abc');

        result = _<string>('abc').first();
        result = _('abc').first();

        result = _<string>('abc').chain().first().value();
        result = _('abc').chain().first().value();

        result = _.head<string>('abc');
        result = _.head('abc');

        result = _<string>('abc').head();
        result = _('abc').head();

        result = _<string>('abc').chain().head().value();
        result = _('abc').chain().head().value();

        result = _.take<string>('abc');
        result = _.take('abc');

        result = _<string>('abc').take();
        result = _('abc').take();

        result = _<string>('abc').chain().take().value();
        result = _('abc').chain().take().value();
    }

    // with n
    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.first<{ a: string }>(array, n);
        result = _.first(array, n);

        result = _<{ a: string }>(array).first(n);
        result = _(array).first(n);

        result = _.chain<{ a: string }>(array).first(n).value();
        result = _.chain(array).first(n).value();

        result = _<{ a: string }>(array).chain().first(n).value();
        result = _(array).chain().first(n).value();

        result = _.first<{ a: string }>(list, n);
        result = _.first(list, n);

        result = _<{ a: string }>(list).first(n);
        result = _(list).first(n);

        result = _.chain<{ a: string }>(list).first(n).value();
        result = _.chain(list).first(n).value();

        result = _<{ a: string }>(list).chain().first(n).value();
        result = _(list).chain().first(n).value();

        result = _.head<{ a: string }>(array, n);
        result = _.head(array, n);

        result = _<{ a: string }>(array).head(n);
        result = _(array).head(n);

        result = _.chain<{ a: string }>(array).head(n).value();
        result = _.chain(array).head(n).value();

        result = _<{ a: string }>(array).chain().head(n).value();
        result = _(array).chain().head(n).value();

        result = _.head<{ a: string }>(list, n);
        result = _.head(list, n);

        result = _<{ a: string }>(list).head(n);
        result = _(list).head(n);

        result = _.chain<{ a: string }>(list).head(n).value();
        result = _.chain(list).head(n).value();

        result = _<{ a: string }>(list).chain().head(n).value();
        result = _(list).chain().head(n).value();

        result = _.take<{ a: string }>(array, n);
        result = _.take(array, n);

        result = _<{ a: string }>(array).take(n);
        result = _(array).take(n);

        result = _.chain<{ a: string }>(array).take(n).value();
        result = _.chain(array).take(n).value();

        result = _<{ a: string }>(array).chain().take(n).value();
        result = _(array).chain().take(n).value();

        result = _.take<{ a: string }>(list, n);
        result = _.take(list, n);

        result = _<{ a: string }>(list).take(n);
        result = _(list).take(n);

        result = _.chain<{ a: string }>(list).take(n).value();
        result = _.chain(list).take(n).value();

        result = _<{ a: string }>(list).chain().take(n).value();
        result = _(list).chain().take(n).value();
    }

    {
        let result: _.List<string>;
        let n = 2;

        result = _.first<string>('abc', n);
        result = _.first('abc', n);

        result = _<string>('abc').first(n);
        result = _('abc').first(n);

        result = _<string>('abc').chain().first(n).value();
        result = _('abc').chain().first(n).value();

        result = _.head<string>('abc', n);
        result = _.head('abc', n);

        result = _<string>('abc').head(n);
        result = _('abc').head(n);

        result = _<string>('abc').chain().head(n).value();
        result = _('abc').chain().head(n).value();

        result = _.take<string>('abc', n);
        result = _.take('abc', n);

        result = _<string>('abc').take(n);
        result = _('abc').take(n);

        result = _<string>('abc').chain().take(n).value();
        result = _('abc').chain().take(n).value();
    }
}

namespace TestInitial {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    // without n
    {
        let result: _.List<{ a: string }>;

        result = _.initial<{ a: string }>(array);
        result = _.initial(array);

        result = _<{ a: string }>(array).initial();
        result = _(array).initial();

        result = _.chain<{ a: string }>(array).initial().value();
        result = _.chain(array).initial().value();

        result = _<{ a: string }>(array).chain().initial().value();
        result = _(array).chain().initial().value();

        result = _.initial<{ a: string }>(list);
        result = _.initial(list);

        result = _<{ a: string }>(list).initial();
        result = _(list).initial();

        result = _.chain<{ a: string }>(list).initial().value();
        result = _.chain(list).initial().value();

        result = _<{ a: string }>(list).chain().initial().value();
        result = _(list).chain().initial().value();
    }

    {
        let result: _.List<string>;

        result = _.initial<string>('abc');
        result = _.initial('abc');

        result = _<string>('abc').initial();
        result = _('abc').initial();

        result = _<string>('abc').chain().initial().value();
        result = _('abc').chain().initial().value();
    }

    // with n
    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.initial<{ a: string }>(array, n);
        result = _.initial(array, n);

        result = _<{ a: string }>(array).initial(n);
        result = _(array).initial(n);

        result = _.chain<{ a: string }>(array).initial(n).value();
        result = _.chain(array).initial(n).value();

        result = _<{ a: string }>(array).chain().initial(n).value();
        result = _(array).chain().initial(n).value();

        result = _.initial<{ a: string }>(list, n);
        result = _.initial(list, n);

        result = _<{ a: string }>(list).initial(n);
        result = _(list).initial(n);

        result = _.chain<{ a: string }>(list).initial(n).value();
        result = _.chain(list).initial(n).value();

        result = _<{ a: string }>(list).chain().initial(n).value();
        result = _(list).chain().initial(n).value();
    }

    {
        let result: _.List<string>;
        let n = 2;

        result = _.initial<string>('abc', n);
        result = _.initial('abc', n);

        result = _<string>('abc').initial(n);
        result = _('abc').initial(n);

        result = _<string>('abc').chain().initial(n).value();
        result = _('abc').chain().initial(n).value();
    }
}

namespace TestLast {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    // without n
    {
        let result: { a: string } | undefined;

        result = _.last<{ a: string }>(array);
        result = _.last(array);

        result = _<{ a: string }>(array).last();
        result = _(array).last();

        result = _.chain<{ a: string }>(array).last().value();
        result = _.chain(array).last().value();

        result = _<{ a: string }>(array).chain().last().value();
        result = _(array).chain().last().value();

        result = _.last<{ a: string }>(list);
        result = _.last(list);

        result = _<{ a: string }>(list).last();
        result = _(list).last();

        result = _.chain<{ a: string }>(list).last().value();
        result = _.chain(list).last().value();

        result = _<{ a: string }>(list).chain().last().value();
        result = _(list).chain().last().value();
    }

    {
        let result: string | undefined;

        result = _.last<string>('abc');
        result = _.last('abc');

        result = _<string>('abc').last();
        result = _('abc').last();

        result = _<string>('abc').chain().last().value();
        result = _('abc').chain().last().value();
    }

    // with n
    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.last<{ a: string }>(array, n);
        result = _.last(array, n);

        result = _<{ a: string }>(array).last(n);
        result = _(array).last(n);

        result = _.chain<{ a: string }>(array).last(n).value();
        result = _.chain(array).last(n).value();

        result = _<{ a: string }>(array).chain().last(n).value();
        result = _(array).chain().last(n).value();

        result = _.last<{ a: string }>(list, n);
        result = _.last(list, n);

        result = _<{ a: string }>(list).last(n);
        result = _(list).last(n);

        result = _.chain<{ a: string }>(list).last(n).value();
        result = _.chain(list).last(n).value();

        result = _<{ a: string }>(list).chain().last(n).value();
        result = _(list).chain().last(n).value();
    }

    {
        let result: _.List<string>;
        let n = 2;

        result = _.last<string>('abc', n);
        result = _.last('abc', n);

        result = _<string>('abc').last(n);
        result = _('abc').last(n);

        result = _<string>('abc').chain().last(n).value();
        result = _('abc').chain().last(n).value();
    }
}

namespace TestRest {
    let array: { a: string }[] = [{ a: 'a' }, { a: 'b' }];
    let list: _.List<{ a: string }> = { 0: { a: 'a' }, 1: { a: 'b' }, length: 2 };
    let dict: _.Dictionary<{ a: string }> = { a: { a: 'a' }, b: { a: 'b' } };

    // without n
    {
        let result: { a: string }[];

        result = _.rest<{ a: string }>(array);
        result = _.rest(array);

        result = _<{ a: string }>(array).rest();
        result = _(array).rest();

        result = _.chain<{ a: string }>(array).rest().value();
        result = _.chain(array).rest().value();

        result = _<{ a: string }>(array).chain().rest().value();
        result = _(array).chain().rest().value();

        result = _.rest<{ a: string }>(list);
        result = _.rest(list);

        result = _<{ a: string }>(list).rest();
        result = _(list).rest();

        result = _.chain<{ a: string }>(list).rest().value();
        result = _.chain(list).rest().value();

        result = _<{ a: string }>(list).chain().rest().value();
        result = _(list).chain().rest().value();

        result = _.tail<{ a: string }>(array);
        result = _.tail(array);

        result = _<{ a: string }>(array).tail();
        result = _(array).tail();

        result = _.chain<{ a: string }>(array).tail().value();
        result = _.chain(array).tail().value();

        result = _<{ a: string }>(array).chain().tail().value();
        result = _(array).chain().tail().value();

        result = _.tail<{ a: string }>(list);
        result = _.tail(list);

        result = _<{ a: string }>(list).tail();
        result = _(list).tail();

        result = _.chain<{ a: string }>(list).tail().value();
        result = _.chain(list).tail().value();

        result = _<{ a: string }>(list).chain().tail().value();
        result = _(list).chain().tail().value();

        result = _.drop<{ a: string }>(array);
        result = _.drop(array);

        result = _<{ a: string }>(array).drop();
        result = _(array).drop();

        result = _.chain<{ a: string }>(array).drop().value();
        result = _.chain(array).drop().value();

        result = _<{ a: string }>(array).chain().drop().value();
        result = _(array).chain().drop().value();

        result = _.drop<{ a: string }>(list);
        result = _.drop(list);

        result = _<{ a: string }>(list).drop();
        result = _(list).drop();

        result = _.chain<{ a: string }>(list).drop().value();
        result = _.chain(list).drop().value();

        result = _<{ a: string }>(list).chain().drop().value();
        result = _(list).chain().drop().value();
    }

    {
        let result: string[];

        result = _.rest<string>('abc');
        result = _.rest('abc');

        result = _<string>('abc').rest();
        result = _('abc').rest();

        result = _<string>('abc').chain().rest().value();
        result = _('abc').chain().rest().value();

        result = _.tail<string>('abc');
        result = _.tail('abc');

        result = _<string>('abc').tail();
        result = _('abc').tail();

        result = _<string>('abc').chain().tail().value();
        result = _('abc').chain().tail().value();

        result = _.drop<string>('abc');
        result = _.drop('abc');

        result = _<string>('abc').drop();
        result = _('abc').drop();

        result = _<string>('abc').chain().drop().value();
        result = _('abc').chain().drop().value();
    }

    // with n
    {
        let result: _.List<{ a: string }>;
        let n = 2;

        result = _.rest<{ a: string }>(array, n);
        result = _.rest(array, n);

        result = _<{ a: string }>(array).rest(n);
        result = _(array).rest(n);

        result = _.chain<{ a: string }>(array).rest(n).value();
        result = _.chain(array).rest(n).value();

        result = _<{ a: string }>(array).chain().rest(n).value();
        result = _(array).chain().rest(n).value();

        result = _.rest<{ a: string }>(list, n);
        result = _.rest(list, n);

        result = _<{ a: string }>(list).rest(n);
        result = _(list).rest(n);

        result = _.chain<{ a: string }>(list).rest(n).value();
        result = _.chain(list).rest(n).value();

        result = _<{ a: string }>(list).chain().rest(n).value();
        result = _(list).chain().rest(n).value();

        result = _.tail<{ a: string }>(array, n);
        result = _.tail(array, n);

        result = _<{ a: string }>(array).tail(n);
        result = _(array).tail(n);

        result = _.chain<{ a: string }>(array).tail(n).value();
        result = _.chain(array).tail(n).value();

        result = _<{ a: string }>(array).chain().tail(n).value();
        result = _(array).chain().tail(n).value();

        result = _.tail<{ a: string }>(list, n);
        result = _.tail(list, n);

        result = _<{ a: string }>(list).tail(n);
        result = _(list).tail(n);

        result = _.chain<{ a: string }>(list).tail(n).value();
        result = _.chain(list).tail(n).value();

        result = _<{ a: string }>(list).chain().tail(n).value();
        result = _(list).chain().tail(n).value();

        result = _.drop<{ a: string }>(array, n);
        result = _.drop(array, n);

        result = _<{ a: string }>(array).drop(n);
        result = _(array).drop(n);

        result = _.chain<{ a: string }>(array).drop(n).value();
        result = _.chain(array).drop(n).value();

        result = _<{ a: string }>(array).chain().drop(n).value();
        result = _(array).chain().drop(n).value();

        result = _.drop<{ a: string }>(list, n);
        result = _.drop(list, n);

        result = _<{ a: string }>(list).drop(n);
        result = _(list).drop(n);

        result = _.chain<{ a: string }>(list).drop(n).value();
        result = _.chain(list).drop(n).value();

        result = _<{ a: string }>(list).chain().drop(n).value();
        result = _(list).chain().drop(n).value();
    }

    {
        let result: _.List<string>;
        let n = 2;

        result = _.rest<string>('abc', n);
        result = _.rest('abc', n);

        result = _<string>('abc').rest(n);
        result = _('abc').rest(n);

        result = _<string>('abc').chain().rest(n).value();
        result = _('abc').chain().rest(n).value();

        result = _.tail<string>('abc', n);
        result = _.tail('abc', n);

        result = _<string>('abc').tail(n);
        result = _('abc').tail(n);

        result = _<string>('abc').chain().tail(n).value();
        result = _('abc').chain().tail(n).value();

        result = _.drop<string>('abc', n);
        result = _.drop('abc', n);

        result = _<string>('abc').drop(n);
        result = _('abc').drop(n);

        result = _<string>('abc').chain().drop(n).value();
        result = _('abc').chain().drop(n).value();
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
    .map<{ age: number; name: string; id: string }>((p, k: string) => {
        return [{ id: k, ...p }];
    })
    .value();

let usersTable_3 /*: { score: number; fullName: string; login: string }[][]*/ = _.chain(usersTable)
    .map<{ score: number; fullName: string; login: string }>(p => {
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
    var numArray: number[] = _.chain([1, 2, 3, 4, 5, 6, 7, 8])
        .filter(num => num % 2 == 0)
        .map(num => num * num)
        .value();

    var strArray: string[] = _([1, 2, 3, 4])
        .chain()
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => "string" + num)
        .value();

    var n: number = _.chain([1, 2, 3, 200])
        .filter(num => num % 2 == 0)
        .tap(alert)
        .map(num => num * num)
        .max()
        .value();

    // this test was failing as of commit 6de1126, and even changing _Chain.Find<T> to _Chain.Find<TItem = T> as a workaround did not help
    // most likely removing the type argument T local to the function in favor of using T from _Chain<T, V> is the best fix for this,
    // but that will be a breaking change
    // ideally _Chain.detect and _Chain.sample should also be updated as part of that update along with Underscore.find, Underscore.detect,
    // Underscore.sample, Underscore.findIndex, and Underscore.findLastIndex
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
