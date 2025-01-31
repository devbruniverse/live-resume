export default function Home() {
  return (
    <div className="flex flex-col grow items-center justify-center h-full w-full max-h-full gap-4 bg-gradient-to-tr from-blue-300 to-25% to-transparent">
      <div className="flex flex-col max-w-3xl items-center text-center gap-8 p-12 rounded-lg">
        <h1 className="text-5xl text-transparent font-extrabold bg-clip-text bg-gradient-to-br from-blue-500 to-orange-400">
          Hi! I'm Bruno
        </h1>
        <h3 className="text-2xl font-semibold">Welcome to my live resume</h3>
        <div className="flex flex-col gap-2">
          <p>
            Here you can have some information about my past experience and access to some
            components and things I'm currently working on!
          </p>
          <p>
            Nowadays I'm mostly a Frontend developer / engineer / whatever the cool kids are using
            right now, but during my career I've worked with many different technologies, a
            full-stack if I may.
          </p>
          <p>
            Recently I've been invested into backend and game development once again, using ( read
            as trying to :D ) technologies such Go, Lua and Python.
          </p>
        </div>
      </div>
    </div>
  );
}
