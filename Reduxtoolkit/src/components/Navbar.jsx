import { useSelector } from "react-redux";

import React from 'react'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            the count value is {count}
        </div>
    )
}

export default Navbar
