// mengambil element html
const input = document.querySelector('.inputlist input');
const btnInput = document.querySelector('.inputlist button');
const todoList = document.querySelector('.list .todolist');
const clearAllBtn = document.querySelector('.footer button');


input.onkeyup = () =>{
    // menyimpan value input ke variable
    let userData = input.value;
    // jika input kosong maka pointer tidak dapat di click
    if (userData.trim() != 0){
        // mengaktifkan button
        btnInput.classList.add('active');
    }else{
        // menonoktifkan button
        btnInput.classList.remove('active');
    }
};

showTask();

// jika user menekan tombol tambah
btnInput.addEventListener('click', function(){
    // menyimpan value input ke variable
    let userData = input.value;
    // menambahkan inputan ke local storage
    let getLocalStorage = localStorage.getItem('New Todo');
    // jika local storage = null
    if (getLocalStorage == null){
        // buat array kosong
        listArr = [];
    }else{
        // jika tidak rubah json string ke dalam objek
        listArr = JSON.parse(getLocalStorage);
    }
    // memasukan value ke dalam array
    listArr.push(userData);
    // merubah objek ke json string
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    // memanggil function showtaks
    showTask();
    btnInput.classList.remove('active');
});

// function menambahkan list li
function showTask(){
    // menambahkan inputan ke local storage
    let getLocalStorage = localStorage.getItem('New Todo');
    if (getLocalStorage == null){
        // buat array kosong
        listArr = [];
    }else{
        // jika tidak rubah json string ke dalam objek
        listArr = JSON.parse(getLocalStorage);
    }

    if (listArr.length > 0){
        clearAllBtn.classList.add('active');
    }else{
        clearAllBtn.classList.remove('active');
    }

    // menyeleksi peding num
    const pedingNum = document.querySelector('.pedingNum');
    // mengubah nomor peding num sesuai dengan jumlah list
    pedingNum.textContent = listArr.length;
    // buat string untuk element li
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element}
        <div class="btn">
            <span class="edit"><i class="fa fa-edit"></i></span>
            <span onclick='deleteTask(${index})' class="remove"><i class="fa fa-remove"></i></span>
            <span class="done"><i class="fa fa-check"></i></span>
        </div>
        </li>`
    });
    console.log(newLiTag);
    // menambahkan element li ke dalam element ul
    todoList.innerHTML = newLiTag;
    // ketika sudah memasukan list maka text di dalam box hilang
    input.value = '';
};

// function menghapus list lis
function deleteTask(index){
    // menambahkan inputan ke local storage
    let getLocalStorage = localStorage.getItem('New Todo');
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    // setelah menghapus li akan di update kembali
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    // memanggil function showtaks
    showTask();
};

// function clear all list
clearAllBtn.addEventListener('click', function(){
    listArr = [];
    // setelah menghapus li akan di update kembali
    localStorage.setItem('New Todo', JSON.stringify(listArr));
    // memanggil function showtaks
    showTask();
});
