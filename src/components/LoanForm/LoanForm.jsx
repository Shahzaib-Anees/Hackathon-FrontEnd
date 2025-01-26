import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategory } from "../../utils/redux/slice/category.slice.js";

const LoanForm = () => {
    const categorySelector = useSelector((state) => state.category);
    const dispatch = useDispatch();
    const categories = selector.categories;
    const [formData, setFormData] = useState({
        category: "",
        subCategory: "",
        loanAmount: "",
        loanPeriod: "",
    });

    const handleCategorySelect = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubCategorySelect = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">Loan Application Form</h2>

                <div className="mb-4">
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Select Category
                    </label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map((item) => {
                            return <option key={category.id} value={category.title} onSelect={dispatch(setSelectedCategory(item.title))}>{category.title}</option>
                        })}
                    </select>
                    <select
                        id="subCategory"
                        name="subCategory"
                        value={formData.category}
                        onChange={handleCategorySelect}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map((item) => {
                            return <option key={category.id} value={category.title} onSelect={dispatch(setSelectedCategory(item.title))}>{category.title}</option>
                        })}
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="subCategory" className="block text-sm font-medium text-gray-700 mb-1">
                        Select SubCategory
                    </label>
                    <select
                        id="subCategory"
                        name="subCategory"
                        value={formData.subCategory}
                        onChange={handleSubCategorySelect}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {

                        }
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Amount
                    </label>
                    <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        placeholder="Enter loan amount"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="loanPeriod" className="block text-sm font-medium text-gray-700 mb-1">
                        Loan Period (in months)
                    </label>
                    <select
                        id="loanPeriod"
                        name="loanPeriod"
                        value={formData.loanPeriod}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select Loan Period</option>
                        <option value="6">6 months</option>
                        <option value="12">12 months</option>
                        <option value="24">24 months</option>
                        <option value="36">36 months</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LoanForm;