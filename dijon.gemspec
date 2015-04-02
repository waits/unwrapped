$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "dijon/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "dijon"
  s.version     = Dijon::VERSION
  s.authors     = ["Dylan Waits"]
  s.email       = ["pianoman320@me.com"]
  s.homepage    = "TODO"
  s.summary     = "TODO: Summary of Dijon."
  s.description = "TODO: Description of Dijon."
  s.license     = "MIT"

  s.files = Dir["{app,config,db,lib}/**/*", "MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 4.2.1"

  s.add_development_dependency "sqlite3"
end
