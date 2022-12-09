import React, { useState } from "react";
import { PostMessage } from "../api/MessageAPI";

export const MessageForm = ({ selectedPost }) => {
  const [content, setContent] = useState("");
  const id = selectedPost._id;

  return (
    <div>
      <form
        onSubmit={async (e) => {
          console.log(content);
          e.preventDefault();
          await PostMessage(content, id);
        }}
      >
        <label>Message:</label>
        <input
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter Message Here"
        ></input>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
