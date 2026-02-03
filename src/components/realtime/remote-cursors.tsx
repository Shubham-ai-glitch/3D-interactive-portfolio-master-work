"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useSocket } from "@/hooks/use-socket"; // Maan ke chal rahe hain aapka hook yahi hai

interface User {
  id: string;
  x: number;
  y: number;
  name?: string;
}

const RemoteCursors = ({ socketId }: { socketId: string }) => {
  const [users, setUsers] = useState<User[]>([]);
  const { socket } = useSocket();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (socket && socketId) {
        socket.emit("move", {
          x: e.clientX,
          y: e.clientY,
          id: socketId,
        });
      }
    },
    [socket, socketId] // Missing dependencies fixed
  );

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  useEffect(() => {
    if (socket) {
      socket.on("user-moved", (data: User) => {
        setUsers((prev) => {
          const filtered = prev.filter((u) => u.id !== data.id);
          return [...filtered, data];
        });
      });

      socket.on("user-disconnected", (id: string) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
      });
    }

    return () => {
      if (socket) {
        socket.off("user-moved");
        socket.off("user-disconnected");
      }
    };
  }, [socket, setUsers]); // Missing dependencies 'setUsers' fixed

  return (
    <>
      {users.map((user) => (
        <div
          key={user.id}
          className="fixed pointer-events-none z-[9999] transition-transform duration-75"
          style={{
            left: 0,
            top: 0,
            transform: `translate3d(${user.x}px, ${user.y}px, 0)`,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-blue-500 fill-blue-500"
          >
            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
          </svg>
          <span className="ml-4 bg-blue-500 text-white text-[10px] px-1.5 py-0.5 rounded">
            {user.name || "User"}
          </span>
        </div>
      ))}
    </>
  );
};

export default RemoteCursors;
