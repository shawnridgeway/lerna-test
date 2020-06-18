.PHONY: sync build-packages

sync: build-packages
	lerna bootstrap

build-packages:
	lerna run --scope packages/* build
