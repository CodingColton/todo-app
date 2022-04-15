const add_button = document.getElementById("btn_add");
const task_input = document.getElementById("user_input");

task_input.setAttribute('size',task_input.getAttribute('placeholder').length);

add_button.onclick = function() {
    const para = document.createElement("p");
    para.setAttribute('id', 'task_item');
    para.innerText = "- " + task_input.value;
    document.body.appendChild(para);
    task_input.value = "";
    task_input.focus();
};

task_input.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        //click add task button
        add_button.click();
    }
});