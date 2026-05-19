console.log('Wellcome to TO-DO list project');

{
    function insertTask() {
        const inputBox = document.getElementById('input-box');

        const task = inputBox.value;
        inputBox.value = "";
        const list = document.querySelector('.task-list');

        const li = document.createElement("li");

        if (task.trim() === "") return;
        li.innerText = task;
        document.body.appendChild(li);

        const completeButton = document.createElement('button');
        completeButton.innerText = "✅";

        completeButton.onclick = function () {
            li.classList.toggle('li-list')
        }
        li.appendChild(completeButton);

        const delectButton = document.createElement('button');
        delectButton.innerText = "❌";
        delectButton.onclick = function () {
            li.remove();
        }
        li.appendChild(delectButton);
    }
}

