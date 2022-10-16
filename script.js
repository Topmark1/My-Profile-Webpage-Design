
image = document.querySelector('#dang')
image.style.cssText = 'position:absolute;margin:-10px 20px'
let pinkText = document.querySelector('#pink')
let span = document.querySelector('span')

let head = ['Programmer','Developer','Graphic Designer','Content Creator','Printer']
img = ['leaf.png','book.png','fire.png','book.png','laptop.png']
ju = -1
function baseChangee(){
ju++
image.src = img[ju]
pinkText.innerHTML = head[ju]
if(ju == 4){clearInterval(okayyy)}
}
let okayyy= setInterval(baseChangee,4000)

function forevv(){j = -1
function baseChangee(){
j++
image.src = img[j]
pinkText.innerHTML = head[j]
if(j == 4){clearInterval(okayyy)}
}
let okayyy= setInterval(baseChangee,4000)
}
setInterval(forevv,23000)

let base =['HTML','CSS','COREL DRAW','ADOBE','PHOTOSHOP','JAVASCRIPT','REACT','GIT']
let baseColor = ['rgb(25,150,49)','rgb(150,30,49)','rgb(200,1,49)','rgb(25,0,209)','rgb(25,0,55)','rgb(0,255,0)','rgb(255,10,49)','rgb(160,100,49)']
i = -1
function baseChange(){i++
span.innerHTML = base[i]
span.style.color = baseColor[i]
if(i == 7){clearInterval(okayy)}
return span}
let okayy= setInterval(baseChange,4000)

function forev(){i = -1
function baseChange(){i++
span.innerHTML = base[i]
span.style.color = baseColor[i]

/*s = -0.1
function Opa(){s= s+ 0.1
span.style.opacity = s
if(s == 0.9){clearInterval(okayy)}}
setInterval(Opa,400) // research more and learn*/

if(i == 7){clearInterval(okayy)}
return span}
let okayy= setInterval(baseChange,4000)
}
setInterval(forev,36000)