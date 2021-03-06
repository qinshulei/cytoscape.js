var Suite = require('./suite');

var a, b;

var suite = new Suite('eles.same()', {
  setup: function( cytoscape ){
    var cy = cytoscape({ elements: require('./graphs/gal') });

    a = cy.nodes();
    b = cy.nodes();

    return cy;
  }
});

suite
  .add( function( cy ) {
    a.same(b);
  })
;

module.exports = suite;
