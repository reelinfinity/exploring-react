import { useCallback } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlowProvider,
  SelectionMode,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";
// import initialNodes from "./nodes";
// import initialEdges from "./edges";
import CustomNode from "./components/CustomNode";
import Sidebar from "./components/Sidebar";

const initialNodes = [
  {
    id: "node-1",
    type: "customNode",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "output",
    targetPosition: "top",
    position: { x: 0, y: 200 },
    data: { label: "node 2" },
  },
  {
    id: "node-3",
    type: "output",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { label: "node 3" },
  },
] as Node[];

const initialEdges = [
  { id: "edge-1", source: "node-1", sourceHandle: "b", target: "node-2" },
  { id: "edge-2", source: "node-1", sourceHandle: "a", target: "node-3" },
] as Edge[];

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const nodeTypes = { customNode: CustomNode };

function App() {
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (connection: Connection) => {
      return setEdges((eds) => addEdge({ ...connection, animated: true }, eds));
    },
    [setEdges]
  );

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );

  return (
    <div className="flex h-screen w-screen bg-black">
      <ReactFlowProvider>
        <Sidebar />
        <ReactFlow
          className="rounded-md"
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          // defaultEdgeOptions={{ animated: true }}
          // panOnDrag={false}
          // zoomOnScroll={false}
          // panOnScroll={true}
          // panOnDrag={[1, 2]}
          panOnScroll={true}
          selectionOnDrag={true}
          selectionMode={SelectionMode.Partial}
          style={rfStyle}
        >
          <Controls />
          {/* <MiniMap /> */}
          <Background variant={"dots" as BackgroundVariant} gap={12} size={1} />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
}

export default App;
