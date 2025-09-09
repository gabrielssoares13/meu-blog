const postsContainer = document.getElementById('posts');
const postForm = document.getElementById('post-form');
const titleInput = document.getElementById('title');
const contentInput = document.getElementById('content');

// Função para criar um post no DOM
function createPost(title, content) {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = title;
    const p = document.createElement('p');
    p.textContent = content;

    article.appendChild(h3);
    article.appendChild(p);

    postsContainer.prepend(article);
}

// Evento para adicionar post
postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = titleInput.value.trim();
    const content = contentInput.value.trim();

    if (title && content) {
        createPost(title, content);
        postForm.reset();
    }
});