QUnit.test( "hello test", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});

QUnit.test("cheerFor(name)", function(assert){
  expectedCheer = "Give me a... A!\nGive me a... L!";
  assert.equal(cheerFor("AL"), expectedCheer);
});
