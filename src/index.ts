import assert from './assert';

export interface IGetURLParams {
  operation: string;
  asset?: boolean;
  width?: number;
  height?: number;
  options?: string; // example: 'sharpen:3'
  source?: string;
}

export class ImageBoss {
  public static source: string;

  /**
   * Converts your image path to an url that uses Imageboss' services
   * @param imagePath
   * @param params
   * @example
   * const url = ImageBoss.getURL(
      '/test.img',
      { operation: 'cdn', options: 'sharpen:4' },
    );
   */
  static getURL(imagePath:string, params: IGetURLParams): string {
    if (!params.operation) {
      throw new Error('please set an operation to perform');
    }

    const source = params.source || ImageBoss.source;
    // get a clean url
    let url: string = `https://img.imageboss.me/${source}/${params.operation}`;
    const shouldHaveFilters: boolean = params.operation !== 'cdn';

    // Process the operation
    if (params.operation.startsWith('cover')) {
      assert(params.width && params.height, 'cover operation requires width and height');
      url = `${url}/${params.width}x${params.height}`;
    } else if (params.operation === 'width') {
      assert(params.width, 'width operation requires the width as a parameter');
      url = `${url}/${params.width}`;
    } else if (params.operation === 'height') {
      assert(params.height, 'height operation requires the height as a parameter');
      url = `${url}/${params.height}`;
    }

    // Add filters
    if (shouldHaveFilters && params.options) {
      url = `${url}/${params.options}`;
    }

    return `${url}${imagePath}`;
  }

}
