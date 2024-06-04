# Developing a Ruby application with a team of 6 people

## Linting

If the development language is Ruby, the recommended linter for Ruby-  and Ruby on Rails code on multiple websites is RuboCop. The RuboCop linter enforces the Ruby community's style guide and helps maintain consistent formatting.

The key features include:
* Detecting code "smells" and style violations
* The linter provides customizable configuration options
* Seamless integration with Rails projects

For security purposes, there is Brakeman, which is a dedicated security scanner for Ruby on Rails projects. It analyzes the codebase for potential security vulnerabilities.

## Configuring CI in Ruby

There are numerous options of configuring CI in ruby. There's Ruby.CI, which they claim to be 30 to 400 % faster than other CI tools. It can also sync with GitHub and run tests. Another CI tool for Ruby is Buddy. With Buddy you can test your Ruby app, compile your assets, deploy your application to a server and more.

## self-hosted or a cloud-based environment

There are benefits and drawbacks to both having a self-hosted and cloud-based environment. With self-hosted environment, you have full control of the infrastructure, configuration and security. Especially if the app that is being developed handles information that is very sensitive, it might be safer to use an self-hosted environment. But of course, the security is as strong as the expertise of the team.

On the other hand on a cloud-based environment there is easy scalability and accessibility. For a team of 6 people, a cloud solution might be a better option for easier access. You might have to opt-in for a more secure subscription if you want your data to be safe. Also, Ruby is not a native language for most cloud platforms, according to some websites, which means that you may need to use additional tools or frameworks to deploy and run your code. But that's where the CI tools come in, because you can automate deployement and updates.