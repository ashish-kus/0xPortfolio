import React from "react";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-primary">
      <style>{`
        @keyframes circle {
          to { border-color: #F8F9FA; }
        }
        @keyframes bar1 {
          from { transform: translate(0, -300px); }
          to { transform: translate(0, 0); }
        }
        @keyframes bar2 {
          from { transform: translate(0, 400px); }
          to { transform: translate(0, 0); }
        }
        @keyframes bar3 {
          from { left: -340px; bottom: -340px; }
          to { left: -40px; bottom: 60px; }
        }
        @keyframes bar4 {
          from { bottom: 425px; left: 400px; }
          to { bottom: 0; left: 0; }
        }
        @keyframes bar5 {
          from { bottom: -425px; right: -400px; }
          to { bottom: 0; right: 0; }
        }
        .animate-circle { animation: circle 1s forwards 1.2s; }
        .animate-bar1 { animation: bar1 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards; }
        .animate-bar2 { animation: bar2 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards; }
        .animate-bar3 { animation: bar3 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards; }
        .animate-bar4 { animation: bar4 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards; }
        .animate-bar5 { animation: bar5 1s ease-in-out forwards, fadeIn 1s ease-in-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>

      <div className="animate-circle flex items-center justify-center h-[600px] w-[600px] relative border-[20px] border-transparent rounded-full overflow-hidden">
        <div className="relative h-[300px] w-[300px]">
          <div
            className="animate-bar1 absolute bg-secondary w-[40px] h-[238px] left-0 top-0"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 84%, 0 100%)" }}
          />

          <div
            className="animate-bar2 absolute bg-secondary w-[40px] h-[300px] right-0 top-0"
            style={{ clipPath: "polygon(0 14%, 100% 0, 100% 100%, 0% 100%)" }}
          />

          <div
            className="animate-bar3 absolute bg-secondary w-[40px] h-[340px] rotate-45 origin-bottom-right"
            style={{
              clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 88%)",
              left: "-40px",
              bottom: "60px",
            }}
          />

          <div
            className="animate-bar4 absolute bg-secondary w-[40px] h-[425px] rotate-45 origin-bottom-left"
            style={{
              clipPath: "polygon(0 0, 100% 10%, 100% 91%, 0% 100%)",
              bottom: "0",
              left: "0",
            }}
          />

          <div
            className="animate-bar5 absolute bg-secondary w-[40px] h-[228px] -rotate-45 origin-bottom-left"
            style={{
              bottom: "0",
              right: "0",
            }}
          />
        </div>
      </div>
    </div>
  );
}
