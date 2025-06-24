// Simple in-memory post storage
let posts = [];
let selectedPostId = null;

// DOM elements
const postListDiv = document.getElementById('post-list');
const postDetailDiv = document.getElementById('post-detail');
const newPostForm = document.getElementById('new-post-form');
const editPostForm = document.getElementById('edit-post-form');
const cancelEditBtn = document.getElementById('cancel-edit');

// Render all posts in the list
function renderPostList() {
  const list = document.createElement('ul');
  posts.forEach((post, idx) => {
    const li = document.createElement('li');
    li.textContent = post.title + ' (by ' + post.author + ')';
    li.style.cursor = 'pointer';
    li.onclick = () => showPostDetail(idx);
    list.appendChild(li);
  });
  postListDiv.innerHTML = '<h2>All Posts</h2>';
  postListDiv.appendChild(list);
}

// Show details of a selected post
function showPostDetail(idx) {
  selectedPostId = idx;
  const post = posts[idx];
  postDetailDiv.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>Author:</strong> ${post.author}</p>
    ${post.image ? `<img src="${post.image}" alt="Post image" style="max-width:200px;">` : ''}
    <p>${post.content}</p>
    <button id="edit-btn">Edit</button>
  `;
  document.getElementById('edit-btn').onclick = showEditForm;
}

// Handle new post submission
newPostForm.onsubmit = function(e) {
  e.preventDefault();
  const formData = new FormData(newPostForm);
  const newPost = {
    title: formData.get('title'),
    author: formData.get('author'),
    image: formData.get('image'),
    content: formData.get('content')
  };
  posts.push(newPost);
  newPostForm.reset();
  renderPostList();
  postDetailDiv.innerHTML = '<h2>Select a post to see details</h2>';
};

// Show edit form with current post data
function showEditForm() {
  if (selectedPostId === null) return;
  const post = posts[selectedPostId];
  editPostForm.classList.remove('hidden');
  editPostForm['title'].value = post.title;
  editPostForm['content'].value = post.content;
}

// Handle edit post submission
editPostForm.onsubmit = function(e) {
  e.preventDefault();
  if (selectedPostId === null) return;
  posts[selectedPostId].title = editPostForm['title'].value;
  posts[selectedPostId].content = editPostForm['content'].value;
  editPostForm.classList.add('hidden');
  renderPostList();
  showPostDetail(selectedPostId);
};

// Cancel editing
cancelEditBtn.onclick = function() {
  editPostForm.classList.add('hidden');
};

// Initial render
renderPostList();