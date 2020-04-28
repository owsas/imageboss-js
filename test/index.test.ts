import { ImageBoss } from '../src';

describe('#getURL', () => {
  ImageBoss.source = 'myimages';

  test('should throw an error if operation is not defined', () => {
    expect(() => {
      (<any>ImageBoss).getURL('/test.img', {});
    }).toThrowError('please set an operation to perform');
  });

  describe('cover operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        '/test.img',
        { operation: 'cover', width: 300, height: 200 },
      );

      expect(url).toEqual('https://img.imageboss.me/myimages/cover/300x200/test.img');
    });
  });

  describe('width operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        '/test.img',
        { operation: 'width', width: 300 },
      );

      expect(url).toEqual('https://img.imageboss.me/myimages/width/300/test.img');
    });
  });

  describe('height operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        '/test.img',
        { operation: 'height', height: 500 },
      );

      expect(url).toEqual('https://img.imageboss.me/myimages/height/500/test.img');
    });
  });

  describe('cdn operation', () => {
    test('should return the expected url', () => {
      const url = ImageBoss.getURL(
        '/test.img',
        { operation: 'cdn' },
      );

      expect(url).toEqual('https://img.imageboss.me/myimages/cdn/test.img');
    });
  });

  describe('#options', () => {
    test('should apply the options correctly', () => {
      const url = ImageBoss.getURL(
        '/test.img',
        { operation: 'width', width: 400, options: 'blur:2' },
      );

      expect(url).toEqual('https://img.imageboss.me/myimages/width/400/blur:2/test.img');
    });
  });
});
