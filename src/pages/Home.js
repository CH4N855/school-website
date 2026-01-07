import { useEffect, useState } from "react";
import { getStudents, addStudent, deleteStudent } from "../services/api";

function Home() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  const handleAdd = async () => {
    if (!name) return;
    await addStudent(name);
    setName("");
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Students</h1>

      <div className="mb-4">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Student name"
          className="p-2 mr-2 border"
        />
        <button
          onClick={handleAdd}
          className="px-4 py-2 text-white bg-blue-600"
        >
          Add
        </button>
      </div>

      <ul>
        {students.map((student) => (
          <li key={student.id} className="flex justify-between w-64 mb-2">
            {student.name}
            <button
              onClick={() => handleDelete(student.id)}
              className="text-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
