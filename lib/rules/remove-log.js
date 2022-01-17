module.exports = {
  meta: {
    docs: {
      description: "remove-log",
      category: "Fill me in",
      recommended: false,
    },
    fixable: "code", // 这里设置 fixable 的值为 "code"
    schema: [
      // fill in your schema
    ],
  },

  create: function (context) {
    return {
      // 对 AST 节点类型为 CallExpression 的做处理
      CallExpression(node) {
        // 对 node.callee 类型为 MemberExpression 的做处理
        if (node.callee && node.callee.type === "MemberExpression") {
          // 识别节点为 console.log
          if (
            node.callee.object &&
            node.callee.object.name === "console" &&
            node.callee.property &&
            node.callee.property.name === "log"
          ) {
            // 匹配到 console.log 语句
            // 通过 context 对象上报错误，即在该代码块下提示红线改错误
            context.report({
              node,
              // 提示的错误信息
              message: "eslint插件：不允许使用 console.log",
              // 对该错误的修复函数，这里以移除 console.log 语句为例
              fix: function (fixer) {
                // 取得 console.log 语句的位置
                const [start, end] = node.range;
                // 通过调用 fixer 对象的 replaceTextRange 函数，将改语句替换为空字符串
                return [fixer.replaceTextRange([start, end], "")];
              },
            });
          }
        }
      },
    };
  },
};
