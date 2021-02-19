window.onload=function(){
const book= document.querySelector('.book');
// const icon= document.querySelector('.icon');
 
book.addEventListener('click',()=>{
	book.toggleAttribute("value","Bookmarked");
	book.classlist.toggle('active');
	icon.classlist.toggle('active');
})
}