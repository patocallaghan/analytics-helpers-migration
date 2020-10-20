const STRING_UNDERSCORE_REGEXP_1 = /([a-z\d])([A-Z]+)/g;
const STRING_UNDERSCORE_REGEXP_2 = /-|\s+/g;

function isCamelCasedOrDasherized(str) {
  return STRING_UNDERSCORE_REGEXP_1.test(str) || STRING_UNDERSCORE_REGEXP_2.test(str);
}

function underscore(str) {
  return str
    .replace(STRING_UNDERSCORE_REGEXP_1, '$1_$2')
    .replace(STRING_UNDERSCORE_REGEXP_2, '_')
    .toLowerCase();
}

module.exports = function ({ source /*, path*/ }, { parse, visit }) {
  const ast = parse(source);

  return visit(ast, (env) => {
    let { builders: b } = env.syntax;

    return {
      SubExpression(node) {
        if (node.path.original === 'track-analytics-event') {
          node.hash.pairs = node.hash.pairs.map((pair) => {
            if (['action', 'object'].includes(pair.key) && pair.value.type === 'StringLiteral') {
              if (isCamelCasedOrDasherized(pair.value.value)) {
                pair.value = b.string(underscore(pair.value.value));
              }
            }
            return pair;
          });
        }
      },
      MustacheStatement(node) {
        if (node.path.original === 'track-analytics-event') {
          node.hash.pairs = node.hash.pairs.map((pair) => {
            if (['action', 'object'].includes(pair.key) && pair.value.type === 'StringLiteral') {
              if (isCamelCasedOrDasherized(pair.value.value)) {
                pair.value = b.string(underscore(pair.value.value));
              }
            }
            return pair;
          });
        }
      },
      ElementNode(node) {
        if (node.attributes.find((attr) => attr.name.startsWith('data-track-analytics-event-'))) {
          let eventObjectAttr = node.attributes.find(
            (attr) =>
              attr.name === 'data-track-analytics-event-object' && attr.value.type === 'TextNode'
          );
          if (eventObjectAttr && isCamelCasedOrDasherized(eventObjectAttr.value.chars)) {
            eventObjectAttr.value = b.text(underscore(eventObjectAttr.value.chars));
          }
        }
      },
    };
  });
};

module.exports.type = 'hbs';
