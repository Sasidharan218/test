import React from "react";

function Student(){
  const Details = {
    "students": [
      {
        "Name": "Sravan",
        "Roll": 7058,
        "subject": "java"
      },
      {
        "Name": "Jyothika",
        "Roll": 7059,
        "subject": "SAP"
      }
    ]
  };

  return (
    
      <div>
        <table>
            <thead>
              <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Subject</th>
            </tr>
            </thead>
           
        {Details.students.map((student, index) => (
           <tbody>
            <tr key={index}>
            <th>{student.Name}</th>
            <th>{student.Roll}</th>
            <th>{student.subject}</th>
            </tr>
            </tbody>
         
        ))}
         </table>
      </div>
    
  );
};

export default Student;



