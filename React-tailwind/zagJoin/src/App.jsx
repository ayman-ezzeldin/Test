import useConnectionChecker from "./Checker";

export default function App() {
  const isOnLine = useConnectionChecker()
  return (
    <>
      <h1 className="text-3xl text-green-600 font-bold underline">
        Hello world!
      </h1>
      <div className={`text-3xl ${isOnLine ? "text-green-600" : "text-red-600"}  font-bold underline`} > here we are : {isOnLine ? "Online" : "Offline"} </div>
    </>
  );
}
