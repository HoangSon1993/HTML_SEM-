//Định nghĩa / thiết kế tượng.
function Student(code, student_name, student_age) {
    this.code = code;
    this.name = student_name;
    this.age = student_age;
}

// const student = new Student("Nguyen Van A", 20);

function inputStudent (student) {
    let name;    //= prompt("Bạn tên là gì", "Tên của bạn");
    name = prompt("Tên của sinh viên có mã " + student.code + ": ", "Họ và tên");
    if (name !== "Họ và tên") {
        student.name = name;
    }
    student.age = prompt("Tuổi của sinh viên có mã " + student.code + "; ", "Nhập số");
    // Kiểm tra tính hợp lệ của tuổi.
    for(;isNaN(student.age);){
        if(isNaN(student.age)){
            student.age = prompt("Bạn nhận tuổi không hợp lệ, nhập lại: ", "Nhập số");
        }
    }
};

function outputStudent(student){
    return `Mã SV: ${student.code} - Tên SV: ${student.name} - Tuổi: ${student.age}.`
}