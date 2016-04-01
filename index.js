require('./lib/VRMLLoader');

if (typeof AFRAME === 'undefined') {
  throw 'Component attempted to register before AFRAME was available.';
}

AFRAME.registerComponent('vrml', {
  schema: {type: 'src'},

  init: function () {
    var el = this.el;
    var loader = new THREE.VRMLLoader();
    loader.load(this.data, function onLoad (object) {
      el.setObject3D('vrml', object);
    });
  },
});
