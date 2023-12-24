/* eslint-disable react/prop-types */

import { useForm } from "react-hook-form";

const AddTask = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <div className="border p-5">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div className="flex items-center gap-3">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="title"
            {...register("title", { required: true })}
          />
        </div>
        
        <div className="flex items-center gap-3">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Description:
          </label>
          <textarea
            type="text"
            name="description"
            id="description"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="description"
            {...register("description", { required: true })}
          />
        </div>
       
        <div className="flex items-center gap-3">
          <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
          Deadline:
          </label>
          <input
            type="date"
            name="date"
            id="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="date"
            {...register("date", { required: true })}
          />
        </div>
        
        <div className="flex items-center gap-3">
        <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Priority:</label>
        <select className="block mb-2 text-lg font-medium text-gray-900 dark:text-white" {...register("priority")}>
          <option value="low">Low</option>
          <option value="moderate">Moderate</option>
          <option value="high">High</option>
        </select>
        </div>
        
        <button type="submit" className="btn">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
