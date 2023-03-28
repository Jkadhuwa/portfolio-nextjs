import Typewriter from "typewriter-effect";

export default function Typing() {
  return (
    <div className="text-center h-8 mt-6">
      <Typewriter
        options={{
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color:#FF906F; font-size: 14px; font-weight: 400;">Mobile Developer</span>')
            .pauseFor(3500)
            .deleteAll(17)
            .typeString('<span style="color: #FF906F; font-size: 14px; font-weight: 400;">Front-end Developer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #FF906F; font-size: 14px; font-weight: 400;">Back-end Developer</span>')
            .pauseFor(3500)
            .deleteAll(17)

            .typeString('<span style="color: #FF906F; font-size: 14px; font-weight: 400;">Freelancer</span>')
            .pauseFor(3500)
            .deleteAll(17)
            .start();
        }}
      />
    </div>
  );
}
