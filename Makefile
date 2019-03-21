update:
	yarn add demo2.astroboy.ts@latest

dev:
	npx atc config --force
	npx atc router
	npx atc dev

build:
	npx atc config --force
	npx atc router -A
	rm -rf dist
	tsc --project tsconfig.json
	cp -R config dist/
	cp -R app/views dist/app/

start-dist:
	cd dist && ast dev