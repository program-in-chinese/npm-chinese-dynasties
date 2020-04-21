var assert = require('assert');
var 演示 = require("../入口")

describe('朝代', function() {
  describe('#查询()', function() {
    it('当无参数时, 返回空', function() {
      assert.deepStrictEqual(演示.查询(), []);
    });
    it('返回夏代信息', function() {
      assert.deepStrictEqual(演示.查询("夏"), [
        演示.夏朝,
        演示.西夏
      ]);
    });
    it('返回唐代信息', function() {
      assert.deepStrictEqual(演示.查询("唐"), [
        演示.唐朝,
        演示.后唐
      ]);
    });
    it('返回明代信息', function() {
      assert.deepStrictEqual(演示.查询("明"), [{名: "明", 起: 1368, 止: 1644}]);
    });
    it('返回魏代信息', function() {
      assert.deepStrictEqual(演示.查询("魏"), [
        演示.魏国,
        演示.北魏,
        演示.东魏,
        演示.西魏
      ]);
    });
    it('返回汉代信息', function() {
      assert.deepStrictEqual(演示.查询("汉"), [
        演示.西汉,
        演示.东汉,
        演示.后汉
      ]);
    });
    it('返回陈代信息', function() {
      assert.deepStrictEqual(演示.查询("陈"), [
        演示.陈朝
      ])
    });
  });
});
