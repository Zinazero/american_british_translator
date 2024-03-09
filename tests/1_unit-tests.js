const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

const translator = new Translator();

suite('Unit Tests', () => {
  suite('American to British', () => {
    test('Mangoes are my favorite fruit.', (done) => {
      let inputString = 'Mangoes are my favorite fruit.';
      let translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('I ate yogurt for breakfast.', (done) => {
      let inputString = 'I ate yogurt for breakfast.';
      let translation = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('We had a party at my friend\'s condo.', (done) => {
      let inputString = 'We had a party at my friend\'s condo.';
      let translation = 'We had a party at my friend\'s <span class="highlight">flat</span>.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('Can you toss this in the trashcan for me?', (done) => {
      let inputString = 'Can you toss this in the trashcan for me?';
      let translation = 'Can you toss this in the <span class="highlight">bin</span> for me?';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('The parking lot was full.', (done) => {
      let inputString = 'The parking lot was full.';
      let translation = 'The <span class="highlight">car park</span> was full.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('Like a high tech Rube Goldberg machine.', (done) => {
      let inputString = 'Like a high tech Rube Goldberg machine.';
      let translation = 'Like a high tech <span class="highlight">Heath Robinson device</span>.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('To play hooky means to skip class or work.', (done) => {
      let inputString = 'To play hooky means to skip class or work.';
      let translation = 'To <span class="highlight">bunk off</span> means to skip class or work.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('No Mr. Bond, I expect you to die.', (done) => {
      let inputString = 'No Mr. Bond, I expect you to die.';
      let translation = 'No <span class="highlight">Mr</span> Bond, I expect you to die.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('Dr. Grosh will see you now.', (done) => {
      let inputString = 'Dr. Grosh will see you now.';
      let translation = '<span class="highlight">Dr</span> Grosh will see you now.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('Lunch is at 12:15 today.', (done) => {
      let inputString = 'Lunch is at 12:15 today.';
      let translation = 'Lunch is at <span class="highlight">12.15</span> today.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });    
  });
  suite('British to American', (done) => {
    test('We watched the footie match for a while.', (done) => {
      let inputString = 'We watched the footie match for a while.';
      let translation = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('Paracetamol takes up to an hour to work.', (done) => {
      let inputString = 'Paracetamol takes up to an hour to work.';
      let translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('First, caramelise the onions.', (done) => {
      let inputString = 'First, caramelise the onions.';
      let translation = 'First, <span class="highlight">caramelize</span> the onions.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('I spent the bank holiday at the funfair.', (done) => {
      let inputString = 'I spent the bank holiday at the funfair.';
      let translation = 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('I had a bicky then went to the chippy.', (done) => {
      let inputString = 'I had a bicky then went to the chippy.';
      let translation = 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('I\'ve just got bits and bobs in my bum bag.', (done) => {
      let inputString = 'I\'ve just got bits and bobs in my bum bag.';
      let translation = 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('The car boot sale at Boxted Airfield was called off.', (done) => {
      let inputString = 'The car boot sale at Boxted Airfield was called off.';
      let translation = 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('Have you met Mrs Kalyani?', (done) => {
      let inputString = 'Have you met Mrs Kalyani?';
      let translation = 'Have you met <span class="highlight">Mrs.</span> Kalyani?';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('Prof Joyner of King\'s College, London.', (done) => {
      let inputString = 'Prof Joyner of King\'s College, London.';
      let translation = '<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('Tea time is usually around 4 or 4.30.', (done) => {
      let inputString = 'Tea time is usually around 4 or 4.30.';
      let translation = 'Tea time is usually around 4 or <span class="highlight">4:30</span>.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });  
  });
  suite('Highlighting Tests', (done) => {
    test('Mangoes are my favorite fruit.', (done) => {
      let inputString = 'Mangoes are my favorite fruit.';
      let translation = 'Mangoes are my <span class="highlight">favourite</span> fruit.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('I ate yogurt for breakfast.', (done) => {
      let inputString = 'I ate yogurt for breakfast.';
      let translation = 'I ate <span class="highlight">yoghurt</span> for breakfast.';
      assert.equal(translator.americanToBritish(inputString), translation);
      done();
    });
    test('We watched the footie match for a while.', (done) => {
      let inputString = 'We watched the footie match for a while.';
      let translation = 'We watched the <span class="highlight">soccer</span> match for a while.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
    test('Paracetamol takes up to an hour to work.', (done) => {
      let inputString = 'Paracetamol takes up to an hour to work.';
      let translation = '<span class="highlight">Tylenol</span> takes up to an hour to work.';
      assert.equal(translator.britishToAmerican(inputString), translation);
      done();
    });
  });
});
