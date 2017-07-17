const expect =require('expect');

var {generateMessage}=require('./message');

describe('generateMessage',()=>{
  it('should generate correct message',()=>{
    var from='Atik';
    var text ='this is a message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from,text});
  });
});