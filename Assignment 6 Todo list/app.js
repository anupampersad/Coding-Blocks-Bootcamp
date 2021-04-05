const task_text = document.getElementById('task_text');
const add_btn = document.getElementById('add_btn');
const list = document.getElementById('list');
const clear = document.getElementById('clear')

let delete_buttons = document.getElementsByClassName('left');
let edit_buttons = document.getElementsByClassName('right');

// Adding an element to the list
add_btn.addEventListener('click', function (e) {
    const todoText = task_text.value;
    if(todoText==''){
        alert('Type Something');
        return
    }
    const li = document.createElement('li');
    li.innerHTML = `<i class="fas fa-trash left"></i><i class="fas fa-check check"></i><div style="display: inline-block;">${todoText}</div><i class="far fa-edit right"></i>`;
    // console.log(li);
    list.append(li);
    task_text.value = ''

})

// Deleting the note from the list
list.addEventListener('click', function (e) {

    if (e.target.classList.contains('left')) {
        e.target.parentNode.remove()

    }
})

// Edit Note
list.addEventListener('click', function (e) {

    if (e.target.classList.contains('right')) {
        const edit_field =
            `<i class="fas fa-trash left"></i>
            <i class="fas fa-check check"></i>
        <div style="display: inline-block;">
            <input type='text' class='edit_input'>
        </div>
        <button style="float: right;" class="edit_submit"> Change </button>`;
        e.target.parentNode.innerHTML = edit_field;

        // const new_text = e.target.parentNode.querySelector('.edit_input').value


        list.addEventListener('click', function (e2) {

            if (e2.target.classList.contains('edit_submit')) {
                new_text = e2.target.parentNode.querySelector('.edit_input').value;

                if(new_text==''){
                    alert('Type Something');
                    return
                }

                e2.target.parentNode.innerHTML = `<i class="fas fa-trash left"></i>
                                                  <i class="fas fa-check check"></i>
                                                  <div style="display: inline-block;">${new_text}</div>
                                                  <i class="far fa-edit right"></i>`;

            }



        })

    }

})


// Element is Checked with toggle
list.addEventListener('click', function (e) {

    if (e.target.classList.contains('check')) {
        e.target.parentElement.querySelector('div').classList.toggle('checked_done')
        

    }
})


// Clear
clear.addEventListener('click', function (e) {

    if (window.confirm("'Clear the Entire TODO list'")){
        list.innerHTML=''
    }
    
})

