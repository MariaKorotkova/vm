install 200 0
install 201 1
install 202 1
install 203 1
input 100

compare 200 100
equals result

label condition
compare 100 202
equals result

add 201 202 202
mul 203 202 203

jump condition

label result
factorial output 203
exit