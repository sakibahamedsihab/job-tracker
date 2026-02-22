const totalEl = getById('total');
const interviewEl = getById('interview');
const rejectedEl = getById('rejected');
const jobEl = getById('jobs');

const allNavBtns = document.querySelectorAll('#all-nav-btns button');
const allCards = document.querySelectorAll('#all-card-container .info-card')


// TAB FILTER FUNCTION
function tabFilter() {

}

// CALCULATE COUNT FUNCTION
function calculateCount(){
    
}

allCards.forEach((card) => {
    const interviewBtn = card.querySelector('.interview-btn');
    const rejectedBtn = card.querySelector('.rejected-btn');
    const deleteBtn = card.querySelector('.delete-btn');
    const state = card.querySelector('.state');

    interviewBtn.addEventListener('click', function() {
        card.setAttribute('data-type', 'interview');
        state.classList.remove('border', 'border-red-800', 'text-red-800', 'bg-red-100')
        state.classList.add('border', 'border-green-800', 'text-green-800', 'bg-green-100');
        state.textContent = 'Interview';   
        
        tabFilter();
        calculateCount();
    })

    rejectedBtn.addEventListener('click', function() {
        card.setAttribute('data-type', 'rejected');
        state.classList.remove('border', 'border-green-800', 'text-green-800', 'bg-green-100');
        state.classList.add('border', 'border-red-800', 'text-red-800', 'bg-red-100')
        state.textContent = 'Rejected';

        tabFilter();
        calculateCount();
    })

    deleteBtn.addEventListener('click', function() {
        card.remove();
        tabFilter();
        calculateCount();
    })
})
