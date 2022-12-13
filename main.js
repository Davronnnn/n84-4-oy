

const template = document.querySelector('#post-template');
const elPosts = document.querySelector('#posts');
const h1 = document.querySelector('h1');
const elPostSelect = document.querySelector('#post-id');


function renderSelectId() {
	const postIds = [];
	const selectFragment = document.createDocumentFragment();
	const option = document.createElement('option');
	option.textContent = 'all';
	option.value = 'all';

	selectFragment.appendChild(option);
	data.forEach((element) => {
		if (!postIds.includes(element.postId)) {
			postIds.push(element.postId);

			const option = document.createElement('option');
			option.textContent = element.postId;
			option.value = element.postId;
			selectFragment.appendChild(option);
		}
	});
	elPostSelect.appendChild(selectFragment);
}
renderSelectId();
function renderPost(array, parent = elPosts) {
	parent.textContent = '';

	const postFragment = document.createDocumentFragment();

	array.forEach((element) => {
		const postTemplate = template.content.cloneNode(true);
		const elementId = postTemplate.querySelector('.number');
		const elementName = postTemplate.querySelector('.name');
		const elementEmail = postTemplate.querySelector('.email');
		const elementBody = postTemplate.querySelector('.about');
		const elementButton = postTemplate.querySelector('button');
		const elementPostID = postTemplate.querySelector('.postId');

		elementId.textContent = element.id;
		elementName.textContent = element.name;
		elementEmail.textContent = element.email;
		elementBody.textContent = element.body;
		elementButton.dataset.id = element.id;
		elementPostID.textContent = element.postId;

		postFragment.appendChild(postTemplate);
	});

	parent.appendChild(postFragment);
}

renderPost(data, elPosts);

elPosts.addEventListener('click', (e) => {
	const target = e.target;

	if (target.className.match('btn-danger')) {
		const id = target.dataset.id;
		const result = data.filter((element) => {
			if (Number(id) !== element.id) {
				//1 !== 1
				return element;
			}
		});
		data = result;

		renderPost(data);
	}
});

elPostSelect.addEventListener('change', (e) => {
	const postId = e.target.value;

	const result = data.filter((post) => {
		if (post.postId === Number(postId)) {
			return post;
		}
	});
	if (postId === 'all') {
		renderPost(data);
	} else {
		renderPost(result);
	}
});
