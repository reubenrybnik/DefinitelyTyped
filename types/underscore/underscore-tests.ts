// common testing types and objects
const context = {};

interface SimpleStringObject {
    a: string;
    b: string;
}

const simpleStringObjectPropertyName = 'a';
const simpleStringObjectPartialPropertyMatch: Partial<SimpleStringObject> = { a: 'b' };

const simpleStringObjectArray: SimpleStringObject[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, { a: 'c', b: 'a' }];
const simpleStringObjectList: _.List<SimpleStringObject> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: { a: 'c', b: 'a' }, length: 3 };
const simpleStringObjectListPropertyModifyingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a += 'b';
const simpleStringObjectListPropertySelectingIterator = (value: SimpleStringObject, index: number, list: _.List<SimpleStringObject>) => value.a;

const simpleStringObjectDictionary: _.Dictionary<SimpleStringObject> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: { a: 'c', b: 'a' } };
const simpleStringObjectDictionaryPropertyModifyingIterator = (element: SimpleStringObject, key: string, dictionary: _.Dictionary<SimpleStringObject>) => element.a += 'b';
const simpleStringObjectDictionaryPropertySelectingIterator = (element: SimpleStringObject, key: string, dictionary: _.Dictionary<SimpleStringObject>) => element.a;

type SimpleStringObjectOrUndefined = SimpleStringObject | undefined;

const simpleStringObjectOrUndefinedArray: SimpleStringObjectOrUndefined[] = [{ a: 'a', b: 'c' }, { a: 'b', b: 'b' }, undefined];
const simpleStringObjectOrUndefinedList: _.List<SimpleStringObjectOrUndefined> = { 0: { a: 'a', b: 'c' }, 1: { a: 'b', b: 'b' }, 2: undefined, length: 3 };
const simpleStringObjectOrUndefinedDictionary: _.Dictionary<SimpleStringObjectOrUndefined> = { a: { a: 'a', b: 'c' }, b: { a: 'b', b: 'b' }, c: undefined };

interface SimpleMultiTypeObject {
    a: boolean;
    c: string;
}

type IntersectingObjectPropertiesType = SimpleStringObject | SimpleMultiTypeObject;

const intersectingObjectPropertiesArray: IntersectingObjectPropertiesType[] = [{ a: 'a', b: 'b' }, { a: true, c: 'c' }];
const intersectingObjectPropertiesList: _.List<IntersectingObjectPropertiesType> = { 0: { a: 'a', b: 'b' }, 1: { a: true, c: 'c' }, length: 2 };
const intersectingObjectPropertiesDictionary: _.Dictionary<IntersectingObjectPropertiesType> = { a: { a: 'a', b: 'b' }, b: { a: true, c: 'c' } };

interface SimpleNonIntersectingObject {
    onlySimpleNonIntersectingObject: string;
}

type NonIntersectingObjectPropertiesType = SimpleStringObject | SimpleNonIntersectingObject;

const nonIntersectingObjectPropertiesArray: NonIntersectingObjectPropertiesType[] = [{ a: 'a', b: 'c' }, { onlySimpleNonIntersectingObject: 'b' }];
const nonIntersectingObjectPropertiesList: _.List<NonIntersectingObjectPropertiesType> = { 0: { a: 'a', b: 'c' }, 1: { onlySimpleNonIntersectingObject: 'b' }, length: 2 };
const nonIntersectingObjectPropertiesDictionary: _.Dictionary<NonIntersectingObjectPropertiesType> = { a: { a: 'a', b: 'c' }, b: { onlySimpleNonIntersectingObject: 'b' } };

const simpleString = 'abc';
const stringListModifyingIterator = (value: string, index: number, list: _.List<string>) => value + 'b';

const simpleNumber = 7;

// Collections

