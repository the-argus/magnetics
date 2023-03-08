# This file has been generated by node2nix 1.11.1. Do not edit!
{
  nodeEnv,
  fetchurl,
  fetchgit,
  nix-gitignore,
  stdenv,
  lib,
  globalBuildInputs ? [],
}: let
  sources = {
    "@pixi/accessibility-6.5.8" = {
      name = "_at_pixi_slash_accessibility";
      packageName = "@pixi/accessibility";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/accessibility/-/accessibility-6.5.8.tgz";
        sha512 = "3q1YaZeZKOoblgbxTQg2L0RAp9jtNtGcl/7kce+XelqxwIMS3p8411nwo90YO53XCqc/eQW2SoZ+hSXqcL0qOw==";
      };
    };
    "@pixi/app-6.5.8" = {
      name = "_at_pixi_slash_app";
      packageName = "@pixi/app";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/app/-/app-6.5.8.tgz";
        sha512 = "pDPkamtYDaPhscNxack+bHNqazCwrqw6cAotKyoz1mvLXeGhxqTntOcfgGLZR2fNbnY8EBmdduLvH7n2jI/LTg==";
      };
    };
    "@pixi/compressed-textures-6.5.8" = {
      name = "_at_pixi_slash_compressed-textures";
      packageName = "@pixi/compressed-textures";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/compressed-textures/-/compressed-textures-6.5.8.tgz";
        sha512 = "nW74kcvdEoe4a2U7Ekx4egqdH1tYKC2kCOZxKWYcUARqz26tS0ddwSRyIs05In6EChmXHXGy/MtShdueMH38TA==";
      };
    };
    "@pixi/constants-6.5.8" = {
      name = "_at_pixi_slash_constants";
      packageName = "@pixi/constants";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/constants/-/constants-6.5.8.tgz";
        sha512 = "yYRCebBPqajm1kn5f8QQTTvl7oDRDk1nppfO+JpqbrFXg0W7oqIMurec3KeG9RdZW5foOiXDoz1Gw+VtolYIEw==";
      };
    };
    "@pixi/core-6.5.8" = {
      name = "_at_pixi_slash_core";
      packageName = "@pixi/core";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/core/-/core-6.5.8.tgz";
        sha512 = "Gconik7/PpFPMpCpOddXVIPx5C2StWKw7lQ4YX19yQ+cRRmecCea2cV0xTBtpEjjx0ilX7nBfIEuZ4zIlMmlbA==";
      };
    };
    "@pixi/display-6.5.8" = {
      name = "_at_pixi_slash_display";
      packageName = "@pixi/display";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/display/-/display-6.5.8.tgz";
        sha512 = "2K8YOG8s0iF8x/k2Q0RTFmoMJ9biI6PXEh76nH3EqUFdpyrIIgrG5aOMnCkVDvOxlgVRrKG8Q3JBHlSievTmuw==";
      };
    };
    "@pixi/extensions-6.5.8" = {
      name = "_at_pixi_slash_extensions";
      packageName = "@pixi/extensions";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/extensions/-/extensions-6.5.8.tgz";
        sha512 = "6vEV801Vn/EkU/qjFiZ76OZWPq5KsBR2r+P5gfKv4YLnaDc3A+0IpUOJ7sLBAJqmr0iw68g6xV6MnuqVjNGjFg==";
      };
    };
    "@pixi/extract-6.5.8" = {
      name = "_at_pixi_slash_extract";
      packageName = "@pixi/extract";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/extract/-/extract-6.5.8.tgz";
        sha512 = "qbuuD/iBA4J+TCBgrbMe8oDUFbCriyy9LTKEtQp+pghKD5MEMvJ3nO6Osumxqiqta2kYU6WldFLTldKyHEiQ7Q==";
      };
    };
    "@pixi/filter-alpha-6.5.8" = {
      name = "_at_pixi_slash_filter-alpha";
      packageName = "@pixi/filter-alpha";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-alpha/-/filter-alpha-6.5.8.tgz";
        sha512 = "W4IkFTLTP84H+DS9XIdBGunAEpaXLrasDc4CQBeyp4c4hBlGlzriUZp30vkmqm7GPmFhzPe7aiJtNYgUpxKQBQ==";
      };
    };
    "@pixi/filter-blur-6.5.8" = {
      name = "_at_pixi_slash_filter-blur";
      packageName = "@pixi/filter-blur";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-blur/-/filter-blur-6.5.8.tgz";
        sha512 = "1UOfVthFBnavzTBkR6R+1tWhOOymtWvcpuJILhxf3mryLj9eqYbQubAG0gV8Da6Ibsgk+v73ORnOJyWR3POFvw==";
      };
    };
    "@pixi/filter-color-matrix-6.5.8" = {
      name = "_at_pixi_slash_filter-color-matrix";
      packageName = "@pixi/filter-color-matrix";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-color-matrix/-/filter-color-matrix-6.5.8.tgz";
        sha512 = "iix+a/KEi6HAwZwkUH3nkIzyLu0ln3HBuHEFLUUhug7xrQgQgGrTQZ32iWlfpJD/BZuKphIGfzlxMFfvyQmkVw==";
      };
    };
    "@pixi/filter-displacement-6.5.8" = {
      name = "_at_pixi_slash_filter-displacement";
      packageName = "@pixi/filter-displacement";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-displacement/-/filter-displacement-6.5.8.tgz";
        sha512 = "qLRka5cQbeH6667A+ViYoemsXGGe2tOBt92vM91+slMt9OBGtR0ymlpGU7VxBggWUlu5PE10zYed/xw78uSpig==";
      };
    };
    "@pixi/filter-fxaa-6.5.8" = {
      name = "_at_pixi_slash_filter-fxaa";
      packageName = "@pixi/filter-fxaa";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-fxaa/-/filter-fxaa-6.5.8.tgz";
        sha512 = "TxsBH2z2RMj0mqr13VPi18/EJ/Kn38J2u65HonJmhbvTaoK9HWMExTvl38Xjg0k7TlepwhoayxMhQ1uCw9xudQ==";
      };
    };
    "@pixi/filter-noise-6.5.8" = {
      name = "_at_pixi_slash_filter-noise";
      packageName = "@pixi/filter-noise";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/filter-noise/-/filter-noise-6.5.8.tgz";
        sha512 = "BZHKuzV5Mdn+EpC52lFYpd6jUcrL+YQHdq0v0yJfVtpW2ripseQxMGxxXr6Yxp2P4F3g2aY2JrfX2VztosmGLA==";
      };
    };
    "@pixi/graphics-6.5.8" = {
      name = "_at_pixi_slash_graphics";
      packageName = "@pixi/graphics";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/graphics/-/graphics-6.5.8.tgz";
        sha512 = "DUuUXHO4t5fg+n+srMkHX38QEH3WtS1IMXtovBGFJkkopG0Z0xjxSp5XvsPPw1J//4fzkHZI5OBrlN613p9+sg==";
      };
    };
    "@pixi/interaction-6.5.8" = {
      name = "_at_pixi_slash_interaction";
      packageName = "@pixi/interaction";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/interaction/-/interaction-6.5.8.tgz";
        sha512 = "uP247r0f47vo9WSpEnsUfeD1izxVGpjtg4iAyGT/02ezWse2vD1aEL8AbxFa65TL0IXOKsHEQudCVL+wjnbSKQ==";
      };
    };
    "@pixi/loaders-6.5.8" = {
      name = "_at_pixi_slash_loaders";
      packageName = "@pixi/loaders";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/loaders/-/loaders-6.5.8.tgz";
        sha512 = "mj11UPKsqWaTEPMpCnFugr6heKkQeNFuVSddSwE8crg19l46zcMhk3ucpQX15RDpAdDJjtl3OraevQCHHbNENw==";
      };
    };
    "@pixi/math-6.5.8" = {
      name = "_at_pixi_slash_math";
      packageName = "@pixi/math";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/math/-/math-6.5.8.tgz";
        sha512 = "9493KEH5ITnjOZvQZbaU22lD0kcg/XhNh+309KYfwFX787zA1BN/7is06oHEgHBDb2NemqioYi6sw1WnECgQig==";
      };
    };
    "@pixi/mesh-6.5.8" = {
      name = "_at_pixi_slash_mesh";
      packageName = "@pixi/mesh";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/mesh/-/mesh-6.5.8.tgz";
        sha512 = "iZZGkh8QBhnfMEgpJsuwemFZZVatodckCgj7N8t1hyHEf0aOWEA6wp5N0Osa3mhltokl7BGnZZLxaR8NtjaiEQ==";
      };
    };
    "@pixi/mesh-extras-6.5.8" = {
      name = "_at_pixi_slash_mesh-extras";
      packageName = "@pixi/mesh-extras";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/mesh-extras/-/mesh-extras-6.5.8.tgz";
        sha512 = "eU2I53yZUFxKbTYZvyRfUcdina3WOl87fyqYwAoaHosU9VgbFl16YADKTGV+NflNp6RCTwU/UIPZ1T19W/iysw==";
      };
    };
    "@pixi/mixin-cache-as-bitmap-6.5.8" = {
      name = "_at_pixi_slash_mixin-cache-as-bitmap";
      packageName = "@pixi/mixin-cache-as-bitmap";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/mixin-cache-as-bitmap/-/mixin-cache-as-bitmap-6.5.8.tgz";
        sha512 = "5TTv4w8v7guI6z3gKz5ppUCbNMRw+8RRNru/aq65qUl6kcUaJiYwQdBFJ/vJwpI9ePEScWrCuLVEc8QtX6xjNw==";
      };
    };
    "@pixi/mixin-get-child-by-name-6.5.8" = {
      name = "_at_pixi_slash_mixin-get-child-by-name";
      packageName = "@pixi/mixin-get-child-by-name";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/mixin-get-child-by-name/-/mixin-get-child-by-name-6.5.8.tgz";
        sha512 = "b15HTdHpW4ErDBpf7wm1vvWHrTv5kQzElXrwAPBCnLgvronfSL9mL7npOUkZOybUorCoEBq/7oNVjkimsQc5gw==";
      };
    };
    "@pixi/mixin-get-global-position-6.5.8" = {
      name = "_at_pixi_slash_mixin-get-global-position";
      packageName = "@pixi/mixin-get-global-position";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/mixin-get-global-position/-/mixin-get-global-position-6.5.8.tgz";
        sha512 = "Y5epEW5mRrgpDOHvfc92t0PaBgboBKXR4n/AzOOFt0h9GRNTmVKYBpUQPp/HO+r1Bxq+XbaGm1CyfkjUUxnORA==";
      };
    };
    "@pixi/particle-container-6.5.8" = {
      name = "_at_pixi_slash_particle-container";
      packageName = "@pixi/particle-container";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/particle-container/-/particle-container-6.5.8.tgz";
        sha512 = "wc4j84PssPWmZLpOJTLLC7MftCULzkQMAfVlwOERhNTZ+6E1LIKw91wDWZe9LQ/20iarzQwQXo0a4uNlJlhnVQ==";
      };
    };
    "@pixi/polyfill-6.5.8" = {
      name = "_at_pixi_slash_polyfill";
      packageName = "@pixi/polyfill";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/polyfill/-/polyfill-6.5.8.tgz";
        sha512 = "z2klHelxTZExMyO4oiLdxJMGzzXnToEIDn7Dwfy3FY+98LbxSa2dVFCgzDsYeiiS8fSMsni2Ru7aZT/DFsRDcA==";
      };
    };
    "@pixi/prepare-6.5.8" = {
      name = "_at_pixi_slash_prepare";
      packageName = "@pixi/prepare";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/prepare/-/prepare-6.5.8.tgz";
        sha512 = "anrAcjX3r9ZzK/L6Fw7GhE1pCkjhSfBsxUTlVhuRKJPFC+A3BNpZCwy3GzyvHP4ocl8wvUMzuz5BB5l0AoBCFw==";
      };
    };
    "@pixi/runner-6.5.8" = {
      name = "_at_pixi_slash_runner";
      packageName = "@pixi/runner";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/runner/-/runner-6.5.8.tgz";
        sha512 = "/9KVgQjTKiBa1qHdNmhP9I+AHgC/Eu9QiKcc+oakLCJtpYi79lx+nDFrpLUamIi2c7lP0hDWVe0XqlQeYmSwag==";
      };
    };
    "@pixi/settings-6.5.8" = {
      name = "_at_pixi_slash_settings";
      packageName = "@pixi/settings";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/settings/-/settings-6.5.8.tgz";
        sha512 = "gmnwHkg9+tlQRuFNOdimzl73Dup2fdEo/VYaF7spT+8womE4KWAvARCBMqY/10aAx1iYeYuo5av/RfqrePB5Hg==";
      };
    };
    "@pixi/sprite-6.5.8" = {
      name = "_at_pixi_slash_sprite";
      packageName = "@pixi/sprite";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/sprite/-/sprite-6.5.8.tgz";
        sha512 = "ywvbrNgjK+K93X9cvHtDCnsBtU7B9JD/3wg+1G6v1Ktrr2E1gwVIQK1NANBrjzt6cYGphz5EqGAW68d0rMBliw==";
      };
    };
    "@pixi/sprite-animated-6.5.8" = {
      name = "_at_pixi_slash_sprite-animated";
      packageName = "@pixi/sprite-animated";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/sprite-animated/-/sprite-animated-6.5.8.tgz";
        sha512 = "woPT2cF1BaC0PDWdDrqJ0+DYcyIeXzZLq6bVx2YYia3+jJao1Zjmz1ns5e7YMUTEG7DoVFfhO6CC81YimsMG5w==";
      };
    };
    "@pixi/sprite-tiling-6.5.8" = {
      name = "_at_pixi_slash_sprite-tiling";
      packageName = "@pixi/sprite-tiling";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/sprite-tiling/-/sprite-tiling-6.5.8.tgz";
        sha512 = "PG3tiWI6uUest/d7HAz4/3I8NjpYyeMUL2WDy86nMXCJ6bLdTs/s9Nq3DLckaUsyIMTGsVbj/BXjE8LP1WDTog==";
      };
    };
    "@pixi/spritesheet-6.5.8" = {
      name = "_at_pixi_slash_spritesheet";
      packageName = "@pixi/spritesheet";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/spritesheet/-/spritesheet-6.5.8.tgz";
        sha512 = "WiJd4fKpSitD3A+/u5q8IPoHXMFT8++bsluhuJvDwzo//s0PHb9qExlF2xos7zUmekmydEFMkDnrl4+lWn2cyg==";
      };
    };
    "@pixi/text-6.5.8" = {
      name = "_at_pixi_slash_text";
      packageName = "@pixi/text";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/text/-/text-6.5.8.tgz";
        sha512 = "7AZPj5+vWcUjK0QzQ3ehiEwEqywiWR8NhDmnnN5nRNHR9u5IOOnqCQtBTdDffYPN0uMgCi8MzUPwTJhGuyOeww==";
      };
    };
    "@pixi/text-bitmap-6.5.8" = {
      name = "_at_pixi_slash_text-bitmap";
      packageName = "@pixi/text-bitmap";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/text-bitmap/-/text-bitmap-6.5.8.tgz";
        sha512 = "6VxejDc0gOu5HFN06m6i94xBZHdZ728iao8q+hEOjavGR5i2Pv3xseuke1qY0iN4q6Z+wTkcmoK5BfEVi2ujdQ==";
      };
    };
    "@pixi/ticker-6.5.8" = {
      name = "_at_pixi_slash_ticker";
      packageName = "@pixi/ticker";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/ticker/-/ticker-6.5.8.tgz";
        sha512 = "7VKq5hfnRDSv6a16pATqZAmpQfEu4G171iUTloy3QZfbnPw0s3JervZSih1yJJD84GXEF4VzYB26pJ/x3arGjQ==";
      };
    };
    "@pixi/utils-6.5.8" = {
      name = "_at_pixi_slash_utils";
      packageName = "@pixi/utils";
      version = "6.5.8";
      src = fetchurl {
        url = "https://registry.npmjs.org/@pixi/utils/-/utils-6.5.8.tgz";
        sha512 = "zLnvmVQBWPDnwkfvrSpBBF2XpWSMt+kQAsX562eqjuME63ic9M6fK4u/IaA8csdlG2wtcjBvSYWrpWmPq0bWag==";
      };
    };
    "@types/earcut-2.1.1" = {
      name = "_at_types_slash_earcut";
      packageName = "@types/earcut";
      version = "2.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/@types/earcut/-/earcut-2.1.1.tgz";
        sha512 = "w8oigUCDjElRHRRrMvn/spybSMyX8MTkKA5Dv+tS1IE/TgmNZPqUYtvYBXGY8cieSE66gm+szeK+bnbxC2xHTQ==";
      };
    };
    "@types/offscreencanvas-2019.7.0" = {
      name = "_at_types_slash_offscreencanvas";
      packageName = "@types/offscreencanvas";
      version = "2019.7.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/@types/offscreencanvas/-/offscreencanvas-2019.7.0.tgz";
        sha512 = "PGcyveRIpL1XIqK8eBsmRBt76eFgtzuPiSTyKHZxnGemp2yzGzWpjYKAfK3wIMiU7eH+851yEpiuP8JZerTmWg==";
      };
    };
    "earcut-2.2.4" = {
      name = "earcut";
      packageName = "earcut";
      version = "2.2.4";
      src = fetchurl {
        url = "https://registry.npmjs.org/earcut/-/earcut-2.2.4.tgz";
        sha512 = "/pjZsA1b4RPHbeWZQn66SWS8nZZWLQQ23oE3Eam7aroEFGEvwKAsJfZ9ytiEMycfzXWpca4FA9QIOehf7PocBQ==";
      };
    };
    "eventemitter3-3.1.2" = {
      name = "eventemitter3";
      packageName = "eventemitter3";
      version = "3.1.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/eventemitter3/-/eventemitter3-3.1.2.tgz";
        sha512 = "tvtQIeLVHjDkJYnzf2dgVMxfuSGJeM/7UCG17TT4EumTfNtF+0nebF/4zWOIkCreAbtNqhGEboB6BWrwqNaw4Q==";
      };
    };
    "object-assign-4.1.1" = {
      name = "object-assign";
      packageName = "object-assign";
      version = "4.1.1";
      src = fetchurl {
        url = "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz";
        sha512 = "rJgTQnkUnH1sFw8yT6VSU3zD3sWmu6sZhIseY8VX+GRu3P6F7Fu+JNDoXfklElbLJSnc3FUQHVe4cU5hj+BcUg==";
      };
    };
    "promise-polyfill-8.2.3" = {
      name = "promise-polyfill";
      packageName = "promise-polyfill";
      version = "8.2.3";
      src = fetchurl {
        url = "https://registry.npmjs.org/promise-polyfill/-/promise-polyfill-8.2.3.tgz";
        sha512 = "Og0+jCRQetV84U8wVjMNccfGCnMQ9mGs9Hv78QFe+pSDD3gWTpz0y+1QCuxy5d/vBFuZ3iwP2eycAkvqIMPmWg==";
      };
    };
    "punycode-1.3.2" = {
      name = "punycode";
      packageName = "punycode";
      version = "1.3.2";
      src = fetchurl {
        url = "https://registry.npmjs.org/punycode/-/punycode-1.3.2.tgz";
        sha512 = "RofWgt/7fL5wP1Y7fxE7/EmTLzQVnB0ycyibJ0OOHIlJqTNzglYFxVwETOcIoJqJmpDXJ9xImDv+Fq34F/d4Dw==";
      };
    };
    "querystring-0.2.0" = {
      name = "querystring";
      packageName = "querystring";
      version = "0.2.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/querystring/-/querystring-0.2.0.tgz";
        sha512 = "X/xY82scca2tau62i9mDyU9K+I+djTMUsvwf7xnUX5GLvVzgJybOJf4Y6o9Zx3oJK/LSXg5tTZBjwzqVPaPO2g==";
      };
    };
    "url-0.11.0" = {
      name = "url";
      packageName = "url";
      version = "0.11.0";
      src = fetchurl {
        url = "https://registry.npmjs.org/url/-/url-0.11.0.tgz";
        sha512 = "kbailJa29QrtXnxgq+DdCEGlbTeYM2eJUxsz6vjZavrCYPMIFHMKQmSKYAIuUK2i7hgPm28a8piX5NTUtM/LKQ==";
      };
    };
  };
