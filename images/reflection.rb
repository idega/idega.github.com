#!/usr/bin/ruby
Dir['*.png'].each { |f| 
	if(f.index("-reflect.png").nil?)
		system "convert #{f}  \\( #{f} -flip -blur 3x5 -crop 100%%x30%%+0+0 -negate -evaluate multiply 0.3 -negate  \\( -size 585x128 gradient: \\) +matte compose copy_opacity -composite \\) -append #{f[0..-5]}-reflect.png" 
	end
}
