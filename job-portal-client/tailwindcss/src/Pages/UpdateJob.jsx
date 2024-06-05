
import { useLoaderData, useParams } from 'react-router-dom';
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
const UpdateJob = () => {
    const {id}=useParams();
    // console.log(id)
    const {_id ,jobTitle,companyName,minPrice,maxPrice,salaryType,
    jobLocation,postingDate,experienceLevel,companyLogo,
employmentType, description, postedBy,skills}= useLoaderData();
const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    // console.log(data)
    fetch(`http://localhost:3000/update-job/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Updated Successfully!!");
        }
        reset();
      });
  };
  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "c++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/*form */}
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/*1st Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Name</label>
              <input
                type="text"
                placeholder="Ex:Microsoft"
                defaultValue={companyName}
                {...register("companyName")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/*2nd row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Minimum salary</label>
              <input
                type="text"
                placeholder="$20k"
                defaultValue={minPrice}
                {...register("minPrice")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Maximum salary</label>
              <input
                type="text"
                placeholder="$120k"
                defaultValue={maxPrice}
                {...register("maxPrice")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/*3rd row  */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Salary Type</label>
              <select
              defaultValue={salaryType}
                {...register("salaryType")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="">Choose your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Location</label>
              <input
                type="text"
                placeholder="Ex: New York"
                defaultValue={jobLocation}
                {...register("jobLocation")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* 4 th row*/}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Job Posting Date</label>
              <input
                type="date"
                placeholder="Ex: 2023-11-28"
                defaultValue={postingDate}
                {...register("postingDate")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Experience Level</label>
              <select
              
                {...register("experienceLevel")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value={experienceLevel}>{}experienceLevel</option>
                <option value="NoExperience">No Experience</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>
          {/*5 th ro w */}
          <div>
            <label className="block mb-2 text-lg ">Required skills sets:</label>
            <CreatableSelect
              defaultInputValue={skills}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="py-4 block w-full flex-1 bg-white  pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
          {/*6th row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Company Logo</label>
              <input
                type="url"
                placeholder="Paste your company logo URL:https://weshare.com/img1"
                defaultValue={companyLogo}
                {...register("companyLogo")}
                className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg ">Employment Type</label>
              <select
                {...register("employmentType")}
                className="block w-full flex-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value={employmentType}>{employmentType}</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>
          {/*7th row */}
          <div className="w-full ">
            <label className="block mb-2 text-lg ">Job Description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              row={6}
              defaultValue={description}
              placeholder="Job Description"
              {...register("description")}
            />
          </div>
          {/*8 th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg ">Job Posted By</label>
            <input
              type="email"
              placeholder="Your Email"
              defaultValue={postedBy}
              {...register("postedBy")}
              className="block
             w-full flex-1 border-1 bg-white py-1.5 pl-3 text-gray-500 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  )
}

export default UpdateJob
