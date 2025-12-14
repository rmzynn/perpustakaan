import { FormTask } from "./components/FormTask";
import { TableTask } from "./components/TableTask";

function App() {
  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-1">
          Perpustakaan Online
        </h1>
        <br />

        <FormTask />
        <TableTask />
      </div>
    </section>
  );
}

export default App;
