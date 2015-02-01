var DBC, expect, fixtures, memo, sinon, _ref;

_ref = require('../spec-helper'), expect = _ref.expect, fixtures = _ref.fixtures, memo = _ref.memo, sinon = _ref.sinon;

DBC = require('../../lib/dbc/entities');

describe('DBC.Entities', function() {
  var entity;
  entity = function(name) {
    return require("../../lib/dbc/entities/" + name);
  };
  it('exposes AnimationData entity', function() {
    return expect(DBC.AnimationData).to.eq(entity('animation-data'));
  });
  it('exposes ChrClasses entity', function() {
    return expect(DBC.ChrClasses).to.eq(entity('chr-classes'));
  });
  it('exposes ChrRaces entity', function() {
    return expect(DBC.ChrRaces).to.eq(entity('chr-races'));
  });
  it('exposes CreatureDisplayInfo entity', function() {
    return expect(DBC.CreatureDisplayInfo).to.eq(entity('creature-display-info'));
  });
  it('exposes CreatureModelData entity', function() {
    return expect(DBC.CreatureModelData).to.eq(entity('creature-model-data'));
  });
  it('exposes Faction entity', function() {
    return expect(DBC.Faction).to.eq(entity('faction'));
  });
  return it('exposes Map entity', function() {
    return expect(DBC.Map).to.eq(entity('map'));
  });
});