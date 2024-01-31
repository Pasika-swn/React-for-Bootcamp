function App() {
  return (
    <div className="max-w-[400px] m-auto my-2">
      <div className="flex items-center">
        <h1 className="flex-auto text-3xl font-bold text-fuchsia-950">
          Authenticator
        </h1>
        <button className="flex bg-violet-600 text-white border-none px-4 py-2 font-medium rounded-md cursor-pointer">
          New
        </button>
      </div>
      <ul className="flex flex-col m-0 p-0 list-none">
        {[...Array(10)].map((_, i) => (
          <li key={i} className="border-b py-4">
            <div className="text-lg">Google</div>
            <div className="text-xl text-violet-700 font-medium">181 951</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
