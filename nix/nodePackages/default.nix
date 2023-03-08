{callPackage, ...}: let
  nodePackages = callPackage ./generated {};
in {
  pixijs = nodePackages."pixi.js-6.5.8".override {
    dontNpmInstall = true;
  };
}
