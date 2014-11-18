BIN := node_modules/.bin
REPORTER ?= spec

test: node_modules
	@$(BIN)/mocha \
	  --reporter $(REPORTER)

node_modules: package.json
	@npm install

clean:
	rm -rf test/fixtures/*/{components,*.css}

.PHONY: test