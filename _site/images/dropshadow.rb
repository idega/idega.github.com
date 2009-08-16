#!/usr/bin/ruby

Dir['*.png'].each { |f|
	if(f.index("-drop.png").nil?)
	#system "convert #{f} -fill none -draw \"matte 0,0 reset\" -tile #{f} -draw \"roundRectangle -1,-1 5,5 30,30\" \\( +clone -background black -shadow 80x5+10+10 \\) +swap -background none -layers merge +repage #{f[0..-5]}-drop.png"
	system "convert #{f} \\( +clone -background black -shadow 60x5+10+10 \\) +swap -background none -layers merge +repage #{f[0..-5]}-drop.png"
	end
}