// each, forEach
{
    {

        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.each<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _.each<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType SimpleStringObject[]
        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _.each(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        // $ExpectType SimpleStringObject[]
        result = _.forEach<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _.forEach<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType SimpleStringObject[]
        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _.forEach(simpleStringObjectArray, simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        // $ExpectType List<SimpleStringObject>
        result = _.each<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _.each<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType List<SimpleStringObject>
        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _.each(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType List<SimpleStringObject>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType List<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).each(simpleStringObjectListPropertyModifyingIterator, context).value();

        // $ExpectType List<SimpleStringObject>
        result = _.forEach<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _.forEach<SimpleStringObject>(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType List<SimpleStringObject>
        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _.forEach(simpleStringObjectList, simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType List<SimpleStringObject>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context);
        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator);
        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context);

        // $ExpectType List<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator).value();
        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).forEach(simpleStringObjectListPropertyModifyingIterator, context).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.each<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.each<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.each(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        // $ExpectType Dictionary<SimpleStringObject>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).each(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.forEach<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.forEach<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.forEach(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertyModifyingIterator, context);

        // $ExpectType Dictionary<SimpleStringObject>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator);
        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context);

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator).value();
        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).forEach(simpleStringObjectDictionaryPropertyModifyingIterator, context).value();
    }
}

