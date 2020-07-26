'use strict';

(function () {
  let EXCEPTION_TAGS = ['SCRIPT', 'style']; // Excluded tags
  let MULTIPLIER = 3; // Amount of text repetition
  let bodyChildren = document.body.childNodes;

  let testTag = function (node) {
    // if node name === exception returns false
    return !EXCEPTION_TAGS.find((tag) => tag === node.nodeName);
  };

  let multiplyText = function (text) {
    let additionalText = text;
    for (let i = 0; i < MULTIPLIER - 1; i++) {
      text += additionalText;
    }
    return text;
  };

  var iterateDOM = function (nodes) {
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];

      // Only text nodes, not empty, without excluded tags
      if (node.nodeType === 3 && node.data.trim() && testTag(node.parentElement)) {
        node.data = multiplyText(node.data);
      }

      // If children exist, start function again
      iterateDOM(node.childNodes);

    }
  };
  iterateDOM(bodyChildren);
})();
