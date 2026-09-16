'use strict';

/**
 * Функция, удаляющая из объекта свойства, в которых значением является null, undefined или пустая строка
 * @param {Object} obj - Исходный объект
 * 
 * @example
 * // returns { name: "Bob", age: 21 }
 * compressObject({ name: "Bob", salary: null, job: undefined, hobby: "", age: 21 });
 * 
 * @returns {Object} Новый объект, содержащий только те ключи, которые имеют значения, отличные от null, undefined или пустой строки
 */
const compressObject = obj => Object.fromEntries(
    Object.entries(obj).filter(([, value]) =>
        value !== null && value !== undefined && value !== ""
    )
);
