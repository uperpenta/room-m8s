"use client";

import { useState } from "react";
import { Messages } from "./Messages";
import { Preferences } from "./Preferences";

export function SharedBox() {
  const [selectedTab, setSelectedTab] = useState("messages");

  return (
    <aside className="bg-bluey left-0 flex h-full w-64 flex-col ps-3 pe-3 ">
      <div className="mb-4 flex justify-between">
        <button
          className={`rounded-lg px-2 py-2 font-medium transition-colors duration-200 ${
            selectedTab === "messages"
              ? "bg-marina text-white"
              : "hover:bg-marina cursor-pointer bg-white text-black hover:text-white"
          } `}
          onClick={() => setSelectedTab("messages")}
        >
          Messages
        </button>
        <button
          className={`rounded-lg px-2 py-2 font-medium transition-colors duration-200 ${
            selectedTab === "preferences"
              ? "bg-marina text-white"
              : "hover:bg-marina cursor-pointer bg-white text-black hover:text-white"
          } `}
          onClick={() => setSelectedTab("preferences")}
        >
          Preferences
        </button>
      </div>

      <div className="flex-1 overflow-auto rounded-lg bg-white p-2">
        {selectedTab === "messages" && <Messages />}
        {selectedTab === "preferences" && <Preferences />}
      </div>
    </aside>
  );
}
