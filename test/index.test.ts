import { ImageBoss } from '../src';

describe('#getURL', () => {
  test('should throw an error if operation is not defined', () => {
    expect(() => {
      (<any>ImageBoss).getURL('https://example.com/test.img', {});
    }).toThrowError('please set an operation to perform');
  });

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
        { operation: 'height', height: 500 },
      );
      
      expect(url).toEqual('https://img.imageboss.me/height/500/https://example.com/test.img');
    });
  });

  describe('cdn operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        'https://example.com/test.img', 
        { operation: 'cdn' },
      );
      
      expect(url).toEqual('https://img.imageboss.me/cdn/https://example.com/test.img');
    });
  });

  describe('#options', () => {
    test('should apply the options correctly', () => {
      const url = ImageBoss.getURL(
        'https://example.com/test.img', 
        { operation: 'width', width: 400, options: 'blur:2' },
      );
      
      expect(url).toEqual('https://img.imageboss.me/width/400/blur:2/https://example.com/test.img');
    });
  });

  describe('working with asset host', () => {
    test('should return the expected url for a globally configured asset host',() => {
      ImageBoss.assetHost = 'https://files.com';
      
      const url = ImageBoss.getURL(
        '/test.img', 
        { operation: 'width', width: 400, options: 'blur:2', asset: true },
      );
      
      expect(url).toEqual('https://img.imageboss.me/width/400/blur:2/https://files.com/test.img');
    });

    test('should return the expected url using an assetHost as a parameter',() => {
      ImageBoss.assetHost = 'https://files.com';
      
      const url = ImageBoss.getURL(
        '/test.img', 
        { 
          operation: 'width', 
          width: 400, 
          options: 'blur:2', 
          asset: true,
          assetHost: 'https://files2.com',
        },
      );
      
      expect(url).toEqual('https://img.imageboss.me/width/400/blur:2/https://files2.com/test.img');
    });
  });
});
