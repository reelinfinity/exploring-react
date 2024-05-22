import { ChangeEvent, useCallback, useState } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

const CustomNode = () => {
  const [value, setValue] = useState("");
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return (
    <div className="h-fit border border-solid border-[#eee] p-[5px] rounded-[5px] bg-rose-300">
      <Handle type="target" position={Position.Top} />
      <div>
        <label className="block text-[#777] text-sm" htmlFor="text">
          Text:{" "}
        </label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag h-4 text-[0.5rem]"
          value={value}
        />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        style={handleStyle}
      />
    </div>
  );
};

export default CustomNode;
