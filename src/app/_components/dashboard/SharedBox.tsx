"use client";

import { useState } from "react";
import { Messages } from "./Messages";
import { Preferences } from "./Preferences";

export function SharedBox() {
  const [selectedTab, setSelectedTab] = useState("messages");

  return (
    <div className="bg-blue-300 border-amber-50 p-4 w-64 h-120 rounded-lg shadow">
      <div className="flex justify-between">
        <button
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSelectedTab("messages")}
        >
          Messages
        </button>
        <button
          className="cursor-pointer hover:bg-gray-200"
          onClick={() => setSelectedTab("preferences")}
        >
          Preferences
        </button>
      </div>

      <div>
        {selectedTab === "messages" && <Messages />}
        {selectedTab === "preferences" && <Preferences />}
      </div>
    </div>
  );
}
