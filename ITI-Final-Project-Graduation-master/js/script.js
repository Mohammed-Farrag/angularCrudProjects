dselect(document.querySelector('#skills'),{
    search:true
})

let range = document.getElementById('fund-range');
let fundMin = document.getElementById('fund-min');
console.log(range.value)

range.addEventListener('change', (e) => {
    fundMin.innerHTML = e.target.value 

})

