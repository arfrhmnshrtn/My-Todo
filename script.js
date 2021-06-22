const btnInput = document.querySelector('.input-todo button');
const userInput = document.querySelector('.input-todo input');
const listTodo = document.querySelector('.list-todo');


userInput.onkeyup = () =>{
    if (userInput.value == ''){
        btnInput.disabled = true;
    }else{
        btnInput.disabled = false;
    }
};

btnInput.addEventListener('click', function(){
    let userData = userInput.value;

    // ADD ELEMENT DIV
    const divElement = document.createElement('div');
    divElement.classList.add('list');

    // ADD ELEMEN LI
    const liElement = document.createElement('li');
    liElement.classList.add('list-name');
    divElement.appendChild(liElement);
    liElement.innerHTML = userData;

    

    // ADD DONE BTN
    const doneBtn = document.createElement('button');
    doneBtn.classList.add('done-button');
    divElement.appendChild(doneBtn);
    doneBtn.innerHTML = `<i class="fas fa-check-circle"></i>`;
    listTodo.appendChild(divElement);

    // ADD BTN REMOVE
    const removeList = document.createElement('button');
    removeList.classList.add('remove-button');
    divElement.appendChild(removeList);
    removeList.innerHTML = `<i class="fas fa-minus-circle"></i>`;
    listTodo.appendChild(divElement);

    // REMOVE BTN  LISTENER
    removeList.addEventListener('click', function(){
        divElement.remove();
    });

    // DONE BTN LISTENER
    doneBtn.addEventListener('click', function(){
        // liElement.style.textDecoration = 'line-through';
        // liElement.style.opacity = '0.5';
        // liElement.style.background = 'lightgreen';

        liElement.classList.toggle('active')
    });

    // SETELAH BERHASIL MENAMBAH DAFTAR MAKA VALUE INPUT AKAN KOSONG KEMBALI
    userInput.value = '';
    // JIKA INPUT KOSONG MAKA BUTTON MATI
    if (userInput.value == ''){
        btnInput.disabled = true;
    }else{
        btnInput.disabled = false;
    }

    // BUTTON MENGHAPUS SEMUA LIST
    const btnClearAll = document.querySelector('.footer button');
    // MENGHAPUS SEMUA LIST
    btnClearAll.addEventListener('click', function(){
        divElement.remove();
        listNumber.innerHTML = 0;
    });

    // MENGHITUNG BANYAK LIST
    const jumlahList = document.querySelectorAll('.list-todo .list');
    const listNumber = document.querySelector('.footer span');
    
    listNumber.innerHTML = jumlahList.length;
});

    



