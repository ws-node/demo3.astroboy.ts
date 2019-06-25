dev:
	npx exoskeleton config --force
	npx exoskeleton router
	npx exoskeleton dev

build:
	npx exoskeleton config --force
	npx exoskeleton router -A
	rm -rf dist
	tsc --project tsconfig.json
	cp -R config dist/
	cp -R app/views dist/app/

start-dist:
	cd dist && ast dev