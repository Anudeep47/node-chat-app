const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'me';
    var text = 'message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'me';
    var latitude = 1;
    var longitude = 1;
    var url = `https://www.google.com/maps?q=${latitude},${longitude}`;
    var locationMessage = generateLocationMessage(from, latitude, longitude);
    expect(locationMessage.createdAt).toBeA('number');
    expect(locationMessage.url).toEqual(url);
    expect(locationMessage).toInclude({from, url});
  });
});
