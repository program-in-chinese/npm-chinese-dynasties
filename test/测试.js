var assert = require('assert');
var 演示 = require("../入口")

describe('朝代', function() {
  describe('#查询()', function() {
    it('当无参数时, 返回空', function() {
      assert.deepStrictEqual(演示.查询(), []);
    });
    it('返回夏代信息', function() {
      assert.deepStrictEqual(演示.查询("夏"), [{名: "夏", 起: -2070, 止: -1600}]);
    });
    it('返回唐代信息', function() {
      assert.deepStrictEqual(演示.查询("唐"), [
        {名: "唐", 起: 618, 止: 907},
        {名: "后唐", 起: 923, 止: 936}
      ]);
    });
    it('返回明代信息', function() {
      assert.deepStrictEqual(演示.查询("明"), [{名: "明", 起: 1368, 止: 1644}]);
    });
    it('返回魏代信息', function() {
      assert.deepStrictEqual(演示.查询("魏"), [{名: "魏", 起: 220, 止: 265}]);
    });
    it('返回汉代信息', function() {
      assert.deepStrictEqual(演示.查询("汉"), [
        {名: "西汉", 起: -206, 止: 25},
        {名: "东汉", 起: 25, 止: 220},
        {名: "后汉", 起: 947, 止: 950}
      ]);
    });
  });
});
