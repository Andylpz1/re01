document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('messageInput');
    const messagesDiv = document.getElementById('messages');

    // add message
    document.querySelector('button').addEventListener('click', addMessage);

    function addMessage() {
        const messageText = messageInput.value;
        if (messageText) {
            const newMessage = document.createElement('div');
            newMessage.classList.add('message');

            const messageContent = document.createElement('p');
            messageContent.classList.add('message-text');
            messageContent.innerText = messageText;

            const buttonsContainer = document.createElement('div');
            buttonsContainer.classList.add('message-buttons');
            
            const likeButton = document.createElement('button');
            likeButton.innerText = '👍';

            const dislikeButton = document.createElement('button');
            dislikeButton.innerText = '👎';

            const editButton = document.createElement('button');
            editButton.innerText = '修改';
            editButton.addEventListener('click', () => editMessage(newMessage, messageContent));

            const deleteButton = document.createElement('button');
            deleteButton.innerText = '删除';
            deleteButton.addEventListener('click', () => deleteMessage(newMessage));

            buttonsContainer.appendChild(likeButton);
            buttonsContainer.appendChild(dislikeButton);
            buttonsContainer.appendChild(editButton);
            buttonsContainer.appendChild(deleteButton);
            
            newMessage.appendChild(messageContent);
            newMessage.appendChild(buttonsContainer);
            messagesDiv.appendChild(newMessage);

            messageInput.value = '';
        }
    }

    function deleteMessage(messageElement) {
        messagesDiv.removeChild(messageElement);
    }

    function editMessage(messageElement, messageContent) {
        const newText = prompt('编辑你的留言：', messageContent.innerText);
        if (newText !== null) {
            messageContent.innerText = newText;
        }
    }
});
