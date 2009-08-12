#!/usr/bin/ruby
Dir['*.png'].each { |f| system "convert #{f} -resize 220 #{f[0..-5]}-sm.png" }
