import assert from './assert';

export interface IGetURLParams {
  operation: 'cover'|'width'|'height'|'cdn';
  asset?: boolean;
  width?: number;
  height?: number;
  grayscale?: boolean;
  blur?: number;
  sharpen?: number;
  trim?: number;
  linear?: string;
}

export class ImageBoss {
  public static assetHost: string;

  /**
   * Converts your original url to an url that uses Imageboss' services
   * @param originalURL
   * @param params 
   */
  static getURL(originalURL:string, params: IGetURLParams): string {
    if (!params.operation) {
      throw new Error('please set an operation to perform');
    }

    // get a clean url
    let url: string = `https://img.imageboss.me/${params.operation}`;
    const shouldHaveFilters: boolean = params.operation !== 'cdn';

    // Process the operation
    if (params.operation === 'cover') {
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
    if (shouldHaveFilters) {
      if (params.grayscale) {
        url = `${url}/grayscale:${params.grayscale}`;
      } else if (params.blur) {
        url = `${url}/blur:${params.blur}`;
      } else if (params.sharpen) {
        url = `${url}/sharpen:${params.sharpen}`;
      } else if (params.trim) {
        url = `${url}/trim:${params.trim}`;
      }
    }

    return `${url}/${params.asset ? ImageBoss.assetHost + '/' : ''}${originalURL}`;
  }

}
