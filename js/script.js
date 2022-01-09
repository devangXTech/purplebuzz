const filterButton = document.querySelectorAll('.search-btn');
const imgBox = document.querySelectorAll('.img-box');
const imgShowedContainer = document.querySelector('.feature .img-showed-container');
const closeBtn = document.querySelector('.feature .img-showed-container span');
const imgShow = document.querySelectorAll('.feature .img-show'); 
const miniImg = document.querySelectorAll('.blog .box-container .box img');
const blogBigImg = document.querySelector('.blog .big-img');

filterButton.forEach(btn =>{
	btn.addEventListener('click',()=>{
		const activeClass = document.querySelector('.search-btn-container .active');
		activeClass.classList.remove('active');
		btn.classList.add('active');

		const dataValue = btn.getAttribute('data-target');

		imgBox.forEach(img =>{
			if(img.classList.contains(dataValue) || dataValue == 'all'){
				img.parentElement.style.display = "block";
				img.style.animation = "popUp .5s linear";
			}else{
				img.parentElement.style.display = "none";
			};
		});
	});
});

miniImg.forEach(imgBtn =>{
	imgBtn.addEventListener('click',()=>{
		blogBigImg.src = imgBtn.src;
	});
});
imgShow.forEach(img=>{
	img.addEventListener('click',()=>{
		imgShowedContainer.style.display = "block";
		document.querySelector('.feature .img-showed-container img').src = img.src;
	});
});
closeBtn.addEventListener('click',()=>{
	imgShowedContainer.style.display = "none";
});
