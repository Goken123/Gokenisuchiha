// Function to send a message
function sendMessage() {
  var username = document.getElementById('username').value;
  var message = document.getElementById('message').value;

  if (username.trim() === '' || message.trim() === '') {
    alert('Please enter a username and message.');
    return;
  }

  var messagesContainer = document.getElementById('messages');
  var messageElement = document.createElement('div');
  messageElement.innerHTML = '<strong>' + username + ':</strong> ' + message;
  messagesContainer.appendChild(messageElement);

  // Limit number of messages to 100
  if (messagesContainer.children.length > 100) {
    messagesContainer.removeChild(messagesContainer.children[0]);
  }

  // Clear input field
  document.getElementById('message').value = '';
}

// Function to delete all messages
function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}