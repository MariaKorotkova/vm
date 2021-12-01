input 101
input 102

label condition
compare 101 102
equals result
less dif

sub 101 102 101
jump condition

label dif
sub 102 101 102
jump condition

label result
output 101
exit