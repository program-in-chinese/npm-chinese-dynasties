var assert = require('assert');
var 演示 = require("../入口")

describe('朝代', function() {
  describe('#最长()', function() {
    it('历史上跨度最长', function() {
      var 最大跨度 = 0
      var 结果 = []
      for (代 of 演示.历代()) {
        var 跨度 = 代.止 - 代.起
        if (跨度 > 最大跨度) {
          结果 = [代]
          最大跨度 = 跨度
        } else if (跨度 == 最大跨度) {
          结果.push(代)
        }
      }
      assert.deepStrictEqual(结果, [演示.商朝]);
    });
  });
});