// map, collect
{
    // function iterator
    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectListPropertySelectingIterator, context).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectArray, simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).map(simpleStringObjectListPropertySelectingIterator, context).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectList, simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<string>(simpleStringObjectListPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectListPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _.map(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<string>(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectDictionaryPropertySelectingIterator, context).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect<SimpleStringObject, string>(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectDictionaryPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator, context);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<string>(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectDictionaryPropertySelectingIterator, context).value();
    }

    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<string, string>(simpleString, stringListModifyingIterator);
        // $ExpectType string[]
        result = _.map<string, string>(simpleString, stringListModifyingIterator, context);
        // $ExpectType string[]
        result = _.map(simpleString, stringListModifyingIterator);
        // $ExpectType string[]
        result = _.map(simpleString, stringListModifyingIterator, context);

        // $ExpectType string[]
        result = _<string, string>(simpleString).map<string>(stringListModifyingIterator);
        // $ExpectType string[]
        result = _<string, string>(simpleString).map<string>(stringListModifyingIterator, context);
        // $ExpectType string[]
        result = _(simpleString).map(stringListModifyingIterator);
        // $ExpectType string[]
        result = _(simpleString).map(stringListModifyingIterator, context);

        // $ExpectType string[]
        result = _.chain<string, string>(simpleString).map<string>(stringListModifyingIterator).value();
        // $ExpectType string[]
        result = _.chain<string, string>(simpleString).map<string>(stringListModifyingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleString).map(stringListModifyingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleString).map(stringListModifyingIterator, context).value();

        // $ExpectType string[]
        result = _.collect<string, string>(simpleString, stringListModifyingIterator);
        // $ExpectType string[]
        result = _.collect<string, string>(simpleString, stringListModifyingIterator, context);
        // $ExpectType string[]
        result = _.collect(simpleString, stringListModifyingIterator);
        // $ExpectType string[]
        result = _.collect(simpleString, stringListModifyingIterator, context);

        // $ExpectType string[]
        result = _<string, string>(simpleString).collect<string>(stringListModifyingIterator);
        // $ExpectType string[]
        result = _<string, string>(simpleString).collect<string>(stringListModifyingIterator, context);
        // $ExpectType string[]
        result = _(simpleString).collect(stringListModifyingIterator);
        // $ExpectType string[]
        result = _(simpleString).collect(stringListModifyingIterator, context);

        // $ExpectType string[]
        result = _.chain<string, string>(simpleString).collect<string>(stringListModifyingIterator).value();
        // $ExpectType string[]
        result = _.chain<string, string>(simpleString).collect<string>(stringListModifyingIterator, context).value();
        // $ExpectType string[]
        result = _.chain(simpleString).collect(stringListModifyingIterator).value();
        // $ExpectType string[]
        result = _.chain(simpleString).collect(stringListModifyingIterator, context).value();
    }

    // partial object iterator with a non-nullable single type
    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObject>(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectList).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObject>(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObject>(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a non-nullable intersecting type union
    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<IntersectingObjectPropertiesType>(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<IntersectingObjectPropertiesType>(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(intersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<IntersectingObjectPropertiesType>(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<IntersectingObjectPropertiesType>(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(intersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<IntersectingObjectPropertiesType>(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<IntersectingObjectPropertiesType>(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a nullable type union
    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<SimpleStringObjectOrUndefined>(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // partial object iterator with a non-nullable non-intersecting type union
    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesList).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(nonIntersectingObjectPropertiesList, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesList).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    {
        let result: boolean[];

        // $ExpectType boolean[]
        result = _.map<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPartialPropertyMatch).value();

        // $ExpectType boolean[]
        result = _.collect<NonIntersectingObjectPropertiesType>(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);
        // $ExpectType boolean[]
        result = _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch);

        // $ExpectType boolean[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
        // $ExpectType boolean[]
        result = _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPartialPropertyMatch).value();
    }

    // property name iterator with a non-nullable single type
    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectArray, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.map(simpleStringObjectArray, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).map(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).map(simpleStringObjectPropertyName).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectArray, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectArray, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).collect(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectList, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.map(simpleStringObjectList, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectList).map(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).map(simpleStringObjectPropertyName).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectList, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectList, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectList).collect(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: string[];

        // $ExpectType string[]
        result = _.map<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectDictionary, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.map(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).map(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).map(simpleStringObjectPropertyName).value();

        // $ExpectType string[]
        result = _.collect<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectDictionary, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.collect(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable intersecting type union
    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.map<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.map(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | boolean)[]
        result = _.collect<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.collect(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.map<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesList, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.map(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesList).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | boolean)[]
        result = _.collect<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesList, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.collect(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.map<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.map(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | boolean)[]
        result = _.collect<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.collect(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a nullable type union
    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedArray).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedList).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedList).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedDictionary).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedDictionary).collect(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting type union
    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesList, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).collect(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.map<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.map(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).map<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesDictionary).map(simpleStringObjectPropertyName).value();

        // $ExpectType (string | undefined)[]
        result = _.collect<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.collect(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).collect<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesDictionary).collect(simpleStringObjectPropertyName).value();
    }
}

// pluck
{
    // property name iterator with a non-nullable single type
    {
        let result: string[];

        // $ExpectType string[]
        result = _.pluck<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectArray, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.pluck(simpleStringObjectArray, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectArray).pluck(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType string[]
        result = _.pluck<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectList, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.pluck(simpleStringObjectList, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectList).pluck(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType string[]
        result = _.pluck<SimpleStringObject, typeof simpleStringObjectPropertyName>(simpleStringObjectDictionary, simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _.pluck(simpleStringObjectDictionary, simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType string[]
        result = _(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName);

        // $ExpectType string[]
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType string[]
        result = _.chain(simpleStringObjectDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable intersecting type union
    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.pluck<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.pluck(intersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, IntersectingObjectPropertiesType[]>(intersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.pluck<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesList, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.pluck(intersectingObjectPropertiesList, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.List<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | boolean)[];

        // $ExpectType (string | boolean)[]
        result = _.pluck<IntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _.pluck(intersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | boolean)[]
        result = _(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | boolean)[]
        result = _.chain<IntersectingObjectPropertiesType, _.Dictionary<IntersectingObjectPropertiesType>>(intersectingObjectPropertiesDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | boolean)[]
        result = _.chain(intersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a nullable type union
    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(simpleStringObjectOrUndefinedArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, SimpleStringObjectOrUndefined[]>(simpleStringObjectOrUndefinedArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(simpleStringObjectOrUndefinedList, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.List<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedList).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedList).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<SimpleStringObjectOrUndefined, typeof simpleStringObjectPropertyName>(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(simpleStringObjectOrUndefinedDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<SimpleStringObjectOrUndefined, _.Dictionary<SimpleStringObjectOrUndefined>>(simpleStringObjectOrUndefinedDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(simpleStringObjectOrUndefinedDictionary).pluck(simpleStringObjectPropertyName).value();
    }

    // property name iterator with a non-nullable non-intersecting type union
    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, NonIntersectingObjectPropertiesType[]>(nonIntersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesList, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(nonIntersectingObjectPropertiesArray, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.List<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesArray).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesArray).pluck(simpleStringObjectPropertyName).value();
    }

    {
        let result: (string | undefined)[];

        // $ExpectType (string | undefined)[]
        result = _.pluck<NonIntersectingObjectPropertiesType, typeof simpleStringObjectPropertyName>(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _.pluck(nonIntersectingObjectPropertiesDictionary, simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName);
        // $ExpectType (string | undefined)[]
        result = _(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName);

        // $ExpectType (string | undefined)[]
        result = _.chain<NonIntersectingObjectPropertiesType, _.Dictionary<NonIntersectingObjectPropertiesType>>(nonIntersectingObjectPropertiesDictionary).pluck<typeof simpleStringObjectPropertyName>(simpleStringObjectPropertyName).value();
        // $ExpectType (string | undefined)[]
        result = _.chain(nonIntersectingObjectPropertiesDictionary).pluck(simpleStringObjectPropertyName).value();
    }
}

// Arrays

// flatten
{
    // one dimension, deep
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject>(simpleStringObjectArray);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(simpleStringObjectArray);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).flatten().value();
    }

    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject>(simpleStringObjectList);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(simpleStringObjectList);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectList).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectList).flatten().value();
    }

    // one dimension, shallow
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject>(simpleStringObjectArray, true);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(simpleStringObjectArray, true);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).flatten(true);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).flatten(true);

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).flatten(true).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).flatten(true).value();
    }

    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject>(simpleStringObjectList, true);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(simpleStringObjectList, true);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).flatten(true);
        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectList).flatten(true);

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).flatten(true).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectList).flatten(true).value();
    }

    // two dimensions, deep
    {
        const array: SimpleStringObject[][] = [simpleStringObjectArray];
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject[]>(array);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(array);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject[], SimpleStringObject[][]>(array).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(array).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject[], SimpleStringObject[][]>(array).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: simpleStringObjectList, length: 1 };
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<_.List<SimpleStringObject>>(list);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(list);

        // $ExpectType SimpleStringObject[]
        result = _<_.List<SimpleStringObject>, _.List<_.List<SimpleStringObject>>>(list).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(list).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<_.List<SimpleStringObject>, _.List<_.List<SimpleStringObject>>>(list).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(list).flatten().value();
    }

    // two dimensions, shallow
    {
        const array: SimpleStringObject[][] = [simpleStringObjectArray];
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject[]>(array, true);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(array, true);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject[], SimpleStringObject[][]>(array).flatten(true);
        // $ExpectType SimpleStringObject[]
        result = _(array).flatten(true);

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject[], SimpleStringObject[][]>(array).flatten(true).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<SimpleStringObject>> = { 0: simpleStringObjectList, length: 1 };
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<_.List<SimpleStringObject>>(list, true);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(list, true);

        // $ExpectType SimpleStringObject[]
        result = _<_.List<SimpleStringObject>, _.List<_.List<SimpleStringObject>>>(list).flatten(true);
        // $ExpectType SimpleStringObject[]
        result = _(list).flatten(true);

        // $ExpectType SimpleStringObject[]
        result = _.chain<_.List<SimpleStringObject>, _.List<_.List<SimpleStringObject>>>(list).flatten(true).value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(list).flatten(true).value();
    }

    // three dimensions, deep
    {
        const array: SimpleStringObject[][][] = [[simpleStringObjectArray]];
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<SimpleStringObject[][]>(array);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(array);

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject[][], SimpleStringObject[][][]>(array).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(array).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject[][], SimpleStringObject[][][]>(array).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 };
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.flatten<_.List<_.List<SimpleStringObject>>>(list);
        // $ExpectType SimpleStringObject[]
        result = _.flatten(list);

        // $ExpectType SimpleStringObject[]
        result = _<_.List<_.List<SimpleStringObject>>, _.List<_.List<_.List<SimpleStringObject>>>>(list).flatten();
        // $ExpectType SimpleStringObject[]
        result = _(list).flatten();

        // $ExpectType SimpleStringObject[]
        result = _.chain<_.List<_.List<SimpleStringObject>>, _.List<_.List<_.List<SimpleStringObject>>>>(list).flatten().value();
        // $ExpectType SimpleStringObject[]
        result = _.chain(list).flatten().value();
    }

    // three dimensions, shallow
    {
        const array: SimpleStringObject[][][] = [[simpleStringObjectArray]];
        let result: SimpleStringObject[][];

        // $ExpectType SimpleStringObject[][]
        result = _.flatten<SimpleStringObject[][]>(array, true);
        // $ExpectType SimpleStringObject[][]
        result = _.flatten(array, true);

        // $ExpectType SimpleStringObject[][]
        result = _<SimpleStringObject[][], SimpleStringObject[][][]>(array).flatten(true);
        // $ExpectType SimpleStringObject[][]
        result = _(array).flatten(true);

        // $ExpectType SimpleStringObject[][]
        result = _.chain<SimpleStringObject[][], SimpleStringObject[][][]>(array).flatten(true).value();
        // $ExpectType SimpleStringObject[][]
        result = _.chain(array).flatten(true).value();
    }

    {
        const list: _.List<_.List<_.List<SimpleStringObject>>> = { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 };
        let result: _.List<SimpleStringObject>[];

        // $ExpectType List<SimpleStringObject[]>
        result = _.flatten<_.List<_.List<SimpleStringObject>>>(list, true);
        // $ExpectType List<SimpleStringObject[]>
        result = _.flatten(list, true);

        // $ExpectType List<SimpleStringObject[]>
        result = _<_.List<_.List<SimpleStringObject>>, _.List<_.List<_.List<SimpleStringObject>>>>(list).flatten(true);
        // $ExpectType List<SimpleStringObject[]>
        result = _(list).flatten(true);

        // $ExpectType List<SimpleStringObject[]>
        result = _.chain<_.List<_.List<SimpleStringObject>>, _.List<_.List<_.List<SimpleStringObject>>>>(list).flatten(true).value();
        // $ExpectType List<SimpleStringObject[]>
        result = _.chain(list).flatten(true).value();
    }

    // four dimensions, deep - this is where recursion gives up and results in unknown[]
    {
        const array: SimpleStringObject[][][][] = [[[simpleStringObjectArray]]];
        let result: unknown[];

        // $ExpectType unknown[]
        result = _.flatten<SimpleStringObject[][][]>(array);
        // $ExpectType unknown[]
        result = _.flatten(array);

        // $ExpectType unknown[]
        result = _<SimpleStringObject[][][], SimpleStringObject[][][][]>(array).flatten();
        // $ExpectType unknown[]
        result = _(array).flatten();

        // $ExpectType unknown[]
        result = _.chain<SimpleStringObject[][][], SimpleStringObject[][][][]>(array).flatten().value();
        // $ExpectType unknown[]
        result = _.chain(array).flatten().value();
    }

    {
        const list: _.List<_.List<_.List<_.List<SimpleStringObject>>>> = { 0: { 0: { 0: simpleStringObjectList, length: 1 }, length: 1 }, length: 1 };
        let result: unknown[];

        // $ExpectType unknown[]
        result = _.flatten<_.List<_.List<_.List<SimpleStringObject>>>>(list);
        // $ExpectType unknown[]
        result = _.flatten(list);

        // $ExpectType unknown[]
        result = _<_.List<_.List<_.List<SimpleStringObject>>>, _.List<_.List<_.List<_.List<SimpleStringObject>>>>>(list).flatten();
        // $ExpectType unknown[]
        result = _(list).flatten();

        // $ExpectType unknown[]
        result = _.chain<_.List<_.List<_.List<SimpleStringObject>>>, _.List<_.List<_.List<_.List<SimpleStringObject>>>>>(list).flatten().value();
        // $ExpectType unknown[]
        result = _.chain(list).flatten().value();
    }
}

