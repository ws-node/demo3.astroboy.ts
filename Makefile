update:
	yarn add demo2.astroboy.ts@latest

dev:
	./node_modules/.bin/atc router
	./node_modules/.bin/atc dev

build:
	./node_modules/.bin/atc router -A
	rm -rf dist
	tsc --project tsconfig.json
	cp -R config dist/
	cp -R app/views dist/app/

start-dist:
	cd dist && ast dev