in {
  "pixi.js-6.5.8" = nodeEnv.buildNodePackage {
    name = "pixi.js";
    packageName = "pixi.js";
    version = "6.5.8";
    src = fetchurl {
      url = "https://registry.npmjs.org/pixi.js/-/pixi.js-6.5.8.tgz";
      sha512 = "TAovIMCvKiWlonyAEbStOSq2+GZliRgs+Pqlavffa/D0Rmvmb78bytWRxgonGx1qkg7G8W7eIbF55tFP4a5Krw==";
    };
    dependencies = [
      sources."@pixi/accessibility-6.5.8"
      sources."@pixi/app-6.5.8"
      sources."@pixi/compressed-textures-6.5.8"
      sources."@pixi/constants-6.5.8"
      sources."@pixi/core-6.5.8"
      sources."@pixi/display-6.5.8"
      sources."@pixi/extensions-6.5.8"
      sources."@pixi/extract-6.5.8"
      sources."@pixi/filter-alpha-6.5.8"
      sources."@pixi/filter-blur-6.5.8"
      sources."@pixi/filter-color-matrix-6.5.8"
      sources."@pixi/filter-displacement-6.5.8"
      sources."@pixi/filter-fxaa-6.5.8"
      sources."@pixi/filter-noise-6.5.8"
      sources."@pixi/graphics-6.5.8"
      sources."@pixi/interaction-6.5.8"
      sources."@pixi/loaders-6.5.8"
      sources."@pixi/math-6.5.8"
      sources."@pixi/mesh-6.5.8"
      sources."@pixi/mesh-extras-6.5.8"
      sources."@pixi/mixin-cache-as-bitmap-6.5.8"
      sources."@pixi/mixin-get-child-by-name-6.5.8"
      sources."@pixi/mixin-get-global-position-6.5.8"
      sources."@pixi/particle-container-6.5.8"
      sources."@pixi/polyfill-6.5.8"
      sources."@pixi/prepare-6.5.8"
      sources."@pixi/runner-6.5.8"
      sources."@pixi/settings-6.5.8"
      sources."@pixi/sprite-6.5.8"
      sources."@pixi/sprite-animated-6.5.8"
      sources."@pixi/sprite-tiling-6.5.8"
      sources."@pixi/spritesheet-6.5.8"
      sources."@pixi/text-6.5.8"
      sources."@pixi/text-bitmap-6.5.8"
      sources."@pixi/ticker-6.5.8"
      sources."@pixi/utils-6.5.8"
      sources."@types/earcut-2.1.1"
      sources."@types/offscreencanvas-2019.7.0"
      sources."earcut-2.2.4"
      sources."eventemitter3-3.1.2"
      sources."object-assign-4.1.1"
      sources."promise-polyfill-8.2.3"
      sources."punycode-1.3.2"
      sources."querystring-0.2.0"
      sources."url-0.11.0"
    ];
    buildInputs = globalBuildInputs;
    meta = {
      description = "PixiJS without the CanvasRenderer fallback, modern browsers only";
      homepage = "http://www.pixijs.com/";
      license = "MIT";
    };
    production = true;
    bypassCache = true;
    reconstructLock = true;
  };
}
