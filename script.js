///生徒名簿////////////////////////////////////////////////////////
const array11 = [
    "徳川家康", "徳川秀忠", "徳川家光", "徳川家綱", "徳川綱吉", "徳川家宣", "徳川家継", "徳川吉宗", "徳川家重", "徳川家治", "徳川家斉", "徳川家定", "徳川家茂", "徳川慶喜"
]
const array12 = [
    "源頼朝", "源頼家", "源実朝", "源頼経", "源頼嗣", "宗尊親王", "惟康親王", "久明親王", "守邦親王"
]

const array13 = [
    "北条時政", "北条義時", "北条泰時", "北条経時", "北条時頼"
]

const array21 = [
    "チャールズ", "カミラ", "ウィリアム", "キャサリン", "ジョージ", "シャーロット", "ルイ", "ヘンリー", "メーガン"
]

const array22 = [
    "ワシントン", "アダムズ", "ジェファーソン", "マディソン", "モンロー", "ジャクソン"
]

const array23 = [
    "ジョージ", "ジョン", "トーマス", "ジェームズ", "アンドリュー", "マーティン"
]

const array31 = [
    "伊藤博文", "黒田清隆", "山縣有朋", "松方正義", "大隈重信", "桂太郎", "西園寺公望", "山本権兵衛", "寺内正毅", "原敬"
]

const array32 = [
    "田中義一", "犬養毅", "廣田弘毅"
]

const array33 = [
    "メージャー", "ブレア", "ブラウン", "キャメロン", "メイ", "ジョンソン", "トラス"
]

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

            for (let i = 1; i <= 15; i++) {
                student_number11 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number11);
        } else if (i_grade === "1" && i_class === "2") {
            let student_number12 = "<option>番号</option>";

            for (let i = 1; i <= 9; i++) {
                student_number12 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number12);
        } else if (i_grade === "1" && i_class === "3") {
            let student_number13 = "<option>番号</option>";

            for (let i = 1; i <= 5; i++) {
                student_number13 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number13);
        } else if (i_grade === "2" && i_class === "1") {
            let student_number21 = "<option>番号</option>";

            for (let i = 1; i <= 9; i++) {
                student_number21 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number21);
        } else if (i_grade === "2" && i_class === "2") {
            let student_number22 = "<option>番号</option>";

            for (let i = 1; i <= 6; i++) {
                student_number22 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number22);
        } else if (i_grade === "2" && i_class === "3") {
            let student_number23 = "<option>番号</option>";

            for (let i = 1; i <= 6; i++) {
                student_number23 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number23);
        } else if (i_grade === "3" && i_class === "1") {
            let student_number31 = "<option>番号</option>";

            for (let i = 1; i <= 10; i++) {
                student_number31 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number31);
        } else if (i_grade === "3" && i_class === "2") {
            let student_number32 = "<option>番号</option>";

            for (let i = 1; i <= 3; i++) {
                student_number32 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number32);
        } else if (i_grade === "3" && i_class === "3") {
            let student_number33 = "<option>番号</option>";

            for (let i = 1; i <= 7; i++) {
                student_number33 += "<option>" + i + "</option>";
            }

            $("#studentnumber").html(student_number33);
        }





        ///氏名//////////////////////////////////////////////////////
        $("#studentnumber").on("change", function () {
            const i_number = $("#studentnumber").val();

            if (i_grade === "1" && i_class === "1") {
                $("#name").val(array11[i_number]);
            } else if (i_grade === "1" && i_class === "2") {
                $("#name").val(array12[i_number]);
            } else if (i_grade === "1" && i_class === "3") {
                $("#name").val(array13[i_number]);
            } else if (i_grade === "2" && i_class === "1") {
                $("#name").val(array21[i_number]);
            } else if (i_grade === "2" && i_class === "2") {
                $("#name").val(array22[i_number]);
            } else if (i_grade === "2" && i_class === "3") {
                $("#name").val(array23[i_number]);
            } else if (i_grade === "3" && i_class === "1") {
                $("#name").val(array31[i_number]);
            } else if (i_grade === "3" && i_class === "2") {
                $("#name").val(array32[i_number]);
            } else if (i_grade === "3" && i_class === "3") {
                $("#name").val(array33[i_number]);
            }


        })

    })

})

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
const thead_array = [
    "学年",
    "組",
    "番号",
    "氏名",
    "連絡",
    "連絡理由",
    "コメント"
]

let theader = ""
for (let j = 0; j <= thead_array.length - 1; j++) {
    theader += "<th>" + thead_array[j] + "</th>"
}
$("#student_table").append("<tr>" + theader + "</tr>");

$("#submitbutton").on("click", function () {
    $("#student_table").empty();
    $("#student_table").append("<tr>" + theader + "</tr>");

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


    let output_array = "";

    for (let i = 0; i <= data_array.length - 1; i++) {
        output_array += "<td>" + data_array[i] + "</td>"
    }

    const jsondata = JSON.stringify(output_array);
    localStorage.setItem(localStorage.length.toString(), jsondata);


    for (let i = 0; i <= localStorage.length.toString(); i++) {
        if (localStorage.getItem(i)) {

            const jsondata = localStorage.getItem(i);
            const data = JSON.parse(jsondata);


            $("#student_table").append("<tr>" + data + "</tr>");

        }



    }

    $("#grade").val("学年");
    $("#class").val("組");
    $("#studentnumber").val("番号");
    $("#name").val("");
    $("#contact").val("欠席");
    $("#reason").val("");
    $("#comment").val("");

});

// if (localStorage.getItem(0)) {
//     const jsondata = localStorage.getItem(0);
//     const data = JSON.parse(jsondata);
//     console.log(data)
//     $("#student_table").append("<tr></tr>");
//     $("#student_table").html(data);

// }





///////////////////////////////////////////////////////////////
// if (localStorage.getItem(0)) {
//     const jsondata = localStorage.getItem(0);
//     const data = JSON.parse(jsondata);
//     $("#student_info").html(data);
// }
///出力シート///////////////////////////////////////////////////





