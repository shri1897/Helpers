import { isArray, isObject, isDate } from 'util';

export function deepCopy(element) {
    switch (true) {
        case isArray(element):
            {
                return element.map(el => {
                    return deepCopy(el);
                });
            }
        case isDate(element):
            {
                return new Date(element);
            }
        case isObject(element):
            {
                let newObect = {};
                for (let key in element) {
                    newObect[key] = deepCopy(element[key])
                };
                return newObect;
            }
        default:
            {
                return element;
            }
    }
}