// OOP Style

// underscore
{
    {
        let result: _.Underscore<SimpleStringObject, SimpleStringObject[]>;

        // $ExpectType Underscore<SimpleStringObject, SimpleStringObject[]>
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray);

        // $ExpectType Underscore<SimpleStringObject, SimpleStringObject[]>
        result = _(simpleStringObjectArray);
    }

    {
        let result: _.Underscore<SimpleStringObject, _.List<SimpleStringObject>>;

        // $ExpectType Underscore<SimpleStringObject, List<SimpleStringObject>>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList);

        // $ExpectType Underscore<SimpleStringObject, List<SimpleStringObject>>
        result = _(simpleStringObjectList);
    }

    {
        let result: _.Underscore<SimpleStringObject, _.Dictionary<SimpleStringObject>>;

        // $ExpectType Underscore<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary);

        // $ExpectType Underscore<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _(simpleStringObjectDictionary);

    }

    {
        let result: _.Underscore<string, string>;

        // $ExpectType Underscore<string, string>
        result = _<string, string>(simpleString);

        // $ExpectType Underscore<string, string>
        result = _(simpleString);
    }

    {
        let result: _.Underscore<number, number>;

        // $ExpectType Underscore<number, number>
        result = _<number>(simpleNumber);

        // $ExpectType Underscore<number, number>
        result = _(simpleNumber);
    }
}

