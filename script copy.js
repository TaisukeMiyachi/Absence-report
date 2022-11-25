
$("#class").html("<option>組</option>")
$("#studentnumber").html("<option>番号</option>")

///学年/////////////////////////////
let grade = "<option>学年</option>";

for (let i = 1; i <= 3; i++) {
    grade += "<option>" + i + "</option>";
}

$("#grade").html(grade);

///組/////////////////////////////


$("#grade").on("change", function () {
    const i_grade = $("#grade").val();


    if (i_grade === "1") {
        let class_number1 = "<option>組</option>";

        for (let i = 1; i <= 3; i++) {
            class_number1 += "<option>" + i + "</option>";
        }

        $("#class").html(class_number1);

    } else if (i_grade === "2") {
        let class_number2 = "<option>組</option>";

        for (let i = 1; i <= 3; i++) {
            class_number2 += "<option>" + i + "</option>";
        }

        $("#class").html(class_number2);
    } else {
        let class_number3 = "<option>組</option>";

        for (let i = 1; i <= 3; i++) {
            class_number3 += "<option>" + i + "</option>";
        }

        $("#class").html(class_number3);
    }


    ///番号/////////////////////////////


    $("#class").on("change", function () {
        const i_class = $("#class").val();

        if (i_grade === "1" && i_class === "1") {
            let student_number11 = "<option>番号</option>";

            for (let i = 1; i <= 31; i++) {
                student_number11 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number11);
        } else if (i_grade === "1" && i_class === "2") {
            let student_number11 = "<option>番号</option>";

            for (let i = 1; i <= 32; i++) {
                student_number12 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number12);
        } else if (i_grade === "1" && i_class === "3") {
            let student_number13 = "<option>番号</option>";

            for (let i = 1; i <= 33; i++) {
                student_number13 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number13);
        } else if (i_grade === "2" && i_class === "1") {
            let student_number21 = "<option>番号</option>";

            for (let i = 1; i <= 31; i++) {
                student_number21 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number21);
        } else if (i_grade === "2" && i_class === "2") {
            let student_number22 = "<option>番号</option>";

            for (let i = 1; i <= 32; i++) {
                student_number22 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number22);
        } else if (i_grade === "2" && i_class === "3") {
            let student_number23 = "<option>番号</option>";

            for (let i = 1; i <= 43; i++) {
                student_number23 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number23);
        } else if (i_grade === "3" && i_class === "1") {
            let student_number31 = "<option>番号</option>";

            for (let i = 1; i <= 21; i++) {
                student_number31 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number31);
        } else if (i_grade === "3" && i_class === "2") {
            let student_number32 = "<option>番号</option>";

            for (let i = 1; i <= 22; i++) {
                student_number32 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number32);
        } else if (i_grade === "3" && i_class === "3") {
            let student_number33 = "<option>番号</option>";

            for (let i = 1; i <= 23; i++) {
                student_number33 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number33);
        }








    })
})
// let student_number = "";

// for (let i = 1; i <= 45; i++) {
//     student_number += "<option>" + i + "</option>";
// }

// $("#studentnumber").html(student_number);

///連絡/////////////////////////////
let status_array = ";"
const array = [
    "欠席",
    "遅刻",
    "早退"
];

for (let i = 0; i <= 2; i++) {
    status_array += "<option>" + array[i] + "</option>";
}

$("#contact").html(status_array);


///送信///////////////////////////////////
$("#submitbutton").on("click", function () {
    const correct_grade = $("#grade").val();
    const correct_class = $("#class").val();
    const correct_studentnumber = $("#studentnumber").val();
    const correct_name = $("#name").val();
    const correct_contact = $("#contact").val();
    const correct_reason = $("#reason").val();
    const correct_comment = $("#comment").val();

    const data_array = [
        correct_grade,
        correct_class,
        correct_studentnumber,
        correct_name,
        correct_contact,
        correct_reason,
        correct_comment
    ];

    let output_array = "<td></td>";

    for (let i = 0; i <= data_array.length - 1; i++) {
        output_array += "<td>" + data_array[i] + "</td>"
    }
    const jsondata = JSON.stringify(output_array);
    localStorage.setItem("parsonal", jsondata);


    if (localStorage.getItem("parsonal")) {
        const jsondata = localStorage.getItem("parsonal");
        const data = JSON.parse(jsondata);

        console.log(data)
        $("#student_info").html(data);
    }
    // $("#student_info").html(data);

});


if (localStorage.getItem("parsonal")) {
    const jsondata = localStorage.getItem("parsonal");
    const data = JSON.parse(jsondata);

    console.log(data)
    $("#student_info").html(data);
}
///出力シート///////////////////////////////////////////////////

