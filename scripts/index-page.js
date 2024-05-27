document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    const comments = [
        {
            name: "Isaac Tadesse",
            timestamp: "10/20/2023",
            text: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
        },
        {
            name: "Christina Cabrera",
            timestamp: "10/28/2023",
            text: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day."
        },
        {
            name: "Victor Pinto",
            timestamp: "11/02/2023",
            text: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains."
        }
    ];
    const displayComment = (comment) => {
        const commentElement = document.createElement('div');
        commentElement.className = 'comment';

        const avatarElement = document.createElement('div');
        avatarElement.className = 'comment__avatar';
        commentElement.appendChild(avatarElement);

        const contentElement = document.createElement('div');
        contentElement.className = 'comment__content';

        const nameElement = document.createElement('p');
        nameElement.innerHTML = `<strong>${comment.name}</strong> <span>${comment.timestamp}</span>`;
        contentElement.appendChild(nameElement);
        
        const textElement = document.createElement('p');
        textElement.textContent = comment.text;
        contentElement.appendChild(textElement);

        commentElement.appendChild(contentElement);

        commentsList.appendChild(commentElement);
    };

 
    const renderComments = () => {
        commentsList.innerHTML = '';
        comments.slice().reverse().forEach(displayComment);
    };

   
    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = event.target.name.value;
        const text = event.target.comment.value;
        const timestamp = new Date().toLocaleDateString();

        const newComment = { name, timestamp, text };
        comments.push(newComment);
        
        renderComments();
        event.target.reset();
    });

  
    renderComments();
});
