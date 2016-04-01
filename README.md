## aframe-vrml-component

An VRML component for [A-Frame](https://aframe.io).

### Property

| Description                                                          |
| --------                                                             |
| Either `url(path-to-world.wrl)` or a selector to an `<a-asset-item>` |

### Usage

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/0.2.0/aframe.min.js"></script>
  <script src="https://rawgit.com/ngokevin/aframe-vrml-component/dist/aframe-vrml-component.min.js"></script>
</head>

<body>
  <a-scene>
    <a-entity vrml="url(house.wrl)"></a-entity>
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-vrml-component
```

Then register and use.

```js
require('aframe');
require('aframe-vrml-component');
```
