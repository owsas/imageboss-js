# ImageBoss Typescript/Javascript API

This is an unofficial API for interacting with [ImageBoss](https://imageboss.me/) image manipulation via Javascript.

## Installation

```
$> npm install --save imageboss-js
```

Or with Yarn:
```
$> yarn add imageboss-js
```

## Usage

```js
const { ImageBoss } = require('imageboss-js'); // es5 (node, webpack, browserify, rollup...)

import { ImageBoss } from 'imageboss-js'; // typescript or es6
```

After importing the library, you can start manipulating images using `getURL`. Let's check out an example:

```ts
const url = 'https://path-to-my-image/image.png';
const converted = ImageBoss.getURL(url, {
  operation: 'cover',
  width: 500,
  height: 300,
});
```

In this case, `converted` will get the value `"https://img.imageboss.me/cover/300x200/https://path-to-my-image/image.png"`

You can use all the operations supported by `ImageBoss`, like `cdn`, `width`, `height` or `cover`. All options like `format`, `gamma`, `trim` or `threshold` are also supported. Please check out the documentation of `ImageBoss` in order to learn more: https://imageboss.me/docs

### More examples
```ts
const url = 'https://path-to-my-image/image.png';

// get image url using cover + options
const converted = ImageBoss.getURL(url, {
  operation: 'cover:center',
  width: 500,
  height: 300,
});

// get image url with given width
const converted = ImageBoss.getURL(url, {
  operation: 'width',
  width: 300,
});

// get image url with given height
const converted = ImageBoss.getURL(url, {
  operation: 'height',
  height: 300,
});

// get image from a CDN, with compression, 
// orientation detection and progressive scans
const converted = ImageBoss.getURL(url, {
  operation: 'cdn',
});

// using any of ImageBoss' options
const converted = ImageBoss.getURL(url, {
  operation: 'width',
  width: 700,
  options: 'threshold:125'
});

// using multiple options
const converted = ImageBoss.getURL(url, {
  operation: 'width',
  width: 700,
  options: 'blur:2,grayscale:true'
});
```

If you have a place in which you save all the images of your project (say Amazon S3), you may configure an asset host. For example:

```ts
// set the asset host for your project
ImageBoss.assetHost = 'https://my-s3-bucket.s3.amazonaws.com';

// and then, call getURL with asset:true
const converted = ImageBoss.getURL('/my-file.png', {
  operation: 'width',
  width: 700,
  asset: true, // set asset to true
});
```

After setting the asset host and setting asset to true, you will receive the converted url as `"https://img.imageboss.me/width/700/https://my-s3-bucket.s3.amazonaws.com/my-file.png"`

You can override your default assetHost anytime, by calling `getURL` with the `assetHost` parameter. For example: 

```ts
// set the asset host for your project
ImageBoss.assetHost = 'https://my-s3-bucket.s3.amazonaws.com';

// and then, call getURL with asset:true
const converted = ImageBoss.getURL('/my-file.png', {
  operation: 'width',
  width: 700,
  asset: true, // set asset to true
  assetHost: 'http://my-other-host.com',
});
```
Then you would receive the string `"https://img.imageboss.me/width/700/http://my-other-host.com/my-file.png"`


## Dev mode

Clone this repo, and start adding your code in the `index.ts` file.  
When you are done, write the tests in the `index.test.ts` file. For testing, this repo works with [Jest](https://facebook.github.io/jest/).

## Dev Features
* Testing with Jest
* Linting with TSLint
* Works with Typescript
* Coverage, thanks to Jest
* Uses deterministic module resolving, with Yarn

## Credits

Developed by Juan Camilo Guarín Peñaranda,  
Otherwise SAS, Colombia  
2018

## License 

MIT.

## Support us on Patreon
[![patreon](./repo/patreon.png)](https://patreon.com/owsas)
