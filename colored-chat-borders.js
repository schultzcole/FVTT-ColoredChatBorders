Hooks.on("renderChatMessage", (message, html, messageData) => {
    let senderColor = messageData.author.color || game.users.get(messageData.author.data._id).color;
    html.css("border-color", senderColor);
});