// value
// verify that the object given to underscore is returned by value
{
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).value();

        // $ExpectType SimpleStringObject[]
        result = _(simpleStringObjectArray).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        // $ExpectType List<SimpleStringObject>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).value();

        // $ExpectType List<SimpleStringObject>
        result = _(simpleStringObjectList).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        // $ExpectType Dictionary<SimpleStringObject>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).value();

        // $ExpectType Dictionary<SimpleStringObject>
        result = _(simpleStringObjectDictionary).value();

    }

    {
        let result: string;

        // $ExpectType string
        result = _<string, string>(simpleString).value();

        // $ExpectType string
        result = _(simpleString).value();
    }

    {
        let result: number;

        // $ExpectType number
        result = _<number>(simpleNumber).value();

        // $ExpectType number
        result = _(simpleNumber).value();
    }
}

// Chaining

// chain
// verify that the right chain item and value types are yielded by calls to chain
// these tests also check to make sure that _.chain() and _().chain() yield the same types
{
    {
        let result: _._Chain<SimpleStringObject, SimpleStringObject[]>;

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray);

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _.chain(simpleStringObjectArray);

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).chain();

        // $ExpectType _Chain<SimpleStringObject, SimpleStringObject[]>
        result = _(simpleStringObjectArray).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.List<SimpleStringObject>>;

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList);

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _.chain(simpleStringObjectList);

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).chain();

        // $ExpectType _Chain<SimpleStringObject, List<SimpleStringObject>>
        result = _(simpleStringObjectList).chain();
    }

    {
        let result: _._Chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>;

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary);

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _.chain(simpleStringObjectDictionary);

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).chain();

        // $ExpectType _Chain<SimpleStringObject, Dictionary<SimpleStringObject>>
        result = _(simpleStringObjectDictionary).chain();

    }

    {
        let result: _._Chain<string, string>;

        // $ExpectType _Chain<string, string>
        result = _.chain<string, string>(simpleString);

        // $ExpectType _Chain<string, string>
        result = _.chain(simpleString);

        // $ExpectType _Chain<string, string>
        result = _<string, string>(simpleString).chain();

        // $ExpectType _Chain<string, string>
        result = _(simpleString).chain();
    }

    {
        let result: _._Chain<number, number>;

        // $ExpectType _Chain<number, number>
        result = _.chain<number>(simpleNumber);

        // $ExpectType _Chain<number, number>
        result = _.chain(simpleNumber);

        // $ExpectType _Chain<number, number>
        result = _<number>(simpleNumber).chain();

        // $ExpectType _Chain<number, number>
        result = _(simpleNumber).chain();
    }
}

