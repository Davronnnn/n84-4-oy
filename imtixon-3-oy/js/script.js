// import class name
const allObjects = document.querySelector('.allObject');
const mainLists = document.querySelector('.main-lists');
const elForm = document.querySelector('#form');
const elSearch = document.querySelector('#searchName');
const elSelected = document.querySelector('#select');
const delBtn = document.querySelector('.btn');

// import all objects
function renderObjects(item) {
	mainLists.innerHTML = '';
	item.forEach((element) => {
		const newDiv = document.createElement('div');
		newDiv.classList.add('bg');
		newDiv.innerHTML = `
    <h3 class="number text-center">ID:${element.id}</h3>
    <h4 class="name text-center w-100 ">NAME:${element.name}</h4>
    <h6 class="email text-center">Email:${element.email}</h6>
    <p class="about w-50 text-center">ABOUT:${element.body}</p>
    <button type="button" data-id="${element.id}"class="btn btn-primary">
    Delete</button>`;
		mainLists.appendChild(newDiv);
	});
}

// search elements
elForm.addEventListener('input', (e) => {
	e.preventDefault();
	const elSearchValue = elSearch.value.trim();
	const elReg = new RegExp(elSearchValue, 'gi');
	const filterItem = data.filter(
		(elem) => elem.name.match(elReg) && elem.postId == elSelected.value
	);
	if (filterItem.length > 0) {
		renderObjects(filterItem);
	} else {
	}
});

// select elements
function optionSelect() {
	const arr = [];
	data.forEach((element) => {
		if (!arr.includes(element.postId)) {
			arr.push(element.postId);
		}
	});
	arr.forEach((element) => {
		const elOption = document.createElement('option');
		elOption.value = element;
		elOption.text = element;
		elSelected.appendChild(elOption);
	});
}

// call a function
optionSelect();
renderObjects(data);

// delete click elements
allObjects.addEventListener('click', function (e) {
	const targetT = e.target;
	if (targetT.matches('.btn')) {
		const id = e.target.dataset.id;
		const filteredItems = data.filter((item) => {
			if (item.id != id) {
				return item;
			} else {
				alert('Are you sure you want to delete this post?');
			}
		});
		data = filteredItems;
		renderObjects(data);
	}
});
