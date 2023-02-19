const inputbtn=document.getElementById('input_btn')
const inputtext=document.getElementById('input_el')
const dltallbtn=document.getElementById("dlt_btn")
let showarrayel=document.getElementById("show_array")
let myleads=[]


const ledsfromstorage=JSON.parse( localStorage.getItem("mylead"))

if(ledsfromstorage){
	myleads=ledsfromstorage
	render(myleads)
}


inputbtn.addEventListener("click",function(){
	myleads.push(inputtext.value)
	inputtext.value=""
	localStorage.setItem("mylead",JSON.stringify(myleads))
	render(myleads)
	
})

dltallbtn.addEventListener("dblclick",function(){
	showarrayel.innerText="";
	localStorage.clear()
	myleads=[]
})


function render(leads) {
	let listitem=""
	for(let i=0;i<leads.length;i++){
		listitem+="<li><a href='#'>"+leads[i]+"</a></li>";
}
	showarrayel.innerHTML=listitem
}


let tabsbtn=document.getElementById('save_tab')
tabsbtn.addEventListener("click",function() {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	myleads.push(tabs[0].url)
	localStorage.setItem("mylead",JSON.stringify(myleads))
	render(myleads)
  })
})
