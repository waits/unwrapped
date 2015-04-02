$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "dijon/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "dijon"
  s.version     = Dijon::VERSION
  s.authors     = ["Dylan Waits"]
  s.email       = ["dylan@waits.io"]
  s.homepage    = "https://github.com/waits/dijon"
  s.summary     = "Simple performance-focused Javascript DOM extensions and utilities."
  s.description = "For those times when jQuery is too much."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "LICENSE", "Rakefile", "README.md"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2"
end
