import { ImageBoss } from '../src';

describe('#getURL', () => {
  describe('cover operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        'https://example.com/test.img', 
        { operation: 'cover', width: 300, height: 200 },
      );
      
      expect(url).toEqual('https://img.imageboss.me/cover/300x200/https://example.com/test.img');
    });
  });

  describe('width operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        'https://example.com/test.img', 
        { operation: 'width', width: 300 },
      );
      
      expect(url).toEqual('https://img.imageboss.me/width/300/https://example.com/test.img');
    });
  });

  describe('height operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        'https://example.com/test.img', 
        { operation: 'width', height: 500 },
      );
      
      expect(url).toEqual('https://img.imageboss.me/height/500/https://example.com/test.img');
    });
  });
});
