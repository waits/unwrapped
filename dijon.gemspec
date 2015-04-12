$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "dijon/rails/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "dijon"
  s.version     = Dijon::Rails::VERSION
  s.authors     = ["Dylan Waits"]
  s.email       = ["dylan@waits.io"]
  s.homepage    = "https://github.com/waits/dijon"
  s.summary     = "Simple performance-focused Javascript DOM extensions and utilities."
  s.description = "Simple performance-focused Javascript DOM extensions and utilities. For those times when jQuery is too much."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "LICENSE", "Rakefile", "README.md", "vendor/assets/javascripts/*"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2"
  s.required_ruby_version = '~> 2.2'
end
