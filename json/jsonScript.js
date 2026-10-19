fetch('student.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(students) {
        let placeholder = document.querySelector("#tableoutput");
        let displayData = "";
        
        for (let student of students) {
            displayData += `
                <tr>
                    <td>${student.lrn}</td>
                    <td>${student.name}</td>
                    <td>${student.age}</td>
                    <td>${student.section}</td>
                    <td><img src="${student.image}" width="100" alt="${student.name}"></td>
                </tr>
            `;
        }
        
        placeholder.innerHTML = displayData;
    });