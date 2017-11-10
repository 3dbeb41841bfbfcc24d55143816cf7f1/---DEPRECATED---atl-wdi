namespace :start do
  desc "Use Foreman to start all development servers and proxies"
  task :dev do
    sh %{ foreman start -f Procfile.dev  }
  end
end
