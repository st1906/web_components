'use strict';

const index = require('./index-ffba803f.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["legal-banner_2.cjs",[[1,"legal-banner",{"bannerTitle":[1,"banner-title"],"text":[1],"type":[1],"dismissed":[32]}],[1,"toast-alert",{"alertTitle":[1,"alert-title"],"alertDescription":[1,"alert-description"],"isActive":[4,"is-active"]}]]],["legal-banner-test.cjs",[[1,"legal-banner-test"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["social-media-widget.cjs",[[1,"social-media-widget"]]]], options);
});
