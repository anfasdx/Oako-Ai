import React, { useState } from "react";
import "../App.css";

const apiKey = "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"; // Replace with your OpenAI GPT-3 API key

function QesChat() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [aiResponse, setAiResponse] = useState("");

  const profileImages = {
    You: "https://c.tenor.com/CiJuhjUFaeIAAAAC/tenor.gif",
    OakoAi: "https://c.tenor.com/3_hOO8r0lZYAAAAC/tenor.gif",
    // Add more as needed
  };

  const sendMessage = async () => {
    if (!userMessage) return;

    const newMessages = [...messages, { sender: "You", message: userMessage }];

    setMessages(newMessages);
    setUserMessage("");

    // Customize the AI prompt
    const aiPrompt = `User: ${userMessage}\nAI Prompt: You: Ask the AI about ${userMessage}\n`;

    // Call OpenAI GPT-3 API with the customized prompt
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          prompt: aiPrompt,
          max_tokens: 150,
        }),
      }
    );

    const data = await response.json();
    const botResponse = data.choices[0].text.trim();

    // Display user's message instantly
    setMessages([...newMessages]);

    // Introduce a delay and then display AI's response word by word
    setTimeout(() => {
      const words = botResponse.split(" ");
      let currentMessage = "";

      words.forEach((word, index) => {
        setTimeout(() => {
          currentMessage += (index > 0 ? " " : "") + word;

          // Adjust the regular expression to handle variations
          setAiResponse(
            currentMessage.replace(/^(AI\s*Response|AI):\s*/i, "").trim()
          );
        }, index * 300); // Adjust the delay between words as needed
      });

      // Add AI's complete response to messages
      setTimeout(() => {
        const cleanedResponse = botResponse
          .replace(/^(AI\s*Response|AI):\s*/i, "")
          .trim();
        setMessages([
          ...newMessages,
          { sender: "OakoAi", message: cleanedResponse },
        ]);
        setAiResponse("");
      }, words.length * 300); // Adjust the delay for the complete response
    }, 400); // Adjust the delay before displaying AI's response
  };

  return (
    <div className="App">
      <div id="chat-container">
        {messages.map((message, index) => (
          <div className="chat-flex">
            <div id="img">
              <img src={profileImages[message.sender]} alt={message.sender} />
            </div>
            <div id="msg" key={index}>
              <strong>{message.sender}</strong> <br />
              <br /> {message.message}
              <br />
              <br />
            </div>
          </div>
        ))}
        {aiResponse && (
          <div>
            <img src={profileImages["OakoAi"]} alt="OakoAi" />
            <strong>OakoAi</strong> <br />
            <br /> {aiResponse}
            <br />
            <br />
          </div>
        )}
      </div>

      <div className="hidden" id="user-input">
        <input
          type="text"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
          placeholder="Ask for Suggestions"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default QesChat;
