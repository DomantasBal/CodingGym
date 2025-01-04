function getElementsByTag(root, tagName) {
  if (!root) return [];
  if (!tagName) return [root];

  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    if (node.tagName && node.tagName.toLowerCase() === tagName.toLowerCase()) {
      result.push(node);
    }
    stack.push(...node.children);
  }

  return result;
}

module.exports = getElementsByTag;
