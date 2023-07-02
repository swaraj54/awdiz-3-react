import React, { useState } from 'react'

const Map2 = () => {

    const [studentsList, setSetStudentsList] = useState([{ myName: "Awdiz", myAge: "6 years" }, { myName: "rocky", myAge: "6 years" }, { myName: "avinash", myAge: "6 years" }, { myName: "hii", myAge: "6 years" }, { myName: "Hello", myAge: "6 years" }])
    console.log(studentsList, "-studentsList")
    return (
        <div>
            {/* {studentsList?.length && studentsList.map((str) => (
                <div>
                    <h1>{str}</h1>
                </div>
            ))} */}
            {studentsList?.length ? "We have data" :"dONT HAVE DATA"}

            {studentsList?.length && studentsList.map((myObject, i) => (
                <div key={i}>
                    <h1>Name : {myObject.myName}</h1>
                    <h2>Age : {myObject.myAge}</h2>
                </div>
            ))}

        </div>
    )
}

export default Map2