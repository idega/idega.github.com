#!/usr/bin/ruby
Dir['*.png'].each { |f| 
	if(f.index("-sm.png").nil?)
		system "convert #{f} -resize 220 #{f[0..-5]}-sm.png" 
	end
}
