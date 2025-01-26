import React, { useEffect } from 'react'
import LoanForm from '../../components/LoanForm/LoanForm.jsx'
import { useDispatch } from 'react-redux';
import { getCategories } from '../../utils/redux/slice/category.slice.js';

const loanFormView = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch])
    return (
        <>
            <LoanForm />
        </>
    )
}

export default loanFormView