const { getParser } = require('codemod-cli').jscodeshift;
const { getOptions } = require('codemod-cli');

const STRING_UNDERSCORE_REGEXP_1 = /([a-z\d])([A-Z]+)/g;
const STRING_UNDERSCORE_REGEXP_2 = /-|\s+/g;

function underscore(str) {
  return str
    .replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2')
    .replace(STRING_UNDERSCORE_REGEXP_2, '_')
    .toLowerCase();
}

module.exports = function transformer(file, api) {
  const j = getParser(api);
  const options = getOptions();

  return j(file.source)
    .find(j.CallExpression, (node) => {
      return (
        node.callee.type === 'MemberExpression' &&
        node.callee.object.type === 'MemberExpression' &&
        node.callee.object.property.name === 'intercomEventService' &&
        node.callee.property.name === 'trackAnalyticsEvent'
      );
    })
    .forEach((path) => {
      if (path.node.arguments.length) {
        let firstArg = path.node.arguments[0];
        if (firstArg.type === 'ObjectExpression') {
          firstArg.properties.forEach((prop) => {
            if (
              prop.value &&
              prop.value.type === 'StringLiteral' &&
              ['action', 'object'].includes(prop.key.name)
            ) {
              prop.value = j.literal(underscore(prop.value.value));
            }
          });
        }
      }
    })
    .toSource({
      quote: 'single',
    });
};

module.exports.type = 'js';
