import React, { useState } from "react";

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]); // maintask return array,array inside object
    // console.log(title)
    // console.log(desc)
    // console.log(mainTask);
    setDesc("");
    setTitle("");
  };

  const deleteHandler = (index) => {
    let copyTask = [...mainTask];
    copyTask.splice(index, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2> No Task Available </h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((task, index) => {
      return (
        <li key={index} className="flex items justify-between">
          <div className="flex justify-between w-2/3 mb-5 ">
            <h5 className="text-2xl font-semibold">{task.title}</h5>
            <h6 className="text-2xl font-semibold">{task.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(index);
            }}
            className="bg-red-600 text-white px-4 py-2 mb-4 rounded-lg "
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-center text-6xl font-bold ">
        Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
          type="text"
          placeholder="Enter title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2 rounded"
          type="text"
          placeholder="Enter Desc Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button className="bg-blue-400  text-white font-bold px-7 py-1 rounded-md">
          Add
        </button>
        
      </form>
      <hr />
      <div className="p-8 bg-slate-200 ">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default Page;
