const Sidebar = () => {
  return (
    <div className="w-3/12 h-screen bg-gray-50 rounded-md flex flex-col items-center space-y-2 p-2 overflow-x-hidden overflow-y-auto">
      {new Array(12).fill(0).map((_, idx) => (
        <div
          draggable="true"
          className="w-3/4 h-16 rounded-md border-2 border-black cursor-pointer flex justify-center items-center hover:bg-gray-300"
        >{`NODE ${idx}`}</div>
      ))}
    </div>
  );
};

export default Sidebar;
