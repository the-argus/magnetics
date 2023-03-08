{
  description = "A reproducible development environment for IGME235...";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-22.05";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    supportedSystems = [
      "x86_64-linux"
      "aarch64-linux"
    ];
    genSystems = nixpkgs.lib.genAttrs supportedSystems;
    pkgs = genSystems (system: import nixpkgs {inherit system;});
    myNodePackages = genSystems (system: pkgs.${system}.callPackage ./nix/nodePackages {});
  in {
    devShell = genSystems (system:
      pkgs.${system}.mkShell {
        packages =
          (with pkgs.${system}; [
            nodejs
            nodePackages.npm
          ])
          ++ (with pkgs.${system}.nodePackages; [
            live-server
          ])
          ++ (with myNodePackages.${system}; [
            pixijs
          ]);

        shellHook = ''
          echo "Make sure pixijs is installed here by running \"nix build -o node_packages\""
        '';
      });
    packages = genSystems (system: let
      inherit (pkgs.${system}) stdenv;
    in {
      default = stdenv.mkDerivation {
        name = "mkNodeModules";
        src = myNodePackages.${system}.pixijs;
        dontBuild = true;
        installPhase = ''
          mkdir -p $out
          for file in $src/lib/node_modules/pixi.js/node_modules/*; do
            ln -sf $file $out/$(basename $file)
          done
        '';
      };
    });
  };
}
