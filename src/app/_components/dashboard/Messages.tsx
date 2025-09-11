import { auth } from "~/server/auth";
import { api } from "~/trpc/react";

export function Messages() {
//   const session = await auth();
//   const utils = api.useUtils();

  // const messages = api.message.getAll.useSuspenseQuery(); //before message implement

  //Mock test messages
  const messages = [
    { id: 1, from: "John", lastMessage: "Hello there!" },
    { id: 2, from: "Jane", lastMessage: "Hi, how are you?" },
    { id: 3, from: "Bob", lastMessage: "I'm doing well, thanks!" },
    { id: 4, from: "Alice", lastMessage: "Glad to hear that!" },
  ];

  return (
    <main>
      <ul className="flex flex-col gap-2">
        {messages.map((msg) => (
          <li key={msg.id} className="rounded-lg border bg-white p-3">
            <p>
              {msg.from}: {msg.lastMessage}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