// value
// verify that the object given to chain is returned by value
{
    {
        let result: SimpleStringObject[];

        // $ExpectType SimpleStringObject[]
        result = _.chain<SimpleStringObject, SimpleStringObject[]>(simpleStringObjectArray).value();

        // $ExpectType SimpleStringObject[]
        result = _.chain(simpleStringObjectArray).value();
    }

    {
        let result: _.List<SimpleStringObject>;

        // $ExpectType List<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.List<SimpleStringObject>>(simpleStringObjectList).value();

        // $ExpectType List<SimpleStringObject>
        result = _.chain(simpleStringObjectList).value();
    }

    {
        let result: _.Dictionary<SimpleStringObject>;

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain<SimpleStringObject, _.Dictionary<SimpleStringObject>>(simpleStringObjectDictionary).value();

        // $ExpectType Dictionary<SimpleStringObject>
        result = _.chain(simpleStringObjectDictionary).value();

    }

    {
        let result: string;

        // $ExpectType string
        result = _.chain<string, string>(simpleString).value();

        // $ExpectType string
        result = _.chain(simpleString).value();
    }

    {
        let result: number;

        // $ExpectType number
        result = _.chain<number>(simpleNumber).value();

        // $ExpectType number
        result = _.chain(simpleNumber).value();
    }
}

// Additional Tests

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