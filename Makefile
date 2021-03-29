SHELL := bash# we want bash behaviour in all shell invocations

RED := $(shell tput setaf 1)
GREEN := $(shell tput setaf 2)
YELLOW := $(shell tput setaf 3)
BOLD := $(shell tput bold)
NORMAL := $(shell tput sgr0)

ifneq (4,$(firstword $(sort $(MAKE_VERSION) 4)))
  $(warning $(BOLD)$(RED)GNU Make v4 or newer is required$(NORMAL))
  $(info On macOS it can be installed with $(BOLD)brew install make$(NORMAL) and run as $(BOLD)gmake$(NORMAL))
  $(error Please run with GNU Make v4 or newer)
endif


### VARS ###

DOCKER_IMAGE := youllsoonknow:2021.03.29



### DEPS ###
#
DOCKER ?= /usr/local/bin/docker
$(DOCKER):
	@brew cask install docker

CADDY ?= /usr/local/bin/caddy
$(CADDY):
	@brew install caddy



### TARGETS ###
#
.DEFAULT_GOAL := help

SEPARATOR := --------------------------------------------------------------------
.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:+.*?## .*$$' $(MAKEFILE_LIST) | \
	awk 'BEGIN { FS = "[:#]" } ; { printf "$(SEPARATOR)\n\033[36m%-10s\033[0m %s\n", $$1, $$4 }' ; \
	echo $(SEPARATOR)

.PHONY: build
build: $(DOCKER) ## b  | Build Docker image
	@$(DOCKER) build \
	  --tag $(DOCKER_IMAGE) \
	  --tag ghcr.io/timparker/$(DOCKER_IMAGE) \
	  $(CURDIR)
.PHONY: b
b: build

.PHONY: clean
clean:
	@rm -fr $(CURDIR)/dist

.PHONY: dist
dist: clean build ## d  | Generate website
	@$(DOCKER) run \
	  --volume $(CURDIR)/dist:/app/dist \
	  --volume $(CURDIR)/app:/app/app \
	  --volume $(CURDIR)/config:/app/config \
	  --volume $(CURDIR)/public:/app/public \
	  --user root \
	  $(DOCKER_IMAGE) \
	  yarn run build
.PHONY: d
d: dist

.PHONY: preview
preview: $(CADDY) ## p  | Preview generated website - as it will appear live
	$(CADDY) file-server -root=dist
.PHONY: p
p: preview

.PHONY: run
run: ## r  | Run website locally
	@$(DOCKER) run \
	  --interactive --tty \
	  --publish 4200:4200 \
	  --volume $(CURDIR)/dist:/app/dist \
	  --volume $(CURDIR)/app:/app/app \
	  --volume $(CURDIR)/config:/app/config \
	  --volume $(CURDIR)/public:/app/public \
	  --user root \
	  $(DOCKER_IMAGE) \
	  yarn run start
.PHONY: r
r: run
